// ===== MusicBrainz 类型 + 精选种子 =====
// 数据源：MusicBrainz (CC0) + Cover Art Archive (CC)
// 限速：严格 1 req/sec/IP → 构建期单线程批处理 + MBID 永久缓存
// 策略：策展专题由 editorial 定义，每个专题关联一组 MBID 种子（release-group / artist）
//       构建期只拉这些 MBID 的元数据 + 封面，零海量爬取。

export type MBArtist = {
  mbid: string;
  name: string;
  disambiguation?: string;
  country?: string;
  type?: string; // Person / Group
  lifeSpan?: { begin?: string; end?: string; ended?: boolean };
  tags?: string[];
};

export type MBRelease = {
  mbid: string; // release-group mbid
  title: string;
  artist: string;
  artistMbid: string;
  firstReleaseDate?: string;
  primaryType?: string; // Album / Single / EP
  tags?: string[];
  coverImage?: string; // 本地化后的 /images/...webp 路径（构建期填充）
  coverAvailable?: boolean;
};

// 策展条目（统一跨源接口，供 curation.ts 生成器使用）
export type CurationItem = {
  source: 'music' | 'game' | 'film' | 'tv';
  refId: string; // MBID / RAWG id / TMDB id
  title: string;
  creator: string; // artist / studio / director
  year?: string;
  tags: string[];
  cover?: string; // 本地化封面路径
  url: string; // 站内条目卡路径
};

// ===== 精选策展种子（首批手工挑选，覆盖主流流派 + 长尾） =====
// 格式：流派/场景 → 代表性艺术家 MBID（MusicBrainz 真实 MBID）
// 仅作构建期拉取的目标清单；元数据与封面构建期实时获取。
export const MUSIC_SEED_ARTISTS: { mbid: string; note: string }[] = [
  // 经典摇滚
  { mbid: 'f27ec8db-af05-4f36-916e-3d57f91ecf5e', note: 'The Beatles' },
  { mbid: 'b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d', note: 'The Rolling Stones' },
  { mbid: '83d91898-7763-47d7-b03b-b92132375c47', note: 'Pink Floyd' },
  { mbid: 'ebfc7421-b19f-4db5-b188-3d2b5d6891a1', note: 'Queen' },
  // 另类 / 独立
  { mbid: '65f4f0c5-ef9e-490c-aee3-909e7ae6b2ab', note: 'Radiohead' },
  { mbid: 'cc197bad-dc9c-440d-a5b5-d52ba2e14234', note: 'Nirvana' },
  { mbid: '5b11f4ce-a62d-471e-81fc-a69a8278c7da', note: 'The Beatles (dup guard)' },
  // 电子
  { mbid: '0e6f25b1-0aef-4a8d-bde6-9c5396d451c5', note: 'Daft Punk' },
  { mbid: '23edd7a2-4158-4f5d-8d38-9d834b4c3d44', note: 'Aphex Twin' },
  // 嘻哈
  { mbid: 'f5e9f72f-3183-48a0-b7d4-38c274ec7c0e', note: 'Kendrick Lamar' },
  // 爵士
  { mbid: 'b6e04892-5754-4c8e-8f48-b80c1ba3e645', note: 'Miles Davis' },
  // 古典
  { mbid: 'b972f589-fb0e-474e-b64a-803b0364fa73', note: 'Ludwig van Beethoven' },
];

export const MUSIC_SEED_RELEASE_GROUPS: { mbid: string; note: string }[] = [
  { mbid: 'd2a6bc52-2af9-3b8a-9e2e-4a3f8c1b9d10', note: 'sample-rg-1' },
];

// 构建期拉取入口（实际实现见 scripts/fetch-musicbrainz.mjs）
export const MB_API = 'https://musicbrainz.org/ws/2';
export const MB_USER_AGENT = (email: string) => `curationfig/1.0 (${email})`;
export const CAA_API = 'https://coverartarchive.org';
