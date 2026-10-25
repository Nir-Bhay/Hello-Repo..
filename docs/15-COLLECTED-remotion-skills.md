# 15 · COLLECTED — Official Remotion Skills Index

> Source: https://github.com/remotion-dev/skills · Clone: `references/remotion-skills/skills/` · Ye Remotion team ki apni agent-skills hain — API ka sahi tareeka bhool jayein to pehle yahin dekho (docs search se pehle, kyunki ye version-pinned hoti hain).

| Skill | Kaam | Kab kholo |
|---|---|---|
| `remotion-best-practices` | Router skill — baki sab ki directory + rules (animations, assets, audio, captions…) | Har Remotion kaam ki shuruaat |
| `remotion-create` | Naya Remotion video/project banana | Naya format/composition shuru karte waqt |
| `remotion-markup` | Content, animation, effects ki best practices | Scene likhne/polish karne se pehle |
| `remotion-captions` | Transcribe, display, animated captions | Voice/caption wale video me |
| `remotion-multimedia` | Mediabunny se media handle karna | Asli video/audio files ke saath kaam |
| `remotion-maps` | Map animations | Location/map wala content |
| `remotion-interactivity` | Studio me interactive markup structure | Jab user Studio me khud badlav karna chahe |
| `remotion-studio` | Preview ka tareeka | Studio setup/troubleshoot |
| `remotion-render` | Export/render | Render flags, Lambda, quality sawal |
| `remotion-saas` | Remotion pe app banana | Kabhi player/web-app banana pade to |
| `remotion-docs` | Docs search | Upar walo se jawab na mile to |
| `remotion-upgrade` | Version upgrade | Remotion bump karte waqt |

## Inse hamne kya confirm kiya (hamare rules inse takrate nahi)

- Animation sirf frame-driven (`useCurrentFrame`), CSS/Tailwind animations forbidden — hamara rule #1 bilkul yahi hai.
- Assets `public/` + `staticFile()`; audio ke liye `@remotion/media`; captions ke liye official captions pipeline (`createTikTokStyleCaptions`).
- Deterministic rendering (seeded random) — hamare Grain jaisi techniques isi par tikki hain.

## Rule of thumb

Pehle hamari `docs/04` (taste/numbers) → phir official skill (API/mechanics) → phir bhi atke to Remotion docs. Ulta order time barbaad karta hai: API aana kaafi nahi, taste numbers se aati hai (claude-motion wali seekh).
