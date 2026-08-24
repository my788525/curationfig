import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tools — CurationFig',
  description:
    'Interactive tools: personalized playlist generator, taste-twin discovery, and legal-source finder.',
  alternates: { canonical: '/tools/' },
};

const TOOLS = [
  {
    href: '/tools/playlist/',
    emoji: '🎯',
    name: 'Playlist Generator',
    desc: 'Build a starter watchlist, gamelist, or playlist from mood, decade, and genre.',
  },
  {
    href: '/tools/tastetwin/',
    emoji: '🔗',
    name: 'Taste Twin',
    desc: 'Type a title you love and find the closest matches by shared genres and themes.',
  },
  {
    href: '/tools/wheretogo/',
    emoji: '🧭',
    name: 'Where to find it',
    desc: 'Mainstream legal ways to watch, play, or listen — no piracy, no affiliate traps.',
  },
];

export default function Page() {
  return (
    <main className="wrap section">
      <div className="crumbs">
        <Link href="/">Home</Link> / <span>Tools</span>
      </div>
      <h1>Tools</h1>
      <p className="muted" style={{ maxWidth: 640 }}>
        Practical helpers built on top of our curated catalog. No accounts, no tracking — just
        utilities that make discovery actionable.
      </p>
      <div className="grid grid-3" style={{ marginTop: 24 }}>
        {TOOLS.map((t) => (
          <Link key={t.href} href={t.href} className="card theme-card">
            <div style={{ fontSize: 30, marginBottom: 6 }}>{t.emoji}</div>
            <h3>{t.name}</h3>
            <p className="thesis" style={{ margin: 0 }}>{t.desc}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
