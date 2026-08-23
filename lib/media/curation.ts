// ===== 策展专题类型 + 个性化生成器逻辑（跨源统一） =====
// L4 抗 AIO 武器：输入偏好 → 输出定制清单（用户必须进站，AI 无法直接摘）
import type { CurationItem } from './musicbrainz';

export type Channel = 'music' | 'game' | 'film' | 'tv';

export type CurationTheme = {
  slug: string;
  channel: Channel;
  title: string;
  // editorial 主观逻辑——这是 AI 摘不了的核心价值（护城河）
  thesis: string; // "为什么这些该放一起"
  intro: string;
  tags: string[]; // 用于生成器匹配
  // 关联的策展条目（名称种子，构建期由数据源解析为元数据）
  items: string[];
  mood?: string[]; // 用于歌单/清单生成器匹配（氛围/场景）
};

// ===== 个性化生成器（纯函数，无后端，client 组件调用） =====
export type GeneratorInput = {
  mood?: string;
  decade?: string;
  genre?: string;
  excludeTags?: string[];
};

export function generateList(items: CurationItem[], input: GeneratorInput): CurationItem[] {
  const scored = items.map((it) => {
    let score = 0;
    const tags = (it.tags || []).map((t) => t.toLowerCase());
    if (input.mood && tags.includes(input.mood)) score += 3;
    if (input.genre && tags.includes(input.genre)) score += 2;
    if (input.decade && it.year && it.year.startsWith(input.decade.slice(0, 3))) score += 1;
    if (input.excludeTags?.some((e) => tags.includes(e.toLowerCase()))) score -= 5;
    return { it, score };
  });
  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 20)
    .map((s) => s.it);
}

// ===== 音乐策展专题（50 条，editorial 定义，条目名种子构建期解析） =====
import { MUSIC_THEMES } from './seeds-music';
import { GAME_THEMES } from './seeds-games';

export { MUSIC_THEMES, GAME_THEMES };

// 合并生成器候选池（当前首发 music；game 上线后并入）
export const ALL_THEMES: CurationTheme[] = [...MUSIC_THEMES, ...GAME_THEMES];

export const THEME_TARGET = 50; // 每频道目标
