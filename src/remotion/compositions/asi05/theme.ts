import { useCurrentFrame, useVideoConfig } from "remotion";
import { prog, map, easeOut, easeIn } from "../../lib/timing";

export { prog, map, easeOut, easeIn };

/** ASI05 palette — DIRECTOR-NOTE §4 (ASI06-inspected tokens; purane drafts se ye jeete hain) */
export const P = {
  paper: "#F4F1E9",
  paperDeep: "#EAE3D3",
  white: "#FFFDFA",
  ink: "#142B3A",
  blue: "#42698D",
  paleBlue: "#A6BFD2",
  muted: "#66727C",
  red: "#B34431",
  paleRed: "#F1E1DC",
  green: "#48765E",
  paleGreen: "#E3ECE5",
  ochre: "#B09164",
  plum: "#715767",
  skin: "#BF8C70",
  hair: "#2E2622",
} as const;

export const FONT = "'DejaVu Sans', 'DejaVu Sans Bold', sans-serif";
export const W = 1080;
export const H = 1920;

export function useEpi(): { t: number; frame: number; fps: number } {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return { t: frame / fps, frame, fps };
}

/** Shot ka window opacity: pehle shot me fade-in nahi, aakhiri me fade-out nahi. */
export function shotOpacity(t: number, start: number, end: number, opts?: { noIn?: boolean; noOut?: boolean }): number {
  const inn = opts?.noIn ? 1 : prog(t, start, 0.35);
  const out = opts?.noOut ? 1 : 1 - prog(t, end - 0.3, 0.3, easeIn);
  return Math.min(inn, out);
}

/**
 * Transform-string numbers ke liye rounding (2 decimal).
 * WAJAH: is Chromium build ka SVG parser lambi decimals (e.g. 1003.0058415212192)
 * wale combined translate+scale transforms ko chup-chaap DROP kar deta hai —
 * element bina error ke (0,0) par render hota hai (ASI05 S07 K02 bug, frame 2070 par pakda).
 * Har computed transform value isiliye R() se guzregi.
 */
export const R = (n: number) => Math.round(n * 100) / 100;

/** 0..1 rise kisi beat par. */
export const rise = (t: number, at: number, dur = 0.5) => prog(t, at, dur, easeOut);
/** kisi value ko ek beat-window me le jao (easeOut). */
export const travel = (t: number, start: number, end: number, from: number, to: number) =>
  map(prog(t, start, Math.max(0.01, end - start), easeOut), from, to);
