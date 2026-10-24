import React from "react";
import { Capsule, Human, KeyShape, Robot, Tag, Tx } from "./parts";
import {
  EditorDock, OutsideServer, ProjectPanel, ReportPaper, RunnerUnit,
  ScriptSheet, TaskCard, Tile, Workspace, WORLD,
} from "./objects";
import { P, R, prog, easeOut, easeIn, map, rise, shotOpacity, travel, useEpi } from "./theme";

/* shared bits */
const Cap: React.FC<{ lines: string[]; show: number; y?: number; fill?: string; size?: number }> = ({ lines, show, y = 168, fill = P.ink, size = 56 }) => (
  <g opacity={show}>
    <Tx x={540} y={y} size={size} fill={fill} anchor="middle" lines={lines} />
  </g>
);

const Pocket: React.FC<{ empty?: boolean; highlight?: boolean; denied?: boolean }> = ({ empty = false, highlight = false, denied = false }) => (
  <g>
    <rect x={WORLD.pocket.x} y={WORLD.pocket.y} width={WORLD.pocket.w} height={WORLD.pocket.h} rx={24}
      fill={P.white} stroke={highlight ? P.blue : P.muted} strokeWidth={highlight ? 8 : 5} strokeDasharray="14 10" />
    <Tx x={WORLD.pocket.x + 28} y={WORLD.pocket.y + 56} size={28} fill={P.muted} lines={["SECRET POCKET"]} />
    <g opacity={empty ? 0.16 : 1}>
      <KeyShape x={WORLD.pocket.x + 150} y={WORLD.pocket.y + 160} s={1.05} />
    </g>
    {!empty && <Tx x={WORLD.pocket.x + 150} y={WORLD.pocket.y + 240} size={26} fill={P.muted} anchor="middle" lines={["K01"]} />}
    {denied && (
      <g stroke={P.red} strokeWidth={13} strokeLinecap="round">
        <path d={`M${WORLD.pocket.x + 92} ${WORLD.pocket.y + 92} L${WORLD.pocket.x + 244} ${WORLD.pocket.y + 228}`} />
        <path d={`M${WORLD.pocket.x + 244} ${WORLD.pocket.y + 92} L${WORLD.pocket.x + 92} ${WORLD.pocket.y + 228}`} />
      </g>
    )}
    {empty && <Tag x={WORLD.pocket.x + 150} y={WORLD.pocket.y + 150} text="EMPTY" fill={P.muted} size={26} />}
  </g>
);

const Stamp: React.FC<{ y: number; text: string; show: number }> = ({ y, text, show }) => (
  <g opacity={show} transform={`rotate(-5 540 ${R(y)})`}>
    <rect x={170} y={y - 62} width={740} height={124} rx={18} fill={P.paleRed} stroke={P.red} strokeWidth={7} />
    <Tx x={540} y={y + 22} size={52} fill={P.red} anchor="middle" lines={[text]} />
  </g>
);

/* ================= S01 · legitimate job (0–5) ================= */
export const S01: React.FC = () => {
  const { t } = useEpi();
  const panel = rise(t, 0.15, 0.6);
  const taskP = prog(t, 0.7, 0.7, easeOut);
  const taskX = map(taskP, 620, 310);
  const taskY = map(taskP, 1080, 1522) + (taskP >= 1 ? Math.sin(Math.min(1, (t - 1.4) / 0.25) * Math.PI) * -10 * (t < 1.7 ? 1 : 0) : 0);
  const pulse = t > 1.5 && t < 2.1 ? (t - 1.5) / 0.6 : 0;
  const check = rise(t, 3.1, 0.4);
  return (
    <g opacity={shotOpacity(t, 0, 5, { noIn: true })}>
      <g opacity={panel}>
        <ProjectPanel />
      </g>
      <g opacity={rise(t, 0.4, 0.6)}>
        <Human x={-90} y={130} s={0.85} />
      </g>
      {/* robot bottom-right, gaze to task at 1.7 */}
      <g opacity={rise(t, 0.9, 0.5)}>
        <Robot x={628} y={1210} s={0.92} eye={t > 3.2 ? "confident" : "attentive"} headTilt={t > 1.7 ? -4 : 0} armR={14} />
      </g>
      <TaskCard x={taskX} y={taskY} s={0.88} highlight={t > 3.3} />
      {pulse > 0 && pulse < 1 && (
        <circle cx={310} cy={1522 - 130} r={26 + pulse * 46} fill="none" stroke={P.blue} strokeWidth={6} opacity={1 - pulse} />
      )}
      <g opacity={check} transform={`translate(880 470)`}>
        <circle r={44} fill={P.green} />
        <path d="M-20 0 L-6 16 L22 -14" fill="none" stroke={P.white} strokeWidth={10} strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </g>
  );
};

