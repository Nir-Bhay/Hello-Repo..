import React from "react";
import { useCurrentFrame } from "remotion";
import { easeInOut, easeIn } from "../../lib/timing";
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
const ContactHalo: React.FC<{ cx: number; cy: number; r: number; color?: string; opacity?: number }> = ({ cx, cy, r, color = P.red, opacity = 0.65 }) => (
  <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth={5} opacity={opacity} />
);

/* ================= S01 · legitimate job (0–299) ================= */
export const S01: React.FC = () => {
  const f = useF();
  const cardP = fp(f, 13, 84, easeInOut);
  const cx = 430 + cardP * 110;
  const cy = 440 + cardP * 130 - Math.sin(cardP * Math.PI) * 26;
  const slide = fp(f, 252, 300, easeInOut);
  return (
    <g transform={`translate(0 ${R(-slide * 300)})`}>
      <Human x={-60} y={56} s={1.04} opacity={1 - slide} />
      <TaskCardV2 x={cx} y={cy} s={1.03} />
      <Robot x={430} y={950} s={1.14} eye={f >= 102 ? "focused" : "attentive"} headTilt={f >= 252 ? 3 : 0} armL={-14} armR={cardP > 0.85 ? 18 : 8} />
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
        <ReportV2 x={540} y={790} s={1.03} flap={flap} />
      </g>
      <Robot x={124} y={1420} s={0.82} eye="attentive" />
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
      <ReportV2 x={540} y={940} s={1.08} flap={1} />
      {/* viewer annotation — report ke BAHAR, A01 ise nahi dekhta */}
      <g opacity={ann}>
        <rect x={150} y={150} width={720} height={168} rx={20} fill={P.white} stroke={P.ink} strokeWidth={5} strokeDasharray="14 10" />
        <Tx x={510} y={226} size={46} fill={P.ink} anchor="middle" lines={["Added by", "an attacker."]} />
        <path d="M640 318 C 720 520, 800 760, 850 992" fill="none" stroke={P.red} strokeWidth={5} strokeDasharray="10 8" />
        <circle cx={852} cy={1000} r={9} fill={P.red} />
      </g>
      <SelectBrackets x={162} y={896} w={756} h={282} p={brackets} />
      <Robot x={72} y={1488} s={0.68} eye="focused" headTilt={3} />
    </g>
  );
};

