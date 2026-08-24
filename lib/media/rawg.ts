// ===== RAWG 类型 + API 常量（游戏数据源，已弃用） =====
// 历史：RAWG.io 免费层严重限流（429 频繁，wait 超 100s），2026-08-24 起 games 管道迁 Steam Store API（无需 key、无限流）。
// 现有类型保留供参考；实际数据由 scripts/fetch-steam.mjs 经 Steam 生成 generated-games.ts。
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
