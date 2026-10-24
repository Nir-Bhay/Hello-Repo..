# NOTES + READINESS — 002-asi05-the-repair-that-ran

## Deliverable
`002-asi05-the-repair-that-ran-9x16-v1.mp4` (isi folder me; landing preview ke liye `public/videos/` me bhi copy)

## Export record ✅ verified (ffmpeg)
- Duration **75.00 s** · **1080×1920** · **60 fps** · H.264 High + AAC (silent track, Shorts compatibility ke liye mux ki gayi) · 5.4 MB
- Render: Remotion 4.0.538, Chromium headless, `--concurrency=2`. Font DejaVu Sans Bold bundled (`public/fonts/`, FontFace se load — system font par nirbhar nahi).

## Semantic record ✅ frame-verified (final MP4 se 21 time-points inspect)
Causal chain note §6/§7 ke hisaab se har kadam par padh sakte hain:
task (H01 cropped → A01 gaze) → report bahar se (flap khulta hai, EXTERNAL seal) → red instruction band (abstract lines + capsule + action-marks; **asli payload text kabhi nahi**) → A01 stylus se script author karta hai (report baain taraf frozen rehti hai) → editor dock par seat + run → script secret padhta hai (**K01 pocket ke andar hi rehta hai**, copy **K02** banti hai) → K02 lower outlet cross karke OUTSIDE server par → title → REPLAY (wahi 3 tiles) → restricted workspace, pocket **EMPTY** → code phir chalta hai → read par **SECRET ACCESS DENIED** → route par **CONNECTION BLOCKED** → do-line lesson → RACTOR close.
- Forbidden states check: K01 kabhi bahar nahi gaya ✓ · shield-as-safety kahin nahi ✓ · terminal paragraphs nahi ✓ · on-screen text sirf note ke captions + object labels (verbatim list neeche) ✓
- Verbatim note text on-screen: "The agent writes code." / "Then runs it." / "A secret leaves the workspace." / "Generated code is untrusted." / "Limit what it can reach." / "Same code. Restricted workspace." / "No secrets inside." / "The code still runs." / stamps "SECRET ACCESS DENIED", "CONNECTION BLOCKED" / "RACTOR" / "Cybersecurity, explained." / "Next: ASI04" (+ object labels: TASK, PROJECT, WORKSPACE, BOUNDARY RULE, EDITOR DOCK, RUNNER UNIT, SECRET POCKET, K01, K02, OUTSIDE, REPLAY, REPORT/REPAIR/SECRET, EMPTY, SUGGESTED REPAIR, EXTERNAL, OUTSIDE ORIGIN, FAILURE REPORT)

## Craft record ✅
- Method v2 gate follow: **hardest-shot proof pehle** (S04/S05 stills: frames 1040/1110/1392/1452) → fixes (flap fold, draw-order, authoring cover, press direction, tag widths) → draft (0.5×) → 19-frame review → fixes (S06 sheet/K02 geometry, captions size, tag z-order, pocket layering) → final → 21-frame final QA.
- **Pakda gaya asal bug (frame 2070):** is Chromium build ka SVG parser lambi decimals (16–17 digits) wale combined `translate+scale` transform ko bina error ke DROP kar deta hai — S07 me K02 (secret copy!) (0,0) par chala gaya tha. Bisection (hardcoded → translate-only → scale-only) se pakda. Fix: `theme.ts` me `R()` (2-decimal rounding) har computed transform par. **Ye bug pehle final render me bhi tha** — draft-review loop ki wajah se deliverable se pehle pakda gaya.
- Bachi hui jaankari: S02 me EXTERNAL seal kabhi frame edge ko halka chhoota hai (paper "bahar se chipka" hai — jaanboojh kar), S03 me seal ~6px clip — dono negligible maane gaye.

## Comprehension record ⏳ PENDING
- Creator (user) ka full-speed review abhi baki hai — note §12 ke hisaab se yahi final approval gate hai. Ye delivery "finish-quality" hai, creator review ke baad hi "approved" kahlayegi.
- **Sound: pending by design.** Note §12: sound baad ka alag pass hai (isiliye silent AAC track hai). Sound pass chahiye to bolo — tab loudness target note/channel ke hisaab se lock hoga.

## Code map
- `src/remotion/compositions/asi05/` — `theme.ts` (palette + timing + `R()`), `parts.tsx` (Paper/Tx/Tag/KeyShape/Capsule/ActionMarks/A01 Robot rig/H01 Human), `objects.tsx` (ProjectPanel, Workspace+Boundary, ReportPaper flap, ScriptSheet, EditorDock, RunnerUnit, OutsideServer, Tiles, shared WORLD coords), `scenes.tsx` (S01–S15), `Asi05.tsx` (font load + root). Composition id: `Asi05TheRepairThatRan` (Root.tsx me registered).
- Re-render: `LD_LIBRARY_PATH=/tmp/al2023/lib:/tmp npx remotion render src/remotion/index.ts Asi05TheRepairThatRan out/asi05-final-raw.mp4 --browser-executable=/tmp/chromium --concurrency=2` phir silent AAC mux (ffmpeg `-f lavfi -i anullsrc=...`).
