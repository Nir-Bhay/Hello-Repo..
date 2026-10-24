# 13 · DEEP REVIEW — Chaaron Systems ka Synthesis (Studio Method v2)

> Ye file is workspace ki sabse gehri review hai: user ke share kiye hue chaaron knowledge-systems ko aapas me milaya, takrav suljhaya, aur ek unified kaam-kaaj ka tareeka nikala hai. Har naye video se pehle ye + `docs/04` padhna hai.

## Chaar systems, har ek ki asli takat

| System | Usse kya lena hai (uska best) | Uski hadd |
|---|---|---|
| **claude-motion** | Numbers me taste: easing `0.16,1,0.3,1`, stagger 0.09/0.22s, exits aadhe, holds, EK accent, timeline.json sabki ghadi, contact-sheet review loop, procedural sfx (−14 LUFS) | Brand/taste ek hi style tak seemit; story/causality ka framework halka hai |
| **Official Remotion + skills** | API ki sachai: frame-driven animation, captions/multimedia pipelines, render/studio ke sahi flags, version-pinned rules | Taste nahi sikhata — sahi code, boring film ban sakta hai |
| **mg-styles-15** | Style ki bhasha: 15 styles, har ek ka prompt+source; "har material ka ek job"; adversarial AI-judge review rounds; audio bhi code se | Films 10s demos hain; prompts ko apne format/story me adapt karna padega |
| **Ractor skill-pack** | Direction ki gehrai: causal chain (source→contact→response), viewer-question har beat pe, forbidden-state tests, 4 alag readiness records, episode-improvement loop, "export pass ≠ film" | Ractor channel-specific hai (palette/characters/stories hamare nahi); kuch machinery (Codespaces) yahan lagu nahi |

Hamara apna **P001 tajurba** isme mila: CameraRig/abs-padding jaisa render-bug sirf *asli frames dekhne* se paka; loudness encode ke baad measure karna; top-anchored 9:16 layouts me neeche khali jagah balance karna — ye sab ab rules me hain.

## Jahan systems takrate hain — aur hamara faisla

| Sawal | claude-motion | Ractor pack | Official | **Hamara faisla (default)** |
|---|---|---|---|---|
| Loudness | −14 LUFS | −18 LUFS (unka editorial target) | loudnorm tooling | **−14 LUFS Shorts/YT ke liye**; koi channel apna target de to wahi, document me likh ke |
| Reading hold | phrase ≥1s, +0.25/word | `max(1.4s, words/2.5+0.35s)` | — | Dono ko mila ke: **kam se kam 1.4s, ya words/2.5+0.35s — jo bada ho**; final ≥2s |
| Springs | Presets har jagah | "Blanket springs se bacho, material behavior socho" | spring() API | Springs sirf **physical** cheezon par; type/camera bezier se; har object ka apna behavior |
| Motion proof | Draft→sheet loop | Sabse mushkil handoff ka proof pehle | — | **Dono:** pehle hardest-shot proof, phir draft loop (naya step pipeline me) |
| "Ready" kab | Ek saaf review pass | 4 alag records (export/semantic/craft/comprehension) | — | **4 records wala tareeka**; ek "done" shabd se kaam nahi chalega |
| Style | Ek palette, ek accent | Har material ka narrative job | — | Palette channel ki hogi; **har scene me material ka job likha jayega** storyboard me |

## Studio Method v2 (ab se har video aise baneगा)

1. **Brief** (templates/01) — ek video, ek baat, ek takeaway.
2. **Research** — facts primary sources se; style `docs/14` se chunna (1 primary + ≤1 accent technique).
3. **Treatment** (naya, Ractor se seekha) — causal chain kagaz par: source → transfer → contact → response → consequence; har beat ka **viewer-question**; kya kabhi morph nahi hoga, kya forbidden states hain.
4. **Hook + Script** (templates/02) — 3 hook options; script 2-column.
5. **Storyboard** (templates/03, upgraded) — har shot: viewer-question, focal object, material job, camera start/end, contact point, transition, sound cue, **forbidden early-state**.
6. **Timeline** (templates/04) — beats seconds me lock; picture/caption/sound teeno ek ghadi.
7. ★ User review — document approve.
8. **Hardest-shot proof** (naya) — sabse mushkil handoff/morph/camera ka chhota proof render; frames check; phir hi poora build.
9. **Build** — docs/04 numbers + official skills ki API sachai.
10. **Draft + review loop** — contact-sheet/filmstrip har beat ± kuch frames; reviewer nazar (story/portrait/geometry — skill-pack ke agents ke sawal) + ek adversarial judge round (mg-styles rubric wala tareeka).
11. **Sound** — music/SFX timeline-locked; encode ke **baad** loudness measure.
12. **Final + 4-record readiness** — export / semantic / craft / comprehension alag-alag likhna (`productions/*/notes.md`), versioned file (`-v1`, `-v2`…).
13. **Episode improvement** (naya, Ractor se) — har video ke baad: ek sabse badi kamzori, ek research sawal, ek craft experiment agle video ke liye; seekh docs me wapas.

## Kabhi na bhoolne wale usool (sab systems ek sur me)

- Frame 0 = thumbnail; khali/black kabhi nahi.
- Kuch bhi dead-still nahi; par har movement ka kaaran hai — dono ek saath sach hain.
- Text padhne ke waqt hilta nahi; hold settle ke *baad* shuru hota hai.
- Ek frame, ek focal point; ek video, ek hero moment.
- Contact asli hona chahiye: cheez recipient tak *pahunche*, phir reaction. Center-points nahi, leading edges.
- Galat state trigger se pehle absent — ye bhi test hai, sirf sahi state ka aana nahi.
- Export chal gaya ≠ film achi hai. Frames dekho, normal speed dekho, phone size dekho.
- Sound har bade move ko sach banata hai; meter sunne ka badal nahi hai.

## Is review ke baad kya badla (is session me kiya gaya)

- `templates/03` me viewer-question / material-job / forbidden-state columns jode.
- `templates/05` me forbidden-state, leading-edge contact aur 4-record readiness joda.
- `AGENTS.md` me Studio Method v2 + skill-pack triggers jode.
- `docs/12` (index), `docs/14` (styles), `docs/15` (official skills), `docs/16` (readiness) banaye.
- Teen external repos `references/` me collect kiye (claude-motion, remotion-skills, mg-styles-15) — gitignored, par machine par uplabdh.
