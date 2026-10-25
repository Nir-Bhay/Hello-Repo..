# STORYBOARD / SHOT LIST — 001-chatgpt-google-connect

> Persistent object: **coral dot + "ChatGPT × Google" header + phone/UI mock card** — teeno poori video me rehte hain, role badalte hain.
> Hero moment: **22s pe Gmail ka pehla magic jawab** (summary card pop) — uske pehle sab build-up hai.
> Camera: har scene slow push-in; emphasis points pe punch-in. Transitions: MOTIVATED — mail card hi phail ke chat banti hai; generic wipe nahi.

| Shot | Time | Shot + Camera | Screen pe kya (EK focal point) | Entrance → Hold → Exit | Transition IN | Sound cue | On-screen text |
|---|---|---|---|---|---|---|---|
| S1 | 0:00–0:04.5 | CU, punch-in | Bada hook text + mail envelope draw-on, 3 mail badges pop | pop scale → hold 2s → slide-down exit | — (frame 0 = thumbnail: hook text turant) | riser → impact @0.4s, pops @ badges | "ChatGPT ab tumhara GMAIL bhi padhega!" |
| S2 | 0:04.5–0:10 | MS, push-in | "PLUGINS" chip pe bada cross, neeche naya raasta: Settings → Plugins | chip shake+cross draw → hold → fade | mail card shrink ke chip banta hai | whoosh in, buzz/cross thud @6s | "Ruko. Purane Plugins band ho chuke. Ab: Settings → Plugins" |
| S3 | 0:10–0:22 | MS→CU slow push | UI mock: Settings list, 4 steps ek-ek highlight, Gmail row ka toggle ON hoke "Connected ✓" | har step 2.6s: highlight slide → ding → hold | card neeche se rise | har step click, final ding @20.5s | "4 steps: Settings · Plugins · Gmail · Connect→Allow" |
| S4 | 0:22–0:31 | CU, halka push | Chat mock: prompt typewriter, AI summary card (3 mail rows), reply-draft chip | typing 0.045s/char → card spring pop → hold | toggle ki roshni chat me phailti hai | typing ticks, pop @26s, pop @29s | ""Aaj ke important mail batao" ✦ summary" |
| S5 | 0:31–0:41 | MS, pan-up feel | Do cards: Drive doc-summary, Calendar kal ki timeline + naya event pop | cards stagger 0.4s → hold | chat card split hoke do cards | whoosh @31s, pops @ events | "Drive: report ki summary · Calendar: kal ka din" |
| S6 | 0:41–0:46 | MS, static (jaan-bujh ke — serious baat) | Shield ✓ + 3 chhoti lines; neeche routine strip: ☀ mail → 📅 plan → 🚀 kaam | lines stagger → hold | fade (shaant scene = fade allowed) | soft chime @41.5s | "Permission padh ke Allow. Disconnect kabhi bhi." |
| S7 | 0:46–0:50 | CU, slow push-out settle | Final lockup: "ChatGPT = Assistant." + CTA badge + save hint | badge pop → **4s hold** | routine strip ka coral dot bada hoke lockup ka dot banta hai | final ding + music resolve | "ChatGPT = sirf chat nahi, Assistant. Save kar lo!" |

## Notes / risks (review loop me pehle yehi check hoga)
- S3 sabse bhari scene hai — 4 steps me kahin text chhota na ho jaye; phone test zoruri.
- S4 typing ke dauraan summary card jaldi na aaye — card prompt khatm hone ke BAAD hi pop hoga.
- Kahin bhi do bade text blocks ek saath nahi — ek focal point ka rule.
- Music 92 BPM; bade SFX beats pe baithenge (track timeline ke seconds se hi generate hua hai).

## Music/SFX plan
Lo-fi-ish warm pad (Am–F–C–G loop, sine+tria, halki vinyl noise) 92 BPM poori video · SFX: riser/impact (hook), thud (cross), clicks (steps), ding (connected), typing ticks, pops (cards), chime (safety), resolve ding (final). Master target −14 LUFS. Generator: `make-audio.py` (isi folder me) → `public/audio/p001-track.mp3`.
