# 04 · MOTION DESIGN BIBLE — Taste, Numbers ke saath

> Ye hamari sabse important file hai. Har number research + shipped work (claude-motion) se proven hai. Deviate karna hai to jaan-bujh ke, galti se nahi. Code: `src/remotion/lib/timing.ts`.

## 1. Time pehle, code baad me
Har beat named timestamp (seconds) me timeline/document me. Component me hardcoded start-time kabhi nahi — beat + offset (`s1.exit + 0.05`) chalega. Retiming = timeline edit; picture, captions, sound teeno follow karte hain.

## 2. Easing — kabhi linear nahi

| Curve | Kab | Kyun |
|---|---|---|
| `bezier(0.16, 1, 0.3, 1)` easeOut | entrances, reveals | tez shuru, naram rukna = "designed" |
| `bezier(0.6, 0, 0.9, 0.35)` easeIn | exits | jaldi niklo, linger mat karo |
| `bezier(0.65, 0, 0.35, 1)` easeInOut | camera, morph, state-change | dono taraf smooth |
| `bezier(0.55, 0, 0.2, 1.12)` overshoot | value ka "land" hona (counter, slider) | halka sa aage jaake settle |
| linear | sirf continuous: rotation, drift, grain | jo rukta hi nahi, use ease nahi chahiye |

*Linear motion hi #1 "cheap" pehchan hai.* Easing akele ~60% professional feel deta hai.

## 3. Springs — physical cheezon ke liye

| Preset (damping/stiffness/mass) | Feel | Kab |
|---|---|---|
| `14/140/0.8` settle | shaant settle | general UI enter (`SPRINGS.settle`) |
| `15–20/140–240/0.6–1` heavy | bharipan, calm | bade panels, camera-ish moves |
| `12/190/0.75` snap | notch pe tak | controls, steps |
| `9–11/200–230/0.7` pop | halka bounce | badges, callouts, dots |
| `8/200` elastic | zyada bounce | **video me sirf EK hero moment** |

Type aur camera ke liye spring nahi, bezier — padhne wali cheez physics se hilti hai to buri lagti hai.

## 4. Timing numbers

- **Stagger:** words 0.09s · list items/chips 0.2–0.25s · dots/rings 0.06s. Sab ek saath = "sab ek saath animation" = amateur pehchan #2.
- **Entrance:** 2–3 properties ek saath (position + opacity + scale). Ek property anaemic lagti hai.
- **Exits entrances ke aadhe:** 0.35–0.55s vs 0.7–1.25s, `easeIn` ke saath. Exit hai hi, ye bhoolo mat — teleport = cheap.
- **Scenes overlap hoti hain:** agla scene pachhle ke puura jaane se pehle shuru (4.02s < 4.4s style). Khali gap = "loading…" feel.
- **Reading holds (sabse zyada underrated):** short phrase ≥1s rukke, +0.25s per extra word (3 se zyada), **final hook/CTA ≥2s**. Text hamesha ruk ke padhne do; moving text koi nahi padhta.
- **Typing effect:** ~0.035s/char, caret idle blink ~2.4Hz.
- **Idle bhi zinda:** kuch na ho to bhi halka saans — slow drift, blink, rotation. Dead frame = dead video.

## 5. Typography

- Max **3 families**: display sans (Inter, tight −0.02em, lineHeight ~1), italic serif accent (Instrument Serif), mono labels (JetBrains Mono).
- Ek line me **ek hi accent word** — wahi point hai. Display size canvas ka ~13% (1080 pe ~138px).
- Mono labels = decoration (uppercase, 0.2–0.24em spacing, muted). Jo padhna zaroori hai wo BADA likho.
- **Phone test:** 360px wide pe key message padh jana chahiye (feed me video itna hi dikhta hai).
- Numbers hamesha `tabular-nums` — warna count-up me digits nachte hain.

## 6. Color

- Palette tokens sirf `C` object se. Component me naya hex = mana hai.
- **Ek accent** (hamara coral `#FF5C38`) aur uska ek matlab: jo change hua / jawab / winner. Sab coral = kuch bhi coral nahi.
- Glow state se drive karo (`glow = progress`), time se nahi — roshni bhi kahani bole.

## 7. Texture — "kuch bhi dead-still nahi"

Har frame pe 5-layer stack (hamara `Stage` component):
`bg mesh/gradient → assets → graphics → grade (glow/vignette) → grain`
Film grain opacity ~0.07–0.09 (har 2 frame reseed), halka vignette, dot-grid kuch px/s drift. Flat saaf vector hi "sticker/PowerPoint" feel deta hai — texture hi use "film" banata hai.

## 8. Camera & continuity (docs/07 detail)

- Static frame = slideshow. Har scene me slow push-in (scale 1→1.05 type) ya pan — virtual camera hamesha halka chale.
- **Persistent object:** ek element (prompt bar, dot, line) scene-to-scene travel kare aur role badle. Cuts ki jagah transformations.
- Transitions motivated hon — screen pe maujud object hi transition banaye (dots merge → iris). Generic wipe = template pehchan.
- Velocity se trails/squash nikalo (`value(f) − value(f−1)`), fake mat karo.
- **Ek hero moment per video.** Usse pehle build-up, uske baad hold. Hero moment har 3 second me = koi hero nahi.

## 9. Anti-patterns (dikhe to turant fix)

- ❌ Sab ek saath fade in / sabki same duration
- ❌ Linear easing jo rukta/chalta hai
- ❌ Padhne ke time hilta text
- ❌ Ek frame me 2 focal points
- ❌ Edge se <~6% pe important content (crop hoga)
- ❌ Black/khali frame 0 (wohi thumbnail banta hai)
- ❌ Har scene naya layout — continuity gayab
- ❌ Bounce/elastic ka zyada istemal (rubber = baccho wala)