/* ================= S04 · copy + authorship (960–1319) ================= */
export const S04: React.FC = () => {
  const f = useF();
  const stripU = fp(f, 984, 1038, easeInOut);
  const stripX = 540 + stripU * (382 - 540);
  const stripY = 468 + stripU * (1035 - 468) - Math.sin(stripU * Math.PI) * 60;
  const authored = f < 1050 ? 0 : fp(f, 1050, 1092, (n) => n);
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
      {f >= 1050 && f < 1092 && (() => {
        const pA = fp(f, 1050, 1071);
        const pB = fp(f, 1071, 1092);
        const onSecond = f >= 1071;
        const px = onSecond ? 480 + pB * 282 : 480 + pA * 319;
        const py = onSecond ? 1221 : 1187;
        return (
          <g transform={`translate(${R(px)} ${R(py)}) rotate(-18)`}>
            <rect x={-8} y={-84} width={16} height={68} rx={7} fill="url(#pInk)" />
            <circle cx={0} cy={-72} r={5} fill="#FFFFFF" opacity={0.45} />
            <path d="M-7 -16 L0 6 L7 -16 Z" fill={P.blue} />
          </g>
        );
      })()}
      {/* A01 cropped (right-bottom) */}
      <Robot x={884} y={1450} s={0.77} eye="focused" />
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
      <g transform="translate(540 548) scale(1.06)">
        <OpsPanel op1={f >= 1692} op2={f >= 1800} />
      </g>
      {/* read request line: ops se pocket port tak */}
      <path d="M640 716 C 724 890, 796 1050, 822 1214" fill="none" stroke={P.paleBlue} strokeWidth={16}
        strokeLinecap="round" {...grow(readP)} opacity={0.22} />
      <path d="M640 716 C 724 890, 796 1050, 822 1214" fill="none" stroke={P.blue} strokeWidth={8}
        strokeLinecap="round" {...grow(readP)} opacity={0.92} />
      <g transform="translate(540 1195) scale(1.05)">
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
  const kx = legB > 0 ? 540 : 632 + legA * (540 - 632);
  const ky = legB > 0 ? 836 + legB * (1314 - 836) : 527 + legA * (836 - 527);
  const received = f >= 2130;
  const settlePulse = received && f < 2160 ? 1 + Math.sin(clamp01((f - 2130) / 30) * Math.PI) * 0.12 : 1;
  const caption = fp(f, 2148, 2166);
  return (
    <g>
      <g transform="translate(540 486) scale(0.92)">
        <PocketV2 />
      </g>
      {/* open outlet */}
      <g>
        <rect x={490} y={816} width={100} height={52} rx={12} fill={P.ink} opacity={0.14} filter="url(#pBlur8)" />
        <rect x={486} y={807} width={108} height={58} rx={12} fill={P.white} stroke="#35566F" strokeWidth={5} />
        <rect x={512} y={826} width={56} height={10} rx={5} fill={P.ink} />
        <rect x={526} y={819} width={28} height={5} rx={2.5} fill={P.paleBlue} />
      </g>
      <path d="M632 527 C 624 650, 584 750, 540 830 L540 1308" fill="none" stroke={P.red} strokeWidth={5}
        strokeDasharray="12 10" opacity={0.32} />
      <g transform="translate(540 1245) scale(1.06)">
        <OutsideV2 received={received} />
      </g>
      {/* K02 hero packet */}
      <g transform={`translate(${R(kx)} ${R(ky)}) scale(${R(0.98 * settlePulse)})`}>
        <Capsule x={0} y={0} hollow />
        <Tx x={74} y={11} size={34} fill={P.red} anchor="start" lines={["K02"]} />
      </g>
      <Robot x={82} y={1496} s={0.63} eye={f >= 2130 && f < 2200 ? "surprised" : "calm"} />
      <g opacity={caption}>
        <Tx x={540} y={192} size={56} fill={P.red} anchor="middle" lines={["A secret leaves", "the workspace."]} />
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
        <rect x={R(540 - 150 * inn)} y={664} width={R(300 * inn)} height={6} rx={3} fill={P.red} opacity={0.82} />
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
      <Tx x={540} y={452} size={36} fill={P.blue} anchor="middle" lines={["↺  R E P L A Y"]} />
      <Tx x={540} y={630} size={66} fill={P.ink} anchor="middle" lines={["Same code.", "Restricted", "workspace."]} />
      <rect x={196} y={1402} width={688} height={86} rx={24} fill={P.ink} opacity={0.12} filter="url(#pBlur14)" />
      <rect x={190} y={1390} width={700} height={90} rx={24} fill="#E9EEF3" stroke={P.paleBlue} strokeWidth={3} />
      <ScriptV2 x={540} y={1215} s={0.72} showTag={false} />
      {/* solid paper wipe — sheet ka kinara aur halki parchaai dikhti hai */}
      <rect x={-40} y={-40} width={R((1 - wipe) * 1160 + 18)} height={2000} fill={P.ink} opacity={0.13} filter="url(#pBlur14)" />
      <rect x={-40} y={-40} width={R((1 - wipe) * 1160)} height={2000} fill={P.paperDeep} stroke={P.ink} strokeOpacity={0.12} />
      <rect x={R(-46 + (1 - wipe) * 1160)} y={-40} width={7} height={2000} fill="#C9BFA9" opacity={0.85} />
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
      <g transform="translate(500 386) scale(0.72)">
        <PocketV2 small />
      </g>
      <ScriptV2 x={830} y={424} s={0.38} showTag={false} />
      <g transform="translate(540 1022)">
        <BoundaryV2 shutter={shutter} />
      </g>
      <CleanCopy x={-220 + copyIn * 690} y={1002} s={0.96} />
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
      {f >= 3510 && <ContactHalo cx={846} cy={1092} r={30} opacity={R(verdict * 0.75)} />}
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
      {f >= 3792 && <ContactHalo cx={736} cy={1328} r={32} opacity={R(fp(f, 3792, 3810) * 0.7)} />}
      <StampV2 y={292} lines={["CONNECTION", "BLOCKED"]} show={fp(f, 3792, 3810)} />
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
      {/* pichli boundary ka chhota tukda — koi secret glyph nahi */}
      <g transform="translate(540 512) rotate(-4) scale(1.35)">
        <rect x={-68} y={-36} width={140} height={92} rx={16} fill={P.ink} opacity={0.10} filter="url(#pBlur8)" />
        <rect x={-72} y={-48} width={144} height={96} rx={16} fill="#F8FCF8" stroke={P.green} strokeWidth={7} />
        <path d="M-72 -32 a16 16 0 0 1 16 -16 h38 v96 h-54 a16 16 0 0 1 -16 -16 Z" fill={P.paleBlue} opacity={0.82} />
        <rect x={30} y={14} width={30} height={22} rx={5} fill={P.green} />
        <path d="M38 20 L52 30 M52 20 L38 30" stroke={P.white} strokeWidth={4} strokeLinecap="round" />
      </g>
      <Tx x={540} y={790} size={96} fill={P.ink} anchor="middle" ls={8} lines={["RACTOR"]} />
      <Tx x={540} y={905} size={40} fill={P.blue} anchor="middle" lines={["Cybersecurity, explained."]} />
      <rect x={350} y={945} width={380} height={6} rx={3} fill={P.red} />
      <Tx x={540} y={1064} size={44} fill={P.ochre} anchor="middle" lines={["Next: ASI04"]} />
    </g>
  );
};
