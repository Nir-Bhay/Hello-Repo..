import React, { useEffect, useState } from "react";
import { Player } from "@remotion/player";
import { ShowcaseKinetic } from "./remotion/compositions/ShowcaseKinetic";
import { ShortHook } from "./remotion/compositions/ShortHook";
import { DataStory } from "./remotion/compositions/DataStory";
import { Asi05TheRepairThatRan } from "./remotion/compositions/asi05/Asi05";
import { WALKTHROUGHS } from "./data/walkthroughs";

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
    id: "Asi05TheRepairThatRan",
    title: "ASI05 — The Repair That Ran",
    format: "9:16 · 1080×1920",
    use: "Ractor episode · Shorts / Reels",
    width: 1080,
    height: 1920,
    fps: 60,
    seconds: 75,
    component: Asi05TheRepairThatRan,
    renderCmd: "npx remotion render src/remotion/index.ts Asi05TheRepairThatRan",
    scenes: "S01 task → S02 outside report → S03 red repair → S04 agent writes code → S05 it runs → S06 secret read (K01 stays, K02 born) → S07 secret escapes → S08 title → S09 replay → S10 restricted workspace → S11 still runs → S12 access denied → S13 connection blocked → S14 lesson → S15 RACTOR close",
  },
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

type FinalVideoSpec = {
  id: string;
  src: string;
  poster: string;
  ariaLabel: string;
  tag: string;
  title: string;
  description: React.ReactNode;
  specs: ReadonlyArray<readonly [string, string]>;
  download?: { href: string; filename: string };
  captions?: string;
  note: React.ReactNode;
};

