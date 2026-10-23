# 10 · STORY → VIDEO — Hamara Production Pipeline

> Ye woh process hai jo har video pe chalega. User sirf **story** dega; baaki sab yahan likhe steps se hoga. **Pehle document, phir video — bina approved document ke render nahi.**

## Overview

```
STORY (user) 
  → 1 BRIEF → 2 RESEARCH → 3 HOOK → 4 SCRIPT → 5 STORYBOARD/SHOTLIST → 6 TIMELINE
  → ★ USER REVIEW (document approve) 
  → 7 BUILD (compositions) → 8 DRAFT RENDER → 9 REVIEW LOOP (frames check)
  → 10 SOUND → 11 FINAL RENDER → ★ USER REVIEW (video) → DONE + archive
```

Har production `productions/<NNN>-<slug>/` folder me rehti hai:
```
productions/001-meri-pehli-story/
  01-brief.md  02-script.md  03-storyboard.md  timeline.json
  notes.md (review comments + kya fix hua)
  ANIMATION TRUTH YAHAN: ../../src/remotion/compositions/<UskaComponent>.tsx
```

## Step-by-step (kya banta hai, kaun decide karta hai)

### 1 · Brief (agent likhta hai, user confirm karta hai) — templates/01
Ek paragraph: kiske liye, ek hi takeaway (ek video = ek baat), tone, platform/format, duration, voice hai ya nahi, brand colors/fonts, deadline-type cheez. Confusion yahi khatm karte hain, render ke baad nahi.

### 2 · Research (agent)
Topic ke facts/numbers verify, 2–3 reference videos ka *pattern* (kya hook, kya pacing) — copy nahi, seekh. Zarurat pade to web research; sources script file ke neeche likhte hain taaki galat dawa video me na jaye.

### 3 · Hook (agent 3 options deta hai, user chun sakta hai)
Pehle 0.5–3 second hi retention decide karte hain (50–60% drop wahi hota hai). Formulas:
- **Bold claim/result pehle:** "Ye shot sirf 12 second me bana."
- **Galti/myth:** "Tumhare captions amateur isliye lagte hain…"
- **Number + tension:** "1,200 wallets check kiye. $300M gayab tha."
- **Sawal jo jawab maange:** "Video CHEAP kyun lagta hai?"
- **Payoff-first:** pehle result dikhao, phir "kaise".
Niyam: on-screen hook 4–7 shabd, mute pe bhi samajhe; pehla frame = thumbnail; koi "hey guys"/logo-intro nahi. (Detail templates/02.)

### 4 · Script (agent) — templates/02
Structure (30s ki misal): `0–3 hook · 3–8 context/problem · 8–22 value (2–3 beats) · 22–27 payoff · 27–30 CTA/loop`.
- Voice hai to ~150 wpm: 30s ≈ 75–85 shabd, 60s ≈ 140–150 shabd.
- Har line ke saamne visual likha hota hai (script 2-column: AWAZ | SCREEN).
- Bolna nahi hai to script = on-screen text ki exact list + har line ka hold time.

### 5 · Storyboard / Shot list (agent) — templates/03
Har shot ke liye: time, duration, shot size (WS/MS/CU), camera (push-in/pan/static), screen pe kya, transition in/out, sound cue, caption text. **Ye woh document hai jise user approve karega** — iske baad surprises nahi aate.

### 6 · Timeline (agent)
Storyboard ke beats seconds me `timeline.json` — scene names `s1, s2…`, har beat named. Yahi file picture+captions+sound teeno ki ghadi hai.

### ★ User review gate #1
Brief + script + storyboard user ko dikhta hai. Change hai to kagaz pe sasta hai; code ke baad mehenga.

### 7 · Build (agent)
Compositions/components docs/04 ke numbers se. Reusable cheezein `components/` me, scene-specific scenes me. Palette/fonts ek jagah.

### 8 · Draft render
`--scale=0.5 --crf=28` fast draft → preview page pe user ke saamne; agent frames (contact-sheet style: har beat ek frame) khud check karta hai templates/05 se.

### 9 · Review loop
Checklist fail = fix = dobara draft. Ek saaf full pass ke bina aage nahi. Agent report karega: kya check kiya, kya fix kiya.

### 10 · Sound
Route A/B/C (docs/08): voice ho to API se, captions word-sync, SFX beats pe, mix −14 LUFS.

### 11 · Final render + ★ User review gate #2
Full res, format ke hisaab se FPS, sahi CRF, `+faststart`, versioned naam (`-v1`, `-v2`). User dekhega; revision hai to timeline/code fix karke `v+1` — purani file kabhi overwrite nahi.

## Roles seedhe shabdon me

| Kaam | User | Agent |
|---|---|---|
| Story/idea, format, duration | ✅ dega | suggest karega |
| API key (voice chahiye to) | ✅ dega | bina key ke bhi poora plan ready rakhega |
| Research, hook, script, storyboard | review/approve | ✅ likhega |
| Code, render, sound, QA | — | ✅ karega |
| Final approval | ✅ | bina approval "done" nahi bolega |

## Time expectations (sach wala)

Document (brief→storyboard) ek hi session me ban jata hai. Build+draft bhi; render time video ki length/FPS/resolution pe hai (30s 1080p ≈ kuch minute local machine pe; 60fps/4K zyada). Isiliye approve pehle, render baad me.
