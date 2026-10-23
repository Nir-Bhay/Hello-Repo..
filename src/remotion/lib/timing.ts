import { Easing, interpolate, spring } from "remotion";

/**
 * MOTION BIBLE — timing helpers (docs/04-MOTION-DESIGN-BIBLE.md dekho)
 * Rule: har animation useCurrentFrame() ka pure function. No CSS animation,
 * no Math.random(), no Date — warna render flicker/drift karega.
 */

// ---------- Easing curves (kabhi linear nahi, sirf continuous drift ke liye) ----------
export const easeOut = Easing.bezier(0.16, 1, 0.3, 1); // entrances / reveals
export const easeIn = Easing.bezier(0.6, 0, 0.9, 0.35); // exits — fast leave
export const easeInOut = Easing.bezier(0.65, 0, 0.35, 1); // state change / camera
export const overshoot = Easing.bezier(0.55, 0, 0.2, 1.12); // "land" hone wali value

/** Seconds -> frames. Hamesha seconds me socho, frames me convert yahi karega. */
export const S = (seconds: number, fps: number) => seconds * fps;

/**
 * prog: 0->1 progress kisi beat ke liye.
 * @param t current time (sec)  @param start beat start (sec)  @param dur duration (sec)
 */
export function prog(
  t: number,
  start: number,
  dur: number,
  ease: (n: number) => number = easeOut,
): number {
  return interpolate(t, [start, start + dur], [0, 1], {
    easing: ease,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

/** Window: andar aao (fadeIn), hold, bahar jao (fadeOut, entrance se aadha time). */
export function windowOpacity(
  t: number,
  start: number,
  end: number,
  inDur = 0.45,
  outDur = 0.22,
): number {
  return Math.min(prog(t, start, inDur), 1 - prog(t, end - outDur, outDur, easeIn));
}

// ---------- Spring presets (physical feel ke liye) ----------
export const SPRINGS = {
  settle: { damping: 14, stiffness: 140, mass: 0.8 }, // general UI enter
  heavy: { damping: 18, stiffness: 180, mass: 1 }, // bade panels / camera moves
  snap: { damping: 12, stiffness: 190, mass: 0.75 }, // control notch pe snap
  pop: { damping: 10, stiffness: 215, mass: 0.7 }, // badges, callouts, dots
  elastic: { damping: 8, stiffness: 200, mass: 1 }, // HERO moment — video me sirf EK baar
} as const;

export type SpringName = keyof typeof SPRINGS;

/** sp: spring progress kisi beat (sec) se. */
export function sp(
  frame: number,
  fps: number,
  startSec: number,
  name: SpringName = "settle",
): number {
  return spring({
    frame: frame - S(startSec, fps),
    fps,
    config: SPRINGS[name],
  });
}

/** map: progress (0..1) ko kisi range me le jao. */
export function map(p: number, from: number, to: number): number {
  return interpolate(p, [0, 1], [from, to], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

// ---------- House timing numbers (research se fixed) ----------
// words stagger ~0.09s | list items ~0.22s | dots ~0.06s | exit = entrance/2
export const STAGGER = { word: 0.09, item: 0.22, dot: 0.06 } as const;
// reading hold: short phrase >=1s, +0.25s per extra word, final hook >=2s
export const holdForWords = (words: number) => Math.max(1, 1 + (words - 3) * 0.25);
