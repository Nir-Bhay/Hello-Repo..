import React from "react";
import { ActionMarks, Capsule, KeyShape, Tag, Tx } from "./parts";
import { P, R } from "./theme";

/**
 * ASI05 v2 canonical assets — Director's Bible Part C.
 * Saare assets centre-origin (0,0 = centre). Copy sirf locked ledger se.
 */
const INK = P.ink;

/* ---------- T01 developer task ---------- */
export const TaskCardV2: React.FC<{ x: number; y: number; s?: number }> = ({ x, y, s = 1 }) => (
  <g transform={`translate(${R(x)} ${R(y)}) scale(${R(s)})`}>
    <rect x={-346} y={-134} width={692} height={288} rx={20} fill={INK} opacity={0.08} />
    <rect x={-340} y={-140} width={680} height={280} rx={18} fill={P.white} stroke={INK} strokeWidth={6} />
    <rect x={-310} y={-140} width={185} height={38} rx={8} fill={P.blue} />
    <Tx x={-310 + 92} y={-104} size={24} fill={P.white} anchor="middle" lines={["TASK"]} />
    <Tx x={-310} y={-28} size={54} fill={INK} lines={["Fix the", "failing test."]} />
    <circle cx={0} cy={-140} r={17} fill={P.white} stroke={INK} strokeWidth={5} />
    <circle cx={0} cy={-140} r={7} fill={P.blue} />
  </g>
);

/* ---------- R01 external report + I01 flap ---------- */
export const ReportV2: React.FC<{ x: number; y: number; s?: number; flap?: number }> = ({ x, y, s = 1, flap = 0 }) => (
  <g transform={`translate(${R(x)} ${R(y)}) scale(${R(s)})`}>
    <rect x={-386} y={-314} width={772} height={652} rx={24} fill={INK} opacity={0.07} />
    <rect x={-380} y={-320} width={760} height={640} rx={22} fill={P.white} stroke={INK} strokeWidth={6} />
    {/* header rail */}
    <path d="M-380 -298 a22 22 0 0 1 22 -22 h716 a22 22 0 0 1 22 22 v34 h-760 Z" fill={P.blue} />
    <Tx x={-344} y={-272} size={34} fill={P.white} lines={["EXTERNAL REPORT"]} />
    {/* failure row */}
    <circle cx={-322} cy={-176} r={13} fill={P.red} />
    <Tx x={-292} y={-160} size={42} fill={INK} lines={["Test failed."]} />
    <rect x={-344} y={-128} width={600} height={17} rx={8} fill={P.paleBlue} />
    <rect x={-344} y={-88} width={520} height={17} rx={8} fill={P.paleBlue} />
    {/* I01 zone (flap ke neeche) */}
    <g>
      <rect x={-344} y={-32} width={688} height={248} rx={16} fill={P.paleRed} stroke={P.red} strokeWidth={5} />
      <rect x={-344} y={-32} width={34} height={248} fill={P.red} />
      <Tx x={-286} y={42} size={50} fill={P.red} lines={["Run this", "repair first."]} />
      <g transform="translate(-60 150) scale(0.78)">
        <ActionMarks x={0} y={0} s={1} color={P.red} />
      </g>
    </g>
    {/* folded flap — band: OUTSIDE INPUT; khulne par upar sikudta hai */}
    <g transform={`translate(0 -32) scale(1 ${R(1 - flap * 0.93)}) translate(0 32)`} opacity={R(1 - flap * 0.25)}>
      <rect x={-344} y={-32} width={688} height={248} rx={16} fill={P.red} />
      <rect x={-344} y={-32} width={688} height={248} rx={16} fill="none" stroke={INK} strokeWidth={5} />
      <Tag x={-306} y={62} text="OUTSIDE INPUT" fill={INK} size={30} />
    </g>
  </g>
);

/* ---------- Q01 copied influence strip ---------- */
export const StripQ01: React.FC<{ x: number; y: number; s?: number; opacity?: number }> = ({ x, y, s = 1, opacity = 1 }) => (
  <g transform={`translate(${R(x)} ${R(y)}) scale(${R(s)})`} opacity={opacity}>
    <rect x={-135} y={-57} width={270} height={114} rx={12} fill={P.white} stroke={P.red} strokeWidth={6} />
    <rect x={-135} y={-57} width={26} height={114} fill={P.red} />
    <g transform="translate(-45 -4) scale(0.5)">
      <ActionMarks x={0} y={0} s={1} color={P.red} />
    </g>
    <rect x={-88} y={30} width={170} height={12} rx={6} fill={P.paleBlue} />
  </g>
);

