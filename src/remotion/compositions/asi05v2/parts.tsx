import React from "react";
import { random } from "remotion";
import { FONT, P, R } from "./theme";

/* ---------- paper world ---------- */
export const Paper: React.FC = () => {
  const dots = Array.from({ length: 130 }, (_, i) => ({
    x: random(`px-${i}`) * 1080,
    y: random(`py-${i}`) * 1920,
    r: 1 + random(`pr-${i}`) * 1.8,
    o: 0.03 + random(`po-${i}`) * 0.05,
  }));
  return (
    <g>
      <rect width="1080" height="1920" fill={P.paper} />
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={P.ink} opacity={d.o} />
      ))}
      <rect width="1080" height="1920" fill="none" stroke={P.ink} strokeOpacity="0.05" strokeWidth="42" />
    </g>
  );
};

/* ---------- text ---------- */
export const Tx: React.FC<{
  x: number;
  y: number;
  size: number;
  fill?: string;
  lines: string[];
  anchor?: "start" | "middle" | "end";
  lh?: number;
  opacity?: number;
  ls?: number;
}> = ({ x, y, size, fill = P.ink, lines, anchor = "start", lh = 1.16, opacity = 1, ls = 0 }) => (
  <text
    x={x}
    y={y}
    fontFamily={FONT}
    fontWeight={700}
    fontSize={size}
    fill={fill}
    textAnchor={anchor}
    opacity={opacity}
    letterSpacing={ls}
  >
    {lines.map((ln, i) => (
      <tspan key={i} x={x} dy={i === 0 ? 0 : size * lh}>
        {ln}
      </tspan>
    ))}
  </text>
);

/* ---------- boxes & tags ---------- */
export const RR: React.FC<{
  x: number; y: number; w: number; h: number; r?: number;
  fill?: string; stroke?: string; sw?: number; opacity?: number; dash?: string;
}> = ({ x, y, w, h, r = 22, fill = P.white, stroke = P.ink, sw = 5, opacity = 1, dash }) => (
  <rect x={x} y={y} width={w} height={h} rx={r} fill={fill} stroke={stroke} strokeWidth={sw} opacity={opacity} strokeDasharray={dash} />
);

export const Tag: React.FC<{ x: number; y: number; text: string; fill?: string; fg?: string; size?: number }> = ({
  x, y, text, fill = P.blue, fg = P.white, size = 30,
}) => (
  <g>
    <rect x={x} y={y} width={text.length * size * 0.78 + 44} height={size + 26} rx={(size + 26) / 2} fill={fill} />
    <text x={x + 20} y={y + size + 4} fontFamily={FONT} fontWeight={700} fontSize={size} fill={fg}>
      {text}
    </text>
  </g>
);

/* ---------- small evidence icons ---------- */
export const KeyShape: React.FC<{ x: number; y: number; s?: number; fill?: string }> = ({ x, y, s = 1, fill = P.ochre }) => (
  <g transform={`translate(${R(x)} ${R(y)}) scale(${R(s)})`} fill="none" stroke={fill} strokeWidth={11}>
    <circle cx={-26} cy={0} r={30} />
    <path d="M2 0 H86 M58 0 V30 M84 0 V22" strokeLinecap="round" />
  </g>
);

export const Capsule: React.FC<{ x: number; y: number; s?: number; hollow?: boolean; opacity?: number }> = ({
  x, y, s = 1, hollow = false, opacity = 1,
}) => (
  <g transform={`translate(${R(x)} ${R(y)}) scale(${R(s)})`} opacity={opacity}>
    <rect x={-58} y={-26} width={116} height={52} rx={26} fill={hollow ? "none" : P.red} stroke={P.red} strokeWidth={hollow ? 6 : 0} />
    {!hollow && <rect x={-40} y={-14} width={44} height={12} rx={6} fill={P.white} opacity={0.55} />}
  </g>
);

/** I01 ke do diagnostic action marks: folder→tray, tray→outside receiver (S03/S06/S11 me same shapes) */
export const ActionMarks: React.FC<{ x: number; y: number; s?: number; color?: string }> = ({ x, y, s = 1, color = P.red }) => {
  const arrow = (ax: number) => (
    <g stroke={color} strokeWidth={6} fill="none" strokeLinecap="round">
      <path d={`M${ax} 0 H${ax + 44}`} />
      <path d={`M${ax + 32} -11 L${ax + 46} 0 L${ax + 32} 11`} />
    </g>
  );
  return (
    <g transform={`translate(${R(x)} ${R(y)}) scale(${R(s)})`} stroke={color} fill="none" strokeWidth={5.5}>
      {/* folder */}
      <path d="M-120 -16 H-52 L-38 0 H44 V44 H-120 Z" fill={P.paleRed} />
      {arrow(-28)}
      {/* tray */}
      <path d="M64 6 L150 6 L136 46 L78 46 Z" fill={P.white} />
      {arrow(168)}
      {/* receiver */}
      <rect x={236} y={-14} width={64} height={60} rx={8} fill={P.white} />
      <path d="M250 8 H286 M250 24 H286" strokeLinecap="round" />
    </g>
  );
};

/* ---------- A01 coding agent (rig) ----------
   Local box 360x600. Eyes = cel accents (attentive/focused/confident/surprised/calm).
   Arms shoulder pivots se rotate hote hain — segment lengths fixed. */
