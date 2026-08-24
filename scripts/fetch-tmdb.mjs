// 构建期数据管道：TMDB 名称→id 解析 + 元数据 + 海报本地化（film + tv 合并）
// 使用 curl 子进程（稳定走 HTTP 代理环境变量）
// 生成 public/data/film-items.json + public/data/tv-items.json + lib/media/generated-film.ts + lib/media/generated-tv.ts
//
// ⚠️ 2026-08-24 迁移说明：film 已迁 OMDb (scripts/fetch-omdb.mjs)，TV 已迁 TVmaze (scripts/fetch-tvmaze.mjs)。
// 本脚本仅保留作历史参考 / RAWG 限流解除后 games 续跑用（见 fetch-rawg.mjs）。
// 当前站点数据：film=OMDb, tv=TVmaze, music=MusicBrainz, games=RAWG(部分,限流中)。
import { execFileSync } from 'node:child_process';
import { writeFileSync as wf, mkdirSync as mk, existsSync as ex, readFileSync as rf } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CACHE_DIR = join(ROOT, 'cache');
const DATA_DIR = join(ROOT, 'public', 'data');
const IMG_FILM = join(ROOT, 'public', 'images', 'film');
const IMG_TV = join(ROOT, 'public', 'images', 'tv');
const TMDB = 'https://api.themoviedb.org/3';
const IMG = 'https://image.tmdb.org/t/p/w500';
const KEY = process.env.TMDB_API_KEY;
const V4 = process.env.TMDB_READ_TOKEN;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

mk(CACHE_DIR, { recursive: true });
mk(DATA_DIR, { recursive: true });
mk(IMG_FILM, { recursive: true });
mk(IMG_TV, { recursive: true });

const RESOLVE_CACHE = join(CACHE_DIR, 'tmdb-resolve.json');
let resolved = ex(RESOLVE_CACHE) ? JSON.parse(rf(RESOLVE_CACHE, 'utf8')) : {};
const saveResolve = () => wf(RESOLVE_CACHE, JSON.stringify(resolved, null, 2));

if (!KEY && !V4) { console.error('TMDB_API_KEY or TMDB_READ_TOKEN not set.'); process.exit(1); }

const CURL = 'C:/Windows/system32/curl.exe';
function curlJson(url, attempt = 1) {
  try {
    return execFileSync(CURL, ['-sL', '--max-time', '20', url], { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024, timeout: 30000 });
  } catch (e) {
    if (attempt >= 4) throw new Error('curl fail');
    return curlJson(url, attempt + 1);
  }
}
function curlBinary(url, file) {
  try { execFileSync(CURL, ['-sL', '--max-time', '25', '-o', file, url], { maxBuffer: 50 * 1024 * 1024, timeout: 35000 }); return true; }
  catch { return false; }
}

