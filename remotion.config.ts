import { Config } from "@remotion/cli/config";

// Render defaults: high-quality H.264, JPEG frames (fast), audio AAC-ready output.
Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
Config.setChromiumOpenGlRenderer("angle");
