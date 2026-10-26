# Contributing — Hello Motion Studio

**Swaagat hai.** Is repo me contribution ka matlab hai: *sach me useful kaam* — bug fix, saaf documentation, test/QA, accessibility sudhaar, ya koi naya feature jo review me khada ho sake. Number badhane ke liye fake ya khaali commits kabhi nahi.

> Pehle ye teen files padho: [`docs/17-WALKTHROUGHS-index.md`](docs/17-WALKTHROUGHS-index.md) (kya bana hai) · [`docs/18-CONTRIBUTION-BACKLOG-50.md`](docs/18-CONTRIBUTION-BACKLOG-50.md) (kya kaam baaki hai) · [`AGENTS.md`](AGENTS.md) (agent/operating rules)

## 15 minute me pehla PR (quickstart)

1. **Repo lo aur jaancho (5 min):** `npm ci` → `npm run check:links` → `npx tsc --noEmit` → `npm run preview` (landing khulni chahiye).
2. **Ek chhota kaam chuno (2 min):** `docs/29-GOOD-FIRST-ISSUES.md` ya GitHub par `good first issue` label wala issue. Bada kaam pehle din mat pakdo.
3. **Branch banao:** `git checkout -b docs/<chhota-naam>` (main se).
4. **Ek hi badlav karo (5 min):** ek file, ek maksad. Animation/copy chhua hai to frame saboot rakho (CONTRIBUTING ke niyam neeche).
5. **Phir jaancho:** `npm run lint` aur `npm run build:preview` — dono saaf.
6. **PR kholo:** template khud aayega; Summary me task/issue number, Verification me upar wali commands ka natija sach likho.

Bas — pehla PR tayyaar. Review me jo mile, use seekh samjho, sharm nahi.

## Kaam shuru karne se pehle

1. **Backlog se ek task chuno** (`docs/18-CONTRIBUTION-BACKLOG-50.md`). Ek task = ek logical change. Task ID apne issue/PR me likho (jaise `C11`).
2. **Issue kholo ya short plan likho** — kya badlega, kyon, aur kaise verify karoge. Animation/copy badalna hai to pehle plan, phir code.
3. **Branch banao** default branch (`main`) se. Naam saaf rakho: `docs/<slug>`, `fix/<slug>`, `feat/<slug>`.

## Local setup (fresh clone)

```bash
npm ci                # ya npm install
npm run typecheck     # tsc --noEmit — saaf aana chahiye
npm run check:links   # saare internal Markdown links verify
npm run build:preview # landing build
npm run preview       # → http://localhost:5173 (landing dekho)
npm run studio        # Remotion Studio (frame-by-frame)
```

Agar inme se koi step fresh clone par tute, to wahi ek genuine bug hai — issue kholo (template: Bug report).

## Commit rules

- **Ek commit = ek samajh aane wala badlav.** Message bataye *kya* aur *kyon*: `docs: add ASI05 glossary (C15)` achha hai; `update`, `fix`, `changes` bekaar hai.
- Bade kaam ko **logical commits** me todo — lekin har commit apne aap me complete aur reviewable ho. Aadha toota hua beech-wala commit nahi.
- Khaali/naam-ke commits (sirf date, sirf space, sirf number) **kabhi nahi**. Contribution graph se zyada zaruri hai ki history padhne par kahani samajh aaye.

- **Har PR me CHANGELOG ki ek entry** (T110): kya badla, ek line, `Unreleased` ke neeche. History hi portfolio hai — bina entry wala PR adha maana jayega.

## Pull request rules

PR kholte hi [`.github/pull_request_template.md`](.github/pull_request_template.md) ka template aayega. Usme ye hona hi chahiye:

1. **Summary** — kya badla aur kyon (task ID ke saath).
2. **Verification** — kaunsi commands chali (typecheck / build / link-check), aur agar animation badla hai to **frame evidence** (still ya contact sheet).
3. **Risk** — kya toot sakta hai, kya jaan-boojh kar nahi chhua.
4. **Honest limits** — jo test nahi hua, wo saaf likho. “Perfect hai” bina saboot ke kabhi nahi.

Review ke baad hi merge. Merge hua kaam hi `main` par gina jata hai.

## Animation / video ke khaas niyam

- **Copy ledger mat todo.** ASI05 ke on-screen shabd locked hain ([`productions/002-asi05-the-repair-that-ran/05-walkthrough.md`](productions/002-asi05-the-repair-that-ran/05-walkthrough.md) aur Bible). Shabd badalna hai to pehle document badlo, user se review lo, phir code.
- **Forbidden states kabhi nahi:** RUN se pehle RUNNING · report ka script me morph · asli secret (K01) ka gayab hona · Replay me reverse packet / leak-undo · shield-as-magic · khaali packet me secret · “test passed” / green-safe script · galat Next label (hamesha **ASI04**) · HUD/glitch/neon · asli exploit code/credential/URL. Ye sab diagrams hain, asal cheezein kabhi nahi.
- **Frame evidence do.** Jo frame badla, usi frame ki still PR me lagao. Contact-sheet style review hi yahan ka test hai.
- **Duration/format pehle confirm karo.** ASI05 locked hai: 75s · 9:16 · 60fps · 4500 frames · silent first pass. Naye production ke liye story milne par pehle production document banta hai (brief → script → storyboard), user review ke baad hi video.

## Documentation ke niyam

- Har nayi walkthrough `docs/17` index me judni chahiye, aur production walkthrough production folder me hi rahegi (convention: [`productions/README.md`](productions/README.md)).
- Naya internal link dala? `npm run check:links` chalao. Toota link = PR fail ke barabar. (Checker `skill-pack/` ko nahi chhuta — wo byte-identical imported snapshot hai; repo-authored docs hi uske dayre me hain.)
- Tasveerein/covers palette ke andar ho, aur generated image me **readable gibberish text na ho** — text chahiye to code se banao, image-generator se nahi.

## Issue kaise kholein

`.github/ISSUE_TEMPLATE/` me chaar templates hain — **Bug**, **Unclear frame** (video ka koi pal samajh na aaye), **Documentation**, **Feature**. Jo samajh na aaya, wahi sabse qeemti issue hai; “video kharab hai” ki jagah frame/time likho to fix turant hota hai.

## Madad chahiye to

Backlog ke Batch 2–3 ke tasks sabse aasan shuruaat hain. Pehla PR documentation ka rakho — repo samajh aa jayega, phir animation chhuo.

**Ek line ka usool:** *har commit aisa ho ki kal koi aur use padh kar keh sake — “samajh aaya, ye kyon hua.”*
