import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy & Data Sources — CurationFig',
  description:
    'How CurationFig handles your data: no accounts, no tracking, no selling. Plus the open sources behind our metadata and how attribution works.',
  alternates: { canonical: '/privacy/' },
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="wrap article">
        <div className="crumbs">
          <Link href="/">Home</Link> / Privacy
        </div>
        <h1>Privacy &amp; data sources</h1>
        <p className="article-sub">
          Short version: we don&apos;t collect you. This page explains what we do and don&apos;t
          do, and where the real metadata on this site comes from.
        </p>

        <h2>What we don&apos;t do</h2>
        <ul className="article-body" style={{ marginTop: 0 }}>
          <li><strong>No accounts.</strong> There is nothing to sign up for. The tools run entirely in your browser.</li>
          <li><strong>No tracking.</strong> We don&apos;t run ad pixels, analytics that fingerprints you, or cross-site retargeting.</li>
          <li><strong>No selling.</strong> We don&apos;t have a data broker business and we don&apos;t run one.</li>
          <li><strong>No affiliate arbitrage.</strong> Recommendations are editorial, not commission-driven. We never get paid to include a title.</li>
        </ul>

        <h2>What the site does store</h2>
        <p className="article-body" style={{ marginTop: 0 }}>
          When you use the <Link href="/tools/playlist/">Playlist Generator</Link>, your inputs
          (mood, decade, genre) stay in your browser session and are never sent to a server. We
          don&apos;t log them. If you email us, your message lives in our inbox and nowhere else.
        </p>

        <h2>Where the metadata comes from</h2>
        <p className="article-body" style={{ marginTop: 0 }}>
          Real titles, years, genres, and cover art are pulled from open, attributed sources and
          used under their licenses. The editorial writing — theses, &quot;why this belongs&quot;
          notes, and the editorial takes — is original to CurationFig and is the part no API
          generates.
        </p>
        <ul className="article-body" style={{ marginTop: 8 }}>
          <li><a href="https://musicbrainz.org/" rel="nofollow noopener">MusicBrainz</a> (CC0) — music metadata.</li>
          <li><a href="https://coverartarchive.org/" rel="nofollow noopener">Cover Art Archive</a> (CC) — album artwork.</li>
          <li><a href="https://rawg.io/" rel="nofollow noopener">RAWG</a> — game metadata, used with attribution.</li>
          <li><a href="https://www.themoviedb.org/" rel="nofollow noopener">TMDB</a> — film &amp; TV metadata. This product uses the TMDB API but is not endorsed or certified by TMDB.</li>
        </ul>

        <h2>Corrections &amp; takedowns</h2>
        <p className="article-body" style={{ marginTop: 0 }}>
          Found a wrong attribution or a title that shouldn&apos;t be listed? Email{' '}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. We review every note and fix
          attribution errors promptly.
        </p>

        <p className="muted" style={{ marginTop: 20, fontSize: 13 }}>
          Last updated: August 2026.
        </p>
      </div>
    </section>
  );
}
