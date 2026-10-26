# WALKTHROUGH — P001: ChatGPT × Google Connect

![P001 walkthrough cover](../../public/images/walkthroughs/p001-chatgpt-google-cover.jpg)

**Ek line ki seekh:** *ChatGPT ab sirf chat nahi — sahi permission ke saath wo tumhara Gmail, Drive aur Calendar bhi sambhal sakta hai. Permission padh ke Allow karo.*

**Video:** `public/videos/001-chatgpt-google-9x16-v1.mp4` · Production copy: `001-chatgpt-google-9x16-v1.mp4` (isi folder me)
**Format:** 50 seconds · 9:16 · 1080×1920 · 30 FPS · H.264 + AAC (music + SFX, −14.3 LUFS) · koi voiceover nahi — screen ka text hi “awaz” hai
**Code:** `src/remotion/compositions/P001ChatGptConnect.tsx` · **Script:** `02-script.md` · **Storyboard:** `03-storyboard.md`

---

## Kahani ek saans me

Pehle fayda dikhta hai: *ChatGPT ab tumhara Gmail bhi padhega!* Phir ek sach: purane **Plugins band** ho chuke hain — ab raasta **Settings → Plugins/Apps** se jaata hai. Chaar steps me Gmail judta hai. Phir dikhta hai ki judne ke baad kya-kya ho sakta hai: mail ka summary, reply draft, Drive se report ki summary, Calendar ka din. Aur aakhir me ek dhyaan: **permission padh ke Allow karo, disconnect kabhi bhi ho sakta hai.**

## Time-by-time walkthrough

| Time | On-screen text (exact) | Kya ho raha hai | Kya notice karna hai |
|---|---|---|---|
| 0:00–0:04.5 | ChatGPT ab tumhara GMAIL bhi padhega! | Hook: mail notifications pop, envelope draw-on | Pehle **fayda**, tareeka baad me. Mute par bhi samajh aana chahiye. |
| 0:04.5–0:10 | Ruko. Purane wale Plugins band ho chuke. Ab ye Settings → Plugins me milta hai. | PLUGINS chip par cross; teer naye raaste ki taraf | Ye woh twist hai jo purani jaankari ko sahi karta hai. |
| 0:10–0:22 | Connect karna = 4 steps: 1 Settings kholo · 2 Plugins/Apps · 3 Gmail chuno · 4 Connect → Google pe Allow | Phone/UI mock me ek-ek step highlight, toggle ON | Sirf **4 steps** — isse zyada lage to video apna kaam nahi kar raha. |
| 0:22–0:31 | Gmail jud gaya to? — “Aaj ke important mail batao” · “Iska reply draft karo” | Chat mock: prompt type hota hai, summary + draft cards | Judna maksad nahi — **kaam** maksad hai. Dono example roz ke hain. |
| 0:31–0:41 | Drive: “Meri report dhundo, summary do” · Calendar: “Kal mera din kaisa hai?” | Doc summary card; kal ki timeline, meeting add | Ek hi pattern teeno jagah: *dhundo → samjho → kaam karo.* |
| 0:41–0:46 | Ek dhyaan: Permission padh ke Allow karo. Disconnect kabhi bhi, Settings se. | Shield icon; routine strip: mail → plan → kaam | Video ki sabse zimmedari wali line. Jaldi me gayab ho to galat hai. |
| 0:46–0:50 | ChatGPT = sirf chat nahi, tumhara Assistant. Pehle Gmail try karo. Save kar lo! | Final hold, coral dot pulse | Aakhri frame rukta hai — “Save kar lo” tabhi kaam karega jab padhne ka time mile. |

## Pause points

| Time | Wahan kya verify karna hai |
|---|---|
| ~0:03 | Hook bina sound ke padh sakte ho? Ek line, ek fayda. |
| ~0:08 | “Plugins band” wala sach saaf hai ya confusion lag raha hai? |
| ~0:20 | Chaaro steps ek saans me gin sakte ho? |
| ~0:35 | Drive aur Calendar ke example Gmail wale pattern ko dohra rahe hain? |
| ~0:44 | Permission wali line ko poora padhne ka time mila? |
| ~0:49 | Aakhri frame kam se kam 2 second rukta hai? |

## Design choices (kyon aisa bana hai)

- **Text hi awaz hai:** koi voiceover nahi, isliye har line apna hold leti hai aur sabse lambi line 6 shabd ki hai — phone par aram se padhegi.
- **Rhythm:** nayi line music (92 BPM) ki beat par aati hai; SFX har bade move ko awaz deta hai — whoosh (scene change), pop (cards), ding (connected), typing ticks (prompt).
- **Payoff-first hook:** pehle fayda (“Gmail bhi padhega”), phir tareeka. Viewer ko rukne ki wajah pehle 4.5 second me mil jaati hai.

## Dhyaan dene wali baatein (viewer ke liye)

- Kisi app ko connect karna matlab use apne data tak **permission** dena hai. Allow dabane se pehle padho ki wo kya-kya dekh sakta hai.
- Disconnect kabhi bhi Settings se ho sakta hai — video ye isliye kehta hai taaki connect karna “fasna” na lage.
- Product ke menu naam samay ke saath badal sakte hain (Plugins / Apps / Connectors). Video ka raasta usi samay ke official flow par bana tha — sources neeche script file me hain.

## Files ka naksha

| File | Kaam |
|---|---|
| `02-script.md` | Hook options, exact script, tone notes, sources |
| `03-storyboard.md` | Scene-by-scene storyboard |
| `timeline.json` | Saare beats seconds me lock |
| `make-audio.py` | Music/SFX track banane ki script |
| `src/remotion/compositions/P001ChatGptConnect.tsx` | Asal animation code |
| `public/audio/p001-track.mp3` | Final audio track (−14.3 LUFS) |

## Review questions

1. Bina sound ke dekha to bhi poori kahani samajh aayi?
2. “4 steps” sach me 4 lage ya kahin ulajh gaya?
3. Permission wali line neeche dab to nahi gayi — yaad rahi?
4. Aakhri “Save kar lo” par haath rukne ka man hua?

## Honest status

- ✅ Final render landing page par chalta hai (upar wala pehla video section).
- 🔊 Is video me sound hai (music + SFX) — ASI05 ke silent pass se alag.
- ⏳ Narrated walkthrough iske liye backlog me hai (C44) — hoga to script pehle yahi save hogi.
