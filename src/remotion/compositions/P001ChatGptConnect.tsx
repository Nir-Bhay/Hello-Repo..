import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { Audio } from "@remotion/media";
import { C, F, safe } from "../lib/palette";
import { easeIn, map, prog, sp, windowOpacity } from "../lib/timing";
import { DrawLine, MonoLabel, PopBadge, useT } from "../components/Reveal";
import { CameraRig, Stage } from "../components/Stage";

/**
 * P001 — ChatGPT ko Google se Connect karo (50s · 1080x1920 · 30fps)
 * Beats: productions/001-chatgpt-google-connect/timeline.json ke mirror.
 * Persistent: header + coral dot + progress bar. Hero moment: 26.2s Gmail summary.
 */

const Card: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <div
    style={{
      background: "rgba(18,18,26,0.82)",
      border: `1.5px solid ${C.line}`,
      borderRadius: 26,
      padding: "30px 32px",
      ...style,
    }}
  >
    {children}
  </div>
);

const Toggle: React.FC<{ p: number }> = ({ p }) => (
  <span
    style={{
      width: 84,
      height: 46,
      borderRadius: 99,
      background: p > 0.5 ? "#1d7a4c" : "rgba(244,241,234,0.18)",
      display: "inline-flex",
      alignItems: "center",
      padding: 5,
      flexShrink: 0,
    }}
  >
    <span
      style={{
        width: 36,
        height: 36,
        borderRadius: 99,
        background: C.paper,
        transform: `translateX(${map(p, 0, 38)}px)`,
      }}
    />
  </span>
);

const StepRow: React.FC<{
  t: number;
  at: number;
  n: string;
  title: string;
  sub: string;
  extra?: React.ReactNode;
}> = ({ t, at, n, title, sub, extra }) => {
  const on = t >= at;
  const p = prog(t, at, 0.5);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 22,
        border: `1.5px solid ${on ? C.accent : C.line}`,
        background: on ? C.accentSoft : "rgba(18,18,26,0.82)",
        borderRadius: 22,
        padding: "24px 26px",
        opacity: 0.35 + p * 0.65,
        transform: `translateX(${map(p, 40, 0)}px)`,
      }}
    >
      <span
        style={{
          width: 54,
          height: 54,
          borderRadius: 99,
          background: on ? C.accent : "rgba(244,241,234,0.14)",
          color: C.paper,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: F.mono,
          fontSize: 24,
          fontWeight: 700,
          flexShrink: 0,
        }}
      >
        {n}
      </span>
      <span style={{ flex: 1 }}>
        <span style={{ display: "block", fontFamily: F.display, fontWeight: 800, fontSize: 40, color: C.paper }}>{title}</span>
        <span style={{ display: "block", fontFamily: F.display, fontSize: 27, color: C.muted, marginTop: 3 }}>{sub}</span>
      </span>
      {extra}
    </div>
  );
};

