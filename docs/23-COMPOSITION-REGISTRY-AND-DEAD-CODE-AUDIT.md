# Composition Registry & Dead-Code Audit

Ye page batati hai ki repo me **kaunsi composition kya hai** — final, proof, rejected, ya sirf style test — taaki koi purane version ko galti se “final” na samajh le. Registry ka source: `src/remotion/Root.tsx`.

## Registry (Root.tsx ke order me)

| Composition id | File | Duration | Status | Kahan milti hai |
|---|---|---|---|---|
| `P001ChatGptConnect` | `src/remotion/compositions/P001ChatGptConnect.tsx` | 1500f · 30fps · 9:16 | ✅ **Final production** | Landing par rendered MP4 sabse upar; walkthrough: `productions/001-chatgpt-google-connect/04-walkthrough.md` |
| `Asi05TheRepairThatRan` | `src/remotion/compositions/asi05/Asi05.tsx` | 4500f · 60fps · 9:16 | 🗂 **v1 — REJECTED** | Sirf compare ke liye: landing par “rejected” label ke saath + live switcher me legacy entry. Final **nahi** hai. |
| `Asi05V2` | `src/remotion/compositions/asi05v2/Asi05V2.tsx` | 4500f · 60fps · 9:16 | 🎬 Bible v2 rebuild — **Premium se superseded** | Gate-3 proof video landing par; full episode ke roop me final nahi |
| `Asi05StyleSample` | `src/remotion/compositions/asi05v2/Asi05StyleSample.tsx` | 360f · 60fps | 🎨 **Sirf style test** (episode ke f960–1319 ka look) | Episode **nahi** hai; Studio me look check karne ke liye |
| `Asi05Premium` | `src/remotion/compositions/asi05v3/Asi05Premium.tsx` | 4500f · 60fps · 9:16 | ✅ **Final — ASI05 ka current version** | Landing par sabse upar wala ASI05 video; walkthrough + transcript production folder me |
| `ShowcaseKinetic` | `src/remotion/compositions/ShowcaseKinetic.tsx` | 720f · 60fps · 16:9 | Lab demo — kinetic type | Landing live player |
| `ShortHook` | `src/remotion/compositions/ShortHook.tsx` | 450f · 30fps · 9:16 | Lab demo — 3-second hook | Landing live player |
| `DataStory` | `src/remotion/compositions/DataStory.tsx` | 300f · 30fps · 1:1 | Lab demo — data film | Landing live player |

**Ek line ka rule:** ASI05 ka final sirf `Asi05Premium` hai. Baaki ASI05 naam wali har cheez ya to rejected (v1), ya proof (v2), ya style test hai.

## ASI05 shot boundaries ab ek jagah (C30)

`src/remotion/compositions/asi05v3/shots.ts` — `ASI05_SHOTS` (S01–S15 ke start/end), `ASI05_TOTAL_FRAMES = 4500`, `ASI05_FPS = 60`. `Asi05Premium` ab inhi se shot chunta hai aur `Root.tsx` duration bhi yahin se leti hai. Walkthrough/transcript/`docs/21` ki tables inhi numbers se bani hain — boundary badle to chaaro ek saath badlenge.

## Dead-code audit (C31) — tareeka aur natija

**Tareeka:** `npx tsc --noEmit --noUnusedLocals --noUnusedParameters` (tsconfig ki aam check se sakht), phir haath se import-usage ki jaanch.

**Hataya gaya (saboot ke saath — har cheez sach me unused thi):**

| Kya | Kahan | Saboot |
|---|---|---|
| `P001ChatGptConnect` ka unused import | `src/App.tsx` | P001 landing par rendered MP4 se chalta hai; live COMPS me kabhi tha hi nahi |
| `easeOut`, `prog` imports | `asi05v2/scenes.tsx`, `asi05v3/scenes.tsx` | Pure file me sirf import line me maujud the |
| `KeyShape` ka `fill` prop | `asi05v3/parts.tsx` | Prop aata tha par body use hi nahi karti thi; koi caller use deta bhi nahi tha — rendering me zero farak |

**Natija:** sakht check ab **clean** hai (`tsc --noEmit --noUnusedLocals --noUnusedParameters` ✓).

**Jaan-boojh kar rakha gaya (dead nahi hai):**

| Kya | Kyon rakha |
|---|---|
| `src/remotion/compositions/asi05/` (v1) | Rejected version ka saboot + landing compare; history mitana galat hoga |
| `asi05v2/` + `assetsX.tsx` | Bible v2 rebuild aur style sample ka source; Gate-3 proof isi se bana tha |
| `skill-pack/` | User ki di hui byte-identical imported snapshot — code nahi, record hai |

Kuchh bhi “shayad kaam ka ho” keh kar nahi hataya gaya. Agli baar bhi niyam yahi: **pehle saboot, phir delete.**

Aur padho: [`docs/17-WALKTHROUGHS-index.md`](17-WALKTHROUGHS-index.md) · [`docs/18-CONTRIBUTION-BACKLOG-50.md`](18-CONTRIBUTION-BACKLOG-50.md)
