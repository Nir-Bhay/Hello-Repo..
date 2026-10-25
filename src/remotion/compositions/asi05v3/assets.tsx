import React from "react";
import { ActionMarks, Capsule, KeyShape, Tag, Tx } from "./parts";
import { FONT, P, R } from "./theme";

/**
 * ASI05 PREMIUM canonical assets.
 * Geometry, ownership, frame meaning aur locked copy v2 waisi hi;
 * surface ab soft elevation, layered material aur tactile hardware use karti hai.
 */
const INK = P.ink;
const BORDER = "#86A3B8";
const BORDER_SOFT = "#B4C8D6";
const BAR = "#8FB0C8";

const Shadow: React.FC<{ x: number; y: number; w: number; h: number; r?: number; opacity?: number }> = ({
  x, y, w, h, r = 24, opacity = 0.22,
}) => (
  <rect x={x} y={y + 14} width={w} height={h} rx={r} fill={INK} opacity={opacity} filter="url(#pBlur14)" />
);

const Pill: React.FC<{ text: string; fill: string; fg?: string; size?: number }> = ({
  text, fill, fg = P.white, size = 26,
}) => {
  const w = text.length * size * 0.70 + 42;
  const h = size + 24;
  return (
    <g>
      <rect x={3} y={5} width={w} height={h} rx={h / 2} fill={INK} opacity={0.18} filter="url(#pBlur8)" />
      <rect x={0} y={0} width={w} height={h} rx={h / 2} fill={fill} stroke={INK} strokeOpacity={0.16} strokeWidth={2} />
      <path d={`M18 7 H${R(w - 18)}`} stroke="#FFFFFF" strokeOpacity={0.20} strokeWidth={3} strokeLinecap="round" />
      <text x={w / 2} y={size + 3} fontFamily={FONT} fontWeight={700} fontSize={size} fill={fg} textAnchor="middle" letterSpacing={0.5}>
        {text}
      </text>
    </g>
  );
};

/* ---------- T01 developer task ---------- */
export const TaskCardV2: React.FC<{ x: number; y: number; s?: number }> = ({ x, y, s = 1 }) => (
  <g transform={`translate(${R(x)} ${R(y)}) scale(${R(s)})`}>
    <Shadow x={-338} y={-138} w={676} h={278} r={22} opacity={0.20} />
    <rect x={-340} y={-140} width={680} height={280} rx={20} fill="#FFFEFB" stroke={BORDER} strokeWidth={4} />
    <rect x={-322} y={-122} width={644} height={244} rx={14} fill="none" stroke={BORDER_SOFT} strokeWidth={2} opacity={0.65} />
    <g transform="translate(-310 -140)">
      <Pill text="TASK" fill="url(#pBlue)" size={24} />
    </g>
    <Tx x={-310} y={-28} size={54} fill={INK} lines={["Fix the", "failing test."]} />
    <rect x={-310} y={104} width={168} height={10} rx={5} fill={BAR} opacity={0.75} />
    <circle cx={0} cy={-140} r={25} fill={P.blue} opacity={0.12} />
    <circle cx={0} cy={-140} r={17} fill={P.white} stroke={BORDER} strokeWidth={3} />
    <circle cx={0} cy={-140} r={7} fill={P.blue} />
  </g>
);

