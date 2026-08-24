import type { StyleDef } from '@/lib/media/style-glossary';

// 页面内风格定义小卡片：解释一个风格是什么、代表哪些特征（API 拿不到的策展知识）。
export default function StyleCards({ styles }: { styles: StyleDef[] }) {
  if (!styles || styles.length === 0) return null;
  return (
    <div className="style-cards" style={{ marginTop: 16 }}>
      {styles.map((s) => (
        <div key={s.tag} className="card style-card">
          <div className="style-tag">What “{s.label}” means here</div>
          <p className="style-blurb">{s.blurb}</p>
        </div>
      ))}
    </div>
  );
}
