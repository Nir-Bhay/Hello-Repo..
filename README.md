# Hello Motion Studio 🎬

**Code se production-ready motion graphics videos** — story do, document banega, review hoga, phir Remotion (React) se 30/60 FPS ka asli MP4 render hoga. No timeline editors, no template-look.

> *Motion is the message.* — is repo ka pehla demo khud ye kehta hai (neeche dekho).

## ▶️ Live preview dekho

```bash
npm install
npm run preview     # → http://localhost:5173
```

Landing page pe teeno demo **asli Remotion compositions live** chalte hain (video files nahi) — jo dikhega, wahi frame-by-frame MP4 baneगा:

| Demo | Format | FPS | Kya dikhata hai |
|---|---|---|---|
| ShowcaseKinetic | 1920×1080 (16:9) | 60 | Kinetic typography, masked reveals, SVG draw-on, count-up, hero hold |
| ShortHook | 1080×1920 (9:16) | 30 | 0–3s hook machine, word-by-word captions, problem→fix continuity, loop CTA |
| DataStory | 1080×1080 (1:1) | 30 | Spring bars, trend-line draw, 128K count-up — data jo jeeta hai |

Remotion Studio (frame-by-frame editing/preview): `npm run studio`
Final renders: `npm run render:showcase` · `render:short` · `render:data` → `out/`

## 📖 Walkthroughs — animation ke saath samajh bhi

Har badi animation ke saath ek written walkthrough hai — shot-by-shot time/frame, pause points, kya notice karna hai, aur kaunsi galti kabhi screen par nahi aani chahiye. Index: **[docs/17-WALKTHROUGHS-index.md](docs/17-WALKTHROUGHS-index.md)**

- ASI05 (Premium): [productions/002-asi05-the-repair-that-ran/05-walkthrough.md](productions/002-asi05-the-repair-that-ran/05-walkthrough.md)
- P001 ChatGPT × Google: [productions/001-chatgpt-google-connect/04-walkthrough.md](productions/001-chatgpt-google-connect/04-walkthrough.md)
- Demo compositions: [docs/19-DEMO-COMPOSITIONS-WALKTHROUGH.md](docs/19-DEMO-COMPOSITIONS-WALKTHROUGH.md)

Landing page par bhi walkthrough cards hain (cover image + video/live links ke saath).

Repo me aage ka saara genuine kaam ek prioritized list se uthega: **[docs/18-CONTRIBUTION-BACKLOG-50.md](docs/18-CONTRIBUTION-BACKLOG-50.md)** — 50 real tasks, har ek ke acceptance criteria ke saath. Number badhane ke liye fake commits nahi; har commit ek saaf, useful, reviewable change.

Contribution shuru karna hai? Pehle **[CONTRIBUTING.md](CONTRIBUTING.md)** padho. ASI ke shabd samajhne ke liye [docs/20-GLOSSARY-cybersecurity.md](docs/20-GLOSSARY-cybersecurity.md), aur har video ke exact on-screen shabd ke liye [docs/21-ON-SCREEN-COPY-TRANSCRIPTS.md](docs/21-ON-SCREEN-COPY-TRANSCRIPTS.md).

## 🛠 Kaam kaise hota hai (Story → Video)

```
Story (tum) → Brief → Research → Hook → Script → Storyboard → Timeline
            → ★ TUMHARA REVIEW → Build → Draft → Frame-review loop
            → Sound → Final MP4 → ★ TUMHARA REVIEW
```

Poora process: **[docs/10-STORY-TO-VIDEO-pipeline.md](docs/10-STORY-TO-VIDEO-pipeline.md)** · Shuruaat: **[docs/00-START-HERE.md](docs/00-START-HERE.md)**

## 📚 Workspace map

- `docs/` — research & rules: motion-graphics landscape · claude-motion teardown · tech stack · **motion design bible (numbers)** · formats/FPS/export · SVG · camera/transitions · audio/voice · "cheap vs real" quality gate · pipeline · sources
- `templates/` — brief, script+hook, storyboard/shot-list, timeline.json, review checklist
- `productions/` — har asal video ka folder (brief se versions tak ka paper-trail)
- `src/remotion/` — engine: `lib/` (easing/springs/palette) · `components/` (Stage, CameraRig, Grain, MaskReveal, CountUp, DrawLine, Captions) · `compositions/`
- `AGENTS.md` — agent ke liye operating rules (har video se pehle padhna zoruri)

## Quality ka wada (docs/09)

Kabhi linear motion nahi · har scene me halka camera · grain/texture hamesha · ek accent, ek focal point, ek hero moment · padhne ka pura time · SFX beat pe · −14 LUFS · frame 0 kabhi black nahi.

---
Stack: React 19 · Remotion 4 · Vite · TypeScript · Fontsource (offline fonts) · (Phase-2) Python SFX / TTS APIs + ffmpeg
Reference research: [whaleyxbt/claude-motion](https://github.com/whaleyxbt/claude-motion) (teardown: docs/02)
