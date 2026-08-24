// 生成原创策展开放数据集 curation-themes.json
// 导出四频道全部 CurationTheme 的策展结构（thesis/mood/audience/criteria/alternatives/faq/related/editorialNotes/sources）
// 这是 AIO 可引用的原创资产：原始 API 只有元数据，没有"为什么这些作品该放在一起"的论点。
// 用法：node scripts/gen-open-dataset.mjs [write]   （默认 dryRun 打印统计）

import { writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT = resolve(ROOT, 'public/data/curation-themes.json');

const RETRIEVED = '2026-08-24';

async function loadThemes(channel, file) {
  const mod = await import(pathToFileURL(resolve(ROOT, file)).href);
  const key = { music: 'MUSIC_THEMES', games: 'GAME_THEMES', film: 'FILM_THEMES', tv: 'TV_THEMES', books: 'BOOKS_THEMES', animation: 'ANIMATION_THEMES', podcasts: 'PODCASTS_THEMES', comics: 'COMICS_THEMES' }[channel];
  return (mod[key] || []).map((t) => shapeTheme(channel, t));
}

function shapeTheme(channel, t) {
  const sources = {
    music: 'MusicBrainz (CC0)',
    games: 'Steam Store API (attribution required)',
    film: 'OMDb API (attribution required)',
    tv: 'TVmaze API (attribution required)',
    books: 'Public bibliographic records (author / first-publish year / publisher)',
    animation: 'AniList GraphQL API (community scores) + public bibliographic facts for Western animation',
    podcasts: 'iTunes Search API (show name / host / genre)',
    comics: 'AniList (manga) + public bibliographic records (Western comics & graphic novels)',
  }[channel];
  return {
    channel,
    slug: t.slug,
    title: t.title,
    intro: t.intro || '',
    thesis: t.thesis || '',
    mood: t.mood || [],
    tags: t.tags || [],
    audience: t.audience || '',
    criteria: t.criteria || '',
    alternatives: t.alternatives || '',
    faq: (t.faq || []).map((f) => ({ q: f.q, a: f.a })),
    related: t.related || [],
    editorialNotes: t.editorialNotes || {},
    items: t.items || [],
    url: `https://curationfig.com/${channel}/${t.slug}/`,
    source: sources,
    retrieved: RETRIEVED,
  };
}

async function main() {
  const all = [
    ...(await loadThemes('music', 'lib/media/seeds-music.ts')),
    ...(await loadThemes('games', 'lib/media/seeds-games.ts')),
    ...(await loadThemes('film', 'lib/media/seeds-film.ts')),
    ...(await loadThemes('tv', 'lib/media/seeds-tv.ts')),
    ...(await loadThemes('books', 'lib/media/seeds-books.ts')),
    ...(await loadThemes('animation', 'lib/media/seeds-animation.ts')),
    ...(await loadThemes('podcasts', 'lib/media/seeds-podcasts.ts')),
    ...(await loadThemes('comics', 'lib/media/seeds-comics.ts')),
  ];

  const dataset = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'CurationFig Curated Themes',
    description:
      'Editorially curated themes across music, games, film, and TV. Each record carries a human-written thesis explaining why the listed works belong together, plus mood, audience, selection criteria, alternatives, FAQ, and related themes. Original curatorial structure by CurationFig; underlying metadata attributed to MusicBrainz (CC0), RAWG, and TMDB.',
    license: 'https://creativecommons.org/licenses/by/4.0/',
    url: 'https://curationfig.com/data/',
    creator: { '@type': 'Organization', name: 'CurationFig', url: 'https://curationfig.com/' },
    datePublished: RETRIEVED,
    keywords: ['curation', 'editorial', 'mood', 'film', 'tv', 'games', 'music', 'recommendation'],
    distribution: {
      '@type': 'DataDownload',
      encodingFormat: 'application/json',
      contentUrl: 'https://curationfig.com/data/curation-themes.json',
    },
    recordCount: all.length,
    themes: all,
  };

  const byChannel = all.reduce((acc, t) => {
    acc[t.channel] = (acc[t.channel] || 0) + 1;
    return acc;
  }, {});

  const note = `Original curatorial dataset: ${all.length} themes (${JSON.stringify(byChannel)}). License CC BY 4.0. Retrieved ${RETRIEVED}.`;

  if (process.argv[2] === 'write') {
    writeFileSync(OUT, JSON.stringify(dataset, null, 2));
    console.log('WROTE', OUT);
  } else {
    console.log('[dryRun] would write', OUT);
  }
  console.log(note);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
