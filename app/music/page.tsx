import Link from 'next/link';
import type { Metadata } from 'next';
import { MUSIC_THEMES } from '@/lib/media/curation';

export const metadata: Metadata = {
  title: 'Music Curation',
  description:
    'Editorially curated music guides and playlists — by mood, decade, and genre. A point of view, not a database.',
  alternates: { canonical: '/music/' },
};

export default function MusicHub() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="crumbs">
          <Link href="/">Home</Link> / Music
        </div>
        <h1>Music curation</h1>
        <p className="muted" style={{ maxWidth: 680 }}>
          Each theme below is a curated argument — a reason these records belong together.
          Pick one to read the editorial and see the list, or build your own with the
          generator.
        </p>

        <div style={{ margin: '14px 0 22px' }}>
          <Link href="/tools/playlist/" className="pill-tag" style={{ background: 'var(--violet-600)' }}>
            🎵 Playlist Generator →
          </Link>
        </div>

        <div className="grid grid-2">
          {MUSIC_THEMES.map((t) => (
            <Link key={t.slug} href={`/music/${t.slug}/`} className="card theme-card">
              <h3>{t.title}</h3>
              <p className="thesis">{t.thesis}</p>
              <div style={{ marginTop: 8 }}>
                {t.tags.map((tag) => (
                  <span key={tag} className="tag-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="warn-banner" style={{ marginTop: 26 }}>
          <strong>Data &amp; licensing:</strong> Artist metadata is from MusicBrainz (CC0, public
          domain). Cover art via Cover Art Archive. We are an editorial curation site, not a
          streaming service — no playback, no affiliate links yet. See the{' '}
          <Link href="/data/">Data &amp; Sources</Link> page.
        </div>
      </div>
    </section>
  );
}
