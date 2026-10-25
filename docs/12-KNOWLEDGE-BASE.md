# 12 · KNOWLEDGE BASE — Sab kuch, ek jagah (Master Index)

> User ne jo kuch bhi share kiya — repos, skills, documents, ideas — sab yahan indexed hai. Kuch bhi sirf chat me nahi rakha. Update: 24 Oct 2026.

## A. User-shared sources (बाहर से आए, save किए गए)

| # | Source | Kya hai | Kahan saved hai | Status |
|---|---|---|---|---|
| 1 | **whaleyxbt/claude-motion** | Agent ke liye motion-design toolkit: numbers ke saath taste, review loop, Python sfx engine, web-sims | Clone: `references/claude-motion/` (gitignored) · Teardown: `docs/02` | ✅ Pura padha; rules hamare `lib/timing.ts` me |
| 2 | **remotion-dev/remotion** (official) | Remotion ka source monorepo (137 packages, core v4.0.538) | Clone: `references/remotion/` (gitignored, 6.2GB incl. bun install) | ✅ Cloned + bun install run; hamare npm packages same version |
| 3 | **remotion-dev/skills** (official) | Remotion ki official agent skills (11 skills + best-practices rules) | Clone: `references/remotion-skills/` | ✅ Collected; catalogue `docs/15` (READINESS ke saath wali file me index) |
| 4 | **Ractor skill-pack** (user upload, 16 files) | Cybersecurity shorts ka production system: main skill, references, 3 reviewer agents, ASI05 director note | `skill-pack/` (git me committed, byte-identical) | ✅ Full review: `skill-pack/REVIEW.md` |
| 5 | **Vincentwei1021/mg-styles-15** | 15 motion styles, har ek ki 10s code-film + full prompt + source + review rubric | Clone: `references/mg-styles-15/` | ✅ Collected; style catalogue `docs/14` |
| 6 | X/Twitter posts (user paste) | Crypto threads (unverified), AI-agent workflow patterns | Summary: `docs/11` | ⚠️ Pattern liya (research→rank→adversarial review); facts kabhi bina verify use nahi honge |

## B. Hamare apne banaye hue (is repo me hi rehte hain)

| Asset | Kahan | Note |
|---|---|---|
| Motion library (easing/springs/palette/components) | `src/remotion/lib/`, `src/remotion/components/` | CameraRig fix ke saath (P001 review se) |
| Demo compositions (3) | `src/remotion/compositions/ShowcaseKinetic/ShortHook/DataStory` | 16:9 60fps · 9:16 · 1:1 |
| Production P001 (50s short, final MP4) | `productions/001-chatgpt-google-connect/` + `public/videos/` | Rendered, −14.3 LUFS, review notes ke saath |
| Procedural audio generator | `productions/001-.../make-audio.py` | 92 BPM bed + timeline SFX, numpy |
| Docs (research + rules) | `docs/00`–`docs/16` | Knowledge base + synthesis + readiness included |
| Templates | `templates/01`–`05` | Synthesis ke baad upgrade hue (viewer-question, forbidden-states) |
| Live preview + download page | `src/App.tsx` (`npm run preview`, :5173) | Remotion Studio: `npm run studio` (:3001) |

## C. Known gaps (chhupa kuch nahi)

1. **`ractor-motion-direction/SKILL.md` missing hai** — Ractor pack ki files use refer karti hain, upload me nahi aaya. Uski sirf references (style-system, review-gates) hain. Jab user dega, `skill-pack/ractor-motion-direction/SKILL.md` me jud jayega.
2. **Ractor machinery yahan nahi hai** (`scripts/studio.py`, Codespaces, Ractor repo) — pack padhne ke liye complete hai; Ractor episodes chalane ke liye wo repo alag se lagega.
3. **Voice API key nahi hai** (abhi tak) — voiceover wale kaam ke liye user dega to hi; bina uske text+music route ready hai.
4. Is sandbox me render ke liye Chromium trick lagta hai (`/tmp/chromium` + NSS libs, `docs/00` note) — user ki machine pe plain chalega.

## D. Kaunsi cheez kab kholni hai (quick routing)

- Naya apna video banana hai → `docs/10` pipeline + `docs/04` bible + `templates/`
- Style choose karna hai / reference chahiye → `docs/14` (15 styles catalogue)
- Render/captions/create ka official tareeka bhool gaya → `references/remotion-skills/skills/*/SKILL.md`
- Motion ke numbers confirm karne hain → `src/remotion/lib/timing.ts` (= `docs/04`)
- Ractor episode ka kaam hai → `skill-pack/ractor-video-production/SKILL.md` pehle
- Koi purani baat verify karni hai "ye humne kahan se seekha" → `docs/11` + `docs/13`
