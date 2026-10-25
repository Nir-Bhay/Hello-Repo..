import React from "react";
import { random } from "remotion";
import { FONT, P, R } from "./theme";

/**
 * ASI05 PREMIUM shared parts.
 * Story geometry aur local bounding boxes v2 wale hi rakhe gaye hain;
 * badlav sirf material, depth, finish aur character polish me hai.
 */

export const PremiumDefs: React.FC = () => (
  <defs>
    <linearGradient id="pBlue" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#4B759B" />
      <stop offset="100%" stopColor="#2C5377" />
    </linearGradient>
    <linearGradient id="pInk" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#1E3A4F" />
      <stop offset="100%" stopColor="#081F31" />
    </linearGradient>
    <linearGradient id="pRed" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#C25442" />
      <stop offset="100%" stopColor="#8E3022" />
    </linearGradient>
    <linearGradient id="pRedSoft" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#F6E3DC" />
      <stop offset="100%" stopColor="#EAC8BE" />
    </linearGradient>
    <linearGradient id="pBody" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#CFE2EF" />
      <stop offset="100%" stopColor="#89ADC7" />
    </linearGradient>
    <linearGradient id="pScreen" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#214159" />
      <stop offset="100%" stopColor="#071E30" />
    </linearGradient>
    <linearGradient id="pGold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#CBA873" />
      <stop offset="100%" stopColor="#9C7B4C" />
    </linearGradient>
    <linearGradient id="pPlum" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#7D6573" />
      <stop offset="100%" stopColor="#5E4656" />
    </linearGradient>
    <radialGradient id="pBgGlow" cx="50%" cy="34%" r="62%">
      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.30" />
      <stop offset="58%" stopColor="#FFFFFF" stopOpacity="0.07" />
      <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
    </radialGradient>
    <filter id="pBlur8" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="8" />
    </filter>
    <filter id="pBlur14" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="14" />
    </filter>
    <filter id="pBlur22" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="22" />
    </filter>
  </defs>
);

/* ---------- paper world ---------- */
export const Paper: React.FC = () => {
  const dots = Array.from({ length: 110 }, (_, i) => ({
    x: random(`px-${i}`) * 1080,
    y: random(`py-${i}`) * 1920,
    r: 0.8 + random(`pr-${i}`) * 1.6,
    o: 0.018 + random(`po-${i}`) * 0.038,
  }));
  return (
    <g>
      <rect width="1080" height="1920" fill={P.paper} />
      <rect width="1080" height="1920" fill="url(#pBgGlow)" />
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={P.ink} opacity={d.o} />
      ))}
      <rect width="1080" height="1920" fill="none" stroke={P.ink} strokeOpacity="0.038" strokeWidth="42" />
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
}) => {
  const w = text.length * size * 0.72 + 46;
  const h = size + 28;
  return (
    <g>
      <rect x={x + 3} y={y + 6} width={w} height={h} rx={h / 2} fill={P.ink} opacity={0.17} filter="url(#pBlur8)" />
      <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={fill} stroke={P.ink} strokeOpacity={0.18} strokeWidth={2} />
      <path d={`M${x + 18} ${y + 7} H${x + w - 18}`} stroke="#FFFFFF" strokeOpacity={0.20} strokeWidth={3} strokeLinecap="round" />
      <text x={x + 23} y={y + size + 5} fontFamily={FONT} fontWeight={700} fontSize={size} fill={fg} letterSpacing={0.4}>
        {text}
      </text>
    </g>
  );
};

/* ---------- small evidence icons ---------- */
export const KeyShape: React.FC<{ x: number; y: number; s?: number; fill?: string }> = ({ x, y, s = 1, fill = P.ochre }) => (
  <g transform={`translate(${R(x)} ${R(y)}) scale(${R(s)})`}>
    <g transform="translate(4 6)" fill="none" stroke={P.ink} strokeWidth={11} opacity={0.16} filter="url(#pBlur8)">
      <circle cx={-26} cy={0} r={30} />
      <path d="M2 0 H86 M58 0 V30 M84 0 V22" strokeLinecap="round" />
    </g>
    <g fill="none" stroke="url(#pGold)" strokeWidth={12}>
      <circle cx={-26} cy={0} r={30} />
      <path d="M2 0 H86 M58 0 V30 M84 0 V22" strokeLinecap="round" />
    </g>
    <circle cx={-26} cy={0} r={17} fill="none" stroke="#FFF6E8" strokeOpacity={0.55} strokeWidth={3} />
  </g>
);

