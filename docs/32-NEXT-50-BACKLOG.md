# Next 50 — Dusra Contribution Backlog (C51–C100)

**Fixed goal:** *Next 50 meaningful contributions — ek-ek karke, bina fake commits ke, jab tak poora na ho.*
Pehla backlog (`docs/18-CONTRIBUTION-BACKLOG-50.md`, C01–C50) PR #2 me merge ho chuka hai. Ye dusri list wahi se aage hai. Jo kaam kisi faisle par atka hai, use “Blocked” likha hai — baaki kaam uski wajah se **nahi rukega**.

> Usool wahi purane wale: ek task = ek logical, reviewable badlav · daave ke saath saboot · jo test na ho wo “pending” · copy/timing ke lock kabhi bina document-review ke nahi tootte.

## Batch 7 — ASI04 ki neev (C51–C60)

| ID | Task | Status | Acceptance |
|---|---|---|---|
| C51 | ASI04 topic/story ka decision document | ⛔ User ki disha chahiye | Episode ka vishay + seekh ek page me, user-approved |
| C52 | ASI04 Director's Note | Blocked (C51 ke baad) | Incident ki sachchai, causal chain, forbidden states |
| C53 | Hook ke 3 options + final hook | Blocked | Teen options me se ek chuna hua, wajah ke saath |
| C54 | ASI04 script (exact copy) | Blocked | Har shot ke exact on-screen shabd, padhne ke samay ke saath |
| C55 | ASI04 storyboard | Blocked | Shot-by-shot frame ranges, camera holds, contact frames |
| C56 | ASI04 timeline.json | Blocked | Har beat seconds me lock; script se match |
| C57 | Frame-cues CSV generator script | Ready | Ek command se shot boundaries se poori frame table bane |
| C58 | Sabse mushkil harkat ka motion proof | Blocked (C55 ke baad) | Proof render + frame review, poore episode se pehle |
| C59 | ASI04 cover image | Blocked (C51 ke baad) | Palette lock, koi readable AI-text nahi (docs/28) |
| C60 | ASI04 gate-review packet | Blocked | Stills + proof + checklist ek jagah, user review ke liye |

## Batch 8 — Awaaz: narration + sound (C61–C70)

| ID | Task | Status | Acceptance |
|---|---|---|---|
| C61 | ASI05 English narration recording | ⛔ Voice faisla | `07-walkthrough-script.md` ki recording + take notes |
| C62 | ASI05 Hinglish narration recording | ⛔ Voice faisla | `08-walkthrough-script-hindi.md` ki recording |
| C63 | Teeno walkthroughs ki SRT captions | Blocked (recordings ke baad) | SRT time-codes narration se match |
| C64 | ASI05 SFX implementation (cue sheet) | ⛔ Sound faisla | `09-sound-design-plan.md` ke har cue ka sound frame par |
| C65 | Licensed music selection + credit | ⛔ Sound faisla | Track ka license/credit production folder me likha |
| C66 | Mix −14 LUFS + phone test record | Blocked | Loudness report + phone speaker par suna gaya |
| C67 | Sound wala v2 render + saboot | Blocked | `verify:video` report; v1 silent kabhi delete nahi |
| C68 | P001 narration + music ducking | ⛔ Voice faisla | `06-walkthrough-script.md` record; music narration ke neeche |
| C69 | Demo walkthrough (60s) recording | ⛔ Voice faisla | `docs/26` script ki recording |
| C70 | Audio loudness/credit audit table | Blocked | Har audio file: source, license, LUFS — ek table |

## Batch 9 — Automation & release (C71–C80)

