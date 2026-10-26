# Good First Issues — Naye Contributor ke Liye 10 Chhote, Asli Kaam

Ye list unke liye hai jo is repo me **pehli baar** kuchh karna chahte hain. Har kaam chhota hai, akela review ho sakta hai, aur sach me kaam ka hai — “pehla commit” ke naam par khaali badlav ek bhi nahi.

> Shuru karne se pehle: [`CONTRIBUTING.md`](../CONTRIBUTING.md) · Har issue ke saath uska acceptance likha hai — wahi “ho gaya” ka matlab hai.

| # | Kaam | Size | Files | Acceptance |
|---|---|---|---|---|
| G1 | Landing ke footer me walkthrough index ka link jodo | XS | `src/App.tsx` | Footer se `docs/17` tak ek click; build saaf |
| G2 | `docs/22` ki keyboard-only checklist sach me chalao aur natija bhardo | S | `docs/22-ACCESSIBILITY-AND-MOBILE-QA.md` | Har box par pass/fail + browser ka naam; fail ho to Bug issue |
| G3 | 390px mobile par landing ke screenshots lekar `docs/22` me saboot jodo | S | `docs/22...` + PR attachments | Teen widths (360/390/430) par horizontal scroll nahi — screenshot saboot |
| G4 | ASI05 ke saare 19 review anchors ki contact sheet banao | S | `scripts/extract-frames.mjs` (chalana hai, badalna nahi) | Anchors walkthrough ki table se; sheet PR me lagi ho; ek bhi forbidden state dikhe to Unclear/Bug issue |
| G5 | P001 ki technical report production notes me darj karo | XS | `scripts/verify-video.mjs`, `productions/001-chatgpt-google-connect/notes.md` | Report me codec/size/fps/frames/duration; expected se match |
| G6 | Prettier pilot: sirf `src/data/walkthroughs.ts` ko `.prettierrc.json` se format karke diff dikhao | S | Ek file | Diff sirf formatting ka; `npm run lint` phir bhi saaf; pasand aaye to baaki files ka alag PR bane |
| G7 | CONTRIBUTING me “15 minute me pehla PR” quickstart jodo | S | `CONTRIBUTING.md` | Naya banda bina puche clone→check→chhota badlav→PR tak jaye; saare commands sach me chalte hon |
| G8 | Walkthrough ke liye template banao (`templates/07-walkthrough.md`) | S | `templates/` | Template me lesson/chain/shot-table/pause-points/forbidden/code-map/status — saare hisse; maujooda do walkthroughs se match |
| G9 | `Root.tsx` ke comments ko ek hi bhasha-shaili (Hinglish) me ekroop karo | XS | `src/remotion/Root.tsx` | Sirf comments badle; `npx tsc --noEmit` saaf; koi id/duration na badle |
| G10 | ASI05 premium ka verify-video saboot walkthrough ke status me jodo | XS | `productions/002-asi05-the-repair-that-ran/05-walkthrough.md` | Ek line: command + natija (1080×1920, 60fps, 4500f, 75.00s) taaki daava saboot ke saath rahe |

## Kaam chunne ka tareeka

1. Jo sabse zyada samajh aaye, wahi pehle — G1/G5/G9 sabse halke hain.
2. Issue par apna naam/task ID likhkar shuru karo taaki do log ek hi kaam na pakdein.
3. PR me acceptance ko ek-ek karke tick karo. Kuchh fail ho to sakoch nahi — wahi asli jaankari hai.

Poora backlog: [`docs/18-CONTRIBUTION-BACKLOG-50.md`](18-CONTRIBUTION-BACKLOG-50.md)
