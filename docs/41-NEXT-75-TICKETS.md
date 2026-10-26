# Next 75 Tickets (T101–T175) — Har Ticket pehle Likha, Phir Implement

**Usool:** Ticket = एक logical, reviewable, meaningful काम. कोई ticket fake, खाली, या गिनती बढ़ाने के लिए नहीं है. हर ticket के सामने उसका “क्यों” और “हो गया, कैसे पता” लिखा है. जो ticket किसी फैसले (story / voice / permission) पर अटका होगा, उसे Blocked लिखेंगे — बाक़ी काम रुकेगा नहीं.

## Batch A — खुले issues बंद करो + तत्काल polish (T101–T110)

| ID | Ticket | क्यों important | Acceptance |
|---|---|---|---|
| T101 | Issue #5: footer से walkthrough index link | Viewer video देखकर guide तक न पहुँचे तो walkthrough बेकार | Footer से एक click; build pass (Issue #5) |
| T102 | Issue #9: Root.tsx comments एक Hinglish शैली में | Registry पढ़ने वाले को हर version का status एक ही भाषा में मिले | सिर्फ़ comments बदलें; कोई id/duration न बदले; tsc clean (Issue #9) |
| T103 | Issue #8: CONTRIBUTING में 15-minute quickstart | नया contributor बिना पूछे पहला PR कर सके | Commands सच में चलते हुए verify; एक page से कम (Issue #8) |
| T104 | Issue #7: Prettier pilot (एक file) | Format का फैसला अंदाज़े से नहीं, diff देखकर | Sirf़ `src/data/walkthroughs.ts`; diff सिर्फ़ formatting; lint pass (Issue #7) |
| T105 | Issue #6: ASI05 full review-anchor sheet | 14 hero frames से आगे के anchors भी सबूत में आएं | 19 anchors की sheet आँख से देखी हुई; forbidden state मिले तो अलग issue (Issue #6) |
| T106 | Landing पर “Skip to walkthroughs” skip-link | Keyboard user को hero पार किए बिना सीधे काम की जगह | Tab की पहली stop skip-link; focus दिखे; docs/22 में record |
| T107 | Prettier pilot का फैसला: अपनाना है या नहीं | आधा-अधूरा format सबसे ख़राब होता है | Pilot diff देखकर docs/38-जैसा एक छोटा decision record; या config हटे या rollout plan बने |
| T108 | Footer में final-assets inventory का link | ग़लत file upload होना सबसे महंगी ग़लती है | Footer से docs/33 एक click; ग़लत-file वाली चेतावनी के साथ |
| T109 | `docs/17` index में transcripts/scripts की सीधी कड़ियाँ | Guide है पर रास्ता न मिले तो guide नहीं है | ASI05/P001 rows से transcript + script सीधे खुलें; check:links pass |
| T110 | CHANGELOG को हर PR की आदत बनाना | History ही portfolio है | CONTRIBUTING में एक line का नियम + इस batch की entry CHANGELOG में |

## Batch B — ASI04 pre-production pack (T111–T125) · story मिलते ही शुरू

