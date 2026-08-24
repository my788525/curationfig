// ===== MusicBrainz 类型 + API 常量 =====
// 数据源：MusicBrainz (CC0) + Cover Art Archive (CC)
// 限速：严格 1 req/sec/IP → 构建期单线程批处理 + 名称→MBID 解析缓存
// 策展条目由 seeds-music.ts 按"名称种子"定义，构建期解析为元数据+封面。

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
  cover?: string | null; // 本地化封面路径
  url: string; // 站内条目卡路径
  seedName?: string; // 种子名（用于专题页精确匹配，避免规范名变体导致漏匹配）
  why?: string; // 手写 editorial 推荐理由（可选；缺省时用 itemBlurb 程序化生成）
};

export const MB_API = 'https://musicbrainz.org/ws/2';
export const MB_USER_AGENT = (email: string) => `curationfig/1.0 (${email})`;
export const CAA_API = 'https://coverartarchive.org';