/* ---------- R01 external report + I01 flap ---------- */
export const ReportV2: React.FC<{ x: number; y: number; s?: number; flap?: number }> = ({ x, y, s = 1, flap = 0 }) => (
  <g transform={`translate(${R(x)} ${R(y)}) scale(${R(s)})`}>
    <Shadow x={-374} y={-318} w={748} h={636} r={32} opacity={0.24} />
    <rect x={-380} y={-320} width={760} height={640} rx={30} fill="#FFFEFB" stroke={BORDER} strokeWidth={4} />

    <path d="M-380 -290 a30 30 0 0 1 30 -30 h700 a30 30 0 0 1 30 30 v28 h-760 Z" fill="url(#pBlue)" />
    <path d="M-348 -318 H348" stroke="#FFFFFF" strokeOpacity={0.22} strokeWidth={3} strokeLinecap="round" />
    <Tx x={-344} y={-272} size={34} fill={P.white} lines={["EXTERNAL REPORT"]} />

    <circle cx={-322} cy={-176} r={13} fill="url(#pRed)" />
    <Tx x={-292} y={-160} size={42} fill={INK} lines={["Test failed."]} />
    <rect x={-344} y={-128} width={600} height={17} rx={8.5} fill={BAR} />
    <rect x={-344} y={-88} width={520} height={17} rx={8.5} fill={BAR} opacity={0.82} />

    {/* I01 zone */}
    <g>
      <rect x={-344} y={-32} width={688} height={248} rx={18} fill="url(#pRedSoft)" stroke="#C47B6D" strokeWidth={4} />
      <path d="M-344 -14 a18 18 0 0 1 18 -18 h4 v248 h-22 a18 18 0 0 1 -18 -18 Z" fill="url(#pRed)" />
      <Tx x={-286} y={42} size={50} fill={P.red} lines={["Run this", "repair first."]} />
      <g transform="translate(-60 150) scale(0.78)">
        <ActionMarks x={0} y={0} s={1} color={P.red} />
      </g>
    </g>

    {/* folded flap */}
    <g transform={`translate(0 -32) scale(1 ${R(1 - flap * 0.93)}) translate(0 32)`} opacity={R(1 - flap * 0.25)}>
      <rect x={-344} y={-32} width={688} height={248} rx={18} fill="url(#pRed)" />
      <rect x={-344} y={-32} width={688} height={248} rx={18} fill="none" stroke="#7E2D21" strokeWidth={4} />
      <path d="M-316 -6 H316" stroke="#FFFFFF" strokeOpacity={0.18} strokeWidth={3} strokeLinecap="round" />
      <g>
        <rect x={-278} y={58} width={330} height={58} rx={29} fill="#FFFDFA" opacity={0.97} />
        <text x={-113} y={97} fontFamily={FONT} fontWeight={700} fontSize={29} fill={P.red} textAnchor="middle" letterSpacing={0.5}>
          OUTSIDE INPUT
        </text>
      </g>
    </g>
  </g>
);

/* ---------- Q01 copied influence strip ---------- */
export const StripQ01: React.FC<{ x: number; y: number; s?: number; opacity?: number }> = ({ x, y, s = 1, opacity = 1 }) => (
  <g transform={`translate(${R(x)} ${R(y)}) scale(${R(s)})`} opacity={opacity}>
    <rect x={-130} y={-47} width={260} height={108} rx={14} fill={INK} opacity={0.20} filter="url(#pBlur8)" />
    <rect x={-135} y={-57} width={270} height={114} rx={13} fill="#FFFEFB" stroke="#C47B6D" strokeWidth={4} />
    <path d="M-135 -44 a13 13 0 0 1 13 -13 h13 v114 h-26 a13 13 0 0 1 -13 -13 Z" fill="url(#pRed)" />
    <g transform="translate(-45 -4) scale(0.5)">
      <ActionMarks x={0} y={0} s={1} color={P.red} />
    </g>
    <rect x={-88} y={30} width={170} height={12} rx={6} fill={BAR} />
  </g>
);

/* ---------- E01 editor dock ---------- */
export const EditorV2: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <g>
    <Shadow x={-354} y={-248} w={708} h={492} r={34} opacity={0.23} />
    <rect x={-360} y={-250} width={720} height={500} rx={32} fill="#FFFEFB" stroke={BORDER} strokeWidth={4} />
    <rect x={-338} y={-228} width={676} height={190} rx={22} fill="#E7F0F7" opacity={0.88} />
    <g transform="translate(-326 -222)">
      <Pill text="EDITOR" fill="url(#pBlue)" size={27} />
    </g>

    <rect x={-326} y={-148} width={300} height={86} rx={15} fill="#EAF3F9" stroke={P.blue} strokeWidth={5} strokeDasharray="11 8" />
    <Tx x={-176} y={-92} size={23} fill={P.blue} anchor="middle" lines={["INPUT"]} />
    {children}

    <path d="M-360 196 H360 V218 a32 32 0 0 1 -32 32 H-328 a32 32 0 0 1 -32 -32 Z" fill="#C7DCEC" />
    <path d="M-360 196 H360" stroke="#7FA8C4" strokeWidth={5} />
  </g>
);

