# 将下载的封面（jpg/png）转为站点统一 WebP：最长边 200px、quality 82、RGB。
# 用法：python _to_webp.py <src> <out.webp>
import sys
from PIL import Image

TARGET = 200
QUALITY = 82

def main():
    if len(sys.argv) < 3:
        print('usage: _to_webp.py <src> <out.webp>')
        sys.exit(1)
    src, out = sys.argv[1], sys.argv[2]
    with Image.open(src) as im:
        im = im.convert('RGB')
        w, h = im.size
        longest = max(w, h)
        if longest > TARGET:
            scale = TARGET / longest
            im = im.resize((max(1, int(round(w * scale))), max(1, int(round(h * scale)))), Image.LANCZOS)
        im.save(out, 'WEBP', quality=QUALITY)
    print(f'  webp -> {out}')

if __name__ == '__main__':
    main()
