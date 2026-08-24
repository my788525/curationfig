'use client';

import { useRef, type ReactNode, type ElementType } from 'react';

/**
 * TiltCard — 微妙 3D 倾斜悬停。
 * - 纯指针位置计算 rotateX/rotateY（最大 ~6deg），加一层跟随光斑增强"立体感"；
 * - 默认 transform-style: preserve-3d；父级需 perspective（已在 CSS 给 .tilt-wrap / 卡片容器设置）；
 * - prefers-reduced-motion 时完全不动（CSS 层禁用过渡 + JS 不注册监听）；
 * - 可作为 div / Link 之外的任意元素（as 透传），但最常用 div 包裹。
 */
const MAX = 6; // 最大倾角（度）
const GLARE = 0.16;

export default function TiltCard({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const Tag = as as ElementType;

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width; // 0..1
    const py = (e.clientY - r.top) / r.height;
    const ry = (px - 0.5) * 2 * MAX; // 左右 → 绕 Y 轴
    const rx = (0.5 - py) * 2 * MAX; // 上下 → 绕 X 轴
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    const glare = el.querySelector<HTMLElement>('.tilt-glare');
    if (glare) {
      glare.style.opacity = String(GLARE);
      glare.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,.55), transparent 55%)`;
    }
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = '';
    const glare = el.querySelector<HTMLElement>('.tilt-glare');
    if (glare) glare.style.opacity = '0';
  }

  return (
    <Tag
      ref={ref}
      className={`tilt-card ${className || ''}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
      <span className="tilt-glare" aria-hidden="true" />
    </Tag>
  );
}