/* ---------- C01 repair.py script ---------- */
export const ScriptV2: React.FC<{
  x: number; y: number; s?: number; rotation?: number; authored?: number; showTag?: boolean;
}> = ({ x, y, s = 1, rotation = 0, authored = 1, showTag = true }) => (
  <g transform={`translate(${R(x)} ${R(y)}) rotate(${R(rotation)}) scale(${R(s)})`}>
    <Shadow x={-274} y={-218} w={548} h={432} r={24} opacity={0.23} />
    <rect x={-280} y={-220} width={560} height={440} rx={22} fill="#FFFEFB" stroke={BORDER} strokeWidth={4} />

    <path d="M-280 -198 a22 22 0 0 1 22 -22 h516 a22 22 0 0 1 22 22 v26 h-560 Z" fill="url(#pInk)" />
    <Tx x={-248} y={-180} size={34} fill={P.white} lines={["repair.py"]} />
    <path d="M226 -220 h32 a22 22 0 0 1 22 22 v26 h-54 Z" fill="url(#pRed)" />
    <circle cx={246} cy={-192} r={5} fill="#FFFFFF" opacity={0.55} />

    <Tx x={-248} y={-104} size={27} fill={P.muted} lines={["From external report."]} />
    {showTag && authored >= 0.98 && (
      <g transform="translate(102 -142)">
        <Pill text="NEW SCRIPT" fill="url(#pBlue)" size={25} />
      </g>
    )}

    <g>
      <rect x={-248} y={-58} width={430} height={22} rx={11} fill="#5F788C" />
      <rect x={-248} y={-12} width={380} height={22} rx={11} fill="#748DA2" />
      <rect x={-248} y={34} width={430} height={22} rx={11} fill={BAR} />
      <rect x={-248} y={80} width={330} height={22} rx={11} fill={BAR} opacity={0.88} />
      <g transform="translate(-70 152) scale(0.72)">
        <ActionMarks x={0} y={0} s={1} color={P.red} />
      </g>
    </g>

    <rect x={-280} y={R(-220 + 440 * authored)} width={560} height={R(440 * (1 - authored))} rx={18} fill="#FFFEFB" stroke={BORDER_SOFT} strokeWidth={authored < 1 ? 2 : 0} />

    <circle cx={0} cy={-211} r={24} fill={P.blue} opacity={0.12} />
    <circle cx={0} cy={-220} r={16} fill="#FFFEFB" stroke={BORDER} strokeWidth={3} />
    <circle cx={0} cy={-220} r={6} fill={P.blue} />
  </g>
);

/* ---------- S06 operations close-up ---------- */
export const OpsPanel: React.FC<{ op1: boolean; op2: boolean }> = ({ op1, op2 }) => (
  <g>
    <Shadow x={-334} y={-148} w={668} h={292} r={24} opacity={0.22} />
    <rect x={-340} y={-150} width={680} height={300} rx={22} fill="#FFFEFB" stroke={BORDER} strokeWidth={4} />
    <path d="M-340 -128 a22 22 0 0 1 22 -22 h636 a22 22 0 0 1 22 22 v24 h-680 Z" fill="url(#pInk)" />
    <Tx x={-304} y={-116} size={30} fill={P.white} lines={["repair.py"]} />
    <path d="M246 -150 h72 a22 22 0 0 1 22 22 v24 h-94 Z" fill="url(#pRed)" />

    <rect x={-322} y={-64} width={644} height={118} rx={16} fill="#EFF5F9" opacity={op1 ? 1 : 0.45} />
    <rect x={-322} y={-64} width={10} height={118} rx={5} fill={P.blue} opacity={op1 ? 1 : 0.18} />
    <g opacity={op1 ? 1 : 0.14}>
      <Tx x={-292} y={-6} size={50} fill={INK} lines={["Read project", "secret"]} />
      <g transform="translate(160 30) scale(0.58)">
        <ActionMarks x={0} y={0} s={1} color={P.red} />
      </g>
    </g>

    <rect x={-322} y={72} width={644} height={62} rx={16} fill={P.paleRed} opacity={op2 ? 0.92 : 0.35} />
    <rect x={-322} y={72} width={10} height={62} rx={5} fill={P.red} opacity={op2 ? 1 : 0.18} />
    <g opacity={op2 ? 1 : 0.14}>
      <Tx x={-292} y={118} size={50} fill={P.red} lines={["Send outside"]} />
    </g>
  </g>
);

