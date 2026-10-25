import React, { useEffect } from "react";
import { AbsoluteFill, continueRender, delayRender, staticFile, useCurrentFrame } from "remotion";
import { P } from "./theme";
import { Paper, PremiumDefs } from "./parts";
import { S01, S02, S03, S04, S05, S06, S07, S08, S09, S10, S11, S12, S13, S14, S15 } from "./scenes";

/**
 * ASI05 PREMIUM — master-prompt rebuild.
 * Narrative, frame anchors, locked copy aur security states Director's Bible wale hi.
 * 4500 frames · 60fps · 75s · silent. Har scene absolute frame padhti hai; shot cuts hard hain.
 */
export const Asi05Premium: React.FC = () => {
  const [handle] = React.useState(() => delayRender("asi05-premium-fonts"));
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

  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ backgroundColor: P.paper }}>
      <svg viewBox="0 0 1080 1920" width={1080} height={1920}>
        <PremiumDefs />
        <Paper />
        {f < 300 ? <S01 /> : f < 600 ? <S02 /> : f < 960 ? <S03 /> : f < 1320 ? <S04 /> : f < 1650 ? <S05 />
          : f < 2010 ? <S06 /> : f < 2340 ? <S07 /> : f < 2580 ? <S08 /> : f < 2820 ? <S09 /> : f < 3180 ? <S10 />
            : f < 3450 ? <S11 /> : f < 3750 ? <S12 /> : f < 3990 ? <S13 /> : f < 4290 ? <S14 /> : <S15 />}
      </svg>
    </AbsoluteFill>
  );
};
