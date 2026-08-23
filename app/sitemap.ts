import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { MUSIC_THEMES } from '@/lib/media/curation';

const base = SITE.domain; // 无尾斜杠（baseUrl 铁律）

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/music/', '/tools/playlist/', '/data/', '/about/'];
  const musicThemeRoutes = MUSIC_THEMES.map((t) => `/music/${t.slug}/`);

  const all = [...staticRoutes, ...musicThemeRoutes];
  return all.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date('2026-08-24'),
    changeFrequency: 'monthly' as const,
    priority: p === '' ? 1 : 0.7,
  }));
}