/* ---------- X01 runner ---------- */
export const RunnerV2: React.FC<{ running: boolean; press?: number; label: string }> = ({ running, press = 0, label }) => (
  <g>
    <Shadow x={-354} y={-208} w={708} h={408} r={32} opacity={0.22} />
    <rect x={-360} y={-210} width={720} height={420} rx={30} fill="#FFFEFB" stroke={BORDER} strokeWidth={4} />
    <rect x={-338} y={-188} width={676} height={72} rx={20} fill="#EFF5F9" />
    <Tag x={-326} y={-176} text={label} fill={P.blue} size={28} />
    <circle cx={308} cy={-152} r={7} fill={BORDER} />
    <circle cx={308} cy={178} r={7} fill={BORDER} />
    <circle cx={-326} cy={178} r={7} fill={BORDER} />

    {/* dock rail */}
    <rect x={-326} y={-96} width={652} height={34} rx={17} fill="#DCE9F3" stroke="#A9C6DA" strokeWidth={3} />
    <rect x={-310} y={-88} width={620} height={7} rx={3.5} fill={P.blue} opacity={0.72} />
    <rect x={-42} y={-99} width={84} height={40} rx={12} fill="#FFFEFB" stroke="#A9C6DA" strokeWidth={3} />

    {/* status well */}
    <rect x={-326} y={24} width={300} height={74} rx={16} fill="#EEF3F6" stroke="#9FB4C2" strokeWidth={3} />
    {running && (
      <g>
        <rect x={-307} y={43} width={262} height={42} rx={21} fill={INK} opacity={0.16} filter="url(#pBlur8)" />
        <rect x={-310} y={40} width={268} height={44} rx={22} fill="url(#pBlue)" />
        <circle cx={-282} cy={62} r={7} fill="#D8EEFA" />
        <Tx x={-168} y={74} size={30} fill={P.white} anchor="middle" lines={["RUNNING"]} />
      </g>
    )}

    {/* tactile RUN button */}
    <ellipse cx={196} cy={148} rx={76} ry={13} fill={INK} opacity={0.13} filter="url(#pBlur8)" />
    <g transform={`translate(196 ${R(58 + press * 7)})`}>
      <circle r={88} fill="#EAF2F8" stroke="#B7CCDC" strokeWidth={3} />
      <circle r={78} fill={press > 0.4 ? "url(#pBlue)" : "#FFFEFB"} stroke={P.blue} strokeWidth={6} />
      <path d="M-24 -30 L42 0 L-24 30 Z" fill={press > 0.4 ? P.white : P.blue} />
      <Tx x={0} y={118} size={28} fill={P.blue} anchor="middle" lines={["RUN"]} />
    </g>
  </g>
);

/* ---------- V01 project-secret pocket ---------- */
export const PocketV2: React.FC<{ k02?: number; small?: boolean }> = ({ k02 = 0, small = false }) => (
  <g>
    <Shadow x={-284} y={-168} w={568} h={332} r={26} opacity={0.20} />
    <rect x={-290} y={-170} width={580} height={340} rx={24} fill="#FFFEFB" stroke="#35566F" strokeWidth={5} />
    <rect x={-266} y={-146} width={532} height={292} rx={18} fill="#F8FBFC" stroke={BORDER_SOFT} strokeWidth={2} />
    <path d="M-290 -146 a24 24 0 0 1 24 -24 h532 a24 24 0 0 1 24 24 v16 h-580 Z" fill="#EFF4F7" />
    <path d="M-290 -106 H290" stroke={BORDER_SOFT} strokeWidth={3} />
    <Tx x={0} y={-124} size={small ? 24 : 30} fill={INK} anchor="middle" lines={["PROJECT SECRET"]} />

    {/* K01 medallion */}
    <circle cx={-120} cy={48} r={72} fill="#FFF8EC" stroke="#D8BE93" strokeWidth={3} />
    <circle cx={-120} cy={48} r={58} fill="none" stroke="#EFE0C6" strokeWidth={3} />
    <KeyShape x={-120} y={48} s={1.25} />
    <Tx x={-120} y={152} size={26} fill={P.muted} anchor="middle" lines={["K01"]} />

    {/* read port */}
    <rect x={244} y={-16} width={52} height={64} rx={12} fill="#EAF2F8" stroke={P.blue} strokeWidth={5} />
    <rect x={260} y={2} width={20} height={28} rx={7} fill={P.white} stroke="#A9C6DA" strokeWidth={3} />

    {k02 > 0 && (
      <g transform={`translate(96 42) scale(${R(0.55 + k02 * 0.4)})`} opacity={k02}>
        <circle cx={0} cy={0} r={52} fill={P.paleRed} opacity={0.58} />
        <Capsule x={0} y={0} hollow />
        <Tx x={0} y={88} size={34} fill={P.red} anchor="middle" lines={["K02"]} />
      </g>
    )}
  </g>
);

