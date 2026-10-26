#!/usr/bin/env node
/**
 * report-assets.mjs — public/ ke media ka size report (C37).
 * Bina dependency. Budget cross ho to warning; --strict par exit 1.
 * Use: npm run report:assets [-- --strict]
 */
import { readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const STRICT = process.argv.includes("--strict");

// Budget (jaankari ke liye — asal file dekh kar badla ja sakta hai)
const SINGLE_VIDEO_WARN_MB = 25;
const TOTAL_MEDIA_WARN_MB = 80;

const mb = (bytes) => bytes / (1024 * 1024);
const fmt = (bytes) => (bytes >= 1024 * 1024 ? mb(bytes).toFixed(2) + " MB" : (bytes / 1024).toFixed(0) + " KB");

function collect(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) collect(full, acc);
    else acc.push({ path: full.slice(ROOT.length + 1), size: st.size });
  }
  return acc;
}

const files = collect(join(ROOT, "public"))
  .filter((f) => /\.(mp4|mp3|jpg|jpeg|png|ttf)$/i.test(f.path))
  .sort((a, b) => b.size - a.size);

let total = 0;
let warnings = 0;
console.log("Public media assets (bade se chhote):");
for (const f of files) {
  total += f.size;
  const isVideo = f.path.endsWith(".mp4");
  const over = isVideo && mb(f.size) > SINGLE_VIDEO_WARN_MB;
  if (over) warnings += 1;
  console.log(`  ${fmt(f.size).padStart(9)}  ${f.path}${over ? `  ⚠ single-video budget ${SINGLE_VIDEO_WARN_MB}MB se upar` : ""}`);
}
console.log(`\nTotal: ${fmt(total)} · ${files.length} files`);
if (mb(total) > TOTAL_MEDIA_WARN_MB) {
  warnings += 1;
  console.log(`⚠ Total media budget ${TOTAL_MEDIA_WARN_MB}MB se upar hai.`);
}
if (warnings === 0) console.log("✓ Saare assets budget ke andar hain.");
else if (STRICT) {
  console.error(`✗ ${warnings} budget warning(s) — strict mode me fail.`);
  process.exit(1);
} else {
  console.log(`(${warnings} warning(s) — fail karne ke liye --strict lagao.)`);
}
