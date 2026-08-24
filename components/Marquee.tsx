'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import TiltCard from '@/components/TiltCard';

export type MarqueeCard = {
  title: string;
  subtitle?: string;
  cover?: string | null;
  href: string;
};

export type MarqueeLane = {
  label: string;
  cards: MarqueeCard[];
};

/**
 * Marquee — hub / 首页下方的横向滚动"热门条目跑马灯"。
 * - 纯 CSS 关键帧无限滚动（复制一份内容实现无缝循环）；
 * - hover 整条 lane 暂停（prefers-reduced-motion 下不滚动，直接横向可滚）；
 * - 每张卡用 TiltCard 包裹获得 3D 悬停；
 * - 无封面时显示渐变占位 + 标题（tv 兜底）。
 */
export default function Marquee({ lanes }: { lanes: MarqueeLane[] }) {
  const [paused, setPaused] = useState(false);

  return (
    <div className="marquee" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {lanes.map((lane) => (
        <div className="marquee-lane" key={lane.label}>
          <div className="marquee-label">{lane.label}</div>
          <div className="marquee-track-wrap">
            <div
              className={`marquee-track ${paused ? 'paused' : ''} ${
                lane.cards.length < 8 ? 'slow' : ''
              }`}
            >
              {[...lane.cards, ...lane.cards].map((c, i) => (
                <TiltCard key={`${lane.label}-${i}`} as="div" className="mq-card">
                  <Link href={c.href} className="mq-link">
                    <div className="mq-cover">
                      {c.cover ? (
                        <img src={c.cover} alt={c.title} loading="lazy" />
                      ) : (
                        <div className="mq-cover-empty">
                          <span>{lane.label}</span>
                        </div>
                      )}
                    </div>
                    <div className="mq-meta">
                      <div className="mq-title">{c.title}</div>
                      {c.subtitle && <div className="mq-sub">{c.subtitle}</div>}
                    </div>
                  </Link>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
