# 为 comics 频道中 AniList 无法获取封面的西方漫画生成占位封面（零版权）。
# 品牌紫调 + 标题排版，与 books 占位封面风格一致。
# 用法：python scripts/gen-comics-placeholders.py
import os, re, json
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_ROOT = os.path.join(ROOT, 'public', 'images', 'comics')
GEN_FILE = os.path.join(ROOT, 'lib', 'media', 'generated-comics.ts')
SIZE = 200
QUALITY = 82
FONT = 'C:/Windows/Fonts/arial.ttf'

TOP = (46, 36, 71)
BOT = (26, 22, 42)
ACCENT = (167, 139, 250)

def wrap(text, font, max_w):
    words = text.split()
    lines, cur = [], ''
    for w in words:
        test = (cur + ' ' + w).strip()
        if font.getlength(test) <= max_w:
            cur = test
        else:
            if cur: lines.append(cur)
            cur = w
    if cur: lines.append(cur)
    return lines

def slugify(s):
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')

def make_cover(title, out_path):
    img = Image.new('RGB', (SIZE, SIZE))
    d = ImageDraw.Draw(img)
    for y in range(SIZE):
        t = y / (SIZE - 1)
        r = int(TOP[0] + (BOT[0]-TOP[0])*t)
        g = int(TOP[1] + (BOT[1]-TOP[1])*t)
        b = int(TOP[2] + (BOT[2]-TOP[2])*t)
        d.line([(0,y),(SIZE,y)], fill=(r,g,b))
    d.rectangle([0,0,SIZE,6], fill=ACCENT)
    f_title = ImageFont.truetype(FONT, 18)
    pad = 14
    title_lines = wrap(title, f_title, SIZE - 2*pad)
    lh = 22
    start_y = 70
    for i, ln in enumerate(title_lines[:4]):
        w = f_title.getlength(ln)
        d.text(((SIZE-w)/2, start_y + i*lh), ln, font=f_title, fill=(245,243,255))
    d.text((pad, SIZE-26), 'GRAPHIC NOVEL', font=ImageFont.truetype(FONT, 10), fill=ACCENT)
    img.save(out_path, 'WEBP', quality=QUALITY)

def main():
    nulls = json.load(open(os.path.join(ROOT, 'scripts', '_comics_null.json'), encoding='utf-8'))
    os.makedirs(IMG_ROOT, exist_ok=True)
    lines = open(GEN_FILE, encoding='utf-8').read().split('\n')
    done = 0
    for it in nulls:
        slug = slugify(it.get('title',''))
        out = os.path.join(IMG_ROOT, f'{slug}.webp')
        if not os.path.exists(out):
            make_cover(it.get('title',''), out)
        # 回写到 generated（兼容 JSON 与 TS 两种格式）
        rid = it['refId']
        for i, l in enumerate(lines):
            if f'refId":"{rid}"' in l or f'refId: "{rid}"' in l:
                lines[i] = re.sub(r'"?cover"?:\s*(null|"[^"]*")', f'cover: "/images/comics/{slug}.webp"', l)
                break
        done += 1
    open(GEN_FILE, 'w', encoding='utf-8').write('\n'.join(lines))
    print(f'== comics placeholders: generated+linked {done} ==')

if __name__ == '__main__':
    main()