| ID | Task | Status | Acceptance |
|---|---|---|---|
| C71 | CI workflow asal me lagana | ⛔ `workflows` permission | `.github/workflows/ci.yml` (ready file docs/25 me) pehle PR par green |
| C72 | CI me strict lint gate | Blocked (C71 ke baad) | `npm run lint` CI me chale |
| C73 | PR par asset-size automatic summary | Blocked (C71 ke baad) | Report:assets ka natija PR par dikhe |
| C74 | verify-video ko release ka lazmi step | Ready | Release checklist me command + expected values |
| C75 | Ek command: `npm run release:check` | Ready | links + lint + build + assets ek saath, fail matlab fail |
| C76 | Merge ke baad landing deploy check | Ready | Checklist docs/24 ke saath jud jaye |
| C77 | `out/` purane renders ki safai-policy | Ready | Kya rakhte hain/kya hatate hain, saboot ke saath (finals kabhi bina record ke nahi) |
| C78 | CHANGELOG shuru karna | Ready | Har release ek entry: kya, kyon, saboot ka link |
| C79 | Version-tagging ka niyam | Ready | v1/v2/final kab kahenge — ek chhota doc |
| C80 | Final MP4s ki inventory | Ready | Har final: path, size, duration, status — ek table |

## Batch 10 — Quality aur gehri accessibility (C81–C90)

| ID | Task | Status | Acceptance |
|---|---|---|---|
| C81 | Keyboard checklist asal me chalana | Ready (haath ka kaam) | docs/22 ke har box par pass/fail + browser |
| C82 | Mobile screenshots saboot (360/390/430) | Ready | Teen widths, koi horizontal scroll nahi — screenshots record |
| C83 | Rang-contrast audit | Ready | Text/background ke ratios, kamzor jodi ki list |
| C84 | Landing par SRT/VTT captions | Blocked (C63 ke baad) | Har final video ke saath caption track |
| C85 | Poster ke 9:16 + 4:3 crop variants | Ready | Subject kata na ho; dono crops verify |
| C86 | ASI05 hero-anchor contact sheet + record | Ready | docs/27 ke anchors ki sheet, aankh se dekhi hui |
| C87 | P001 verify-report notes me darj | Ready | Codec/fps/frames/duration notes.md me saboot ke saath |
| C88 | Quarterly docs review ka pehla run | Ready | docs/30 ki table bhari hui, ek PR me |
| C89 | “Pending” daavon ki safai | Ready | Jo ho gaya Done; jo nahi, sach likha |
| C90 | ASI05 phone comprehension test record | ⛔ User review | Bina pause dekha; uljhan wala pal time ke saath likha |

## Batch 11 — Growth & portfolio (C91–C100)

| ID | Task | Status | Acceptance |
|---|---|---|---|
| C91 | P001 ki case-study page | Ready | Problem → process → evidence → result → seekh |
| C92 | README showcase section | Ready | Sabse achha kaam upar dikhe, links ke saath |
| C93 | docs/29 ko asal GitHub issues me badalna | Ready (issue kholna owner ka kaam) | 10 issues, har ek acceptance ke saath |
| C94 | ASI04 launch packet ka khana | Blocked (C51 ke baad) | Cover + teaser + walkthrough ki jagah ready |
| C95 | Production summary cards | Ready | Har production: duration/format/status/links ek jagah |
| C96 | ASI series index | Ready | Aaya hua + aane wala, status ke saath (bina invent kiye) |
| C97 | “Kaise dekhein” viewer guide | Ready | Shorts se aane walon ke liye ek page |
| C98 | Kisi aur ka pehla PR karwana | ⛔ Dusra contributor | Ek asal PR kisi aur ke naam se merge |
| C99 | Case studies ko landing se jodna | Ready | Landing se case-study pages ek click par |
| C100 | C51–C100 mid-review | Aakhir me | Kya hua, kya atka, agle 50 ki seedh |

## Kahan se shuru (is branch par)

Pehle **bina-faisle wale** kaam: C75 (release:check), C86 (contact sheet), C87 (P001 saboot), C78/C80/C95/C96/C97 (docs). Faisle wale (C51 story · voice · workflows permission · C90 phone test) apni jagah park rahenge — unki wajah se baaki kaam nahi rukega.
