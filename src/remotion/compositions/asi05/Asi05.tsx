import React, { useEffect } from "react";
import { AbsoluteFill, delayRender, continueRender, staticFile } from "remotion";
import { H, P, W } from "./theme";
import { Paper } from "./parts";
import { S01, S02, S03, S04, S05, S06, S07, S08, S09, S10, S11, S12, S13, S14, S15 } from "./scenes";

/**
 * ASI05 "The repair that ran" — 75 s · 1080x1920 · 60 fps · silent.
 * Direction: productions/002-asi05-the-repair-that-ran/00-DIRECTOR-NOTE.md
 * Ek hi full-screen SVG world; har shot apni window me opacity se aata/jaata hai.
 */
export const Asi05TheRepairThatRan: React.FC = () => {
  const [handle] = React.useState(() => delayRender("asi05-fonts"));

  useEffect(() => {
    const bold = new FontFace("DejaVu Sans", `url(${staticFile("fonts/DejaVuSans-Bold.ttf")})`, { weight: "700" });
    const regular = new FontFace("DejaVu Sans", `url(${staticFile("fonts/DejaVuSans.ttf")})`, { weight: "400" });
    Promise.all([bold.load(), regular.load()])
      .then((faces) => {
        faces.forEach((f) => document.fonts.add(f));
        continueRender(handle);
      })
      .catch(() => continueRender(handle));
  }, [handle]);

  return (
    <AbsoluteFill style={{ backgroundColor: P.paper }}>
      <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H}>
        <Paper />
        <S01 />
        <S02 />
        <S03 />
        <S04 />
        <S05 />
        <S06 />
        <S07 />
        <S08 />
        <S09 />
        <S10 />
        <S11 />
        <S12 />
        <S13 />
        <S14 />
        <S15 />
      </svg>
    </AbsoluteFill>
  );
};
