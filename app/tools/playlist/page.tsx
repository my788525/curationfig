import type { Metadata } from 'next';
import Link from 'next/link';
import { PlaylistGenerator } from '@/components/PlaylistGenerator';

export const metadata: Metadata = {
  title: 'Playlist Generator',
  description:
    'Build a personalized music playlist from your mood, decade, and genre. Editorial curation, assembled for you.',
  alternates: { canonical: '/tools/playlist/' },
};

export default function PlaylistToolPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="crumbs">
          <Link href="/">Home</Link> / <Link href="/tools/playlist/">Generator</Link>
        </div>
        <h1>Personalized Generator</h1>
        <p className="muted" style={{ maxWidth: 680 }}>
          The anti-algorithm tool. Tell us the mood you&apos;re in and we&apos;ll argue for a
          list — not just show you what&apos;s popular. Works for music and games. This is the
          part a search engine overview can&apos;t hand you; you have to come in.
        </p>

        <div style={{ marginTop: 18 }}>
          <PlaylistGenerator />
        </div>

        <div className="banner" style={{ marginTop: 24 }}>
          <strong>Why this is on-site only:</strong> personalized generation requires your
          input and our scoring logic. It&apos;s the deliberate counter to zero-click answers —
          the value lives on the page, not in a snippet.
        </div>
      </div>
    </section>
  );
}
