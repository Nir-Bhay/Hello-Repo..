import React from "react";
import { Composition } from "remotion";
import { ShowcaseKinetic } from "./compositions/ShowcaseKinetic";
import { ShortHook } from "./compositions/ShortHook";
import { DataStory } from "./compositions/DataStory";

/**
 * Saari compositions yahan register hoti hain.
 * Naya video = productions/<id>-<slug>/ me pehle brief+storyboard+timeline,
 * phir yahan ek <Composition> (docs/10-STORY-TO-VIDEO-pipeline.md).
 * Time hamesha seconds x fps — durationInFrames = seconds * fps.
 */
export const RemotionRoot: React.FC = () => {
  return (
    <>
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
