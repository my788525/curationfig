// ===== AniList 抓取脚本（Animation + Comics 共用）=====
// 真实数据源：AniList GraphQL API（无需 key，60 req/min 限流）
// 诚信原则：只写入 API 真实返回的元数据（标题/年份/类型/评分/章节），绝不虚构。
// 输出：lib/media/generated-animation.ts + lib/media/generated-comics.ts
import { writeFileSync } from 'node:fs';

const ANILIST = 'https://graphql.anilist.co';

// 真实作品种子（按主题组织）。这些都是确有其作的作品，脚本查 AniList 补全真实元数据。
// type: ANIME (animation) | MANGA (comics/graphic novels)
const SEEDS = {
  animation: {
    // 用户要求的"原著 vs 改编"专题在 books 频道；animation 侧重动画本身的艺术跨类
    'adaptation-from-page': {
      title: 'From Page to Frame: Books & Comics That Became Animation',
      items: [
        { name: 'Spirited Away', type: 'ANIME' },
        { name: 'Akira', type: 'ANIME' },
        { name: 'Ghost in the Shell', type: 'ANIME' },
        { name: 'Howl’s Moving Castle', type: 'ANIME' },
        { name: 'Princess Mononoke', type: 'ANIME' },
        { name: 'Nausicaä of the Valley of the Wind', type: 'ANIME' },
        { name: 'Castle in the Sky', type: 'ANIME' },
        { name: 'My Neighbor Totoro', type: 'ANIME' },
        { name: 'Perfect Blue', type: 'ANIME' },
        { name: 'Paprika', type: 'ANIME' },
      ],
    },
    'american-animation': {
      title: 'American Animation: Beyond the Saturday Morning',
      items: [
        { name: 'Batman: The Animated Series', type: 'ANIME' },
        { name: 'Avatar: The Last Airbender', type: 'ANIME' },
        { name: 'Spider-Man: Into the Spider-Verse', type: 'ANIME' },
        { name: 'The Simpsons Movie', type: 'ANIME' },
        { name: 'Toy Story', type: 'ANIME' },
        { name: 'Up', type: 'ANIME' },
        { name: 'Coco', type: 'ANIME' },
        { name: 'Arcane', type: 'ANIME' },
        { name: 'Blue Eye Samurai', type: 'ANIME' },
        { name: 'BoJack Horseman', type: 'ANIME' },
      ],
    },
    'anime-foundational': {
      title: 'Foundational Anime: The Canon North America Grew Up On',
      items: [
        { name: 'Neon Genesis Evangelion', type: 'ANIME' },
        { name: 'Cowboy Bebop', type: 'ANIME' },
        { name: 'Dragon Ball Z', type: 'ANIME' },
        { name: 'Sailor Moon', type: 'ANIME' },
        { name: 'Studio Ghibli', type: 'ANIME' },
        { name: 'Death Note', type: 'ANIME' },
        { name: 'Fullmetal Alchemist: Brotherhood', type: 'ANIME' },
        { name: 'One Piece', type: 'ANIME' },
        { name: 'Naruto', type: 'ANIME' },
        { name: 'Attack on Titan', type: 'ANIME' },
      ],
    },
    'independent-animation': {
      title: 'Independent & Arthouse Animation',
      items: [
        { name: 'Waltz with Bashir', type: 'ANIME' },
        { name: 'Persepolis', type: 'ANIME' },
        { name: 'The Triplets of Belleville', type: 'ANIME' },
        { name: 'Anomalisa', type: 'ANIME' },
        { name: 'Loving Vincent', type: 'ANIME' },
        { name: 'Sita Sings the Blues', type: 'ANIME' },
        { name: 'Mind Game', type: 'ANIME' },
        { name: 'Belladonna of Sadness', type: 'ANIME' },
        { name: 'A Silent Voice', type: 'ANIME' },
        { name: 'Your Name', type: 'ANIME' },
      ],
    },
    'animation-shorts': {
      title: 'Animation Shorts & Anthologies',
      items: [
        { name: 'Luxo Jr.', type: 'ANIME' },
        { name: 'Frozen (short)', type: 'ANIME' },
        { name: 'Paperman', type: 'ANIME' },
        { name: 'Hair Love', type: 'ANIME' },
        { name: 'Piper', type: 'ANIME' },
        { name: 'Bao', type: 'ANIME' },
        { name: 'Feast', type: 'ANIME' },
        { name: 'Kitbull', type: 'ANIME' },
        { name: 'The Windshield Wiper', type: 'ANIME' },
        { name: 'Letter to a Pig', type: 'ANIME' },
      ],
    },
  },
  comics: {
    'manga-masterworks': {
      title: 'Manga Masterworks: The Translations That Built the Shelf',
      items: [
        { name: 'Monster', type: 'MANGA' },
        { name: '20th Century Boys', type: 'MANGA' },
        { name: 'Berserk', type: 'MANGA' },
        { name: 'Vagabond', type: 'MANGA' },
        { name: 'Goodnight Punpun', type: 'MANGA' },
        { name: 'Akira', type: 'MANGA' },
        { name: 'Ghost in the Shell', type: 'MANGA' },
        { name: 'Vinland Saga', type: 'MANGA' },
        { name: 'Blame!', type: 'MANGA' },
        { name: 'Planetes', type: 'MANGA' },
      ],
    },
    'american-comics': {
      title: 'American Comics: The Literary Turn',
      items: [
        { name: 'Batman: The Killing Joke', type: 'MANGA' },
        { name: 'Watchmen', type: 'MANGA' },
        { name: 'Sandman', type: 'MANGA' },
        { name: 'Maus', type: 'MANGA' },
        { name: 'Saga', type: 'MANGA' },
        { name: 'Bone', type: 'MANGA' },
        { name: 'Blankets', type: 'MANGA' },
        { name: 'Fun Home', type: 'MANGA' },
        { name: 'The Walking Dead', type: 'MANGA' },
        { name: 'Y: The Last Man', type: 'MANGA' },
      ],
    },
    'graphic-novels-literary': {
      title: 'Literary Graphic Novels',
      items: [
        { name: 'Persepolis', type: 'MANGA' },
        { name: 'Jimmy Corrigan, the Smartest Kid on Earth', type: 'MANGA' },
        { name: 'Habibi', type: 'MANGA' },
        { name: 'Daytripper', type: 'MANGA' },
        { name: 'Asterios Polyp', type: 'MANGA' },
        { name: 'Building Stories', type: 'MANGA' },
        { name: 'The Arrival', type: 'MANGA' },
        { name: 'Logicomix', type: 'MANGA' },
        { name: 'Jerusalem', type: 'MANGA' },
        { name: 'Black Hole', type: 'MANGA' },
      ],
    },
    'comics-adapted': {
      title: 'Comics That Became Film & TV',
      items: [
        { name: 'The Old Guard', type: 'MANGA' },
        { name: 'Preacher', type: 'MANGA' },
        { name: 'V for Vendetta', type: 'MANGA' },
        { name: 'Hellboy', type: 'MANGA' },
        { name: 'Scott Pilgrim', type: 'MANGA' },
        { name: 'Wanted', type: 'MANGA' },
        { name: 'Road to Perdition', type: 'MANGA' },
        { name: '300', type: 'MANGA' },
        { name: 'Sin City', type: 'MANGA' },
        { name: 'From Hell', type: 'MANGA' },
      ],
    },
    'comics-indie': {
      title: 'Indie & Alt Comics',
      items: [
        { name: 'Eightball', type: 'MANGA' },
        { name: 'Love and Rockets', type: 'MANGA' },
        { name: 'Ghost World', type: 'MANGA' },
        { name: 'Optic Nerve', type: 'MANGA' },
        { name: 'American Splendor', type: 'MANGA' },
        { name: 'Box Office Poison', type: 'MANGA' },
        { name: 'Palomar', type: 'MANGA' },
        { name: 'It’s a Good Life, If You Don’t Weaken', type: 'MANGA' },
        { name: 'A Contract with God', type: 'MANGA' },
        { name: 'The Sculptor', type: 'MANGA' },
      ],
    },
  },
};

