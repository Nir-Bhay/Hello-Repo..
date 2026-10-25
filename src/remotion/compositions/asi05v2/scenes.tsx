import React from "react";
import { useCurrentFrame } from "remotion";
import { easeInOut, easeIn, easeOut, prog } from "../../lib/timing";
import { Robot, Capsule, Human } from "./parts";
import { P, R, fp } from "./theme";
import { Tx } from "./parts";
import {
  BoundaryV2, CleanCopy, EditorV2, OpsPanel, OutsideV2, PocketV2, ReportV2,
  RunnerV2, ScriptV2, SelectBrackets, StampV2, StripQ01, TaskCardV2,
} from "./assets";

/** Har scene absolute frame (0..4499) padhti hai — Bible Part D anchors. */
const useF = () => useCurrentFrame();
const clamp01 = (n: number) => Math.min(1, Math.max(0, n));
/** path grow ke liye dash offset */
const grow = (p: number) => ({ strokeDasharray: 1000, strokeDashoffset: R((1 - p) * 1000), pathLength: 1000 } as const);

/* ================= S01 · legitimate job (0–299) ================= */
export const S01: React.FC = () => {
  const f = useF();
  const cardP = fp(f, 13, 84, easeInOut);
  const cx = 430 + cardP * 110;
  const cy = 440 + cardP * 130 - Math.sin(cardP * Math.PI) * 26;
  const slide = fp(f, 252, 300, easeInOut);
  return (
    <g transform={`translate(0 ${R(-slide * 300)})`}>
      <Human x={-120} y={90} s={1.05} opacity={1 - slide} />
      <TaskCardV2 x={cx} y={cy} s={1} />
      <Robot x={470} y={1020} s={0.98} eye={f >= 102 ? "focused" : "attentive"} headTilt={f >= 252 ? 3 : 0} armL={-14} armR={cardP > 0.85 ? 18 : 8} />
    </g>
  );
};

/* ================= S02 · report is outside input (300–599) ================= */
export const S02: React.FC = () => {
  const f = useF();
  const settle = fp(f, 300, 342, easeInOut);
  const flap = fp(f, 480, 522, easeInOut);
  return (
    <g>
      <g transform={`translate(0 ${R((1 - settle) * 130)})`}>
        <ReportV2 x={540} y={800} s={1} flap={flap} />
      </g>
      <Robot x={150} y={1440} s={0.78} eye="attentive" />
    </g>
  );
};

/* ================= S03 · attacker instruction (600–959) ================= */
export const S03: React.FC = () => {
  const f = useF();
  const ann = fp(f, 750, 756) * (1 - fp(f, 882, 900, easeIn));
  const brackets = fp(f, 906, 936);
  return (
    <g>
      <ReportV2 x={540} y={950} s={1.08} flap={1} />
      {/* viewer annotation — report ke BAHAR, A01 ise nahi dekhta */}
      <g opacity={ann}>
        <rect x={150} y={150} width={720} height={168} rx={20} fill={P.white} stroke={P.ink} strokeWidth={5} strokeDasharray="14 10" />
        <Tx x={510} y={226} size={46} fill={P.ink} anchor="middle" lines={["Added by", "an attacker."]} />
        <path d="M640 318 C 720 520, 800 760, 850 992" fill="none" stroke={P.red} strokeWidth={5} strokeDasharray="10 8" />
        <circle cx={852} cy={1000} r={9} fill={P.red} />
      </g>
      <SelectBrackets x={162} y={906} w={756} h={278} p={brackets} />
      <Robot x={60} y={1500} s={0.66} eye="focused" headTilt={3} />
    </g>
  );
};

