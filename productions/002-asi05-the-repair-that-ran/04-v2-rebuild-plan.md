# V2 REBUILD PLAN — Director's Bible v2.0 par (03-directors-bible-v2.md + frame-cues.csv)

v1 (purana MP4) purane note-draft par bana tha; user ne reject kiya. v2 Bible hi canon hai.
Neeche LOCKED copy ledger hai — on-screen text sirf yahi hoga (slash = line break, render nahi hota).

## Locked copy ledger (Bible Part D se)
| Shot | Exact copy |
|---|---|
| S01 | Fix the / failing test. |
| S02 | EXTERNAL REPORT · Test failed. · OUTSIDE INPUT (flap) |
| S03 | Run this / repair first. · Added by / an attacker. (viewer annotation, report ke bahar) |
| S04 | repair.py · NEW SCRIPT · From external report. · The agent / writes code. |
| S05 | RUN · RUNNING (sirf press ke baad, f1440) · Then runs it. |
| S06 | Read project / secret (f1692) · Send outside (f1800) |
| S07 | A secret leaves / the workspace. (sirf receipt ke baad, f2166) |
| S08 | ASI05 · Unexpected Code / Execution |
| S09 | Replay · Same code. / Restricted / workspace. |
| S10 | No secrets inside. (f2868) · Outside / connections blocked. (f3042, shutter f3030 band hone ke baad) |
| S11 | The code / still runs. |
| S12 | Secret access / denied. |
| S13 | CONNECTION / BLOCKED |
| S14 | Generated code / is untrusted. → (poora gayab) → Limit what / it can reach. |
| S15 | RACTOR · Cybersecurity, explained. · Next: ASI04 (paper background) |

## v1 se bade badlav (kyon kharab laga)
1. S04 me asal mechanism gayab tha — **Q01 copy strip** report se editor input tak travel karegi (f984 spawn → f1038 contact), phir stylus se C01 author hoga. v1 me sheet robot ke haath se "appear" ho jati thi.
2. S05 me tactile **RUN button + RUNNING state** sirf press (f1440) ke baad; v1 me sirf pulse ring tha.
3. S06 me operations text sequential: **Read project secret** pehle, **Send outside** baad me; read line port tak jaakar K02 born.
4. S08 ab title card nahi — running script ke upar **ASI05 / Unexpected Code Execution** category.
5. S09 **paper wipe + Replay text**, S10 me clean copy intake + **shutter band** + do sequential annotations (v1 me ulta/galath text tha).
6. S12/S13: request line denied face par rukti hai; S13 me **P01 khali attempt** (key glyph bilkul nahi).
7. S15 **paper background** lockup (v1 ink bg galat tha Bible ke hisaab se).
8. Har shot ka focal owner ek; captions sirf apne settle frame ke baad; camera holds exact.

## Gates (Bible Part F)
Gate 1–2: storyboard stills (24 poses, frame anchors se) → **user review** · Gate 3: S03→S05 hardest-motion proof MP4 · Gate 4: full rough 4500f · Gate 5: final. Is baar full render se pehle storyboard+proof dikha kar rukunga.

## Conflict note
Purani DIRECTOR-NOTE (v1) ke S08 ("The repair that ran." title card) vs Bible v2 S08 (category) — user ne Bible ko "ab isko use kar" kaha hai, isliye Bible jeetega; S15 "Next: ASI04" dono me same hai.

## Gate 1–2 status (update)
- v2 code complete: `src/remotion/compositions/asi05v2/` (theme/parts/assets/scenes/Asi05V2), Root me `Asi05V2` registered, typecheck CLEAN.
- Storyboard board: `out/asi05v2-board/` — 25 pose stills (Bible Part D anchors) + `sheets/sheet1.png`, `sheet2.png`.
- Self-review me pakde aur fix kiye gaye defects: action-marks boxes se bahar (3 jagah), ek invented line ("diagnostic evidence…") jo ledger me nahi thi — hatayi; shutter ULTA chal raha tha (band par khul jata) — fix; shutter plate khuli haalat me boundary se bahar latakti thi — andar slide; S05 robot RUNNING pill dhak raha tha — robot right me, haath RUN button par; S12 verdict script ko dhak raha tha — script neeche; S13 khaali packet shutter ke peeche ghul jata tha — bada + saaf contact; robots ke pair frame se bahar — andar; S07 K02 receipt 2px contact; Q01 selection brackets I01 zone + dono action marks par verify.
- Bakaya imandari: S07 framing abhi loose hai (beech me khaali jagah zyada), S01 human crop upar-left kone me hai — dono storyboard review ke mudde hain. Koi full render abhi nahi hua; motion (press timing, copy/strip travels, wipe) abhi UNVERIFIED hai — Gate 3 proof usi ke liye hai.

