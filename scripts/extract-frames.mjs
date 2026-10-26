#!/usr/bin/env node
/**
 * extract-frames.mjs — kisi MP4 se diye gaye frame numbers ki stills + contact sheet (C34).
 * Frame number 0-based hai, Remotion/CSV wali numbering se match.
 * Use: node scripts/extract-frames.mjs <file.mp4> <outDir> <frame1,frame2,...> [fps]
 * Env: FFMPEG_PATH se binary ka raasta de sakte ho. Output out/ ke andar rakho (gitignored).
 */
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const [file, outDir, framesCsv, fpsArg] = process.argv.slice(2);
if (!file || !outDir || !framesCsv || !existsSync(file)) {
  console.error("Use: node scripts/extract-frames.mjs <file.mp4> <outDir> <f1,f2,...> [fps]");
  process.exit(2);
}
const FFMPEG = process.env.FFMPEG_PATH || "ffmpeg";
const frames = framesCsv.split(",").map((n) => Number(n.trim())).filter((n) => Number.isInteger(n) && n >= 0);
if (!frames.length) { console.error("✗ koi valid frame number nahi mila."); process.exit(2); }
mkdirSync(outDir, { recursive: true });

const run = (args) => {
  const r = spawnSync(FFMPEG, args, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  if (r.status !== 0) { console.error(r.stderr?.slice(-800) || "ffmpeg fail"); process.exit(1); }
};

for (const f of frames) {
  const out = join(outDir, `frame-${String(f).padStart(4, "0")}.png`);
  run(["-y", "-i", file, "-vf", `select='eq(n\\,${f})'`, "-vframes", "1", out]);
  console.log(`✓ ${out}`);
}

// contact sheet: ek hi pass me saare chune hue frames select karke tile karo
// (har frame ko alag input banakar tile karna galat hai — sirf pehla tile bharta hai)
const cols = Math.min(4, frames.length);
const rows = Math.ceil(frames.length / cols);
const selectExpr = frames.map((f) => `eq(n\\,${f})`).join("+");
const sheet = join(outDir, "contact-sheet.png");
run(["-y", "-i", file, "-vf", `select='${selectExpr}',scale=270:-1,tile=${cols}x${rows}:padding=8:margin=8`,
  "-vsync", "vfr", "-frames:v", "1", sheet]);
console.log(`✓ ${sheet}  (${frames.length} frames, ${cols} columns)`);
if (fpsArg) console.log(`Note: fps=${fpsArg} diya tha — frame numbers wahi hain jo tumne diye; fps sirf apne record ke liye hai.`);
