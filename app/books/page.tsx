import Link from 'next/link';
import type { Metadata } from 'next';
import { BOOKS_THEMES, MOOD_THEMES } from '@/lib/media/curation';
import { BOOKS_ITEMS } from '@/lib/media/generated-books';
import Reveal from '@/components/Reveal';
import Marquee from '@/components/Marquee';

function cards(items: { title: string; creator?: string; cover?: string | null; url: string }[], n = 14) {
  return items
    .slice(0, n)
    .map((i) => ({ title: i.title, subtitle: i.creator || '', cover: i.cover, href: i.url || '/books/' }));
}

export const metadata: Metadata = {
  title: 'Books & Literature Curation',
  description:
    'Editorially curated book lists — by theme, mood, and adaptation. A point of view, not a database. Page-to-screen, the literary canon, and the form at its best.',
  alternates: { canonical: '/books/' },
};

export default function BooksHub() {
  return (
    <>
      <section className="hero has-bg" style={{ ['--hero-img' as string]: "url('/images/hero/hero-books.webp')" } as React.CSSProperties}>
        <div className="wrap hero-inner">
          <div className="crumbs" style={{ color: '#ece6f5', margin: '0 0 10px' }}>
            <Link href="/" style={{ color: '#ece6f5' }}>Home</Link> / Books
          </div>
          <h1 className="grad-text">Books &amp; Literature, by theme</h1>
          <p>
            {BOOKS_THEMES.length} editorial themes about why books belong together — by movement,
            adaptation, and argument. Public bibliographic facts only; we curate, we don&apos;t rank.
          </p>
        </div>
      </section>

      <section className="marquee-band">
        <div className="wrap">
          <h2 className="marquee-band-h">Popular right now</h2>
        </div>
        <Marquee lanes={[{ label: 'Books', href: '/books/', cards: cards(BOOKS_ITEMS) }]} />
      </section>

      <section className="section">
        <div className="wrap">
          <h2 style={{ fontSize: '1.3rem' }}>Find media by mood &amp; theme</h2>
          <p className="muted" style={{ maxWidth: 720, marginTop: -4 }}>
            Start from how you feel, not which shelf you browse. Each mood below crosses film, TV,
            games, music, and books — open one and we&apos;ll pull the right thing from every channel.
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

          <h2 style={{ fontSize: '1.3rem', marginTop: 34 }}>All book themes</h2>
          <Reveal className="grid grid-2">
            {BOOKS_THEMES.map((t) => (
              <Link key={t.slug} href={`/books/${t.slug}/`} className="card theme-card">
                <h3>{t.title}</h3>
                <p className="thesis">{t.thesis}</p>
                <div style={{ marginTop: 8 }}>
                  {t.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="tag-chip">{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </Reveal>

          <div className="warn-banner" style={{ marginTop: 26 }}>
            <strong>Data &amp; licensing:</strong> Book metadata is drawn from publicly documented
            bibliographic records (author, first-publish year, publisher) — standard, verifiable facts.
            CurationFig is editorial curation; we do not fabricate reviews, ratings, or first-person
            reader experiences. Cover images are not hot-linked.
          </div>
        </div>
      </section>
    </>
  );
}
