# Case Study — ASI05: Ek Rejected Video se Studio-Finish Episode tak

Portfolio ke liye ek page me: **problem kya tha, process kya raha, saboot kya hai, aur seekh kya mili.**

## Problem

Ek cybersecurity episode — “The Repair That Ran” — banana tha: ek agent bahari report ke andar chhupe hukm ko padhkar khud script likhta aur chalata hai, aur project ka secret bahar chala jata hai; phir wahi code restricted workspace me ruk jata hai. Pehla version (v1) bana, render hua — aur **user ne use reject kar diya: “bahut kharab.”** Khaas kamiyan: asal mechanism (hukm ki copy kaise editor tak gayi) gayab tha, RUN dabane ka pal saaf nahi tha, aur kai jagah kahani padhne me atakti thi.

## Constraints (jo badal nahi sakte the)

- Director's Bible v2 hi canon: 75s · 9:16 · 60fps · **4500 frames** · 15 shots · silent first pass.
- On-screen copy **locked** — ek shabd bhi apni marzi se nahi.
- Causal sach: report script me morph nahi hoga; copy alag banti hai. K01 asli secret apni jagah rahega, K02 copy jayegi; Replay leak ko undo nahi karega; khaali packet me secret nahi hoga; “test passed” kabhi nahi.
- Diagrams hi baneinge — asli exploit code, credential ya URL kabhi nahi.

## Process

1. **Pehle kagaz, phir code:** Bible + 4500-frame cue CSV ko production folder me lock kiya; locked copy ledger aur gates (storyboard → hardest-motion proof → full render) likhe gaye.
2. **Sabse mushkil harkat pehle:** S03–S05 (chhupa hukm → copy strip ki flight → tactile RUN press) ka proof render karke frame-by-frame dekha gaya.
3. **Style ka faisla saboot par:** teen drawing directions ke samples bane; user ne bold explainer chuna; poora episode usi bhasha me premium materials ke saath dobara bana (`Asi05Premium`).
4. **Khud pakdi gayi galtiyan, render ke baad:** authoring cover ulta khulta tha (neeche ki lines pehle dikhti thin) — upar-se-neeche kiya; NEW SCRIPT tag khaali page par jhaankta tha — authoring complete hone tak roka; ek green tick “test passed” padh sakta tha — hataya. Teeno fix frame saboot ke saath hue.

## Evidence (daava nahi, saboot)

| Daava | Saboot |
|---|---|
| Exactly 4500 frames, 75.00s | `scripts/verify-video.mjs` — decode karke gina: `1080x1920 · 60 fps · 4500 frames · 75.00s` ✓ |
| RUNNING sirf press ke baad | f1440 ki still review sheet me; usse pehle ke frames me RUNNING gayab |
| K01 rehta hai, K02 jata hai | f1962 (copy ka janm) aur f2130 (receipt) ki stills |
| Replay me boundary pehle, run baad me | f3030 shutter band → f3270 RUNNING → f3510 denied → f3792 blocked |
| Koi shabd nahi badla | Locked ledger `docs/21` me; quarterly ritual use code se milata hai |

## Result

- **Final:** `productions/002-asi05-the-repair-that-ran/002-asi05-premium-9x16-v1.mp4` — landing par sabse upar chalta hai.
- Uske saath ek pura **walkthrough system** khada hua: shot-by-shot guide, text transcript, English + Hinglish narration scripts, glossary — taaki video sirf dekha nahi, padhaya bhi ja sake.
- Aur ek **50-task ka contribution backlog**, jisme se aksar kaam isi repo me reviewable commits bankar ho chuka hai.

## Seekh (jo har agle episode me jayegi)

1. **Mechanism dikhao, jaadoo nahi.** Copy ka safar, press ka pal, shutter ka band hona — jo dikhta hai wahi samajh aata hai.
2. **Sabse mushkil harkat ka proof pehle.** Poora render sabse mehenga test hai; use sabse aakhir me rakho.
3. **Apni galti khud pakdo, frame ke saath.** “Lagbhag sahi” ko pass kehna hi v1 wali galti dohrana hai.
4. **Daava = saboot.** Jo verify nahi hua, use pending likho — video par bhi, documentation me bhi.

Aur padho: walkthrough [`productions/002-asi05-the-repair-that-ran/05-walkthrough.md`](../productions/002-asi05-the-repair-that-ran/05-walkthrough.md) · registry [`docs/23-COMPOSITION-REGISTRY-AND-DEAD-CODE-AUDIT.md`](23-COMPOSITION-REGISTRY-AND-DEAD-CODE-AUDIT.md) · visual QA [`docs/27-VISUAL-REGRESSION-CHECKLIST.md`](27-VISUAL-REGRESSION-CHECKLIST.md)
