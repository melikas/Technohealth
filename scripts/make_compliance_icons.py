from PIL import Image, ImageDraw, ImageFont, ImageOps
import os
import urllib.request
import shutil
import math

out_dir = r"c:\Users\umroot\Documents\Technohealth\public\Images\compliance"
os.makedirs(out_dir, exist_ok=True)
SIZE = 256
TMP = os.path.join(out_dir, "_tmp")
os.makedirs(TMP, exist_ok=True)

SOURCES = {
    "hitrust": "https://cdn.prod.website-files.com/62719a041d28d7b5603dd995/6418e969ea0646310d7e5b83_HITRUST-Certified-r2%20Logo.png",
    "soc2": "https://cdn.prod.website-files.com/62719a041d28d7b5603dd995/62c1c74aa3ad0f69af0ced5d_SOC-badge.png",
}


def download(url, path):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        with open(path, "wb") as f:
            f.write(resp.read())


def find_font(size):
    for path in [
        r"C:\Windows\Fonts\arialbd.ttf",
        r"C:\Windows\Fonts\segoeuib.ttf",
        r"C:\Windows\Fonts\arial.ttf",
    ]:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def circular_mask(size):
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).ellipse((1, 1, size - 2, size - 2), fill=255)
    return mask


def draw_curved_text(base, text, radius, center, font, fill=(255, 255, 255, 255), top=True):
    """Draw text along a circle (approximate with rotated glyphs)."""
    cx, cy = center
    # measure total arc length needed
    widths = []
    for ch in text:
        bbox = ImageDraw.Draw(Image.new("RGBA", (1, 1))).textbbox((0, 0), ch, font=font)
        widths.append(bbox[2] - bbox[0] + 2)
    total = sum(widths)
    angle_span = total / radius
    start = -math.pi / 2 - angle_span / 2 if top else math.pi / 2 + angle_span / 2
    direction = 1 if top else -1
    angle = start
    for ch, w in zip(text, widths):
        a = angle + direction * (w / radius) / 2
        x = cx + radius * math.cos(a)
        y = cy + radius * math.sin(a)
        # glyph image
        g_bbox = ImageDraw.Draw(Image.new("RGBA", (1, 1))).textbbox((0, 0), ch, font=font)
        gw, gh = g_bbox[2] - g_bbox[0] + 4, g_bbox[3] - g_bbox[1] + 4
        glyph = Image.new("RGBA", (max(gw, 8), max(gh, 8)), (0, 0, 0, 0))
        ImageDraw.Draw(glyph).text((-g_bbox[0] + 2, -g_bbox[1] + 2), ch, font=font, fill=fill)
        # rotation: tangent
        rot = math.degrees(a) + 90 if top else math.degrees(a) - 90
        glyph = glyph.rotate(-rot, expand=True, resample=Image.Resampling.BICUBIC)
        base.alpha_composite(glyph, (int(x - glyph.width / 2), int(y - glyph.height / 2)))
        angle += direction * (w / radius)


def make_hipaa(dest):
    size = SIZE
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    # white disc + black rings
    d.ellipse((4, 4, size - 5, size - 5), fill=(255, 255, 255, 255), outline=(0, 0, 0, 255), width=4)
    # thick black band for text
    d.ellipse((18, 18, size - 19, size - 19), outline=(0, 0, 0, 255), width=34)
    # inner white
    d.ellipse((50, 50, size - 51, size - 51), fill=(255, 255, 255, 255), outline=(0, 0, 0, 255), width=3)

    # caduceus
    cx, cy = size // 2, size // 2 - 4
    d.line((cx, cy - 38, cx, cy + 36), fill=(0, 0, 0, 255), width=5)
    # wings
    d.arc((cx - 34, cy - 48, cx - 2, cy - 18), 200, 20, fill=(0, 0, 0, 255), width=4)
    d.arc((cx + 2, cy - 48, cx + 34, cy - 18), 160, 340, fill=(0, 0, 0, 255), width=4)
    # snakes
    d.arc((cx - 28, cy - 20, cx + 4, cy + 20), 200, 20, fill=(0, 0, 0, 255), width=3)
    d.arc((cx - 4, cy - 20, cx + 28, cy + 20), 160, 340, fill=(0, 0, 0, 255), width=3)
    d.arc((cx - 28, cy + 4, cx + 4, cy + 40), 200, 20, fill=(0, 0, 0, 255), width=3)
    d.arc((cx - 4, cy + 4, cx + 28, cy + 40), 160, 340, fill=(0, 0, 0, 255), width=3)
    d.ellipse((cx - 6, cy - 46, cx + 6, cy - 34), outline=(0, 0, 0, 255), width=3)

    font = find_font(18)
    draw_curved_text(img, "HIPAA", radius=86, center=(cx, cy), font=font, top=True)
    draw_curved_text(img, "COMPLIANT", radius=86, center=(cx, cy), font=font, top=False)

    # apply circular outer mask
    out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    out.paste(img, (0, 0), circular_mask(size))
    out.save(dest, "PNG", optimize=True)


