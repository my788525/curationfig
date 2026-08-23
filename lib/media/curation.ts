// ===== 策展专题类型 + 个性化生成器逻辑（跨源统一） =====
// L4 抗 AIO 武器：输入偏好 → 输出定制清单（用户必须进站，AI 无法直接摘）
import type { CurationItem } from './musicbrainz';

export type CurationTheme = {
  slug: string;
  channel: 'music' | 'game' | 'film' | 'tv';
  title: string;
  // editorial 主观逻辑——这是 AI 摘不了的核心价值
  thesis: string; // "为什么这些该放一起"
  intro: string;
  tags: string[]; // 用于生成器匹配
  // 关联的策展条目 refId（构建期由数据源填充元数据）
  itemRefs: string[];
  mood?: string[]; // 用于歌单生成器匹配（氛围/场景）
};

// ===== 歌单生成器（client 组件调用的纯函数，无后端） =====
export type PlaylistInput = {
  mood: string; // relaxed / focused / energetic / melancholy / party
  decade?: string; // 1970s ... 2020s
  genre?: string; // rock / electronic / jazz / hiphop / classical
  excludeTags?: string[];
};

// 简单评分匹配：mood/decade/genre 命中 tags 加分，exclude 减分
export function generatePlaylist(
  items: CurationItem[],
  input: PlaylistInput
): CurationItem[] {
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

// ===== 首批 50 策展专题（音乐频道首发，editorial 定义） =====
// 每个专题自带 thesis（主观策展逻辑），这是护城河。
export const MUSIC_THEMES: CurationTheme[] = [
  {
    slug: 'late-night-focus-lofi',
    channel: 'music',
    title: 'Late-Night Focus: Lo-Fi & Ambient',
    thesis:
      'These records share one job — to disappear. We picked albums engineered for background concentration, where texture beats melody and nothing demands your attention.',
    intro:
      'A curated descent into instrumental calm. Perfect for 1am deadlines and empty rooms.',
    tags: ['ambient', 'lofi', 'electronic', 'focused'],
    mood: ['focused', 'relaxed'],
    itemRefs: [], // 构建期由 MUSIC_SEED 填充
  },
  {
    slug: 'british-indie-90s',
    channel: 'music',
    title: 'The 90s British Indie Wave',
    thesis:
      'Not Britpop-as-headline, but the quieter guitar bands that made melancholy sound like sunshine. A lineage from shoegaze to kitchen-sink romance.',
    intro: 'Baggy trousers, reverbed guitars, and a specific kind of northern sadness.',
    tags: ['indie', 'rock', '1990s', 'british'],
    mood: ['melancholy', 'relaxed'],
    itemRefs: [],
  },
  {
    slug: 'cosmic-jazz',
    channel: 'music',
    title: 'Cosmic Jazz: From Blue Note to the Stars',
    thesis:
      'Jazz that left the club and went orbital. We trace the spiritual, modal, and free strands that treated improvisation as propulsion.',
    intro: 'Modal scales, open skies, and the long solo as a vehicle.',
    tags: ['jazz', '1970s', 'instrumental'],
    mood: ['focused', 'relaxed'],
    itemRefs: [],
  },
  {
    slug: 'hiphop-storytelling',
    channel: 'music',
    title: 'Hip-Hop as Novel: The Storytellers',
    thesis:
      'Concept albums and narrative verses where the bar is the sentence. We favor the writers who built worlds over the ones who filled hooks.',
    intro: 'Concrete imagery, recurring characters, and the album as a book.',
    tags: ['hiphop', '2010s', 'lyrical'],
    mood: ['energetic'],
    itemRefs: [],
  },
  {
    slug: 'classical-window-weather',
    channel: 'music',
    title: 'Classical for a Rainy Window',
    thesis:
      'Romantic-era piano and string works chosen for weather, not canon. The point is the room you are sitting in, not the conservatory.',
    intro: 'Slow movements, minor keys, and the sound of water on glass.',
    tags: ['classical', 'piano', 'romantic'],
    mood: ['melancholy', 'relaxed'],
    itemRefs: [],
  },
];

// 占位：后续补足至 50 专题（其余 45 个按同类 editorial 模板扩展）
export const MUSIC_THEME_COUNT_TARGET = 50;
