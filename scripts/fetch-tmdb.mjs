// 构建期数据管道：TMDB 名称→id 解析 + 元数据 + 海报本地化（film + tv 合并）
// 使用 curl 子进程（稳定走 HTTP 代理环境变量）
// 生成 public/data/film-items.json + public/data/tv-items.json + lib/media/generated-film.ts + lib/media/generated-tv.ts
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
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

mk(CACHE_DIR, { recursive: true });
mk(DATA_DIR, { recursive: true });
mk(IMG_FILM, { recursive: true });
mk(IMG_TV, { recursive: true });

const RESOLVE_CACHE = join(CACHE_DIR, 'tmdb-resolve.json');
let resolved = ex(RESOLVE_CACHE) ? JSON.parse(rf(RESOLVE_CACHE, 'utf8')) : {};
const saveResolve = () => wf(RESOLVE_CACHE, JSON.stringify(resolved, null, 2));

if (!KEY) { console.error('TMDB_API_KEY not set.'); process.exit(1); }

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

async function tmdbGet(path, attempt = 1) {
  await sleep(800);
  const url = `${TMDB}${path}${path.includes('?') ? '&' : '?'}api_key=${KEY}`;
  let txt;
  try { txt = curlJson(url, attempt); }
  catch (e) { if (attempt >= 3) throw e; await sleep(2000); return tmdbGet(path, attempt + 1); }
  if (txt.includes('"status_code":25') || txt.includes('429') || txt.includes('Rate Limit')) {
    if (attempt >= 8) throw new Error('TMDB 429 persistent');
    const wait = 20000 + attempt * 10000;
    console.log(`  TMDB 429, wait ${Math.round(wait/1000)}s (attempt ${attempt})...`); await sleep(wait); return tmdbGet(path, attempt + 1);
  }
  try { return JSON.parse(txt); } catch { if (attempt >= 3) throw new Error('TMDB bad json'); await sleep(2000); return tmdbGet(path, attempt + 1); }
}

async function resolveTitle(name, kind) {
  const cacheKey = `${kind}:${name}`;
  if (resolved[cacheKey] !== undefined) return resolved[cacheKey];
  const q = encodeURIComponent(name);
  const endpoint = kind === 'film' ? '/search/movie' : '/search/tv';
  const data = await tmdbGet(`${endpoint}?query=${q}&page=1`);
  const r = data.results?.[0];
  if (!r) { resolved[cacheKey] = null; saveResolve(); return null; }
  const result = { id: r.id, title: kind === 'film' ? r.title : r.name, year: (r.release_date || r.first_air_date || '').slice(0, 4), poster: r.poster_path || null };
  resolved[cacheKey] = result; saveResolve(); return result;
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
  const { TV_THEMES } = await import('../lib/media/seeds-tv.ts');

  const tasks = [];
  for (const theme of [...FILM_THEMES, ...TV_THEMES]) {
    for (const name of theme.items) {
      tasks.push({ name, kind: theme.channel, slug: theme.slug });
    }
  }
  console.log(`TMDB names to resolve: ${tasks.length} (cached: ${Object.keys(resolved).length})`);

  const itemsMap = {};
  await mapLimit(tasks, 2, async ({ name, kind, slug }) => {
    try {
      const r = await resolveTitle(name, kind);
      if (!r) { console.log(`  ✗ unresolved: ${name} [${kind}]`); return; }
      const cover = await fetchPoster(r.poster, r.id, kind);
      const key = `${kind}:${name}`;
      itemsMap[key] = {
        source: kind, refId: String(r.id), title: r.title, seedName: name,
        creator: '', year: r.year || '',
        tags: [kind], cover: cover || null, url: `/${kind}/${slug}/`,
      };
      console.log(`  ✓ ${name} → ${r.title} (${r.year || '?'}) ${cover ? 'cover' : 'no-cover'}`);
    } catch (e) { console.log(`  ✗ error ${name}: ${e.message}`); }
  });

  const filmItems = Object.values(itemsMap).filter((i) => i.source === 'film');
  const tvItems = Object.values(itemsMap).filter((i) => i.source === 'tv');

  wf(join(DATA_DIR, 'film-items.json'), JSON.stringify(filmItems, null, 2));
  wf(join(DATA_DIR, 'tv-items.json'), JSON.stringify(tvItems, null, 2));
  const tsFilm = `// AUTO-GENERATED by scripts/fetch-tmdb.mjs — do not edit\nimport type { CurationItem } from './musicbrainz';\nexport const FILM_ITEMS: CurationItem[] = ${JSON.stringify(filmItems, null, 2)};\n`;
  const tsTv = `// AUTO-GENERATED by scripts/fetch-tmdb.mjs — do not edit\nimport type { CurationItem } from './musicbrainz';\nexport const TV_ITEMS: CurationItem[] = ${JSON.stringify(tvItems, null, 2)};\n`;
  wf(join(ROOT, 'lib', 'media', 'generated-film.ts'), tsFilm);
  wf(join(ROOT, 'lib', 'media', 'generated-tv.ts'), tsTv);
  console.log(`\nDone. ${filmItems.length} film + ${tvItems.length} tv items → generated-film.ts + generated-tv.ts`);
}

main().catch((e) => { console.error(e); process.exit(1); });
