// 构建期数据管道：Steam Store API 名称→appid 解析 + 元数据 + 封面本地化
// 替代严重限流的 RAWG（免费层 429 频繁）。Steam Store API 无需 key、无限流。
// 复用 rawg-resolve.json 缓存（21 条 RAWG 成功项保留 mood/url；其余走 Steam 补全）
// 生成 public/data/game-items.json + lib/media/generated-games.ts
import { execFileSync } from 'node:child_process';
import { writeFileSync as wf, mkdirSync as mk, existsSync as ex, readFileSync as rf } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CACHE_DIR = join(ROOT, 'cache');
const DATA_DIR = join(ROOT, 'public', 'data');
const IMG_DIR = join(ROOT, 'public', 'images', 'games');
const STORE_SEARCH = 'https://store.steampowered.com/api/storesearch/';
const APP_DETAILS = 'https://store.steampowered.com/api/appdetails';
const CC = 'us', L = 'en';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

mk(CACHE_DIR, { recursive: true });
mk(DATA_DIR, { recursive: true });
mk(IMG_DIR, { recursive: true });

// 复用 RAWG 解析缓存（键=原始种子名，值=最终 CurationItem 或 null）
const RESOLVE_CACHE = join(CACHE_DIR, 'rawg-resolve.json');
let resolved = ex(RESOLVE_CACHE) ? JSON.parse(rf(RESOLVE_CACHE, 'utf8')) : {};
const saveResolve = () => wf(RESOLVE_CACHE, JSON.stringify(resolved, null, 2));

const CURL = 'C:/Windows/system32/curl.exe';
function curlRaw(args, attempt = 1) {
  try {
    return execFileSync(CURL, args, { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024, timeout: 30000 });
  } catch (e) {
    if (attempt >= 4) throw new Error('curl fail');
    return curlRaw(args, attempt + 1);
  }
}

async function steamStoreSearch(name, attempt = 1) {
  await sleep(350); // 礼貌延迟；Steam 不限流但避免突发
  const url = `${STORE_SEARCH}?term=${encodeURIComponent(name)}&cc=${CC}&l=${L}`;
  let txt;
  try { txt = curlRaw(['-sL', '--max-time', '20', url], attempt); }
  catch (e) { if (attempt >= 3) throw e; await sleep(1500); return steamStoreSearch(name, attempt + 1); }
  try {
    const j = JSON.parse(txt);
    if (!j.items || j.items.length === 0) return null;
    return j.items[0]; // {id, name, tiny_image, metascore, platforms}
  } catch { if (attempt >= 3) throw new Error('storesearch bad json'); await sleep(1500); return steamStoreSearch(name, attempt + 1); }
}

async function steamAppDetails(appid, attempt = 1) {
  await sleep(350);
  const url = `${APP_DETAILS}?appids=${appid}&cc=${CC}&l=${L}`;
  let txt;
  try { txt = curlRaw(['-sL', '--max-time', '20', url], attempt); }
  catch (e) { if (attempt >= 3) throw e; await sleep(1500); return steamAppDetails(appid, attempt + 1); }
  try {
    const j = JSON.parse(txt);
    const entry = j[String(appid)];
    if (!entry || !entry.success) return null;
    return entry.data;
  } catch { if (attempt >= 3) throw new Error('appdetails bad json'); await sleep(1500); return steamAppDetails(appid, attempt + 1); }
}

async function fetchCover(url, id) {
  if (!url) return null;
  const file = join(IMG_DIR, `game-${id}.webp`);
  try {
    execFileSync(CURL, ['-sL', '--max-time', '25', '-o', file, url], { maxBuffer: 50 * 1024 * 1024, timeout: 35000 });
    return `/images/games/game-${id}.webp`;
  } catch { return null; }
}