/* ================= S02 · report from outside (5–10) ================= */
export const S02: React.FC = () => {
  const { t } = useEpi();
  const ws = rise(t, 5.0, 0.5);
  const repP = prog(t, 5.0, 0.7, easeOut);
  const repX = map(repP, 1240, 680);
  const flap = prog(t, 8.0, 0.7, easeOut);
  return (
    <g opacity={shotOpacity(t, 5, 10)}>
      <g opacity={ws}>
        <Workspace label="WORKSPACE" />
      </g>
      <ReportPaper x={repX} y={1010} s={0.94} flap={flap} />
      <g opacity={rise(t, 6.2, 0.5)}>
        <Robot x={96} y={1330} s={0.78} eye="attentive" headTilt={3} />
      </g>
    </g>
  );
};

/* ================= S03 · the attacker's repair (10–16) ================= */
export const S03: React.FC = () => {
  const { t } = useEpi();
  const px = travel(t, 12.6, 13.1, 540, 492);
  const ann = rise(t, 12.6, 0.45) * (1 - prog(t, 14.7, 0.3, easeIn));
  const bracket = prog(t, 15.1, 0.5, easeOut) * (1 - prog(t, 15.6, 0.35, easeIn));
  const lineW = (i: number) => prog(t, 10.3 + i * 0.42, 0.5, easeOut);
  return (
    <g opacity={shotOpacity(t, 10, 16)}>
      <ReportPaper x={px} y={930} s={1.02} flap={1} markOpacity={0} />
      {/* red instruction band */}
      <g transform={`translate(${R(px)} 930)`}>
        <rect x={-352} y={-238} width={704} height={330} rx={20} fill={P.paleRed} stroke={P.red} strokeWidth={6} />
        <Capsule x={238} y={-176} s={0.8} />
        <Tx x={-316} y={-168} size={32} fill={P.red} lines={["SUGGESTED REPAIR"]} />
        {[560, 500, 545, 430, 480].map((w, i) => (
          <rect key={i} x={-316} y={-112 + i * 44} width={w * lineW(i)} height={22} rx={11} fill={P.red} opacity={0.82} />
        ))}
        {/* action marks = diagnostic icons */}
        <g opacity={rise(t, 12.2, 0.4)}>
          <g transform="translate(-300 128) scale(0.8)">
            <ActionMarksInline />
          </g>
        </g>
        {/* annotation oval */}
        <g opacity={ann}>
          <rect x={-376} y={-262} width={752} height={378} rx={60} fill="none" stroke={P.red} strokeWidth={7} strokeDasharray="18 12" />
        </g>
        {/* bracket retention */}
        <g opacity={bracket} stroke={P.red} strokeWidth={10} fill="none" strokeLinecap="round">
          <path d="M-392 -238 V-278 H-332 M332 -278 H392 V-238 M392 52 V92 H332 M-332 92 H-392 V52" transform="translate(0 0)" />
        </g>
      </g>
      <g opacity={rise(t, 10.6, 0.5)}>
        <Robot x={36} y={1400} s={0.72} eye="focused" headTilt={4} />
      </g>
    </g>
  );
};

