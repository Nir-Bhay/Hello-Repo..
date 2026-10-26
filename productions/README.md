# Productions — Har Video ki Apni Jagah

Jab user story dega, yahan ek naya folder banega:

```
productions/
  001-<slug>/
    01-brief.md        templates/01 se
    02-script.md       templates/02 se (hook options + script + sources)
    03-storyboard.md   templates/03 se (frame-by-frame: camera, transition, sound)
    04-walkthrough.md  video ke saath padhne wali shot-by-shot guide (neeche dekho)
    timeline.json      templates/04 ke pattern pe (saare beats seconds me)
    notes.md           review comments, kya fix hua, versions ka hisaab
  002-<slug>/
    ...
```

Uske corresponding code `src/remotion/compositions/` me jayega aur `Root.tsx` me register hoga
(ek production = ek `<Composition>` id, e.g. `P001<Slug>`).

Final videos `out/` me versioned naam se: `001-<slug>-9x16-v1.mp4` → revision pe `v2` (purana kabhi delete/overwrite nahi).

Process ki poori detail: `docs/10-STORY-TO-VIDEO-pipeline.md`. Pehla gate: **user ka document approval**. Dusra gate: **final video review**.

## Walkthrough convention (naya, backlog C07)

Har production ke saath ek **walkthrough** bhi banti hai — taaki viewer sirf video na dekhe, uske saath baith kar samjhe bhi ki kya ho raha hai aur kyon.

- File: sabse agla khaali number + `-walkthrough.md` (jaise `04-walkthrough.md`, `05-walkthrough.md`).
- Har walkthrough me: one-line lesson · causal chain · shot-by-shot table (time/frame/copy) · pause points · forbidden states · code map · review questions · honest status.
- Cover image: `public/images/walkthroughs/<production>-cover.jpg` — palette ke andar, bina gibberish text ke.
- Saari walkthroughs ka index: [`docs/17-WALKTHROUGHS-index.md`](../docs/17-WALKTHROUGHS-index.md)
- Aage ke genuine kaam ki list: [`docs/18-CONTRIBUTION-BACKLOG-50.md`](../docs/18-CONTRIBUTION-BACKLOG-50.md)

## Current productions

| # | Production | Format | Final file | Walkthrough |
|---|---|---|---|---|
| P001 | ChatGPT × Google Connect | 50s · 9:16 · 30 FPS · sound | `001-chatgpt-google-connect/001-chatgpt-google-9x16-v1.mp4` | `001-chatgpt-google-connect/04-walkthrough.md` |
| 002 | ASI05 — The Repair That Ran (Premium) | 75s · 9:16 · 60 FPS · silent | `002-asi05-the-repair-that-ran/002-asi05-premium-9x16-v1.mp4` | `002-asi05-the-repair-that-ran/05-walkthrough.md` |
