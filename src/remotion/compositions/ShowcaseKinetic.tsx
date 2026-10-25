import React from "react";
import { AbsoluteFill } from "remotion";
import { C, F, safe } from "../lib/palette";
import { STAGGER, map, prog, windowOpacity } from "../lib/timing";
import { CountUp, DrawLine, MaskReveal, MonoLabel, PopBadge, useT } from "../components/Reveal";
import { CameraRig, Stage } from "../components/Stage";

/**
 * SHOWCASE KINETIC — 1920x1080 · 60fps · 12s
 * Timeline (docs/templates ki tarah PEHLE likha, phir code):
 *  S1 0.0-3.6  MOTION / IS THE / MESSAGE.   (word stagger 0.09s, accent serif)
 *  S2 3.6-7.2  3 rules: Easing · Stagger · Hold  (persistent underline travel karta hai)
 *  S3 7.2-10.0 60 FPS count-up + "zero guesswork"
 *  S4 10.0-12.0 FINAL HOLD >=2s: CODE → VIDEO lockup (frame 0 bhi kabhi black nahi)
 */
export const ShowcaseKinetic: React.FC = () => {
  const { t, frame, fps } = useT();
  const pad = safe(1920);
  const glow = 0.35 + prog(t, 7.2, 1.2) * 0.65; // glow story-state se, time se nahi

  return (
    <Stage glow={glow}>
      {/* header — har scene me persistent (continuity object) */}
      <div style={{ position: "absolute", top: 44, left: pad, right: pad, display: "flex", justifyContent: "space-between" }}>
        <MonoLabel>HELLO MOTION STUDIO</MonoLabel>
        <MonoLabel style={{ color: C.accent }}>60 FPS · CODE → VIDEO</MonoLabel>
      </div>

      {/* ---------- S1 : Kinetic headline ---------- */}
      <AbsoluteFill style={{ justifyContent: "center", padding: `0 ${pad}px`, opacity: windowOpacity(t, 0, 3.6) }}>
        <CameraRig t={t} start={0} dur={3.6} from={1} to={1.045}>
          <div style={{ fontFamily: F.display, fontWeight: 850, fontSize: 168, lineHeight: 1.02, letterSpacing: "-0.02em", color: C.paper }}>
            <MaskReveal t={t} start={0.25}>MOTION</MaskReveal>{" "}
            <MaskReveal t={t} start={0.25 + STAGGER.word * 2}>IS</MaskReveal>{" "}
            <MaskReveal t={t} start={0.25 + STAGGER.word * 4}>THE</MaskReveal>
            <br />
            <MaskReveal t={t} start={0.85}>
              <span style={{ fontFamily: F.serif, fontStyle: "italic", fontWeight: 400, color: C.accent }}>message.</span>
            </MaskReveal>
          </div>
          <DrawLine
            d="M4 20 C 260 4, 520 34, 880 12"
            viewBox="0 0 884 40"
            t={t}
            start={1.5}
            dur={0.9}
            style={{ width: 880, marginTop: 26 }}
          />
          <div style={{ marginTop: 22, opacity: prog(t, 1.9, 0.5) }}>
            <MonoLabel>NO TIMELINE · NO KEYFRAMES · ONLY CODE</MonoLabel>
          </div>
        </CameraRig>
      </AbsoluteFill>

      {/* ---------- S2 : Three rules ---------- */}
      <AbsoluteFill style={{ justifyContent: "center", padding: `0 ${pad}px`, opacity: windowOpacity(t, 3.6, 7.2) }}>
        <MonoLabel style={{ color: C.accent, opacity: prog(t, 3.75, 0.4) }}>VIDEO CHEAP KYUN NAHI LAGEGA — 3 RULES</MonoLabel>
        <div style={{ display: "flex", gap: 34, marginTop: 44 }}>
          {[
            { n: "01", h: "Easing", d: "Kabhi linear nahi.\nHar move accelerate → settle." },
            { n: "02", h: "Stagger", d: "Sab ek saath nahi.\n0.09s rhythm se aankh guide hoti hai." },
            { n: "03", h: "Hold", d: "Pehle padhne do.\nReadable state >= 1s rukta hai." },
          ].map((c, i) => {
            const start = 4.0 + i * STAGGER.item * 2.4;
            const p = prog(t, start, 0.7);
            return (
              <div
                key={c.n}
                style={{
                  flex: 1,
                  border: `1.5px solid ${C.line}`,
                  borderRadius: 22,
                  padding: "38px 36px",
                  background: "rgba(18,18,26,0.72)",
                  transform: `translateY(${map(p, 56, 0)}px)`,
                  opacity: p,
                }}
              >
                <div style={{ fontFamily: F.mono, color: C.accent, fontSize: 24 }}>{c.n}</div>
                <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 62, color: C.paper, marginTop: 14 }}>{c.h}</div>
                <div style={{ fontFamily: F.display, fontSize: 27, lineHeight: 1.45, color: C.muted, marginTop: 14, whiteSpace: "pre-line" }}>{c.d}</div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>

      {/* ---------- S3 : Number hero ---------- */}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", opacity: windowOpacity(t, 7.2, 10.0) }}>
        <div style={{ textAlign: "center" }}>
          <CountUp
            t={t}
            start={7.5}
            dur={1.5}
            to={60}
            style={{ fontFamily: F.display, fontWeight: 900, fontSize: 330, color: C.paper, letterSpacing: "-0.03em" }}
          />
          <span style={{ fontFamily: F.serif, fontStyle: "italic", fontSize: 84, color: C.accent }}> fps</span>
          <div style={{ marginTop: 8, opacity: prog(t, 8.9, 0.5), fontFamily: F.display, fontSize: 40, color: C.muted }}>
            har frame code se. <span style={{ color: C.paper, fontWeight: 700 }}>zero guesswork.</span>
          </div>
        </div>
      </AbsoluteFill>

      {/* ---------- S4 : Final hold (hero moment + >=2s hold) ---------- */}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", opacity: prog(t, 10.0, 0.45) }}>
        <PopBadge frame={frame} fps={fps} start={10.1} style={{ border: `1.5px solid ${C.line}`, borderRadius: 999, padding: "14px 28px", background: C.accentSoft }}>
          <span style={{ width: 12, height: 12, borderRadius: 99, background: C.accent }} />
          <MonoLabel style={{ color: C.paper }}>STORY DO · VIDEO READY</MonoLabel>
        </PopBadge>
        <div style={{ fontFamily: F.display, fontWeight: 850, fontSize: 118, color: C.paper, marginTop: 36, letterSpacing: "-0.02em" }}>
          CODE <span style={{ color: C.accent }}>→</span> VIDEO
        </div>
        <div style={{ fontFamily: F.serif, fontStyle: "italic", fontSize: 44, color: C.muted, marginTop: 14 }}>
          motion graphics, production-ready.
        </div>
      </AbsoluteFill>
    </Stage>
  );
};
