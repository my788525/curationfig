import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { MUSIC_THEMES, GAME_THEMES, FILM_THEMES, TV_THEMES, BOOKS_THEMES, ANIMATION_THEMES, PODCASTS_THEMES, COMICS_THEMES } from '@/lib/media/curation';
import { getArticleSlugs } from '@/lib/articles';

const base = SITE.domain; // 无尾斜杠（baseUrl 铁律）

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/music/', '/games/', '/film/', '/tv/', '/books/', '/animation/', '/podcasts/', '/comics/', '/tools/', '/tools/playlist/', '/tools/tastetwin/', '/tools/wheretogo/', '/articles/', '/data/', '/about/'];
  const musicThemeRoutes = MUSIC_THEMES.map((t) => `/music/${t.slug}/`);
  const gameThemeRoutes = GAME_THEMES.map((t) => `/games/${t.slug}/`);
  const filmThemeRoutes = FILM_THEMES.map((t) => `/film/${t.slug}/`);
  const tvThemeRoutes = TV_THEMES.map((t) => `/tv/${t.slug}/`);
  const booksThemeRoutes = BOOKS_THEMES.map((t) => `/books/${t.slug}/`);
  const animationThemeRoutes = ANIMATION_THEMES.map((t) => `/animation/${t.slug}/`);
  const podcastsThemeRoutes = PODCASTS_THEMES.map((t) => `/podcasts/${t.slug}/`);
  const comicsThemeRoutes = COMICS_THEMES.map((t) => `/comics/${t.slug}/`);
  const articleRoutes = getArticleSlugs().map((s) => `/articles/${s}/`);

  const all = [...staticRoutes, ...musicThemeRoutes, ...gameThemeRoutes, ...filmThemeRoutes, ...tvThemeRoutes, ...booksThemeRoutes, ...animationThemeRoutes, ...podcastsThemeRoutes, ...comicsThemeRoutes, ...articleRoutes];
  return all.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date('2026-08-24'),
    changeFrequency: 'monthly' as const,
    priority: p === '' ? 1 : 0.7,
  }));
}
