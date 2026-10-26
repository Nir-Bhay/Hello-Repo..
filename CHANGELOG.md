# Changelog — Hello Motion Studio

Har release ek entry: **kya badla, kyon, aur saboot kahan hai.** Purani entries kabhi edit nahi hoti; galti nikle to nayi entry me sudhaar likhta hai. (Shuruaat: backlog C78.)

## Unreleased — Next-50 batches (PR #3, #4 merged; aage ka kaam jaari)

- QA sach me chala: headless Chromium me mobile (360/390/430, koi horizontal scroll nahi) + keyboard focus record (`docs/22`).
- Videos par **on-screen-text captions** (WebVTT) aur **9:16 poster variants**; frame-cues generator; contrast fix (buttons 5.01:1); release:check ek-command gate.
- Detail: `docs/32-NEXT-50-BACKLOG.md` ki progress lines.

## 2026-10-26 — Walkthroughs + contribution system (PR #2, merged)

- Har badi animation ke saath **written walkthrough**: ASI05 (shot-by-shot, exact frame anchors), P001, demo compositions. Index: `docs/17-WALKTHROUGHS-index.md`.
- **Transcripts** (P001, ASI05 silent-video text) aur **narration scripts** (ASI05 English + Hinglish, P001, demos) — recording voice ke faisle ke baad.
- Accessibility: video posters, aria-labels, keyboard focus, reduced-motion respect, mobile grids (`docs/22`).
- Code quality: ASI05 shot boundaries ek jagah (`asi05v3/shots.ts`), reusable video section, strict unused-check clean.
- QA tools: `check:links`, `report:assets`, `verify-video`, `extract-frames`, lint gate, 50-task backlog (`docs/18`).
- Saboot: fresh-clone par npm ci → links → tsc → build → preview 200 → Studio 200; ASI05 decode-verify **4500 frames / 75.00s**.

## 2026-10-25 — ASI05 Premium (PR #1, merged)

- ASI05 “The Repair That Ran” ka **premium rebuild** (`Asi05Premium`): Bible v2 ki locked copy/timing par studio finish.
- Final: `productions/002-asi05-the-repair-that-ran/002-asi05-premium-9x16-v1.mp4` (1080×1920, 60fps, silent).
- Khud pakdi gayi galtiyan fix: authoring cover ka ulta reveal, NEW SCRIPT ka jaldi dikhai dena, “test passed” padh sakne wala green tick hataya.
- Saboot: render ke baad 19-anchor review sheet frame-by-frame dekhi gayi.

## Isse pehle

- ASI05 v1 (rejected — sirf compare ke liye retained), P001 ChatGPT × Google Connect final, teen lab compositions (ShowcaseKinetic, ShortHook, DataStory), aur poora docs/research base. Detail: git history aur `docs/23-COMPOSITION-REGISTRY-AND-DEAD-CODE-AUDIT.md`.

**Niyam:** Nayi release = nayi entry sabse upar, tareekh ke saath. “Final” shabd tabhi jab `templates/06-release-checklist.md` ke saare box bhare hon.
