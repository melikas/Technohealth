"""Compliance seals using each framework's familiar mark/colors."""
from PIL import Image, ImageDraw, ImageFont
import os

OUT = r"c:\Users\umroot\Documents\Technohealth\public\Images\compliance"
SIZE = 512
os.makedirs(OUT, exist_ok=True)

NAVY = (15, 23, 42, 255)
WHITE = (255, 255, 255, 255)
QUEBEC_BLUE = (0, 57, 166, 255)  # Quebec flag blue
CANADA_RED = (212, 20, 36, 255)  # Canada red
HIPAA_TEAL = (14, 116, 144, 255)
HOST_SLATE = (30, 41, 59, 255)


def font(size, bold=True):
    for p in (
        r"C:\Windows\Fonts\arialbd.ttf" if bold else r"C:\Windows\Fonts\arial.ttf",
        r"C:\Windows\Fonts\segoeuib.ttf" if bold else r"C:\Windows\Fonts\segoeui.ttf",
    ):
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()


def seal(border):
    img = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.ellipse((6, 6, SIZE - 7, SIZE - 7), fill=WHITE, outline=border, width=12)
    d.ellipse((30, 30, SIZE - 31, SIZE - 31), outline=border, width=3)
    return img, d


def centered(d, text, y, fnt, fill):
    bb = d.textbbox((0, 0), text, font=fnt)
    d.text(((SIZE - (bb[2] - bb[0])) // 2, y), text, font=fnt, fill=fill)


def fleur_de_lis(d, cx, cy, color, s=1.0):
    # Classic 3-petal fleur-de-lis silhouette
    body = [
        (cx, cy - 50 * s),
        (cx + 8 * s, cy - 22 * s),
        (cx + 30 * s, cy - 36 * s),
        (cx + 18 * s, cy - 8 * s),
        (cx + 36 * s, cy + 10 * s),
        (cx + 10 * s, cy + 2 * s),
        (cx + 12 * s, cy + 28 * s),
        (cx, cy + 14 * s),
        (cx - 12 * s, cy + 28 * s),
        (cx - 10 * s, cy + 2 * s),
        (cx - 36 * s, cy + 10 * s),
        (cx - 18 * s, cy - 8 * s),
        (cx - 30 * s, cy - 36 * s),
        (cx - 8 * s, cy - 22 * s),
    ]
    d.polygon(body, fill=color)
    # band
    d.rectangle((cx - 26 * s, cy + 6 * s, cx + 26 * s, cy + 14 * s), fill=color)
    d.rectangle((cx - 5 * s, cy + 14 * s, cx + 5 * s, cy + 42 * s), fill=color)
    d.ellipse((cx - 28 * s, cy + 34 * s, cx - 12 * s, cy + 48 * s), fill=color)
    d.ellipse((cx + 12 * s, cy + 34 * s, cx + 28 * s, cy + 48 * s), fill=color)


def maple_leaf(d, cx, cy, color, s=1.0):
    leaf = [
        (cx, cy - 46 * s),
        (cx + 8 * s, cy - 24 * s),
        (cx + 28 * s, cy - 34 * s),
        (cx + 18 * s, cy - 12 * s),
        (cx + 42 * s, cy - 8 * s),
        (cx + 22 * s, cy + 2 * s),
        (cx + 30 * s, cy + 22 * s),
        (cx + 10 * s, cy + 10 * s),
        (cx + 12 * s, cy + 32 * s),
        (cx, cy + 18 * s),
        (cx - 12 * s, cy + 32 * s),
        (cx - 10 * s, cy + 10 * s),
        (cx - 30 * s, cy + 22 * s),
        (cx - 22 * s, cy + 2 * s),
        (cx - 42 * s, cy - 8 * s),
        (cx - 18 * s, cy - 12 * s),
        (cx - 28 * s, cy - 34 * s),
        (cx - 8 * s, cy - 24 * s),
    ]
    d.polygon(leaf, fill=color)
    d.rectangle((cx - 4 * s, cy + 10 * s, cx + 4 * s, cy + 48 * s), fill=color)


def hipaa_mark(d, cx, cy, color):
    # Staff + twin serpents (common HIPAA badge motif)
    d.line([(cx, cy - 40), (cx, cy + 44)], fill=color, width=6)
    d.ellipse((cx - 11, cy - 54, cx + 11, cy - 32), outline=color, width=4)
    for dy in (-8, 14):
        d.arc((cx - 34, cy + dy - 18, cx + 2, cy + dy + 22), 210, 30, fill=color, width=4)
        d.arc((cx - 2, cy + dy - 18, cx + 34, cy + dy + 22), 150, 330, fill=color, width=4)


def server_mark(d, cx, cy, color):
    d.rounded_rectangle((cx - 42, cy - 38, cx + 42, cy + 38), radius=10, outline=color, width=5)
    for y in (cy - 22, cy - 2, cy + 18):
        d.rounded_rectangle((cx - 30, y, cx + 30, y + 14), radius=4, outline=color, width=3)
        d.ellipse((cx + 16, y + 3, cx + 26, y + 11), fill=color)


def make_law25():
    img, d = seal(QUEBEC_BLUE)
    fleur_de_lis(d, SIZE // 2, 168, QUEBEC_BLUE, 1.05)
    centered(d, "LAW 25", 272, font(48), QUEBEC_BLUE)
    centered(d, "QUEBEC", 334, font(22, False), (0, 57, 166, 200))
    return img


def make_pipeda():
    img, d = seal(CANADA_RED)
    maple_leaf(d, SIZE // 2, 160, CANADA_RED, 1.0)
    centered(d, "PIPEDA", 272, font(46), CANADA_RED)
    centered(d, "CANADA", 334, font(22, False), (212, 20, 36, 200))
    return img


def make_hipaa():
    img, d = seal(HIPAA_TEAL)
    hipaa_mark(d, SIZE // 2, 162, HIPAA_TEAL)
    centered(d, "HIPAA", 272, font(48), HIPAA_TEAL)
    centered(d, "READY", 334, font(22, False), (14, 116, 144, 200))
    return img


def make_self_hosted():
    img, d = seal(HOST_SLATE)
    server_mark(d, SIZE // 2, 160, HOST_SLATE)
    centered(d, "SELF", 268, font(40), HOST_SLATE)
    centered(d, "HOSTED", 318, font(40), HOST_SLATE)
    return img


def save(img, name):
    path = os.path.join(OUT, name)
    img.resize((256, 256), Image.Resampling.LANCZOS).save(path, "PNG", optimize=True)
    print("Wrote", name)


save(make_law25(), "law25.png")
save(make_pipeda(), "pipeda.png")
save(make_hipaa(), "hipaa.png")
save(make_self_hosted(), "self-hosted.png")
