import Link from 'next/link';
import { SITE, CHANNELS } from '@/lib/site';
import { ATTRIBUTION_HTML } from '@/lib/media/sources';

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="cols">
          <div>
            <div style={{ fontWeight: 800, fontSize: 18, color: '#fff', marginBottom: 8 }}>
              {SITE.name}
            </div>
            <p style={{ maxWidth: 320 }}>
              Editorially curated discovery for screen &amp; sound. A point of view, not a
              database.
            </p>
          </div>
          <div>
            <h4>Channels</h4>
            <ul>
              {CHANNELS.map((c) => (
                <li key={c.key}>
                  {c.live ? <Link href={`/${c.key}/`}>{c.label}</Link> : <span>{c.label} · soon</span>}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Tools</h4>
            <ul>
              <li><Link href="/tools/playlist/">Playlist Generator</Link></li>
              <li><Link href="/data/">Data &amp; Sources</Link></li>
            </ul>
          </div>
          <div>
            <h4>About</h4>
            <ul>
              <li><Link href="/about/">About {SITE.name}</Link></li>
              <li><a href="https://curationfig.com/llms.txt">llms.txt</a></li>
            </ul>
          </div>
        </div>
        <div
          style={{ marginTop: 24, paddingTop: 18, borderTop: '1px solid #322a40' }}
          dangerouslySetInnerHTML={{ __html: ATTRIBUTION_HTML }}
        />
        <p style={{ marginTop: 14, color: '#7d7390' }}>
          © {new Date().getFullYear()} {SITE.name}. Not affiliated with any data source.
        </p>
      </div>
    </footer>
  );
}
