import React from "react";
import { ActionMarks, Capsule, KeyShape, RR, Tag, Tx } from "./parts";
import { P, R } from "./theme";

/** Shared world coordinates (DIRECTOR-NOTE §5) */
export const WORLD = {
  workspace: { x: 40, y: 620, w: 1000, h: 800 },
  boundary: { x: 424, y: 672, w: 592, h: 696 },
  pocket: { x: 72, y: 952, w: 336, h: 272 },
  dockPort: { x: 1004, y: 1252 },
  deniedPort: { x: 1004, y: 1032 },
} as const;

const lines = (x: number, y: number, ws: number[], gap = 46, h = 20, fill: string = P.paleBlue) =>
  ws.map((w, i) => <rect key={i} x={x} y={y + i * gap} width={w} height={h} rx={h / 2} fill={fill} />);

/* ---------------- PROJECT panel (S01 lab main; evidence family) ---------------- */
export const ProjectPanel: React.FC<{ showPocket?: boolean; pocketHighlight?: boolean; faded?: number }> = ({
  showPocket = false,
  pocketHighlight = false,
  faded = 0,
}) => (
  <g opacity={1 - faded}>
    <RR x={70} y={180} w={940} h={420} r={30} fill={P.white} sw={6} />
    <rect x={70} y={180} width={940} height={86} rx={30} fill={P.blue} />
    <rect x={70} y={230} width={940} height={36} fill={P.blue} />
    <circle cx={112} cy={223} r={13} fill={P.red} />
    <circle cx={158} cy={223} r={13} fill={P.ochre} />
    <circle cx={204} cy={223} r={13} fill={P.green} />
    <Tx x={248} y={243} size={38} fill={P.white} lines={["PROJECT"]} />
    <Tx x={496} y={243} size={30} fill={P.paleBlue} lines={["ORIGAMI · TESTS"]} />
    {/* file rows */}
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <rect x={104} y={300 + i * 86} width={44} height={56} rx={8} fill={P.white} stroke={P.muted} strokeWidth={4} />
        <rect x={168} y={322 + i * 86} width={330 - i * 60} height={18} rx={9} fill={P.muted} opacity={0.75} />
      </g>
    ))}
    <rect x={606} y={300} width={370} height={238} rx={20} fill={P.paleGreen} stroke={P.green} strokeWidth={4} />
    <Tx x={634} y={380} size={42} fill={P.green} lines={["TESTS ✓"]} />
    <Tx x={634} y={448} size={34} fill={P.muted} lines={["12 passing…"]} />
    {showPocket && (
      <g>
        <rect x={WORLD.pocket.x} y={WORLD.pocket.y} width={WORLD.pocket.w} height={WORLD.pocket.h} rx={24}
          fill={P.white} stroke={pocketHighlight ? P.blue : P.muted} strokeWidth={pocketHighlight ? 7 : 5} strokeDasharray="14 10" />
        <Tx x={WORLD.pocket.x + 28} y={WORLD.pocket.y + 58} size={30} fill={P.muted} lines={["SECRET POCKET"]} />
        <KeyShape x={WORLD.pocket.x + 168} y={WORLD.pocket.y + 168} s={1.15} fill={P.ochre} />
        <Tx x={WORLD.pocket.x + 250} y={WORLD.pocket.y + 238} size={26} fill={P.muted} lines={["K01"]} />
      </g>
    )}
  </g>
);

