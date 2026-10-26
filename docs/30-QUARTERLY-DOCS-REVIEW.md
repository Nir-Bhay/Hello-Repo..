# Quarterly Docs Review — Har Teen Mahine ka Ritual

Documentation jhooth tab bolti hai jab duniya badal jaye aur likha purana reh jaye. Ye ritual use rokne ke liye hai: har quarter, ek chhota PR — **“docs: quarterly review YYYY-Qn”** — jisme neeche ki har jaanch ka natija table me likha ho.

## Checklist (order yahi rakho)

| # | Jaanch | Command / tareeka | Pass ka matlab |
|---|---|---|---|
| 1 | Saare internal links zinda hain | `npm run check:links` | 0 toote link |
| 2 | Lint gate saaf hai | `npm run lint` | Links + strict typecheck dono pass |
| 3 | Status ke daave sach hain | `docs/18` ki har “✅ Done” ko uski file/command se milao | Koi Done aisa nahi jiska saboot na mile |
| 4 | “Pending/baaki” wali baatein ab bhi pending hain | Repo me `Pending`, `baaki`, `TODO` khojo | Jo ho gaya wo update; jo nahi hua wo waisa hi likha hai |
| 5 | Copy ledger = code | `docs/21` ki ASI05 table ko `asi05v3/scenes.tsx` ke shabdon se milao | Mismatch = 0; mile to pehle document, phir code theek ho |
| 6 | Registry = Root.tsx | `docs/23` ki table ko `Root.tsx` se milao | Har composition ek hi status ke saath dono jagah |
| 7 | Shot boundaries ek hain | `asi05v3/shots.ts` बनाम walkthrough/transcript tables | Teeno jagah wahi numbers |
| 8 | Landing sach bol rahi hai | `docs/24` smoke test (chhota version: 2 videos + 1 live player) | Tag/specs/poster sab asal file se match |
| 9 | Assets budget me hain | `npm run report:assets` | Warning ho to wajah likhi ho |
| 10 | Backlog saaf hai | Ho chuke kaam Done, atke hue Blocked (wajah ke saath) | Koi task “hone wala hai” kehkar Done nahi |

## Natija kahan likhein

Usi quarterly PR ki description me upar wali table — har line par Pass/Fix/Issue. Jo theek na ho sake, uska issue kholo aur PR se link karo. **Ritual ka kaam sab theek karna nahi, jhooth ko pakadna hai.**

## Kab skip kar sakte ho

Kabhi nahi — lekin quarter me agar koi production release hui ho, to ye ritual usi release PR ka hissa ban sakta hai. Tarih chahe jo ho, chaar jaanch (1, 3, 5, 6) kabhi skip nahi hongi.

Aur padho: [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`docs/18-CONTRIBUTION-BACKLOG-50.md`](18-CONTRIBUTION-BACKLOG-50.md)