/* ================= S04 · copy + authorship (960–1319) ================= */
export const S04: React.FC = () => {
  const f = useF();
  const stripU = fp(f, 984, 1038, easeInOut);
  const stripX = 540 + stripU * (382 - 540);
  const stripY = 468 + stripU * (1035 - 468) - Math.sin(stripU * Math.PI) * 60;
  const authored = f < 1050 ? 0 : fp(f, 1050, 1092);
  const retire = fp(f, 1122, 1140, easeIn);
  const caption = fp(f, 1128, 1140) * (1 - fp(f, 1296, 1314, easeIn));
  return (
    <g>
      {/* source report (chhota, upar) — Q01 ke baad bhi wahi rehta hai */}
      <g opacity={1 - retire} transform={`translate(0 ${R(-retire * 220)})`}>
        <ReportV2 x={540} y={400} s={0.52} flap={1} />
      </g>
      {/* editor */}
      <g transform="translate(540 1180)">
        <EditorV2 />
      </g>
      {/* Q01 strip: source se input tak, phir input par record */}
      {f >= 984 && f < 1038 && <StripQ01 x={stripX} y={stripY} s={0.95} />}
      {f >= 1038 && f < 1092 && (
        <g transform="translate(382 1035) scale(0.6)">
          <StripQ01 x={0} y={0} s={1} />
        </g>
      )}
      {/* C01 page editor well me */}
      <ScriptV2 x={664} y={1222} s={0.74} authored={authored} />
      {/* input record sabse upar — slot par baitha padhe */}
      {f >= 1092 && (
        <g transform="translate(382 1035) scale(0.6)">
          <StripQ01 x={0} y={0} s={1} />
        </g>
      )}
      {/* authoring stylus — script ki lines par chalta hai */}
      {f >= 1050 && f <= 1092 && (() => {
        const pA = fp(f, 1050, 1071);
        const pB = fp(f, 1071, 1092);
        const onSecond = f >= 1071;
        const px = onSecond ? 480 + pB * 282 : 480 + pA * 319;
        const py = onSecond ? 1221 : 1187;
        return (
          <g transform={`translate(${R(px)} ${R(py)}) rotate(-18)`}>
            <rect x={-7} y={-80} width={14} height={64} rx={6} fill={P.ink} />
            <path d="M-7 -16 L0 6 L7 -16 Z" fill={P.blue} />
          </g>
        );
      })()}
      {/* A01 cropped (right-bottom) */}
      <Robot x={880} y={1460} s={0.75} eye="focused" />
      <g opacity={caption}>
        <Tx x={540} y={330} size={62} fill={P.ink} anchor="middle" lines={["The agent", "writes code."]} />
      </g>
    </g>
  );
};

/* ================= S05 · a real Run (1320–1649) ================= */
export const S05: React.FC = () => {
  const f = useF();
  const dock = fp(f, 1320, 1404, easeInOut);
  const sy = 430 + dock * (986 - 430);
  const press = fp(f, 1428, 1440) * (1 - fp(f, 1452, 1500, easeIn));
  const caption = fp(f, 1458, 1470) * (1 - fp(f, 1632, 1649, easeIn));
  return (
    <g>
      <g transform="translate(540 1240)">
        <RunnerV2 running={f >= 1440} press={press} label="RUNNER" />
      </g>
      <ScriptV2 x={468} y={sy} s={0.72} showTag={f < 1404} />
      <Robot x={760} y={990} s={0.9} eye={f >= 1428 ? "confident" : "focused"} armL={14 + press * 16} armR={10} />
      <g opacity={caption}>
        <Tx x={540} y={330} size={62} fill={P.ink} anchor="middle" lines={["Then runs it."]} />
      </g>
    </g>
  );
};

/* ================= S06 · script reads host secret (1650–2009) ================= */
export const S06: React.FC = () => {
  const f = useF();
  const settle = fp(f, 1650, 1692, easeInOut);
  const readP = fp(f, 1920, 1950);
  const k02 = fp(f, 1962, 1992);
  return (
    <g transform={`translate(0 ${R((1 - settle) * 40)})`}>
      <g transform="translate(540 560)">
        <OpsPanel op1={f >= 1692} op2={f >= 1800} />
      </g>
      {/* read request line: ops se pocket port tak */}
      <path d="M636 726 C 720 900, 790 1060, 808 1212" fill="none" stroke={P.blue} strokeWidth={8}
        strokeLinecap="round" {...grow(readP)} opacity={0.9} />
      <g transform="translate(540 1210)">
        <PocketV2 k02={k02} />
      </g>
    </g>
  );
};

