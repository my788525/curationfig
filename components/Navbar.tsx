import Link from 'next/link';
import { SITE, CHANNELS } from '@/lib/site';

export function Navbar() {
  return (
    <header className="nav">
      <div className="nav-in">
        <Link href="/" className="nav-brand">
          {SITE.name}
        </Link>
        <nav className="nav-links">
          {CHANNELS.map((c) => (
            <Link
              key={c.key}
              href={c.live ? `/${c.key}/` : '#'}
              className={c.live ? 'live' : 'soon'}
              aria-disabled={!c.live}
            >
              {c.label}{c.live ? '' : ' · soon'}
            </Link>
          ))}
          <Link href="/tools/playlist/">Playlist Generator</Link>
          <Link href="/data/">Data & Sources</Link>
          <Link href="/about/">About</Link>
        </nav>
      </div>
    </header>
  );
}