// 把 Steam detailed_description 重构为策展短摘要（借真实信息，非原样复制）
function cleanRaw(raw) {
  return (raw || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#*_>`~]+/g, ' ')
    .replace(/\b(About the Game|Story|Plot|Overview|Description|Synopsis)\b[:.]?/gi, ' ')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
function toSynopsis(desc) {
  if (!desc || desc.length < 40) return null;
  const cleaned = cleanRaw(desc);
  if (cleaned.length < 40) return null;
  const sentences = cleaned.split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter(Boolean);
  let pick = sentences[0] || '';
  if (sentences[1] && pick.length < 130) pick += ' ' + sentences[1];
  pick = pick.replace(/\s+/g, ' ').trim();
  if (pick.length > 230) pick = pick.slice(0, 227).replace(/\s+\S*$/, '') + '…';
  return pick || null;
}

async function resolveGame(name, theme) {
  if (resolved[name] !== undefined) return resolved[name];
  // 1) storesearch 拿 appid + 封面 + metacritic
  const hit = await steamStoreSearch(name);
  if (!hit || !hit.id) { resolved[name] = null; saveResolve(); return null; }
  const appid = hit.id;
  // 2) appdetails 拿 genres/release/developers/platforms/description
  let det = null;
  try { det = await steamAppDetails(appid); } catch {}
  const genres = (det?.genres || []).map((g) => g.description);
  const release = det?.release_date?.date || '';
  const year = (release.match(/\b(19|20)\d{2}\b/) || [])[0] || '';
  const platforms = Object.entries(det?.platforms || {})
    .filter(([, v]) => v)
    .map(([k]) => k);
  const cover = await fetchCover(hit.tiny_image, appid);
  const synopsis = toSynopsis(det?.detailed_description);
  const item = {
    source: 'game',
    refId: String(appid),
    title: det?.name || hit.name,
    seedName: name,
    creator: (det?.developers || []).join(', ') || genres.join(', ') || '',
    year,
    tags: [...genres.map((g) => g.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')), ...platforms].slice(0, 8),
    moods: theme?.mood || [],
    cover: cover || null,
    url: `/games/${theme?.slug || ''}`,
    synopsis: synopsis || undefined,
  };
  resolved[name] = item; saveResolve(); return item;
}

// 并发控制（Steam 无限流，可适度并发）
async function mapLimit(tasks, limit, fn) {
  const results = []; let i = 0;
  async function worker() {
    while (i < tasks.length) {
      const idx = i++;
      results[idx] = await fn(tasks[idx], idx);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, tasks.length) }, () => worker()));
  return results;
}

async function main() {
  const { GAME_THEMES } = await import('../lib/media/seeds-games.ts');
  const seen = new Set();
  const dupNames = [];
  const themeOf = {};
  for (const theme of GAME_THEMES) {
    for (const name of theme.items) {
      if (seen.has(name)) continue;
      seen.add(name);
      dupNames.push(name);
      themeOf[name] = theme;
    }
  }
  const names = dupNames;
  console.log(`Game names to resolve: ${names.length} (cached: ${Object.keys(resolved).length})`);

  // 预填充（保留 RAWG 旧缓存的 mood/url）
  const itemsMap = {};
  for (const name of names) {
    const c = resolved[name];
    if (c && c !== null) {
      if (!c.moods || c.moods.length === 0) c.moods = themeOf[name]?.mood || [];
      if (!c.url) c.url = `/games/${themeOf[name]?.slug || ''}`;
      itemsMap[name] = c;
    }
  }
  const persist = () => {
    const items = Object.values(itemsMap);
    wf(join(DATA_DIR, 'game-items.json'), JSON.stringify(items, null, 2));
    const ts = `// AUTO-GENERATED by scripts/fetch-steam.mjs — do not edit\nimport type { CurationItem } from './musicbrainz';\nexport const GAME_ITEMS: CurationItem[] = ${JSON.stringify(items, null, 2)};\n`;
    wf(join(ROOT, 'lib', 'media', 'generated-games.ts'), ts);
  };
  persist();

  const pending = names.filter((n) => resolved[n] === undefined);
  console.log(`Pending via Steam: ${pending.length}`);
  await mapLimit(pending, 3, async (name) => {
    try {
      const item = await resolveGame(name, themeOf[name]);
      if (!item) { console.log(`  ✗ unresolved: ${name}`); return; }
      itemsMap[name] = item;
      persist();
      console.log(`  ✓ ${name} → ${item.title} (${item.year || '?'}) ${item.cover ? 'cover' : 'no-cover'}`);
    } catch (e) { console.log(`  ✗ error ${name}: ${e.message}`); }
  });

  const items = Object.values(itemsMap);
  persist();
  console.log(`\nDone. ${items.length} game items → generated-games.ts + game-items.json`);
}

main().catch((e) => { console.error(e); process.exit(1); });
