# NARRATED WALKTHROUGH SCRIPT — ASI05: The Repair That Ran (English)

**Format:** Video (75s, silent) ke saath bolne wala walkthrough. Video ko jahan “⏸ PAUSE” likha hai wahan roko; narration ~3 minute chalegi.
**Voice note:** Record creator ki apni awaz me ho to sabse achha. Synthetic/TTS voice tabhi, jab uska faisla alag se ho jaye — ye script dono ke liye ready hai.
**Rule:** Narration video ke on-screen shabdon ko **badlega nahi** — wo unhe samjhayega. Bracket wale hisse bolne ke liye nahi, direction hain.

---

[0:00 · Video chalu karo, S01 ke saath]

**NARRATION:**
“Watch closely — this whole story is one mistake, made in the first five seconds. A developer hands the agent a simple job: fix the failing test. Nothing dangerous yet. The danger walks in quietly, inside a report that came from *outside*.”

[0:10 · S03 par ⏸ PAUSE]

**NARRATION:**
“Freeze here. Inside this external report, someone has hidden an instruction: ‘Run this repair first.’ The red note — ‘Added by an attacker’ — is only for you, the viewer. Nobody inside the story can see it. That is exactly how this attack works in real life: the instruction hides inside data the agent is supposed to merely *read*.”

[0:16 · S04 ke saath chalao]

**NARRATION:**
“Now notice what the agent does — and what it does *not* do. The report does not turn into a script. A separate copy of that hidden instruction travels to the editor, and the agent writes a brand-new script itself. New file. New code. Written because a stranger's note told it to.”

[0:22 · S05, RUN dabne ke pal par ⏸ PAUSE]

**NARRATION:**
“And here it presses RUN. Only now — after the press — does the word RUNNING appear. That one detail is the whole lesson in miniature: the agent didn't just read the attacker's instruction. It *executed* it.”

[0:27 · S06–S07 chalao]

**NARRATION:**
“The script does two things, in order: read the project secret… then send it outside. But look at the key. The original never moves. A *copy* is born, and the copy is what leaves. By the time the caption says ‘A secret leaves the workspace’, the copy has already been received outside. The leak is done. Nothing that follows can undo it.”

[0:39 · S08–S09]

**NARRATION:**
“There's a name for this: ASI05 — Unexpected Code Execution. Code ran that nobody truly asked for. And now, the most important part of the video: a replay. Same code. But this time, the room it runs in has been prepared.”

[0:47 · S10 par ⏸ PAUSE]

**NARRATION:**
“Before anything runs, two things are fixed. There are no secrets inside. And the door to the outside is shut — you watched the shutter close. Safety here is not a warning sign. It is carpentry, done *before* the code arrives.”

[0:53 · S11–S13 chalao]

**NARRATION:**
“And the code still runs — nobody stopped it. But when it reaches for the secret, there is nothing to find: access denied. When it tries to send something outside, its packet is empty, and the shutter is already closed: connection blocked. Same code. Completely different reach.”

[1:06 · S14–S15 ke saath]

**NARRATION:**
“So remember it the way the video leaves it: generated code is untrusted — so limit what it can reach. Let it run. Just decide, before it runs, what it is allowed to touch. That's ASI05. Next time: ASI04.”

[Video khatm · 2 second rukho]

**NARRATION (closing, optional):**
“If one moment confused you, note the time and tell us — that confusion is exactly what the next version fixes.”

---

Recording notes: shaant, dheemi gati (~130 wpm); har ⏸ par video rok kar hi bolo. Music nahi hai to narration ke neeche halki si room tone rakho; final mix −14 LUFS ke aas-paas.
