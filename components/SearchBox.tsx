'use client';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

// 全站站内搜索（Pagefind 静态全文索引）：导航栏输入即搜，回车进 /search/ 结果页。
// Pagefind 由构建期 `pagefind --site out` 生成于 /pagefind/，运行时通过全局 script 注入，
// 不走 webpack 打包（避免 ESM 相对路径资源被破坏）。
declare global {
  interface Window { pagefind?: any; }
}

export default function SearchBox() {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState<{ url: string; meta: { title: string }; excerpt: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);
  const router = useRouter();
  const tried = useRef(false);

  useEffect(() => {
    if (tried.current) return;
    tried.current = true;
    const s = document.createElement('script');
    s.src = '/pagefind/pagefind.js';
    s.onload = () => setReady(true);
    s.onerror = () => setReady(false);
    document.body.appendChild(s);
  }, []);

  async function run(term: string) {
    if (!term.trim() || !window.pagefind) { setResults([]); return; }
    setLoading(true);
    try {
      if (window.pagefind.options) await window.pagefind.options({ excerptLength: 18 });
      const search = await window.pagefind.search(term);
      const top = await Promise.all(search.slice(0, 8).map((r: any) => r.data()));
      setResults(top.map((d: any) => ({ url: d.url, meta: d.meta, excerpt: d.excerpt })));
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const t = setTimeout(() => run(q), 250);
    return () => clearTimeout(t);
  }, [q, ready]);

  function go(url: string) {
    setOpen(false);
    router.push(url);
  }

  return (
    <div className="searchbox">
      <input
        className="search-input"
        type="search"
        placeholder="Search moods, themes, titles…"
        value={q}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 200)}
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter' && q.trim()) go(`/search/?q=${encodeURIComponent(q.trim())}`); }}
      />
      {open && q.trim() && (
        <div className="search-pop">
          {!ready && <div className="search-hint">Loading index…</div>}
          {ready && loading && <div className="search-hint">Searching…</div>}
          {ready && !loading && results.length === 0 && <div className="search-hint">No matches.</div>}
          {results.map((r) => (
            <button key={r.url} className="search-item" onMouseDown={() => go(r.url)}>
              <span className="si-title">{r.meta?.title || r.url}</span>
              {r.excerpt && <span className="si-excerpt" dangerouslySetInnerHTML={{ __html: r.excerpt }} />}
            </button>
          ))}
          {results.length > 0 && (
            <button className="search-all" onMouseDown={() => go(`/search/?q=${encodeURIComponent(q.trim())}`)}>
              See all results →
            </button>
          )}
        </div>
      )}
    </div>
  );
}