| ID | Ticket | क्यों | Acceptance |
|---|---|---|---|
| T111 | ASI04 topic decision record | Episode की नींव; ग़लत नींव पर सब बेकार | एक page: विषय, दर्शक, एक-line seekh — user-approved |
| T112 | Primary sources से mechanism verify | Security की बात ग़लत हो तो video नुक़सान है | 2+ primary sources Director's Note में cited |
| T113 | ASI04 Director's Note | Incident की सच्चाई, causal chain, forbidden states | ASI05 note के ढाँचे पर; chronology ताला |
| T114 | Hook के 3 options | पहला 3-second ही दर्शक तय करता है | Teen options + चुना हुआ, वजह के साथ |
| T115 | ASI04 script (exact copy ledger) | शब्द ही video है | Har shot के exact शब्द; पढ़ने का समय frame में |
| T116 | Storyboard (frame ranges + contact frames) | Code से पहले design | Har shot: frame range, focal owner, contact frame, camera hold |
| T117 | Timeline JSON | Script/storyboard एक ही घड़ी पढ़ें | Har beat seconds में; script से match |
| T118 | Frame-cues CSV (generator से) | 4500 rows हाथ से नहीं बनतीं | `generate-frame-cues.mjs` से table; boundaries storyboard से match |
| T119 | Key poses / storyboard board | ग़लत pose सस्ते में पकड़ में आती है | Saare shots की poses एक sheet पर; user review |
| T120 | Sabse mushkil harkat का motion proof | Poora render सबसे महंगा test है | Proof MP4 + frame review; Gate pass ke बाद ही full |
| T121 | ASI04 cover (docs/28 नियमों से) | Series की पहचान एक जैसी रहे | Palette lock; कोई readable AI-text नहीं; 9:16 + 4:3 crops |
| T122 | Walkthrough skeleton (templates/07) | Guide video के साथ-साथ बने, बाद में नहीं | सारे sections ख़ाली खानों के साथ episode folder में |
| T123 | Transcript skeleton | Silent video की “आवाज़” पहले दिन से | Shot table में copy के ख़ाने script से जुड़े |
| T124 | Forbidden-states checklist (episode-specific) | हर episode की अपनी वर्जित हालतें होती हैं | Storyboard के साथ list; review उसी से |
| T125 | Gate-review packet | User का review एक जगह, बिखरा नहीं | Board + proof + checklist एक folder/PR में |

## Batch C — आवाज़ का production (T126–T140) · voice फैसले के बाद

| ID | Ticket | क्यों | Acceptance |
|---|---|---|---|
| T126 | Voice decision record | बाद में “क्यों ये आवाज़” का जवाब record में हो | Creator voice/TTS — फैसला + वजह एक page |
| T127 | ASI05 English narration record + takes | Script (07) तैयार है, आवाज़ बाक़ी | Saaf takes + chune हुए takes की list |
| T128 | ASI05 Hinglish narration record | Hindi दर्शक इस series की जान है | Script (08) की recording; technical शब्द English में |
| T129 | P001 narration record | Video की अपनी आवाज़ मिले | Script (06) + music ducking notes |
| T130 | Demo walkthrough voice | Lab भी बोलकर समझाए | docs/26 की recording |
| T131 | Teeno ki SRT captions | सुनने में दिक़्क़त वालों के लिए | SRT narration से time-match; landing tracks update |
| T132 | SFX build (cue-sheet T-per-cue) | Sound हर्कत को आवाज़ दे, शोर नहीं | 09-plan के हर cue का sound frame पर |
| T133 | Licensed music + credit record | बिना license music = कानूनी जोखिम | Track, license, credit production folder में |
| T134 | Mix −14 LUFS + phone test | Platform loudness + असली कान | Loudness report; phone speaker record |
| T135 | Sound-wala ASI05 v2 render | Silent v1 safe रहे, v2 नया version | `verify:video` pass; naam docs/37 नियम से |
| T136 | Caption mux/playback check | Track है पर चले नहीं तो बेकार | Teeno players में CC on करके देखा गया |
| T137 | Audio audit table (C70 का रूप) | कौनसी आवाज़ कहाँ से आई | Source/license/LUFS एक table |
| T138 | Landing पर sound/silent labels सच | दर्शक को पहले पता हो आवाज़ है या नहीं | Har video card पर sahi badge |
| T139 | Narration वाली walkthrough videos publish-ready | Walkthrough अब बोला भी जाए | Render + verify + landing links |
| T140 | Sound pass retrospective | अगली episode में वही ग़लती न हो | एक page: क्या चला, क्या नहीं |

## Batch D — Automation & repo-health (T141–T155)

