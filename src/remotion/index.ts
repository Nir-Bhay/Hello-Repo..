import { registerRoot } from "remotion";
import { RemotionRoot } from "./Root";

// Fontsource = offline fonts (render machine pe internet nahi chahiye)
import "@fontsource-variable/inter";
import "@fontsource/instrument-serif";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/700.css";

registerRoot(RemotionRoot);
