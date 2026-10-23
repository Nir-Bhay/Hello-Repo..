# 08 · AUDIO — Voice, Music & Sound Design

> Sach: **sound design hi sabse sasta "real" feel hai.** Ek sahi whoosh/pop animation ko dimaag me "physical" bana deta hai. Silent motion graphic aadha lagta hai — jab tak ki captions+music jaan-bujh ke design na kiye hon.

## Teen audio routes (video ke hisaab se chunte hain)

### Route A — No voice (text + music + SFX)
Shorts/kinetic ke liye best. Zarurat: background music (licensed/royalty-free ya generated) + chhoti SFX (whoosh, pop, click, riser, impact). Do tareeke:
1. **Procedural synth (claude-motion style):** Python se hi sounds banana — koi license nahi, timeline ke exact frame pe hit. Hamara plan pehle real production pe ye engine (`sfx/` jaisa) vendor/add karna hai.
2. **Stock SFX library:** user ke paas licence ho to; time-stamps timeline se milate hain.

### Route B — AI voiceover (API key user dega)
1. Script finalize (docs/10) → TTS API (ElevenLabs sabse natural, OpenAI TTS sasta/fast) se MP3/WAV.
2. Audio ki **asal duration** hi video ki duration tay karti hai — `calculateMetadata` se composition length audio se auto-set hoti hai.
3. Whisper se **word-level timestamps** → captions (Route C ke saath).
4. Voice ke neeche music −18…−22 dB duck, SFX sirf bade moves pe.

### Route C — Captions (lagbhag har video me)
- Word-by-word highlight captions retention ke liye proven hain (hamara `CaptionLine`).
- Audio se bane to `@remotion/captions` ka `createTikTokStyleCaptions()` — words ko "pages" (1–4 shabd) me group karta hai; page ki pacing hi style hai.
- Mute-first test: bina awaz ke poori baat samajh aani chahiye.

## SFX placement ke niyam

- Har badi entrance pe halka whoosh/pop, hero moment pe impact + riser usse pehle.
- SFX timeline ke beat pe **frame-exact** baithna chahiye; 3–4 frame late = "dubbed" feel.
- Ek scene me 2–3 SFX se zyada = shor. Sabse bade move ko hi awaz do.
- Typing hai to typing sound, counter hai to tick — awaz visual ko *samjhaye*, sirf sajaye nahi.

## Mixing / mastering targets

| Cheez | Target |
|---|---|
| Integrated loudness | **−14 LUFS ±1** (YouTube/Shorts/IG standard zone) |
| True peak | ≤ **−1 dBFS** |
| Music under voice | voice se 18–22 dB neeche |
| Final audio codec | AAC 256kbps (MP4 me mux) |

Mux (render silent video + alag WAV):
```bash
ffmpeg -y -i out/<name>-silent.mp4 -i public/<name>.wav \
  -map 0:v -map 1:a -c:v copy -c:a aac -b:a 256k \
  -movflags +faststart -shortest out/<name>.mp4
```
Check: waveform pe har badh SFX beat-line pe baitha hai; loudness report bina dekhe final nahi.

## Kab kya lagega — user ke liye seedha

- **Bina API key:** text + captions + (music/SFX library ya synth) — poora video ban sakta hai.
- **API key ke saath:** natural voiceover + auto captions + voice-synced timing — YouTube/explainer ke liye best.
- **User apni awaz record kare to:** recording do, main Whisper se captions + timing nikal ke usi pe graphics saja dunga.
