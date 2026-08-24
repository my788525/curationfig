import Link from 'next/link';
import type { Metadata } from 'next';
import { TasteTwin } from '@/components/TasteTwin';

export const metadata: Metadata = {
  title: 'Taste Twin — find your next — CurationFig',
  description:
    'Type a title you love and discover the closest matches in our catalog by shared genres, moods, and themes.',
  alternates: { canonical: '/tools/tastetwin/' },
};

export default function Page() {
  return (
    <main className="wrap section">
      <div className="crumbs">
        <Link href="/">Home</Link> / <Link href="/tools/tastetwin/">Taste Twin</Link>
      </div>
      <h1>Taste Twin</h1>
      <p className="muted" style={{ maxWidth: 640 }}>
        Discovery by kinship, not by charts. Tell us one thing you already like and we surface
        what else in our catalog shares its DNA — useful when an algorithm only feeds you more
        of the same.
      </p>
      <div style={{ marginTop: 22 }}>
        <TasteTwin />
      </div>
      <div style={{ marginTop: 22, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <Link href="/tools/playlist/" className="pill-tag">← Playlist Generator</Link>
        <Link href="/tools/wheretogo/" className="pill-tag">Where to find it →</Link>
      </div>
    </main>
  );
}
