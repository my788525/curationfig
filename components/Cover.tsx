'use client';
import { useState } from 'react';

// 封面图：加载失败（缺图/坏图）时回退到站点默认占位图。
// 静态导出下用 client component 处理 onError，避免破图影响观感。
export default function Cover({ src, alt, className }: { src?: string | null; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  const finalSrc = failed || !src ? '/images/default-cover.webp' : src;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={finalSrc}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