/* ================= S07 · secret copy leaves (2010–2339) ================= */
export const S07: React.FC = () => {
  const f = useF();
  const legA = fp(f, 2010, 2100, easeInOut);
  const legB = fp(f, 2100, 2130, easeInOut);
  const kx = legB > 0 ? 540 : 640 + legA * (540 - 640);
  const ky = legB > 0 ? 896 + legB * (1362 - 896) : 520 + legA * (896 - 520);
  const received = f >= 2130;
  const settlePulse = received && f < 2160 ? 1 + Math.sin(clamp01((f - 2130) / 30) * Math.PI) * 0.12 : 1;
  const caption = fp(f, 2148, 2166);
  return (
    <g>
      <g transform="translate(540 470) scale(0.82)">
        <PocketV2 />
      </g>
      {/* open outlet */}
      <g>
        <rect x={486} y={868} width={108} height={58} rx={12} fill={P.white} stroke={P.ink} strokeWidth={6} />
        <path d="M512 897 H568" stroke={P.ink} strokeWidth={7} strokeLinecap="round" />
      </g>
      <path d="M640 520 C 620 700, 560 800, 540 890 L540 1340" fill="none" stroke={P.red} strokeWidth={5}
        strokeDasharray="12 10" opacity={0.35} />
      <g transform="translate(540 1300)">
        <OutsideV2 received={received} />
      </g>
      {/* K02 hero packet */}
      <g transform={`translate(${R(kx)} ${R(ky)}) scale(${R(0.85 * settlePulse)})`}>
        <Capsule x={0} y={0} hollow />
        <Tx x={0} y={84} size={32} fill={P.red} anchor="middle" lines={["K02"]} />
      </g>
      <Robot x={90} y={1540} s={0.6} eye={f >= 2130 && f < 2200 ? "surprised" : "calm"} />
      <g opacity={caption}>
        <Tx x={540} y={216} size={56} fill={P.red} anchor="middle" lines={["A secret leaves", "the workspace."]} />
      </g>
    </g>
  );
};

/* ================= S08 · name the category (2340–2579) ================= */
export const S08: React.FC = () => {
  const f = useF();
  const inn = fp(f, 2352, 2370);
  return (
    <g>
      <g transform="translate(540 1240)">
        <RunnerV2 running label="RUNNER" />
      </g>
      <ScriptV2 x={468} y={986} s={0.72} showTag={false} />
      <g opacity={inn} transform={`translate(0 ${R((1 - inn) * 18)})`}>
        <Tx x={540} y={400} size={40} fill={P.blue} anchor="middle" lines={["A S I 0 5"]} />
        <Tx x={540} y={540} size={74} fill={P.ink} anchor="middle" lines={["Unexpected Code", "Execution"]} />
      </g>
    </g>
  );
};

/* ================= S09 · explicit replay (2580–2819) ================= */
export const S09: React.FC = () => {
  const f = useF();
  const wipe = fp(f, 2580, 2610, easeInOut);
  return (
    <g>
      {/* nayi replay duniya wipe ke peeche pehle se taiyaar */}
      <Tx x={540} y={470} size={36} fill={P.blue} anchor="middle" lines={["↺  R E P L A Y"]} />
      <Tx x={540} y={660} size={66} fill={P.ink} anchor="middle" lines={["Same code.", "Restricted", "workspace."]} />
      <ScriptV2 x={540} y={1240} s={0.66} showTag={false} />
      {/* solid paper wipe */}
      <rect x={-40} y={-40} width={R((1 - wipe) * 1160)} height={2000} fill={P.paperDeep} stroke={P.ink} strokeOpacity={0.12} />
    </g>
  );
};

/* ================= S10 · boundary before Run (2820–3179) ================= */
export const S10: React.FC = () => {
  const f = useF();
  const copyIn = fp(f, 2820, 2862, easeInOut);
  const ann1 = fp(f, 2856, 2868) * (1 - fp(f, 3006, 3012, easeIn));
  const shutter = fp(f, 3012, 3030, easeInOut);
  const ann2 = fp(f, 3030, 3042);
  return (
    <g>
      <g transform="translate(540 390) scale(0.76)">
        <PocketV2 small />
      </g>
      <ScriptV2 x={848} y={420} s={0.44} showTag={false} />
      <g transform="translate(540 1030)">
        <BoundaryV2 shutter={shutter} />
      </g>
      <CleanCopy x={-220 + copyIn * 690} y={1010} s={0.92} />
      <g opacity={ann1}>
        <Tx x={540} y={212} size={52} fill={P.green} anchor="middle" lines={["No secrets inside."]} />
      </g>
      <g opacity={ann2}>
        <Tx x={540} y={170} size={52} fill={P.green} anchor="middle" lines={["Outside", "connections blocked."]} />
      </g>
    </g>
  );
};

