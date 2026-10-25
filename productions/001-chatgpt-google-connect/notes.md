# NOTES — 001-chatgpt-google-connect

## Process note
User ne kaha "try karke video banao" — isliye document-approval gate is baar build ke saath-saath chala. Documents (01–03 + timeline) pehle likhe, phir code. Ab user ka review **video pe** hoga; change chahiye to v2 baneगा, v1 kabhi overwrite nahi hoga.

## Review loop report (agent ne khud check kiya)
Stills render karke har beat dekha: frames 0, 90 (hook), 210 (sach), 510/630 (steps+connected), 810 (Gmail hero), 1020 (Drive), 1290 (safety), 1440 (final).

### Mila aur fix kiya (v1 render se pehle)
1. **S1 text left se kat raha tha** — `CameraRig` AbsoluteFill use kar raha tha jo parent ki padding ignore kar deta hai. CameraRig ko normal-flow div banaya (fix `src/remotion/components/Stage.tsx` me, saari compositions ko fayda). Re-render pe hook frame perfect.
2. **Neeche khali space zyada tha** — har scene ka top-padding badha ke content ko vertically balance kiya.
3. **S3 ka toggle 20.6s pe achanak gayab** ho raha tha — ab toggle hamesha rehta hai, ON state me settle hota hai.
4. **Shield khali lag raha tha** — andar green check draw-on add kiya.
5. S4 label "STEP 4 KE BAAD" galat-ish tha → **"CONNECT KE BAAD · GMAIL"**.

### Check kiya, sahi mila
- Frame 0 black nahi — headline turant dikhta hai (thumbnail-ready).
- Ek frame = ek focal point; kahin collision/clipping nahi (transitions ke beech wale frames bhi spot-check kiye).
- Saara text phone-size pe padhne layak (sabse chhota important text 27px @1080 canvas, labels decoration hain).
- Palette wahi ek coral accent; green sirf "connected/safety check" ke liye.
- Final frame ka hold 46→50s (4s) — rule (≥2s) se zyada safe.
- Audio: procedural music (92 BPM, Am–F–C–G) + timeline-locked SFX. Mastered **−14.3 LUFS, true peak −2.0 dB** (ffmpeg loudnorm se verify).

## Render environment note
Is sandbox me Chromium download blocked tha; NSS/NSPR libraries `@sparticuz/chromium` ke AL2023 bundle se nikaal ke (`LD_LIBRARY_PATH`) render chalaya gaya. User ki machine pe plain `npx remotion render ...` bina is trick ke chalega.

## User ke liye bache hue faisle (v2 me ho sakta hai)
- Voiceover chahiye to API key lagegi — script ready hai, sirf awaz add hogi aur timing voice se lock hoga.
- Hook ke 2 aur options 02-script.md me hain — chaahe to unpe A/B version ban sakta hai.
