// ===== RAWG 类型 + API 常量（游戏数据源，替代 IGDB） =====
// 数据源：RAWG.io（免费层 45k req/月，邮箱注册即发 key，无手机验证）
// 授权：署名即可（构建期拉取元数据 + 封面，不热链 → 本地化 WebP）
// 红线：只策展不攻略（不拉取数值/配装/速通数据）

export type RAWGGame = {
  id: number;
  slug: string;
  name: string;
  released?: string;
  rating?: number; // 0-5
  metacritic?: number | null;
  background_image?: string; // RAWG CDN 原图（构建期本地化）
  genres?: { id: number; name: string; slug: string }[];
  platforms?: { platform: { id: number; name: string; slug: string } }[];
};

export const RAWG_API = 'https://api.rawg.io/api';
// key 从 .env.local 读取（构建期注入，不进前端）
export const RAWG_KEY = process.env.RAWG_API_KEY || '';
export const RAWG_ATTR = 'Data sourced from RAWG.io (https://rawg.io) — attribution required.';