## Style direction update
- User ne storyboard poses approve kiye; motion par koi aitraaz nahi, lekin drawing style dusra manga.
- Chuni gayi direction: **professional explainer** — soft shadows, saaf hairline borders, restrained gradients, polished flat surfaces.
- Style sample code: `src/remotion/compositions/asi05v2/assetsX.tsx`, `Asi05StyleSample.tsx`; Root me `Asi05StyleSample` (360 frames, episode f960–1319).
- Sample output: `out/asi05v2-style-sample/f48.png`, `f132.png`, `f180.png`; old-vs-new sheet: `out/asi05v2-style-sample/comparison.png`.
- Abhi poora episode restyle NAHI hua hai. User ke style approval ke baad hi saare shots is language me convert honge, phir S03–S05 motion proof dobara naya style me diya jayega.
- User polish choice: **bold explainer**. `assetsX.tsx` me deeper borders/gradients, zyada contrast, strong input/code surfaces aur zyada ubhra RobotX. Output: `out/asi05v2-style-bold/f48.png`, `f132.png`, `f180.png`; 3-way comparison: `out/asi05v2-style-bold/comparison-3way.png`.
- Full episode abhi bhi restyle nahi hua; pehle isi bold version ki approval, phir saare assets isi language me finalize honge.

## PREMIUM master-prompt rebuild (done)
- Nayi composition: `Asi05Premium` — `src/remotion/compositions/asi05v3/` (parts/assets/scenes/theme + Asi05Premium root), Root.tsx me registered.
- Kya badla: premium paper/gradient/shadow system; dobara design kiye Robot/Human; saare story objects (report/editor/script/runner/pocket/outside/boundary/stamp) layered tactile finish me; S01/S06/S07/S10 framing tight; S09 kagaz wipe sheet-edge ke saath; S12/S13 contact par receiver reaction ring; S15 se secret-jaisi capsule hata kar boundary ka chhota tukda.
- Khud pakde aur theek kiye gaye asal defects: (1) authoring cover ulta khulta tha — neeche ki lines pehle dikhti thi; ab upar-se-neeche kalam ke saath khulta hai. (2) NEW SCRIPT tag blank page ke kinare se jhaankta tha; ab keval authoring complete (f1092) par aata hai. (3) CleanCopy par green tick tha jo "test passed" padh sakta tha — hata kar overlapping copy-documents ka nishan lagaya (Bible ka forbidden state).
- Render saboot: `out/asi05-premium-v1.mp4` — 1080x1920, H.264 yuv420p, 60fps CFR, exactly 4500 frames, 75.00s, silent. Copies: `productions/002-asi05-the-repair-that-ran/002-asi05-premium-9x16-v1.mp4`, `public/videos/asi05-premium.mp4` (landing par sabse upar).
- Frame-level QA: `out/asi05-premium-review/review-sheet.png` (19 anchors incl. f1440 RUNNING-keval-press-par, f1962 K02 janm, f2130 receipt, f3030 shutter, f4499 aakhri frame).
- Master prompt ke named inputs me se repo me MAUJOOD NAHI mile: `ASI05_shot_manifest.csv` aur `ASI05_AGENT_HANDOFF.md` (exact isi naam se). Uplabdh aur istemal hue: `00-DIRECTOR-NOTE.md`, `03-directors-bible-v2.md`, `frame-cues.csv` (4500-frame cue table). Chaar creator screenshots alag file ke roop me repo me nahi mile; unki jagah apni generated board/review frames istemal hue.