/* ================= S11 · same script still runs (3180–3449) ================= */
export const S11: React.FC = () => {
  const f = useF();
  const dock = fp(f, 3180, 3234, easeInOut);
  const sy = 470 + dock * (928 - 470);
  const press = fp(f, 3258, 3270) * (1 - fp(f, 3290, 3340, easeIn));
  const caption = fp(f, 3276, 3288);
  return (
    <g>
      <g transform="translate(540 1030)">
        <BoundaryV2 shutter={1} />
      </g>
      <g transform="translate(540 1100) scale(0.82)">
        <RunnerV2 running={f >= 3270} press={press} label="RUNNER" />
      </g>
      <ScriptV2 x={452} y={sy} s={0.62} showTag={false} />
      <Robot x={96} y={1180} s={0.72} eye={f >= 3270 ? "confident" : "focused"} armR={8 - press * 26} />
      <g opacity={caption}>
        <Tx x={540} y={250} size={58} fill={P.ink} anchor="middle" lines={["The code", "still runs."]} />
      </g>
    </g>
  );
};

/* ================= S12 · read denied (3450–3749) ================= */
export const S12: React.FC = () => {
  const f = useF();
  const req = fp(f, 3480, 3510);
  const verdict = fp(f, 3510, 3522);
  return (
    <g>
      <ScriptV2 x={540} y={500} s={0.68} showTag={false} />
      <g transform="translate(540 1120)">
        <BoundaryV2 shutter={1} denied={f >= 3510} />
      </g>
      {/* read request: script se denied face tak (andar nahi jata) */}
      <path d="M590 645 C 720 800, 810 950, 842 1092" fill="none" stroke={P.blue} strokeWidth={8}
        strokeLinecap="round" {...grow(req)} opacity={0.9} />
      <g opacity={verdict}>
        <Tx x={540} y={216} size={58} fill={P.red} anchor="middle" lines={["Secret access", "denied."]} />
      </g>
    </g>
  );
};

/* ================= S13 · outbound blocked (3750–3989) ================= */
export const S13: React.FC = () => {
  const f = useF();
  const move = fp(f, 3768, 3792, easeInOut);
  const px = 400 + move * (706 - 400);
  const py = 780 + move * (1328 - 780);
  return (
    <g>
      <g transform="translate(540 980)">
        <BoundaryV2 shutter={1} />
      </g>
      {/* P01: khali attempt — koi key/data glyph nahi */}
      {f >= 3768 && (
        <g transform={`translate(${R(px)} ${R(py)}) scale(0.85)`} opacity={f >= 3810 ? 0.8 : 1}>
          <Capsule x={0} y={0} hollow />
        </g>
      )}
      <StampV2 y={300} lines={["CONNECTION", "BLOCKED"]} show={fp(f, 3792, 3810)} />
    </g>
  );
};

/* ================= S14 · two lessons (3990–4289) ================= */
export const S14: React.FC = () => {
  const f = useF();
  const t1 = fp(f, 3990, 4002) * (1 - fp(f, 4140, 4146, easeIn));
  const t2 = fp(f, 4146, 4149);
  return (
    <g>
      <g transform="translate(540 360) scale(0.7)">
        <PocketV2 small />
      </g>
      <g transform="translate(540 1180)">
        <BoundaryV2 shutter={1} />
      </g>
      <ScriptV2 x={540} y={1180} s={0.8} showTag={false} />
      <g opacity={t1}>
        <Tx x={540} y={700} size={64} fill={P.ink} anchor="middle" lines={["Generated code", "is untrusted."]} />
      </g>
      <g opacity={t2}>
        <Tx x={540} y={700} size={64} fill={P.blue} anchor="middle" lines={["Limit what", "it can reach."]} />
      </g>
    </g>
  );
};

/* ================= S15 · Ractor close (4290–4499) ================= */
export const S15: React.FC = () => {
  const f = useF();
  const inn = fp(f, 4290, 4320, easeInOut);
  return (
    <g opacity={inn} transform={`translate(0 ${R((1 - inn) * 24)})`}>
      {/* tiny boundary shard */}
      <g transform="translate(876 268) rotate(-8)">
        <rect x={-90} y={-70} width={180} height={140} rx={16} fill="none" stroke={P.green} strokeWidth={8} />
        <rect x={-90} y={-70} width={70} height={140} fill={P.paleBlue} opacity={0.7} />
      </g>
      <Capsule x={540} y={560} s={0.9} />
      <Tx x={540} y={790} size={96} fill={P.ink} anchor="middle" ls={8} lines={["RACTOR"]} />
      <Tx x={540} y={905} size={40} fill={P.blue} anchor="middle" lines={["Cybersecurity, explained."]} />
      <rect x={350} y={945} width={380} height={6} rx={3} fill={P.red} />
      <Tx x={540} y={1064} size={44} fill={P.ochre} anchor="middle" lines={["Next: ASI04"]} />
    </g>
  );
};
