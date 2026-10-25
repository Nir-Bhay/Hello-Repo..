# 07 · CAMERA, TRANSITIONS & CONTINUITY — Slideshow ko Film banana

## Virtual camera (hamara `CameraRig`)

Asli video me camera hamesha halka sa hila karta hai; code wale video me frame fix rehta hai — brain wahi se "ye slides hain" pakad leta hai. Isliye:

- **Slow push-in** har scene: scale `1 → 1.04–1.08` poori scene duration me, `easeInOut`. Itna slow ki dikhe nahi, mehsoos ho.
- **Punch-in cut** emphasis pe: ekdum 1→1.15 (8–12 frames) — Shorts me har naye point pe.
- **Pan** wide scenes me: translate kuch px, push-in ke saath mila ke (parallax ke liye bg aur fg alag speed pe — bg slow, fg fast = depth).
- **Rack-focus illusion:** blur ek layer se dusri pe shift (sirf badi scenes me; blur mehenga render hai).
- Camera kabhi linear nahi, kabhi achanak rukta bhi nahi — rukna hai to ease-out se.

Shot language script/storyboard me aisi likhte hain (templates/03):
`WS` wide · `MS` medium · `CU` close-up · `ECU` extreme close · `push-in` · `pan L/R` · `static (jaan-bujh ke)`.

## Transitions — kaunsi kab (sab `@remotion/transitions` me hain)

| Transition | Duration | Kab |
|---|---|---|
| Hard cut | 0 | Fast montage, beat cuts, comedy timing. Pehli 5s me dissolves mana hain (retention girta hai) |
| Fade (crossfade) | 12–20f | Shaant scene badlav, time-passage |
| Slide (directional) | 15–25f spring | Sequential content; direction hi kahani bole (aage = right→left) |
| Wipe | 15–25f | Before/after, reveal |
| Clock wipe | 20–30f | Timer/countdown wala content |
| Flip (3D) | 20–30f | Card/feature reveal |
| Zoom / punch | 8–15f | Emphasis, pattern interrupt |
| Motivated (custom) | scene ke hisaab | **Sabse best:** screen ka object hi transition bane (dot badi hoke iris, line khichke nayi scene) |

Transiton ke niyam (engine ke bhi, taste ke bhi):
- Transition pichhli/agali scene se lambi nahi ho sakti; do transitions chipke nahi aa sakte.
- **Audio transition ke hisaab se delay hota hai** — scene ka audio scene-start se nahi, transition overlap ke baad shuru karo (docs/08).
- Ek video me 2–3 se zyada transition *types* mat ghusao. Ek bhasha rakho, variations rakho.

## Continuity — "designed, assembled nahi"

- **Persistent object:** ek cheez poori video me jeeti hai — hamari compositions me header labels, coral dot, underline yahi karte hain. Darshak ki aankh use pakad ke scene-to-scene travel karti hai.
- **Match cut:** pichhli scene jis shape/position pe khatm, agli wahi se shuru (dot bada hoke naya title banta hai).
- **Color/typography continuity:** palette aur type scale poori video me ek. Naya scene = naya *layout*, naya *system* nahi.
- **Ek hero moment:** beech me ek bada payoff (iris open, number land, logo reveal). Uske pehle sab build-up hai; uske baad ≥2s hold.

## Scene likhne ka formula (har scene ke liye)

```
Purpose (ek line) → Focal point (ek hi) → Entrance (2-3 props, staggered)
→ Hold (padhne ka time) → Exit (aadha time, easeIn) → Agli scene se overlap
```
Jo scene is formula pe nahi baithta, wo ya to do scenes hai ya faltu hai.
