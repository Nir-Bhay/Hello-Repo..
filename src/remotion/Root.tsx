import React from "react";
import { Composition } from "remotion";
import { ShowcaseKinetic } from "./compositions/ShowcaseKinetic";
import { ShortHook } from "./compositions/ShortHook";
import { DataStory } from "./compositions/DataStory";
import { P001ChatGptConnect } from "./compositions/P001ChatGptConnect";
import { Asi05TheRepairThatRan } from "./compositions/asi05/Asi05";
import { Asi05V2 } from "./compositions/asi05v2/Asi05V2";
import { Asi05StyleSample } from "./compositions/asi05v2/Asi05StyleSample";
import { Asi05Premium } from "./compositions/asi05v3/Asi05Premium";
import { ASI05_FPS, ASI05_TOTAL_FRAMES } from "./compositions/asi05v3/shots";

/**
 * Saari compositions yahan register hoti hain.
 * Naya video = productions/<id>-<slug>/ me pehle brief+storyboard+timeline,
 * phir yahan ek <Composition> (docs/10-STORY-TO-VIDEO-pipeline.md).
 * Time hamesha seconds x fps — durationInFrames = seconds * fps.
 */
export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* P001 — pehla asal production (documents: productions/001-chatgpt-google-connect/) */}
      <Composition
        id="P001ChatGptConnect"
        component={P001ChatGptConnect}
        durationInFrames={50 * 30}
        fps={30}
        width={1080}
        height={1920}
      />
      {/* ASI05 v1 — REJECTED (user ne reject kiya); sirf compare/legacy ke liye retained */}
      <Composition
        id="Asi05TheRepairThatRan"
        component={Asi05TheRepairThatRan}
        durationInFrames={75 * 60}
        fps={60}
        width={1080}
        height={1920}
      />
      {/* ASI05 v2 — Bible v2 rebuild; Premium se superseded, Gate-3 proof ke liye retained */}
      <Composition
        id="Asi05V2"
        component={Asi05V2}
        durationInFrames={4500}
        fps={60}
        width={1080}
        height={1920}
      />
      {/* ASI05 v2 style sample — sirf S04 explainer look test (episode frames 960–1319) */}
      <Composition
        id="Asi05StyleSample"
        component={Asi05StyleSample}
        durationInFrames={360}
        fps={60}
        width={1080}
        height={1920}
      />
      {/* ASI05 PREMIUM — master-prompt studio rebuild (same 4500-frame direction) */}
      <Composition
        id="Asi05Premium"
        component={Asi05Premium}
        durationInFrames={ASI05_TOTAL_FRAMES}
        fps={ASI05_FPS}
        width={1080}
        height={1920}
      />
      {/* Showcase — YouTube/landscape ke liye, cinematic 60fps */}
      <Composition
        id="ShowcaseKinetic"
        component={ShowcaseKinetic}
        durationInFrames={12 * 60}
        fps={60}
        width={1920}
        height={1080}
      />
      {/* ShortHook — Shorts/Reels/TikTok ke liye, 9:16 hook machine */}
      <Composition
        id="ShortHook"
        component={ShortHook}
        durationInFrames={15 * 30}
        fps={30}
        width={1080}
        height={1920}
      />
      {/* DataStory — feed post (1:1) ke liye data film */}
      <Composition
        id="DataStory"
        component={DataStory}
        durationInFrames={10 * 30}
        fps={30}
        width={1080}
        height={1080}
      />
    </>
  );
};
