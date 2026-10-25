# 06 · SVG, SHAPES & PATHS — Vector hi Motion Graphics ki Bhasha hai

## Kyun SVG

Video ke andar ki lagbhag har "graphic" cheez — line, arrow, chart, icon, underline, mask — vector hai. SVG ka matlab: kisi bhi size pe crisp, code se path badal sakte ho, aur **path ko animate** kar sakte ho (draw hona, morph hona). Raster image ye nahi kar sakti.

## 4 core techniques (hamare components me ready)

### 1. Draw-on (stroke-dashoffset) — `DrawLine` component
Path khud ko kheenchta hua banta hai. Diagrams, underline, trend-line, signature ke liye.
```tsx
<path d="M4 20 C 260 4, 520 34, 880 12" pathLength={1}
      strokeDasharray={1} strokeDashoffset={1 - progress} />
```
`pathLength={1}` rakhne se har path ki math ek ho jati hai (length naapna nahi padta). Progress hamesha `easeOut` — end pe slow hoke rukna hi "haath se kheencha" feel deta hai.

### 2. Mask / clip reveals — `MaskReveal` component
`overflow:hidden` wale dabbe ke andar se text/shape slide-up. Kinetic type ki pehchan. Shape ke liye `clipPath` se wahi trick: circle/rect clip badhta hai to image "wipe" nahi, **reveal** hoti hai (motivated lagti hai).

### 3. Shapes library — `@remotion/shapes`
Circle, rect, triangle, star, polygon ke path ready-made milte hain (`makeCircle`, `makeStar`…) jo SVG path string dete hain — unhe bhi draw-on/morph me use kar sakte ho. Custom logo/icon ho to path kisi vector tool (Figma/Illustrator) se export karke `public/` ya component me rakho; haath se path likhna sirf simple curves ke liye.

### 4. Morph & transforms
Ek hi `<g>` pe `transform: translate/scale/rotate` frame se drive karo — shape ka camera ke saath travel hi continuity hai. Do alag paths ke beech asli morph chahiye to same point-count rakho, warna crossfade + scale se "morph illusion" banao (zyada reliable).

## SVG ke andar "video jaisi" cheezein

- **Path pe chalta dot/marker:** `getPointAtLength` jaisa effect frame math se — line draw hoti hai aur uske end pe ek dot travel karta hai = chart "jeeta" hai.
- **Dashed march:** `strokeDashoffset` ko time ke saath linear ghumao — sirf yahan linear allowed (continuous motion).
- **Hand-drawn boil:** halka sa path jitter har 2–3 frame pe (seeded) — perfect vector ko sketch feel. Zyada kiya to cartoon, kam kiya to "human touch".
- **Glow filter:** `feGaussianBlur` merge ya CSS `drop-shadow` — accent shape pe hi, sab pe nahi.

## Rules

- Stroke widths aur corners (`strokeLinecap="round"`) har jagah consistent — ad-hoc values design ko bikhra dete hain.
- SVG viewBox hamesha rakho; bina viewBox ke sizes render machine pe badal jate hain.
- Bahut saare SVG nodes = slow render. Ek frame me hazaaron points hai to use canvas/`OffthreadVideo` me pre-render socho.
- Icon chahiye to pehle dekho — simple geometric icons (play, check, arrow, chart) haath ke shapes se ban jate hain; brand logos sirf official SVG se.

## Images/photos ka istemal

`public/` me rakho, `staticFile()` se bulao, `<Img>` component use karo (render delay handle karta hai). Photo static hai to use bhi motion do: slow Ken Burns (scale 1→1.08, easeInOut) — docs/04 ki "kuch dead-still nahi" ka photo version.