export const Capsule: React.FC<{ x: number; y: number; s?: number; hollow?: boolean; opacity?: number }> = ({
  x, y, s = 1, hollow = false, opacity = 1,
}) => (
  <g transform={`translate(${R(x)} ${R(y)}) scale(${R(s)})`} opacity={opacity}>
    {hollow ? (
      <g>
        <rect x={-58} y={-26} width={116} height={52} rx={26} fill="none" stroke={P.red} strokeWidth={7} />
        <rect x={-48} y={-17} width={96} height={34} rx={17} fill="none" stroke="#D89A8D" strokeWidth={2} />
      </g>
    ) : (
      <g>
        <rect x={-55} y={-20} width={112} height={48} rx={24} fill={P.ink} opacity={0.14} filter="url(#pBlur8)" />
        <rect x={-58} y={-26} width={116} height={52} rx={26} fill="url(#pRed)" />
        <rect x={-40} y={-15} width={48} height={12} rx={6} fill={P.white} opacity={0.58} />
        <path d="M-42 14 H42" stroke="#6E2418" strokeOpacity={0.28} strokeWidth={4} strokeLinecap="round" />
      </g>
    )}
  </g>
);

/** I01 ke do diagnostic action marks — premium finish, same bounding box */
export const ActionMarks: React.FC<{ x: number; y: number; s?: number; color?: string }> = ({ x, y, s = 1, color = P.red }) => {
  const arrow = (ax: number) => (
    <g stroke={color} strokeWidth={7} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d={`M${ax} 0 H${ax + 44}`} />
      <path d={`M${ax + 32} -11 L${ax + 46} 0 L${ax + 32} 11`} />
    </g>
  );
  return (
    <g transform={`translate(${R(x)} ${R(y)}) scale(${R(s)})`}>
      {/* folder */}
      <path d="M-116 -10 H-50 L-37 4 H40 V43 H-116 Z" fill={P.ink} opacity={0.10} />
      <path d="M-120 -16 H-52 L-38 0 H44 V44 H-120 Z" fill="url(#pRedSoft)" stroke={color} strokeWidth={5.5} strokeLinejoin="round" />
      <path d="M-120 -16 H-52 L-38 0 H44" fill="none" stroke="#FFFFFF" strokeOpacity={0.45} strokeWidth={3} />
      {arrow(-28)}
      {/* tray */}
      <path d="M68 11 L146 11 L133 45 L81 45 Z" fill={P.ink} opacity={0.08} />
      <path d="M64 6 L150 6 L136 46 L78 46 Z" fill="#EDF4F9" stroke={color} strokeWidth={5.5} strokeLinejoin="round" />
      <path d="M76 15 H138" stroke={P.paleBlue} strokeWidth={5} strokeLinecap="round" />
      {arrow(168)}
      {/* receiver */}
      <rect x={239} y={-9} width={64} height={60} rx={9} fill={P.ink} opacity={0.08} />
      <rect x={236} y={-14} width={64} height={60} rx={9} fill={P.white} stroke={color} strokeWidth={5.5} />
      <path d="M236 -3 H300" stroke={P.blue} strokeWidth={5} opacity={0.65} />
      <path d="M250 10 H286 M250 26 H286" stroke={color} strokeWidth={5.5} strokeLinecap="round" />
    </g>
  );
};

