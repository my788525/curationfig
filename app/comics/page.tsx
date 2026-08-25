import Link from 'next/link';
import type { Metadata } from 'next';
import { COMICS_THEMES, resolveItemUrl } from '@/lib/media/curation';
import { COMICS_ITEMS } from '@/lib/media/generated-comics';
import Reveal from '@/components/Reveal';
import Marquee from '@/components/Marquee';

function cards(items: { title: string; creator?: string; cover?: string | null; url: string }[], n = 14) {
  return items
    .slice(0, n)
    .map((i) => ({ title: i.title, subtitle: i.creator || '', cover: i.cover, href: resolveItemUrl(i, '/comics/') }));
}

export const metadata: Metadata = {
  title: 'Comics & Graphic Novels Curation',
  description:
    'Editorially curated book lists — by theme, mood, and adaptation. A point of view, not a database. Page-to-screen, the literary canon, and the form at its best.',
  alternates: { canonical: '/comics/' },
};

export default function ComicsHub() {
  return (
    <>
      <section className="hero has-bg" style={{ ['--hero-img' as string]: "url('/images/hero/hero-film.webp')" } as React.CSSProperties}>
        <div className="wrap hero-inner">
          <div className="crumbs" style={{ color: '#ece6f5', margin: '0 0 10px' }}>
            <Link href="/" style={{ color: '#ece6f5' }}>Home</Link> / Comics
          </div>
          <h1 className="grad-text">Comics & Graphic Novels, by theme</h1>
          <p>
            {COMICS_THEMES.length} editorial themes about why comics belong together — by movement,
            adaptation, and argument. Public bibliographic facts only; we curate, we don&apos;t rank.
          </p>
        </div>
      </section>

      <section className="marquee-band">
        <div className="wrap">
          <h2 className="marquee-band-h">Popular right now</h2>
        </div>
        <Marquee lanes={[{ label: 'Comics', href: '/comics/', cards: cards(COMICS_ITEMS) }]} />
      </section>

      <section className="section">
        <div className="wrap">
          <h2 style={{ fontSize: '1.3rem', marginTop: 34 }}>All comics themes</h2>
          <Reveal className="grid grid-2">
            {COMICS_THEMES.map((t) => (
              <Link key={t.slug} href={`/comics/${t.slug}/`} className="card theme-card">
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
