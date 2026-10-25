import React from "react";
import { ActionMarks, Tx, type Eye } from "./parts";
import { FONT, P, R } from "./theme";

/**
 * ASI05 v2 — PROFESSIONAL EXPLAINER style sample.
 * Kahani, geometry, frame anchors aur locked copy bilkul wahi.
 * Sirf surface language badli hai: soft elevation, hairline borders,
 * restrained gradients, cleaner pills and a more polished A01.
 */

const BORDER = "#86A3B8";
const BORDER_SOFT = "#B4C8D6";
const BAR = "#8FB0C8";

export const ExplainerDefs: React.FC = () => (
  <defs>
    <linearGradient id="xBlue" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#3F6B93" />
      <stop offset="100%" stopColor="#2B5176" />
    </linearGradient>
    <linearGradient id="xInk" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#17364E" />
      <stop offset="100%" stopColor="#081F31" />
    </linearGradient>
    <linearGradient id="xRed" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#BC4A35" />
      <stop offset="100%" stopColor="#8E3022" />
    </linearGradient>
    <linearGradient id="xRedSoft" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#F4DDD5" />
      <stop offset="100%" stopColor="#E9C6BB" />
    </linearGradient>
    <linearGradient id="xBody" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#C1D9EA" />
      <stop offset="100%" stopColor="#84AAC5" />
    </linearGradient>
    <linearGradient id="xScreen" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#1B3D57" />
      <stop offset="100%" stopColor="#071E30" />
    </linearGradient>
    <radialGradient id="xBgGlow" cx="50%" cy="38%" r="58%">
      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.28" />
      <stop offset="62%" stopColor="#FFFFFF" stopOpacity="0.06" />
      <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
    </radialGradient>
    <filter id="xBlur10" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="10" />
    </filter>
    <filter id="xBlur18" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="18" />
    </filter>
  </defs>
);

const PillX: React.FC<{
  x: number;
  y: number;
  text: string;
  fill: string;
  fg?: string;
  size?: number;
}> = ({ x, y, text, fill, fg = P.white, size = 28 }) => {
  const w = text.length * size * 0.69 + 42;
  const h = size + 25;
  return (
    <g>
      <rect x={x + 2} y={y + 5} width={w} height={h} rx={h / 2} fill={P.ink} opacity={0.21} filter="url(#xBlur10)" />
      <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={fill} />
      <text
        x={x + w / 2}
        y={y + size + 3}
        fontFamily={FONT}
        fontWeight={700}
        fontSize={size}
        fill={fg}
        textAnchor="middle"
        letterSpacing={0.4}
      >
        {text}
      </text>
    </g>
  );
};

