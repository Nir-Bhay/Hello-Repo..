# AGENTS.md — Hello Motion Studio me kaam karne ke niyam

Ye repo ek motion-graphics production workspace hai (Remotion: React → MP4). Koi bhi agent (Arena/Claude/Cursor/Codex) video banane se **pehle** ye padhe, phir `docs/00-START-HERE.md` aur `docs/04-MOTION-DESIGN-BIBLE.md`.

## Pehle padho (order)
1. `docs/00-START-HERE.md` — repo map + commands
2. `docs/10-STORY-TO-VIDEO-pipeline.md` — kaam ka process (gates ke saath)
3. `docs/04-MOTION-DESIGN-BIBLE.md` — taste ke numbers
4. Kaam ke hisaab se: formats `docs/05`, SVG `docs/06`, camera/transitions `docs/07`, audio `docs/08`, quality gate `docs/09`

## Video banane ka process (skip mat karo)
1. **Document pehle.** `productions/<NNN>-<slug>/` me brief → (research) → hook options → script → storyboard/shot-list → `timeline.json`. Har beat seconds me, named.
2. **User approval gate.** Document dikhaye bina build shuru mat karo.
3. **Build.** Composition `src/remotion/compositions/` me, `Root.tsx` me register. Reusable cheez `components/` + `lib/` se; palette/fonts sirf `lib/palette.ts` ke `C`/`F` se.
4. **Review loop.** Draft render → har beat ka frame dekho (`templates/05` checklist) → fix → saaf pass tak repeat. Preview landing page (`npm run preview`) user ko live dikhane ke liye hai.
5. **Sound.** `docs/08` ke route se; SFX beats pe frame-exact; target −14 LUFS / peak ≤ −1 dBFS.
6. **Final.** Full-res MP4, versioned naam `out/<NNN>-<slug>-<format>-v<n>.mp4`. User review ke bina "done" mat bolo. Kya check/fix kiya, report karo.

## Code conventions (non-negotiable)
- Animation sirf `useCurrentFrame()` ka pure function. **CSS animations/transitions, Tailwind animation classes — bilkul nahi** (render me kaam nahi karte).
- `Math.random()` / `Date` nahi — Remotion ka seeded `random("seed")` use karo.
- Time hamesha **seconds × fps**; hardcoded frame numbers components ke andar nahi, beats timeline/document se aayenge.
- Kabhi linear easing nahi (sivaay continuous drift/rotation ke). Entrances `easeOut bezier(0.16,1,0.3,1)`; exits uske aadhe time `easeIn`; physical cheezon pe `SPRINGS` presets.
- Ek video: ek palette, ek accent, ek focal point per frame, ek hero moment. Safe area ≥6%.
- Reading holds: phrase ≥1s, final hook/CTA ≥2s. Frame 0 kabhi black nahi.
- Assets `public/` me, code me `staticFile()` + `<Img>`/`<OffthreadVideo>` se.

## Commands
```bash
npm run preview        # landing + live player (port 5173, 0.0.0.0)
npm run studio         # Remotion Studio (port 3001)
npm run typecheck
npm run render:draft   # fast aadha-res draft
npm run render:showcase|short|data   # demos ke finals
npx remotion render src/remotion/index.ts <CompositionId> out/<name>.mp4
npx remotion still src/remotion/index.ts <CompositionId> out/still.png --frame=<n>
```
Requirements: Node 20+ · render ke liye (pehli baar) Chromium download hota hai · `ffmpeg` mux/loudness ke liye.
