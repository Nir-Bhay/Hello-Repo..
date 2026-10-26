# Visual Regression Checklist — Frame Badle to Saboot Bhi Badle

Animation ka “test” yahan unit test nahi, **frame saboot** hai. Jab bhi koi composition badle, uske hero frames pehle aur baad me nikalo, aankh se dekho, aur PR me lagao. Number (4500 frames) sahi hona kaafi nahi — frame sahi hona chahiye.

## Tools (repo me ready hain)

```bash
# Technical sach: size/fps/frames/duration
node scripts/verify-video.mjs public/videos/asi05-premium.mp4 1080 1920 60 4500

# Chune hue frames ki stills + contact sheet (out/qa gitignored hai)
node scripts/extract-frames.mjs public/videos/asi05-premium.mp4 out/qa/asi05-premium 1440,1962,3030,4499 60
```

## Har composition ke hero frames

| Composition | Hero frames / pal | Kya verify karna hai |
|---|---|---|
| ASI05 Premium | f84, f522, f936, f1038, f1092, **f1440**, **f1962**, f2130, f3030, f3270, f3510, f3792, f4149, f4499 | RUNNING sirf press ke baad · K01 apni jagah, K02 copy · shutter band · khaali packet · dono seekh kabhi saath nahi · Next: ASI04 |
| P001 | 0:03, 0:08, 0:20, 0:35, 0:44, 0:49 | Hook mute par bhi padhe · 4 steps gin sakein · permission line ko pura samay · aakhri frame ≥2s hold |
| ShowcaseKinetic | 1.5s, 5.5s, 8.5s, 11s | Headline reveal premium lage · teeno rules ek-ek karke · 60 count-up behta hua · final hold |
| ShortHook | 1s, 5s, 9s, 13.5s | 3s me hook · problem→fix continuity (wahi list) · captions shabd-dar-shabd · loop kata na lage |
| DataStory | 1s, 4s, 7.5s, 9.5s | Sawal pehle · bars spring se · line banti hui · 128K settled + hold |

## Process

1. Badlav se **pehle** hero frames nikalo (`out/qa/<name>-before/`).
2. Badlav ke **baad** wahi frames phir nikalo (`out/qa/<name>-after/`).
3. Dono contact sheets ko **saath rakh kar dekho** — sirf banakar chhodna QA nahi hai.
4. PR me after-sheet lagao aur ek line me likho: kya badla, kya jaan-boojh kar nahi badla.
5. Koi forbidden state dikhe (galat text/timing/ownership) to badlav wapas — “lagbhag sahi” yahan pass nahi hai.

## Ek seekh (isi repo se)

Contact-sheet tool me khud ek bug pakda gaya tha: galat `tile` istemal se sirf pehla frame dikha, baaki kaale. Number sahi, tasveer galat. Isi liye sheet ko **dekhna** process ka hissa hai, banana nahi. (Fix: `scripts/extract-frames.mjs` — ek hi pass me select + tile.)

Aur padho: [`docs/24-BROWSER-SMOKE-TEST.md`](24-BROWSER-SMOKE-TEST.md) · [`templates/06-release-checklist.md`](../templates/06-release-checklist.md)