export type Eye = "attentive" | "focused" | "confident" | "surprised" | "calm";
export const Robot: React.FC<{
  x: number; y: number; s?: number; eye?: Eye; armR?: number; armL?: number;
  stylus?: boolean; headTilt?: number; opacity?: number;
}> = ({ x, y, s = 1, eye = "attentive", armR = 12, armL = -12, stylus = false, headTilt = 0, opacity = 1 }) => {
  const eyes: Record<Eye, React.ReactNode> = {
    attentive: (<g stroke={P.paleBlue} strokeWidth={9} strokeLinecap="round"><path d="M148 108 V142 M212 108 V142" /></g>),
    focused: (<g stroke={P.paleBlue} strokeWidth={9} strokeLinecap="round"><path d="M132 126 H164 M196 126 H228" /></g>),
    confident: (<g stroke={P.paleBlue} strokeWidth={9} strokeLinecap="round"><path d="M132 130 H164 M196 130 H228 M138 104 L222 104" /></g>),
    surprised: (<g fill={P.paleBlue}><circle cx={148} cy={124} r={12} /><circle cx={212} cy={124} r={12} /></g>),
    calm: (<g stroke={P.paleBlue} strokeWidth={9} strokeLinecap="round"><path d="M134 120 Q148 132 162 120 M198 120 Q212 132 226 120" fill="none" /></g>),
  };
  const arm = (side: 1 | -1, ang: number) => {
    const sx = side === 1 ? 292 : 68;
    return (
      <g transform={`rotate(${R(ang)} ${sx} 268)`} stroke={P.ink} strokeLinecap="round">
        <path d={`M${sx} 268 L${sx + side * 16} 348`} strokeWidth={24} />
        <path d={`M${sx + side * 16} 348 L${sx + side * 40} 414`} strokeWidth={20} />
        <circle cx={sx + side * 44} cy={420} r={17} fill={P.white} strokeWidth={6} />
      </g>
    );
  };
  return (
    <g transform={`translate(${R(x)} ${R(y)}) scale(${R(s)})`} opacity={opacity}>
      {/* legs + feet (torso se jude hue) */}
      <rect x={112} y={452} width={44} height={72} fill={P.blue} />
      <rect x={204} y={452} width={44} height={72} fill={P.blue} />
      <rect x={104} y={508} width={58} height={42} rx={10} fill={P.blue} />
      <rect x={198} y={508} width={58} height={42} rx={10} fill={P.blue} />
      <ellipse cx={126} cy={560} rx={52} ry={16} fill={P.ink} />
      <ellipse cx={234} cy={560} rx={52} ry={16} fill={P.ink} />
      {arm(-1, armL)}
      {arm(1, armR)}
      {stylus && (
        <g transform={`rotate(32 336 420)`}>
          <rect x={328} y={392} width={15} height={66} rx={7} fill={P.blue} stroke={P.ink} strokeWidth={4} />
          <path d="M330 456 L335.5 474 L341 456 Z" fill={P.ink} />
        </g>
      )}
      {/* torso */}
      <rect x={66} y={228} width={228} height={252} rx={38} fill={P.paleBlue} stroke={P.ink} strokeWidth={6} />
      <rect x={106} y={282} width={148} height={128} rx={24} fill={P.white} stroke={P.ink} strokeWidth={5} />
      <circle cx={180} cy={330} r={17} fill={P.blue} />
      <path d="M138 376 H222" stroke={P.muted} strokeWidth={7} strokeLinecap="round" />
      {/* head */}
      <g transform={`rotate(${R(headTilt)} 180 130)`}>
        <path d="M180 44 V14" stroke={P.ink} strokeWidth={8} strokeLinecap="round" />
        <circle cx={180} cy={10} r={10} fill={P.red} />
        <rect x={62} y={40} width={236} height={176} rx={44} fill={P.white} stroke={P.ink} strokeWidth={6} />
        <rect x={92} y={82} width={176} height={88} rx={34} fill={P.ink} />
        {eyes[eye]}
        {eye === "surprised" && <circle cx={180} cy={192} r={9} fill="none" stroke={P.ink} strokeWidth={5} />}
      </g>
    </g>
  );
};

/* ---------- H01 developer (cropped source) ---------- */
export const Human: React.FC<{ x: number; y: number; s?: number; opacity?: number }> = ({ x, y, s = 1, opacity = 1 }) => (
  <g transform={`translate(${R(x)} ${R(y)}) scale(${R(s)})`} opacity={opacity}>
    <rect x={30} y={196} width={290} height={250} rx={36} fill={P.plum} />
    <path d="M118 210 L175 268 L232 210 L232 246 L175 300 L118 246 Z" fill={P.ochre} />
    <circle cx={175} cy={118} r={74} fill={P.skin} />
    <path d="M101 112 a74 74 0 0 1 148 0 l0 -14 a74 60 0 0 0 -148 0 Z" fill={P.hair} />
    <g fill="none" stroke={P.ink} strokeWidth={6}>
      <rect x={106} y={104} width={56} height={40} rx={12} />
      <rect x={188} y={104} width={56} height={40} rx={12} />
      <path d="M162 120 H188 M106 118 L92 112 M244 118 L258 112" />
    </g>
    {/* arm reaching right-down toward task grip */}
    <path d="M292 250 Q356 282 372 330" fill="none" stroke={P.plum} strokeWidth={34} strokeLinecap="round" />
    <circle cx={376} cy={338} r={17} fill={P.skin} stroke={P.ink} strokeWidth={4} />
  </g>
);

/* ---------- RACTOR close wordmark ---------- */
export const Wordmark: React.FC<{ x: number; y: number; size?: number; opacity?: number }> = ({ x, y, size = 34, opacity = 0.55 }) => (
  <text x={x} y={y} fontFamily={FONT} fontWeight={700} fontSize={size} fill={P.muted} opacity={opacity} letterSpacing={6}>
    RACTOR
  </text>
);
