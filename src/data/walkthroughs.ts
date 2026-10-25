/**
 * Walkthrough cards ka typed data (C26).
 * Nayi walkthrough jodna = yahan ek entry + docs/17 me ek row.
 * Cover images: public/images/walkthroughs/ (palette-locked, bina readable text ke).
 */
export interface Walkthrough {
  id: string;
  tag: string;
  title: string;
  cover: string;
  meta: string;
  points: string;
  watch: string;
  watchLabel: string;
  doc: string;
}

export const WALKTHROUGHS: readonly Walkthrough[] = [
  {
    id: "asi05",
    tag: "📖 WALKTHROUGH · ASI05 PREMIUM",
    title: "The Repair That Ran — shot-by-shot guide",
    cover: "/images/walkthroughs/asi05-premium-cover.jpg",
    meta: "75s · 15 shots · 60 FPS · silent",
    points:
      "Kaunsa frame par copy banti hai, RUN kab sach me dabta hai, aur Replay me kya badla — har shot ka time, frame aur matlab ek saath.",
    watch: "/videos/asi05-premium.mp4",
    watchLabel: "▶ Video dekho",
    doc: "productions/002-asi05-the-repair-that-ran/05-walkthrough.md",
  },
  {
    id: "p001",
    tag: "📖 WALKTHROUGH · P001",
    title: "ChatGPT × Google Connect — step-by-step guide",
    cover: "/images/walkthroughs/p001-chatgpt-google-cover.jpg",
    meta: "50s · 9:16 · 30 FPS · music + SFX",
    points:
      "Hook se permission wali line tak — har scene kyon wahan hai, kahan rukna hai, aur connect karne se pehle kya padhna hai.",
    watch: "/videos/001-chatgpt-google-9x16-v1.mp4",
    watchLabel: "▶ Video dekho",
    doc: "productions/001-chatgpt-google-connect/04-walkthrough.md",
  },
  {
    id: "demos",
    tag: "📖 WALKTHROUGH · DEMO LAB",
    title: "Showcase · ShortHook · DataStory — teen hunar",
    cover: "/images/walkthroughs/motion-studio-walkthrough-cover.jpg",
    meta: "Live Remotion player · neeche switcher se chuno",
    points:
      "Pehchan (kinetic type), dhyaan (3-second hook), aur saboot (data ko ehsaas) — teenon demos ka purpose aur review tareeka.",
    watch: "#live-demos",
    watchLabel: "▶ Live player par jao",
    doc: "docs/19-DEMO-COMPOSITIONS-WALKTHROUGH.md",
  },
];
