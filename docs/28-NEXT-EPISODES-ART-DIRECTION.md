# Art Direction — Agle Episodes ke Covers & Storyboards

ASI series ke agle episodes (ASI04 se aage) ke liye visual niyam, taaki har cover/storyboard ek hi parivaar ka lage aur koi episode apni alag duniya na bana le.

## Palette & material (lock)

- Rangon ka source: `src/remotion/compositions/asi05v3/theme.ts` — paper background, ink, blue, pale blue, muted, **ek hi restrained red accent**, green sirf boundary hardware par (kabhi script/agent par nahi).
- Material: layered tactile paper, soft shadows, saaf hairline borders. HUD, glitch, neon — **kabhi nahi**.
- Generated images me **readable text bilkul nahi** — AI text hamesha gibberish banta hai. Jo likhna hai (title, labels) wo code/type se lagega, image ke andar nahi.

## Cover image ke niyam (har episode ek)

| Niyam | Kyon |
|---|---|
| Ek hi kahaani-pal cover par (jaise ASI05 ka robot + key + shutter) | Cover episode ka ek-frame wala trailer hai |
| Central composition, kinare khaali | Landing card 4:3 crop karta hai; 9:16 poster me bhi safe rahe |
| Laal sirf ek jagah — khatre/attacker ki taraf | Laal ka matlab har episode me ek hi ho |
| Key/secret hamesha ek hi design ka | Devotee viewer use pehchane; copy banne par wahi chhota roop |
| File: `public/images/walkthroughs/<episode>-cover.jpg` | Naam se hi pata chale kis guide ki hai |

## Storyboard ke niyam (video se pehle)

1. **Pehle documents:** brief → script → storyboard → timeline, user review ke baad hi code. (Process: `docs/10-STORY-TO-VIDEO-pipeline.md`)
2. Har shot ka ek **focal owner** — ek samay par aankh ek hi jagah.
3. Sabse mushkil harkat (handoff, copy-flight, press, denial contact) pehle **proof** bane; poora episode uske baad.
4. Har shot ke saath: frame range · exact on-screen copy · contact frame (kis frame par cheez takrati/dabti hai) · camera hold.
5. Forbidden states ki list storyboard ke saath hi likhi jaye — ASI05 ki list `productions/002-asi05-the-repair-that-ran/05-walkthrough.md` me hai, wahi template hai.

## Naam & jagah

- Production folder: `productions/<nnn>-<episode>-<slug>/` (brief, script, storyboard, walkthrough, transcript, notes — convention `productions/README.md` me).
- Composition id: episode naam se (`Asi04...`), `Root.tsx` me duration/fps ke saath.
- “Next:” label hamesha countdown ke hisaab se verify karo — ASI05 ka hai **Next: ASI04**; ulta likhna sabse aasan aur sabse buri galti hai.

Aur padho: [`docs/20-GLOSSARY-cybersecurity.md`](20-GLOSSARY-cybersecurity.md) · [`docs/18-CONTRIBUTION-BACKLOG-50.md`](18-CONTRIBUTION-BACKLOG-50.md) (C41: ASI04 brief — story user se confirm hone ke baad)