/* inline copy of action-marks (folder → tray → receiver) */
const ActionMarksInline: React.FC = () => (
  <g stroke={P.red} fill="none" strokeWidth={6}>
    <path d="M0 -14 H64 L78 0 H150 V42 H0 Z" fill={P.paleRed} />
    <path d="M96 -2 H136 M126 -13 L138 -2 L126 9" strokeLinecap="round" />
    <path d="M168 4 L248 4 L236 42 L180 42 Z" fill={P.white} />
    <path d="M262 -2 H302 M292 -13 L304 -2 L292 9" strokeLinecap="round" />
    <rect x={318} y={-14} width={58} height={54} rx={8} fill={P.white} />
    <path d="M330 6 H362 M330 20 H362" strokeLinecap="round" />
  </g>
);

/* ================= S04 · the agent writes code (16–22) ================= */
export const S04: React.FC = () => {
  const { t } = useEpi();
  const repOut = prog(t, 18.7, 0.3, easeIn);
  const repX = map(repOut, 316, -60);
  const sheetP = prog(t, 16.4, 0.9, easeOut);
  const gripX = map(sheetP, 770, 602);
  const gripY = map(sheetP, 420, 1206);
  const sheetS = map(sheetP, 0.32, 0.72);
  const reveal = prog(t, 17.5, 0.7, easeOut); // authoring reveal
  const cap = rise(t, 19.0, 0.45) * (1 - prog(t, 21.6, 0.35, easeIn));
  return (
    <g opacity={shotOpacity(t, 16, 22)}>
      <g opacity={0.96 * (1 - repOut * 0.4)}>
        <ReportPaper x={repX} y={856} s={0.6} flap={1} markOpacity={0.9} />
      </g>
      {/* red instruction bracket echo on report */}
      <g opacity={1 - repOut} stroke={P.red} strokeWidth={8} fill="none" strokeLinecap="round">
        <path d={`M${repX - 236} 640 v-34 h40 M${repX + 196} 606 h40 v34 M${repX + 236} 1010 v34 h-40 M${repX - 196} 1044 h-40 v-34`} />
      </g>
      <Robot x={300} y={780} s={0.9} eye="focused" stylus armR={prog(t, 16.0, 0.4) > 0 ? 26 : 12} headTilt={3} />
      {/* authored sheet hanging from grip — sheet robot ke saamne, haath grip par upar se */}
      <g>
        <ScriptSheet x={gripX} y={gripY + 416 * sheetS} s={sheetS} rotation={map(sheetP, -7, 0)} marks={reveal} />
        {/* authoring cover: unwritten hissa paper se dhaka, upar se neeche khulta hai */}
        <rect x={gripX - 330 * sheetS} y={gripY + 170 * sheetS + 662 * sheetS * reveal} width={660 * sheetS}
          height={662 * sheetS * (1 - reveal) + 2} fill={P.paper} opacity={0.96} />
      </g>
      <Cap lines={["The agent writes code."]} show={cap} y={180} />
    </g>
  );
};

/* ================= S05 · it runs (22–27.5) ================= */
export const S05: React.FC = () => {
  const { t } = useEpi();
  const ws = rise(t, 22.0, 0.45);
  const dockP = prog(t, 22.4, 0.7, easeOut);
  const gripX = map(dockP, 602, WORLD.dockPort.x);
  const gripY = map(dockP, 1206, WORLD.dockPort.y);
  const press = prog(t, 23.8, 0.2, easeOut) * (1 - prog(t, 25.2, 0.5, easeIn));
  const running = t >= 24.0;
  const shake = running && t < 24.45 ? Math.sin((t - 24.0) * 55) * 5 * (1 - (t - 24.0) / 0.45) : 0;
  const cap = rise(t, 24.5, 0.45) * (1 - prog(t, 27.2, 0.3, easeIn));
  return (
    <g opacity={shotOpacity(t, 22, 27.5)}>
      <g opacity={ws}>
        <Workspace label="WORKSPACE" />
        <EditorDock docked={t >= 23.4} />
      </g>
      {running && (
        <circle cx={WORLD.dockPort.x} cy={WORLD.dockPort.y} r={34 + ((t * 90) % 46)} fill="none"
          stroke={P.green} strokeWidth={5} opacity={0.5 * (1 - ((t * 90) % 46) / 46)} />
      )}
      <ScriptSheet x={gripX + shake} y={gripY + 416 * 0.72} s={0.72} />
      <Robot x={330} y={1080} s={0.88} eye={running ? "confident" : "focused"} armR={12 - press * 34} headTilt={2} />
      <Cap lines={["Then runs it."]} show={cap} y={300} />
    </g>
  );
};

