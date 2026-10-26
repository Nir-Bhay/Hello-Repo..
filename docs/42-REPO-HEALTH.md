# Repo Health — 26 Oct 2026 (T152)

Ek nazar me repo ki sehat. Har number is din **sach me jaanch karke** likha hai; jo nahi jaancha, wo “nahi jaancha” likha hai.

## Scoreboard

| Cheez | Haal | Saboot |
|---|---|---|
| Open PR | #11 (Next-75 Batch A) | GitHub |
| Open issues | #5–#9 (isi PR me implement; merge par band) | GitHub |
| Internal links | Saare OK (`npm run check:links`; templates/ bhi scope me hai — T146: checker pehle se poora repo ghoomta hai, templates skip nahi hota) | release:check |
| TypeScript / lint / build | Pass | release:check |
| Assets | 34.76 MB / budget ke andar | `report:assets` |
| Landing JS | Initial chunk **235 KB** raw (code-split ke baad; pehle 626 KB ek hi chunk tha) · lazy player chunk 391 KB alag · budget: initial 300 / kul 700 KB | `npm run report:bundle` (scripts/report-bundle.mjs) |
| Secrets scan (T154) | API-key/private-key patterns ki grep khoj — **koi match nahi mila** | 26 Oct ko chalaya gaya |
| out/ policy (T153) | `out/` gitignored hai; renders wahi rehte hain, repo me nahi ghus te | docs/36 |

## Finding 1 — Landing ek hi bada JS chunk hai (T147)

`index-*.js` kabhi 626 KB raw ka ek hi chunk tha. **Sudhaar ho gaya (issue #12):** Remotion Player + compositions ab `DemoStage` lazy chunk (391 KB) me hain, aur player Lab ke paas aane par hi mount hota hai. Initial chunk **235 KB** hai. Budget: initial 300 KB / kul 700 KB — isse upar badhe to pehle ticket kholo, chupchaap mat badhao.

## Image audit (T148)

| File | Size |
|---|---|
| walkthroughs/motion-studio-walkthrough-cover.jpg | 230 KB |
| posters/asi05-9x16.jpg | 207 KB |
| walkthroughs/asi05-premium-cover.jpg | 164 KB |
| walkthroughs/p001-chatgpt-google-cover.jpg | 141 KB |
| posters/asi05-4x3.jpg | 131 KB |
| posters/p001-9x16.jpg | 129 KB |
| posters/p001-4x3.jpg | 116 KB |

Saari images 250 KB se neeche — abhi compression ki zaroorat nahi. 300 KB cross kare to pehle compress, phir commit.

## Jo abhi bhi khula hai (chhupana mana hai)

- CI abhi active nahi (`workflows` permission baki — docs/25).
- ASI04 story, awaaz ki recordings — user ke faisle par park (docs/41, Batch B/C).
- Real-handset normal-speed test (C90) — bina phone ke “phone par pass” nahi likhenge.

**Agli health date:** agle quarterly review (T149) par ya CI lagte hi.