/* ---------- E01 editor dock ---------- */
export const EditorV2: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <g>
    <rect x={-360} y={-250} width={720} height={500} rx={26} fill={P.white} stroke={P.blue} strokeWidth={7} />
    <Tag x={-326} y={-216} text="EDITOR" fill={P.blue} size={28} />
    {/* input slot */}
    <rect x={-326} y={-148} width={300} height={86} rx={14} fill={P.paper} stroke={P.blue} strokeWidth={5} strokeDasharray="12 9" />
    <Tx x={-176} y={-92} size={24} fill={P.blue} anchor="middle" lines={["INPUT"]} />
    {children}
    {/* release ledge */}
    <rect x={-360} y={196} width={720} height={54} fill={P.paleBlue} />
    <rect x={-360} y={196} width={720} height={10} fill={P.blue} />
  </g>
);

/* ---------- C01 repair.py script ---------- */
export const ScriptV2: React.FC<{
  x: number; y: number; s?: number; rotation?: number; authored?: number; showTag?: boolean;
}> = ({ x, y, s = 1, rotation = 0, authored = 1, showTag = true }) => (
  <g transform={`translate(${R(x)} ${R(y)}) rotate(${R(rotation)}) scale(${R(s)})`}>
    <rect x={-286} y={-214} width={572} height={448} rx={20} fill={INK} opacity={0.07} />
    <rect x={-280} y={-220} width={560} height={440} rx={18} fill={P.white} stroke={INK} strokeWidth={6} />
    <path d="M-280 -202 a18 18 0 0 1 18 -18 h524 a18 18 0 0 1 18 18 v30 h-560 Z" fill={INK} />
    <Tx x={-248} y={-180} size={34} fill={P.white} lines={["repair.py"]} />
    <rect x={212} y={-220} width={68} height={48} fill={P.red} />
    {/* provenance band */}
    <Tx x={-248} y={-104} size={27} fill={P.muted} lines={["From external report."]} />
    {showTag && (
      <g transform="translate(118 -128)">
        <rect x={-14} y={-34} width={196} height={52} rx={10} fill={P.blue} />
        <Tx x={84} y={2} size={27} fill={P.white} anchor="middle" lines={["NEW SCRIPT"]} />
      </g>
    )}
    {/* code lines with authoring cover */}
    <g>
      <rect x={-248} y={-58} width={430} height={22} rx={11} fill={P.muted} />
      <rect x={-248} y={-12} width={380} height={22} rx={11} fill={P.muted} />
      <rect x={-248} y={34} width={430} height={22} rx={11} fill={P.paleBlue} />
      <rect x={-248} y={80} width={330} height={22} rx={11} fill={P.paleBlue} />
      <g transform="translate(-70 152) scale(0.72)">
        <ActionMarks x={0} y={0} s={1} color={P.red} />
      </g>
    </g>
    <rect x={-280} y={-220} width={560} height={R(440 * (1 - authored))} fill={P.white} opacity={1} />
    {/* grip */}
    <circle cx={0} cy={-220} r={16} fill={P.white} stroke={INK} strokeWidth={5} />
    <circle cx={0} cy={-220} r={6} fill={P.blue} />
  </g>
);

/* ---------- S06 operations close-up ---------- */
export const OpsPanel: React.FC<{ op1: boolean; op2: boolean }> = ({ op1, op2 }) => (
  <g>
    <rect x={-340} y={-150} width={680} height={300} rx={22} fill={P.white} stroke={INK} strokeWidth={6} />
    <path d="M-340 -132 a22 22 0 0 1 22 -22 h636 a22 22 0 0 1 22 22 v26 h-680 Z" fill={INK} />
    <Tx x={-304} y={-116} size={30} fill={P.white} lines={["repair.py"]} />
    <rect x={246} y={-150} width={94} height={44} fill={P.red} />
    <g opacity={op1 ? 1 : 0.14}>
      <Tx x={-304} y={-6} size={50} fill={INK} lines={["Read project", "secret"]} />
      <g transform="translate(160 30) scale(0.58)">
        <ActionMarks x={0} y={0} s={1} color={P.red} />
      </g>
    </g>
    <g opacity={op2 ? 1 : 0.14}>
      <Tx x={-304} y={118} size={50} fill={P.red} lines={["Send outside"]} />
    </g>
  </g>
);

