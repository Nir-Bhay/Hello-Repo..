# Productions — Har Video ki Apni Jagah

Jab user story dega, yahan ek naya folder banega:

```
productions/
  001-<slug>/
    01-brief.md        templates/01 se
    02-script.md       templates/02 se (hook options + script + sources)
    03-storyboard.md   templates/03 se (frame-by-frame: camera, transition, sound)
    timeline.json      templates/04 ke pattern pe (saare beats seconds me)
    notes.md           review comments, kya fix hua, versions ka hisaab
  002-<slug>/
    ...
```

Uske corresponding code `src/remotion/compositions/` me jayega aur `Root.tsx` me register hoga
(ek production = ek `<Composition>` id, e.g. `P001<Slug>`).

Final videos `out/` me versioned naam se: `001-<slug>-9x16-v1.mp4` → revision pe `v2` (purana kabhi delete/overwrite nahi).

Process ki poori detail: `docs/10-STORY-TO-VIDEO-pipeline.md`. Pehla gate: **user ka document approval**. Dusra gate: **final video review**.
