# Browser Smoke Test — Landing Page (Manual Checklist)

Typecheck/build/link-check local (aur CI judne ke baad wahan bhi — docs/25) pakad lete hai, lekin “video sach me chala ya nahi” sirf browser batata hai. Har bade landing badlav ke baad ye 5-minute ki jaanch karo aur natija PR me likho.

## Taiyaari

```bash
npm run build:preview
npx vite preview --host 0.0.0.0 --port 5173   # ya npm run preview (dev)
```

## Checklist

### Videos
- [ ] P001 video: poster dikha → play chala → pause hua → scrub (aage-peeche) hua → awaaz aayi (music + SFX).
- [ ] ASI05 Premium: poster dikha → play chala → beech me scrub kiya → aakhri frame (RACTOR, Next: ASI04) sahi dikha.
- [ ] v2 proof: sirf S03–S05 wala hissa chala; “pura episode nahi hai” wali baat screen par saaf hai.
- [ ] v1 (rejected): label dekh kar saaf hai ki ye final **nahi** hai.
- [ ] Download buttons: P001 ki file `001-chatgpt-google-9x16-v1.mp4`, ASI05 premium ki `002-asi05-premium-9x16-v1.mp4` naam se aayi.

### Walkthrough cards
- [ ] Teeno covers dikhte hain (toota image icon kahin nahi).
- [ ] “Video dekho” links sahi video kholte hain; teesra card `#live-demos` par le jata hai.
- [ ] Har card ke neeche guide ka repo path sahi likha hai.

### Live player
- [ ] Chaaro compositions switcher se badalte hain (ASI05 v1 legacy, Showcase, ShortHook, DataStory).
- [ ] Play/pause, scrub, fullscreen (double-click) chalte hain.
- [ ] 9:16 wali composition kate-bina fit hoti hai.

### Accessibility (detail: docs/22)
- [ ] Sirf Tab se pura page ghoom sakte ho; har stop par focus outline dikhti hai.
- [ ] OS reduced-motion on: live player khud play **nahi** hota.
- [ ] 390px चौड़ाई (devtools mobile): horizontal scroll nahi; cards ek column me hain.

## Natija kahan likhein

PR description ke “Verification” hisse me: browser ka naam, kaunsi checklist pass/fail, aur fail ho to frame/time ke saath Bug issue. Bina chalaye “sab theek hai” kabhi mat likho.

Sambandhit: [`docs/22-ACCESSIBILITY-AND-MOBILE-QA.md`](22-ACCESSIBILITY-AND-MOBILE-QA.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md)
