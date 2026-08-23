import Link from 'next/link';
import type { Metadata } from 'next';
import { GAME_THEMES } from '@/lib/media/curation';
import { GAME_ITEMS } from '@/lib/media/generated-games';

export const metadata: Metadata = {
  title: 'Games Curation',
  description:
    'Editorially curated game lists and gamelists — by vibe, genre, and era. A point of view, not a database. No walkthroughs, no stat spreadsheets.',
  alternates: { canonical: '/games/' },
};

export default function GamesHub() {
  const coverCount = GAME_ITEMS.filter((i) => i.cover).length;
  return (
    <>
      <section className="hero has-bg" style={{ ['--hero-img' as string]: "url('/images/hero/hero-games.webp')" } as React.CSSProperties}>
        <div className="wrap hero-inner">
          <div className="crumbs" style={{ color: '#ece6f5', margin: '0 0 10px' }}>
            <Link href="/" style={{ color: '#ece6f5' }}>Home</Link> / Games
          </div>
          <h1>Games curation</h1>
          <p>
            {GAME_THEMES.length} editorial themes about why games belong together — by design,
            mood, and lineage. Real metadata from RAWG. We curate, we don&apos;t walkthrough.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid grid-2">
            {GAME_THEMES.map((t) => (
              <Link key={t.slug} href={`/games/${t.slug}/`} className="card theme-card">
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
            <strong>Data &amp; licensing:</strong> Game metadata from RAWG.io (attribution
            required). Cover art localized, not hot-linked. CurationFig is editorial curation —
            we do not publish walkthroughs, stat tables, or speedrun guides.
            {coverCount > 0 && <> {coverCount} cover images localized.</>}
          </div>
        </div>
      </section>
    </>
  );
}
