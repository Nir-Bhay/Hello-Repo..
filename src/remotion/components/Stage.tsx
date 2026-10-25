import React from "react";
import { AbsoluteFill, random, useCurrentFrame, useVideoConfig } from "remotion";
import { C } from "../lib/palette";
import { map, prog } from "../lib/timing";

/**
 * Stage = har scene ke neeche ki 5-layer stack (yahi "real video" feel deta hai):
 * 1) bg gradient  2) drifting dot-grid  3) state-driven glow  4) content  5) grain+vignette
 * Kabhi dead-still frame nahi: grid drift + grain hamesha zinda rehte hain.
 */
export const Stage: React.FC<{
  children: React.ReactNode;
  glow?: number; // 0..1 — glow TIME se nahi, story ke state se drive karo
  glowX?: string;
  glowY?: string;
}> = ({ children, glow = 0.5, glowX = "50%", glowY = "38%" }) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const drift = (frame / 3) % 28; // dot-grid slow drift (px)
  return (
    <AbsoluteFill style={{ background: `radial-gradient(120% 90% at 50% 0%, #171722 0%, ${C.bg} 55%)`, overflow: "hidden" }}>
      {/* dot grid */}
      <AbsoluteFill
        style={{
          backgroundImage: `radial-gradient(${C.line} 1.2px, transparent 1.2px)`,
          backgroundSize: "28px 28px",
          backgroundPosition: `${drift}px ${drift * 0.6}px`,
          opacity: 0.5,
        }}
      />
      {/* glow */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(42% 34% at ${glowX} ${glowY}, rgba(255,92,56,${0.22 * glow}) 0%, transparent 70%)`,
        }}
      />
      {children}
      <Grain />
      {/* vignette */}
      <AbsoluteFill
        style={{
          background: "radial-gradient(90% 90% at 50% 50%, transparent 62%, rgba(0,0,0,0.5) 100%)",
        }}
      />
      <span style={{ display: "none" }}>{width}x{height}</span>
    </AbsoluteFill>
  );
};

/** Film grain — har 2 frame pe reseed (deterministic random, Math.random nahi). */
export const Grain: React.FC = () => {
  const frame = useCurrentFrame();
  const seedFrame = Math.floor(frame / 2);
  const dots = Array.from({ length: 110 }, (_, i) => ({
    x: random(`gx-${i}-${seedFrame}`) * 100,
    y: random(`gy-${i}-${seedFrame}`) * 100,
    r: 0.6 + random(`gr-${i}-${seedFrame}`) * 1.1,
  }));
  return (
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.07 }}>
      {dots.map((d, i) => (
        <circle key={i} cx={`${d.x}%`} cy={`${d.y}%`} r={d.r} fill="#fff" />
      ))}
    </svg>
  );
};

/**
 * CameraRig — virtual camera. Slow push-in (scale) hi sabse bada
 * "Blender/real-video" vs "slideshow" difference hai. Hamesha easeInOut, kabhi linear zoom nahi.
 */
export const CameraRig: React.FC<{
  children: React.ReactNode;
  t: number; // current time (sec)
  start: number;
  dur: number;
  from?: number;
  to?: number;
  x?: number; // pan (px at end)
  y?: number;
}> = ({ children, t, start, dur, from = 1, to = 1.06, x = 0, y = 0 }) => {
  const eased = prog(t, start, dur); // easeOut default — camera hamesha naram rukta hai
  // NOTE: AbsoluteFill yahan NAHI — absolute inset-0 parent ki padding ko ignore karke
  // content ko edge se chipka deta hai aur scale use kaat deta hai (P001 review me pakda gaya).
  // Normal-flow div parent ke content-box (padding ke andar) se hi scale hota hai.
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        transform: `scale(${map(eased, from, to)}) translate(${map(eased, 0, x)}px, ${map(eased, 0, y)}px)`,
      }}
    >
      {children}
    </div>
  );
};
