'use client';
import { useState } from 'react';

type Props = {
  // 模式一：直接传入要复制的文本
  text?: string;
  // 模式二：标题 + 可选附属信息（生成 "Title — meta" 的每行列表）
  titles?: string[];
  meta?: string[];
  label?: string;
  className?: string;
};

function buildText(p: Props): string {
  if (p.text) return p.text;
  if (p.titles && p.titles.length) {
    return p.titles
      .map((t, i) => {
        const m = p.meta?.[i];
        return m ? `${t} — ${m}` : t;
      })
      .join('\n');
  }
  return '';
}

export function CopyListButton({ text, titles, meta, label = 'Copy list', className }: Props) {
  const [done, setDone] = useState(false);

  async function copy() {
    const payload = buildText({ text, titles, meta });
    if (!payload) return;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(payload);
      } else {
        // 旧浏览器 / 非安全上下文兜底
        const ta = document.createElement('textarea');
        ta.value = payload;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setDone(true);
      setTimeout(() => setDone(false), 1800);
    } catch {
      setDone(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={className || 'copy-btn'}
      aria-live="polite"
    >
      {done ? '✓ Copied' : label}
    </button>
  );
}
