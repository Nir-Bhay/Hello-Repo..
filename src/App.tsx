import React, { useState } from "react";
import { Player } from "@remotion/player";
import { ShowcaseKinetic } from "./remotion/compositions/ShowcaseKinetic";
import { ShortHook } from "./remotion/compositions/ShortHook";
import { DataStory } from "./remotion/compositions/DataStory";
import { P001ChatGptConnect } from "./remotion/compositions/P001ChatGptConnect";

type Comp = {
  id: string;
  title: string;
  format: string;
  use: string;
  width: number;
  height: number;
  fps: number;
  seconds: number;
  component: React.ComponentType;
  renderCmd: string;
  scenes: string;
};

const COMPS: Comp[] = [
  {
    id: "ShowcaseKinetic",
    title: "Showcase — Kinetic Type",
    format: "16:9 · 1920×1080",
    use: "YouTube / landscape / brand film",
    width: 1920,
    height: 1080,
    fps: 60,
    seconds: 12,
    component: ShowcaseKinetic,
    renderCmd: "npm run render:showcase",
    scenes: "0–3.6s headline reveal → 3.6–7.2s 3 rules → 7.2–10s 60fps count-up → 10–12s final hold",
  },
  {
    id: "ShortHook",
    title: "Short — Hook Machine",
    format: "9:16 · 1080×1920",
    use: "Shorts / Reels / TikTok",
    width: 1080,
    height: 1920,
    fps: 30,
    seconds: 15,
    component: ShortHook,
    renderCmd: "npm run render:short",
    scenes: "0–3s HOOK → 3–7s problem → 7–12s fix → 12–15s payoff + loop CTA · word-by-word captions",
  },
  {
    id: "DataStory",
    title: "Data Story — Chart Film",
    format: "1:1 · 1080×1080",
    use: "Feed post / LinkedIn / X",
    width: 1080,
    height: 1080,
    fps: 30,
    seconds: 10,
    component: DataStory,
    renderCmd: "npm run render:data",
    scenes: "title → bars spring-grow + SVG line draw-on → 128K count-up → final hold",
  },
];

const PIPELINE = [
  ["01", "Story", "Aap sirf story/idea doge — 20s, 30s, 1min, Short ya YouTube."],
  ["02", "Document pehle", "Brief → research → hook → script → storyboard (har frame: camera, transition, sound) — productions/ me save, aapka review."],
  ["03", "Timeline", "Har beat seconds me timeline me lock. Picture, captions, sound sab ek hi timeline padhte hain."],
  ["04", "Build", "Remotion compositions: easing, springs, stagger, SVG draw, virtual camera — koi linear/sasta motion nahi."],
  ["05", "Review loop", "Draft render → frame-by-frame check (contact-sheet style) → fix → phir final."],
  ["06", "Final MP4", "30/60fps H.264 render + sound mix (-14 LUFS). Review ke baad hi final."],
];

export const App: React.FC = () => {
  const [active, setActive] = useState<Comp>(COMPS[0]);
  const Cmp = active.component;
  const vertical = active.height > active.width;

  return (
    <div className="page">
      <header className="top">
        <div className="brand">
          <span className="dot" /> HELLO MOTION STUDIO
        </div>
        <div className="top-links">
          <span>Remotion · React → MP4</span>
          <span className="accent">LIVE PREVIEW</span>
        </div>
      </header>

      <section className="hero">
        <h1>
          Code se <em>real</em> motion graphics.
        </h1>
        <p>
          Ye live preview hai — neeche ka player asal Remotion composition chala raha hai (video file nahi).
          Jo yahan dikhega, frame-by-frame wahi MP4 me render hoga. Composition chuno, play karo, scrub karo.
        </p>
      </section>

      <section className="final-video">
        <div className="final-player">
          <video
            controls
            playsInline
            preload="metadata"
            src="/videos/001-chatgpt-google-9x16-v1.mp4"
          />
        </div>
        <div className="final-info">
          <span className="final-tag">✅ FINAL RENDERED VIDEO · P001</span>
          <h2>ChatGPT × Google Connect</h2>
          <p>
            Ye upar webpage par hi <strong>asli rendered MP4</strong> chal raha hai — yahi file
            Shorts/Reels par upload hogi. Play karke yahi preview kar lo (sound on 🔊),
            pasand aaye to neeche se download kar lo.
          </p>
          <dl>
            <div><dt>Duration</dt><dd>50 seconds</dd></div>
            <div><dt>Format</dt><dd>9:16 · 1080×1920 · 30 FPS · H.264 + AAC</dd></div>
            <div><dt>Sound</dt><dd>Music + SFX included (−14.3 LUFS)</dd></div>
            <div><dt>File size</dt><dd>~22 MB</dd></div>
          </dl>
          <a className="download-btn" href="/videos/001-chatgpt-google-9x16-v1.mp4" download="001-chatgpt-google-9x16-v1.mp4">
            ⬇ Download MP4
          </a>
          <p className="note">Neeche wala player live-code preview hai (scenes badalne ke liye); ye wala final file hai.</p>
        </div>
      </section>

      <nav className="switcher">
        {COMPS.map((c) => (
          <button
            key={c.id}
            className={c.id === active.id ? "card on" : "card"}
            onClick={() => setActive(c)}
          >
            <strong>{c.title}</strong>
            <span>{c.format}</span>
            <span>
              {c.fps} FPS · {c.seconds}s · {c.use}
            </span>
          </button>
        ))}
      </nav>

      <section className={vertical ? "stage vertical" : "stage"}>
        <div className="player-wrap">
          <Player
            component={Cmp}
            durationInFrames={active.seconds * active.fps}
            fps={active.fps}
            compositionWidth={active.width}
            compositionHeight={active.height}
            controls
            loop
            autoPlay
            clickToPlay
            doubleClickToFullscreen
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <aside className="specs">
          <h2>{active.title}</h2>
          <dl>
            <div><dt>Format</dt><dd>{active.format}</dd></div>
            <div><dt>Frame rate</dt><dd>{active.fps} FPS ({active.seconds * active.fps} frames)</dd></div>
            <div><dt>Duration</dt><dd>{active.seconds} seconds</dd></div>
            <div><dt>Best for</dt><dd>{active.use}</dd></div>
            <div><dt>Scenes</dt><dd>{active.scenes}</dd></div>
          </dl>
          <div className="cmd">
            <span>Final MP4 render:</span>
            <code>{active.renderCmd}</code>
          </div>
          <p className="note">
            Preview browser me live render hota hai isliye kabhi halka sa rough lag sakta hai —
            final MP4 har frame ko Chromium se render karke banta hai (buttery 30/60fps, koi jank nahi).
          </p>
        </aside>
      </section>

      <section className="pipeline">
        <h2>Story → Video: hamara production pipeline</h2>
        <div className="steps">
          {PIPELINE.map(([n, h, d]) => (
            <div className="step" key={n}>
              <span>{n}</span>
              <strong>{h}</strong>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="foot">
        <p>
          Workspace ready hai. Ab bas <strong>apni pehli story do</strong> (20s / 30s / 1min — Short ya YouTube),
          main pehle pura document (script + storyboard) bana ke dunga, review ke baad hi video banega.
        </p>
        <code>npm run studio</code> <span>· Remotion Studio (frame-by-frame edit/preview)</span>
        <br />
        <code>npm run render:all</code> <span>· teeno demos ke final MP4 (out/ folder me)</span>
      </footer>
    </div>
  );
};
