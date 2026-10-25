# Accessibility & Mobile QA — Landing Page

Ye page landing page ki accessibility ka **record aur checklist** hai: kya implement hua, kya haath se (keyboard/phone par) abhi verify karna baaki hai. Bina kiye hue ko “done” nahi likha gaya hai.

## Implement ho chuka (code me)

| # | Cheez | Kahan | Kaise verify hoga |
|---|---|---|---|
| 1 | Har `<video>` par **poster** — play se pehle blank/black frame nahi | `src/App.tsx` — P001 aur ASI05 videos par walkthrough covers poster banke | Page load par har video me cover dikhe |
| 2 | Har `<video>` par **aria-label** — screen reader ko pata hai kaunsa video hai | `src/App.tsx` | Screen reader / accessibility tree me naam mile |
| 3 | Cover images par meaningful **alt text** | `src/App.tsx` (walkthrough cards) | Alt padh kar samajh aaye ki tasveer kis guide ki hai |
| 4 | **Visible focus** — keyboard se ghumne par neeli outline | `src/landing.css` (`:focus-visible`) | Tab dabate jao; har stop par outline dikhe |
| 5 | **Reduced motion respect** — OS ki `prefers-reduced-motion` setting par live player autoplay **band** | `src/App.tsx` | OS me reduced-motion on karke page kholo; player ruka mile |
| 6 | Reduced-motion par CSS transitions/animations shaant | `src/landing.css` (`@media (prefers-reduced-motion: reduce)`) | Usi setting ke saath koi slide/fade na ho |
| 7 | Mobile par final-video aur walkthrough grids **single column** | `src/landing.css` (`@media (max-width: 900px)`) | 390px width par koi horizontal scroll na aaye |
| 8 | Download filename production file se **match** | `src/App.tsx` — ASI05 premium ka download naam `002-asi05-premium-9x16-v1.mp4` | Download ki hui file ka naam production copy jaisa ho |

## Keyboard-only checklist (haath se karna hai)

Sirf Tab / Shift+Tab / Enter / Space use karke:

- [ ] Header se walkthrough cards tak bina mouse ke pahunch sakte ho?
- [ ] Har card ka “▶ Video dekho / Live player” link focus hota hai aur outline saaf dikhti hai?
- [ ] Har native video player ke controls (play, seek, volume, fullscreen) keyboard se chalte hain?
- [ ] Composition switcher ke saare buttons ek-ek karke select ho sakte hain?
- [ ] Live player play/pause keyboard se hota hai?
- [ ] Kahin focus “gayab” to nahi ho jata (bina outline wala stop)?

Koi bhi box fail ho to woh Bug hai — `.github/ISSUE_TEMPLATE/bug_report.md` se issue kholo.

## Mobile checklist (360–430px width)

- [ ] 360, 375, 390, 430px — kisi par bhi horizontal scroll nahi.
- [ ] Walkthrough covers crop hokar bhi pehchan me aati hain; text unke neeche padhne layak hai.
- [ ] Video poster pehle dikhta hai; play dabane par sahi video chalta hai.
- [ ] 9:16 videos screen ki chaudai me fit hain; controls ungli se dabaye ja sakte hain.
- [ ] Download button thumb se aram se tap hota hai; galti se paas wala link nahi dabta.
- [ ] ASI05 normal speed par dekho: kya copy hua, kya gaya, replay me kya band mila — bina pause ke samajh aaya? (Yahi asli comprehension test hai; fail ho to **Unclear frame** issue kholo.)

## Motion-sensitive viewers ke liye

- Live demo player OS ki reduced-motion setting ka samman karta hai — autoplay band rahega, play tum dabaaoge.
- Har video **pause** ho sakta hai, aur ASI05/P001 ki puri kahaani bina chalti tasveer ke bhi padhi ja sakti hai: ASI05 transcript [`productions/002-asi05-the-repair-that-ran/06-transcript.md`](../productions/002-asi05-the-repair-that-ran/06-transcript.md) · P001 transcript [`productions/001-chatgpt-google-connect/05-transcript.md`](../productions/001-chatgpt-google-connect/05-transcript.md)

## Honest status

- ✅ Code-level items (upar ki table) implement aur build-verify hain.
- ⏳ Keyboard-only aur asal-phone ki haath-wali QA **abhi baaki hai** — upar ki checklists usi ke liye hain. Use kiye bina “accessible hai” ka daava nahi hoga.

Aur padho: [`docs/17-WALKTHROUGHS-index.md`](17-WALKTHROUGHS-index.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md)
