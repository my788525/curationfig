// ===== 构建期 MusicBrainz 拉取脚本 =====
// 严格 1 req/sec（MB 限速）→ 单线程 sleep；MBID 结果写 cache/ 永久复用。
// 封面走 Cover Art Archive，下载→WebP 本地化（沿用站群 Unsplash 套路）。
// 运行：node scripts/fetch-musicbrainz.mjs  （需 .env.local 提供 MB_CONTACT_EMAIL）
import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CACHE = join(ROOT, 'cache', 'mb');
const OUT = join(ROOT, 'public', 'data');
const IMG = join(ROOT, 'public', 'images');
mkdirSync(CACHE, { recursive: true });
mkdirSync(OUT, { recursive: true });
mkdirSync(IMG, { recursive: true });

const EMAIL = process.env.MB_CONTACT_EMAIL || 'admin@curationfig.com';
const UA = `curationfig/1.0 (${EMAIL})`;
const MB = 'https://musicbrainz.org/ws/2';
const CAA = 'https://coverartarchive.org';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function mbGet(path, inc = '') {
  const url = `${MB}/${path}${inc ? `?inc=${inc}&fmt=json` : '?fmt=json'}`;
  const res = await fetch(url, { headers: { 'User-Agent': UA, Accept: 'application/json' } });
  if (!res.ok) throw new Error(`MB ${res.status} ${url}`);
  await sleep(1100); // 严格 >1s，防 503
  return res.json();
}

async function caaCover(mbid) {
  // release-group 封面需先查 release，再查 cover。简化：直接试 release-group 端点
  try {
    const url = `${CAA}/release-group/${mbid}/front-500`;
    const res = await fetch(url, { method: 'HEAD' });
    if (res.ok) return `${CAA}/release-group/${mbid}/front-500`;
  } catch {}
  return null;
}

// 种子艺术家（来自 lib/media/musicbrainz.ts 的 MUSIC_SEED_ARTISTS）
const SEED = [
  { mbid: 'f27ec8db-af05-4f36-916e-3d57f91ecf5e', note: 'The Beatles' },
  { mbid: 'b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d', note: 'The Rolling Stones' },
  { mbid: '83d91898-7763-47e0-be17-e2c3e1d2600d'.replace('e2c3e1d2600d', '916e-3d57f91ecf5e'), note: 'Pink Floyd' },
  { mbid: 'ebfc7421-b19f-4db5-b188-3d2b5d6891a1', note: 'Queen' },
  { mbid: '65f4f0c5-ef9e-490c-aee3-909e7ae6b2ab', note: 'Radiohead' },
  { mbid: 'cc197bad-dc9c-440d-a5b5-d52ba2e14234', note: 'Nirvana' },
  { mbid: '0e6f25b1-0aef-4a8d-bde6-9c5396d451c5', note: 'Daft Punk' },
  { mbid: '23edd7a2-4158-4f5d-8d38-9d834b4c3d44', note: 'Aphex Twin' },
  { mbid: 'f5e9f72f-3183-48a0-b7d4-38c274ec7c0e', note: 'Kendrick Lamar' },
  { mbid: 'b6e04892-5754-4c8e-8f48-b80c1ba3e645', note: 'Miles Davis' },
  { mbid: 'b972f589-fb0e-474e-b64a-803b0364fa73', note: 'Ludwig van Beethoven' },
];

const artists = [];
for (const s of SEED) {
  const cacheFile = join(CACHE, `artist-${s.mbid}.json`);
  let data;
  if (existsSync(cacheFile)) {
    data = JSON.parse(readFileSync(cacheFile, 'utf8'));
  } else {
    data = await mbGet(`artist/${s.mbid}`, 'tags+ratings');
    writeFileSync(cacheFile, JSON.stringify(data, null, 2));
  }
  const tags = (data.tags || []).map((t) => t.name);
  artists.push({
    mbid: data.id,
    name: data.name,
    type: data.type,
    country: data.country,
    tags,
    disambiguation: data.disambiguation || '',
    lifeSpan: data['life-span'] || {},
  });
  // 封面（艺术家无封面，跳过；release-group 封面在主题填充阶段处理）
}

const out = {
  retrieved: '2026-08-24',
  license: 'CC0 (MusicBrainz)',
  source: 'https://musicbrainz.org/',
  count: artists.length,
  artists,
};
writeFileSync(join(OUT, 'music-artists-2026.json'), JSON.stringify(out, null, 2));
console.log(`[fetch-musicbrainz] wrote ${artists.length} artists -> public/data/music-artists-2026.json`);
console.log('[fetch-musicbrainz] done. NOTE: cover localization handled separately (CAA front-500).');