/** Ek rendered-video section (C25) — P001, ASI05 premium, proof aur rejected v1 sab isi se bante hain. */
const FinalVideoSection: React.FC<{ video: FinalVideoSpec }> = ({ video }) => (
  <section className="final-video">
    <div className="final-player">
      <video
        controls
        playsInline
        preload="metadata"
        poster={video.poster}
        aria-label={video.ariaLabel}
        src={video.src}
      >
        {video.captions ? (
          <track kind="captions" src={video.captions} srcLang="en" label="On-screen text" default />
        ) : null}
      </video>
    </div>
    <div className="final-info">
      <span className="final-tag">{video.tag}</span>
      <h2>{video.title}</h2>
      <p>{video.description}</p>
      <dl>
        {video.specs.map(([term, value]) => (
          <div key={term}>
            <dt>{term}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      {video.download ? (
        <a className="download-btn" href={video.download.href} download={video.download.filename}>
          ⬇ Download MP4
        </a>
      ) : null}
      <p className="note">{video.note}</p>
    </div>
  </section>
);

const FINAL_VIDEOS: FinalVideoSpec[] = [
  {
    id: "p001-final",
    src: "/videos/001-chatgpt-google-9x16-v1.mp4",
    poster: "/images/posters/p001-9x16.jpg",
    captions: "/captions/p001.vtt",
    ariaLabel: "P001 final rendered video: ChatGPT Google Connect se judta hai",
    tag: "✅ FINAL RENDERED VIDEO · P001",
    title: "ChatGPT × Google Connect",
    description: (
      <>
        Ye upar webpage par hi <strong>asli rendered MP4</strong> chal raha hai — yahi file
        Shorts/Reels par upload hogi. Play karke yahi preview kar lo (sound on 🔊),
        pasand aaye to neeche se download kar lo.
      </>
    ),
    specs: [
      ["Duration", "50 seconds"],
      ["Format", "9:16 · 1080×1920 · 30 FPS · H.264 + AAC"],
      ["Sound", "Music + SFX included (−14.3 LUFS)"],
      ["File size", "~22 MB"],
    ],
    download: { href: "/videos/001-chatgpt-google-9x16-v1.mp4", filename: "001-chatgpt-google-9x16-v1.mp4" },
    note: "Neeche wala player live-code preview hai (scenes badalne ke liye); ye wala final file hai.",
  },
  {
    id: "asi05-premium",
    src: "/videos/asi05-premium.mp4",
    poster: "/images/posters/asi05-9x16.jpg",
    captions: "/captions/asi05-premium.vtt",
    ariaLabel: "ASI05 premium episode: The Repair That Ran, silent 75 second video",
    tag: "✅ PREMIUM REBUILD · ASI05 · FULL EPISODE",
    title: "The Repair That Ran — Premium",
    description: (
      <>
        Wahi kahani, ab studio-finish ke saath: chhupa hua hukm pehle ek <strong>alag copy</strong> banta hai,
        agent <strong>khud script likhta aur chalata hai</strong>, secret ki copy bahar jaati hai — phir ek saaf
        <strong> Replay</strong> me wahi code chalta hai, lekin is baar na secret milta hai, na raasta khula.
      </>
    ),
    specs: [
      ["Duration", "75 seconds · 4500 frames · 15 shots"],
      ["Format", "9:16 · 1080×1920 · 60 FPS · H.264 yuv420p · silent"],
      ["Status", "Premium v1 rendered and frame-checked"],
    ],
    download: { href: "/videos/asi05-premium.mp4", filename: "002-asi05-premium-9x16-v1.mp4" },
    note: "Neeche purane proof/v1 sirf compare ke liye rakhe hain.",
  },
  {
    id: "asi05-v2-proof",
    src: "/videos/asi05v2-proof-s03-s05.mp4",
    poster: "/images/posters/asi05-9x16.jpg",
    ariaLabel: "ASI05 v2 motion proof, sirf shots S03 se S05",
    tag: "🎬 MOTION PROOF · ASI05 v2 (Director's Bible) · Gate 3",
    title: "The Repair That Ran — v2 motion proof (S03–S05)",
    description: (
      <>
        Ye pura episode <strong>nahi</strong> hai — sirf sabse mushkil harkat ka saboot hai:
        bahari report me chhupa hua hukm, uski <strong>alag copy strip</strong> editor tak jaati hai,
        agent <strong>khud naya script likhta hai</strong>, phir use dock karke <strong>RUN dabata hai</strong>.
        RUNNING keval dabane ke <em>baad</em> aata hai. Isi quality par pura episode banega.
      </>
    ),
    specs: [
      ["Duration", "17.5 seconds · frames 600–1649 (shots S03, S04, S05)"],
      ["Format", "9:16 · 1080×1920 · 60 FPS · silent proof"],
      ["Status", "Gate 3 proof — Premium ne ise supersede kar diya; saboot ke liye retained"],
    ],
    note: "Neeche wala video purana v1 hai (reject ho chuka) — sirf compare ke liye rakha hai.",
  },
  {
    id: "asi05-v1-rejected",
    src: "/videos/002-asi05-the-repair-that-ran-9x16-v1.mp4",
    poster: "/images/posters/asi05-9x16.jpg",
    ariaLabel: "ASI05 purana v1 video, reject ho chuka, sirf compare ke liye",
    tag: "🗂 ASI05 v1 · REJECTED · SIRF COMPARE KE LIYE",
    title: "The Repair That Ran — v1 (rejected)",
    description: (
      <>
        Ek error report ke andar chhupa repair, agent se code likhva kar <strong>project secret
        chura kar bahar bhej deta hai</strong> — phir wahi code restricted workspace me dobara
        chalta hai, aur is baar secret bhi nahi milta, raasta bhi band milta hai.
        Generated code is untrusted — limit what it can reach.
      </>
    ),
    specs: [
      ["Duration", "75 seconds · 15 shots (DIRECTOR-NOTE ke exact timings)"],
      ["Format", "9:16 · 1080×1920 · 60 FPS · H.264"],
      ["Sound", "Silent by design (director note: sound alag pass hai)"],
      ["File size", "~5.4 MB"],
    ],
    download: { href: "/videos/002-asi05-the-repair-that-ran-9x16-v1.mp4", filename: "002-asi05-the-repair-that-ran-9x16-v1.mp4" },
    note: "Ye v1 REJECT ho chuka hai — final sirf upar wala Premium hai. Direction: productions/002-asi05-the-repair-that-ran/00-DIRECTOR-NOTE.md · neeche live-code player me yehi episode frame-by-frame scrub bhi kar sakte ho.",
  },
];

export const App: React.FC = () => {
  const [active, setActive] = useState<Comp>(COMPS[0]);
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
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

      <section className="walkthroughs" id="walkthroughs">
        <h2>Walkthroughs — animation ke saath, samajh bhi</h2>
        <p className="walkthrough-intro">
          Sirf video dekhna kaafi nahi. Har badi animation ke saath ek written walkthrough hai:
          shot-by-shot time/frame, kahan rukna hai, kya notice karna hai, aur kaunsi galti kabhi
          screen par nahi aani chahiye. Pehle normal speed dekho, phir guide ke pause points par
          ruk kar verify karo.
        </p>
        <div className="walkthrough-grid">
          {WALKTHROUGHS.map((w) => (
            <article className="walkthrough-card" key={w.id}>
              <img src={w.cover} alt={`${w.title} — cover art`} loading="lazy" />
              <span className="final-tag">{w.tag}</span>
              <h3>{w.title}</h3>
              <p className="walkthrough-meta">{w.meta}</p>
              <p>{w.points}</p>
              <a className="walkthrough-btn" href={w.watch}>
                {w.watchLabel}
              </a>
              <p className="note">
                Guide repo me: <code>{w.doc}</code>
              </p>
            </article>
          ))}
        </div>
        <p className="note">
          Saari guides ek jagah: <code>docs/17-WALKTHROUGHS-index.md</code> · Aage ka genuine
          kaam: <code>docs/18-CONTRIBUTION-BACKLOG-50.md</code> (50 real tasks — fake commits nahi).
        </p>
        <p className="note">
          Motion se pareshani hoti hai? Tumhari OS ki reduced-motion setting par neeche wala live
          player khud nahi chalega — play tum dabaaoge. Aur har kahani bina chalti tasveer ke bhi
          padhi ja sakti hai: ASI05 aur P001 ke transcripts productions folders me hain (walkthrough
          index se milege). Har video pehle ek poster ke saath khulta hai, khaali kaala frame nahi.
        </p>
        <p className="note">
          Ye videos *kaise* bane, uski poori kahaani case studies me hai:{" "}
          <a href="https://github.com/Nir-Bhay/motion-studio/blob/main/docs/31-CASE-STUDY-ASI05.md" target="_blank" rel="noreferrer">ASI05 case study</a>
          {" · "}
          <a href="https://github.com/Nir-Bhay/motion-studio/blob/main/docs/39-CASE-STUDY-P001.md" target="_blank" rel="noreferrer">P001 case study</a>
        </p>
      </section>

      {FINAL_VIDEOS.map((video) => (
        <FinalVideoSection key={video.id} video={video} />
      ))}

      <nav className="switcher" id="live-demos">
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
            autoPlay={!reducedMotion}
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
