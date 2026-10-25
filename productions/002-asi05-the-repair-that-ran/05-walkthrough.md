# WALKTHROUGH — ASI05: The Repair That Ran (Premium)

![ASI05 walkthrough cover](../../public/images/walkthroughs/asi05-premium-cover.jpg)

**Ek line ki seekh:** *Generated code is untrusted — limit what it can reach.*

**Video:** `public/videos/asi05-premium.mp4` · Production copy: `002-asi05-premium-9x16-v1.mp4` (isi folder me)
**Format:** 75 seconds · 4500 frames · 60 FPS · 1080×1920 · silent (ye jaan-boojh kar hai — sound alag pass hai)
**Code:** `src/remotion/compositions/asi05v3/` — composition id `Asi05Premium`

---

## Pehle kahani ek saans me

Ek developer agent ko ek failing test theek karne ko kehta hai. Bahar se aayi ek report ke andar attacker ne chupke se ek hukm ghusa diya hai: *“Run this repair first.”* Agent us hukm ko report se **alag copy** karke, **khud ek naya script likhta hai**, use chalata hai — aur wo script project ka secret padhkar bahar bhej deta hai. Phir ek saaf **Replay** me wahi code dobara chalta hai, lekin is baar restricted workspace me: andar koi secret nahi, bahar ka raasta band. Code phir bhi chalta hai — bas is baar na secret milta hai, na raasta khula.

## Causal chain (kaun kisse janm deta hai)

```text
T01 task ──► R01 external report ──► I01 attacker ka chhupa hukm (report ke ANDAR)
   │                                      │
   │                                      └─► Q01 copied strip (report waisa ka waisa rehta hai)
   │                                              │
   └─► agent (A01) ◄──────────────────────────────┘
          │ khud likhta hai
          ▼
       C01 naya script ──► RUN dabta hai ──► C01 chalta hai
          │                                      │
          │                         K01 asli secret (apni jagah rehta hai)
          │                         K02 uski COPY banti hai ──► bahar jaati hai ──► receive hoti hai
          ▼
   REPLAY: wahi C01, restricted workspace (B01)
          ├─► secret padhna DENIED (andar secret hai hi nahi)
          └─► bahar connection BLOCKED (P01 khaali — andar koi secret nahi)
```

**Sabse important baat:** asli secret (K01) kabhi apni jagah se nahi hatta. Jo bahar jaata hai wo uski **copy (K02)** hai. Aur Replay me leak “undo” nahi hota — Replay sirf dikhata hai ki sahi boundary hoti to kya hota.

## Shot-by-shot walkthrough

| Shot | Time (frames) | On-screen copy (exact) | Kya ho raha hai | Kya notice karna hai |
|---|---|---|---|---|
| S01 | 0.0–5.0s (f0–299) | Fix the / failing test. | Developer task deta hai, agent use leta hai. | Video khali title se nahi khulta — task pehle frame se dikhta hai. Handoff f84 par complete. |
| S02 | 5.0–10.0s (f300–599) | EXTERNAL REPORT · Test failed. · OUTSIDE INPUT | Report aati hai; uska flap khulta hai. | Report **bahari input** hai — bharosa karne wali cheez nahi. Flap f522 par poora khula. |
| S03 | 10.0–16.0s (f600–959) | Run this / repair first. · Added by / an attacker. | Report ke andar chhupa hukm padha jaata hai. | “Added by an attacker” sirf **viewer ke liye** hai — kahani ke andar koi character use nahi padhta. Selection brackets f936 par hukm ko gherte hain. |
| S04 | 16.0–22.0s (f960–1319) | The agent / writes code. · repair.py · NEW SCRIPT · From external report. | Hukm ki **alag copy strip** editor tak jaati hai; agent kalam se naya script likhta hai. | Report script me **nahi badalta** — copy alag banti hai (f984), editor tak pahunchti hai (f1038). Script f1092 par poora banta hai; NEW SCRIPT tag usi ke baad. |
| S05 | 22.0–27.5s (f1320–1649) | RUN · RUNNING · Then runs it. | Script runner me dock hota hai; agent RUN dabata hai. | **RUNNING sirf dabane ke baad** (f1440). Usse pehle screen par RUNNING dikhe to wo galti hai. |
| S06 | 27.5–33.5s (f1650–2009) | Read project / secret · Send outside | Chalta hua script do kaam karta hai: secret padho, bahar bhejo. | Pehle *Read* (f1692), phir *Send* (f1800) — order ulta nahi ho sakta. K02 copy f1962 par banti hai; K01 apni jagah rehta hai. |
| S07 | 33.5–39.0s (f2010–2339) | A secret leaves / the workspace. | K02 copy workspace se bahar nikal kar receive hoti hai. | Caption tabhi aata hai jab copy **receive** ho chuki ho (f2130 ke baad, f2166). Pehle aaye to jhooth hoga. |
| S08 | 39.0–43.0s (f2340–2579) | ASI05 · Unexpected Code / Execution | Jo hua, usko naam milta hai. | Ye title card nahi — ghatna ke upar category ka label hai. |
| S09 | 43.0–47.0s (f2580–2819) | Replay · Same code. / Restricted / workspace. | Kagaz ke wipe ke saath wahi code Replay me aata hai. | Wipe aage badhta hai — koi packet/cheez **peeche nahi** jaati. Leak undo nahi hua; ye ek naya, surakshit run hai. |
| S10 | 47.0–53.0s (f2820–3179) | No secrets inside. · Outside / connections blocked. | Restricted workspace taiyaar hota hai: saaf copy andar, shutter band. | Boundary **run se pehle** banti hai. Shutter f3030 par band; uske baad hi “blocked” wala text (f3042). |
| S11 | 53.0–57.5s (f3180–3449) | The code / still runs. | Wahi script restricted workspace me chalta hai. | Code band nahi hua — **uski pahunch** band hui. RUNNING f3270 (protected press f3258 ke baad). |
| S12 | 57.5–62.5s (f3450–3749) | Secret access / denied. | Script secret padhne jaata hai; diwaar par ruk jaata hai. | Andar secret hai hi nahi, isliye read f3510 par denied; verdict f3522. Koi K02 copy Replay me nahi banti. |
| S13 | 62.5–66.5s (f3750–3989) | CONNECTION / BLOCKED | Script bahar connection banane ki koshish karta hai. | Packet (P01) **khaali** hai — andar koi key/secret nahi. Band shutter se takra kar f3792 par rukta hai; verdict f3810. |
| S14 | 66.5–71.5s (f3990–4289) | Generated code / is untrusted. → Limit what / it can reach. | Do seekh, ek ke baad ek. | Dono text **kabhi saath nahi** dikhte. Pehla f4140–4146 me poora gayab, dusra f4149 par aata hai. |
| S15 | 71.5–75.0s (f4290–4499) | RACTOR · Cybersecurity, explained. · Next: ASI04 | Paper background par bandobast (lockup). | Aakhri frame f4499 tak yahi rehta hai. “Next” hamesha **ASI04** hai. |

