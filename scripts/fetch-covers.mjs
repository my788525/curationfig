// 封面回填脚本：从真实 CDN 下载封面 → 本地化转 WebP。
// 用法：node scripts/fetch-covers.mjs <channel>
//   channel: podcasts | animation | comics | tv
// 经系统代理（HTTPS_PROXY）下载，Apple/AniList/TVmaze CDN 已验证可达。
// 转换用 scripts/_to_webp.py（Pillow），最长边 200px / quality 82，与现有封面风格一致。
//
// 诚信/版权：
//  - podcasts 封面来自 Apple iTunes CDN（Apple API 允许展示 artwork）
//  - animation/comics 来自 AniList CDN（版权归制作方，本站评论性使用，About 页已标注）
//  - tv 来自 TVmaze
// 仅本地化已存在条目的真实封面 URL，不虚构。
import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const IMG_ROOT = join(ROOT, 'public', 'images');
const PY = 'C:/Users/pguoy/.workbuddy/binaries/python/envs/default/Scripts/python.exe';

const CH = process.argv[2];
if (!CH) { console.error('usage: node fetch-covers.mjs <podcasts|animation|comics|tv>'); process.exit(1); }

const GEN_FILE = join(ROOT, 'lib/media', `generated-${CH}.ts`);
const GEN_URL = pathToFileURL(GEN_FILE).href;
const EXPORT = { podcasts: 'PODCASTS_ITEMS', animation: 'ANIMATION_ITEMS', comics: 'COMICS_ITEMS', tv: 'TV_ITEMS' }[CH];
const IMG_DIR = join(IMG_ROOT, CH);
mkdirSync(IMG_DIR, { recursive: true });

// 真实封面 URL 解析器（按频道）
async function resolveCoverUrl(item) {
  if (CH === 'podcasts') {
    const term = encodeURIComponent(item.title);
    const r = await fetch(`https://itunes.apple.com/search?term=${term}&media=podcast&limit=1&country=US`, { headers: { Accept: 'application/json' } });
    if (!r.ok) return null;
    const j = await r.json();
    const m = j.results?.[0];
    if (!m?.artworkUrl100) return null;
    return m.artworkUrl100.replace('100x100', '600x600'); // 高清
  }
  if (CH === 'animation' || CH === 'comics') {
    // 用 AniList GraphQL 按标题查 coverImage
    const q = `query ($s: String) { Page(perPage: 1) { media(search: $s, type: ${CH === 'animation' ? 'ANIME' : 'MANGA'}) { coverImage { large } title { romaji english } } } }`;
    const r = await fetch('https://graphql.anilist.co', {
      method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ query: q, variables: { s: item.title } }),
    });
    if (!r.ok) return null;
    const j = await r.json();
    return j?.data?.Page?.media?.[0]?.coverImage?.large || null;
  }
  if (CH === 'tv') {
    // TVmaze 按 IMDb ID（refId 形如 tt0141842）lookup 拿 original image
    const imdb = (item.refId || '').replace(/^tt/, '').trim();
    if (!imdb) return null;
    const r = await fetch(`https://api.tvmaze.com/lookup/shows?imdb=tt${imdb}`, { headers: { Accept: 'application/json' } });
    if (!r.ok) return null;
    const j = await r.json();
    return j?.image?.original || null;
  }
  return null;
}

function toWebp(srcJpg, outWebp) {
  execFileSync(PY, [join(ROOT, 'scripts', '_to_webp.py'), srcJpg, outWebp], { stdio: 'pipe' });
}

async function main() {
  const mod = await import(GEN_URL);
  const arr = mod[EXPORT];
  if (!Array.isArray(arr)) throw new Error(`no export ${EXPORT}`);
  let done = 0, skip = 0, fail = 0;
  for (const it of arr) {
    if (it.cover && it.cover.trim() && existsSync(join(ROOT, it.cover.replace(/^\//, '')))) { skip++; continue; }
    let url = null;
    try { url = await resolveCoverUrl(it); } catch (e) { /* ignore */ }
    if (!url) { console.log(`  [no-url] ${it.title}`); fail++; await sleep(200); continue; }
    const slug = (it.refId || it.title).replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();
    const jpg = join(IMG_DIR, `${slug}.jpg`);
    const webp = join(IMG_DIR, `${slug}.webp`);
    try {
      const buf = await download(url);
      writeFileSync(jpg, buf);
      toWebp(jpg, webp);
      it.cover = `/images/${CH}/${slug}.webp`;
      done++;
      console.log(`  [ok] ${it.title} -> ${it.cover}`);
    } catch (e) {
      console.log(`  [dl-fail] ${it.title}: ${e.message}`);
      fail++;
    }
    await sleep(CH === 'podcasts' ? 350 : 500);
  }
  // 回写 generated 文件（仅 cover 字段）
  const src = readFileSync(GEN_FILE, 'utf8');
  const lines = src.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/refId"?:\s*"([^"]+)"/);
    if (!m) continue;
    const it = arr.find((x) => x.refId === m[1]);
    if (it && it.cover) {
      lines[i] = lines[i].replace(/"?cover"?:\s*(null|"[^"]*")/, `cover: "${it.cover}"`);
    }
  }
  writeFileSync(GEN_FILE, lines.join('\n'));
  console.log(`\n== ${CH}: done=${done} skip=${skip} fail=${fail} ==`);
}

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }
async function download(url) {
  const r = await fetch(url, { headers: { Accept: 'image/*' } });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return Buffer.from(await r.arrayBuffer());
}

main().catch((e) => { console.error('FATAL', e); process.exit(1); });
