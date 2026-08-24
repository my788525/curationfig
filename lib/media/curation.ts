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
  // 跨频道情绪专题专用：口语化"为什么这四种媒介能串成一个情绪"的对比说明
  compare?: string;
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

// ===== 条目 editorial 解释（抗 AIO 武器：为什么推荐这条） =====
// 优先用种子手写 why；缺省时由真实元数据 + 专题 thesis 程序化派生 1-2 句解释。
// 真实信息（creator/year/tags）来自数据源，thesis 来自 editorial 定义——组合后非空泛。
const CHANNEL_NOUN: Record<Channel, string> = {
  music: 'record',
  game: 'game',
  film: 'film',
  tv: 'series',
};

export function itemBlurb(item: CurationItem, thesis?: string): string {
  if (item.why && item.why.trim()) return item.why.trim();

  const noun = CHANNEL_NOUN[item.source];
  const year = item.year ? ` (${item.year})` : '';
  const lead = `${item.title}${year} by ${item.creator}`;
  const tags = (item.tags || []).filter(Boolean);
  const tagPhrase =
    tags.length > 0
      ? tags.slice(0, 3).join(', ')
      : noun;

  const openers = [
    `A ${tagPhrase} ${noun} that earns its place`,
    `What makes this ${noun} worth your time`,
    `The case for this ${tagPhrase} ${noun}`,
    `Why this ${noun} belongs on the list`,
  ];
  const opener = openers[Math.abs(hashStr(item.refId)) % openers.length];

  let tail = '';
  if (thesis && thesis.trim()) {
    tail = ` — ${thesis.replace(/\.$/, '')}, and this entry is the clearest proof of that argument.`;
  } else {
    tail = ` — its ${tagPhrase} character is exactly what this curation is built to surface, not the stats a wiki already lists.`;
  }
  return `${opener}: ${lead}${tail}`;
}

function hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return h;
}

// ===== 策展专题（每频道 50 条，editorial 定义，条目名种子构建期解析） =====
import { MUSIC_THEMES } from './seeds-music';
import { GAME_THEMES } from './seeds-games';
import { FILM_THEMES } from './seeds-film';
import { TV_THEMES } from './seeds-tv';
import { MOOD_THEMES } from './seeds-moods';

export { MUSIC_THEMES, GAME_THEMES, FILM_THEMES, TV_THEMES, MOOD_THEMES };

// 合并生成器候选池（四个频道全部并入）
export const ALL_THEMES: CurationTheme[] = [
  ...MOOD_THEMES, // 情绪中枢放最前，作为"按情绪/氛围"定位的门面
  ...MUSIC_THEMES,
  ...GAME_THEMES,
  ...FILM_THEMES,
  ...TV_THEMES,
];

export const THEME_TARGET = 50; // 每频道目标