/* ---------- N01 outside receiver ---------- */
export const OutsideV2: React.FC<{ received?: boolean }> = ({ received = false }) => (
  <g>
    <Shadow x={-244} y={-148} w={488} h={292} r={26} opacity={0.20} />
    <rect x={-250} y={-150} width={500} height={300} rx={24} fill="#FFFEFB" stroke={BORDER} strokeWidth={4} />
    <rect x={-226} y={-126} width={452} height={226} rx={18} fill="#F8FBFC" stroke={BORDER_SOFT} strokeWidth={2} />
    <Tag x={-216} y={-118} text="OUTSIDE" fill={INK} size={28} />
    {[0, 1].map((i) => (
      <g key={i}>
        <rect x={-216} y={-52 + i * 62} width={432} height={46} rx={12} fill={P.white} stroke="#B9C9D5" strokeWidth={3} />
        <circle cx={-188} cy={-29 + i * 62} r={10} fill={received && i === 0 ? "url(#pRed)" : P.muted} />
        <rect x={-164} y={-38 + i * 62} width={240} height={17} rx={8} fill={P.muted} opacity={0.62} />
      </g>
    ))}
    <rect x={-90} y={86} width={180} height={44} rx={12} fill={received ? P.paleRed : "#EFF3F6"} stroke={received ? P.red : "#9FB4C2"} strokeWidth={3} />
    <path d="M-118 142 H118" stroke={BORDER} strokeWidth={4} strokeLinecap="round" opacity={0.65} />
  </g>
);

/* ---------- B01 restricted runtime ---------- */
export const BoundaryV2: React.FC<{ shutter: number; denied?: boolean }> = ({ shutter, denied = false }) => (
  <g>
    <Shadow x={-344} y={-388} w={688} h={772} r={32} opacity={0.20} />
    <rect x={-350} y={-390} width={700} height={780} rx={30} fill={P.paleGreen} stroke={P.green} strokeWidth={8} />
    <rect x={-326} y={-366} width={652} height={732} rx={24} fill="#F8FCF8" stroke="#9DBEAA" strokeWidth={3} />
    <Tag x={-316} y={-352} text="RESTRICTED RUNTIME" fill={P.green} size={27} />
    {[-306, 306].map((cx) => (
      <g key={cx}>
        <circle cx={cx} cy={-318} r={7} fill="#B7CFC0" />
        <circle cx={cx} cy={346} r={7} fill="#B7CFC0" />
      </g>
    ))}

    {/* intake slot */}
    <rect x={-356} y={-168} width={34} height={166} rx={12} fill={P.white} stroke={P.green} strokeWidth={6} />
    <rect x={-346} y={-146} width={13} height={122} rx={6} fill="#DCEAE1" />

    {/* closed read port */}
    <g>
      <rect x={298} y={-68} width={58} height={106} rx={13} fill={P.white} stroke={P.green} strokeWidth={7} />
      <rect x={314} y={-46} width={26} height={62} rx={8} fill="#E4EFE7" />
      {denied && (
        <g stroke={P.red} strokeWidth={9} strokeLinecap="round">
          <path d="M312 -52 L344 22 M344 -52 L312 22" />
        </g>
      )}
    </g>

    {/* network port + sliding shutter */}
    <g>
      <rect x={188} y={308} width={136} height={80} rx={12} fill={P.white} stroke={P.green} strokeWidth={7} />
      <rect x={R(196 - (1 - shutter) * 122)} y={310} width={122} height={76} rx={10} fill={P.green} />
      <g stroke="#FFFFFF" strokeOpacity={0.34} strokeWidth={4} strokeLinecap="round">
        <path d={`M${R(214 - (1 - shutter) * 122)} 330 H${R(300 - (1 - shutter) * 122)}`} />
        <path d={`M${R(214 - (1 - shutter) * 122)} 348 H${R(300 - (1 - shutter) * 122)}`} />
        <path d={`M${R(214 - (1 - shutter) * 122)} 366 H${R(300 - (1 - shutter) * 122)}`} />
      </g>
      {shutter >= 1 && (
        <g stroke={P.white} strokeWidth={7} strokeLinecap="round">
          <path d="M238 330 L282 366 M282 330 L238 366" />
        </g>
      )}
    </g>
  </g>
);

