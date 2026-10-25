import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { C, F } from "../lib/palette";
import { easeOut, map, prog, sp } from "../lib/timing";

/** Abhi ka time seconds me — har component ki pehli line yahi rakho. */
export function useT(): { t: number; frame: number; fps: number } {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return { t: frame / fps, frame, fps };
}

/**
 * MaskReveal — kinetic type ki jaan: text clip-mask ke andar se
 * slide-up + halka rotate karke aata hai (~0.8s, word stagger 0.09s ke saath use karo).
 */
export const MaskReveal: React.FC<{
  children: React.ReactNode;
  t: number;
  start: number;
  dur?: number;
  style?: React.CSSProperties;
}> = ({ children, t, start, dur = 0.8, style }) => {
  const p = prog(t, start, dur, easeOut);
  return (
    <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", ...style }}>
      <span
        style={{
          display: "inline-block",
          transform: `translateY(${map(p, 115, 0)}%) rotate(${map(p, 5, 0)}deg)`,
          opacity: p <= 0 ? 0 : 1,
          transformOrigin: "0% 100%",
        }}
      >
        {children}
      </span>
    </span>
  );
};

/** CountUp — bade numbers tabular-nums ke saath (digits jump nahi karte). */
export const CountUp: React.FC<{
  t: number;
  start: number;
  dur: number;
  to: number;
  suffix?: string;
  style?: React.CSSProperties;
}> = ({ t, start, dur, to, suffix = "", style }) => {
  const p = prog(t, start, dur, easeOut);
  const val = Math.round(interpolate(p, [0, 1], [0, to]));
  return (
    <span style={{ fontVariantNumeric: "tabular-nums", ...style }}>
      {val.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
};

/** DrawLine — SVG path khud ko draw karta hai (stroke-dashoffset). Diagrams/arrows ke liye. */
export const DrawLine: React.FC<{
  d: string;
  t: number;
  start: number;
  dur: number;
  width?: number;
  color?: string;
  viewBox: string;
  style?: React.CSSProperties;
}> = ({ d, t, start, dur, width = 6, color = C.accent, viewBox, style }) => {
  const p = prog(t, start, dur, easeOut);
  return (
    <svg viewBox={viewBox} style={style}>
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1 - p}
      />
    </svg>
  );
};

/** PopBadge — spring 'pop' se aane wala chip/label (callouts, steps). */
export const PopBadge: React.FC<{
  children: React.ReactNode;
  frame: number;
  fps: number;
  start: number;
  style?: React.CSSProperties;
}> = ({ children, frame, fps, start, style }) => {
  const p = sp(frame, fps, start, "pop");
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        transform: `scale(${map(p, 0.6, 1)})`,
        opacity: Math.min(1, p * 1.6),
        ...style,
      }}
    >
      {children}
    </span>
  );
};

/** MonoLabel — chhota uppercase label (decoration hai, padhna zaroori nahi to yahi rakho). */
export const MonoLabel: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({
  children,
  style,
}) => (
  <span
    style={{
      fontFamily: F.mono,
      fontSize: 21,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: C.muted,
      ...style,
    }}
  >
    {children}
  </span>
);

/**
 * CaptionLine — Shorts/Reels style word-by-word captions.
 * Active word accent + halka pop; mute pe bhi baat samajh aani chahiye.
 */
export const CaptionLine: React.FC<{
  t: number;
  words: { text: string; at: number }[]; // at = word start (sec)
  style?: React.CSSProperties;
}> = ({ t, words, style }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.28em",
        justifyContent: "center",
        fontFamily: F.display,
        fontWeight: 800,
        textTransform: "uppercase",
        ...style,
      }}
    >
      {words.map((w, i) => {
        const active = t >= w.at && (i === words.length - 1 || t < words[i + 1].at);
        const shown = t >= w.at - 0.05;
        return (
          <span
            key={i}
            style={{
              color: active ? C.accent : C.paper,
              opacity: shown ? 1 : 0.18,
              transform: active ? "scale(1.07)" : "scale(1)",
            }}
          >
            {w.text}
          </span>
        );
      })}
    </div>
  );
};
