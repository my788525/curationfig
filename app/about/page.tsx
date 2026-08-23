import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Why CurationFig exists: editorial curation as an antidote to algorithmic discovery.',
  alternates: { canonical: '/about/' },
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="crumbs">
          <Link href="/">Home</Link> / About
        </div>
        <h1>About {`CurationFig`}</h1>
        <p style={{ fontSize: 17, maxWidth: 720 }}>
          We started {`CurationFig`} because discovery had gotten lazy. Streaming apps show you
          what&apos;s popular; databases show you what exists. Nobody tells you <em>why</em> a
          handful of records, games, or films belong on the same shelf — that&apos;s a human
          judgment, and it&apos;s the only part worth reading.
        </p>
        <h2 style={{ fontSize: '1.2rem', marginTop: 24 }}>What we are</h2>
        <p className="muted" style={{ maxWidth: 700 }}>
          An editorial curation site. We write the argument; we surface the metadata from open,
          attributed sources (MusicBrainz, RAWG, TMDB); and we give you a tool to build your own
          list when ours doesn&apos;t fit the mood you&apos;re in.
        </p>
        <h2 style={{ fontSize: '1.2rem', marginTop: 24 }}>What we are not</h2>
        <ul className="muted" style={{ maxWidth: 700 }}>
          <li>Not a streaming service — no playback, no login.</li>
          <li>Not a wiki — we don&apos;t mirror everything; we choose.</li>
          <li>Not affiliate-driven — no paid placement, no "buy now" arbitrage (yet).</li>
        </ul>
        <div className="banner" style={{ marginTop: 20 }}>
          Channels launch in sequence: <strong>Music (live)</strong> → Games → Film &amp; TV.
          Each reuses the same curation engine.
        </div>
      </div>
    </section>
  );
}
