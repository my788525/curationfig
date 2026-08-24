// 情绪中枢专题（cross-medium "Find media by mood & theme" 定位核心武器）
// 每个专题横跨 电影 / 剧集 / 游戏 / 音乐 四个频道，围绕同一种"情绪/氛围"组织。
// 条目名种子：能匹配到真实元数据的会显示封面（music/games 已有数据），
// film/tv 暂以经典名作种子占位，专题页会标注 pending —— 与现有架构一致。
// editorial 文案刻意口语化、像人写的推荐，而非数据库罗列 —— 这是抗 AIO 的核心价值。
import type { CurationTheme } from './curation';

export const MOOD_THEMES: CurationTheme[] = [
  {
    slug: 'lonely-tuesday',
    channel: 'music',
    title: 'The Lonely Tuesday',
    thesis:
      'Not heartbreak, not depression — just that specific 8pm emptiness when the dishes are done and nobody texted. We gathered the things that sit with you in it instead of trying to fix it.',
    intro:
      'A feeling, not a genre. Music for the quiet apartment, a film that understands silence, a game you play alone on purpose, and a series that keeps you company without demanding anything. For the Tuesday that lingers.',
    compare:
      'The trick with loneliness is most media tries to cheer you up. These don\'t. The album gives you a room to be alone in; the film proves the silence is survivable; the game hands you a small world to tend while the real one sleeps; the show is just there, warm in the background. Four different shapes of the same quiet.',
    tags: ['lonely', 'melancholy', 'quiet', 'intimate', 'night'],
    mood: ['melancholy', 'relaxed'],
    items: [
      'Unknown Pleasures', // music (real)
      'Good News', // music (real)
      'Clair de Lune', // music (real)
      'Tokyo Story', // film (seed)
      'Stalker', // film (real)
      'Night in the Woods', // game (real)
      'Spiritfarer', // game (real)
      'comfort-rewatch', // tv (seed slug-ish; resolved if present)
    ],
  },
  {
    slug: 'golden-hour-drive',
    channel: 'music',
    title: 'Golden-Hour Drive',
    thesis:
      'That window of light where everything looks like a memory you haven\'t had yet. We built a playlist and a queue of screens and worlds for the exact minute the sun goes orange.',
    intro:
      'Windows-down, no particular destination. A mixtape for the dashboard, a film that lives in warmth, a game with a horizon you can just ride toward, and a series that feels like summer vacation at 6pm. Pure endorphin, zero irony.',
    compare:
      'Happiness in media is usually frantic. This isn\'t. The record sets the tempo of the road; the film gives you the glow without the plot; the game lets you chase the sunset at your own speed; the show is the long evening that refuses to end. Same warmth, four doors into it.',
    tags: ['happy', 'warm', 'summer', 'drive', 'optimistic'],
    mood: ['energetic', 'relaxed'],
    items: [
      'Endless Summer', // music (real)
      'La Vie en rose', // music (real)
      'Getz / Gilberto', // music (real)
      'The Legend of Zelda: Tears of the Kingdom', // game (real)
      'A Short Hike', // game (real)
      'The Tree of Life', // film (real)
      'comfort-rewatch', // tv
      'cozy-mystery-tv', // tv
    ],
  },
  {
    slug: 'midnight-dread',
    channel: 'music',
    title: 'Midnight Dread',
    thesis:
      'The 1am fear that the walls are thinner than they should be. We leaned into it — the records that sound like a heartbeat in the dark, the films that trust your imagination over the monster, the games where you are the prey.',
    intro:
      'Not torture-porn horror. The slow, creeping kind. A soundtrack for the hallway you don\'t want to walk down, a film that implies the worst, a game that makes breathing a strategy, and a series that unravels while you pretend to be fine.',
    compare:
      'Dread is earned differently in each medium. The album is pure atmosphere — no plot to hide in. The film shows you just enough. The game makes you complicit, holding the controller while something hears you. The show stretches the unease across weeks so it lives with you. Together they\'re a full night of not-quite-safe.',
    tags: ['dark', 'tense', 'horror', 'night', 'atmosphere'],
    mood: ['melancholy'],
    items: [
      'Transilvanian Hunger', // music (real)
      'METAL BOX', // music (real)
      'Phaedra', // music (real)
      'Se7en', // film (real)
      'Mulholland Drive', // film (real)
      'Silent Hill', // game (real)
      'Amnesia', // game (real)
      'dark-comedy-tv', // tv
    ],
  },
  {
    slug: 'rainy-window',
    channel: 'music',
    title: 'Rain on the Window',
    thesis:
      'The cozy confinement of a storm you don\'t have to go out in. We collected the things that make being stuck inside feel like a privilege.',
    intro:
      'Tea, a blanket, and the weather doing the decorating. A record for the grey light, a film that loves a wet street, a game you build a home inside, and a series for the long afternoon that rain invented. Stay in. It\'s better here.',
    compare:
      'Rain is the great equalizer of mood — it works on every screen. The album is the sound of it; the film is the look of it; the game is the world you shelter inside; the show is the excuse to never check the time. Four ways to enjoy the fact that you\'re not leaving.',
    tags: ['cozy', 'rain', 'calm', 'autumn', 'indoors'],
    mood: ['relaxed', 'focused'],
    items: [
      'classical-rainy-window', // music seed (real albums underneath)
      'Kind of Blue', // music (real)
      'The Blue Notebooks', // music (real)
      'Stardew Valley', // game (real)
      'Animal Crossing', // game (real)
      'Chinatown', // film (real)
      'cozy-mystery-tv', // tv
      'comfort-rewatch', // tv
    ],
  },
  {
    slug: 'new-beginnings',
    channel: 'music',
    title: 'New Beginnings',
    thesis:
      'The specific hope of a first day — apartment, city, relationship, sobriety, semester. We picked the things that feel like the opening chord of a life you haven\'t ruined yet.',
    intro:
      'Optimism with a little fear in it, the honest kind. A record for the empty room with boxes, a film about the door that just opened, a game where you build from nothing, and a series about people becoming who they\'ll be. For the morning after the big move.',
    compare:
      'Beginnings are fragile, and each medium holds them differently. The album is the optimism; the film is the leap; the game is the literal building; the show is the slow proof that change is possible. They don\'t tell you it\'ll be easy — just that it started.',
    tags: ['hopeful', 'optimistic', 'fresh', 'uplifting', 'morning'],
    mood: ['energetic', 'relaxed'],
    items: [
      'good kid, m.A.A.d city', // music (real)
      'Section.80', // music (real)
      'To Pimp a Butterfly', // music (real)
      'Stardew Valley', // game (real)
      'Unpacking', // game (real)
      'Coming-of-Age (film)', // film seed
      'comfort-rewatch', // tv
      'limited-series-tight', // tv
    ],
  },
  {
    slug: 'focus-flow',
    channel: 'music',
    title: 'Deep Focus Flow',
    thesis:
      'The zone. Not background noise — foreground concentration. We chose the things engineered to disappear so your actual work can appear.',
    intro:
      'For the 3-hour sprint, the essay, the tax return you keep avoiding. A record that breathes instead of sings, a film you can half-watch while your hands move, a game with a repetitive loop that calms the lizard brain, and a show you\'ve seen so many times it\'s basically furniture. Get the thing done.',
    compare:
      'Focus media has one job: get out of the way. The album is the obvious tool. The film gives the eyes somewhere safe. The game offers a rhythmic task that quiets the urge to check your phone. The rewatched show is audio you already know. Four doors, same trance.',
    tags: ['focused', 'work', 'instrumental', 'calm', 'flow'],
    mood: ['focused'],
    items: [
      'Music for Airports', // music (real)
      'Selected Ambient Works 85-92', // music (real)
      'In a Silent Way', // music (real)
      'Tetris Effect', // game (placeholder seed)
      'Civilization', // game (real)
      'asmr-ish film', // film seed
      'comfort-rewatch', // tv
      'limited-series-tight', // tv
    ],
  },
  {
    slug: 'bittersweet-endings',
    channel: 'music',
    title: 'Bittersweet Endings',
    thesis:
      'The feeling of the last page, the last level, the credits you didn\'t want. We gathered the things that are sad and glad at the exact same time.',
    intro:
      'Not a cry, a full heart. A record that ends too soon, a film that earns its last shot, a game you finish and immediately miss, and a series finale that becomes part of you. For when "the end" is its own kind of gift.',
    compare:
      'Endings hit hardest when you\'ve lived in them, and each medium lets you live differently. The album closes a chapter in three minutes; the film lands one image; the game takes 60 hours to say goodbye; the show does it over a season you\'ll replay forever. Same ache, four lengths.',
    tags: ['tender', 'bittersweet', 'nostalgic', 'ending', 'emotional'],
    mood: ['melancholy', 'relaxed'],
    items: [
      'The Queen Is Dead', // music (real)
      'Loveless (Japanese Version)', // music (real)
      'Moonlight Sonata', // music (real)
      'Spiritfarer', // game (real)
      'What Remains', // game (real)
      'The Tree of Life', // film (real)
      'limited-series-tight', // tv
      'comfort-rewatch', // tv
    ],
  },
  {
    slug: 'adrenaline-night',
    channel: 'music',
    title: 'Adrenaline Night',
    thesis:
      'The thing you reach for when sitting still is impossible. We stacked the loud, the fast, and the dangerous — a soundtrack for the night you said yes to.',
    intro:
      'Heart rate up. A record that hits like a shot, a film that doesn\'t blink, a game where dying is the point, and a series that moves at a sprint. For the night that\'s supposed to end too late.',
    compare:
      'Adrenaline needs momentum, and each medium supplies it differently. The album is the chemical; the film is the set-piece; the game is the stake (you can actually lose); the show is the binge you can\'t pause. Four engines, one sleepless night.',
    tags: ['energetic', 'intense', 'exciting', 'loud', 'night'],
    mood: ['energetic'],
    items: [
      'Nightcall', // music (real)
      'Turbo Killer', // music (real)
      'Outland', // music (real)
      'DOOM Eternal', // game placeholder
      'Hades', // game (real)
      'Mad Max: Fury Road', // film placeholder
      'antihero-golden', // tv
      'dark-comedy-tv', // tv
    ],
  },
];
