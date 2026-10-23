# 03 · TECH STACK & TOOLS — Code se Video kaise banta hai

## Core stack (repo me installed)

| Layer | Tool | Kaam |
|---|---|---|
| Language | TypeScript + React 19 | Har scene ek component; props se data-driven |
| Video engine | **Remotion 4.x** | React ko frame-by-frame Chromium me render karke MP4 banata hai |
| Preview (user) | `@remotion/player` + Vite | Landing page pe live video — render se pehle hi dikhta hai |
| Preview (agent/edit) | Remotion Studio (`npm run studio`) | Timeline scrub, frame step, composition switch |
| Transitions | `@remotion/transitions` | fade/slide/wipe/flip/clockWipe + spring/linear timing |
| Shapes | `@remotion/shapes`, SVG paths | Vector shapes, draw-on lines (docs/06) |
| Fonts | Fontsource (Inter Variable, Instrument Serif, JetBrains Mono) | Offline bundled — render machine pe net nahi chahiye |
| Sound (Phase-2) | Python `sfx` style synth **ya** API audio + ffmpeg mux | docs/08 dekho |
| Final encode | Remotion → H.264 MP4 (CRF 18 default quality ke aas-paas), `ffmpeg` se mux/check | docs/05 |

## Remotion ka mental model (5 concepts, bas)

1. **`useCurrentFrame()`** — abhi kaunsi frame chal rahi hai. Saari animation is number ka function hai. *CSS animations/keyframes bilkul mana hain* — render me kaam nahi karengi.
2. **`useVideoConfig()`** — fps, width, height. Time hamesha `seconds × fps` me likho.
3. **`interpolate()` + `Easing.bezier()`** — frame ko kisi bhi value (position, opacity, scale) me badlo, hamesha clamp ke saath.
4. **`spring()`** — physics simulation (damping/stiffness/mass). Physical cheezon ke liye; type/camera ke liye bezier.
5. **`<Sequence>` / `<TransitionSeries>`** — scenes ko time pe rakho aur beech me transitions. Composition `<Root.tsx>` me register hoti hai: id, durationInFrames, fps, width, height.

Deterministic rule: `Math.random()`/`Date` render me har baar alag value dega → flicker. Remotion ka seeded `random("seed")` use karo (hamare Grain me yahi hai).

## Aur tools kab use honge

| Zaroorat | Tool | Note |
|---|---|---|
| Voiceover (AI voice) | ElevenLabs / OpenAI TTS API | User API key dega; script se audio + word-timestamps (docs/08) |
| Asli awaz ki transcription | Whisper (`@remotion/install-whisper-cpp` / faster-whisper) | Word-level captions ke liye |
| Animated captions | `@remotion/captions` `createTikTokStyleCaptions()` | Tok-by-tok highlight |
| B-roll video clips | `<OffthreadVideo>` | Har still pe Ken Burns (slow zoom) — static image ko bhi zinda rakho |
| 3D / simulation | Three.js page → frame capture (`sims/` style) | Phase-2, docs/02 |
| Cinematic AI B-roll | Runway/Kling type tools | Sirf opening/B-roll; info hamesha motion graphics se |
| Thumbnail/poster frame | `remotion still` | Video ka hero frame hi thumbnail banta hai |
| Loudness check | ffmpeg `loudnorm` / ebur128 | Target −14 LUFS (docs/08) |

## Folder map

```
src/remotion/
  index.ts                 registerRoot + fonts
  Root.tsx                 saari <Composition> registry
  lib/timing.ts            easing, springs, prog(), STAGGER numbers
  lib/palette.ts           C (colors) + F (fonts) + safe area
  components/Stage.tsx     bg grid + glow + Grain + CameraRig (virtual camera)
  components/Reveal.tsx    MaskReveal, CountUp, DrawLine, PopBadge, CaptionLine
  compositions/            ek file = ek video format
public/                    images/audio yahan, code me staticFile() se
out/                       renders (gitignore) — draft.mp4, final MP4s
```

## Remotion license note (important, business ke liye)

Remotion code open hai par license custom hai: **individuals aur chhoti teams (≤3 employees wali companies) ke liye free**; badi company ko company license chahiye hota hai. Personal/creator use ke liye tension nahi; agar ye kabhi bade brand ka paid kaam bane to license check kar lena — https://www.remotion.dev/license
