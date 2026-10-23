# 00 · START HERE — Hello Motion Studio

Ye repo ek **motion-graphics production workspace** hai. Kaam ek line me:
**Story (aap doge) → Document (script + storyboard) → Code (Remotion) → MP4 (30/60fps) → Review (aap).**

## Abhi repo me kya-kya ready hai

| Cheez | Kahan | Kaam |
|---|---|---|
| Live preview landing page | `src/App.tsx` — `npm run preview` | Har video real-time browser me dekho, scrub karo |
| Demo compositions (3) | `src/remotion/compositions/` | 16:9 kinetic (60fps), 9:16 hook-short, 1:1 data-story |
| Motion library (taste) | `src/remotion/lib/` + `components/` | Easing, springs, stagger, grain, camera, captions — reusable |
| Research + rules | `docs/01` … `docs/11` | Kyun, kaise, kya numbers — sab saved |
| Production templates | `templates/` | Brief, script/hook, storyboard/shot-list, timeline, review checklist |
| Future videos ki jagah | `productions/001-<slug>/` | Har video ka pura paper-trail + code ek folder me |
| Agent ke liye rules | `../AGENTS.md` (repo root) | Main (agent) har video se pehle ye padhta hun |

## Commands (cheat-sheet)

```bash
npm install          # pehli baar
npm run preview      # landing page + live player  → http://localhost:5173
npm run studio       # Remotion Studio (frame-by-frame) → http://localhost:3001
npm run typecheck    # TS errors check
npm run still        # ek frame PNG (quick visual check)
npm run render:showcase   # 1920x1080 60fps MP4 → out/
npm run render:short      # 1080x1920 30fps MP4
npm run render:data       # 1080x1080 30fps MP4
npm run render:draft      # aadha size, fast draft (review ke liye)
```

Render ke liye machine pe **Node 20+** chahiye; Remotion pehli render pe apna Chromium khud download kar leta hai. Final mux/loudness ke liye `ffmpeg` (docs/08).

> **Is sandbox ki note:** yahan outbound net sirf GitHub/npm/PyPI ko hai, isliye Chromium download yahan fail hua (verify kar liya hai). **TSC + Vite build bilkul saaf hai** — teeno compositions compile hoti hain. Aapki machine / normal net pe `npm run render:*` bina kuch kiye chalega. Agar kabhi restricted net pe render karna pade to system Chrome de do: `npx remotion render ... --browser-executable=/path/to/chrome`. Browser me **live preview (npm run preview) ko Chromium download ki zarurat hi nahi** — wo aapke browser me chalta hai.

## Aapko kya karna hai — bas itna

1. Preview kholo, teeno demo dekho (feel samajh aa jayega kya ban sakta hai).
2. Jab ready ho, **ek story do**: duration (20s/30s/60s), type (Short 9:16 ya YouTube 16:9), bolna hai ya sirf text/music, koi brand color/font ho to wo.
3. Main pehle `productions/` me **document** banaunga (research → hook → script → frame-by-frame storyboard). Aap review/approve karoge.
4. Phir video build + draft render → aap dekhoge → fix → **final MP4**.

Voice chahiye to API key lagegi (ElevenLabs/OpenAI TTS — docs/08), bina voice wale videos ke liye kuch nahi chahiye: captions + sound-design hi kaafi hota hai.

## Golden rules (poori detail docs/04 + docs/09 me)

1. **Kabhi linear motion nahi** — easing `bezier(0.16,1,0.3,1)`, springs physical feel ke liye.
2. **Timeline pehle, code baad me** — har beat seconds me lock; picture/caption/sound ek hi timeline padhte hain.
3. **Ek accent color, ek focal point, ek hero moment** per video.
4. **Pehle document, phir video** — bina approved storyboard ke render nahi.
5. **Review bina "done" nahi** — draft ke frames check kiye bina final nahi bolenge.
