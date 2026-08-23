// ===== TMDB 类型 + API 常量（影视数据源） =====
// 数据源：The Movie Database (TMDB) — 影视元数据 + 海报
// 授权：TMDB API 免费层（需 API key + Read Access Token）；商业用途需 $149/月商业授权（影视批次已确认）
// 红线：只策展不剧透、不评分表（不拉取 user score 排行、不写剧情泄露）
// 注意：TMDB 搜索/详情走 API v3（key），图片走 image.tmdb.org CDN（构建期本地化 WebP）

export type TMDBRef = {
  id: number;
  title: string; // film: title / tv: name
  year?: string;
  overview?: string;
  poster?: string; // image.tmdb.org 原图路径（/t/p/w500/xxx.jpg）
  genres?: { id: number; name: string }[];
};

export const TMDB_API = 'https://api.themoviedb.org/3';
export const TMDB_IMG = 'https://image.tmdb.org/t/p/w500';
// key / token 从 .env.local 读取（构建期注入，不进前端）
export const TMDB_KEY = process.env.TMDB_API_KEY || '';
export const TMDB_TOKEN = process.env.TMDB_READ_TOKEN || '';
export const TMDB_ATTR =
  'This product uses the TMDB API but is not endorsed or certified by TMDB. Data © TMDB.';
