# 14 · COLLECTED — 15 Motion Styles Catalogue (mg-styles-15)

> Source: https://github.com/Vincentwei1021/mg-styles-15 (MIT; gallery: vincentwei1021.github.io/mg-styles-15) · Clone: `references/mg-styles-15/` · Har style: ek 10s code-film + **pura prompt** (`prompts/`) + **pura source** (`demos/`) + do AI-review rounds (rubric: dusra AI judge banke review kare, phir ek revision round; scores 7.57–8.21/10 — ye AI jury ke hain, audience proof nahi).
> Pipeline unki bhi wahi hai jo hamari hai: page jo kisi bhi time `renderAt(t)` draw kare → headless Chrome frame-by-frame → ffmpeg; sound bhi code se (`audio.py`).

## Catalogue — style, pehchan, hamare kaam me kab

| # | Style (demo) | Film | Pehchan (signature) | Hamare liye best use |
|---|---|---|---|---|
| 01 | Flat Vector (`01-flat-vector`) | popwise — One Dot | Ek persistent object (coral dot) kai roles me; saaf silhouettes | Explainers, product stories — hamari default bhasha ke sabse kareeb |
| 02 | Line Art (`02-line-art`) | ATELIER LINEA — One Line | Ek line path naapke uske tip ko follow karti hai | Provenance/routes, process diagrams, signature reveals |
| 03 | Isometric 2.5D (`03-isometric`) | ISOPOLIS — Let the City Grow | Orthographic duniya, depth order explicit | System/topology stories (servers, networks, pipelines) |
| 04 | 3D Render (`04-3d-render`) | soft. — Soft Landing | Blender/C4D look, soft materials | Hero product shots — mehenga hai, sirf hero ke liye |
| 05 | Cel Boil (`05-cel-boil`) | HAND MADE | Frame-by-frame ink, line boil, warm paper | Human touch, reactions, impact accents (poora film nahi, accents) |
| 06 | Collage (`06-collage`) | NOGGIN Quarterly | Public-domain cutouts, stepped motion | Documentary/quoted evidence, ek-do artifacts |
| 07 | Liquid (`07-liquid`) | drop. — sab ek boond se | Liquid morph/flow | Transformations, brand reveals — mushkil, proof pehle |
| 08 | Shape Morph (`08-morph`) | morphe. — One Shape, Every Story | Shared point-count contours, beech me simple form | Ek object ka role badalna (claim→command type beats) |
| 09 | Bauhaus (`09-bauhaus`) | KONSTRUKTION · 20 Beats | Geometric shapes beat-grid par | Data/announcement films, rhythmic edits |
| 10 | Synthwave/VHS (`10-synthwave`) | NEON DRIVE — Midnight 1986 | Retro neon, VHS texture (unka top score 8.21) | Sirf jab topic hi retro ho — warna dated risk |
| 12 | Aurora Glass (`12-aurora-glass`) | Aurora — Think in Light | Glassmorphism, light gradients | Premium SaaS/product reveals |
| 18 | Hanazi / Variety Captions (`18-hanazi`) | Cat Diary EP.07 (9:16!) | Bade playful kinetic captions, variety-show energy | Entertainment Shorts jahan captions hi comedy hain |
| 19 | Sticker Explainer (`19-paperclip`) | Phone ke elements | White-edge cutouts, peel/dock, leader lines | Evidence dikhana (invoice, log, screenshot) — Ractor pack bhi yahi use karta hai |
| 20 | Pixel Art (`20-pixel`) | PIXEL QUEST | 8-bit game duniya | Gaming/nostalgia topics ke liye hi |
| 22 | HUD/FUI (`22-hud`) | KESTREL-9 · Target Acquired | Cyberpunk interface layers | Tech/security demos — zyada hua to clutter (Ractor pack neon se mana karta hai) |

## Kaise use karenge (rules)

- Har naye video ke style decision par yahan se **1 primary style + zyada se zyada 1 accent technique** chunenge (style-system ka "har material ka ek job" wala rule).
- Kisi style ko try karna hai to uska `prompts/<style>.md` hi sabse tez shuruaat hai — prompt me Output/Specs badal ke (9:16 etc.) apna version. **Signature features wali section mat hatana** — wahi style ki pehchan hai.
- Demo ka code/artwork copy karna hai to licence dekho: repo ka apna code MIT hai, par andar ke third-party photos/fonts/samples ke licence alag hain (`reference-study` (skill-pack) me bhi yahi warning hai). Method seekho, assets apne banao.
- Review ka unka tareeka (rubric.md): film ko dusre AI se judge karwao → timecoded fixes → ek revision round. Hamare review-loop (templates/05) ke saath ye "adversarial judge" step jodna adopt kiya gaya hai (`docs/13`).

## Hamare demos se mapping (jo already bana hai)

ShowcaseKinetic ≈ Flat Vector + Line Art · ShortHook ≈ kinetic captions (Hanazi ka shaant cousin) · DataStory ≈ Bauhaus-ish data rhythm · P001 ≈ Flat Vector + Sticker (UI cards). Matlab hum pehle se hi in styles ke parivar me hain — ab naam aur prompts ke saath chun sakte hain.
