# Case Study — P001: ChatGPT × Google Connect (Pehla Asal Production)

ASI05 wali case study ki tarah, ek page me: **problem, process, saboot, seekh.** (Backlog C91.)

## Problem

Ek 50-second ki vertical video banani thi jo aam viewer ko samjhaye ki ChatGPT ab Gmail/Drive/Calendar se jud sakta hai — wo bhi us samay jab internet par purani “Plugins” wali jaankari bhari hui thi. Koi voiceover nahi tha: **screen ka text hi awaz** hona tha, isliye har line ko bolne ka nahi, *padhne* ka samay chahiye tha.

## Constraints

- 50s · 9:16 · 1080×1920 · 30fps · Shorts/Reels par mute me bhi samajh aaye.
- Sabse lambi line 6 shabd — phone par ek nazar me padhi jaye.
- Sahi aur current flow (purane Plugins band; Settings → Plugins/Apps) — sources script file me darj.
- Ek zimmedari wali line video ke beech me dab na jaye: *permission padh ke Allow karo.*

## Process

1. **Pehle documents:** brief → script (3 hook options, final chuna: payoff-first) → storyboard → timeline, phir code (`productions/001-chatgpt-google-connect/`).
2. **Khud ka review loop:** har beat ki stills render karke dekhi gayin. Pakdi gayi aur fix ki gayi asal galtiyan (production notes me darj):
   - Pehle scene ka text left se kat raha tha (CameraRig ki galti — fix poore studio ko fayda de gaya).
   - Neeche khaali jagah zyada thi — vertical balance theek kiya.
   - Ek toggle achanak gayab ho jata tha — ab settle state me rehta hai.
   - Shield khaali lag raha tha — andar check draw-on; ek galat label (“STEP 4 KE BAAD”) badla gaya.
3. **Sound bina voice ke:** procedural music (92 BPM) + timeline-locked SFX; loudness **−14.3 LUFS** par verify.

## Evidence

| Daava | Saboot |
|---|---|
| 1500 frames, 50s, 30fps | `verify-video.mjs` decode-count: h264 · 1080×1920 · 30fps · **exactly 1500 frames** (record: production `notes.md`) |
| Frame 0 kaala nahi | Review loop me frame 0 ki still dekhi — headline turant (thumbnail-ready) |
| Permission wali line dabti nahi | Script me use 5s ka hissa (0:41–0:46); walkthrough me pause-point ke saath |
| Har line padhne layak | Sabse lambi line 6 shabd; har readable state ko hold (script ke tone notes) |

## Result

- Final: `001-chatgpt-google-9x16-v1.mp4` — landing par sabse upar chalta hai; walkthrough (`04`), transcript (`05`) aur narration script (`06`) uske saath rehte hain.
- Ye repo ka **pehla** asal production tha — ASI05 ka poora process (documents → proof → frame review → locked copy) yahin ki seekh se bana.

## Seekh

1. **Text hi awaz hai to lay bhi text ki hogi** — music ki beat par nayi line, aur har line ko apna hold.
2. **Apni galti frame par pakdo.** Kat raha text aur gayab toggle render se pehle stills me dikhe — wahi “review loop” is studio ki asal quality hai.
3. **Zimmedari wali line ko jagah do.** Permission wala sandesh beech me ek line bankar guzar jata to video apna kaam aadha karta.

Aur padho: [`productions/001-chatgpt-google-connect/04-walkthrough.md`](../productions/001-chatgpt-google-connect/04-walkthrough.md) · [`docs/31-CASE-STUDY-ASI05.md`](31-CASE-STUDY-ASI05.md)
