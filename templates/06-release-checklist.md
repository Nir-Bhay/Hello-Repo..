# Template 06 — Release Checklist (Final Video)

Har final render isi raaste se jayega. Ek bhi box khaali ho to “final” word istemal nahi hoga.

## 1. Direction lock
- [ ] Production folder me brief + script + storyboard hai; user ka document approval mil chuka hai.
- [ ] On-screen copy ledger final hai (ASI series ho to Bible se match; `docs/21` update ho gaya).
- [ ] Duration / format / fps pehle se confirm hai (jaise 75s · 9:16 · 60fps · 4500f).

## 2. Render
- [ ] Composition `Root.tsx` me sahi id/duration/fps/size ke saath registered hai.
- [ ] Render command chala; output `out/` me versioned naam se aaya (`<id>-<slug>-<format>-v<n>.mp4`). Purani version delete/overwrite **nahi** hui.

## 3. Technical verification (saboot ke saath)
- [ ] Metadata match: width/height/fps/duration/frame-count expected ke barabar (ASI05 premium ki tarah: 1080×1920, 60fps, exactly 4500 frames, 75.00s).
- [ ] Codec playback-safe hai (H.264 yuv420p; yuvj420p ho to transcode).
- [ ] Sound wala video ho to loudness target ke aas-paas (−14 LUFS) aur silent pass ho to wo jaan-boojh ka faisla document me likha hai.

## 4. Frame-level QA
- [ ] Contact sheet / review frames nikale gaye aur **dekhe** gaye (sirf banaye nahi).
- [ ] Forbidden states check: galat text, galat timing, ownership galti (copy vs original), reverse motion, “test passed” jaisi mana haalatein — ek bhi nahi.
- [ ] Pehla frame khaali/kaala nahi; aakhri frame poora hold deta hai.

## 5. Publish
- [ ] Production copy production folder me rakhi; preview copy `public/videos/` me (naam download naam se match — `docs/22` C23).
- [ ] Landing section update: sahi tag (final / proof / rejected), poster, aria-label, specs sach ke saath.
- [ ] Walkthrough + transcript update ho gaya (`docs/17` index me entry ke saath).
- [ ] `npm run check:links` · `npx tsc --noEmit` · `npm run build:preview` — teeno saaf.

## 6. Review & record
- [ ] User ko final video review ke liye diya; normal-speed (phone) comprehension ka jawab pending/saaf taur par likha hai.
- [ ] Production `notes.md` / plan file me version record: kya bana, kya verify hua, kya **nahi** hua.
- [ ] PR khula/merge hua; backlog me sambandhit task ki status sach ke saath update hai.

**Usool:** “render ho gaya” ≠ “release ho gaya”. Release tab hai jab saboot, copy, landing aur record — chaaro jagah ek hi sach bolen.
