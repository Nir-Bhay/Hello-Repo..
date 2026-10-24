import React from "react";
import { Composition } from "remotion";
import { ShowcaseKinetic } from "./compositions/ShowcaseKinetic";
import { ShortHook } from "./compositions/ShortHook";
import { DataStory } from "./compositions/DataStory";
import { P001ChatGptConnect } from "./compositions/P001ChatGptConnect";
import { Asi05TheRepairThatRan } from "./compositions/asi05/Asi05";

/**
 * Saari compositions yahan register hoti hain.
 * Naya video = productions/<id>-<slug>/ me pehle brief+storyboard+timeline,
 * phir yahan ek <Composition> (docs/10-STORY-TO-VIDEO-pipeline.md).
 * Time hamesha seconds x fps — durationInFrames = seconds * fps.
 */
export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* P001 — pehla asal production (docs: productions/001-chatgpt-google-connect/) */}
      <Composition
        id="P001ChatGptConnect"
        component={P001ChatGptConnect}
        durationInFrames={50 * 30}
        fps={30}
        width={1080}
        height={1920}
      />
      {/* ASI05 — Ractor episode, DIRECTOR-NOTE driven (productions/002-asi05-the-repair-that-ran/) */}
      <Composition
        id="Asi05TheRepairThatRan"
        component={Asi05TheRepairThatRan}
        durationInFrames={75 * 60}
        fps={60}
        width={1080}
        height={1920}
      />
      {/* YouTube / landscape — cinematic 60fps */}
      <Composition
        id="ShowcaseKinetic"
        component={ShowcaseKinetic}
        durationInFrames={12 * 60}
        fps={60}
        width={1920}
        height={1080}
      />
      {/* Shorts / Reels / TikTok — 9:16 hook machine */}
      <Composition
        id="ShortHook"
        component={ShortHook}
        durationInFrames={15 * 30}
        fps={30}
        width={1080}
        height={1920}
      />
      {/* Feed post 1:1 — data story */}
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
