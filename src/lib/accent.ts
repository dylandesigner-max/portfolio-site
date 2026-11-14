// Per-project accent color. A project picks one brand color in the admin;
// this derives the four values the page actually needs so the color stays
// legible in both themes:
//
//   --pa-light / --pa-dark         the accent itself; if it's too faint for
//                                  the theme, only its lightness is shifted
//                                  (darker on light, lighter on dark) until it
//                                  reaches 4.5:1 against the page — it's used
//                                  for small text.
//   --pa-light-ink / --pa-dark-ink text color for anything filled with the
//                                  accent (e.g. the primary button's hover).
//
// Mirrored in portfolio-admin/src/lib/accent.ts for the admin preview.

import type { CSSProperties } from "react";

const LIGHT_BG = "#eef1f8"; // --bg (light) — the lower-contrast of bg / bg-raised
const DARK_BG = "#101219"; // --bg-raised (dark) — the lower-contrast of the two
const INK_DARK = "#0a0c14";
const INK_LIGHT = "#ffffff";
const MIN_CONTRAST = 4.5;

type RGB = [number, number, number];

export function parseHex(input?: string): RGB | null {
  const hex = input?.trim().replace(/^#/, "") ?? "";
  const full = hex.length === 3 ? hex.split("").map((c) => c + c).join("") : hex;
  if (!/^[0-9a-fA-F]{6}$/.test(full)) return null;
  return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16)) as RGB;
}

function toHex([r, g, b]: RGB) {
  return "#" + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, "0")).join("");
}

function luminance([r, g, b]: RGB) {
  const lin = (v: number) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

export function contrast(a: RGB, b: RGB) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

function toHsl([r, g, b]: RGB): [number, number, number] {
  const [rn, gn, bn] = [r / 255, g / 255, b / 255];
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  const h =
    max === rn ? ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6 : max === gn ? ((bn - rn) / d + 2) / 6 : ((rn - gn) / d + 4) / 6;
  return [h, s, l];
}

function fromHsl([h, s, l]: [number, number, number]): RGB {
  if (s === 0) return [l * 255, l * 255, l * 255];
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const hue = (t: number) => {
    const x = t < 0 ? t + 1 : t > 1 ? t - 1 : t;
    if (x < 1 / 6) return p + (q - p) * 6 * x;
    if (x < 1 / 2) return q;
    if (x < 2 / 3) return p + (q - p) * (2 / 3 - x) * 6;
    return p;
  };
  return [hue(h + 1 / 3) * 255, hue(h) * 255, hue(h - 1 / 3) * 255];
}

/** Moves only the lightness (darker or lighter) in small steps until the
 * color reaches the minimum contrast against `bg` — hue and saturation stay,
 * so a gold stays gold instead of turning muddy. */
function ensureContrast(color: RGB, bg: RGB, direction: "darker" | "lighter"): RGB {
  if (contrast(color, bg) >= MIN_CONTRAST) return color;
  const [h, sat, l] = toHsl(color);
  for (let step = 1; step <= 50; step++) {
    const nextL = direction === "darker" ? l - step * 0.02 : l + step * 0.02;
    const candidate = fromHsl([h, sat, Math.min(Math.max(nextL, 0), 1)]);
    if (contrast(candidate, bg) >= MIN_CONTRAST) return candidate;
  }
  return direction === "darker" ? [0, 0, 0] : [255, 255, 255];
}

function inkFor(fill: RGB) {
  const dark = parseHex(INK_DARK)!;
  const light = parseHex(INK_LIGHT)!;
  return contrast(fill, dark) >= contrast(fill, light) ? INK_DARK : INK_LIGHT;
}

export type AccentPalette = { light: string; lightInk: string; dark: string; darkInk: string };

export function accentPalette(input?: string): AccentPalette | null {
  const color = parseHex(input);
  if (!color) return null;
  const light = ensureContrast(color, parseHex(LIGHT_BG)!, "darker");
  const dark = ensureContrast(color, parseHex(DARK_BG)!, "lighter");
  return { light: toHex(light), lightInk: inkFor(light), dark: toHex(dark), darkInk: inkFor(dark) };
}

/** Inline style for the `.project-accent` wrapper, or undefined for "use the
 * site default". */
export function accentStyle(input?: string): CSSProperties | undefined {
  const p = accentPalette(input);
  if (!p) return undefined;
  return {
    "--pa-light": p.light,
    "--pa-light-ink": p.lightInk,
    "--pa-dark": p.dark,
    "--pa-dark-ink": p.darkInk,
  } as CSSProperties;
}
