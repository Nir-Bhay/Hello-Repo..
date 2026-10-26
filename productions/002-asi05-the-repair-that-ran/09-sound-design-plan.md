# SOUND DESIGN PLAN — ASI05 Premium (Status: PLAN READY · mix ka faisla baaki)

**Aaj ki sachchai:** ASI05 ka current final **silent** hai — ye Director's Bible ka lock tha (pehla pass silent). Ye document us din ke liye hai jab sound pass ka faisla hoga. Faisla hue bina koi audio render “final” nahi kahlayega, aur **silent version hamesha safe/canonical rahega.**

## Usool

1. **Sound dikhai dene wali harkat ko awaaz dega** — apni alag kahani nahi sunayega.
2. Koi synthetic/nakli awaaz (voice) default **nahi**. Narration hogi to creator ki awaz, ya alag se tai hua raasta (scripts: `07-walkthrough-script.md`, `08-walkthrough-script-hindi.md` — wo is episode ke sound pass se alag cheez hai).
3. Music sirf licensed/royalty-safe, action ke neeche halka. Koi track “acha laga” isliye nahi — license likha hoga tabhi lagega.
4. Final mix target: **−14 LUFS** (shorts/platforms ka aam target), true-peak −1 dBTP ke neeche.

## Cue sheet (shot ke hisaab se — sirf ehsaas, koi sample abhi chuna nahi)

| Shot | Pal | Sound ka kaam |
|---|---|---|
| S01 | Task handoff (f84) | Kagaz ka halka sa rakhna — kaam shuru hone ka ehsaas. Bina music ke bhi chalega. |
| S02 | Flap khulta hai (f480–522) | Kagaz ka khulna. Bahari cheez ke aane par tone halka sa thanda. |
| S03 | Selection brackets (f906–936) | Koi “alarm” nahi — sirf ek rukna (silence ka ek pal). Khatra shor se nahi, khamoshi se. |
| S04 | Copy strip flight (f984–1038), kalam likhti hai (f1050–1092) | Kagaz ki sarahat + kalam ki likhai. NEW SCRIPT par koi jeet-wali dhun **nahi** (script safe nahi hai). |
| S05 | RUN press (f1440) | Ek hi saaf click/thock. RUNNING ke saath halki si machine ki saans. |
| S06 | Read line, K02 janm (f1920–1992) | Andar ki taraf kheenchne wala halka swar; copy banne par ek chhoti si “alag hone” ki awaaz. |
| S07 | K02 bahar, receipt (f2100–2130) | Doori me jaati awaaz; receipt par ek band hone jaisi thap. Caption iske **baad** aata hai — sound use pehle ghoshna nahi karega. |
| S08 | Category | Music (agar hai) ek pal ke liye ruk jaye. Naam ko khamoshi mile. |
| S09 | Kagaz wipe | Kagaz ka palatna — naye hisse ka darwaza. Koi reverse/undo jaisi awaaz **nahi** (leak undo nahi hua). |
| S10 | Clean copy andar (f2862), shutter band (f3012–3030) | Shutter ki asal band hone ki awaaz — poore sound pass ka sabse important sound. Uske baad shaanti. |
| S11 | Protected RUN (f3258–3270) | Wahi click jo S05 me tha — wahi code, wahi harkat. Pehchan jaan-boojh kar rakhi hai. |
| S12 | Read denied (f3510) | Diwaar par rukne ki awaaz; koi error-buzzer nahi (video ka tone cheekhta nahi). |
| S13 | Packet shutter se takraya (f3792) | Band darwaze par halki takkar, phir khamoshi. “BLOCKED” ko awaaz ki mohar nahi chahiye. |
| S14 | Do seekh, ek-ek karke | Beech ka badlav (f4140–4149) khamoshi me ho — dusri seekh saaf ghanti jaisi ek halki tone le sakti hai. |
| S15 | Lockup | Saari awaazein band. Aakhri frame khamoshi me rukta hai. |

## Kya kabhi nahi hoga

- Hamlawar ke liye “bura aadmi” wali dramatic dhun (video shiksha hai, thriller nahi)।
- RUNNING se pehle koi chalne ki awaaz (timing ka jhooth sound se bhi nahi hoga)।
- Green/safe ehsaas wali “success” dhun script par (forbidden state, shabdon ki tarah awaaz me bhi)।
- Bina license likhe koi music track; bina faisle ke synthetic voice।

## Faisle ke baad ke kadam

1. Cue sheet par user ka review → 2. Licensed music chuno (credit production folder me) → 3. SFX banao/chuno, har cue ko uske frame par rakho → 4. Mix −14 LUFS, phone speaker par suno → 5. Naya version `002-asi05-premium-9x16-v2.mp4` (v1 silent kabhi delete nahi) → 6. `templates/06-release-checklist.md` se release gate → 7. Landing + walkthrough me “sound” status update।

Tab tak: **silent hi final hai**, aur ye document uska kaaran bhi hai aur uske badle ka raasta bhi।