/* ================= S06 · reach + read the secret (27.5–33.5) ================= */
export const S06: React.FC = () => {
  const { t } = useEpi();
  const toCenter = prog(t, 27.5, 0.7, easeOut);
  const cx = map(toCenter, WORLD.dockPort.x, 700);
  const cy = map(toCenter, WORLD.dockPort.y + 416 * 0.72, 990);
  const cs = map(toCenter, 0.72, 0.85);
  const readP = prog(t, 32.0, 0.5, easeOut);
  const k02 = rise(t, 32.7, 0.5);
  return (
    <g opacity={shotOpacity(t, 27.5, 33.5)}>
      <Workspace label="WORKSPACE" />
      <Pocket highlight={t >= 28.2} />
      <ScriptSheet x={cx} y={cy} s={cs} />
      {/* read path: sheet → pocket key (sheet ke upar, taaki read dikhe) */}
      <path d={`M${cx - 338 * cs} 1080 C 420 1100, 330 1110, ${WORLD.pocket.x + 150} ${WORLD.pocket.y + 160}`}
        fill="none" stroke={P.blue} strokeWidth={8} strokeLinecap="round"
        strokeDasharray="16 12" strokeDashoffset={-t * 60} opacity={0.35 + readP * 0.65} />
      {/* capsule chip pulse at op2 */}
      {t >= 30.0 && (
        <circle cx={cx + 216 * cs} cy={cy - 310 * cs} r={44 + Math.sin(t * 6) * 6} fill="none" stroke={P.red} strokeWidth={5} opacity={0.65} />
      )}
      {/* K02 copy born beside K01 */}
      <g opacity={k02} transform={`translate(${R(WORLD.pocket.x + 276)} ${R(WORLD.pocket.y + 160)}) scale(${R(0.72 + k02 * 0.16)})`}>
        <Capsule x={0} y={0} s={1} hollow />
        <Tx x={0} y={96} size={36} fill={P.red} anchor="middle" lines={["K02"]} />
      </g>
    </g>
  );
};

/* ================= S07 · the secret escapes (33.5–39) ================= */
export const S07: React.FC = () => {
  const { t } = useEpi();
  const backP = prog(t, 33.5, 0.7, easeOut);
  const sx = map(backP, 700, WORLD.dockPort.x);
  const sy = map(backP, 990, WORLD.dockPort.y + 416 * 0.72);
  // K02 journey: pocket → lower outlet (35.0) → outside server (35.5)
  const leg1 = prog(t, 33.9, 1.1, easeOut);
  const leg2 = prog(t, 35.0, 0.5, easeOut);
  const kx = leg2 > 0 ? map(leg2, 1016, 884) : map(leg1, WORLD.pocket.x + 276, 1016);
  const ky = leg2 > 0 ? map(leg2, 1252, 505) : map(leg1, WORLD.pocket.y + 168, 1252);
  const settle = t >= 35.5 ? 1 + Math.sin(Math.min(1, (t - 35.5) / 0.3) * Math.PI) * 0.18 : 1;
  const cap = rise(t, 36.1, 0.5) * (1 - prog(t, 38.8, 0.3, easeIn));
  return (
    <g opacity={shotOpacity(t, 33.5, 39)}>
      <Workspace label="WORKSPACE" />
      <Pocket />
      <EditorDock docked />
      <OutsideServer received={t >= 35.5} />
      <ScriptSheet x={sx} y={sy} s={map(backP, 0.85, 0.72)} />
      {/* journey path */}
      <path d={`M${WORLD.pocket.x + 276} ${WORLD.pocket.y + 168} H1016 V505 H884`}
        fill="none" stroke={P.red} strokeWidth={6} strokeDasharray="14 12" opacity={0.4} />
      <g transform={`translate(${R(kx)} ${R(ky)}) scale(${R((leg2 > 0 ? 0.55 : map(leg1, 0.88, 0.6)) * settle)})`}>
        <Capsule x={0} y={0} hollow />
        <Tx x={0} y={80} size={36} fill={P.red} anchor="middle" lines={["K02"]} />
      </g>
      <g opacity={cap}>
        <Tx x={70} y={268} size={54} fill={P.red} lines={["A secret leaves", "the workspace."]} />
      </g>
    </g>
  );
};

