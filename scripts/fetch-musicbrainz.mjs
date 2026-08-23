// 构建期数据管道：MusicBrainz 名称→MBID 解析 + 元数据 + 封面本地化（并发版）
// 使用 curl 子进程（稳定走 HTTP 代理环境变量）
// 生成 public/data/music-items.json + lib/media/generated-music.ts
import { execFileSync } from 'node:child_process';
import { writeFileSync as wf, mkdirSync as mk, existsSync as ex, readFileSync as rf } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CACHE_DIR = join(ROOT, 'cache');
const DATA_DIR = join(ROOT, 'public', 'data');
const IMG_DIR = join(ROOT, 'public', 'images', 'music');
const MB = 'https://musicbrainz.org/ws/2';
const CAA = 'https://coverartarchive.org';
const UA = 'curationfig/1.0 (admin@curationfig.com)';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

mk(CACHE_DIR, { recursive: true });
mk(DATA_DIR, { recursive: true });
mk(IMG_DIR, { recursive: true });

const RESOLVE_CACHE = join(CACHE_DIR, 'mb-resolve.json');
let resolved = ex(RESOLVE_CACHE) ? JSON.parse(rf(RESOLVE_CACHE, 'utf8')) : {};
const saveResolve = () => wf(RESOLVE_CACHE, JSON.stringify(resolved, null, 2));

const CURL = 'C:/Windows/system32/curl.exe';
function curlJson(url, attempt = 1) {
  try {
    return execFileSync(CURL, ['-sL', '--max-time', '20', '-H', `User-Agent: ${UA}`, '-H', 'Accept: application/json', url], { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024, timeout: 30000 });
  } catch (e) {
    if (attempt >= 4) throw new Error('curl fail');
    return curlJson(url, attempt + 1);
  }
}

async function mbGet(url, attempt = 1) {
  await sleep(800);
  let txt;
  try { txt = curlJson(url, attempt); }
  catch (e) { if (attempt >= 3) throw e; await sleep(2000); return mbGet(url, attempt + 1); }
  if (txt.includes('currently busy') || txt.includes('"error"')) {
    if (attempt >= 5) throw new Error('MB busy persistent');
    await sleep(3000); return mbGet(url, attempt + 1);
  }
  try { return JSON.parse(txt); } catch { if (attempt >= 3) throw new Error('MB bad json'); await sleep(2000); return mbGet(url, attempt + 1); }
}

async function resolveReleaseGroup(name) {
  if (resolved[name] !== undefined) return resolved[name];
  const q = encodeURIComponent(name);
  const data = await mbGet(`${MB}/release-group/?query=release:${q}&fmt=json&limit=1`);
  const rg = data['release-groups']?.[0];
  if (!rg) { resolved[name] = null; saveResolve(); return null; }
  const result = { mbid: rg.id, title: rg.title, artist: rg['artist-credit']?.[0]?.name || '' };
  resolved[name] = result; saveResolve(); return result;
}

async function getRGDetail(mbid) {
  return mbGet(`${MB}/release-group/${mbid}/?inc=artists+tags&fmt=json`);
}

function curlBinary(url, file) {
  try { execFileSync(CURL, ['-sL', '--max-time', '25', '-o', file, url], { maxBuffer: 50 * 1024 * 1024, timeout: 35000 }); return true; }
  catch { return false; }
}

async function fetchCover(mbid) {
  const file = join(IMG_DIR, `music-${mbid.slice(0, 8)}.webp`);
  return curlBinary(`${CAA}/release-group/${mbid}/front-500`, file) ? `/images/music/music-${mbid.slice(0, 8)}.webp` : null;
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
  const { MUSIC_THEMES } = await import('../lib/media/seeds-music.ts');
  const names = [];
  const seen = new Set();
  const themeOf = {};
  for (const theme of MUSIC_THEMES) {
    for (const name of theme.items) {
      if (seen.has(name)) continue;
      seen.add(name);
      names.push(name);
      themeOf[name] = theme;
    }
  }
  console.log(`Music names to resolve: ${names.length} (cached: ${Object.keys(resolved).length})`);

  const itemsMap = {};
  await mapLimit(names, 2, async (name) => {
    const theme = themeOf[name];
    try {
      const rg = await resolveReleaseGroup(name);
      if (!rg) { console.log(`  ✗ unresolved: ${name}`); return; }
      const detail = await getRGDetail(rg.mbid);
      const year = detail['first-release-date']?.slice(0, 4) || '';
      const tags = (detail.tags || []).slice(0, 6).map((t) => t.name);
      const cover = await fetchCover(rg.mbid);
      itemsMap[name] = {
        source: 'music', refId: rg.mbid, title: detail.title || rg.title, seedName: name,
        creator: detail['artist-credit']?.[0]?.name || rg.artist, year,
        tags: tags.length ? tags : theme.tags, cover: cover || null, url: `/music/${theme.slug}`,
      };
      console.log(`  ✓ ${name} → ${detail.title} (${year}) ${cover ? 'cover' : 'no-cover'}`);
    } catch (e) { console.log(`  ✗ error ${name}: ${e.message}`); }
  });

  const items = Object.values(itemsMap);
  wf(join(DATA_DIR, 'music-items.json'), JSON.stringify(items, null, 2));
  const ts = `// AUTO-GENERATED by scripts/fetch-musicbrainz.mjs — do not edit\nimport type { CurationItem } from './musicbrainz';\nexport const MUSIC_ITEMS: CurationItem[] = ${JSON.stringify(items, null, 2)};\n`;
  wf(join(ROOT, 'lib', 'media', 'generated-music.ts'), ts);
  console.log(`\nDone. ${items.length} music items → generated-music.ts + music-items.json`);
}

main().catch((e) => { console.error(e); process.exit(1); });
