"""Generate TechnoHealth footer badges in the exact Spike API visual tone."""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os
import math
import shutil

OUT = r"c:\Users\umroot\Documents\Technohealth\public\Images\compliance"
SPIKE = os.path.join(OUT, "_spike")
SIZE = 512  # high-res source; footer scales down


def find_font(size, bold=True):
    paths = [
        r"C:\Windows\Fonts\arialbd.ttf" if bold else r"C:\Windows\Fonts\arial.ttf",
        r"C:\Windows\Fonts\segoeuib.ttf" if bold else r"C:\Windows\Fonts\segoeui.ttf",
        r"C:\Windows\Fonts\arial.ttf",
    ]
    for p in paths:
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()


def circular_alpha(img):
    mask = Image.new("L", img.size, 0)
    ImageDraw.Draw(mask).ellipse((0, 0, img.size[0] - 1, img.size[1] - 1), fill=255)
    out = Image.new("RGBA", img.size, (0, 0, 0, 0))
    out.paste(img, (0, 0), mask)
    return out


def draw_arc_text(base, text, cx, cy, radius, font, fill=(0, 0, 0, 255), top=True):
    # measure
    widths = []
    for ch in text:
        b = ImageDraw.Draw(Image.new("RGBA", (1, 1))).textbbox((0, 0), ch, font=font)
        widths.append(max(1, b[2] - b[0]) + 1)
    total = sum(widths)
    span = total / radius
    if top:
        angle = -math.pi / 2 - span / 2
        direction = 1
    else:
        angle = math.pi / 2 + span / 2
        direction = -1
    for ch, w in zip(text, widths):
        a = angle + direction * (w / radius) / 2
        x = cx + radius * math.cos(a)
        y = cy + radius * math.sin(a)
        bb = ImageDraw.Draw(Image.new("RGBA", (1, 1))).textbbox((0, 0), ch, font=font)
        gw, gh = bb[2] - bb[0] + 6, bb[3] - bb[1] + 6
        glyph = Image.new("RGBA", (max(gw, 10), max(gh, 10)), (0, 0, 0, 0))
        ImageDraw.Draw(glyph).text((-bb[0] + 3, -bb[1] + 3), ch, font=font, fill=fill)
        rot = math.degrees(a) + (90 if top else -90)
        glyph = glyph.rotate(-rot, expand=True, resample=Image.Resampling.BICUBIC)
        base.alpha_composite(glyph, (int(x - glyph.width / 2), int(y - glyph.height / 2)))
        angle += direction * (w / radius)


def double_ring(d, size, outer=8, gap=10, inner=4):
    """Spike-style double circular border."""
    m = outer // 2 + 2
    d.ellipse((m, m, size - 1 - m, size - 1 - m), outline=(0, 0, 0, 255), width=outer)
    m2 = m + outer + gap
    d.ellipse((m2, m2, size - 1 - m2, size - 1 - m2), outline=(0, 0, 0, 255), width=inner)


def make_from_spike_hipaa():
    src = os.path.join(SPIKE, "hipaa.png")
    im = Image.open(src).convert("RGBA")
    # ensure pure black ink
    px = im.load()
    for y in range(im.height):
        for x in range(im.width):
            r, g, b, a = px[x, y]
            if a < 20:
                px[x, y] = (0, 0, 0, 0)
            else:
                px[x, y] = (0, 0, 0, a)
    im = im.resize((SIZE, SIZE), Image.Resampling.LANCZOS)
    return circular_alpha(im)


def make_hitrust():
    """CCPA-like Spike seal for HITRUST."""
    size = SIZE
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    double_ring(d, size)

    # shield + check (top)
    cx = size // 2
    shield = [
        (cx, 95),
        (cx + 55, 115),
        (cx + 55, 175),
        (cx, 215),
        (cx - 55, 175),
        (cx - 55, 115),
    ]
    d.line(shield + [shield[0]], fill=(0, 0, 0, 255), width=6)
    d.line([(cx - 28, 155), (cx - 8, 175), (cx + 32, 130)], fill=(0, 0, 0, 255), width=8)

    # center text
    font_big = find_font(54)
    font_sm = find_font(28)
    for text, font, y in [("HITRUST", font_big, 235), ("CERTIFIED", font_sm, 300)]:
        bb = d.textbbox((0, 0), text, font=font)
        d.text(((size - (bb[2] - bb[0])) // 2, y), text, font=font, fill=(0, 0, 0, 255))

    # bottom curved label
    draw_arc_text(img, "RISK BASED", cx, size // 2, 200, find_font(22), top=False)
    return circular_alpha(img)


def make_soc2():
    size = SIZE
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    double_ring(d, size)
    cx = size // 2

    # small AICPA-style mark / circle with check at top
    d.ellipse((cx - 36, 100, cx + 36, 172), outline=(0, 0, 0, 255), width=5)
    d.line([(cx - 16, 138), (cx - 2, 152), (cx + 18, 122)], fill=(0, 0, 0, 255), width=6)

    font_big = find_font(64)
    font_sm = find_font(30)
    for text, font, y in [("SOC 2", font_big, 200), ("TYPE II", font_sm, 275)]:
        bb = d.textbbox((0, 0), text, font=font)
        d.text(((size - (bb[2] - bb[0])) // 2, y), text, font=font, fill=(0, 0, 0, 255))

    draw_arc_text(img, "COMPLIANT", cx, size // 2, 200, find_font(24), top=False)
    return circular_alpha(img)


def make_self_hosted():
    size = SIZE
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    double_ring(d, size)
    cx = size // 2

    # server icon (Spike CCPA icon placement)
    d.rounded_rectangle((cx - 48, 105, cx + 48, 185), radius=10, outline=(0, 0, 0, 255), width=5)
    for y in (122, 145, 168):
        d.rectangle((cx - 34, y, cx + 34, y + 12), outline=(0, 0, 0, 255), width=3)
        d.ellipse((cx + 20, y + 2, cx + 30, y + 12), fill=(0, 0, 0, 255))

    font_big = find_font(42)
    font_sm = find_font(28)
    for text, font, y in [("SELF", font_big, 210), ("HOSTED", font_big, 260)]:
        bb = d.textbbox((0, 0), text, font=font)
        d.text(((size - (bb[2] - bb[0])) // 2, y), text, font=font, fill=(0, 0, 0, 255))

    draw_arc_text(img, "INFRASTRUCTURE", cx, size // 2, 200, find_font(20), top=False)
    return circular_alpha(img)


def save_icon(img, name):
    # also produce 256 display size
    path = os.path.join(OUT, name)
    img256 = img.resize((256, 256), Image.Resampling.LANCZOS)
    img256.save(path, "PNG", optimize=True)
    print("Wrote", path, os.path.getsize(path))


# Use Spike's own HIPAA badge for exact tone match
save_icon(make_from_spike_hipaa(), "hipaa.png")
save_icon(make_hitrust(), "hitrust.png")
save_icon(make_soc2(), "soc2.png")
save_icon(make_self_hosted(), "self-hosted.png")

# previews on white like Spike page
prev = os.path.join(OUT, "_preview")
os.makedirs(prev, exist_ok=True)
for name in ["hipaa.png", "hitrust.png", "soc2.png", "self-hosted.png"]:
    im = Image.open(os.path.join(OUT, name)).convert("RGBA")
    bg = Image.new("RGB", im.size, (255, 255, 255))
    bg.paste(im, mask=im.split()[-1])
    bg.save(os.path.join(prev, name))
