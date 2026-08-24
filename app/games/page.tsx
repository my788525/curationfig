import Link from 'next/link';
import type { Metadata } from 'next';
import { GAME_THEMES, MOOD_THEMES } from '@/lib/media/curation';
import { GAME_ITEMS } from '@/lib/media/generated-games';
import Reveal from '@/components/Reveal';
import Marquee from '@/components/Marquee';

function cards(items: { title: string; creator?: string; cover?: string | null; url: string }[], n = 14) {
  return items
    .filter((i) => i.cover)
    .slice(0, n)
    .map((i) => ({ title: i.title, subtitle: i.creator || '', cover: i.cover, href: i.url || '/games/' }));
}

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
          <h1 className="grad-text">Games, by mood &amp; theme</h1>
          <p>
            {GAME_THEMES.length} editorial themes about why games belong together — by design,
            mood, and lineage. Real metadata from RAWG. We curate, we don&apos;t walkthrough.
          </p>
        </div>
      </section>

      <section className="marquee-band">
        <div className="wrap">
          <h2 className="marquee-band-h">Popular right now</h2>
        </div>
        <Marquee lanes={[{ label: 'Games', href: '/games/', cards: cards(GAME_ITEMS) }]} />
      </section>

      <section className="section">
        <div className="wrap">
          <h2 style={{ fontSize: '1.3rem' }}>Find media by mood &amp; theme</h2>
          <p className="muted" style={{ maxWidth: 720, marginTop: -4 }}>
            Start from how you feel, not which app you open. Each mood below crosses film, TV,
            games, and music — open one and we&apos;ll pull the right thing from every channel.
          </p>
          <Reveal className="grid grid-4" itemClassName="reveal-item">
            {MOOD_THEMES.map((t) => (
              <Link key={t.slug} href={`/music/${t.slug}/`} className="card mood-chip">
                <h3>{t.title}</h3>
                <p className="thesis">{t.intro}</p>
                <span className="muted">→ Enter the mood</span>
              </Link>
            ))}
          </Reveal>

          <h2 style={{ fontSize: '1.3rem', marginTop: 34 }}>All games themes</h2>
          <Reveal className="grid grid-2">
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
          </Reveal>

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