/* ================= S08 · name it (39–43) ================= */
export const S08: React.FC = () => {
  const { t } = useEpi();
  const inn = rise(t, 39.1, 0.55);
  return (
    <g opacity={shotOpacity(t, 39, 43)}>
      <g opacity={inn} transform={`translate(540 ${R(980 - inn * 26)})`}>
        <rect x={-450} y={-380} width={900} height={760} rx={36} fill={P.ink} />
        <rect x={-432} y={-380} width={864} height={14} rx={7} fill={P.red} />
        <Tx x={0} y={-238} size={34} fill={P.paleBlue} anchor="middle" lines={["A S I 0 5"]} />
        <Tx x={0} y={-96} size={96} fill={P.white} anchor="middle" lines={["The repair"]} />
        <Tx x={0} y={26} size={96} fill={P.white} anchor="middle" lines={["that ran."]} />
        <Capsule x={0} y={128} s={0.9} />
        <Tx x={0} y={248} size={34} fill={P.paleBlue} anchor="middle" lines={["OWASP ASI05 · Code Execution"]} />
      </g>
    </g>
  );
};

/* ================= S09 · replay (43–47) ================= */
export const S09: React.FC = () => {
  const { t } = useEpi();
  const ws = rise(t, 43.0, 0.5);
  const tile = (i: number) => rise(t, 43.25 + i * 0.28, 0.5);
  return (
    <g opacity={shotOpacity(t, 43, 47)}>
      <g opacity={ws}>
        <Workspace />
      </g>
      <g opacity={tile(0)} transform={`translate(0 ${R(40 * (1 - tile(0)))})`}>
        <Tile x={252} y={1030} kind="report" label="REPORT" s={0.92} />
      </g>
      <g opacity={tile(1)} transform={`translate(0 ${R(40 * (1 - tile(1)))})`}>
        <Tile x={540} y={1030} kind="capsule" label="REPAIR" s={0.92} />
      </g>
      <g opacity={tile(2)} transform={`translate(0 ${R(40 * (1 - tile(2)))})`}>
        <Tile x={828} y={1030} kind="key" label="SECRET" s={0.92} />
      </g>
      <g opacity={rise(t, 44.2, 0.5)}>
        <Tag x={392} y={470} text="↺ REPLAY" fill={P.ink} size={34} />
      </g>
    </g>
  );
};