/* ---------- X01 runner (unsafe + protected dono me) ---------- */
export const RunnerV2: React.FC<{ running: boolean; press?: number; label: string }> = ({ running, press = 0, label }) => (
  <g>
    <rect x={-360} y={-210} width={720} height={420} rx={26} fill={P.white} stroke={P.blue} strokeWidth={7} />
    <Tag x={-326} y={-176} text={label} fill={P.blue} size={28} />
    {/* rail */}
    <rect x={-326} y={-96} width={652} height={30} rx={15} fill={P.paleBlue} />
    <rect x={-326} y={-88} width={652} height={7} fill={P.blue} />
    {/* status well */}
    <rect x={-326} y={24} width={300} height={74} rx={14} fill={P.paper} stroke={P.muted} strokeWidth={4} />
    {running ? (
      <g>
        <rect x={-310} y={40} width={268} height={44} rx={22} fill={P.blue} />
        <Tx x={-176} y={74} size={30} fill={P.white} anchor="middle" lines={["RUNNING"]} />
      </g>
    ) : null}
    {/* RUN button */}
    <g transform={`translate(196 ${R(58 + press * 7)})`}>
      <circle r={78} fill={press > 0.4 ? P.blue : P.white} stroke={P.blue} strokeWidth={8} />
      <path d="M-24 -30 L42 0 L-24 30 Z" fill={press > 0.4 ? P.white : P.blue} />
      <Tx x={0} y={118} size={28} fill={P.blue} anchor="middle" lines={["RUN"]} />
    </g>
  </g>
);

/* ---------- V01 project-secret pocket ---------- */
export const PocketV2: React.FC<{ k02?: number; small?: boolean }> = ({ k02 = 0, small = false }) => (
  <g>
    <rect x={-290} y={-170} width={580} height={340} rx={24} fill={P.white} stroke={INK} strokeWidth={6} />
    <rect x={-290} y={-170} width={580} height={64} rx={24} fill={P.paper} stroke={INK} strokeWidth={4} />
    <Tx x={0} y={-124} size={small ? 24 : 30} fill={INK} anchor="middle" lines={["PROJECT SECRET"]} />
    {/* read port */}
    <rect x={252} y={-8} width={38} height={56} rx={9} fill={P.white} stroke={P.blue} strokeWidth={6} />
    <KeyShape x={-120} y={48} s={1.25} />
    <Tx x={-120} y={152} size={26} fill={P.muted} anchor="middle" lines={["K01"]} />
    {k02 > 0 && (
      <g transform={`translate(96 42) scale(${R(0.55 + k02 * 0.4)})`} opacity={k02}>
        <Capsule x={0} y={0} hollow />
        <Tx x={0} y={88} size={34} fill={P.red} anchor="middle" lines={["K02"]} />
      </g>
    )}
  </g>
);

/* ---------- N01 outside receiver ---------- */
export const OutsideV2: React.FC<{ received?: boolean }> = ({ received = false }) => (
  <g>
    <rect x={-250} y={-150} width={500} height={300} rx={24} fill={P.white} stroke={INK} strokeWidth={6} />
    <Tag x={-216} y={-118} text="OUTSIDE" fill={INK} size={28} />
    {[0, 1].map((i) => (
      <g key={i}>
        <rect x={-216} y={-52 + i * 62} width={432} height={46} rx={12} fill={P.paper} stroke={P.muted} strokeWidth={4} />
        <circle cx={-188} cy={-29 + i * 62} r={10} fill={received ? P.red : P.muted} />
        <rect x={-164} y={-38 + i * 62} width={240} height={17} rx={8} fill={P.muted} opacity={0.7} />
      </g>
    ))}
    {/* receive inset */}
    <rect x={-90} y={86} width={180} height={44} rx={12} fill={received ? P.paleRed : P.paper} stroke={received ? P.red : P.muted} strokeWidth={4} />
  </g>
);

