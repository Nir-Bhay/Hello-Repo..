# Contribution Backlog — 50 Genuine Tasks

**Goal:** is repo me aisa kaam karna jo sach me useful ho — taaki GitHub contributions bhi badhein aur portfolio bhi strong ho. **Fake commits, empty changes, ya number-gaming nahi hoga.**

> GitHub par contributions tabhi meaningful bante hain jab kaam review hokar default branch (`main`) me merge ho, ya genuine PR/issue/review bane. Ek hi push me kitne commits hain, usse zyada important hai: **har commit ek saaf, useful, samajh aane wala change ho.**

## Kaam karne ke rules

1. Ek task = ek logical change. Commit message bataye ki *kya* aur *kyon* badla.
2. Pehle issue/short plan, phir branch, phir PR. PR description me test/verification likho.
3. Animation badlo to frame evidence do (still/contact sheet). Sirf “lagta hai theek hai” nahi chalega.
4. Copy/text badlo to source ledger se verify karo. Khaskar ASI05 ki locked copy mat todo.
5. Agar kaam bada hai, use chhote reviewable PRs me todo — lekin har PR apne aap me complete ho.

## Batch 1 — Walkthrough foundation (is PR me implemented)

| ID | Task | Status | Acceptance |
|---|---|---|---|
| C01 | Walkthrough hub/index banana | ✅ Done | `docs/17-WALKTHROUGHS-index.md` se saari guides ek jagah milti hain |
| C02 | ASI05 premium shot-by-shot walkthrough | ✅ Done | 15 shots, exact frames, pause points, forbidden-state checklist |
| C03 | P001 walkthrough | ✅ Done | 50s timeline, permission caution, code/video map |
| C04 | Demo compositions walkthrough | ✅ Done | Showcase/ShortHook/DataStory ka purpose + review method |
| C05 | Har major walkthrough ke liye cover image | ✅ Done | 3 covers `public/images/walkthroughs/` me, bina gibberish text ke |
| C06 | Landing page par walkthrough cards | ✅ Done | Cover, meta, “kya seekhoge”, video/live links |
| C07 | Productions README me walkthrough convention | ✅ Done | Naye production folder me walkthrough file ka rule likha |
| C08 | 50-task genuine contribution backlog | ✅ Done | Ye file; har task ke saath acceptance criteria |

## Batch 2 — Documentation & discoverability (next, ready)

| ID | Task | Status | Acceptance |
|---|---|---|---|
| C09 | Fresh-clone quickstart verify karna | Verification pending (is PR me step chalega) | `npm install → preview → studio → typecheck` naye clone par chale; README steps sahi hon |
| C10 | Docs link-check script | ✅ Done | Repo ke saare internal Markdown links tootey hue milein to script fail ho |
| C11 | `CONTRIBUTING.md` banana | ✅ Done | Branch, commit, PR, review, evidence rules ek file me; backlog se link |
| C12 | GitHub issue templates | ✅ Done | Bug / unclear-frame / documentation / feature — chaar templates `.github/ISSUE_TEMPLATE/` me |
| C13 | Pull request template | ✅ Done | Summary, verification, screenshots/frames, risk — PR kholte hi template aaye |
| C14 | Production index table | ✅ Done | Har production: status, duration, format, final file, walkthrough — ek table `productions/README.md` me |
| C15 | Cybersecurity glossary (ASI series) | ✅ Done | ASI05 ke terms — generated code, secret, boundary, replay — aam bhasha me |
| C16 | On-screen copy transcript index | ✅ Done | Har video ke exact on-screen shabd ek jagah; ASI05 ledger se mismatch = 0 |

## Batch 3 — Accessibility & viewer experience

| ID | Task | Status | Acceptance |
|---|---|---|---|
| C17 | P001 ke liye captions/transcript file | ✅ Done | Har line ka time-coded transcript; video ke text se match |
| C18 | ASI05 silent-video text transcript | ✅ Done | 15 shots ke exact on-screen copy + pause-point notes ek file me |
| C19 | Landing page alt-text audit | ✅ Done | Har image/video ke paas meaningful alt/label; decorative images marked |
| C20 | Keyboard-only landing review | ✅ Done (focus visible; haath ki checklist docs/22 me) | Tab se saare players/buttons reachable; focus visibly dikhe |
| C21 | Mobile viewing QA checklist | ✅ Done (checklist + responsive fix; asal phone par user test baaki) | 360px–430px width par text readable, koi overlap nahi — checklist + evidence |
| C22 | Video poster frames set karna | ✅ Done | Har `<video>` par cover/poster; play se pehle blank/black frame nahi |
| C23 | Download filename consistency | ✅ Done | Landing download naam = production file naam; purane naam redirect/note ke saath |
| C24 | Reduced-motion note + preference respect | ✅ Done | Landing par motion-sensitive viewers ke liye guidance; jahan mumkin ho respect |