## Pause points (reviewer ke liye exact frames)

| Frame | Wahan kya verify karna hai |
|---|---|
| f84 | Task ka handoff developer → agent complete |
| f522 | Report ka flap poora khula; OUTSIDE INPUT padh sakte ho |
| f936 | Selection brackets attacker ke hukm ko gherte hue; report abhi bhi waisa hi |
| f1038 | Copied strip editor tak pahunchi; original report apni jagah |
| f1092 | Naya script poora likha gaya; NEW SCRIPT isse pehle nahi aana chahiye |
| f1440 | RUN press ka exact pal — RUNNING yahin se shuru |
| f1962 | K02 copy ka janm; K01 apni jagah par hi hai |
| f2130 | K02 bahar receive hua |
| f3030 | Network shutter poora band |
| f3270 | Replay me RUNNING (protected press ke baad) |
| f3510 | Read request diwaar par ruka — denied ka contact pal |
| f3792 | Khaali packet band shutter se takraya |
| f4149 | Dusri seekh akeli screen par: “Limit what it can reach.” |
| f4499 | Aakhri frame — RACTOR lockup, Next: ASI04 |

## Forbidden states — ye kabhi dikhe to video galat hai

- ❌ Report khud script me badal jaaye (morph) — copy alag banti hai, report rehta hai.
- ❌ RUN dabane se pehle RUNNING dikhe.
- ❌ Asli secret (K01) apni jagah se gayab ho — sirf copy (K02) jaati hai.
- ❌ Replay me koi cheez peeche ki taraf jaaye, ya leak “undo” ho.
- ❌ Boundary ki jagah koi shield/jadoo — asal bandobast hai: andar secret nahi + shutter band.
- ❌ Khaali packet (P01) ke andar key/secret ka nishan.
- ❌ “Test passed” ya script par green/safe tick — script kabhi “safe” declare nahi hota.
- ❌ S14 ke dono text ek saath dikhein.
- ❌ Galat next label — hamesha **Next: ASI04**.
- ❌ Asli exploit code, asli credential, ya asli receiver URL — sab diagram hai.

## Code map (kis file me kya hai)

| File | Kaam |
|---|---|
| `src/remotion/compositions/asi05v3/Asi05Premium.tsx` | Composition root; frame dekh kar S01–S15 chunata hai (boundaries yahin lock hain) |
| `src/remotion/compositions/asi05v3/scenes.tsx` | Har shot ka scene (S01–S15), absolute frame anchors ke saath |
| `src/remotion/compositions/asi05v3/assets.tsx` | Robot, developer, report, script, boundary jaise story objects |
| `src/remotion/compositions/asi05v3/parts.tsx` | Paper stage, shared chhote parts, premium materials |
| `src/remotion/compositions/asi05v3/theme.ts` | Locked palette aur typography |
| `productions/002-asi05-the-repair-that-ran/frame-cues.csv` | 4500 frames ki cue table (har frame ka shot/event) |
| `productions/002-asi05-the-repair-that-ran/03-directors-bible-v2.md` | Director's Bible v2 — design/animation ka canon |
| `productions/002-asi05-the-repair-that-ran/00-DIRECTOR-NOTE.md` | Original director note — incident ki sachchai ka source |

## Normal-speed phone test (reviewer se ye puchho)

1. Bina pause kiye dekhne par kya tum bata sakte ho ki secret **copy hokar** gaya, asli wahi raha?
2. Kya saaf hua ki agent ne script **khud likha**, report script nahi bana?
3. Replay me kya samajh aaya ki code chala, lekin is baar secret/raasta dono band mile?
4. Aakhri do seekh alag-alag yaad rahi ya ghul gayi?
5. Koi ek pal batao jahan “ye kyon hua?” samajh nahi aaya — wahi agla fix hai.

## Honest status

- ✅ Premium render verified: 1080×1920, H.264 yuv420p, 60fps, **exactly 4500 frames**, 75.00s.
- 🔇 Silent hai — Bible ka pehla pass silent lock tha. Narrated walkthrough alag kaam hai (backlog C42/C43).
- ⏳ Normal-speed phone comprehension test abhi user ko karna hai — bina uske “sab samajh gaya” claim nahi hoga.
- 📄 Master prompt ke named files `ASI05_shot_manifest.csv` / `ASI05_AGENT_HANDOFF.md` repo me us naam se nahi mile the; upar wali asal files hi istemal hui hain (detail: `04-v2-rebuild-plan.md`).
