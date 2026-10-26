#!/usr/bin/env node
/**
 * verify-video.mjs — ek MP4 ki asal technical report (C33).
 * ffprobe mile to usse; warna ffmpeg se (duration/resolution/fps + decode karke exact frame count).
 * Use: node scripts/verify-video.mjs <file.mp4> [expectedWidth expectedHeight expectedFps expectedFrames]
 * Env: FFPROBE_PATH / FFMPEG_PATH se binary ka raasta de sakte ho.
 */
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";

const file = process.argv[2];
if (!file || !existsSync(file)) {
  console.error("Use: node scripts/verify-video.mjs <file.mp4> [W H FPS FRAMES]");
  process.exit(2);
}
const [expW, expH, expFps, expFrames] = process.argv.slice(3).map(Number);
const FFPROBE = process.env.FFPROBE_PATH || "ffprobe";
const FFMPEG = process.env.FFMPEG_PATH || "ffmpeg";

function viaFfprobe() {
  const r = spawnSync(FFPROBE, ["-v", "error", "-select_streams", "v:0",
    "-show_entries", "stream=codec_name,width,height,avg_frame_rate,nb_frames",
    "-show_entries", "format=duration", "-of", "json", file], { encoding: "utf8" });
  if (r.status !== 0 || !r.stdout) return null;
  try {
    const j = JSON.parse(r.stdout);
    const st = j.streams[0];
    const [n, d] = st.avg_frame_rate.split("/").map(Number);
    return {
      codec: st.codec_name, width: st.width, height: st.height,
      fps: d ? n / d : n, frames: st.nb_frames ? Number(st.nb_frames) : null,
      duration: Number(j.format.duration), source: "ffprobe",
    };
  } catch { return null; }
}

function viaFfmpeg() {
  const probe = spawnSync(FFMPEG, ["-i", file], { encoding: "utf8" });
  const text = probe.stderr || "";
  const dur = text.match(/Duration: (\d+):(\d+):([\d.]+)/);
  const vid = text.match(/Video: (\w+).*?(\d{3,5})x(\d{3,5}).*?([\d.]+) fps/);
  if (!dur || !vid) return null;
  const seconds = Number(dur[1]) * 3600 + Number(dur[2]) * 60 + Number(dur[3]);
  // exact frame count: poora video decode karke gin lo (koi file nahi banti)
  const dec = spawnSync(FFMPEG, ["-i", file, "-map", "0:v:0", "-f", "null", "-"],
    { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  const framesMatch = (dec.stderr || "").match(/frame=\s*(\d+)\s+fps=/g);
  const frames = framesMatch ? Number(framesMatch[framesMatch.length - 1].match(/\d+/)[0]) : null;
  return {
    codec: vid[1], width: Number(vid[2]), height: Number(vid[3]),
    fps: Number(vid[4]), frames, duration: seconds, source: "ffmpeg (decode-count)",
  };
}

const info = viaFfprobe() || viaFfmpeg();
if (!info) {
  console.error("✗ ffprobe/ffmpeg nahi mila. FFPROBE_PATH/FFMPEG_PATH set karo ya ffmpeg install karo.");
  process.exit(2);
}

console.log(`File: ${file}  (via ${info.source})`);
console.log(`  codec ${info.codec} · ${info.width}x${info.height} · ${info.fps} fps · ${info.frames ?? "?"} frames · ${info.duration.toFixed(2)}s`);

let failed = 0;
const check = (label, actual, expected) => {
  if (expected === undefined || Number.isNaN(expected)) return;
  const ok = actual !== null && Math.abs(actual - expected) < 0.01;
  console.log(`  ${ok ? "✓" : "✗"} ${label}: expected ${expected}, got ${actual}`);
  if (!ok) failed += 1;
};
check("width", info.width, expW);
check("height", info.height, expH);
check("fps", info.fps, expFps);
check("frames", info.frames, expFrames);
if (expFrames && info.fps) check("duration≈frames/fps", info.duration, expFrames / info.fps);

process.exit(failed ? 1 : 0);
