import Link from 'next/link';
import type { Metadata } from 'next';
import { FILM_THEMES } from '@/lib/media/curation';
import { FILM_ITEMS } from '@/lib/media/generated-film';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Film Curation',
  description:
    'Editorially curated film lists and watchlists — by director, mood, and movement. A point of view, not a database. No spoilers, no score tables.',
  alternates: { canonical: '/film/' },
};

export default function FilmHub() {
  const coverCount = FILM_ITEMS.filter((i) => i.cover).length;
  return (
    <>
      <section className="hero has-bg" style={{ ['--hero-img' as string]: "url('/images/hero/hero-film.webp')" } as React.CSSProperties}>
        <div className="wrap hero-inner">
          <div className="crumbs" style={{ color: '#ece6f5', margin: '0 0 10px' }}>
            <Link href="/" style={{ color: '#ece6f5' }}>Home</Link> / Film
          </div>
          <h1>Film curation</h1>
          <p>
            {FILM_THEMES.length} editorial themes about why films belong together — by movement,
            mood, and argument. Real metadata from TMDB. We curate, we don&apos;t rank or spoil.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="grid grid-2">
            {FILM_THEMES.map((t) => (
              <Link key={t.slug} href={`/film/${t.slug}/`} className="card theme-card">
                <h3>{t.title}</h3>
                <p className="thesis">{t.thesis}</p>
                <div style={{ marginTop: 8 }}>
                  {t.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="tag-chip">{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </Reveal>

          <div className="warn-banner" style={{ marginTop: 26 }}>
            <strong>Data &amp; licensing:</strong> Film metadata from The Movie Database (TMDB),
            posters localized (not hot-linked). CurationFig is editorial curation — we do not
            publish spoilers, episode-score tables, or ending reveals.
            {coverCount > 0 && <> {coverCount} posters localized.</>}
          </div>
        </div>
      </section>
    </>
  );
}
