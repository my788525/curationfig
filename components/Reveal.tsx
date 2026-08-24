'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Reveal — 轻量滚动入场包裹器。
 * 设计原则：
 *  - 默认（无 JS / SEO 抓取）内容完全可见，不会被隐藏；
 *  - 仅当客户端挂载且支持 IntersectionObserver 时，才启用：
 *      给进入视口的每个直接子元素加 .reveal-item 触发 CSS 入场动画，
 *      并以内联 animationDelay 制造错峰（循环 0–11，避免项数过多时永久隐藏）；
 *  - 尊重 prefers-reduced-motion（CSS 层已降级隐藏规则，这里也跳过观察）。
 */
const STAGGER = 0.045; // 每项间隔（秒）
const STAGGER_CAP = 12; // 循环上限，防止末尾等待过久

export default function Reveal({
  children,
  className,
  itemClassName = 'reveal-item',
}: {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reduce || typeof IntersectionObserver === 'undefined') return;

    setEnabled(true);
    const el = ref.current;
    if (!el) return;

    const kids = Array.from(el.children) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const node = entry.target as HTMLElement;
            const idx = Number(node.dataset.revealIdx || 0);
            node.style.animationDelay = `${(idx % STAGGER_CAP) * STAGGER}s`;
            node.classList.add(itemClassName);
            io.unobserve(node);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    kids.forEach((k, i) => {
      k.dataset.revealIdx = String(i);
      io.observe(k);
    });
    return () => io.disconnect();
  }, [itemClassName]);

  return (
    <div ref={ref} className={className} data-reveal={enabled ? 'on' : 'off'}>
      {children}
    </div>
  );
}
