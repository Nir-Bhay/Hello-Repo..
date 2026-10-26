#!/usr/bin/env node
/**
 * extract-asi05-review.mjs — ASI05 Premium ke hero/pause anchors ki contact sheet (C86).
 * Anchor list walkthrough (05-walkthrough.md) aur docs/27 ki table se aati hai.
 * Use: npm run extract:asi05  (ya node scripts/extract-asi05-review.mjs)
 * Output: out/qa/asi05-premium-review/ (gitignored) — sheet ko AANKH SE dekho, sirf banana QA nahi.
 */
import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// frame: kya verify karna hai
export const ASI05_REVIEW_ANCHORS = [
  [84, "task handoff complete"],
  [522, "report flap poora khula · OUTSIDE INPUT"],
  [936, "selection brackets hukm ko ghere hue"],
  [1038, "copied strip editor tak pahunchi"],
  [1092, "script poora authored · NEW SCRIPT yahin se"],
  [1440, "RUN press · RUNNING sirf yahin se"],
  [1962, "K02 copy ka janm · K01 apni jagah"],
  [2130, "K02 bahar receive"],
  [3030, "network shutter poora band"],
  [3270, "Replay RUNNING (protected press ke baad)"],
  [3510, "read denied ka contact"],
  [3792, "khaali packet band shutter se takraya"],
  [4149, "dusri seekh akeli: Limit what it can reach."],
  [4499, "aakhri frame · RACTOR · Next: ASI04"],
];

const frames = ASI05_REVIEW_ANCHORS.map(([f]) => f).join(",");
const r = spawnSync(process.execPath, [
  resolve(ROOT, "scripts/extract-frames.mjs"),
  resolve(ROOT, "public/videos/asi05-premium.mp4"),
  resolve(ROOT, "out/qa/asi05-premium-review"),
  frames, "60",
], { stdio: "inherit", env: process.env });
if (r.status !== 0) process.exit(r.status ?? 1);
console.log("\nHar frame par kya dekhna hai:");
for (const [f, note] of ASI05_REVIEW_ANCHORS) console.log(`  f${f}: ${note}`);
console.log("\nSheet dekho: out/qa/asi05-premium-review/contact-sheet.png — koi forbidden state dikhe to badlav pass nahi hai.");