/* ---------- B01 restricted runtime ---------- */
export const BoundaryV2: React.FC<{ shutter: number; denied?: boolean }> = ({ shutter, denied = false }) => (
  <g>
    <rect x={-350} y={-390} width={700} height={780} rx={30} fill={P.paleGreen} stroke={P.green} strokeWidth={9} />
    <Tag x={-316} y={-352} text="RESTRICTED RUNTIME" fill={P.green} size={27} />
    {/* intake slot (left) */}
    <rect x={-350} y={-160} width={26} height={150} rx={10} fill={P.white} stroke={P.green} strokeWidth={6} />
    {/* closed read port (right wall) */}
    <g>
      <rect x={306} y={-60} width={44} height={90} rx={10} fill={P.white} stroke={P.green} strokeWidth={7} />
      {denied && (
        <g stroke={P.red} strokeWidth={9} strokeLinecap="round">
          <path d="M312 -52 L344 22 M344 -52 L312 22" />
        </g>
      )}
    </g>
    {/* network port + shutter (bottom right) */}
    <g>
      <rect x={196} y={316} width={120} height={64} rx={10} fill={P.white} stroke={P.green} strokeWidth={7} />
      <rect x={R(196 - (1 - shutter) * 122)} y={310} width={122} height={76} rx={10} fill={P.green} />
      {shutter >= 1 && (
        <g stroke={P.white} strokeWidth={7} strokeLinecap="round">
          <path d="M238 330 L282 366 M282 330 L238 366" />
        </g>
      )}
    </g>
  </g>
);

/* ---------- clean project/test copy ---------- */
export const CleanCopy: React.FC<{ x: number; y: number; s?: number }> = ({ x, y, s = 1 }) => (
  <g transform={`translate(${R(x)} ${R(y)}) scale(${R(s)})`}>
    <rect x={-160} y={-105} width={320} height={210} rx={18} fill={P.white} stroke={P.blue} strokeWidth={6} />
    <path d="M-160 -66 a18 18 0 0 1 18 -18 h70 l24 24 h212 a18 18 0 0 1 18 18 v10 h-320 Z" fill={P.paleBlue} />
    <circle cx={-104} cy={16} r={30} fill={P.paleGreen} stroke={P.green} strokeWidth={5} />
    <path d="M-116 16 L-106 27 L-88 4" fill="none" stroke={P.green} strokeWidth={7} strokeLinecap="round" />
    <rect x={-52} y={-8} width={170} height={18} rx={9} fill={P.muted} />
    <rect x={-52} y={24} width={130} height={18} rx={9} fill={P.paleBlue} />
    <Tag x={-52} y={58} text="TEST COPY" fill={P.blue} size={22} />
  </g>
);

/* ---------- verdict stamp ---------- */
export const StampV2: React.FC<{ y: number; lines: string[]; show: number }> = ({ y, lines, show }) => (
  <g opacity={show} transform={`rotate(-4 540 ${R(y)})`}>
    <rect x={170} y={y - 66} width={740} height={lines.length > 1 ? 150 : 124} rx={18} fill={P.paleRed} stroke={P.red} strokeWidth={7} />
    <Tx x={540} y={y + (lines.length > 1 ? -6 : 20)} size={50} fill={P.red} anchor="middle" lines={lines} />
  </g>
);

/* ---------- selection brackets ---------- */
export const SelectBrackets: React.FC<{ x: number; y: number; w: number; h: number; p: number }> = ({ x, y, w, h, p }) => {
  const L = 54 * p;
  const c = (cx: number, cy: number, dx: number, dy: number) => `M${cx + dx * L} ${cy} L${cx} ${cy} L${cx} ${cy + dy * L}`;
  return (
    <g stroke={P.red} strokeWidth={10} fill="none" strokeLinecap="round" opacity={p}>
      <path d={c(x, y, 1, 1)} />
      <path d={c(x + w, y, -1, 1)} />
      <path d={c(x + w, y + h, -1, -1)} />
      <path d={c(x, y + h, 1, -1)} />
    </g>
  );
};
