# 图片优化脚本：①生成站点默认封面图 ②把现有封面缩到最长边 200px（显示 72px，留 2x 视网膜余量）
# 运行：python scripts/optimize_images.py
# 纯本地处理，不触碰数据源；生成的文件直接进 public/images（构建期随站导出）。
import os
import sys
from PIL import Image, ImageDraw

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_ROOT = os.path.join(ROOT, 'public', 'images')
TARGET = 200  # 最长边目标像素（webp）

DEFAULT_PATH = os.path.join(IMG_ROOT, 'default-cover.webp')


def make_default_cover(path, size=240):
    """画一张中性的紫调渐变占位封面（不依赖外部素材，避免引入第三方图）。"""
    img = Image.new('RGB', (size, size))
    draw = ImageDraw.Draw(img)
    top = (46, 36, 71)
    bot = (26, 22, 42)
    for y in range(size):
        t = y / (size - 1)
        r = int(top[0] + (bot[0] - top[0]) * t)
        g = int(top[1] + (bot[1] - top[1]) * t)
        b = int(top[2] + (bot[2] - top[2]) * t)
        draw.line([(0, y), (size, y)], fill=(r, g, b))
    cx, cy = size // 2, size // 2
    accent = (167, 139, 250)  # violet-400
    for dx in [-36, -12, 12, 36]:
        draw.rounded_rectangle([cx + dx - 5, cy - 34, cx + dx + 5, cy + 34], radius=3, fill=accent)
    draw.ellipse([cx - 14, cy + 30, cx + 14, cy + 58], fill=accent)
    img.save(path, 'WEBP', quality=82)
    print(f'  default cover -> {path}')


def optimize_dir(d, dry=False):
    if not os.path.isdir(d):
        return 0
    count = 0
    for fn in sorted(os.listdir(d)):
        if not fn.lower().endswith('.webp'):
            continue
        fp = os.path.join(d, fn)
        try:
            with Image.open(fp) as im:
                w, h = im.size
                longest = max(w, h)
                if longest <= TARGET:
                    continue
                scale = TARGET / longest
                nw, nh = max(1, int(round(w * scale))), max(1, int(round(h * scale)))
                im = im.convert('RGB')
                im = im.resize((nw, nh), Image.LANCZOS)
                if not dry:
                    im.save(fp, 'WEBP', quality=82)
                count += 1
        except Exception as e:
            print(f'  skip {fp}: {e}')
    return count


def main():
    dry = '--dry' in sys.argv
    make_default_cover(DEFAULT_PATH)
    total = 0
    for ch in ['music', 'games', 'film', 'tv']:
        d = os.path.join(IMG_ROOT, ch)
        n = optimize_dir(d, dry=dry)
        total += n
        print(f'  {ch}: {n} resized' + (' (dry)' if dry else ''))
    print(f'\nDone. {total} images optimized.' + (' (dry run)' if dry else ''))


if __name__ == '__main__':
    main()
