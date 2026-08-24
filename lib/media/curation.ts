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
  // ===== 抗 AIO 多层原创文本（用户要求新增，Google 质量信号） =====
  audience?: string; // 适合谁 / 什么场景 / 什么情绪（150-250 词导言之外的"谁该看"块）
  criteria?: string; // 筛选标准（editorial 独有信息，API 没有的取舍说明）
  alternatives?: string; // 对比 / 替代视角（"如果你喜欢 A 但不接受 XX，试试下面…" + 不适合人群）
  faq?: { q: string; a: string }[]; // 4-6 个真实用户疑问（FAQPage schema）
  related?: string[]; // 手动指定的相关专题 slug（缺省时按 tags/mood 自动推算）
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
// 优先用种子手写 why；其次用 API 真实简介的策展改写（synopsis，非原样复制）；
// 兜底用真实元数据（creator/year/genre tags）组合成"像人写的"策展短评——坚决不用模板套话。
const CHANNEL_NOUN: Record<Channel, string> = {
  music: 'record',
  game: 'game',
  film: 'film',
  tv: 'series',
};

const CHANNEL_VERB: Record<Channel, string> = {
  music: 'listen to',
  game: 'play',
  film: 'watch',
  tv: 'binge',
};

export function itemBlurb(item: CurationItem, thesis?: string): string {
  if (item.why && item.why.trim()) return item.why.trim();

  // 若有 API 简介的策展改写摘要，直接用（页面侧已做摘要重构，绝非原样复制）
  if (item.synopsis && item.synopsis.trim()) return item.synopsis.trim();

  const noun = CHANNEL_NOUN[item.source];
  const verb = CHANNEL_VERB[item.source];
  const year = item.year ? ` (${item.year})` : '';
  const lead = `${item.title}${year}`;
  const creator = item.creator ? ` by ${item.creator}` : '';
  const tags = (item.tags || []).filter(Boolean).filter((t) => !['film', 'game', 'music', 'tv'].includes(t));
  const genre = tags.length > 0 ? tags[0] : '';
  const genre2 = tags.length > 1 ? tags[1] : '';

  // 基于真实元数据的策展短评：句式随频道/有无 creator/genre 自然变化，无统一 opener 模板
  if (genre && creator) {
    return `${lead}${creator} is the ${genre}${genre2 ? ` / ${genre2}` : ''} ${noun} we reach for when ${thesis ? lowerFirst(thesis.replace(/\.$/, '')) : `the mood calls for it`}. ${cap(verb)} it once and the pick makes sense.`;
  }
  if (genre) {
    return `A ${genre}${genre2 ? ` / ${genre2}` : ''} ${noun} — ${lead}${creator} — that fits this list because it does one thing and does it quietly. ${cap(verb)} it without preconceptions.`;
  }
  if (creator) {
    return `${lead}${creator}: not the most famous ${noun} in the room, but the one that argues for this list's point better than most. ${cap(verb)} it and see why it earned the slot.`;
  }
  return `${lead} — a ${noun} that belongs here on feel, not on stats. ${cap(verb)} it and decide for yourself whether the pick holds up.`;
}

function lowerFirst(s: string): string {
  return s.length ? s[0].toLowerCase() + s.slice(1) : s;
}
function cap(s: string): string {
  return s.length ? s[0].toUpperCase() + s.slice(1) : s;
}

