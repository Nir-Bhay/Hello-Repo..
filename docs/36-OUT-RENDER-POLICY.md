# `out/` Render Policy — Kaam ki Jagah, Final ki Jagah Nahi

`out/` **gitignored** hai — wo ek workbench hai, almari nahi. Wahan ke renders, stills aur sheets ka kaam hai saboot banana; unka wahan rehna koi release nahi hai. (Backlog C77.)

## Niyam

1. **`out/` ki koi file kabhi “final” nahi hoti.** Final tab banta hai jab wo `templates/06-release-checklist.md` se guzar kar **production folder** me versioned naam se rakhi jaye (`<id>-<slug>-<format>-vN.mp4`), aur uski preview copy `public/videos/` me jaye.
2. **Naam kaam bataye:** `out/<episode>-<purpose>-<version>.<ext>` — jaise `asi05-premium-v1.mp4`, `asi05v2-board/`, `qa/asi05-premium-review/` (frames QA ke liye). Bina naam wali `draft.mp4` type files ek hafte se zyada na rahe.
3. **Safai surakshit hai, record ke bagair nahi:** `out/` ka kuchh bhi delete karna repo ko nahi chhuta (tracked hi nahi hai) — **lekin** jis output ka hawala kisi doc/PR me diya gaya ho (jaise review sheet), use pehle ya to production/docs ke record me bayan karo, ya rakho. “Delete kar diya, saboot gaya” — ye haalat nahi aani chahiye.
4. **Jo cheez dobara ban sakti hai, wo raksha ke layak nahi:** stills/sheets hamesha scripts se dobara banti hain (`extract:frames`, `extract:asi05`). Raksha ke layak sirf **final MP4s** hain, aur wo repo me tracked jagah par hi rehti hain (`docs/33` inventory).
5. Har nayi sitting ki shuruaat me: `out/` me pehle se rakha kachra dekho. Agar koi file kisi khuli PR/review se judi nahi hai to use hatane me koi jhijhak nahi.

## Kya rakhein, kya hatayein (ek nazar)

| Cheez | Rakho? |
|---|---|
| Final/versioned MP4s ki asal jagah | ❌ `out/` me nahi — production folder me (repo-tracked) |
| Review sheets/stills jo kisi PR ya doc me cite hue | Jab tak woh PR/doc zinda hai; uske baad hata sakte ho (record text me rehta hai) |
| Draft/scale renders, failed exports | ❌ Kaam khatm hote hi hatao |
| `out/qa/` (frame extraction) | Hata sakte ho — scripts se ek command me dobara banta hai |

Aur padho: [`docs/33-FINAL-ASSETS-INVENTORY.md`](33-FINAL-ASSETS-INVENTORY.md) · [`templates/06-release-checklist.md`](../templates/06-release-checklist.md)
