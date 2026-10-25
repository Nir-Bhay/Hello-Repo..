import React, { useEffect } from "react";
import {
  AbsoluteFill,
  continueRender,
  delayRender,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { easeIn, easeInOut } from "../../lib/timing";
import { EditorX, ExplainerDefs, ReportX, RobotX, ScriptX, StripX } from "./assetsX";
import { Tx } from "./parts";
import { P, R, fp } from "./theme";

/**
 * ASI05 v2 STYLE SAMPLE — sirf S04 (copy + authorship).
 * Local frame 0 = episode frame 960. Kahani/timing/copy unchanged;
 * surface professional-explainer language me hai.
 */
const S04Explainer: React.FC = () => {
  const f = useCurrentFrame() + 960;
  const stripU = fp(f, 984, 1038, easeInOut);
  const stripX = 540 + stripU * (382 - 540);
  const stripY = 468 + stripU * (1035 - 468) - Math.sin(stripU * Math.PI) * 60;
  const authored = f < 1050 ? 0 : fp(f, 1050, 1092);
  const retire = fp(f, 1122, 1140, easeIn);
  const caption = fp(f, 1128, 1140) * (1 - fp(f, 1296, 1314, easeIn));

  return (
    <g>
      {/* chhota source report upar — Q01 ke baad bhi intact */}
      <g opacity={1 - retire} transform={`translate(0 ${R(-retire * 220)})`}>
        <ReportX x={540} y={400} s={0.52} flap={1} />
      </g>

      {/* editor dock */}
      <g transform="translate(540 1180)">
        <EditorX />
      </g>

      {/* Q01 flight */}
      {f >= 984 && f < 1038 && <StripX x={stripX} y={stripY} s={0.95} />}

      {/* C01 page */}
      <ScriptX x={664} y={1222} s={0.74} authored={authored} />

      {/* input record page ke upar saaf padhta hai */}
      {f >= 1038 && (
        <g transform="translate(382 1035) scale(0.6)">
          <StripX x={0} y={0} s={1} />
        </g>
      )}

      {/* authoring stylus */}
      {f >= 1050 && f <= 1092 && (() => {
        const pA = fp(f, 1050, 1071);
        const pB = fp(f, 1071, 1092);
        const onSecond = f >= 1071;
        const px = onSecond ? 480 + pB * 282 : 480 + pA * 319;
        const py = onSecond ? 1221 : 1187;
        return (
          <g transform={`translate(${R(px)} ${R(py)}) rotate(-18)`}>
            <rect x={-8} y={-84} width={16} height={68} rx={7} fill="url(#xInk)" />
            <path d="M-8 -16 L0 7 L8 -16 Z" fill={P.blue} />
            <circle cx={0} cy={-72} r={5} fill="#FFFFFF" opacity={0.45} />
          </g>
        );
      })()}

      {/* A01 cropped right-bottom */}
      <RobotX x={880} y={1460} s={0.75} eye="focused" />

      <g opacity={caption}>
        <Tx x={540} y={330} size={62} fill={P.ink} anchor="middle" lines={["The agent", "writes code."]} />
      </g>
    </g>
  );
};

export const Asi05StyleSample: React.FC = () => {
  const [handle] = React.useState(() => delayRender("asi05-style-sample-fonts"));

  useEffect(() => {
    const bold = new FontFace("DejaVu Sans", `url(${staticFile("fonts/DejaVuSans-Bold.ttf")})`, { weight: "700" });
    const regular = new FontFace("DejaVu Sans", `url(${staticFile("fonts/DejaVuSans.ttf")})`, { weight: "400" });
    Promise.all([bold.load(), regular.load()])
      .then((faces) => {
        faces.forEach((fc) => document.fonts.add(fc));
        continueRender(handle);
      })
      .catch(() => continueRender(handle));
  }, [handle]);

  return (
    <AbsoluteFill style={{ backgroundColor: P.paper }}>
      <svg viewBox="0 0 1080 1920" width={1080} height={1920}>
        <ExplainerDefs />
        <rect width="1080" height="1920" fill={P.paper} />
        <rect width="1080" height="1920" fill="url(#xBgGlow)" />
        <rect width="1080" height="1920" fill="none" stroke={P.ink} strokeOpacity="0.045" strokeWidth="42" />
        <S04Explainer />
      </svg>
    </AbsoluteFill>
  );
};