/* ---------------- WORKSPACE / BOUNDARY ---------------- */
export const Workspace: React.FC<{ label?: string }> = ({ label = "RESTRICTED WORKSPACE" }) => (
  <g>
    <RR x={WORLD.workspace.x} y={WORLD.workspace.y} w={WORLD.workspace.w} h={WORLD.workspace.h} r={36} fill={P.white} stroke={P.blue} sw={7} />
    <rect x={WORLD.boundary.x} y={WORLD.boundary.y} width={WORLD.boundary.w} height={WORLD.boundary.h} rx={30}
      fill="none" stroke={P.green} strokeWidth={8} />
    <Tag x={WORLD.boundary.x + WORLD.boundary.w - ("BOUNDARY RULE".length * 30 * 0.78 + 44) - 24} y={WORLD.boundary.y + 28} text="BOUNDARY RULE" fill={P.green} size={30} />
    {/* workspace label sabse upar — boundary frame use kaat nahi sakta */}
    <Tag x={WORLD.workspace.x + 36} y={WORLD.workspace.y + 34} text={label} fill={P.blue} size={32} />
  </g>
);

export const OutletPipes: React.FC<{ blocked?: boolean; k02Progress?: number }> = ({ blocked = false, k02Progress = 0 }) => (
  <g>
    {/* lower outlet */}
    <path d="M1016 1252 H1040" stroke={P.blue} strokeWidth={16} />
    {/* upper denied port */}
    <g>
      <rect x={980} y={1006} width={48} height={56} rx={10} fill={P.white} stroke={P.green} strokeWidth={6} />
      <path d="M1000 1050 H1028" stroke={P.green} strokeWidth={7} strokeLinecap="round" />
      {blocked && (
        <g stroke={P.red} strokeWidth={10} strokeLinecap="round" fill="none">
          <path d="M988 1002 L1020 1064 M1020 1002 L988 1064" />
        </g>
      )}
    </g>
    {k02Progress > 0 && (
      <g transform={`translate(${R(1020 + k02Progress * 30)} 1252)`}>
        <rect x={-10} y={-10} width={20} height={20} rx={5} fill={P.red} />
      </g>
    )}
  </g>
);

/* ---------------- TASK CARD ---------------- */
export const TaskCard: React.FC<{ x: number; y: number; s?: number; highlight?: boolean }> = ({ x, y, s = 1, highlight = false }) => (
  <g transform={`translate(${R(x)} ${R(y)}) scale(${R(s)})`}>
    <rect x={-230} y={-120} width={460} height={240} rx={26} fill={P.white} stroke={highlight ? P.blue : P.ink} strokeWidth={highlight ? 8 : 5} />
    <circle cx={0} cy={-148} r={26} fill={P.white} stroke={P.ink} strokeWidth={6} />
    <circle cx={0} cy={-148} r={10} fill={P.blue} />
    <circle cx={-168} cy={0} r={40} fill={P.paleGreen} stroke={P.green} strokeWidth={6} />
    <path d="M-186 0 L-174 14 L-150 -14" fill="none" stroke={P.green} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />
    <rect x={-100} y={-52} width={286} height={26} rx={13} fill={P.blue} />
    <rect x={-100} y={-6} width={240} height={26} rx={13} fill={P.paleBlue} />
    <rect x={-100} y={40} width={190} height={26} rx={13} fill={P.muted} opacity={0.7} />
    <Tag x={-100} y={86} text="TASK" fill={P.blue} size={26} />
  </g>
);

