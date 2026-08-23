import Link from 'next/link';
import type { Metadata } from 'next';
import { TV_THEMES } from '@/lib/media/curation';
import { TV_ITEMS } from '@/lib/media/generated-tv';

export const metadata: Metadata = {
  title: 'TV Curation',
  description:
    'Editorially curated TV lists and binge guides — by format, mood, and movement. A point of view, not a database. No spoilers, no episode-score tables.',
  alternates: { canonical: '/tv/' },
};

export default function TvHub() {
  const coverCount = TV_ITEMS.filter((i) => i.cover).length;
  return (
    <>
      <section className="hero has-bg" style={{ ['--hero-img' as string]: "url('/images/hero/hero-tv.webp')" } as React.CSSProperties}>
        <div className="wrap hero-inner">
          <div className="crumbs" style={{ color: '#ece6f5', margin: '0 0 10px' }}>
            <Link href="/" style={{ color: '#ece6f5' }}>Home</Link> / TV
          </div>
          <h1>TV curation</h1>
          <p>
            {TV_THEMES.length} editorial themes about why shows belong together — by format,
            mood, and argument. Real metadata from TMDB. We curate, we don&apos;t rank or spoil.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid grid-2">
            {TV_THEMES.map((t) => (
              <Link key={t.slug} href={`/tv/${t.slug}/`} className="card theme-card">
                <h3>{t.title}</h3>
                <p className="thesis">{t.thesis}</p>
                <div style={{ marginTop: 8 }}>
                  {t.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="tag-chip">{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="warn-banner" style={{ marginTop: 26 }}>
            <strong>Data &amp; licensing:</strong> TV metadata from The Movie Database (TMDB),
            posters localized (not hot-linked). CurationFig is editorial curation — we do not
            publish spoilers, episode-score tables, or ending reveals.
            {coverCount > 0 && <> {coverCount} posters localized.</>}
          </div>
        </div>
      </section>
    </>
  );
}
