# 生成 books 频道占位封面（零版权）：品牌紫调渐变 + 书名/作者排版。
# 100% 自产，无第三方图素材，无版权风险。
# 用法：python scripts/gen-book-covers.py
import os, re, sys
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_ROOT = os.path.join(ROOT, 'public', 'images', 'books')
GEN_FILE = os.path.join(ROOT, 'lib', 'media', 'generated-books.ts')
SIZE = 200
QUALITY = 82
FONT = 'C:/Windows/Fonts/arial.ttf'

TOP = (46, 36, 71)
BOT = (26, 22, 42)
ACCENT = (167, 139, 250)  # violet-400

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

def make_cover(title, creator, out_path):
    img = Image.new('RGB', (SIZE, SIZE))
    d = ImageDraw.Draw(img)
    for y in range(SIZE):
        t = y / (SIZE - 1)
        r = int(TOP[0] + (BOT[0]-TOP[0])*t)
        g = int(TOP[1] + (BOT[1]-TOP[1])*t)
        b = int(TOP[2] + (BOT[2]-TOP[2])*t)
        d.line([(0,y),(SIZE,y)], fill=(r,g,b))
    # 顶部强调条
    d.rectangle([0,0,SIZE,6], fill=ACCENT)
    # 底部作者条
    f_title = ImageFont.truetype(FONT, 19)
    f_author = ImageFont.truetype(FONT, 12)
    pad = 14
    title_lines = wrap(title, f_title, SIZE - 2*pad)
    # 书名居中偏上
    lh = 23
    start_y = 54
    for i, ln in enumerate(title_lines[:4]):
        w = f_title.getlength(ln)
        d.text(((SIZE-w)/2, start_y + i*lh), ln, font=f_title, fill=(245,243,255))
    # 作者
    if creator:
        auth = f'by {creator}'
        if f_author.getlength(auth) > SIZE - 2*pad:
            auth = auth[:int(len(auth)*0.8)] + '…'
        aw = f_author.getlength(auth)
        d.text(((SIZE-aw)/2, SIZE - 34), auth, font=f_author, fill=ACCENT)
    img.save(out_path, 'WEBP', quality=QUALITY)

def main():
    import json
    tmp = os.path.join(ROOT, 'scripts', '_books_tmp.json')
    arr = json.load(open(tmp, encoding='utf-8'))
    os.makedirs(IMG_ROOT, exist_ok=True)
    lines = open(GEN_FILE, encoding='utf-8').read().split('\n')
    done = 0
    for it in arr:
        slug = slugify(it.get('title',''))
        out = os.path.join(IMG_ROOT, f'{slug}.webp')
        make_cover(it.get('title',''), it.get('creator',''), out)
        # 回写 generated 的 cover 行
        rid = it['refId']
        for i, l in enumerate(lines):
            if f'refId: "{rid}"' in l:
                lines[i] = l.replace(re.search(r'cover:\s*(null|"[^"]*")', l).group(0), f'cover: "/images/books/{slug}.webp"')
                break
        done += 1
    open(GEN_FILE, 'w', encoding='utf-8').write('\n'.join(lines))
    print(f'== books: generated {done} covers ==')

if __name__ == '__main__':
    main()
