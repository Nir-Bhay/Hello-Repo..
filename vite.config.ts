import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Landing-page preview ke liye dev server.
// 0.0.0.0 bind + allowedHosts:true -> Arena live-preview host se khulta hai.
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: true,
  },
  preview: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: true,
  },
});