/* ---------- A01 coding agent — premium rig ---------- */
export type Eye = "attentive" | "focused" | "confident" | "surprised" | "calm";
export const Robot: React.FC<{
  x: number; y: number; s?: number; eye?: Eye; armR?: number; armL?: number;
  stylus?: boolean; headTilt?: number; opacity?: number;
}> = ({ x, y, s = 1, eye = "attentive", armR = 12, armL = -12, stylus = false, headTilt = 0, opacity = 1 }) => {
  const eyes: Record<Eye, React.ReactNode> = {
    attentive: (<g stroke="#D8EEFA" strokeWidth={10} strokeLinecap="round"><path d="M148 108 V142 M212 108 V142" /></g>),
    focused: (<g stroke="#D8EEFA" strokeWidth={10} strokeLinecap="round"><path d="M132 126 H164 M196 126 H228" /></g>),
    confident: (<g stroke="#D8EEFA" strokeWidth={10} strokeLinecap="round"><path d="M132 130 H164 M196 130 H228 M138 104 L222 104" /></g>),
    surprised: (<g fill="#D8EEFA"><circle cx={148} cy={124} r={12} /><circle cx={212} cy={124} r={12} /></g>),
    calm: (<g stroke="#D8EEFA" strokeWidth={10} strokeLinecap="round"><path d="M134 120 Q148 132 162 120 M198 120 Q212 132 226 120" fill="none" /></g>),
  };
  const arm = (side: 1 | -1, ang: number) => {
    const sx = side === 1 ? 292 : 68;
    const ex = sx + side * 16;
    return (
      <g transform={`rotate(${R(ang)} ${sx} 268)`} strokeLinecap="round">
        <path d={`M${sx} 268 L${ex} 348`} stroke="#23455E" strokeWidth={25} />
        <path d={`M${ex} 348 L${sx + side * 40} 414`} stroke="#31536B" strokeWidth={21} />
        <circle cx={ex} cy={348} r={15} fill="#D7E6F1" stroke="#23455E" strokeWidth={5} />
        <circle cx={sx + side * 44} cy={420} r={17} fill="#FFFEFB" stroke="#6E93AC" strokeWidth={5} />
      </g>
    );
  };
  return (
    <g transform={`translate(${R(x)} ${R(y)}) scale(${R(s)})`} opacity={opacity}>
      <ellipse cx={180} cy={566} rx={132} ry={16} fill={P.ink} opacity={0.16} filter="url(#pBlur14)" />

      {/* legs and grounded feet */}
      <rect x={92} y={436} width={176} height={34} rx={17} fill="#31536B" />
      <rect x={112} y={452} width={44} height={72} rx={12} fill="url(#pBlue)" />
      <rect x={204} y={452} width={44} height={72} rx={12} fill="url(#pBlue)" />
      <rect x={104} y={508} width={58} height={42} rx={13} fill="#24465E" />
      <rect x={198} y={508} width={58} height={42} rx={13} fill="#24465E" />
      <ellipse cx={126} cy={560} rx={52} ry={16} fill="#17374E" />
      <ellipse cx={234} cy={560} rx={52} ry={16} fill="#17374E" />

      {arm(-1, armL)}
      {arm(1, armR)}
      {stylus && (
        <g transform="rotate(32 336 420)">
          <rect x={328} y={392} width={15} height={66} rx={7} fill="url(#pBlue)" stroke="#23455E" strokeWidth={3} />
          <path d="M330 456 L335.5 474 L341 456 Z" fill={P.ink} />
        </g>
      )}

      {/* neck + torso */}
      <rect x={158} y={204} width={44} height={34} rx={8} fill="#31536B" />
      <rect x={66} y={228} width={228} height={252} rx={44} fill="url(#pBody)" stroke="#4E7492" strokeWidth={5} />
      <path d="M92 254 Q180 228 268 254" fill="none" stroke="#FFFFFF" strokeOpacity={0.36} strokeWidth={8} strokeLinecap="round" />
      <path d="M84 350 H100 M260 350 H276" stroke="#5E86A3" strokeWidth={6} strokeLinecap="round" opacity={0.72} />
      <rect x={106} y={282} width={148} height={128} rx={26} fill="#FFFEFB" opacity={0.97} stroke="#7FA0B8" strokeWidth={4} />
      <circle cx={180} cy={330} r={27} fill="#FFFEFB" stroke="url(#pBlue)" strokeWidth={5} />
      <circle cx={180} cy={330} r={15} fill="url(#pBlue)" />
      <circle cx={174} cy={324} r={5} fill="#FFFFFF" opacity={0.55} />
      <path d="M138 376 H222" stroke={P.muted} strokeWidth={7} strokeLinecap="round" opacity={0.78} />

      {/* head */}
      <g transform={`rotate(${R(headTilt)} 180 130)`}>
        <path d="M180 44 V14" stroke="#23455E" strokeWidth={8} strokeLinecap="round" />
        <circle cx={180} cy={10} r={10} fill="url(#pRed)" />
        <rect x={48} y={112} width={24} height={62} rx={12} fill="url(#pBody)" stroke="#5E86A3" strokeWidth={4} />
        <rect x={288} y={112} width={24} height={62} rx={12} fill="url(#pBody)" stroke="#5E86A3" strokeWidth={4} />
        <rect x={62} y={40} width={236} height={176} rx={46} fill="#FFFEFB" stroke="#7396AE" strokeWidth={5} />
        <rect x={92} y={82} width={176} height={88} rx={34} fill="url(#pScreen)" />
        <path d="M116 99 Q180 82 244 99" fill="none" stroke="#FFFFFF" strokeOpacity={0.17} strokeWidth={7} strokeLinecap="round" />
        {eyes[eye]}
        {eye === "surprised" && <circle cx={180} cy={192} r={9} fill="none" stroke={P.ink} strokeWidth={5} />}
      </g>
    </g>
  );
};