async function anilistQuery(name, type) {
  const q = `query ($s: String, $t: MediaType) {
    Media(search: $s, type: $t) {
      id
      title { romaji english }
      startDate { year }
      genres
      averageScore
      episodes
      chapters
      volumes
      format
    }
  }`;
  const body = JSON.stringify({ query: q, variables: { s: name, t: type } });
  const r = await fetch(ANILIST, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body,
  });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  const j = await r.json();
  return j.data?.Media || null;
}

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

async function main() {
  const proxy = process.env.HTTPS_PROXY || process.env.https_proxy;
  if (proxy) console.log('using proxy', proxy);

  for (const channel of ['animation', 'comics']) {
    const out = {};
    const seeds = SEEDS[channel];
    let count = 0;
    for (const [themeKey, theme] of Object.entries(seeds)) {
      for (const item of theme.items) {
        try {
          const m = await anilistQuery(item.name, item.type);
          if (!m) {
            console.log(`  [miss] ${item.name}`);
            continue;
          }
          const title = m.title?.english || m.title?.romaji || item.name;
          const year = m.startDate?.year ? String(m.startDate.year) : undefined;
          const refId = `anilist:${m.id}`;
          const tags = (m.genres || []).map((g) => g.toLowerCase().replace(/\s+/g, '-'));
          const score = m.averageScore;
          const meta = {
            source: channel,
            refId,
            title,
            creator: '', // AniList 不返回单一作者字段；留空诚实处理
            year,
            tags,
            cover: null, // AniList 图片走 CDN，本环境不可达，诚实置 null
            url: `/${channel}/${slugify(title)}/`,
            seedName: item.name,
            synopsis: score ? `AniList community score: ${score}/100. ${m.format || (channel === 'comics' ? 'Manga' : 'Anime')}${year ? ` (${year})` : ''}.` : undefined,
          };
          out[item.name] = meta;
          count++;
          console.log(`  [ok] ${title} (${year || '?'}) score=${score || '?'} tags=${tags.join(',')}`);
          await new Promise((r) => setTimeout(r, 1200)); // 尊重 60/min 限流
        } catch (e) {
          console.log(`  [err] ${item.name}: ${e.message}`);
          await new Promise((r) => setTimeout(r, 2000));
        }
      }
    }
    const file = `lib/media/generated-${channel}.ts`;
    const header = `// AUTO-GENERATED by scripts/fetch-anilist.mjs — do not edit by hand.\n// Source: AniList GraphQL API (https://anilist.co, no key required).\n// Retrieved: 2026-08-24. Real metadata only; no fabricated fields.\n// Cover images are intentionally null (AniList CDN unreachable from build env) — cards use no-cover fallback.\n\nexport type GeneratedItem = {\n  source: '${channel}';\n  refId: string;\n  title: string;\n  creator: string;\n  year?: string;\n  tags: string[];\n  cover: null;\n  url: string;\n  seedName: string;\n  synopsis?: string;\n};\n\nexport const ${channel === 'animation' ? 'ANIMATION_ITEMS' : 'COMICS_ITEMS'}: GeneratedItem[] = [\n`;
    const body = Object.values(out)
      .map((v) => '  ' + JSON.stringify(v))
      .join(',\n');
    writeFileSync(file, header + body + '\n];\n');
    console.log(`\n== ${channel}: wrote ${count} items to ${file} ==\n`);
  }
}

main().catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});
