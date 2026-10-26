import React from "react";
import { Player } from "@remotion/player";
import { ShowcaseKinetic } from "../remotion/compositions/ShowcaseKinetic";
import { ShortHook } from "../remotion/compositions/ShortHook";
import { DataStory } from "../remotion/compositions/DataStory";
import { Asi05TheRepairThatRan } from "../remotion/compositions/asi05/Asi05";

/** DemoStage — Remotion Player + compositions ka LAZY hissa (issue #12).
 * Ye file jaan-boojh kar alag rakhi hai taaki React.lazy ise alag chunk me
 * rakhe: landing ka pehla paint bina Remotion ke bhaari code ke ho, player
 * tabhi load ho jab Lab section tak baat pahunche. */
const COMPONENTS: Record<string, React.ComponentType> = {
  Asi05TheRepairThatRan,
  ShowcaseKinetic,
  ShortHook,
  DataStory,
};

export type DemoSpec = {
  id: string;
  width: number;
  height: number;
  fps: number;
  seconds: number;
};

export default function DemoStage({ demo, autoPlay }: { demo: DemoSpec; autoPlay: boolean }) {
  const Cmp = COMPONENTS[demo.id];
  if (!Cmp) return <p>Unknown demo: {demo.id}</p>;
  return (
    <Player
      component={Cmp}
      durationInFrames={demo.seconds * demo.fps}
      fps={demo.fps}
      compositionWidth={demo.width}
      compositionHeight={demo.height}
      controls
      loop
      autoPlay={autoPlay}
      clickToPlay
      doubleClickToFullscreen
      style={{ width: "100%", height: "100%" }}
    />
  );
}
