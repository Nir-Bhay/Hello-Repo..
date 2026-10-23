# 02 · RESEARCH — `whaleyxbt/claude-motion` Teardown

> Source: https://github.com/whaleyxbt/claude-motion (MIT) — user ne share kiya. Maine pura repo padha (README, AGENTS.md, 4 skills, src, sfx engine, sims). Ye file uska "kya seekha, kya adopt kiya, kya nahi" record hai.

## Ek line me repo kya hai

*"Remotion skills teach your agent the API. This teaches it taste, makes it check its own frames, and gives it a sound engine."*
Matlab: API aana kaafi nahi — **numbers ke saath design rules + self-review loop + procedural sound** hi agent ko "video banane wala" banata hai.

## Repo ki 5 badi ideas (sab adopt ki hain)

### 1. Ek timeline, sab usi ko padhte hain
Har beat named timestamp (seconds) me `timeline.json` me. Scenes, sound cue-sheet, review — teeno wahi file padhte hain. Retiming = JSON edit karo, sound apne aap follow karta hai. → Hamare yahan: templates/04 + har production apna timeline rakhega.

### 2. Taste = numbers, adjectives nahi
"Make it smooth" bekaar hai; ye kaam karta hai:
- Entrance easing `bezier(0.16, 1, 0.3, 1)`, exit usse aadha time, exits `easeIn`
- Word stagger **0.09s**, list items **0.2–0.25s**, typing **0.035s/char**
- Reading hold: short phrase **≥1s**, +0.25s/extra word, final hook **≥2s**
- Springs: settle `14/140/0.8`, pop `9–11/200–230/0.7`, elastic sirf hero moment pe
- Display type ≈138px @1080 canvas, tracking −0.02em; mono labels 0.2em uppercase
- **EK accent color**, safe area ≈60px @1080, frame 0 kabhi black nahi
→ Ye sab hamare `src/remotion/lib/timing.ts` + `palette.ts` me code ban chuka hai; wajah docs/04 me.

### 3. Review loop (sabse important)
Agent video dekh nahi sakta → draft render → har beat ka ek frame tiles me (contact sheet) → checklist se check (collision, clipping, hold, safe area, phone pe padh sakte?) → fix → repeat. Ek full saaf pass ke bina "done" nahi. → Hamara version templates/05 + docs/10 me (yahan preview Player bhi hai jo user ko live dikhata hai).

### 4. Procedural sound engine
Python stdlib se hi whoosh/pop/click/riser/chime synth; cue-sheet timeline se times leti hai; auto-master **−14 LUFS, true peak ≤ −1..−2 dBFS**. Koi stock-sound license nahi. → Hamne abhi engine copy nahi kiya (license saaf hai, MIT, par 600+ lines hai); jab pehle video me sound lagega, docs/08 ke plan se ya to ye engine vendor karenge ya API/TTS route lenge. Tab tak compositions silent-by-design hain (music/SFX baad me mux hota hai).

### 5. Web sims (dusri pipeline)
Simulation/3D (agents swarm, engine fly-through) ke liye Remotion ki jagah ek HTML page: `render(t)` time ka pure function, headless Chromium frame-by-frame capture → 60fps MP4. → Hamare liye Phase-2; jab koi simulation wala idea aayega tab `sims/` add karenge. Abhi focus motion graphics pe.

## Kya adopt NAHI kiya (aur kyun)

| Cheez | Kyun nahi |
|---|---|
| Unka example video (EffortVideo) as-is | Wo unka content hai; hamne apni 3 compositions banayi jo hamare formats dikhayen |
| Unke fonts/palette copy | Unki palette (coral accent + serif/sans/mono trio) ek achha pattern hai — pattern liya, apni values rakhi (`#FF5C38`, Inter/Instrument Serif/JetBrains Mono trio concept same rakha kyunki proven hai) |
| Skills ko `.claude/skills/` me daalna | Hamara agent Arena pe chalta hai; rules `AGENTS.md` + `docs/` me hain jo main har session padh sakta hun |

## Unke workflow ko hamne apne pipeline me aise joda

```
idea → storyboard → timeline.json ─┬→ scenes → draft → contact-sheet review ┐
                                   │                                        │ fix, repeat
                                   └→ cue sheet → sound (WAV, −14 LUFS) ────┘
                                              render + mux → final MP4
```
Upar user ki requirement add hai: **storyboard se pehle** brief+research+hook+script ka document aur **user approval** (docs/10). Pehle document, phir video — bina bole render nahi.
