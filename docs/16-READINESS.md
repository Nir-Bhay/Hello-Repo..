# 16 · READINESS — Agent Taiyaar Hai

> Is file ka matlab: user ke instructions aate hi kaam bina warmup ke shuru hoga. Kya ready hai, kya lagega, kya nahi hai — sab saaf likha hai.

## Ready hai (verify kiya hua)

- **Engine:** Remotion 4.0.538 (official repo clone + npm packages, dono same version) · React 19 · TypeScript typecheck saaf
- **Preview ke do darwaze:** Landing page (:5173, final MP4 player + Download) · Remotion Studio (:3001, frame-by-frame)
- **Render:** Sandbox me Chromium trick proven (NSS libs + sparticuz chromium); P001 ka final MP4 isi se bana. User ki machine pe plain render chalega.
- **Motion library:** Easing/springs/palette/Stage/CameraRig/Grain/MaskReveal/CountUp/DrawLine/Captions — sab `src/remotion/` me reusable.
- **Audio:** Procedural music+SFX generator (numpy), loudness workflow (loudnorm measure→gain→limiter→mp3), −14 LUFS target proven.
- **Knowledge:** `docs/00–16`, `skill-pack/` (16 files + review), `templates/01–05` (upgraded), `references/` me 4 repos (remotion, claude-motion, remotion-skills, mg-styles-15).
- **Method:** Studio Method v2 (`docs/13`) — treatment → hardest-shot proof → build → 4-record review → improvement loop.

## Instruction milte hi exact flow

1. Main pehle ye confirm karunga: **kiski story/channel, format (9:16/16:9/1:1), duration, voice hai ya nahi, style pasand** — jo user de chuka hoga use dobara nahi puchunga.
2. `productions/<NNN>-<slug>/` me **document pehle**: brief → research → treatment (causal chain + viewer-questions) → hook options → script → storyboard → timeline.
3. ★ User ka document-review (jab tak user "seedha banao" na bole).
4. Hardest-shot proof → poora build → draft → review loop (frames + adversarial round) → sound → final MP4 (versioned).
5. Preview page par video + Download button; notes.md me 4-record readiness aur agle liye ek craft experiment.

## User se kab kya lagega (sirf tabhi maangunga)

- **Story/idea** — bas yahi asal input hai.
- **Voice chahiye to API key** (ElevenLabs/OpenAI) — ya apni recording. Bina iske text+music route hamesha ready hai.
- **Brand assets** (logo ke asli files, brand colors/fonts) — jab video kisi brand ke liye ho.
- Ractor episode hai to: Ractor repo/machinery ki uplabdhta; warna pack sirf direction dega.

## Known gaps (kaam rokne wale nahi)

- `ractor-motion-direction/SKILL.md` file pack me nahi aayi — aayegi to jud jayegi; bina uske bhi uski references uplabdh hain.
- Sandbox render ko Chromium trick chahiye (2 min ka setup, proven).
- 60fps/4K renders is 2-core sandbox me dheere honge — draft aadhe scale par, final patiently.

## Quality ka wada (har delivery par)

Frame 0 thumbnail-ready · koi linear motion nahi · padhne ka pura hold · ek accent, ek focal point · SFX beats par · loudness encode ke baad measured · frames khud dekh ke hi "ready" bolunga — aur kya pending hai (craft/comprehension) wo chhupaunga nahi.
