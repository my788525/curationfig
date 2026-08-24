// ===== 风格 / 流派定义小卡片（策展站独有知识，API 完全拿不到） =====
// 解释一个风格「是什么、代表哪些叙事/听感/玩法特征」，帮助用户做选择。
// 仅当专题 tag 命中这里的定义时才在专题页渲染（避免无关堆砌）。
export type StyleDef = {
  tag: string; // 对应 CurationTheme.tags 中的风格 slug
  label: string; // 人类可读风格名
  blurb: string; // 一段解释：这是什么、代表哪些特征（策展口吻，API 没有）
};

export const STYLE_GLOSSARY: StyleDef[] = [
  {
    tag: 'noir',
    label: 'Noir',
    blurb:
      'Not just "dark crime" — noir is a moral weather system. Rain on the window, a decision made at 2am that can\'t be unmade, lighting that hides more than it shows. We reach for it when we want the world to feel slippery and the ending to be earned, not tidy.',
  },
  {
    tag: 'scifi',
    label: 'Science Fiction',
    blurb:
      'Sci-fi here means ideas wearing a costume. The spaceship or the lab is a lens for something human — loneliness, control, what counts as alive. We favor the speculative that lingers as a question, not the spectacle that answers itself with an explosion.',
  },
  {
    tag: 'cozy',
    label: 'Cozy',
    blurb:
      'Cozy is a pacing decision, not a genre. Low stakes by design, warmth as the point. A farming loop, a soft record, a gentle series you can leave on. We include it for the nights when "nothing happens and that\'s perfect" is exactly the relief you came for.',
  },
  {
    tag: 'atmospheric',
    label: 'Atmospheric',
    blurb:
      'Atmosphere-first work trusts the room over the plot. The texture — a drone, a fogged frame, a wind sound — does the emotional work. These picks reward leaving your phone in another room and letting the mood arrive on its own schedule.',
  },
  {
    tag: 'auteur',
    label: 'Auteur',
    blurb:
      'A director\'s fingerprints are everywhere: a recurring shot, a signature restraint, a worldview you\'d recognize with the sound off. We curate auteur work for the argument a single sensibility makes across a whole film, not for any one scene.',
  },
  {
    tag: 'artfilm',
    label: 'Art Cinema',
    blurb:
      'Art cinema trades the three-act地图 for patience. Long takes, ambiguous cuts, faith that the viewer will sit with discomfort. These are the picks for when you want to be changed a little, not merely entertained.',
  },
  {
    tag: 'prestige',
    label: 'Prestige',
    blurb:
      'Prestige TV/film is the carefully lit, expensively acted, "you should watch this" tier — but we only keep the entries where the craft serves the feeling, not just the résumé. Quality you can feel, not just admire.',
  },
  {
    tag: 'lofi',
    label: 'Lo-fi',
    blurb:
      'Lo-fi is music built for the corner of your attention, not the center. Soft drums, tape hiss, melodies that loop without demanding resolution. We use it as a backdrop for thinking, studying, or just lowering the day\'s volume.',
  },
  {
    tag: 'instrumental',
    label: 'Instrumental',
    blurb:
      'No lyric to hijack your language centers. Instrumental picks free up the part of your brain that words usually occupy — which is why they show up on our focus and wind-down lists more than anywhere else.',
  },
  {
    tag: 'minimal',
    label: 'Minimal',
    blurb:
      'Minimal strips until only the load-bearing parts remain — a single chord, a single room, a single loop. We curate it for the clarity that arrives when nothing is padding the silence.',
  },
  {
    tag: 'soulslike',
    label: 'Soulslike',
    blurb:
      'A design philosophy more than a genre: die, learn, adapt, respect the world\'s rules. Obscure lore told through environment, combat that punishes panic. We include it for players who want a game that treats them as an adult.',
  },
  {
    tag: 'rpg',
    label: 'Role-Playing',
    blurb:
      'RPG is about consequence. Choices that stick, a character who becomes someone by the ending. We favor the entries where the system serves the story, not the grind.',
  },
  {
    tag: 'sandbox',
    label: 'Sandbox',
    blurb:
      'A world handed to you with the tutorial\'s training wheels off. Sandbox picks reward curiosity over checklists — you decide what the game is about, and the best ones hand you a universe, not a rail.',
  },
  {
    tag: 'survival',
    label: 'Survival',
    blurb:
      'Survival games make scarcity into tension. Resource math, weather, the quiet dread of nightfall. We curate the ones where staying alive feels meaningful, not just busy.',
  },
  {
    tag: 'simulation',
    label: 'Simulation',
    blurb:
      'Sims ask you to inhabit a system — a farm, a city, a life. The pleasure is in the tending. We pick the ones that turn routine into a kind of meditation.',
  },
  {
    tag: 'psychological',
    label: 'Psychological',
    blurb:
      'Psychological work lives in the gap between what\'s shown and what\'s true. Unreliable, interior, willing to leave you unsure. We reach for it when a straightforward answer would feel like a cheat.',
  },
  {
    tag: 'thriller',
    label: 'Thriller',
    blurb:
      'A thriller is a clock. Tension as structure, the next beat always one breath away. We keep the ones where the stakes feel personal, not manufactured.',
  },
  {
    tag: 'mystery',
    label: 'Mystery',
    blurb:
      'Mystery is a promise: there\'s an answer, and you\'re invited to find it. We favor the slow-unspool kind, where the reveal recontextualizes everything, not the whodunit you solve in act two.',
  },
  {
    tag: 'indie',
    label: 'Indie',
    blurb:
      'Indie here means a smaller team betting on a point of view a studio wouldn\'t risk. Rougher edges, stranger bets, more heart per dollar. We curate it for the voice you can\'t get from a franchise.',
  },
  {
    tag: 'experimental',
    label: 'Experimental',
    blurb:
      'Experimental work breaks its own format on purpose — odd structures, found sound, rules that dissolve. We include it for the moments it reminds you that the medium still has unexplored rooms.',
  },
  {
    tag: 'classical',
    label: 'Classical',
    blurb:
      'Classical is the long game of composed music — structure you can return to forever and still hear something new. We use it for focus, for calm, and for the feeling of centuries of craft in the room.',
  },
  {
    tag: 'jazz',
    label: 'Jazz',
    blurb:
      'Jazz is conversation under pressure — players listening so hard they finish each other\'s sentences in real time. We reach for it when we want sophistication that still swings.',
  },
  {
    tag: 'hiphop',
    label: 'Hip-Hop',
    blurb:
      'Hip-hop as curation means the writing first: rhythm as argument, the city in the consonants. We keep the records that say something and still move.',
  },
  {
    tag: 'rock',
    label: 'Rock',
    blurb:
      'Rock in our lists is less a genre than an attitude — distortion as confession, the riff as a held opinion. We curate the entries where the noise means something.',
  },
  {
    tag: 'electronic',
    label: 'Electronic',
    blurb:
      'Electronic is the widest tent — from club tools to headphone worlds. We sort it by intent: does this make you move, or does it make you think? Both earn a place, rarely in the same list.',
  },
  {
    tag: 'acoustic',
    label: 'Acoustic',
    blurb:
      'Acoustic means wood and breath and no net. The performance is the point because you can hear the room. We use it for intimacy — the feeling of one person, one take, telling you the truth.',
  },
  {
    tag: 'drama',
    label: 'Drama',
    blurb:
      'Drama is the default mode of consequence: people, pressure, the thing left unsaid. We curate it for the performances that make you forget you\'re watching.',
  },
  {
    tag: 'comedy',
    label: 'Comedy',
    blurb:
      'Comedy we take seriously — timing is craft, and a good one is a small mercy. We keep the entries that earn the laugh instead of demanding it.',
  },
  {
    tag: 'historical',
    label: 'Historical',
    blurb:
      'Historical work is a time machine with an opinion. We favor the entries that use the past to say something true about now, not just to show the costumes.',
  },
  {
    tag: 'tender',
    label: 'Tender',
    blurb:
      'Tender is a register, not a genre — work that handles feeling with care instead of irony. We reach for it when the night calls for gentleness and nothing louder will do.',
  },
];

const BY_TAG = new Map(STYLE_GLOSSARY.map((s) => [s.tag, s]));

// 根据专题 tag 返回命中的风格定义（最多 limit 个，避免页面噪音）
export function stylesForTags(tags: string[], limit = 3): StyleDef[] {
  const out: StyleDef[] = [];
  for (const t of tags) {
    const s = BY_TAG.get(t);
    if (s) out.push(s);
    if (out.length >= limit) break;
  }
  return out;
}