## Batch 4 — Code quality & maintainability

| ID | Task | Status | Acceptance |
|---|---|---|---|
| C25 | Final-video section ko reusable component banana | ✅ Done | App.tsx me duplication kam; teenon video sections ek component se render hon |
| C26 | Walkthrough metadata ko typed data file me le jana | ✅ Done | Cards data se banein; TypeScript type har field ko lock kare |
| C27 | Composition registry audit | ✅ Done | Root.tsx ki har composition landing/docs se discoverable; dead sample clearly labelled |
| C28 | ASI05 v1/v2/premium version labelling saaf karna | ✅ Done | Har version ke bagal “rejected / proof / final” status; confusion = 0 |
| C29 | Lint + format configuration | Planned | Ek command se lint/format check; existing code bina bade diff ke pass |
| C30 | Shared constants: durations & shot boundaries | ✅ Done | ASI05 shot boundaries ek jagah se aayein; walkthrough table se match |
| C31 | Dead-code audit | ✅ Done | Unused imports/files ki list; हटाना sirf proof ke saath |
| C32 | Landing CSS ko sections me organize karna | ✅ Done | Walkthrough/video/pipeline styles alag blocks me; visual diff = 0 |

## Batch 5 — Testing, QA & automation

| ID | Task | Status | Acceptance |
|---|---|---|---|
| C33 | Render-metadata verification script | Planned | Ek command MP4 ka width/height/fps/frame-count/duration report kare |
| C34 | Frame-extraction QA script | Planned | Diye gaye frame numbers par stills + contact sheet auto bane |
| C35 | GitHub Actions: typecheck + build | ⛔ Blocked (workflows permission; ready file docs/25 me) | Har PR par `tsc --noEmit` aur preview build auto chale |
| C36 | Internal-link CI check | ⛔ Blocked (C35 ke saath hi lagega) | Toota Markdown link PR ko fail kare (C10 ka CI version) |
| C37 | Public asset size budget | ✅ Done | `public/videos` + images ka size report; budget cross = warning |
| C38 | Visual-regression still checklist | Planned | Har composition ke hero frames ki checklist; change par before/after |
| C39 | Browser smoke-test checklist | ✅ Done | Landing ke saare players play/pause/scrub karein — manual checklist doc |
| C40 | Release checklist template | ✅ Done | Final render → verify → copy → landing → PR — ek reusable checklist |

## Batch 6 — New content & walkthrough videos

| ID | Task | Status | Acceptance |
|---|---|---|---|
| C41 | ASI04 (next episode) ka brief | Planned | Director-note format me story, lesson, forbidden states — user review pehle |
| C42 | ASI05 narrated walkthrough script | ✅ Done (script; recording voice-faisle ke baad) | 75s video ke saath bolne wala script; voice decision ke baad record |
| C43 | ASI05 Hindi walkthrough script | ✅ Done (script; recording baaki) | Wahi walkthrough Hinglish me; technical shabd English me rakhe |
| C44 | P001 narrated walkthrough script | ✅ Done (script; recording baaki) | 50s timeline par voice script + caption file |
| C45 | Demo compositions ki 60s walkthrough script | ✅ Done (script; recording baaki) | Teenon demos ka ek combined narration script |
| C46 | Agle episodes ke cover/storyboard art direction | Planned | Palette lock ke andar cover system; gibberish text = 0 |
| C47 | ASI05 sound-design pass (decision ke baad) | Planned | Music/SFX plan pehle doc me; mix −14 LUFS target; silent version bhi safe |
| C48 | Good-first-issues ki curated list | Planned | Backlog se 10 sabse chhote tasks issue-ready descriptions ke saath |
| C49 | Quarterly docs review ritual | Planned | Har quarter docs/ links, status aur stale claims ki check — checklist doc |
| C50 | Portfolio case-study page | Planned | Ek page: problem → process → evidence → final video → seekh |

