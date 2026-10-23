import React from "react";
import { AbsoluteFill } from "remotion";
import { C, F, safe } from "../lib/palette";
import { map, prog, sp, windowOpacity } from "../lib/timing";
import { CaptionLine, MonoLabel, PopBadge, useT } from "../components/Reveal";
import { Stage } from "../components/Stage";

/**
 * SHORT HOOK — 1080x1920 (9:16) · 30fps · 15s · Shorts/Reels/TikTok
 * Retention structure (docs/10):
 *  0-3s   HOOK: "Video CHEAP kyun lagta hai?" (pehla frame = thumbnail, kabhi black nahi)
 *  3-7s   PROBLEM: 3 galtiyan, ek-ek karke cross
 *  7-12s  FIX: Easing · Stagger · Sound (wahi 3, ab tick)
 *  12-15s PAYOFF + loop-CTA: "Ab lagega REAL." (last frame ~ first frame = loop)
 * Safe zones: top/bottom 12% me kuch important nahi (platform UI wahan aata hai).
 */
const Mistake: React.FC<{ t: number; start: number; num: string; text: string; fixed: boolean }> = ({
  t,
  start,
  num,
  text,
  fixed,
}) => {
  const p = prog(t, start, 0.55);
  const cross = prog(t, start + 0.9, 0.3);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 22,
        border: `1.5px solid ${C.line}`,
        borderRadius: 20,
        padding: "26px 28px",
        background: "rgba(18,18,26,0.78)",
        transform: `translateX(${map(p, -70, 0)}px)`,
        opacity: p,
      }}
    >
      <span style={{ fontFamily: F.mono, color: fixed ? C.good : C.accent, fontSize: 26 }}>{num}</span>
      <span style={{ fontFamily: F.display, fontWeight: 750, fontSize: 44, color: C.paper, flex: 1 }}>{text}</span>
      <span style={{ fontSize: 40, color: fixed ? C.good : C.accent, fontWeight: 900, transform: `scale(${0.5 + cross * 0.5})`, opacity: cross }}>
        {fixed ? "✓" : "✕"}
      </span>
    </div>
  );
};

export const ShortHook: React.FC = () => {
  const { t, frame, fps } = useT();
  const pad = safe(1080);
  const hookPop = sp(frame, fps, 0.05, "pop");

  return (
    <Stage glow={0.55} glowY="30%">
      {/* HOOK */}
      <AbsoluteFill style={{ padding: `190px ${pad}px 0`, opacity: windowOpacity(t, 0, 3.1) }}>
        <MonoLabel style={{ color: C.accent }}>MOTION DESIGN · PART 1</MonoLabel>
        <div
          style={{
            fontFamily: F.display,
            fontWeight: 900,
            fontSize: 118,
            lineHeight: 1.04,
            letterSpacing: "-0.02em",
            color: C.paper,
            marginTop: 30,
            transform: `scale(${map(hookPop, 0.82, 1)})`,
            transformOrigin: "0 50%",
          }}
        >
          Video
          <br />
          <span style={{ color: C.accent }}>CHEAP</span>
          <br />
          kyun lagta
          <br />
          hai?
        </div>
        <div style={{ marginTop: 34, opacity: prog(t, 1.1, 0.5), fontFamily: F.display, fontSize: 36, color: C.muted }}>
          3 galtiyan. 15 second me fix.
        </div>
      </AbsoluteFill>

      {/* PROBLEM -> FIX (same list, role badalta hai = continuity) */}
      <AbsoluteFill style={{ padding: `220px ${pad}px 0`, opacity: windowOpacity(t, 3.1, 12.0) }}>
        <div style={{ fontFamily: F.display, fontWeight: 850, fontSize: 64, color: C.paper, opacity: prog(t, 3.3, 0.4) }}>
          {t < 7 ? "Ye 3 galtiyan 👇" : "Fix sirf ye hai 👇"}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22, marginTop: 40 }}>
          <Mistake t={t} start={t < 7 ? 3.9 : 7.3} num="01" text="Linear motion" fixed={t >= 7} />
          <Mistake t={t} start={t < 7 ? 4.7 : 8.1} num="02" text="Sab ek saath" fixed={t >= 7} />
          <Mistake t={t} start={t < 7 ? 5.5 : 8.9} num="03" text="No sound design" fixed={t >= 7} />
        </div>
        <div style={{ marginTop: 36, opacity: prog(t, t < 7 ? 6.2 : 9.8, 0.5), fontFamily: F.serif, fontStyle: "italic", fontSize: 40, color: C.muted }}>
          {t < 7 ? "sound off hai? captions phir bhi bolenge." : "easing + stagger + ek whoosh. bas."}
        </div>
      </AbsoluteFill>

      {/* PAYOFF / CTA */}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", padding: `0 ${pad}px`, opacity: prog(t, 12.0, 0.4) }}>
        <PopBadge frame={frame} fps={fps} start={12.15} style={{ border: `1.5px solid ${C.line}`, borderRadius: 999, padding: "14px 30px", background: C.accentSoft }}>
          <MonoLabel style={{ color: C.paper }}>PAYOFF</MonoLabel>
        </PopBadge>
        <div style={{ fontFamily: F.display, fontWeight: 900, fontSize: 128, lineHeight: 1.05, color: C.paper, textAlign: "center", marginTop: 34 }}>
          Ab lagega
          <br />
          <span style={{ fontFamily: F.serif, fontStyle: "italic", fontWeight: 400, color: C.accent }}>real.</span>
        </div>
        <div style={{ marginTop: 30, fontFamily: F.display, fontSize: 34, color: C.muted }}>Part 2 ke liye save karo →</div>
      </AbsoluteFill>

      {/* Captions — mute-first design, bottom safe zone ke upar */}
      <div style={{ position: "absolute", left: pad, right: pad, bottom: 265 }}>
        {t < 3.1 && (
          <CaptionLine
            t={t}
            style={{ fontSize: 47 }}
            words={[
              { text: "Video", at: 0.2 },
              { text: "CHEAP", at: 0.55 },
              { text: "kyun", at: 0.95 },
              { text: "lagta", at: 1.25 },
              { text: "hai?", at: 1.6 },
            ]}
          />
        )}
        {t >= 12 && (
          <CaptionLine
            t={t}
            style={{ fontSize: 47 }}
            words={[
              { text: "Ab", at: 12.3 },
              { text: "lagega", at: 12.6 },
              { text: "REAL.", at: 13.0 },
            ]}
          />
        )}
      </div>
    </Stage>
  );
};