/* ================= S10 · boundary first (47–53) ================= */
export const S10: React.FC = () => {
  const { t } = useEpi();
  const copyP = prog(t, 47.0, 0.7, easeOut);
  const cx = map(copyP, -80, 690);
  const note1 = rise(t, 47.8, 0.45) * (1 - prog(t, 50.1, 0.3, easeIn));
  const shutter = prog(t, 50.2, 0.3, easeOut);
  const note2 = rise(t, 50.7, 0.45);
  return (
    <g opacity={shotOpacity(t, 47, 53)}>
      <Workspace />
      <Pocket empty />
      {/* shutter emphasis on boundary */}
      <g opacity={shutter} stroke={P.green} strokeWidth={12} fill="none" strokeLinecap="round">
        <path d={`M${WORLD.boundary.x} ${WORLD.boundary.y + 120} V${WORLD.boundary.y} H${WORLD.boundary.x + 120}`} />
        <path d={`M${WORLD.boundary.x + WORLD.boundary.w - 120} ${WORLD.boundary.y} H${WORLD.boundary.x + WORLD.boundary.w} V${WORLD.boundary.y + 120}`} />
        <path d={`M${WORLD.boundary.x + WORLD.boundary.w} ${WORLD.boundary.y + WORLD.boundary.h - 120} V${WORLD.boundary.y + WORLD.boundary.h} H${WORLD.boundary.x + WORLD.boundary.w - 120}`} />
        <path d={`M${WORLD.boundary.x + 120} ${WORLD.boundary.y + WORLD.boundary.h} H${WORLD.boundary.x} V${WORLD.boundary.y + WORLD.boundary.h - 120}`} />
      </g>
      <ScriptSheet x={cx} y={1075} s={0.9} />
      <Cap lines={["Same code. Restricted workspace."]} show={note1} y={330} size={46} />
      <Cap lines={["No secrets inside."]} show={note2 * (1 - prog(t, 52.8, 0.3, easeIn))} y={330} fill={P.green} size={46} />
    </g>
  );
};

/* ================= S11 · it still runs (53–57.5) ================= */
export const S11: React.FC = () => {
  const { t } = useEpi();
  const dockP = prog(t, 53.2, 0.7, easeOut);
  const gripX = map(dockP, 340, WORLD.dockPort.x);
  const press = prog(t, 54.3, 0.2, easeOut) * (1 - prog(t, 55.6, 0.5, easeIn));
  const running = t >= 54.5;
  const cap = rise(t, 54.8, 0.45) * (1 - prog(t, 57.3, 0.3, easeIn));
  return (
    <g opacity={shotOpacity(t, 53, 57.5)}>
      <Workspace />
      <Pocket empty />
      <RunnerUnit running={running} phase={t} />
      {press > 0 && (
        <circle cx={952} cy={1224} r={44 + press * 14} fill="none" stroke={P.green} strokeWidth={6} opacity={press * 0.8} />
      )}
      <ScriptSheet x={gripX} y={WORLD.dockPort.y + 416 * 0.72} s={0.72} />
      <Robot x={300} y={1120} s={0.84} eye={running ? "confident" : "focused"} armR={12 - press * 34} />
      <Cap lines={["The code still runs."]} show={cap} y={330} />
    </g>
  );
};

/* ================= S12 · read denied (57.5–62.5) ================= */
export const S12: React.FC = () => {
  const { t } = useEpi();
  const toCenter = prog(t, 57.5, 0.7, easeOut);
  const cx = map(toCenter, WORLD.dockPort.x, 690);
  const cy = map(toCenter, WORLD.dockPort.y + 300, 1075);
  const denied = t >= 58.5;
  return (
    <g opacity={shotOpacity(t, 57.5, 62.5)}>
      <Workspace />
      <Pocket empty denied={denied} />
      <ScriptSheet x={cx} y={cy} s={0.9} />
      <path d={`M${cx - 304} 1150 C 420 1160, 330 1120, ${WORLD.pocket.x + 150} ${WORLD.pocket.y + 160}`}
        fill="none" stroke={denied ? P.red : P.blue} strokeWidth={8} strokeLinecap="round"
        strokeDasharray="16 12" strokeDashoffset={-t * 60} opacity={0.7} />
      <Stamp y={330} text="SECRET ACCESS DENIED" show={rise(t, 58.7, 0.4)} />
    </g>
  );
};

