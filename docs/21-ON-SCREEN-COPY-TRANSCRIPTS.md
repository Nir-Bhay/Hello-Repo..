# On-Screen Copy Index — Har Video ke Exact Shabd

Ye page har video ke **exact on-screen shabdon** ki ek jagah wali soochi hai — taaki koi bhi shabd badle to yahan, walkthrough me, aur code me teeno jagah pakda ja sake.

> Notation: ASI05 me **`/` ka matlab hai line break** — slash screen par render nahi hota. Frame numbers 60 FPS par hain.

---

## ASI05 — The Repair That Ran (Premium) · Locked Ledger

Source of truth: Director's Bible v2 + [`04-v2-rebuild-plan.md`](../productions/002-asi05-the-repair-that-ran/04-v2-rebuild-plan.md). In shabdon ko badalna hai to pehle document badlo, phir review, phir code.

| Shot | Frames | Exact on-screen copy |
|---|---|---|
| S01 | 0–299 | Fix the / failing test. |
| S02 | 300–599 | EXTERNAL REPORT · Test failed. · OUTSIDE INPUT (flap par) |
| S03 | 600–959 | Run this / repair first. · Added by / an attacker. (sirf viewer ke liye) |
| S04 | 960–1319 | The agent / writes code. · repair.py · NEW SCRIPT · From external report. |
| S05 | 1320–1649 | RUN · RUNNING (sirf press ke baad, f1440) · Then runs it. |
| S06 | 1650–2009 | Read project / secret (f1692) · Send outside (f1800) |
| S07 | 2010–2339 | A secret leaves / the workspace. (receipt f2130 ke baad hi, f2166) |
| S08 | 2340–2579 | ASI05 · Unexpected Code / Execution |
| S09 | 2580–2819 | Replay · Same code. / Restricted / workspace. |
| S10 | 2820–3179 | No secrets inside. (f2868) · Outside / connections blocked. (f3042; shutter f3030 par band) |
| S11 | 3180–3449 | The code / still runs. (RUNNING f3270) |
| S12 | 3450–3749 | Secret access / denied. (contact f3510, verdict f3522) |
| S13 | 3750–3989 | CONNECTION / BLOCKED (contact f3792, verdict f3810; packet khaali) |
| S14 | 3990–4289 | Generated code / is untrusted. → (poora gayab f4146) → Limit what / it can reach. (f4149) |
| S15 | 4290–4499 | RACTOR · Cybersecurity, explained. · Next: ASI04 |

**Forbidden copy (kabhi nahi):** “test passed”, script par safe/green tick, “Next: ASI05” ya koi aur galat next label, RUN se pehle RUNNING, asli code/credential/URL.

Poora walkthrough: [`productions/002-asi05-the-repair-that-ran/05-walkthrough.md`](../productions/002-asi05-the-repair-that-ran/05-walkthrough.md)

## P001 — ChatGPT × Google Connect

Source: [`02-script.md`](../productions/001-chatgpt-google-connect/02-script.md) (wahi table video me bani hai).

| Time | Exact on-screen text |
|---|---|
| 0:00–0:04.5 | ChatGPT ab tumhara GMAIL bhi padhega! |
| 0:04.5–0:10 | Ruko. Purane wale Plugins band ho chuke. Ab ye Settings → Plugins me milta hai. |
| 0:10–0:22 | Connect karna = 4 steps: 1 Settings kholo · 2 Plugins/Apps · 3 Gmail chuno · 4 Connect → Google pe Allow |
| 0:22–0:31 | Gmail jud gaya to? — “Aaj ke important mail batao” · “Iska reply draft karo” |
| 0:31–0:41 | Drive: “Meri report dhundo, summary do” · Calendar: “Kal mera din kaisa hai?” |
| 0:41–0:46 | Ek dhyaan: Permission padh ke Allow karo. Disconnect kabhi bhi, Settings se. |
| 0:46–0:50 | ChatGPT = sirf chat nahi, tumhara Assistant. Pehle Gmail try karo. Save kar lo! |

## Demo Compositions (code hi source hai)

### ShowcaseKinetic — `src/remotion/compositions/ShowcaseKinetic.tsx`

- Header: `HELLO MOTION STUDIO` · `60 FPS · CODE → VIDEO`
- Headline: `MOTION IS THE message.`
- `NO TIMELINE · NO KEYFRAMES · ONLY CODE`
- `VIDEO CHEAP KYUN NAHI LAGEGA — 3 RULES`
- `01 Easing` — Kabhi linear nahi. / Har move accelerate → settle.
- `02 Stagger` — Sab ek saath nahi. / 0.09s rhythm se aankh guide hoti hai.
- `03 Hold` — Pehle padhne do. / Readable state >= 1s rukta hai.
- `60 fps` · har frame code se. **zero guesswork.**
- `STORY DO · VIDEO READY`
- `CODE → VIDEO` · motion graphics, production-ready.

### ShortHook — `src/remotion/compositions/ShortHook.tsx`

- `MOTION DESIGN · PART 1`
- Video / **CHEAP** / kyun lagta / hai?
- Captions (0–3.1s): Video CHEAP kyun lagta hai?
- 3 galtiyan. 15 second me fix.
- `Ye 3 galtiyan 👇` → (7s ke baad) `Fix sirf ye hai 👇`
- `01 Linear motion` · `02 Sab ek saath` · `03 No sound design`
- sound off hai? captions phir bhi bolenge. → easing + stagger + ek whoosh. bas.
- `PAYOFF` · Ab lagega *real.*
- Part 2 ke liye save karo →
- Captions (12s+): Ab lagega REAL.

### DataStory — `src/remotion/compositions/DataStory.tsx`

- `CASE STUDY · 30 DIN`
- Ek system. / *Har hafte growth.*
- Bar labels: `W1` `W2` `W3` `W4` `W5`
- Hero number (settled): `128K` · views · 30 din me
- `STORY → SCRIPT → VIDEO` · `HELLO MOTION STUDIO`

> Demo compositions ke count-up numbers (60, 128K) chalte hue badalte hain — upar unki **settled (antim)** value likhi hai.

## Badlav ka niyam

Koi shabd yahan, walkthrough me, aur code me **teeno jagah ek saath** badlega — aur ASI05 ke liye pehle Bible/document ka review hoga. Sirf ek jagah badla hua shabd bug hai; issue kholo (Documentation template).

Aur padho: [`docs/17-WALKTHROUGHS-index.md`](17-WALKTHROUGHS-index.md) · [`docs/20-GLOSSARY-cybersecurity.md`](20-GLOSSARY-cybersecurity.md)
