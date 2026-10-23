import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./landing.css";
import "@fontsource-variable/inter";
import "@fontsource/instrument-serif";
import "@fontsource/jetbrains-mono/400.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