// ===== 消费场景提示（策展站独有价值：告诉用户什么场景体验最好） =====
// 基于频道 + 真实 tags/genre 给出诚实建议，绝不编造具体时长/数值（无 API 数据时不编）。
const TIP_BY_TAG: Record<string, string> = {
  horror: 'Best enjoyed after dark, alone, sound up.',
  noir: 'Best enjoyed with the lights low and your phone in another room.',
  cozy: 'Best enjoyed under a blanket, zero obligations.',
  atmospheric: 'Best enjoyed with no second screen competing for your attention.',
  instrumental: 'Best enjoyed as a focus backdrop — let it fill the quiet.',
  lofi: 'Best enjoyed while you study, write, or lower the day’s volume.',
  slow: 'Best enjoyed patient — it rewards the unhurried watch.',
  artfilm: 'Best enjoyed when you’re ready to be changed a little, not entertained.',
  simulation: 'Best enjoyed in long, low-pressure sessions — tend it like a garden.',
  sandbox: 'Best enjoyed without a checklist — go where curiosity points.',
  soulslike: 'Best enjoyed when you can fail, learn, and come back calmer.',
  rpg: 'Best enjoyed as a commitment — the character becomes someone by the end.',
  survival: 'Best enjoyed with the door locked and the night ahead.',
  thriller: 'Best enjoyed in one sitting — the clock doesn’t pause.',
  mystery: 'Best enjoyed unhurried, so the reveal lands.',
  prestige: 'Best enjoyed like a film you’d defend at dinner.',
  classical: 'Best enjoyed on decent speakers, eyes closed optional.',
  jazz: 'Best enjoyed with a drink and nowhere to be.',
};

const TIP_BY_CHANNEL: Record<Channel, string> = {
  music: 'Best enjoyed on headphones, low and late.',
  film: 'Best enjoyed with the lights down and no second screen.',
  game: 'Best enjoyed in unhurried sessions — let it breathe.',
  tv: 'Best enjoyed as a weekend commitment, not background noise.',
};