/* ---------- R01 external report + I01 flap — explainer surface ---------- */
export const ReportX: React.FC<{ x: number; y: number; s?: number; flap?: number }> = ({ x, y, s = 1, flap = 0 }) => (
  <g transform={`translate(${R(x)} ${R(y)}) scale(${R(s)})`}>
    <rect x={-374} y={-302} width={748} height={636} rx={32} fill={P.ink} opacity={0.24} filter="url(#xBlur18)" />
    <rect x={-380} y={-320} width={760} height={640} rx={30} fill="#FFFEFB" stroke={BORDER} strokeWidth={4} />

    {/* header rail */}
    <path d="M-380 -290 a30 30 0 0 1 30 -30 h700 a30 30 0 0 1 30 30 v28 h-760 Z" fill="url(#xBlue)" />
    <path d="M-348 -318 H348" stroke="#FFFFFF" strokeOpacity={0.22} strokeWidth={3} strokeLinecap="round" />
    <Tx x={-344} y={-272} size={34} fill={P.white} lines={["EXTERNAL REPORT"]} />

    {/* failure row */}
    <circle cx={-322} cy={-176} r={13} fill="url(#xRed)" />
    <Tx x={-292} y={-160} size={42} fill={P.ink} lines={["Test failed."]} />
    <rect x={-344} y={-128} width={600} height={17} rx={8.5} fill={BAR} />
    <rect x={-344} y={-88} width={520} height={17} rx={8.5} fill={BAR} opacity={0.82} />

    {/* I01 zone */}
    <g>
      <rect x={-344} y={-32} width={688} height={248} rx={18} fill="url(#xRedSoft)" stroke="#C47B6D" strokeWidth={4} />
      <path d="M-344 -14 a18 18 0 0 1 18 -18 h4 v248 h-22 a18 18 0 0 1 -18 -18 Z" fill="url(#xRed)" />
      <Tx x={-286} y={42} size={50} fill={P.red} lines={["Run this", "repair first."]} />
      <g transform="translate(-60 150) scale(0.78)">
        <ActionMarks x={0} y={0} s={1} color={P.red} />
      </g>
    </g>

    {/* folded flap */}
    <g transform={`translate(0 -32) scale(1 ${R(1 - flap * 0.93)}) translate(0 32)`} opacity={R(1 - flap * 0.25)}>
      <rect x={-344} y={-32} width={688} height={248} rx={18} fill="url(#xRed)" />
      <rect x={-344} y={-32} width={688} height={248} rx={18} fill="none" stroke="#7E2D21" strokeWidth={4} />
      <path d="M-316 -6 H316" stroke="#FFFFFF" strokeOpacity={0.18} strokeWidth={3} strokeLinecap="round" />
      {/* flap band pill */}
      <g>
        <rect x={-278} y={58} width={330} height={58} rx={29} fill="#FFFDFA" opacity={0.97} />
        <text x={-113} y={97} fontFamily={FONT} fontWeight={700} fontSize={29} fill={P.red} textAnchor="middle" letterSpacing={0.4}>
          OUTSIDE INPUT
        </text>
      </g>
    </g>
  </g>
);

/* ---------- Q01 copied influence strip — explainer surface ---------- */
export const StripX: React.FC<{ x: number; y: number; s?: number; opacity?: number }> = ({ x, y, s = 1, opacity = 1 }) => (
  <g transform={`translate(${R(x)} ${R(y)}) scale(${R(s)})`} opacity={opacity}>
    <rect x={-130} y={-47} width={260} height={108} rx={14} fill={P.ink} opacity={0.20} filter="url(#xBlur10)" />
    <rect x={-135} y={-57} width={270} height={114} rx={13} fill="#FFFEFB" stroke="#C47B6D" strokeWidth={4} />
    <path d="M-135 -44 a13 13 0 0 1 13 -13 h13 v114 h-26 a13 13 0 0 1 -13 -13 Z" fill="url(#xRed)" />
    <g transform="translate(-45 -4) scale(0.5)">
      <ActionMarks x={0} y={0} s={1} color={P.red} />
    </g>
    <rect x={-88} y={30} width={170} height={12} rx={6} fill={BAR} />
  </g>
);

/* ---------- E01 editor dock — explainer surface ---------- */
export const EditorX: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <g>
    <rect x={-354} y={-232} width={708} height={492} rx={34} fill={P.ink} opacity={0.23} filter="url(#xBlur18)" />
    <rect x={-360} y={-250} width={720} height={500} rx={32} fill="#FFFEFB" stroke={BORDER} strokeWidth={4} />
    <rect x={-338} y={-228} width={676} height={190} rx={22} fill="#E7F0F7" opacity={0.92} />
    <PillX x={-326} y={-222} text="EDITOR" fill="url(#xBlue)" size={27} />

    {/* input slot */}
    <rect x={-326} y={-148} width={300} height={86} rx={15} fill="#EAF3F9" stroke={P.blue} strokeWidth={5} strokeDasharray="11 8" />
    <Tx x={-176} y={-92} size={23} fill={P.blue} anchor="middle" lines={["INPUT"]} />
    {children}

    {/* release ledge */}
    <path d="M-360 196 H360 V218 a32 32 0 0 1 -32 32 H-328 a32 32 0 0 1 -32 -32 Z" fill="#C7DCEC" />
    <path d="M-360 196 H360" stroke="#7FA8C4" strokeWidth={5} />
  </g>
);

