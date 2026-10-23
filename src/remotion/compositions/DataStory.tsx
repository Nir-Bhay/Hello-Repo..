import React from "react";
import { AbsoluteFill } from "remotion";
import { C, F, safe } from "../lib/palette";
import { map, prog, windowOpacity } from "../lib/timing";
import { CountUp, DrawLine, MonoLabel, useT } from "../components/Reveal";
import { Stage } from "../components/Stage";

/**
 * DATA STORY — 1080x1080 (1:1) · 30fps · 10s · feed post / LinkedIn / X
 * Data kabhi static nahi dikhana: bars spring se badhte hain, line khud draw hoti hai,
 * number count-up hota hai — aankh ko hamesha ek chalta hua focal point milta hai.
 *  0-2s title · 2-6s bars+line build · 6-8.5s hero number · 8.5-10s final hold
 */
const BARS = [
  { label: "W1", value: 0.28 },
  { label: "W2", value: 0.44 },
  { label: "W3", value: 0.63 },
  { label: "W4", value: 0.86 },
  { label: "W5", value: 1 },
];

export const DataStory: React.FC = () => {
  const { t } = useT();
  const pad = safe(1080);
  return (
    <Stage glow={0.5} glowY="26%">
      <AbsoluteFill style={{ padding: `${pad + 26}px ${pad}px` }}>
        <MonoLabel style={{ color: C.accent, opacity: prog(t, 0.15, 0.4) }}>CASE STUDY · 30 DIN</MonoLabel>
        <div
          style={{
            fontFamily: F.display,
            fontWeight: 850,
            fontSize: 84,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: C.paper,
            marginTop: 20,
            opacity: prog(t, 0.3, 0.6),
            transform: `translateY(${map(prog(t, 0.3, 0.6), 34, 0)}px)`,
          }}
        >
          Ek system.
          <br />
          <span style={{ fontFamily: F.serif, fontStyle: "italic", fontWeight: 400, color: C.accent }}>Har hafte growth.</span>
        </div>

        {/* chart area */}
        <div style={{ position: "relative", marginTop: 64, height: 430, opacity: windowOpacity(t, 1.8, 8.6, 0.4) }}>
          {/* bars */}
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", gap: 34 }}>
            {BARS.map((b, i) => {
              const p = prog(t, 2.1 + i * 0.22, 0.85);
              return (
                <div key={b.label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: "100%",
                      height: 350 * b.value * p,
                      borderRadius: "14px 14px 6px 6px",
                      background: i === BARS.length - 1 ? C.accent : "rgba(244,241,234,0.22)",
                    }}
                  />
                  <span style={{ fontFamily: F.mono, fontSize: 21, color: C.muted }}>{b.label}</span>
                </div>
              );
            })}
          </div>
          {/* trend line draw-on */}
          <DrawLine
            d="M30 330 C 220 300, 330 250, 500 205 S 800 90, 900 42"
            viewBox="0 0 930 360"
            t={t}
            start={3.4}
            dur={1.7}
            width={7}
            style={{ position: "absolute", inset: 0, width: "100%", height: 360 }}
          />
        </div>

        {/* hero number */}
        <div style={{ marginTop: 46, opacity: prog(t, 6.0, 0.4) }}>
          <CountUp
            t={t}
            start={6.1}
            dur={1.6}
            to={128}
            suffix="K"
            style={{ fontFamily: F.display, fontWeight: 900, fontSize: 138, color: C.paper, letterSpacing: "-0.02em" }}
          />
          <span style={{ fontFamily: F.display, fontSize: 37, color: C.muted, marginLeft: 18 }}>views · 30 din me</span>
        </div>

        {/* final hold */}
        <div
          style={{
            position: "absolute",
            left: pad,
            right: pad,
            bottom: pad + 8,
            display: "flex",
            justifyContent: "space-between",
            opacity: prog(t, 8.5, 0.5),
          }}
        >
          <MonoLabel>STORY → SCRIPT → VIDEO</MonoLabel>
          <MonoLabel style={{ color: C.accent }}>HELLO MOTION STUDIO</MonoLabel>
        </div>
      </AbsoluteFill>
    </Stage>
  );
};