## Ab tak kya ho chuka hai (is PR me)

**Batch 1 — Walkthrough foundation:**
- Walkthrough hub + 3 detailed guides + demo guide.
- 3 cover images (AI-generated, palette-locked, bina readable gibberish text ke).
- Landing page par walkthrough section (cover cards ke saath).
- Productions README me walkthrough convention.
- Ye 50-task backlog — aage ka saara kaam yahin se uthega, ek-ek karke, review ke saath.

**Batch 2 — Documentation & discoverability:**
- `CONTRIBUTING.md` (C11), PR template (C13), 4 issue templates (C12).
- `npm run check:links` — internal Markdown link checker, bina dependency (C10).
- Glossary (C15) aur exact on-screen copy index (C16); production index पहले se मौजूद (C14).
- C09 verified hai: bilkul naye clone par `npm ci`, link-check, typecheck, build, preview (HTTP 200) aur Remotion Studio boot (HTTP 200) — sab chala.

**Batch 3 — Accessibility & viewer experience:**
- P001 transcript (C17) aur ASI05 silent-video transcript (C18) — dono production folders me, exact on-screen shabd ke saath.
- Har video par poster (C22) aur aria-label (C19); ASI05 premium ka download naam production file se match (C23).
- Keyboard focus ab har jagah dikhta hai aur live player OS ki reduced-motion setting par autoplay band kar deta hai (C20, C24).
- Mobile/accessibility checklist: `docs/22-ACCESSIBILITY-AND-MOBILE-QA.md` (C21) — asal haath ki keyboard/phone QA ke box wahi bhare jayenge.

**Batch 4 — Code quality & maintainability:**
- Landing ke chaaro rendered-video sections ab ek hi `FinalVideoSection` component se bante hain (C25); walkthrough cards ka data typed file `src/data/walkthroughs.ts` me hai (C26).
- ASI05 ki shot boundaries ab ek hi jagah hain — `asi05v3/shots.ts` — composition aur Root dono wahi se padhte hain (C30).
- Registry + dead-code audit: `docs/23-COMPOSITION-REGISTRY-AND-DEAD-CODE-AUDIT.md` (C27, C31). Sakht unused-check (`tsc --noUnusedLocals --noUnusedParameters`) ab clean hai; ASI05 ke version labels Root/landing/docs teeno jagah saaf hain (C28); landing CSS section comments ke saath organized hai (C32).
- **C29 (lint/format tool) abhi bhi Planned hai** — ESLint/Prettier jodna ek dependency faisla hai; bina soche tool ghusana sahi nahi, isliye use jhootha Done nahi kiya gaya.

**Batch 5 — Testing, QA & automation (jo is environment me ho sakta tha):**
- GitHub Actions CI ka workflow **ready hai lekin Blocked hai**: push token ke paas `workflows` permission nahi mili. Exact file aur unblock steps: `docs/25-CI-WORKFLOW-PLAN.md` (C35, C36). Permission milte hi ek commit me lag jayega.
- `npm run report:assets` — public media ka size report, budget warning ke saath (C37).
- Browser smoke-test checklist `docs/24` (C39) aur release checklist `templates/06` (C40).
- **C33 (render-metadata script), C34 (frame-extraction script) aur C38 (visual-regression stills) abhi Planned hain** — inhe ffmpeg/render infra wali sitting chahiye; aadha-adhoora script jhootha Done kehna sahi nahi hoga.

**Batch 6 — Nayi content (shuruaat ho gayi):**
- Chaaro narrated walkthrough **scripts** tayyar hain: ASI05 English (C42) + Hinglish (C43), P001 (C44), demo compositions 60s (C45). Recording ke liye voice ka faisla baaki hai — creator ki awaz best rahegi; synthetic voice sirf alag se tai hone par.
- **Baaki bacha hai:** C41 (ASI04 brief — agli episode ki story user se confirm hogi, phir pehle document), C46–C50 (art direction, sound pass, good-first-issues, quarterly ritual, case study), aur infra wale C29/C33/C34/C38 + permission-blocked C35/C36.

**Agla kadam:** User ki disha milte hi C41 (ASI04 brief). Tab tak ke liye C48 (good-first-issues ki curated list) sabse chhota aur faydemand kadam hai.
