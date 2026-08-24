import Link from 'next/link';
import type { Metadata } from 'next';
import { WhereToFind } from '@/components/WhereToFind';

export const metadata: Metadata = {
  title: 'Where to find it — legal sources — CurationFig',
  description:
    'Mainstream legal ways to watch, play, or listen — no piracy, no affiliate traps. Pick a type and we point you to the right channels.',
  alternates: { canonical: '/tools/wheretogo/' },
};

export default function Page() {
  return (
    <main className="wrap section">
      <div className="crumbs">
        <Link href="/">Home</Link> / <Link href="/tools/wheretogo/">Where to find it</Link>
      </div>
      <h1>Where to find it</h1>
      <p className="muted" style={{ maxWidth: 640 }}>
        Knowing what to watch, play, or listen to is half the battle. The other half is finding
        it legally. This tool maps the mainstream legitimate channels by type — so you never
        land on a sketchy mirror.
      </p>
      <div style={{ marginTop: 22 }}>
        <WhereToFind />
      </div>
      <div style={{ marginTop: 22, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <Link href="/tools/tastetwin/" className="pill-tag">← Taste Twin</Link>
        <Link href="/tools/playlist/" className="pill-tag">Playlist Generator →</Link>
      </div>
    </main>
  );
}