/* ---------------- REPORT paper (with flap) ---------------- */
export const ReportPaper: React.FC<{ x: number; y: number; s?: number; flap?: number; markOpacity?: number }> = ({
  x, y, s = 1, flap = 0, markOpacity = 1,
}) => {
  return (
    <g transform={`translate(${R(x)} ${R(y)}) scale(${R(s)})`}>
      <rect x={-400} y={-330} width={800} height={660} rx={26} fill={P.white} stroke={P.ink} strokeWidth={6} />
      {/* body lines */}
      <g opacity={0.9}>
        {lines(-352, -150, [640, 590, 668])}
        {lines(-352, -12, [610, 560, 640])}
        {lines(-352, 126, [600, 640, 380])}
      </g>
      {/* flap (band haalat me bhi title padhna chahiye — isliye header iske UPAR) */}
      <g transform={`translate(0 -330) scale(1 ${R(1 - flap * 0.94)}) translate(0 330)`} opacity={1 - flap * 0.3}>
        <path d="M-400 -330 H400 L292 -230 H-292 Z" fill={P.paleBlue} stroke={P.ink} strokeWidth={5} />
        <circle cx={0} cy={-268} r={30} fill={P.white} stroke={P.ink} strokeWidth={5} />
        <circle cx={0} cy={-268} r={12} fill={P.blue} />
      </g>
      {/* seal + title flap ke upar (envelope par chhapa label) */}
      <g transform={`rotate(-12 308 -252)`}>
        <rect x={218} y={-286} width={180} height={68} rx={10} fill={P.paleRed} stroke={P.red} strokeWidth={5} />
        <Tx x={308} y={-238} size={30} fill={P.red} anchor="middle" lines={["EXTERNAL"]} />
      </g>
      <Tx x={-352} y={-258} size={40} fill={P.ink} lines={["Failure report"]} />
      <Tx x={-352} y={-196} size={30} fill={P.muted} lines={["arrived from outside the workspace"]} />
      <g opacity={markOpacity}>
        <Tag x={-352} y={264} text="OUTSIDE ORIGIN" fill={P.muted} size={26} />
      </g>
    </g>
  );
};

/* ---------------- SCRIPT sheet (Q01) ---------------- */
export const ScriptSheet: React.FC<{
  x: number; y: number; s?: number; rotation?: number;
  marks?: number; progress?: number; grip?: boolean;
}> = ({ x, y, s = 1, rotation = 0, marks = 1, progress = 1, grip = true }) => (
  <g transform={`translate(${R(x)} ${R(y)}) rotate(${R(rotation)}) scale(${R(s)})`}>
    <rect x={-338} y={-416} width={676} height={832} rx={26} fill={P.white} stroke={P.red} strokeWidth={6} />
    {grip && (
      <g>
        <circle cx={0} cy={-416} r={24} fill={P.white} stroke={P.ink} strokeWidth={6} />
        <circle cx={0} cy={-416} r={9} fill={P.blue} />
      </g>
    )}
    <Tx x={-286} y={-318} size={36} fill={P.red} lines={["REPAIR SCRIPT"]} />
    <Capsule x={230} y={-330} s={0.78} />
    <g>
      {lines(-286, -238, [520, 460, 520, 400, 480], 52, 22, P.muted)}
    </g>
    <g opacity={0.55}>{lines(-286, 60, [430, 500, 360], 52, 22, P.paleBlue)}</g>
    <g opacity={marks}>
      <ActionMarks x={-240} y={326} s={0.8} />
    </g>
    {progress < 1 && (
      <rect x={-338} y={-416} width={676} height={832 * (1 - progress)} rx={26} fill={P.paper} opacity={0.0} />
    )}
  </g>
);

/* ---------------- EDITOR DOCK / RUNNER ---------------- */
export const EditorDock: React.FC<{ docked?: boolean }> = ({ docked = false }) => (
  <g>
    <rect x={616} y={1000} width={404} height={300} rx={28} fill={P.white} stroke={P.blue} strokeWidth={7} />
    <Tag x={640} y={1024} text="EDITOR DOCK" fill={P.blue} size={28} />
    <circle cx={1004} cy={1252} r={30} fill={docked ? P.green : P.white} stroke={docked ? P.green : P.blue} strokeWidth={7} />
    {!docked && <circle cx={1004} cy={1252} r={11} fill={P.paleBlue} />}
    {/* socket track on boundary edge */}
    <path d="M1016 1252 H1040" stroke={P.blue} strokeWidth={16} />
  </g>
);