def to_bw_logo_icon(src_path, dest_path, mode="dark_on_light", circular=False):
    im = Image.open(src_path).convert("RGBA")
    bg = Image.new("RGBA", im.size, (255, 255, 255, 255))
    bg.paste(im, mask=im.split()[-1])
    gray = ImageOps.grayscale(bg.convert("RGB"))
    gray = ImageOps.autocontrast(gray, cutoff=1)
    if mode == "invert":
        gray = ImageOps.invert(gray)
    gray = gray.point(lambda p: 0 if p < 155 else 255)

    inv = ImageOps.invert(gray)
    bbox = inv.getbbox()
    if bbox:
        gray = gray.crop(bbox)

    side = max(gray.size) + 20
    square = Image.new("L", (side, side), 255)
    square.paste(gray, ((side - gray.width) // 2, (side - gray.height) // 2))
    square = square.resize((SIZE, SIZE), Image.Resampling.LANCZOS)
    square = square.point(lambda p: 0 if p < 180 else 255)
    rgba = Image.merge("RGBA", (square, square, square, Image.new("L", (SIZE, SIZE), 255)))

    if circular:
        mask = circular_mask(SIZE)
        out = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
        out.paste(rgba, (0, 0), mask)
        ImageDraw.Draw(out).ellipse((3, 3, SIZE - 4, SIZE - 4), outline=(0, 0, 0, 255), width=4)
        rgba = out

    rgba.save(dest_path, "PNG", optimize=True)


def make_self_hosted(dest_path):
    size = SIZE
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.ellipse((4, 4, size - 5, size - 5), fill=(255, 255, 255, 255), outline=(0, 0, 0, 255), width=5)
    d.ellipse((18, 18, size - 19, size - 19), outline=(0, 0, 0, 255), width=2)
    d.rounded_rectangle((78, 58, 178, 132), radius=8, outline=(0, 0, 0, 255), width=4)
    for y in (72, 92, 112):
        d.rectangle((92, y, 164, y + 12), outline=(0, 0, 0, 255), width=2)
        d.ellipse((150, y + 2, 160, y + 10), fill=(0, 0, 0, 255))
    d.rectangle((110, 140, 146, 148), fill=(0, 0, 0, 255))
    font = find_font(18)
    for i, line in enumerate(["SELF", "HOSTED"]):
        bbox = d.textbbox((0, 0), line, font=font)
        tw = bbox[2] - bbox[0]
        d.text(((size - tw) // 2, 158 + i * 20), line, font=font, fill=(0, 0, 0, 255))
    out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    out.paste(img, (0, 0), circular_mask(size))
    out.save(dest_path, "PNG", optimize=True)


for key, url in SOURCES.items():
    tmp = os.path.join(TMP, f"{key}-src.png")
    print("Downloading", key)
    download(url, tmp)

make_hipaa(os.path.join(out_dir, "hipaa.png"))
to_bw_logo_icon(
    os.path.join(TMP, "hitrust-src.png"),
    os.path.join(out_dir, "hitrust.png"),
    mode="dark_on_light",
    circular=False,
)
to_bw_logo_icon(
    os.path.join(TMP, "soc2-src.png"),
    os.path.join(out_dir, "soc2.png"),
    mode="invert",
    circular=True,
)
make_self_hosted(os.path.join(out_dir, "self-hosted.png"))

preview_dir = os.path.join(out_dir, "_preview")
os.makedirs(preview_dir, exist_ok=True)
for name in ["hipaa.png", "hitrust.png", "soc2.png", "self-hosted.png"]:
    im = Image.open(os.path.join(out_dir, name)).convert("RGBA")
    prev = Image.new("RGB", im.size, (242, 242, 242))
    prev.paste(im, mask=im.split()[-1])
    prev.save(os.path.join(preview_dir, name))
    print(name, "ok")

shutil.rmtree(TMP, ignore_errors=True)