| ID | Ticket | क्यों | Acceptance |
|---|---|---|---|
| T141 | CI workflow असल में लगाना (permission के बाद) | हर PR ख़ुद जँचे | docs/25 की file; पहला green run record |
| T142 | CI में lint + release:check | Sirf़ build काफ़ी नहीं | Links/strict-tsc/assets CI में |
| T143 | CI पर asset-report सारांश | Budget चुपचाप न बढ़े | PR पर size report दिखे |
| T144 | Dependabot config | Dependencies पुरानी = जोखिम | `.github/dependabot.yml`; पहला PR आये या record |
| T145 | Issue template: Sound/Voice | आवाज़ के काम का अपना रास्ता | Templates में नया option; config update |
| T146 | Link-checker templates/ को भी घेरे | Template के link भी टूट सकते हैं | scripts में scope note + pass |
| T147 | Landing JS bundle budget | Preview भारी हो तो दर्शक भागता है | report:assets-जैसा JS size note; budget likha |
| T148 | Images compression audit | Covers/posters का वज़न | Har image का size table; भारी हो तो compress + visual match |
| T149 | Quarterly review 2027-Q1 | Ritual सिर्फ़ लिखा न रहे | docs/40-जैसा bhara table |
| T150 | Contrast re-audit (captions/posters के बाद) | नया काम पुरानी कमज़ोरी न लाए | docs/38 update; nayi finding ho to ticket |
| T151 | A11y re-run (naye posters/captions के बाद) | दावा ताज़ा रहे | docs/22 में naya execution record |
| T152 | Repo health one-pager | Ek nazar me repo ki sehat | Status: PRs, issues, assets, locks — ek page, tareekh ke saath |
| T153 | `out/` policy का पहला पालन-record | Policy काग़ज़ से आदत बने | docs/36 के hisaab se safai + ek line record |
| T154 | Security note: koi secret repo में नहीं | Cybersecurity repo khud saaf हो | .env/keys की khoj ka record; kuchh mile to turant karवाई |
| T155 | Backup/export drill | Finals ek hi jagah = जोखिम | Inventory (docs/33) se saari finals ki copy verify |

## Batch E — Content की गहराई (T156–T165)

| ID | Ticket | क्यों | Acceptance |
|---|---|---|---|
| T156 | ASI05 one-page printable summary | Teacher/parent के लिए kaाग़ज़ | Ek page: kahani, seekh, 3 sawal |
| T157 | “Check yourself” quiz page (ASI05) | देखना ≠ सीखना | 5 sawal, jawab walkthrough से जुड़े |
| T158 | Teacher/parent guide | बड़ों के लिए saath देखने का तरीका | Ek page: kab rokein, kya poochhe |
| T159 | FAQ page | बार-बार के sawalon का एक जवाब | Viewer ke asal sawal; jhoothा daava नहीं |
| T160 | v1 vs Premium comparison page | सुधार दिखना भी seekh है | Frame pairs + kya badla aur क्यों |
| T161 | Devanagari सारांश (ASI05) | Hindi पाठक के लिए अपनी लिपि | Walkthrough ka saar देवनागरी में; technical शब्द English |
| T162 | Glossary का विस्तार (ASI04 shabdon के साथ) | Series बढ़े तो शब्दावली साथ बढ़े | Naye shabdon ki entry C51 ke बाद |
| T163 | Episode timeline poster (image) | Ek tasveer me poora episode | Frames se bana poster; text code से, AI-text नहीं |
| T164 | Series bible (ek jagah saारे niyam) | Har episode नये सिरे से न सोचे | Palette/copy/forbidden/camera — ek doc |
| T165 | P001 update-check (flow badla to?) | Product UI बदलता है; video purाना हो सकता है | Sources dobara verify; badla ho to v2 ticket |

## Batch F — Growth & community (T166–T175)

| ID | Ticket | क्यों | Acceptance |
|---|---|---|---|
| T166 | ASI05 GIF companion (frames से) | Share होने वाला roop | `extract-frames` se chhota GIF; size budget me; productions में record |
| T167 | Good-first-issues round 2 | Pehle 5 के बाद अगले तैयार | Is list se 5 naye issue-ready kaam |
| T168 | Dusre contributor ka पहला PR (C98) | Repo ek aadmi का न रहे | Kisi aur का asal PR merge |
| T169 | README badges (CI ke बाद) | Bharosa ek nazar me | Sirf़ sachche badges (CI green ke बाद ही) |
| T170 | Social-preview विवरण (repo description/topics) | Link share ho to pehchan बने | Description + topics owner ke saath set |
| T171 | “Kaise dekhein” को landing से जोड़ना | Viewer guide chhupa न रहे | docs/35 landing footer/hero से ek click |
| T172 | Har production का share-card | Share = naye दर्शक | Cover + ek-line seekh + link, teenon productions |
| T173 | Community welcome note ( Discussions/Issues के लिए) | Aane wala ruke | Ek chhota welcome + pehla kadam |
| T174 | Portfolio index update (C50 ke बाद) | Kaam dikhe, बिखरा न हो | Case studies + finals ek page se |
| T175 | T101–T175 mid-review (C100 की तरह) | List jeeti रहे, kagaz न बने | Kya hua/kya atka/agle 75 ki seedh |