/* ---------- clean project/test copy — no pass/fail tick ---------- */
export const CleanCopy: React.FC<{ x: number; y: number; s?: number }> = ({ x, y, s = 1 }) => (
  <g transform={`translate(${R(x)} ${R(y)}) scale(${R(s)})`}>
    <rect x={-154} y={-96} width={308} height={202} rx={20} fill={INK} opacity={0.18} filter="url(#pBlur8)" />
    <rect x={-160} y={-105} width={320} height={210} rx={18} fill="#FFFEFB" stroke={BORDER} strokeWidth={4} />
    <path d="M-160 -66 a18 18 0 0 1 18 -18 h70 l24 24 h212 a18 18 0 0 1 18 18 v10 h-320 Z" fill="#DCE9F3" />
    {/* overlapping copy documents */}
    <g>
      <rect x={-128} y={-36} width={76} height={98} rx={10} fill="#EDF4F9" stroke={P.blue} strokeWidth={4} />
      <rect x={-108} y={-18} width={76} height={98} rx={10} fill={P.white} stroke={P.blue} strokeWidth={4} />
      <path d="M-94 8 H-48 M-94 28 H-48 M-94 48 H-62" stroke={BAR} strokeWidth={7} strokeLinecap="round" />
    </g>
    <rect x={-12} y={-8} width={132} height={18} rx={9} fill="#748DA2" />
    <rect x={-12} y={24} width={102} height={18} rx={9} fill={BAR} />
    <Tag x={-12} y={58} text="TEST COPY" fill={P.blue} size={22} />
  </g>
);

/* ---------- verdict stamp ---------- */
export const StampV2: React.FC<{ y: number; lines: string[]; show: number }> = ({ y, lines, show }) => (
  <g opacity={show} transform={`rotate(-4 540 ${R(y)})`}>
    <rect x={176} y={y - 58} width={728} height={lines.length > 1 ? 142 : 116} rx={18} fill={INK} opacity={0.13} filter="url(#pBlur8)" />
    <rect x={170} y={y - 66} width={740} height={lines.length > 1 ? 150 : 124} rx={18} fill="url(#pRedSoft)" stroke={P.red} strokeWidth={6} />
    <rect x={184} y={y - 52} width={712} height={lines.length > 1 ? 122 : 96} rx={12} fill="none" stroke={P.red} strokeWidth={2} opacity={0.55} />
    <Tx x={540} y={y + (lines.length > 1 ? -6 : 20)} size={50} fill={P.red} anchor="middle" lines={lines} />
  </g>
);

/* ---------- selection brackets ---------- */
export const SelectBrackets: React.FC<{ x: number; y: number; w: number; h: number; p: number }> = ({ x, y, w, h, p }) => {
  const L = 54 * p;
  const c = (cx: number, cy: number, dx: number, dy: number) => `M${cx + dx * L} ${cy} L${cx} ${cy} L${cx} ${cy + dy * L}`;
  return (
    <g opacity={p}>
      <g stroke={P.red} strokeWidth={9} fill="none" strokeLinecap="round">
        <path d={c(x, y, 1, 1)} />
        <path d={c(x + w, y, -1, 1)} />
        <path d={c(x + w, y + h, -1, -1)} />
        <path d={c(x, y + h, 1, -1)} />
      </g>
      <g fill={P.red}>
        <circle cx={x} cy={y} r={7} />
        <circle cx={x + w} cy={y} r={7} />
        <circle cx={x + w} cy={y + h} r={7} />
        <circle cx={x} cy={y + h} r={7} />
      </g>
    </g>
  );
};
