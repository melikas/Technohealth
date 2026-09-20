"""Spike-style circular seals for Quebec-relevant TechnoHealth badges."""
from PIL import Image, ImageDraw, ImageFont
import os
import math

OUT = r"c:\Users\umroot\Documents\Technohealth\public\Images\compliance"
SIZE = 512
os.makedirs(OUT, exist_ok=True)


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


def double_ring(d, size, outer=7, gap=9, inner=3):
    m = outer // 2 + 2
    d.ellipse((m, m, size - 1 - m, size - 1 - m), outline=(0, 0, 0, 255), width=outer)
    m2 = m + outer + gap
    d.ellipse((m2, m2, size - 1 - m2, size - 1 - m2), outline=(0, 0, 0, 255), width=inner)


def center_text(d, size, lines):
    for text, font, y in lines:
        bb = d.textbbox((0, 0), text, font=font)
        d.text(((size - (bb[2] - bb[0])) // 2, y), text, font=font, fill=(0, 0, 0, 255))


def make_law25():
    size = SIZE
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    double_ring(d, size)
    cx = size // 2
    # fleur-de-lis simplified / maple-leaf-ish Quebec mark: shield
    shield = [(cx, 95), (cx + 48, 112), (cx + 48, 168), (cx, 205), (cx - 48, 168), (cx - 48, 112)]
    d.line(shield + [shield[0]], fill=(0, 0, 0, 255), width=5)
    d.line([(cx - 18, 150), (cx - 2, 165), (cx + 22, 128)], fill=(0, 0, 0, 255), width=6)
    center_text(d, size, [
        ("LAW 25", find_font(52), 220),
        ("QUEBEC", find_font(28), 285),
    ])
    draw_arc_text(img, "PRIVACY READY", cx, cx, 200, find_font(22), top=False)
    return circular_alpha(img)


def make_pipeda():
    size = SIZE
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    double_ring(d, size)
    cx = size // 2
    # maple leaf simplified as circle + check (Canada federal)
    d.ellipse((cx - 34, 105, cx + 34, 173), outline=(0, 0, 0, 255), width=5)
    d.line([(cx - 14, 142), (cx - 2, 154), (cx + 16, 126)], fill=(0, 0, 0, 255), width=6)
    center_text(d, size, [
        ("PIPEDA", find_font(54), 200),
        ("CANADA", find_font(28), 270),
    ])
    draw_arc_text(img, "FEDERAL PRIVACY", cx, cx, 200, find_font(20), top=False)
    return circular_alpha(img)


def make_hipaa():
    # Prefer Spike's real HIPAA badge if present, else draw
    spike = os.path.join(OUT, "_spike", "hipaa.png")
    if os.path.exists(spike):
        im = Image.open(spike).convert("RGBA")
        px = im.load()
        for y in range(im.height):
            for x in range(im.width):
                r, g, b, a = px[x, y]
                px[x, y] = (0, 0, 0, 0) if a < 20 else (0, 0, 0, a)
        return circular_alpha(im.resize((SIZE, SIZE), Image.Resampling.LANCZOS))

    size = SIZE
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    double_ring(d, size)
    cx = size // 2
    d.line((cx, cx - 50, cx, cx + 40), fill=(0, 0, 0, 255), width=5)
    d.arc((cx - 36, cx - 58, cx - 2, cx - 20), 200, 20, fill=(0, 0, 0, 255), width=4)
    d.arc((cx + 2, cx - 58, cx + 36, cx - 20), 160, 340, fill=(0, 0, 0, 255), width=4)
    d.arc((cx - 30, cx - 22, cx + 4, cx + 22), 200, 20, fill=(0, 0, 0, 255), width=3)
    d.arc((cx - 4, cx - 22, cx + 30, cx + 22), 160, 340, fill=(0, 0, 0, 255), width=3)
    draw_arc_text(img, "HIPAA", cx, cx, 195, find_font(28), top=True)
    draw_arc_text(img, "COMPLIANT", cx, cx, 195, find_font(24), top=False)
    return circular_alpha(img)


def make_self_hosted():
    size = SIZE
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    double_ring(d, size)
    cx = size // 2
    d.rounded_rectangle((cx - 46, 108, cx + 46, 182), radius=8, outline=(0, 0, 0, 255), width=5)
    for y in (124, 146, 168):
        d.rectangle((cx - 32, y, cx + 32, y + 12), outline=(0, 0, 0, 255), width=3)
        d.ellipse((cx + 18, y + 2, cx + 28, y + 12), fill=(0, 0, 0, 255))
    center_text(d, size, [
        ("SELF", find_font(42), 210),
        ("HOSTED", find_font(42), 260),
    ])
    draw_arc_text(img, "YOUR INFRASTRUCTURE", cx, cx, 198, find_font(18), top=False)
    return circular_alpha(img)


def save(img, name):
    path = os.path.join(OUT, name)
    img.resize((256, 256), Image.Resampling.LANCZOS).save(path, "PNG", optimize=True)
    print("Wrote", name, os.path.getsize(path))


# Re-download Spike HIPAA for authenticity
import urllib.request
spike_dir = os.path.join(OUT, "_spike")
os.makedirs(spike_dir, exist_ok=True)
hipaa_url = "https://cdn.prod.website-files.com/683d56d98426b36891bcd07e/68483b18288d8ad0854c6b91_cd76ad85c0c6084d24b1779c0396b09b_HIPPA.avif"
try:
    req = urllib.request.Request(hipaa_url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        open(os.path.join(spike_dir, "hipaa.avif"), "wb").write(resp.read())
    Image.open(os.path.join(spike_dir, "hipaa.avif")).convert("RGBA").save(
        os.path.join(spike_dir, "hipaa.png")
    )
except Exception as e:
    print("Spike HIPAA download skipped:", e)

save(make_law25(), "law25.png")
save(make_pipeda(), "pipeda.png")
save(make_hipaa(), "hipaa.png")
save(make_self_hosted(), "self-hosted.png")

# remove obsolete claimed certs
for obsolete in ["hitrust.png", "soc2.png", "soc2.svg", "self-hosted.svg"]:
    p = os.path.join(OUT, obsolete)
    if os.path.exists(p):
        os.remove(p)
        print("Removed", obsolete)

import shutil
shutil.rmtree(spike_dir, ignore_errors=True)