// 把 API overview 重构为策展口吻的短摘要（借用真实信息，非原样复制）
// 取首句 + 必要时第二句，截断 ~220 字符，去掉宣传腔，引导成"你/这部"的策展语气。
function cleanRaw(raw) {
  return (raw || '')
    .replace(/<[^>]+>/g, ' ')            // 去 HTML 标签
    .replace(/[#*_>`~]+/g, ' ')          // 去 Markdown 符号
    .replace(/\s+/g, ' ')
    .trim();
}

function toSynopsis(overview) {
  if (!overview || overview.length < 40) return null;
  const cleaned = cleanRaw(overview);
  if (cleaned.length < 40) return null;
  const sentences = cleaned
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
  let pick = sentences[0] || '';
  if (sentences[1] && pick.length < 130) pick += ' ' + sentences[1];
  pick = pick.replace(/\s+/g, ' ').trim();
  if (pick.length > 230) pick = pick.slice(0, 227).replace(/\s+\S*$/, '') + '…';
  return pick || null;
}

async function tmdbGet(path, attempt = 1) {
  await sleep(350); // v4 token 提速：800→350
  // v4 bearer 优先，否则退回 v3 api_key
  const url = V4
    ? `${TMDB}${path}${path.includes('?') ? '&' : '?'}`
    : `${TMDB}${path}${path.includes('?') ? '&' : '?'}api_key=${KEY}`;
  const auth = V4 ? ['-H', `Authorization: Bearer ${V4}`] : [];
  let txt;
  try {
    txt = execFileSync(CURL, ['-sL', '--max-time', '20', ...auth, url], { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024, timeout: 30000 });
  } catch (e) {
    if (attempt >= 4) throw e;
    await sleep(2000);
    return tmdbGet(path, attempt + 1);
  }
  if (txt.includes('"status_code":25') || txt.includes('429') || txt.includes('Rate Limit') || txt.includes('Unauthorized')) {
    if (attempt >= 8) throw new Error('TMDB 429 persistent');
    const wait = 12000 + attempt * 6000; // 退避缩短：20s+10s → 12s+6s
    console.log(`  TMDB 429, wait ${Math.round(wait/1000)}s (attempt ${attempt})...`); await sleep(wait); return tmdbGet(path, attempt + 1);
  }
  try { return JSON.parse(txt); } catch { if (attempt >= 3) throw new Error('TMDB bad json'); await sleep(2000); return tmdbGet(path, attempt + 1); }
}

async function resolveTitle(name, kind, slug, moods = []) {
  const cacheKey = `${kind}:${name}`;
  if (resolved[cacheKey] !== undefined) return resolved[cacheKey];
  const q = encodeURIComponent(name);
  const endpoint = kind === 'film' ? '/search/movie' : '/search/tv';
  const data = await tmdbGet(`${endpoint}?query=${q}&page=1`);
  const r = data.results?.[0];
  if (!r) { resolved[cacheKey] = null; saveResolve(); return null; }
  const title = kind === 'film' ? r.title : r.name;
  const year = (r.release_date || r.first_air_date || '').slice(0, 4);
  const cover = await fetchPoster(r.poster_path, r.id, kind);
  // 详情拉 overview（用于策展改写摘要；失败不阻断主流程）
  let synopsis = null;
  try {
    const det = await tmdbGet(`/${kind === 'film' ? 'movie' : 'tv'}/${r.id}?append_to_response=`);
    synopsis = toSynopsis(det.overview);
  } catch {}
  const item = {
    source: kind, refId: String(r.id), title, seedName: name,
    creator: '', year: year || '',
    tags: [kind], moods, cover: cover || null, url: `/${kind}/${slug}/`,
    synopsis: synopsis || undefined,
  };
  resolved[cacheKey] = item; saveResolve(); return item;
}

async function fetchPoster(posterPath, id, kind) {
  if (!posterPath) return null;
  const dir = kind === 'film' ? IMG_FILM : IMG_TV;
  const file = join(dir, `${kind}-${id}.webp`);
  return curlBinary(`${IMG}${posterPath}`, file) ? `/images/${kind}/${kind}-${id}.webp` : null;
}

async function mapLimit(tasks, limit, fn) {
  const results = [];
  let i = 0;
  async function worker() {
    while (i < tasks.length) {
      const idx = i++;
      results[idx] = await fn(tasks[idx], idx);
    }
  }
  const workers = Array.from({ length: Math.min(limit, tasks.length) }, () => worker());
  await Promise.all(workers);
  return results;
}

async function main() {
  const { FILM_THEMES } = await import('../lib/media/seeds-film.ts');

  const tasks = [];
  for (const theme of FILM_THEMES) {
    for (const name of theme.items) {
      tasks.push({ name, kind: 'film', slug: theme.slug, moods: theme.mood || [] });
    }
  }
  console.log(`TMDB (film only) names to resolve: ${tasks.length} (cached: ${Object.keys(resolved).length})`);

  // 预填充：已是 CurationItem（含 refId）的直接用；旧中间态删掉重跑
  const itemsMap = {};
  for (const { name, kind, slug, moods } of tasks) {
    const key = `${kind}:${name}`;
    const c = resolved[key];
    if (c && c !== null && c.refId) {
      if (!c.moods || c.moods.length === 0) c.moods = moods; // 回填 mood（旧缓存缺字段）
      itemsMap[key] = c;
    }
    else if (c && !c.refId) delete resolved[key];
  }
  const persist = () => {
    const all = Object.values(itemsMap);
    const filmItems = all.filter((i) => i.source === 'film');
    wf(join(DATA_DIR, 'film-items.json'), JSON.stringify(filmItems, null, 2));
    const tsFilm = `// AUTO-GENERATED by scripts/fetch-tmdb.mjs — do not edit\nimport type { CurationItem } from './musicbrainz';\nexport const FILM_ITEMS: CurationItem[] = ${JSON.stringify(filmItems, null, 2)};\n`;
    wf(join(ROOT, 'lib', 'media', 'generated-film.ts'), tsFilm);
  };
  persist(); // 先落盘已有数据

  // 串行 + 基础延迟（TMDB 免费层严格限速，v4 token 已提速）
  for (const { name, kind, slug, moods } of tasks) {
    const key = `${kind}:${name}`;
    if (resolved[key] !== undefined) continue;
    try {
      const item = await resolveTitle(name, kind, slug, moods);
      if (!item) { console.log(`  ✗ unresolved: ${name} [${kind}]`); continue; }
      itemsMap[key] = item;
      persist();
      console.log(`  ✓ ${name} → ${item.title} (${item.year || '?'}) ${item.cover ? 'cover' : 'no-cover'}`);
    } catch (e) { console.log(`  ✗ error ${name}: ${e.message}`); }
  }

  const all = Object.values(itemsMap);
  const filmItems = all.filter((i) => i.source === 'film');
  persist();
  console.log(`\nDone. ${filmItems.length} film items → generated-film.ts`);
}

main().catch((e) => { console.error(e); process.exit(1); });