/* ---------- C01 repair.py script — explainer surface ---------- */
export const ScriptX: React.FC<{
  x: number; y: number; s?: number; rotation?: number; authored?: number; showTag?: boolean;
}> = ({ x, y, s = 1, rotation = 0, authored = 1, showTag = true }) => (
  <g transform={`translate(${R(x)} ${R(y)}) rotate(${R(rotation)}) scale(${R(s)})`}>
    <rect x={-274} y={-202} width={548} height={432} rx={24} fill={P.ink} opacity={0.23} filter="url(#xBlur18)" />
    <rect x={-280} y={-220} width={560} height={440} rx={22} fill="#FFFEFB" stroke={BORDER} strokeWidth={4} />

    {/* header */}
    <path d="M-280 -198 a22 22 0 0 1 22 -22 h516 a22 22 0 0 1 22 22 v26 h-560 Z" fill="url(#xInk)" />
    <Tx x={-248} y={-180} size={34} fill={P.white} lines={["repair.py"]} />
    <path d="M226 -220 h32 a22 22 0 0 1 22 22 v26 h-54 Z" fill="url(#xRed)" />

    {/* provenance */}
    <Tx x={-248} y={-104} size={27} fill={P.muted} lines={["From external report."]} />
    {showTag && (
      <g transform="translate(104 -140)">
        <PillX x={0} y={0} text="NEW SCRIPT" fill="url(#xBlue)" size={25} />
      </g>
    )}

    {/* code bars */}
    <g>
      <rect x={-248} y={-58} width={430} height={22} rx={11} fill="#5F788C" />
      <rect x={-248} y={-12} width={380} height={22} rx={11} fill="#748DA2" />
      <rect x={-248} y={34} width={430} height={22} rx={11} fill={BAR} />
      <rect x={-248} y={80} width={330} height={22} rx={11} fill={BAR} opacity={0.85} />
      <g transform="translate(-70 152) scale(0.72)">
        <ActionMarks x={0} y={0} s={1} color={P.red} />
      </g>
    </g>

    {/* authoring cover: frame 1050 se pehle page sach me khaali */}
    <rect x={-280} y={-220} width={560} height={R(440 * (1 - authored))} rx={18} fill="#FFFEFB" stroke={BORDER_SOFT} strokeWidth={authored < 1 ? 2 : 0} />

    {/* grip */}
    <circle cx={0} cy={-211} r={17} fill={P.ink} opacity={0.12} filter="url(#xBlur10)" />
    <circle cx={0} cy={-220} r={16} fill="#FFFEFB" stroke={BORDER} strokeWidth={4} />
    <circle cx={0} cy={-220} r={6} fill={P.blue} />
  </g>
);