**Pehla kadam (is branch par):** Batch A — खुले issues #5, #9, #8, #7, #6 implement karke band karna, kyunki wo असली, खुले, aur bina किसी फैसले के हो सकते हैं.

## Progress — Batch A (is PR me)

- ✅ **T101** footer से walkthrough index + final-assets inventory के links (Issue #5 ka kaam).
- ✅ **T102** Root.tsx comments ek Hinglish शैली में — सिर्फ़ comments, कोई id/duration नहीं बदला (Issue #9).
- ✅ **T103** CONTRIBUTING में “15 minute me pehla PR” quickstart (Issue #8).
- ✅ **T104 + T107** Prettier pilot: `src/data/walkthroughs.ts` पर Prettier चलाया — **zero diff** (हाथ की शैली config से पहले से match थी). फैसला: config नये code के लिए रहेगी; `$comment` key हटाई ताकि warning न आये. पूरा-repo format अब भी अलग, reviewable काम रहेगा (Issue #7).
- ✅ **T105** Review anchors 14 → **19** (`npm run extract:asi05`); sheet आँख से देखी — RUNNING सिर्फ़ press के बाद, K01 जगह पर, shutter band, Next: ASI04. कोई forbidden state नहीं (Issue #6).
- ✅ **T106** Skip-link (“Seedha walkthroughs par jao”) — Tab की पहली stop, focus पर दिखता है.
- ✅ **T108** Footer में docs/33 inventory का link ग़लत-file चेतावनी के साथ.
- ✅ **T109** docs/17 में transcript/narration-script की सीधी कड़ियाँ.
- ⏳ T110 (CHANGELOG आदत) — CONTRIBUTING में नियम अगली बार; इस PR की entry CHANGELOG में है ही.

Issues #5–#9 का काम इस PR में है; merge होते ही `Closes` से वे अपने आप बंद होंगे.

## Progress — Batch D/E/F (PR #11 me joda gaya)

- ✅ **T110** CONTRIBUTING me “har PR me CHANGELOG entry” niyam.
- ✅ **T144** `.github/dependabot.yml` (npm, haftawar, `deps` prefix).
- ✅ **T145** Issue template: Sound/Voice + config.yml me entry.
- ✅ **T146** Link-checker ka scope verify: templates/ pehle se cover hai (checker poora repo ghoomta hai; docs/42 me record).
- ✅ **T147** `report-bundle` script — finding: landing JS 626 KB raw / ~196 KB gzip ek hi chunk; budget 700 KB dastak; code-splitting alag ticket (issue round-2).
- ✅ **T148** Image audit: saari images < 250 KB (docs/42 table).
- ✅ **T152/T153/T154** Repo health one-pager `docs/42`: secrets grep khoj saaf, out/ policy record, khule jokhim imandaari se likhe.
- ✅ **T156–T159 + T161** Viewer pack `docs/43`: ek-page kahani, 5-sawaal quiz, badon ke liye guide, FAQ, Devanagari saar.
- ✅ **T160** v1 (rejected) banam Premium tulna `docs/44`.
- ✅ **T164** Series bible `docs/45` (palette/camera/copy/forbidden/awaaz ke sthaayi niyam).
- ✅ **T163** Timeline poster `public/images/posters/asi05-timeline.jpg` (6 frames, aankh se verify).
- ✅ **T166** GIF companion: Run-press pal ka 3s GIF (240 KB) `productions/002…/assets/asi05-run-press.gif`.
- ✅ **T171** Landing footer me “Kaise dekhein” + Viewer Pack links.
- 🔸 T150/T151 (contrast/a11y re-run) — skip-link ke baad ka browser re-run agle round ke liye sach me khula hai; kagazi “done” nahi likha.
- 🔸 Batch B (ASI04) aur Batch C (awaaz) — faislon par park, jaisa tha.
