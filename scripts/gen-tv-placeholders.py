# 为 tv 频道生成占位封面（零版权，品牌紫调+标题）。
# 原因：TVmaze 被代理封锁无法重新下载真实图，且本地 TVmaze 命名 webp 与当前 IMDb refId 无法关联。
# 用法：python scripts/gen-tv-placeholders.py
import os, re, json
from PIL import Image, ImageDraw, ImageFont

ROOT = 'D:/work/GitHub/curationfig'
IMG = os.path.join(ROOT, 'public', 'images', 'tv')
GEN = os.path.join(ROOT, 'lib', 'media', 'generated-tv.ts')
TOP = (46, 36, 71); BOT = (26, 22, 42); ACC = (167, 139, 250); FONT = 'C:/Windows/Fonts/arial.ttf'

def wrap(t, f, mw):
    out = []; cur = ''
    for w in t.split():
        test = (cur + ' ' + w).strip()
        if f.getlength(test) <= mw: cur = test
        else:
            if cur: out.append(cur)
            cur = w
    if cur: out.append(cur)
    return out

def slug(s): return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')

def make_cover(title, out_path):
    img = Image.new('RGB', (200, 200)); d = ImageDraw.Draw(img)
    for y in range(200):
        t = y / 199
        d.line([(0,y),(200,y)], fill=(int(TOP[0]+(BOT[0]-TOP[0])*t), int(TOP[1]+(BOT[1]-TOP[1])*t), int(TOP[2]+(BOT[2]-TOP[2])*t)))
    d.rectangle([0,0,200,6], fill=ACC)
    f = ImageFont.truetype(FONT, 18); pad = 14
    for i, ln in enumerate(wrap(title, f, 200-2*pad)[:4]):
        w = f.getlength(ln); d.text(((200-w)/2, 70+i*22), ln, font=f, fill=(245,243,255))
    d.text((pad, 174), 'TV SERIES', font=ImageFont.truetype(FONT, 10), fill=ACC)
    img.save(out_path, 'WEBP', quality=82)

def main():
    arr = json.load(open(os.path.join(ROOT, 'scripts', '_tv_all.json'), encoding='utf-8'))
    os.makedirs(IMG, exist_ok=True)
    lines = open(GEN, encoding='utf-8').read().split('\n')
    done = 0
    for it in arr:
        s = slug(it['title']); out = os.path.join(IMG, f'{s}.webp')
        if not os.path.exists(out):
            make_cover(it['title'], out)
        rid = it['refId']
        for i, l in enumerate(lines):
            if f'"refId": "{rid}"' in l or f'refId: "{rid}"' in l or (f'refId":"{rid}"' in l):
                lines[i] = re.sub(r'"?cover"?:\s*(null|"[^"]*")', f'cover: "/images/tv/{s}.webp"', l); break
        done += 1
    open(GEN, 'w', encoding='utf-8').write('\n'.join(lines))
    print(f'== tv placeholders: {done} ==')

if __name__ == '__main__':
    main()
