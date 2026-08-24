'use client';
import { useState } from 'react';

// 轻量邮件订阅钩子（Web3Forms，无需后端）。
// access_key 为 Web3Forms 免费前端 key（用户已在 web3forms.com 注册）。
// 提供复访理由：新策展清单 / pillar 指南上线时通知订阅者。
const ACCESS_KEY = '72efa0d6-c588-452d-9732-1097c2e89c8a';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes('@')) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: 'CurationFig newsletter signup',
          from_name: 'CurationFig',
          email,
          message: `New newsletter subscriber: ${email}`,
        }),
      });
      const data = await res.json();
      if (data.success) setStatus('done');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="newsletter" id="newsletter">
      <h4>Get the next curation drop</h4>
      <p className="nl-sub">
        New mood lists and pillar guides, a few times a month. No spam, unsubscribe anytime.
      </p>
      {status === 'done' ? (
        <p className="nl-ok">Thanks — you’re on the list. Watch your inbox for the next drop.</p>
      ) : (
        <form onSubmit={onSubmit} className="nl-form">
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="nl-input"
            aria-label="Email address"
          />
          <button type="submit" disabled={status === 'sending'} className="nl-btn">
            {status === 'sending' ? 'Joining…' : 'Join'}
          </button>
        </form>
      )}
      {status === 'error' && (
        <p className="nl-err">Something went wrong. Check the address or try again.</p>
      )}
    </div>
  );
}