/* ---------- A01 coding agent — polished explainer rig ---------- */
export const RobotX: React.FC<{
  x: number; y: number; s?: number; eye?: Eye; armR?: number; armL?: number;
  stylus?: boolean; headTilt?: number; opacity?: number;
}> = ({ x, y, s = 1, eye = "attentive", armR = 12, armL = -12, stylus = false, headTilt = 0, opacity = 1 }) => {
  const eyes: Record<Eye, React.ReactNode> = {
    attentive: (<g stroke="#D5EDFA" strokeWidth={9} strokeLinecap="round"><path d="M148 108 V142 M212 108 V142" /></g>),
    focused: (<g stroke="#D5EDFA" strokeWidth={9} strokeLinecap="round"><path d="M132 126 H164 M196 126 H228" /></g>),
    confident: (<g stroke="#D5EDFA" strokeWidth={9} strokeLinecap="round"><path d="M132 130 H164 M196 130 H228 M138 104 L222 104" /></g>),
    surprised: (<g fill="#BDD8EA"><circle cx={148} cy={124} r={12} /><circle cx={212} cy={124} r={12} /></g>),
    calm: (<g stroke="#D5EDFA" strokeWidth={9} strokeLinecap="round"><path d="M134 120 Q148 132 162 120 M198 120 Q212 132 226 120" fill="none" /></g>),
  };
  const arm = (side: 1 | -1, ang: number) => {
    const sx = side === 1 ? 292 : 68;
    return (
      <g transform={`rotate(${R(ang)} ${sx} 268)`} stroke="#234862" strokeLinecap="round">
        <path d={`M${sx} 268 L${sx + side * 16} 348`} strokeWidth={26} />
        <path d={`M${sx + side * 16} 348 L${sx + side * 40} 414`} strokeWidth={22} />
        <circle cx={sx + side * 44} cy={420} r={17} fill="#FFFEFB" stroke="#89A9BE" strokeWidth={5} />
      </g>
    );
  };
  return (
    <g transform={`translate(${R(x)} ${R(y)}) scale(${R(s)})`} opacity={opacity}>
      <ellipse cx={180} cy={566} rx={128} ry={16} fill={P.ink} opacity={0.20} filter="url(#xBlur10)" />

      {/* legs + feet */}
      <rect x={112} y={452} width={44} height={72} rx={10} fill="url(#xBlue)" />
      <rect x={204} y={452} width={44} height={72} rx={10} fill="url(#xBlue)" />
      <rect x={104} y={508} width={58} height={42} rx={13} fill="#24465E" />
      <rect x={198} y={508} width={58} height={42} rx={13} fill="#24465E" />
      <ellipse cx={126} cy={560} rx={52} ry={16} fill="#18384E" />
      <ellipse cx={234} cy={560} rx={52} ry={16} fill="#18384E" />

      {arm(-1, armL)}
      {arm(1, armR)}
      {stylus && (
        <g transform="rotate(32 336 420)">
          <rect x={328} y={392} width={15} height={66} rx={7} fill="url(#xBlue)" stroke="#31536B" strokeWidth={3} />
          <path d="M330 456 L335.5 474 L341 456 Z" fill={P.ink} />
        </g>
      )}

      {/* torso */}
      <rect x={66} y={228} width={228} height={252} rx={42} fill="url(#xBody)" stroke="#5E86A3" strokeWidth={5} />
      <path d="M92 254 Q180 228 268 254" fill="none" stroke="#FFFFFF" strokeOpacity={0.38} strokeWidth={8} strokeLinecap="round" />
      <rect x={106} y={282} width={148} height={128} rx={26} fill="#FFFEFB" opacity={0.94} stroke="#8EACC2" strokeWidth={4} />
      <circle cx={180} cy={330} r={17} fill="url(#xBlue)" />
      <path d="M138 376 H222" stroke={P.muted} strokeWidth={7} strokeLinecap="round" opacity={0.78} />

      {/* head */}
      <g transform={`rotate(${R(headTilt)} 180 130)`}>
        <path d="M180 44 V14" stroke="#234862" strokeWidth={8} strokeLinecap="round" />
        <circle cx={180} cy={10} r={10} fill="url(#xRed)" />
        <rect x={62} y={40} width={236} height={176} rx={46} fill="#FFFEFB" stroke="#9DB8C9" strokeWidth={5} />
        <rect x={92} y={82} width={176} height={88} rx={34} fill="url(#xScreen)" />
        <path d="M116 99 Q180 82 244 99" fill="none" stroke="#FFFFFF" strokeOpacity={0.16} strokeWidth={7} strokeLinecap="round" />
        {eyes[eye]}
        {eye === "surprised" && <circle cx={180} cy={192} r={9} fill="none" stroke={P.ink} strokeWidth={5} />}
      </g>
    </g>
  );
};