export const P001ChatGptConnect: React.FC = () => {
  const { t, frame, fps } = useT();
  const pad = safe(1080);
  const prompt = "Aaj ke important mail batao";
  const typed = Math.max(0, Math.min(prompt.length, Math.floor((t - 23.0) / 0.045)));
  const shake = t > 5.8 && t < 6.5 ? Math.sin((t - 5.8) * 60) * 10 * (1 - (t - 5.8) / 0.7) : 0;

  return (
    <Stage glow={0.45 + prog(t, 22, 1.5) * 0.4} glowY="30%">
      <Audio src={staticFile("audio/p001-track.mp3")} />

      {/* Persistent header + progress */}
      <div style={{ position: "absolute", top: 150, left: pad, right: pad, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <MonoLabel style={{ fontSize: 24 }}>CHATGPT × GOOGLE</MonoLabel>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 13, height: 13, borderRadius: 99, background: C.accent }} />
          <MonoLabel style={{ color: C.accent, fontSize: 24 }}>50 SEC</MonoLabel>
        </span>
      </div>
      <div style={{ position: "absolute", left: pad, right: pad, bottom: 92, height: 7, borderRadius: 99, background: "rgba(244,241,234,0.14)" }}>
        <div style={{ height: "100%", width: `${(t / 50) * 100}%`, borderRadius: 99, background: C.accent }} />
      </div>

      {/* ---------- S1 HOOK ---------- */}
      <AbsoluteFill style={{ padding: `330px ${pad}px 0`, opacity: 1 - prog(t, 4.2, 0.3, easeIn) }}>
        <CameraRig t={t} start={0} dur={4.5} from={1.02} to={1.09}>
          <MonoLabel style={{ color: C.accent, fontSize: 26, opacity: prog(t, 0.15, 0.4) }}>EK SETTING · KAAM KHATAM</MonoLabel>
          <div style={{ fontFamily: F.display, fontWeight: 900, fontSize: 106, lineHeight: 1.06, letterSpacing: "-0.02em", color: C.paper, marginTop: 26, transform: `scale(${map(sp(frame, fps, 0.05, "pop"), 0.85, 1)})`, transformOrigin: "0 40%" }}>
            ChatGPT ab
            <br />
            tumhara <span style={{ color: C.accent }}>GMAIL</span>
            <br />
            bhi padhega!
          </div>
          <div style={{ position: "relative", marginTop: 54, width: 340, height: 250 }}>
            <svg viewBox="0 0 340 250" style={{ width: 340, height: 250 }}>
              <rect x="15" y="35" width="310" height="200" rx="22" fill="none" stroke={C.paper} strokeWidth="7" />
              <path d="M22 52 L170 165 L318 52" fill="none" stroke={C.accent} strokeWidth="7" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - prog(t, 0.7, 0.8)} />
            </svg>
            {[1.2, 1.55, 1.9].map((at, i) => {
              const p = sp(frame, fps, at, "pop");
              return (
                <span key={at} style={{ position: "absolute", top: [8, 62, 118][i], right: [6, -14, 20][i], width: 56, height: 56, borderRadius: 99, background: C.accent, color: "#fff", fontFamily: F.mono, fontWeight: 700, fontSize: 27, display: "flex", alignItems: "center", justifyContent: "center", transform: `scale(${map(p, 0.3, 1)})`, opacity: Math.min(1, p * 1.5) }}>
                  {i + 1}
                </span>
              );
            })}
          </div>
          <div style={{ marginTop: 40, fontFamily: F.display, fontSize: 38, color: C.muted, opacity: prog(t, 2.2, 0.5) }}>
            Mail summary, reply — sab chat me.
          </div>
        </CameraRig>
      </AbsoluteFill>

      {/* ---------- S2 SACH ---------- */}
      <AbsoluteFill style={{ padding: `410px ${pad}px 0`, opacity: windowOpacity(t, 4.5, 10.0, 0.35, 0.25) }}>
        <div style={{ fontFamily: F.display, fontWeight: 850, fontSize: 74, lineHeight: 1.12, color: C.paper }}>
          Ruko. Ek sach
          <br />
          pehle samjho.
        </div>
        <div style={{ marginTop: 48, transform: `translateX(${shake}px)` }}>
          <span style={{ position: "relative", display: "inline-block", border: `2px solid ${C.line}`, borderRadius: 20, padding: "22px 38px", fontFamily: F.mono, fontSize: 44, letterSpacing: "0.14em", color: C.muted, background: "rgba(18,18,26,0.85)" }}>
            PLUGINS (2023)
            <svg viewBox="0 0 420 120" style={{ position: "absolute", inset: -14, width: "calc(100% + 28px)", height: "calc(100% + 28px)" }}>
              <path d="M12 108 L408 12" stroke={C.accent} strokeWidth="9" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - prog(t, 6.0, 0.35)} />
              <path d="M12 12 L408 108" stroke={C.accent} strokeWidth="9" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - prog(t, 6.25, 0.35)} />
            </svg>
          </span>
        </div>
        <div style={{ marginTop: 34, fontFamily: F.display, fontSize: 38, color: C.muted, opacity: prog(t, 6.6, 0.5) }}>
          Purane plugins 2024 me <span style={{ color: C.paper, fontWeight: 700 }}>band</span> ho gaye.
        </div>
        <Card style={{ marginTop: 52, opacity: prog(t, 7.6, 0.5), transform: `translateY(${map(prog(t, 7.6, 0.5), 44, 0)}px)` }}>
          <MonoLabel style={{ color: C.accent }}>2026 KA TAREEKA</MonoLabel>
          <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 47, color: C.paper, marginTop: 14 }}>
            Settings <span style={{ color: C.accent }}>→</span> Plugins
          </div>
          <div style={{ fontFamily: F.display, fontSize: 29, color: C.muted, marginTop: 8 }}>Wahi purani jagah, naya naam — yahi se sab judta hai.</div>
        </Card>
      </AbsoluteFill>

      {/* ---------- S3 STEPS ---------- */}
      <AbsoluteFill style={{ padding: `300px ${pad}px 0`, opacity: windowOpacity(t, 10.0, 22.0, 0.35, 0.25) }}>
        <div style={{ fontFamily: F.display, fontWeight: 850, fontSize: 66, color: C.paper, opacity: prog(t, 10.2, 0.4) }}>
          Connect = <span style={{ color: C.accent }}>4 steps</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 40 }}>
          <StepRow t={t} at={11.0} n="1" title="Settings kholo" sub="Profile icon → Settings" />
          <StepRow t={t} at={13.8} n="2" title="Plugins / Apps" sub="Menu me ye naam dhundo" />
          <StepRow
            t={t}
            at={16.6}
            n="3"
            title="Gmail chuno"
            sub="Drive, Calendar bhi yahi se"
            extra={<Toggle p={prog(t, 19.4, 0.6)} />}
          />
          <StepRow t={t} at={19.4} n="4" title="Connect → Allow" sub="Google login, permission dekh ke" />
        </div>
        <div style={{ marginTop: 30, opacity: prog(t, 20.6, 0.4), transform: `scale(${map(sp(frame, fps, 20.6, "pop"), 0.7, 1)})` }}>
          <span style={{ display: "inline-flex", gap: 12, alignItems: "center", background: "rgba(61,220,151,0.15)", border: "1.5px solid rgba(61,220,151,0.5)", borderRadius: 999, padding: "14px 28px", fontFamily: F.display, fontWeight: 800, fontSize: 34, color: C.good }}>
            ✓ Connected! Ab magic dekho
          </span>
        </div>
      </AbsoluteFill>

      {/* ---------- S4 GMAIL MAGIC (hero) ---------- */}
      <AbsoluteFill style={{ padding: `290px ${pad}px 0`, opacity: windowOpacity(t, 22.0, 31.0, 0.35, 0.25) }}>
        <MonoLabel style={{ color: C.accent, fontSize: 25 }}>CONNECT KE BAAD · GMAIL</MonoLabel>
        <Card style={{ marginTop: 30 }}>
          <div style={{ alignSelf: "flex-end", background: C.accentSoft, border: `1.5px solid ${C.accent}`, borderRadius: "22px 22px 6px 22px", padding: "18px 24px", fontFamily: F.display, fontSize: 36, fontWeight: 700, color: C.paper, minHeight: 92 }}>
            {prompt.slice(0, typed) || " "}
            {typed < prompt.length && <span style={{ color: C.accent }}>|</span>}
          </div>
          <div style={{ marginTop: 26, opacity: prog(t, 26.2, 0.45), transform: `translateY(${map(prog(t, 26.2, 0.45), 36, 0)}px) scale(${map(sp(frame, fps, 26.2, "pop"), 0.8, 1)})` }}>
            <MonoLabel style={{ fontSize: 21, color: C.accent }}>✦ CHATGPT · 3 IMPORTANT MAIL</MonoLabel>
            {[
              ["Boss", "Report kal subah tak chahiye"],
              ["Client", "Meeting kal 4 baje confirm?"],
              ["Bank", "Statement ready hai"],
            ].map(([from, sub], i) => (
              <div key={from} style={{ display: "flex", gap: 16, marginTop: 18, opacity: prog(t, 26.6 + i * 0.35, 0.4) }}>
                <span style={{ width: 46, height: 46, borderRadius: 99, background: "rgba(244,241,234,0.14)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: F.mono, fontSize: 21, color: C.paper, flexShrink: 0 }}>{from[0]}</span>
                <span>
                  <span style={{ display: "block", fontFamily: F.display, fontWeight: 750, fontSize: 31, color: C.paper }}>{from}</span>
                  <span style={{ display: "block", fontFamily: F.display, fontSize: 27, color: C.muted }}>{sub}</span>
                </span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28, opacity: prog(t, 28.6, 0.45), borderTop: `1.5px dashed ${C.line}`, paddingTop: 22 }}>
            <span style={{ fontFamily: F.display, fontSize: 30, color: C.muted }}>"Iska reply draft karo" → </span>
            <span style={{ fontFamily: F.serif, fontStyle: "italic", fontSize: 33, color: C.paper }}>"Thanks! Report kal 10 baje bhej dunga."</span>
            <span style={{ display: "block", marginTop: 10, fontFamily: F.mono, fontSize: 21, color: C.good }}>✓ DRAFT READY — bhejna tumhare haath me</span>
          </div>
        </Card>
        <div style={{ marginTop: 26, fontFamily: F.display, fontSize: 33, color: C.muted, opacity: prog(t, 29.6, 0.4) }}>
          Subah ke 30 mail → <span style={{ color: C.paper, fontWeight: 700 }}>2 minute ka summary.</span>
        </div>
      </AbsoluteFill>

      {/* ---------- S5 DRIVE + CALENDAR ---------- */}
      <AbsoluteFill style={{ padding: `270px ${pad}px 0`, opacity: windowOpacity(t, 31.0, 41.0, 0.35, 0.25) }}>
        <div style={{ fontFamily: F.display, fontWeight: 850, fontSize: 60, lineHeight: 1.12, color: C.paper, opacity: prog(t, 31.2, 0.4) }}>
          Sirf mail nahi —
          <br />
          <span style={{ fontFamily: F.serif, fontStyle: "italic", fontWeight: 400, color: C.accent }}>poora Google.</span>
        </div>
        <Card style={{ marginTop: 36, opacity: prog(t, 32.2, 0.5), transform: `translateY(${map(prog(t, 32.2, 0.5), 40, 0)}px)` }}>
          <MonoLabel style={{ color: C.accent, fontSize: 21 }}>GOOGLE DRIVE</MonoLabel>
          <div style={{ fontFamily: F.display, fontSize: 34, fontWeight: 700, color: C.paper, marginTop: 12 }}>"Meri project report dhundo"</div>
          {[92, 74, 54].map((w, i) => (
            <div key={i} style={{ height: 17, borderRadius: 99, background: "rgba(244,241,234,0.16)", marginTop: 15, width: `${w * prog(t, 33.4 + i * 0.3, 0.5)}%` }} />
          ))}
          <div style={{ fontFamily: F.display, fontSize: 28, color: C.muted, marginTop: 16 }}>→ Poori file padh ke <span style={{ color: C.paper }}>summary + sawalon ke jawab.</span></div>
        </Card>
        <Card style={{ marginTop: 24, opacity: prog(t, 36.0, 0.5), transform: `translateY(${map(prog(t, 36.0, 0.5), 40, 0)}px)` }}>
          <MonoLabel style={{ color: C.accent, fontSize: 21 }}>GOOGLE CALENDAR</MonoLabel>
          <div style={{ fontFamily: F.display, fontSize: 34, fontWeight: 700, color: C.paper, marginTop: 12 }}>"Kal mera din kaisa hai?"</div>
          {[
            ["9:00", "Team standup"],
            ["12:30", "Client lunch"],
            ["4:00", "Client call — added ✓"],
          ].map(([time, ev], i) => {
            const at = i === 2 ? 38.8 : 36.8 + i * 0.45;
            const p = prog(t, at, 0.4);
            return (
              <div key={ev} style={{ display: "flex", gap: 18, marginTop: 15, opacity: p, transform: `translateX(${map(p, 26, 0)}px)` }}>
                <span style={{ fontFamily: F.mono, fontSize: 25, color: i === 2 ? C.good : C.accent, width: 92 }}>{time}</span>
                <span style={{ fontFamily: F.display, fontSize: 29, color: C.paper }}>{ev}</span>
              </div>
            );
          })}
        </Card>
      </AbsoluteFill>

      {/* ---------- S6 SAFETY ---------- */}
      <AbsoluteFill style={{ padding: `350px ${pad}px 0`, opacity: windowOpacity(t, 41.0, 46.0, 0.4, 0.25) }}>
        <DrawLine d="M60 8 L108 26 V58 C108 92 88 112 60 124 C32 112 12 92 12 58 V26 Z" viewBox="0 0 120 132" t={t} start={41.3} dur={0.7} width={5} style={{ width: 130, height: 143 }} />
        <div style={{ marginTop: -108, marginLeft: 26 }}>
          <DrawLine d="M14 34 L32 50 L62 12" viewBox="0 0 76 62" t={t} start={42.0} dur={0.45} width={7} color={C.good} style={{ width: 76, height: 62 }} />
        </div>
        <div style={{ fontFamily: F.display, fontWeight: 850, fontSize: 62, lineHeight: 1.12, color: C.paper, marginTop: 30 }}>
          Power ke saath,
          <br />
          ek dhyaan.
        </div>
        {[
          "Permission screen padh ke hi Allow karo",
          "Jo app kaam ka nahi, use connect mat karo",
          "Disconnect kabhi bhi — Settings se, 1 tap",
        ].map((line, i) => (
          <div key={line} style={{ display: "flex", gap: 16, marginTop: 26, opacity: prog(t, 41.8 + i * 1.2, 0.45) }}>
            <span style={{ color: C.good, fontSize: 34, fontWeight: 900 }}>✓</span>
            <span style={{ fontFamily: F.display, fontSize: 36, color: C.paper, lineHeight: 1.3 }}>{line}</span>
          </div>
        ))}
        <Card style={{ marginTop: 46, opacity: prog(t, 44.2, 0.5) }}>
          <MonoLabel style={{ fontSize: 20 }}>ROZ KA ROUTINE PHIR AISA</MonoLabel>
          <div style={{ fontFamily: F.display, fontSize: 31, fontWeight: 700, color: C.paper, marginTop: 14, lineHeight: 1.5 }}>
            Mail summary <span style={{ color: C.accent }}>→</span> din ka plan <span style={{ color: C.accent }}>→</span> sidha kaam
          </div>
        </Card>
      </AbsoluteFill>

      {/* ---------- S7 FINAL ---------- */}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", padding: `0 ${pad}px`, opacity: prog(t, 46.0, 0.4) }}>
        <PopBadge frame={frame} fps={fps} start={46.3} style={{ border: `1.5px solid ${C.line}`, borderRadius: 999, padding: "14px 30px", background: C.accentSoft }}>
          <span style={{ width: 12, height: 12, borderRadius: 99, background: C.accent }} />
          <MonoLabel style={{ color: C.paper, fontSize: 22 }}>AAJ HI TRY KARO</MonoLabel>
        </PopBadge>
        <div style={{ fontFamily: F.display, fontWeight: 900, fontSize: 84, lineHeight: 1.1, color: C.paper, textAlign: "center", marginTop: 36 }}>
          ChatGPT = sirf
          <br />
          chat nahi,
          <br />
          <span style={{ fontFamily: F.serif, fontStyle: "italic", fontWeight: 400, color: C.accent }}>tumhara Assistant.</span>
        </div>
        <div style={{ marginTop: 32, fontFamily: F.display, fontSize: 35, color: C.muted, opacity: prog(t, 47.6, 0.5), textAlign: "center", lineHeight: 1.5 }}>
          Pehle Gmail connect karo.
          <br />
          Kaam aaye to <span style={{ color: C.paper, fontWeight: 700 }}>Save kar lo.</span>
        </div>
      </AbsoluteFill>
    </Stage>
  );
};