/* ================= S13 · route closed (62.5–66.5) ================= */
export const S13: React.FC = () => {
  const { t } = useEpi();
  const reach = prog(t, 62.7, 0.5, easeOut);
  const kx = map(reach, 880, 962);
  const ky = map(reach, 880, WORLD.deniedPort.y);
  const blocked = t >= 63.2;
  return (
    <g opacity={shotOpacity(t, 62.5, 66.5)}>
      <Workspace />
      <Pocket empty />
      <ScriptSheet x={690} y={1075} s={0.9} />
      {/* denied port */}
      <g>
        <rect x={978} y={1004} width={50} height={58} rx={10} fill={P.white} stroke={P.green} strokeWidth={6} />
        {blocked && (
          <g stroke={P.red} strokeWidth={10} strokeLinecap="round">
            <path d="M986 1000 L1022 1066 M1022 1000 L986 1066" />
          </g>
        )}
      </g>
      <path d={`M880 920 C 940 960, 950 990, ${kx - 40} ${ky}`} fill="none" stroke={P.red} strokeWidth={6} strokeDasharray="12 10" opacity={0.55} />
      <g transform={`translate(${R(kx)} ${R(ky)}) scale(0.55)`} opacity={blocked ? 0.45 : 1}>
        <Capsule x={0} y={0} hollow />
      </g>
      <Stamp y={330} text="CONNECTION BLOCKED" show={rise(t, 63.5, 0.4)} />
    </g>
  );
};

/* ================= S14 · the lesson (66.5–71.5) ================= */
export const S14: React.FC = () => {
  const { t } = useEpi();
  const l1 = rise(t, 66.7, 0.6);
  const l2 = rise(t, 69.15, 0.6);
  return (
    <g opacity={shotOpacity(t, 66.5, 71.5)}>
      <g opacity={l1} transform={`translate(0 ${R(26 * (1 - l1))})`}>
        <Tx x={540} y={760} size={66} anchor="middle" lines={["Generated code"]} />
        <Tx x={540} y={846} size={66} anchor="middle" lines={["is untrusted."]} />
      </g>
      <rect x={340} y={920} width={400 * l1} height={8} rx={4} fill={P.red} />
      <g opacity={l2} transform={`translate(0 ${R(26 * (1 - l2))})`}>
        <Tx x={540} y={1064} size={66} fill={P.blue} anchor="middle" lines={["Limit what"]} />
        <Tx x={540} y={1150} size={66} fill={P.blue} anchor="middle" lines={["it can reach."]} />
      </g>
      {/* mini evidence: script inside boundary, port crossed */}
      <g opacity={l2}>
        <rect x={390} y={1300} width={300} height={280} rx={26} fill="none" stroke={P.green} strokeWidth={8} />
        <ScriptSheet x={540} y={1440} s={0.26} grip={false} />
        <g stroke={P.red} strokeWidth={11} strokeLinecap="round">
          <path d="M724 1330 L786 1392 M786 1330 L724 1392" />
        </g>
      </g>
    </g>
  );
};

/* ================= S15 · close (71.5–75) ================= */
export const S15: React.FC = () => {
  const { t } = useEpi();
  const inn = rise(t, 71.6, 0.6);
  return (
    <g opacity={shotOpacity(t, 71.5, 75, { noOut: true })}>
      <rect width={1080} height={1920} fill={P.ink} />
      <g opacity={inn} transform={`translate(540 ${R(930 - inn * 20)})`}>
        <Capsule x={0} y={-190} s={0.85} />
        <Tx x={0} y={-40} size={118} fill={P.white} anchor="middle" ls={10} lines={["RACTOR"]} />
        <Tx x={0} y={62} size={44} fill={P.paleBlue} anchor="middle" lines={["Cybersecurity, explained."]} />
        <rect x={-190} y={110} width={380} height={6} rx={3} fill={P.red} />
        <Tx x={0} y={216} size={40} fill={P.ochre} anchor="middle" lines={["Next: ASI04"]} />
      </g>
      <Robot x={386} y={1330} s={0.85} eye="calm" opacity={inn * 0.95} />
    </g>
  );
};