/* ---------- H01 developer — premium finish, same cropped-source role ---------- */
export const Human: React.FC<{ x: number; y: number; s?: number; opacity?: number }> = ({ x, y, s = 1, opacity = 1 }) => (
  <g transform={`translate(${R(x)} ${R(y)}) scale(${R(s)})`} opacity={opacity}>
    <ellipse cx={190} cy={452} rx={172} ry={18} fill={P.ink} opacity={0.12} filter="url(#pBlur14)" />
    {/* torso */}
    <rect x={30} y={196} width={290} height={250} rx={38} fill="url(#pPlum)" />
    <path d="M52 224 Q170 196 298 224" fill="none" stroke="#FFFFFF" strokeOpacity={0.12} strokeWidth={9} />
    <path d="M118 210 L175 268 L232 210 L232 246 L175 300 L118 246 Z" fill={P.ochre} />
    <path d="M138 214 L175 248 L212 214 L212 232 L175 264 L138 232 Z" fill="#F0E6D8" opacity={0.88} />
    <circle cx={175} cy={328} r={7} fill="#EADBC8" opacity={0.78} />
    <circle cx={175} cy={368} r={7} fill="#EADBC8" opacity={0.62} />

    {/* neck + face */}
    <rect x={152} y={164} width={46} height={52} rx={14} fill={P.skin} />
    <circle cx={101} cy={118} r={15} fill={P.skin} />
    <circle cx={249} cy={118} r={15} fill={P.skin} />
    <circle cx={175} cy={118} r={74} fill={P.skin} />
    <path d="M101 116 a74 74 0 0 1 148 0 l0 -18 a74 62 0 0 0 -148 0 Z" fill={P.hair} />
    <path d="M112 78 Q174 38 240 76" fill="none" stroke="#4A3A34" strokeWidth={7} strokeLinecap="round" opacity={0.75} />
    <path d="M122 101 Q137 94 152 101 M198 101 Q213 94 228 101" fill="none" stroke={P.hair} strokeWidth={6} strokeLinecap="round" />
    <circle cx={137} cy={121} r={5} fill={P.ink} />
    <circle cx={213} cy={121} r={5} fill={P.ink} />
    <path d="M175 124 L168 145 Q175 150 183 145" fill="none" stroke="#8A5D49" strokeWidth={5} strokeLinecap="round" />
    <path d="M154 164 Q175 174 196 164" fill="none" stroke="#8A5D49" strokeWidth={5} strokeLinecap="round" />
    <g fill="none" stroke="#223746" strokeWidth={6}>
      <rect x={106} y={104} width={56} height={40} rx={12} />
      <rect x={188} y={104} width={56} height={40} rx={12} />
      <path d="M162 120 H188 M106 118 L92 112 M244 118 L258 112" />
    </g>

    {/* reaching arm: plum sleeve, skin forearm, clear hand endpoint */}
    <path d="M292 250 Q340 272 362 306" fill="none" stroke="url(#pPlum)" strokeWidth={36} strokeLinecap="round" />
    <path d="M362 306 Q372 320 376 332" fill="none" stroke={P.skin} strokeWidth={23} strokeLinecap="round" />
    <circle cx={378} cy={338} r={17} fill={P.skin} stroke="#7B4F3B" strokeWidth={3} />
  </g>
);

/* ---------- RACTOR close wordmark ---------- */
export const Wordmark: React.FC<{ x: number; y: number; size?: number; opacity?: number }> = ({ x, y, size = 34, opacity = 0.55 }) => (
  <text x={x} y={y} fontFamily={FONT} fontWeight={700} fontSize={size} fill={P.muted} opacity={opacity} letterSpacing={6}>
    RACTOR
  </text>
);