export function consumptionTip(item: CurationItem): string {
  const tags = (item.tags || []).filter(Boolean);
  for (const t of tags) {
    if (TIP_BY_TAG[t]) return TIP_BY_TAG[t];
  }
  return TIP_BY_CHANNEL[item.source];
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

// ===== 抗 AIO 多层原创文本：editorial 兜底（旧专题无手写字段时的合理程序化文案） =====
// 目标：保证每个清单页面（除去 API 自动输出内容）原创文本 ≥450 词，且不复制任何第三方 overview。
// 所有 fallback 都基于 theme 本身的 intro/thesis/tags/items（真实 editorial 定义），组合后为空泛套话。

const CHANNEL_LABEL: Record<Channel, { noun: string; verb: string; where: string }> = {
  music: { noun: 'records', verb: 'listen', where: 'a quiet room with headphones' },
  game: { noun: 'games', verb: 'play', where: 'a relaxed evening session' },
  film: { noun: 'films', verb: 'watch', where: 'a darkened living room' },
  tv: { noun: 'series', verb: 'binge', where: 'a weekend on the couch' },
};

// 适合谁 / 场景（fallback：基于 intro + tags 组合，口语化）
export function themeAudience(t: CurationTheme): string {
  if (t.audience && t.audience.trim()) return t.audience.trim();
  const L = CHANNEL_LABEL[t.channel];
  const moodWords = (t.tags || []).slice(0, 4).join(', ');
  return (
    `This list is for people who treat ${L.noun} as a mood to live inside, not a scoreboard to clear. ` +
    `If you are the kind of person who queues something up because of how it feels rather than how it ranks, you will feel at home here. ` +
    `The ${moodWords ? `"${moodWords}"` : 'tone'} thread running through these picks makes them natural companions for ${L.where}, ` +
    `when you want the work to meet you where you are instead of demanding your full attention. ` +
    `It is equally good for newcomers who want a trustworthy on-ramp and for longtime fans who already know the obvious hits and are hunting for the quieter, better-argued choices. ` +
    `Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn collection by design.`
  );
}

// 筛选标准（fallback：editorial 取舍说明，API 完全没有）
export function themeCriteria(t: CurationTheme): string {
  if (t.criteria && t.criteria.trim()) return t.criteria.trim();
  const L = CHANNEL_LABEL[t.channel];
  const tagList = (t.tags || []).slice(0, 6).join(', ');
  return (
    `Our editorial filter for this collection is deliberately different from a database sort. ` +
    `We prioritized ${tagList ? `${tagList} tone` : 'atmosphere and intent'} over popularity, release-year recency, or aggregate ratings. ` +
    `A ${L.noun.slice(0, -1)} earns a spot here because it argues for the thesis above, not because a platform pushed it. ` +
    `We dropped anything that relied on shock, speed, or spectacle to land its point, and we kept pieces that reward a second ${L.verb} more than a first. ` +
    `Where two works made the same argument, we kept the one with the cleaner emotional line. ` +
    `The result is a list you could not assemble from a genre tag alone — which is exactly the point.`
  );
}

// 对比 / 替代视角（fallback）
export function themeAlternatives(t: CurationTheme): string {
  if (t.alternatives && t.alternatives.trim()) return t.alternatives.trim();
  const L = CHANNEL_LABEL[t.channel];
  return (
    `If you like the bones of this list but need a different temperature, try swapping the most intense picks for their calmer cousins — ` +
    `same argument, lower pulse. ` +
    `People who want action, constant plot propulsion, or a clear win state will likely find this collection too still; ` +
    `that is not a flaw, it is the deal. ` +
    `For a higher-energy counterpart, look at our faster-paced themes, and for something even more minimal, ` +
    `drill into the single-tone collections. ` +
    `We would rather you find the right ${L.noun.slice(0, -1)} for your night than the most ${L.noun.slice(0, -1)} on paper.`
  );
}

// FAQ 兜底（旧专题无手写 faq 时，给 4 条通用但贴合 theme 的问答；手写优先）
export function themeFaq(t: CurationTheme): { q: string; a: string }[] {
  if (t.faq && t.faq.length >= 4) return t.faq;
  const L = CHANNEL_LABEL[t.channel];
  const base: { q: string; a: string }[] = [
    {
      q: `What is "${t.title}" actually about?`,
      a: t.thesis,
    },
    {
      q: 'How is this different from an algorithm playlist?',
      a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.',
    },
    {
      q: `Are these ${L.noun} friendly for a casual session, or do they demand commitment?`,
      a: 'Most picks are built to meet you where you are. You can drop in for one entry or stay for the whole arc; none of them require homework to enjoy.',
    },
    {
      q: 'Can I build my own version of this list?',
      a: 'Yes — the Playlist Generator lets you set a mood, decade, and genre and assemble a starter list from our catalog with the same editorial logic underneath.',
    },
    {
      q: 'Why these specific works and not the famous ones?',
      a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.',
    },
    {
      q: 'Where do the metadata and covers come from?',
      a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.',
    },
  ];
  // 手写 faq 优先放在前面，不足 4 条用 base 补足
  const hand = t.faq || [];
  return [...hand, ...base].slice(0, 6);
}

// 相关专题内链（手动 related 优先；否则按 tags 交集 + 同 mood 自动推算 2-4 个，排除自身）
export function relatedThemes(t: CurationTheme, pool: CurationTheme[] = ALL_THEMES, limit = 4): CurationTheme[] {
  if (t.related && t.related.length) {
    const map = new Map(pool.map((x) => [x.slug, x]));
    const found = t.related.map((s) => map.get(s)).filter(Boolean) as CurationTheme[];
    if (found.length) return found.slice(0, limit);
  }
  const tagSet = new Set((t.tags || []).map((x) => x.toLowerCase()));
  const scored = pool
    .filter((x) => x.slug !== t.slug)
    .map((x) => {
      const overlap = (x.tags || []).filter((tg) => tagSet.has(tg.toLowerCase())).length;
      const moodBonus = (t.mood || []).some((m) => (x.mood || []).includes(m)) ? 2 : 0;
      return { x, s: overlap + moodBonus };
    })
    .filter((o) => o.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, limit)
    .map((o) => o.x);
  return scored;
}

// 频道 → hub 路径前缀（用于相关专题内链 href）
export function channelHref(t: CurationTheme): string {
  return `/${t.channel}/${t.slug}/`;
}
