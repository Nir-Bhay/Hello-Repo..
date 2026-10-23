# 09 · "CHEAP" vs "REAL" — Quality ka poora sach

> User ki requirement: *"faltu-giltu nahi lagna chahiye, ekdam real video lage — jaise graphics/Blender pe design hua ho."* Ye file us demand ka matlab code ki bhasha me hai.

## Dhyaan do: "Blender jaisa" ka matlab 3D nahi hai

Blender/After Effects wale videos "real" isliye lagte hain kyunki wahan ke artist ye cheezein default karte hain — aur ye sab **2D code me bhi 100% possible** hai. 3D to sirf ek style hai; *quality* in 7 cheezon se aati hai:

| # | Real lagne ki wajah | Cheap pehchan (isme phasoge to fail) | Hamara fix |
|---|---|---|---|
| 1 | **Easing** — har move accelerate/decelerate | Linear / default ease sab jagah same | `bezier(0.16,1,0.3,1)` + springs (docs/04) |
| 2 | **Camera** — frame hamesha halka move | PowerPoint jaise chipke frames | `CameraRig` slow push-in har scene |
| 3 | **Timing/hierarchy** — stagger, holds, ek focal point | Sab ek saath, text flash hoke gayab | 0.09/0.22s stagger; ≥1s holds; ≥2s final |
| 4 | **Texture** — grain, vignette, glow, depth | Flat saaf vector, sticker feel | `Stage`: grid drift + grain 0.07 + vignette |
| 5 | **Sound** — move ke saath awaz | Khamoshi ya last me chipki music | Frame-exact SFX, −14 LUFS (docs/08) |
| 6 | **Continuity** — object travel, motivated transition | Har scene naya template | Persistent object + match cuts (docs/07) |
| 7 | **Typography & space** — bada type, saans (whitespace), ek accent | Chhota text, kenare chipka, rainbow colors | Type scale, 6% safe area, ek coral accent |

## FPS/render quality bhi "feel" hai

- 60fps pe kinetic type ka render hi "premium" signal hai; 30fps bhi theek hai par motion blur-free fast moves judder karte hain — fast move chahiye to ya speed ghatao ya 60fps rakho.
- Final hamesha full resolution + CRF 18 ke aas-paas. Draft preview dekh ke quality judge mat karo — preview browser me live hai, final MP4 frame-rendered hota hai.

## "AI-slop/template" pehchanein (inse bacho)

- Stock template jaisi generic transitions har cut pe (wipe-star-zoom ka mela)
- Har shabd pe bounce/elastic
- Gradient text + heavy drop shadow + glow sab ek saath
- Emojis aur clip-art se bhari screens (ek scene ek visual idea)
- Bina wajah 3D ghumti cheezein
- Music itna tez ki SFX/voice dab jaye

## Final se pehle ki 10-point quality gate

1. Frame 0 hi thumbnail layak hai? (black/khali to fail)
2. Ek bhi linear- lagne wala move hai?
3. Sab readable text ko apna hold mila?
4. Phone (360px) pe key message padha jata hai?
5. Kabhi 2 focal points ek saath to nahi?
6. Transitions 2–3 types se zyada to nahi? Koi motivated hai?
7. Camera har scene me zinda hai?
8. SFX har bade move pe, frame-exact?
9. Loudness −14 LUFS, peak ≤−1?
10. Akhir ke 2s me payoff/CTA aram se padha jata hai?

Ek bhi "nahi" = final nahi, draft fix hoga. (Checklist ka printable version: templates/05.)
