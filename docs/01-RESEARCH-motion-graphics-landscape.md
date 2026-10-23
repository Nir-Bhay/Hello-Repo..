# 01 · RESEARCH — Motion Graphics Landscape (2026)

> Research date: Oct 2026 · Sources: docs/11 me full list. Ye file "aaj kal kya chalta hai, kyun chalta hai" ka snapshot hai.

## Motion graphics hota kya hai

Text, shapes, data aur UI ko **time ke saath design** karna. Live-action se fark: har frame hamare control me hai — isliye "galti" bhi design lagti hai agar timing sahi ho. 2026 ka shift: timeline-editor (After Effects) se **workflow automation / code-first** ki taraf — kyunki code se video = repeatable, data-driven, agent-friendly, version-controlled.

## 2026 ke trending styles (hamare kaam ke hisaab se ranked)

1. **Kinetic typography** — animated text hi hero. Explainers, Shorts, lyric/quote videos. Word-by-word reveal, variable-weight type, text jo meaning ke saath move kare (upar wali baat = upar motion). *Hamari sabse badi strength — code isme best hai.*
2. **3D UI motion / glassmorphism** — depth, parallax, frosted panels, isometric scenes. Product/SaaS videos ke liye.
3. **AI B-roll + motion graphics hybrid** — opening cinematic shot AI se, asli information motion graphics se. Dhyaan: gratuitous 3D ab dated lagta hai, kam aur purposeful rakho.
4. **Procedural / generative pattern motion** — algorithmic shapes, loops, particles. Code ka home ground (seeded random se deterministic).
5. **Data films** — Strava "Year in Sport" style: ek hi template, har user ke data se lakhon personal videos. Sirf code se possible hai.
6. **Hand-drawn / line-boil texture** — perfect vector ke upar halki imperfection = "human, designed" feel. Grain + wobble filter se milta hai.

## Tool landscape — hamne kya chuna, kyun

| Tool | Kaam | Faisla |
|---|---|---|
| **Remotion (React→video)** | Hamara main engine | ✅ Code, components, data, agent-friendly, MP4 render |
| After Effects | Industry standard pro mograph | ❌ Manual timeline, automation kamzor, agent nahi chala sakta |
| Blender | 3D / cinematic | ⚠️ Sirf jab sach me 3D chahiye; pipeline alag (docs/03) |
| HyperFrames (HTML→video) | Agent-driven HTML motion | ⚠️ Naya, dekha-parakha kam; Remotion zyada mature |
| Motion Canvas / Revideo | Code-first alternatives | ⚠️ Ecosystem chhota; Remotion community sabse badi |
| Rive / Lottie | Interactive web animation | ⚠️ Video export ke liye nahi, web embeds ke liye |
| CapCut/Canva templates | Fast social content | ❌ Template-look = "cheap" pehchan (docs/09) |
| Runway/Kling (AI video) | Cinematic B-roll shots | ⚠️ Support role: sirf opening/B-roll, information wahan nahi |

## "Real video" vs "code wali slideshow" — research ka nishkarsh

Video real tab lagta hai jab ye 5 cheezein ek saath hon (detail docs/09):

1. **Physics-wali timing** — easing/springs; linear = robot = cheap.
2. **Virtual camera** — slow push-in/pan; static frame = PowerPoint.
3. **Texture** — film grain, vignette, glow; flat vector = sticker.
4. **Sound design** — whoosh/pop/hit har bade move pe; sound hi brain ko "real hai" bolta hai.
5. **Continuity** — ek object scene-to-scene travel kare; har scene naya layout = assembled, designed nahi.

FPS ka sach: 24fps = cinematic (motion blur ke saath), **30fps = Shorts/web standard, 60fps = UI/kinetic ke liye sabse smooth**. Hum default **60fps landscape, 30fps vertical** rakhte hain; chaahe to dono render kar sakte hain kyunki timing seconds me likha hai (fps badalne se motion ki speed nahi badalti).

## Agent se video kyu feasible hai (aur kahan dhyaan dena hai)

- Research (MoVer, SIGGRAPH 2025): pehli koshish me ~59% motion graphics bina iteration ke sahi baithe, **automatic frame-checking + correction ke baad ~94%**. Matlab jeet "ek baar me perfect prompt" me nahi, **review loop** me hai — isliye hamara pipeline draft→frames dekho→fix→final rakhta hai (docs/10).
- Agent video "dekh" nahi sakta, par **frames dekh sakta hai** — contact-sheet review isiliye hamara QA hai (templates/05).
