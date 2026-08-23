import Link from 'next/link';
import type { Metadata } from 'next';
import { MUSIC_THEMES } from '@/lib/media/curation';
import { MUSIC_ITEMS } from '@/lib/media/generated-music';

export const metadata: Metadata = {
  title: 'Music Curation',
  description:
    'Editorially curated music guides and playlists — by mood, decade, and genre. A point of view, not a database.',
  alternates: { canonical: '/music/' },
};

export default function MusicHub() {
  const coverCount = MUSIC_ITEMS.filter((i) => i.cover).length;
  return (
    <>
      <section className="hero has-bg" style={{ ['--hero-img' as string]: "url('/images/hero/hero-music.webp')" } as React.CSSProperties}>
        <div className="wrap hero-inner">
          <div className="crumbs" style={{ color: '#ece6f5', margin: '0 0 10px' }}>
            <Link href="/" style={{ color: '#ece6f5' }}>Home</Link> / Music
          </div>
          <h1>Music curation</h1>
          <p>
            {MUSIC_THEMES.length} editorial themes, each a curated argument for why these
            records belong together. Real metadata from MusicBrainz, art from Cover Art Archive.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div style={{ margin: '0 0 22px' }}>
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
                  {t.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="warn-banner" style={{ marginTop: 26 }}>
            <strong>Data &amp; licensing:</strong> Artist &amp; release metadata from MusicBrainz
            (CC0, public domain). Cover art via Cover Art Archive. Editorial curation by
            CurationFig — not a streaming service. See the <Link href="/data/">Data &amp; Sources</Link> page.
            {coverCount > 0 && <> {coverCount} cover images localized.</>}
          </div>
        </div>
      </section>
    </>
  );
}
