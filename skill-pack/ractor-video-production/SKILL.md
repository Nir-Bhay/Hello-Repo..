---
name: ractor-video-production
description: Direct and produce Ractor cybersecurity shorts with visual storytelling, designed vector motion, licensed audio, native single-canvas GIF companions and rendering in a retained GitHub Codespace. Use for research, scripts, storyboards, GIFs, production and refinement.
---

# Ractor video production

Produce an explanation the viewer can follow from visible actions. Preserve the user's current episode, audience, pace and voice preference. Repository: `Ractorrr/framer_youtube`, branch `main`. ASI10 and ASI09 are production history, not automatic quality benchmarks. The user rejected ASI09's visual finish; leave it unchanged unless explicitly asked to reopen it.

Read [visual direction](references/visual-direction.md) before scripting or boarding. Read [quality and evidence](references/quality-and-evidence.md) when defining or reviewing readiness; it records demonstrated ASI09 failures and separates research from house heuristics. Read [brand and story](references/brand-and-story.md) for identity, [audio and rendering](references/audio-and-rendering.md) for sound/export and [studio operations](references/studio-operations.md) before remote work.

For a new scene, visual refresh or motion-polish task, also apply [Ractor motion direction](../ractor-motion-direction/SKILL.md). Its style roles and review gates replace any assumption that a valid export or higher frame rate is a polished animation.

Read [GIF production](references/gif-production.md) when composing an animated GIF companion. Treat it as an independently directed visual artwork with its own story, composition and motion. Do not derive it from video shots or speed up the film unless the user explicitly asks for that approach. Keep video and GIF as separate deliverables.

## Essential workflow

- Verify the episode mechanism against primary security sources. Write the causal event chain and the viewer's question at each beat before captions. Show important decisions and their consequences in plain, specific English.
- After **every** episode, audit the actual result, research its most consequential weaknesses and update the reusable method before proceeding to the next countdown entry. Follow [episode improvement](references/episode-improvement.md); technical success does not skip this cycle.
- Design key poses and a rough timed animatic before finishing the whole film. Resolve a representative difficult sequence—evidence, handoff, action, consequence and camera/text behavior—before expanding its visual language. This is an internal production gate, not an extra user-approval requirement.
- Give essential evidence more visual weight than decorative actors. Compose labels near their referents; keep a text unit stable while read. No mandatory pinned ticket, permanent header, mascot, zoom or flowing transition applies to every episode.
- Create continuity through the same action, state and unresolved question. A shared element or clean cut can both work. A handoff must visibly reach a recipient and cause a response; preserving an ID or coordinate alone is insufficient.
- Plan important motion as orient/anticipate, act, contact/decision, consequence and settle. Secondary motion can overlap when it explains a response. Static objects need no ceremonial entrance. Check silhouettes, grouping, text coverage and scene boundaries after camera transforms.
- Keep artwork, semantic state, camera and sound on one deterministic timeline. Derive motion endpoints from named object anchors. React/Remotion animations must follow rendered frames; arbitrary Framer Motion clocks do not automatically export correctly. A library change cannot supply art direction.
- Separate export checks, semantic event checks, artistic playback review and comprehension evidence. Check forbidden early states as well as required later states. A sorted beat list or hardcoded true flag cannot certify story correctness.
- Review representative motion and the finish at normal speed and actual phone-sized display, plus critical frames. Audition the mix when supported. Record what was actually inspected; unavailable playback/listening leaves those stages pending. Contact sheets and loudness measurements do not establish artistic quality. An independent agent can challenge a draft, but cannot certify human comprehension or retention.
- Keep heavy rendering, decoding, mixing and project tests in the Codespace. Local work is source editing, authentication, transport and playback. Documentation-only commits do not require waking the studio.
- Reuse the exact studio in `production/studio-state.json`. **Stop and retain it when work ends, including errors.** Do not use the temporary Codespaces runner that deletes its machine. Never delete without explicit user instruction.
- Keep source, art, original licensed audio, credits, stems, export, preview and review records committed/pushed. Exclude credentials, caches and temporary downloads. Save source before rendering and outputs after verification; download deliverables before stopping. Confirm actual Shutdown/Stopped state without waking it again.
- Use licensed minimal music below the action and a small purposeful family of effects. Sound reinforces visible events; no synthetic voice by default. Preserve attribution and modifications. Publishing or messaging external reviewers needs its own authorization.

Research/audit and ASI08 preproduction live under `production/research-upgrade/` and `production/asi08/`. Styleframes are design proposals, not evidence of smooth animation. Do not call a preproduction package a finished film.

Reuse [scripts/studio.py](scripts/studio.py) for an existing episode production job. `--source-only` omits old render-output and shots from upload; original source media is still uploaded. The helper runs project work remotely and stops the selected studio in `finally`. Reuse working transport/export machinery while choosing scene architecture and art for the current story.

The first countdown has no spoken narration. Later use the creator's own recorded voice when requested. A newer explicit instruction overrides these defaults.