export const RunnerUnit: React.FC<{ running?: boolean; phase?: number }> = ({ running = false, phase = 0 }) => (
  <g>
    <rect x={616} y={1000} width={404} height={300} rx={28} fill={P.white} stroke={P.blue} strokeWidth={7} />
    <Tag x={640} y={1024} text="RUNNER UNIT" fill={P.blue} size={28} />
    {Array.from({ length: 6 }, (_, i) => {
      const nx = 676 + (i % 3) * 96;
      const ny = 1130 + Math.floor(i / 3) * 74;
      const on = running && ((phase * 6 - i + 6) % 6) < 3;
      return (
        <g key={i}>
          <circle cx={nx} cy={ny} r={24} fill={on ? P.blue : P.white} stroke={P.blue} strokeWidth={5} />
          <circle cx={nx} cy={ny} r={9} fill={on ? P.white : P.paleBlue} />
        </g>
      );
    })}
    {/* RUN button */}
    <circle cx={952} cy={1224} r={42} fill={P.white} stroke={P.blue} strokeWidth={6} />
    <path d="M940 1202 L978 1224 L940 1246 Z" fill={P.blue} />
    <circle cx={1004} cy={1252} r={30} fill={running ? P.green : P.white} stroke={running ? P.green : P.blue} strokeWidth={7} />
  </g>
);

/* ---------------- OUTSIDE server ---------------- */
export const OutsideServer: React.FC<{ received?: boolean; blockedGlow?: boolean }> = ({ received = false, blockedGlow = false }) => (
  <g>
    <rect x={716} y={150} width={336} height={400} rx={28} fill={P.white} stroke={blockedGlow ? P.red : P.ink} strokeWidth={7} />
    <Tag x={740} y={176} text="OUTSIDE" fill={P.ink} size={30} />
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <rect x={744} y={262 + i * 82} width={280} height={58} rx={14} fill={P.paper} stroke={P.muted} strokeWidth={4} />
        <circle cx={772} cy={291 + i * 82} r={11} fill={received ? P.red : P.muted} />
        <rect x={798} y={280 + i * 82} width={180} height={20} rx={10} fill={P.muted} opacity={0.7} />
      </g>
    ))}
  </g>
);

/* ---------------- replay tiles (S09) + denied (S12/S13) ---------------- */
export type TileKind = "report" | "capsule" | "key";
export const Tile: React.FC<{ x: number; y: number; kind: TileKind; label: string; s?: number }> = ({ x, y, kind, label, s = 1 }) => (
  <g transform={`translate(${R(x)} ${R(y)}) scale(${R(s)})`}>
    <rect x={-130} y={-150} width={260} height={300} rx={24} fill={P.white} stroke={P.ink} strokeWidth={5} />
    {kind === "report" && (
      <g>
        <rect x={-84} y={-104} width={168} height={150} rx={12} fill={P.white} stroke={P.ink} strokeWidth={5} />
        <rect x={-60} y={-76} width={120} height={16} rx={8} fill={P.blue} />
        <rect x={-60} y={-44} width={100} height={16} rx={8} fill={P.paleBlue} />
        <g transform="rotate(-12 52 -66)"><rect x={-2} y={-92} width={108} height={44} rx={8} fill={P.paleRed} stroke={P.red} strokeWidth={4} /></g>
      </g>
    )}
    {kind === "capsule" && <Capsule x={0} y={-30} s={1.15} />}
    {kind === "key" && <KeyShape x={0} y={-30} s={1.3} />}
    <Tx x={0} y={118} size={30} fill={P.ink} anchor="middle" lines={[label]} />
  </g>
);

export const DeniedTile: React.FC<{ x: number; y: number; kind: TileKind; label: string }> = ({ x, y, kind, label }) => (
  <g>
    <g opacity={0.38}>
      <Tile x={x} y={y} kind={kind} label={label} />
    </g>
    <g stroke={P.red} strokeWidth={14} strokeLinecap="round">
      <path d={`M${x - 74} ${y - 74} L${x + 74} ${y + 74} M${x + 74} ${y - 74} L${x - 74} ${y + 74}`} />
    </g>
  </g>
);
