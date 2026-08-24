import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { MUSIC_THEMES, GAME_THEMES, FILM_THEMES, TV_THEMES } from '@/lib/media/curation';

const base = SITE.domain; // 无尾斜杠（baseUrl 铁律）

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/music/', '/games/', '/film/', '/tv/', '/tools/', '/tools/playlist/', '/tools/tastetwin/', '/tools/wheretogo/', '/data/', '/about/'];
  const musicThemeRoutes = MUSIC_THEMES.map((t) => `/music/${t.slug}/`);
  const gameThemeRoutes = GAME_THEMES.map((t) => `/games/${t.slug}/`);
  const filmThemeRoutes = FILM_THEMES.map((t) => `/film/${t.slug}/`);
  const tvThemeRoutes = TV_THEMES.map((t) => `/tv/${t.slug}/`);

  const all = [...staticRoutes, ...musicThemeRoutes, ...gameThemeRoutes, ...filmThemeRoutes, ...tvThemeRoutes];
  return all.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date('2026-08-24'),
    changeFrequency: 'monthly' as const,
    priority: p === '' ? 1 : 0.7,
  }));
}
