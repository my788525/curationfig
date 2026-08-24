import Link from 'next/link';
import { SITE, CHANNELS } from '@/lib/site';
import { MUSIC_THEMES } from '@/lib/media/curation';
import Reveal from '@/components/Reveal';

export default function HomePage() {
  const liveThemes = MUSIC_THEMES.slice(0, 6);
  return (
    <>
      <section className="hero has-bg" style={{ ['--hero-img' as string]: "url('/images/hero/hero-home.webp')" } as React.CSSProperties}>
        <div className="wrap hero-inner">
          <h1 className="grad-text">Not a database. A point of view.</h1>
          <p>
            {SITE.name} is editorially curated discovery for the things you watch, play, and
            listen to. We don&apos;t index everything — we argue for the right things, and
            help you build a list that&apos;s actually yours.
          </p>
          <div className="pill-row">
            <Reveal className="pill-row" itemClassName="reveal-item">
              {CHANNELS.filter((c) => c.live).map((c) => (
                <span key={c.key} className="pill-tag">
                  {c.label} · live
                </span>
              ))}
              {CHANNELS.filter((c) => !c.live).map((c) => (
                <span key={c.key} className="pill-tag" style={{ opacity: 0.6 }}>
                  {c.label} · soon
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Why we exist</h2>
          <p className="muted" style={{ maxWidth: 720 }}>
            Algorithms show you what&apos;s popular. Databases show you what exists. Neither
            tells you <em>why</em> these ten records belong together, or which one fits the
            mood you&apos;re in tonight. That&apos;s the gap we fill — human curation with a
            tool that builds the list for you.
          </p>

          <div className="banner">
            <strong>Live now:</strong> the Music channel. Start with a curated theme, or use
            the <Link href="/tools/playlist/">Playlist Generator</Link> to get a personalized
            list from your mood, decade, and genre.
          </div>

          <h2 style={{ marginTop: 30 }}>Featured music curation</h2>
          <Reveal className="grid grid-3">
            {liveThemes.map((t) => (
              <Link key={t.slug} href={`/music/${t.slug}/`} className="card theme-card">
                <h3>{t.title}</h3>
                <p className="thesis">{t.thesis}</p>
                <span className="muted">→ Open this curation</span>
              </Link>
            ))}
          </Reveal>

          <div style={{ marginTop: 24 }}>
            <Link href="/music/" className="pill-tag" style={{ background: 'var(--violet-600)' }}>
              Browse all music themes →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
