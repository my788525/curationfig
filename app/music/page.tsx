import Link from 'next/link';
import type { Metadata } from 'next';
import { MUSIC_THEMES, MOOD_THEMES } from '@/lib/media/curation';
import { MUSIC_ITEMS } from '@/lib/media/generated-music';
import Reveal from '@/components/Reveal';
import Marquee from '@/components/Marquee';

function cards(items: { title: string; creator?: string; cover?: string | null; url: string }[], n = 14) {
  return items
    .filter((i) => i.cover)
    .slice(0, n)
    .map((i) => ({ title: i.title, subtitle: i.creator || '', cover: i.cover, href: i.url || '/music/' }));
}

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
          <h1 className="grad-text">Music, by mood &amp; theme</h1>
          <p>
            {MUSIC_THEMES.length} editorial themes, each a curated argument for why these
            records belong together. Real metadata from MusicBrainz, art from Cover Art Archive.
          </p>
        </div>
      </section>

      <section className="marquee-band">
        <div className="wrap">
          <h2 className="marquee-band-h">Popular right now</h2>
        </div>
        <Marquee lanes={[{ label: 'Music', cards: cards(MUSIC_ITEMS) }]} />
      </section>

      <section className="section">
        <div className="wrap">
          <div style={{ margin: '0 0 22px' }}>
            <Link href="/tools/playlist/" className="pill-tag" style={{ background: 'var(--violet-600)' }}>
              🎵 Playlist Generator →
            </Link>
          </div>

          <h2 style={{ fontSize: '1.3rem', marginTop: 26 }}>Find media by mood &amp; theme</h2>
          <p className="muted" style={{ maxWidth: 720, marginTop: -4 }}>
            One feeling, four mediums. Each of these opens a single mood and pulls the film,
            series, game, and record that fit it — so you never have to pick a channel before
            you know how you feel.
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

          <h2 style={{ fontSize: '1.3rem', marginTop: 34 }}>All music themes</h2>
          <Reveal className="grid grid-2">
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
          </Reveal>

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
