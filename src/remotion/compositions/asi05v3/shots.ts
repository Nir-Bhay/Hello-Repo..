/**
 * ASI05 — shot boundaries ka EK hi source of truth (C30).
 * Walkthrough (05-walkthrough.md), transcript (06-transcript.md) aur
 * docs/21 ki table inhi numbers se bani hai. Boundary badalni ho to
 * pehle Bible/document, phir ye file, phir teeno docs — ek saath.
 * end = exclusive (agle shot ka start).
 */
export const ASI05_FPS = 60;
export const ASI05_TOTAL_FRAMES = 4500;
export const ASI05_DURATION_SECONDS = ASI05_TOTAL_FRAMES / ASI05_FPS; // 75

export type Asi05ShotId =
  | "S01" | "S02" | "S03" | "S04" | "S05" | "S06" | "S07" | "S08"
  | "S09" | "S10" | "S11" | "S12" | "S13" | "S14" | "S15";

export interface Asi05ShotBoundary {
  id: Asi05ShotId;
  start: number; // inclusive
  end: number; // exclusive
}

export const ASI05_SHOTS: readonly Asi05ShotBoundary[] = [
  { id: "S01", start: 0, end: 300 },
  { id: "S02", start: 300, end: 600 },
  { id: "S03", start: 600, end: 960 },
  { id: "S04", start: 960, end: 1320 },
  { id: "S05", start: 1320, end: 1650 },
  { id: "S06", start: 1650, end: 2010 },
  { id: "S07", start: 2010, end: 2340 },
  { id: "S08", start: 2340, end: 2580 },
  { id: "S09", start: 2580, end: 2820 },
  { id: "S10", start: 2820, end: 3180 },
  { id: "S11", start: 3180, end: 3450 },
  { id: "S12", start: 3450, end: 3750 },
  { id: "S13", start: 3750, end: 3990 },
  { id: "S14", start: 3990, end: 4290 },
  { id: "S15", start: 4290, end: 4500 },
] as const;

/** Kisi bhi frame ka shot. Range se bahar ho to sabse paas wala kinara. */
export const asi05ShotAt = (frame: number): Asi05ShotId => {
  const shot = ASI05_SHOTS.find((s) => frame >= s.start && frame < s.end);
  if (shot) return shot.id;
  return frame < 0 ? "S01" : "S15";
};
