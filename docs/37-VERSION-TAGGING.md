# Version Tagging — v1, v2, “Final” Kab Kahenge

Naam hi pehla bharosa hai. Agar har file “final” hai to koi file final nahi hai. (Backlog C79.)

## Naam ka dhancha

```text
<production-id>-<slug>-<format>-v<N>.mp4
002-asi05-premium-9x16-v1.mp4      ← ASI05 Premium, pehla full version
001-chatgpt-google-9x16-v1.mp4     ← P001, pehla full version
```

- **v1** = pehla *poora* render jo release checklist tak gaya ho. Drafts/proofs ko v-number **nahi** milta — unhe unke kaam ka naam milta hai (`asi05v2-proof-s03-s05.mp4`).
- **v2, v3…** = usi production ka naya poora version. Purana version **delete/overwrite kabhi nahi** — history saboot hai.
- File badle bina naam kabhi dobara istemal nahi hota. Wahi naam = wahi bytes.

## Shabd kab istemal honge

| Shabd | Kab | Kahan |
|---|---|---|
| **final** | Sirf jab `templates/06-release-checklist.md` ke saare box bhare hon (metadata verify + frame QA + copies + landing + record) | File naam me nahi, status/tag me: “✅ FINAL” |
| **proof** | Poora episode nahi, kisi harkat ka saboot (Gate 3 jaisa) | Naam aur tag dono me “PROOF” |
| **rejected** | User ne dekhkar mana kar diya | Tag me saaf “REJECTED — sirf compare ke liye” |
| **draft / rough** | Beech ka kaam, `out/` ke andar hi | Repo-tracked jagah par kabhi nahi |
| **premium / v2 (direction)** | Direction ka naam hai, version nahi (ASI05 Premium = direction; uska file version v1 hai) | Confusion ho to `docs/23` registry dekho |

## Landing par yahi bhasha

Har video section ka tag upar wali table se aayega. Koi section “FINAL” tabhi likhega jab file sach me final ho — proof par proof, rejected par rejected. (ASI05 ke teeno versions iski zinda misaal hain.)

Aur padho: [`docs/33-FINAL-ASSETS-INVENTORY.md`](33-FINAL-ASSETS-INVENTORY.md) · [`docs/23-COMPOSITION-REGISTRY-AND-DEAD-CODE-AUDIT.md`](23-COMPOSITION-REGISTRY-AND-DEAD-CODE-AUDIT.md)
