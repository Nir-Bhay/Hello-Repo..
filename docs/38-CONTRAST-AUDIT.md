# Contrast Audit — Rangon ka Hisaab (WCAG)

Rang “acha lagta hai” se nahi, **hisaab** se pass hota hai. Neeche ASI05 palette (`asi05v3/theme.ts`) aur landing (`src/landing.css`) ke asal jode WCAG formula se gine gaye hain. (Backlog C83.) AA = normal text 4.5:1 · large text (≥24px, ya bold ≥18.66px) 3:1.

## ASI05 video ke jode (canvas: paper #F4F1E9)

| Text / upar | Neeche | Ratio | Natija |
|---|---|---|---|
| Ink #142B3A | Paper | **12.95:1** | ✅ Har size pass |
| Blue #42698D | Paper | 5.12:1 | ✅ Pass |
| Red #B34431 (attacker) | Paper | 4.91:1 | ✅ Pass |
| Green #48765E (boundary) | Paper | 4.62:1 | ✅ Pass (bareek — isse halka mat karo) |
| Ink #142B3A | Pale blue #A6BFD2 | 7.66:1 | ✅ Pass |
| White #FFFDFA | Blue #42698D | 5.69:1 | ✅ Pass |
| Muted #66727C | Paper | 4.36:1 | ⚠️ AA-normal se **thoda neeche** — sirf bade/decorative text tak rakho; chhota zaroori text ink/blue me rakho |
| Ochre #B09164 ("Next: ASI04", 44px) | Paper | 2.63:1 | ❌ **Large text (3:1) se bhi neeche** — neeche finding dekho |

## Landing ke jode (panel #12121a)

| Text / upar | Neeche | Ratio | Natija |
|---|---|---|---|
| Paper #f4f1ea | Panel | **16.52:1** | ✅ |
| Muted #9b97a3 | Panel | 6.52:1 | ✅ |
| Accent #ff5c38 (tags) | Panel | 6.07:1 | ✅ |
| Safed text | Accent button #ff5c38 | 3.07:1 | ❌ Tha — **fix ho gaya** (neeche) |

## Findings aur kya kiya

1. **Landing buttons (fix ho gaya, isi PR me):** safed text coral `#ff5c38` par sirf 3.07:1 tha. Dono buttons (`.download-btn`, `.walkthrough-btn`) ka background gehara kiya: **`#c93e1f` → 5.01:1 ✅**. Accent ka baaki istemal (tags, headings) waisa ka waisa hai — button ki pehchan nahi badli, sirf uska rang gehra hua.
2. **“Next: ASI04” ochre (open finding, jaan-boojh kar ASI05 me haath nahi lagaya):** 44px par bhi 2.63:1 kamzor hai. Lekin ASI05 ka palette aur final render **locked** hai — band file me rang badalna bina review ke galat hoga. **Sifaarish ASI04 ke liye:** “Next:” line ke liye ochre ka gehra roop ya ink-weight istemal ho, aur ye audit uski storyboard jaanch ka hissa bane (C55). ASI05 ke baare me daava sirf itna hai: shabd aakar aur weight ki wajah se padha jata hai, contrast se pass **nahi** hai — ye sach yahan likh diya gaya hai.
3. **Muted ASI05 (niyam banaya):** 4.36:1 ko “pass” nahi kaha jayega. Aage ke episodes me muted sirf bade ya ghair-zaroori text ke liye; jo padhna zaroori hai wo ink/blue/red me.

## Tareeka (dobara ginna ho to)

Relative luminance (WCAG): har channel ko linear karke `L = 0.2126R + 0.7152G + 0.0722B`, phir ratio `(L1 + 0.05) / (L2 + 0.05)`. Naye rang jodne se pehle uske saare text-jode yahan gino — “lagbhag chalega” is file me pass nahi hai.

Aur padho: [`docs/22-ACCESSIBILITY-AND-MOBILE-QA.md`](22-ACCESSIBILITY-AND-MOBILE-QA.md) · [`docs/28-NEXT-EPISODES-ART-DIRECTION.md`](28-NEXT-EPISODES-ART-DIRECTION.md)
