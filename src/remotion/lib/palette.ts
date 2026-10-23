/**
 * Palette + type system — EK jagah se. Components me naye hex mat ghusao.
 * Rule: sirf EK accent (coral) — aur wo sirf "jo change hua / jawab / winner" ko mark kare.
 */
export const C = {
  bg: "#0B0B10", // near-black ink
  bgSoft: "#12121A", // panel
  line: "rgba(244,241,234,0.14)", // hairline
  paper: "#F4F1EA", // off-white text
  muted: "#9B97A3", // secondary text / mono labels
  faint: "#5C5966",
  accent: "#FF5C38", // coral — EK accent
  accentSoft: "rgba(255,92,56,0.16)",
  good: "#3DDC97", // sirf data-success ke liye (sparingly)
} as const;

export const F = {
  display: "'Inter Variable', Inter, system-ui, sans-serif", // badi headlines (tight tracking)
  serif: "'Instrument Serif', Georgia, serif", // italic accent word ke liye
  mono: "'JetBrains Mono', ui-monospace, monospace", // labels, numbers, timestamps
} as const;

/** Safe area: important content frame edge se >= 6% andar (phone pe crop hota hai). */
export const safe = (w: number) => Math.round(w * 0.06);
