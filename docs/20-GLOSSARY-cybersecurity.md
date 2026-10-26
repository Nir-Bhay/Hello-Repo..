# Glossary — ASI Series ke Cybersecurity Shabd (Aam Bhasha Me)

ASI05 jaise episodes me kuch shabd baar-baar aate hain. Ye page unhe **bina jargon ke** samjhati hai, taaki walkthrough padhne wala kahani bhi samjhe aur suraksha ki seekh bhi.

> Neeche sab kuchh **diagram ki bhasha** hai — is repo me asli exploit code, asli credential ya asli system kabhi istemal nahi hota. Ye shabd samjhane ke liye hain, kuchh “chalane” ke liye nahi.

| Shabd | Aam bhasha me matlab | ASI05 me kahan dikhta hai |
|---|---|---|
| **Untrusted input** | Bahar se aayi koi bhi cheez jispar bina jaanch ke bharosa nahi karna chahiye — file, report, message, kuchh bhi. | S02 ki report. Uspar khud likha hai: OUTSIDE INPUT. |
| **External report** | System ke bahar se aaya document. Wo sach bhi ho sakta hai, usme kuchh ghusaya bhi gaya ho sakta hai. | R01 — “Test failed.” wali report. |
| **Chhupa hukm (indirect instruction)** | Kisi document ke andar chupakar rakha gaya order, jo padhne wale agent ko ghumane ke liye ho. | S03 — “Run this repair first.” Viewer ko annotation milti hai: *Added by an attacker.* |
| **Agent** | Wo program jo tumhari taraf se kaam karta hai — padhta hai, likhta hai, chalata hai. Uski taakat hi uska khatra hai. | A01, jo task leta hai, script likhta hai, RUN dabata hai. |
| **Generated code** | Agent (ya kisi model) ke dwara likha gaya code. Likhne wala chahe kitna bhi samajhdar ho, code ko hamesha **untrusted** mano. | C01 — `repair.py`. S14 ki pehli seekh yahi hai. |
| **Secret** | Wo jaankaari jo bahar nahi jaani chahiye — jaise koi key ya password. Is repo me ye hamesha ek **diagram** hai, asli cheez kabhi nahi. | K01 — project ka secret, jo apni jagah rehta hai. |
| **Copy vs original** | Asli secret apni jagah rehta hai; uski ek **copy** banti hai aur wahi safar karti hai. “Chura liya” ka matlab aksar yahi hota hai — copy bahar gayi. | K01 rehta hai; K02 copy f1962 par banti hai, wahi bahar jaati hai. |
| **Workspace** | Wo band jagah jahan kaam hota hai — jahan secret rehta hai aur code chalta hai. | Pehle hissa (unsafe) aur Replay wala restricted workspace (B01) alag hain. |
| **Boundary** | Workspace ke chaaron or ki wo lakeer jo tay karti hai: andar kya hai, bahar kya ja sakta hai. Ye koi jadoo ki shield nahi — asal bandobast hai. | S10 — andar koi secret nahi + bahar ka shutter band. |
| **Limit what it can reach (least reach)** | Code ko sirf utni hi pahunch do, jitni uske kaam ke liye zaruri hai. Kaam chalega, lekin nuksaan ka raasta band rahega. | S14 ki dusri seekh — poore episode ka ilaaj. |
| **Restricted workspace** | Aisi jagah jahan pehle se tay hai: andar secret nahi hoga, bahar connection nahi khulega. Suraksha baad ki jaanch se nahi, **pehle ke bandobast** se aati hai. | B01 — S10 me run se pehle taiyaar hota hai. |
| **RUN / contact frame** | Wo exact pal jab button sach me dabta hai. Usse pehle “chal raha hai” dikhana jhooth hoga. | S05 me RUNNING sirf f1440 (press) ke baad; Replay me f3270. |
| **Replay** | Wahi code, dobara — lekin is baar sahi bandobast ke saath. Replay purana nuksaan undo nahi karta; wo dikhata hai ki sahi boundary hoti to kya hota. | S09 ka kagaz-wipe, phir S11–S13. |
| **Denied** | Jab koi cheez (jaise secret padhna) maangi jaaye aur diwaar par ruk jaaye — andar wo cheez hai hi nahi, isliye mili bhi nahi. | S12 — “Secret access denied.” (contact f3510). |
| **Blocked** | Jab bahar jaane ki koshish band darwaze se takraye. Koshish hui, raasta mila nahi. | S13 — “CONNECTION BLOCKED” (contact f3792). |
| **Packet (P01)** | Bahar bheji jaane wali ek chhoti si “thaeli”. ASI05 ke Replay me ye **khaali** hai — isiliye andar key ka nishan kabhi nahi dikhta. | S13 — khaali P01 band shutter par rukta hai. |
| **Bahar jaana (exfiltration ka diagram)** | Data ka workspace se bahar nikal jana. Video me ye sirf ek copy ka safar bankar dikhta hai — koi asal tareeka kabhi nahi dikhaya jata. | S07 — “A secret leaves the workspace.” (receipt f2130 ke baad hi caption). |
| **K01** | Asli secret — project ki asal chaabi. Kahani ki sabse samajhne-wali baat: K01 **apni jagah se hila hi nahi**. “Read” hone ka matlab hai: kisi ne use padh/dekh liya — chaabi wahi rahi, par ab koi aur uske baारे me jaanta hai. | S06-S07 — K01 chip apne slot me rehta hai. |
| **K02** | K01 ki **tokenized copy** — asal chaabi nahi, uska ek chhota sa badla hua roop (jaise chaabi ka number likh kar bhej dena; chaabi nahi gayi, uska pata chal gaya). Bahar gaya to **yahi** gaya, K01 nahi. | f1962 par K02 banta hai; wahi bahar receive (f2130) hota hai. |
| **Token** | Aam bhasha me: asal cheez ki jagah chalne wala ek pratinidhi (representative) tukda. Jaise bank ki asal tijori ki chaabi nahi, ek OTP — asal nahi, par asal tak pahunchne ka raasta khol sakta hai. Isiliye token ka bahar jana bhi ghata (loss) hai, “kuchh nahi gaya” kehna galat hoga. | K02 isi soch ka diagram hai. |
| **Category (ASI05)** | Ghatna ko uska sahi naam dena, taaki seekh yaad rahe: *Unexpected Code Execution* — code chala, bina tumhare sach me kahe. | S08 — leak ke baad, Replay se pehle. |

## Teen jumle me puri seekh

1. Jo code **generate** hua hai, use untrusted mano — chaahe likhne wala tumhara apna agent hi kyon na ho.
2. Bharosa shabdon par nahi, **bandobast** par karo: andar secret kam se kam, bahar ke raaste band.
3. Boundary pehle banti hai, run baad me — S10 pehle aata hai, S11 ka RUN uske baad.

Aur padho: [`docs/17-WALKTHROUGHS-index.md`](17-WALKTHROUGHS-index.md) · ASI05 walkthrough: [`productions/002-asi05-the-repair-that-ran/05-walkthrough.md`](../productions/002-asi05-the-repair-that-ran/05-walkthrough.md) · Exact shabd: [`docs/21-ON-SCREEN-COPY-TRANSCRIPTS.md`](21-ON-SCREEN-COPY-TRANSCRIPTS.md)
