# 05 · FORMATS, FPS & EXPORT SPECS

## Format cheat-sheet (jo hum banate hain)

| Format | Size | FPS | Kahan | Duration sweet-spot |
|---|---|---|---|---|
| **16:9 landscape** | 1920×1080 | 60 (kinetic/UI), 30 (talking/data) | YouTube, website hero, presentations | 30s–3min (agent videos ≤60s best रहते hain bina thakaye) |
| **9:16 vertical** | 1080×1920 | 30 | Shorts, Reels, TikTok | 15–45s (core 30s pe banao) |
| **1:1 square** | 1080×1080 | 30 | X/LinkedIn/feed posts | 10–30s |
| **4:5 portrait** | 1080×1350 | 30 | Instagram feed | 10–30s |
| **16:9 4K** | 3840×2160 | 30/60 | Sirf jab client maange | render time 4×, pehle 1080p approve karo |

Ek hi composition ko dusre size pe nikalna hai to naya layout sochna padta hai — sirf crop "chalta hai" wali soch cheap lagti hai. Portrait me text bada, stack vertical, safe zones alag.

## FPS ka faisla

- **24fps** — cinematic narrative (motion blur ke saath hi achha lagta hai; hamare liye rare)
- **30fps** — web/Shorts standard, render fast, file halki
- **60fps** — kinetic type, UI, data — "butter" feel; render time ~2×
- Timing seconds me likha hai isliye fps badalna safe hai: `durationInFrames = seconds × fps`. Preview 30 pe karke final 60 pe nikal sakte ho.

## Safe zones (crop/UI se bachao)

- Har format me edge se **≥6%** andar important content (~60px @1080).
- **9:16 extra dhyaan:** upar ~12% aur neeche ~18–20% platform UI (caption, buttons, progress) kha jata hai. Captions neeche wale zone ke UPAR rakho (hamare ShortHook me captions bottom se 265px upar hain).
- Phone test har final se pehle: frame ko 360px wide shrink karke dekho.

## Export settings (final MP4)

```bash
# Remotion default render (H.264, high quality)
npx remotion render src/remotion/index.ts <Id> out/<name>.mp4
# fast draft (review ke liye)
npx remotion render src/remotion/index.ts <Id> out/draft.mp4 --scale=0.5 --crf=28
# ek frame ka still (thumbnail / quick check)
npx remotion render ... still  →  npm run still
```

- Codec: **H.264 (MP4)** web/social ke liye; editor me jaana hai to ProRes / alpha (ProRes 4444 ya WebM alpha) alag se.
- CRF: 18 = bohot high quality (default ke aas-paas), draft ke liye 28. YouTube/Shorts upload ke liye CRF 18 + kam se kam 8–12 Mbps effective bitrate rakho.
- Audio: AAC 256kbps, **−14 LUFS integrated, true peak ≤ −1 dBFS** (YouTube/Shorts normalization ke hisaab se sur safe rehta hai).
- `+faststart` (moov atom aage) — web pe turant play.
- File naam: `<production-id>-<slug>-<format>-v<n>.mp4` e.g. `001-cheap-video-9x16-v2.mp4`. Version kabhi overwrite mat karo bina number badhaye — review trail rehti hai.

## Duration ↔ script length (voice ho to)

~150 words/minute bolne ki speed → **30s ≈ 75–85 words, 60s ≈ 140–150 words**. Text-only video me reading holds script se zyada important hain: ek screen pe 3–7 shabdon se zyada ek saath mat rakho (docs/04 §4).
