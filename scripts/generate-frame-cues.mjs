#!/usr/bin/env node
/**
 * generate-frame-cues.mjs — shot boundaries se poori frame-cue table banao (C57).
 * ASI05 ki 4500-row wali table haath se nahi bani thi; agli episode (ASI04) ke liye
 * yahi generator chalega: boundaries do, har frame ki row taiyaar.
 *
 * Use:
 *   node scripts/generate-frame-cues.mjs --shots S01:0:300,S02:300:600 --fps 60 --out cues.csv
 *   node scripts/generate-frame-cues.mjs --from-json shots.json --fps 60 --out cues.csv
 * shots.json: [{ "id": "S01", "start": 0, "end": 300 }, ...]  (end exclusive)
 *
 * Output columns: frame,time_seconds,time_milliseconds,shot,shot_frame
 * (ASI05 ki maujooda frame-cues.csv me iske upar epoch/focal/events haath se judte hain;
 *  generator unhe nahi banata — wo direction ka kaam hai, hisaab ka nahi.)
 */
import { readFileSync, writeFileSync } from "node:fs";

const args = process.argv.slice(2);
const get = (flag) => {
  const i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] : undefined;
};

let shots = [];
const shotsArg = get("--shots");
const jsonArg = get("--from-json");
if (shotsArg) {
  shots = shotsArg.split(",").map((part) => {
    const [id, start, end] = part.split(":");
    return { id, start: Number(start), end: Number(end) };
  });
} else if (jsonArg) {
  shots = JSON.parse(readFileSync(jsonArg, "utf8"));
} else {
  console.error("Use: --shots S01:0:300,S02:300:600  ya  --from-json shots.json; saath me --fps N --out file.csv");
  process.exit(2);
}
const fps = Number(get("--fps") || 60);
const out = get("--out");
if (!out || !shots.length || !fps) {
  console.error("✗ --fps aur --out lazmi hain, aur shots khaali nahi ho sakte.");
  process.exit(2);
}

// validation: pehla shot 0 se, koi gap/overlap nahi, end > start
let ok = true;
shots.sort((a, b) => a.start - b.start);
if (shots[0].start !== 0) { console.error("✗ Pehla shot frame 0 se shuru hona chahiye."); ok = false; }
for (let i = 0; i < shots.length; i++) {
  const s = shots[i];
  if (!(s.end > s.start)) { console.error(`✗ ${s.id}: end <= start`); ok = false; }
  if (i > 0 && s.start !== shots[i - 1].end) {
    console.error(`✗ Gap/overlap: ${shots[i - 1].id} end=${shots[i - 1].end} lekin ${s.id} start=${s.start}`);
    ok = false;
  }
}
if (!ok) process.exit(1);

const total = shots[shots.length - 1].end;
const lines = ["frame,time_seconds,time_milliseconds,shot,shot_frame"];
for (const s of shots) {
  for (let f = s.start; f < s.end; f++) {
    lines.push(`${f},${(f / fps).toFixed(6)},${(f / fps * 1000).toFixed(3)},${s.id},${f - s.start}`);
  }
}
writeFileSync(out, lines.join("\n") + "\n");
console.log(`✓ ${out}: ${total} frames, ${shots.length} shots, ${fps}fps (${(total / fps).toFixed(2)}s)`);
