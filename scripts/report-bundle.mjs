#!/usr/bin/env node
/** report-bundle.mjs (T147 + issue #12) — landing bundle ka imandaar hisaab.
 * Do number: (1) INITIAL chunk (index-*.js — pehle paint ke liye lazmi),
 * (2) LAZY chunks (baad me load hone wale, jaise Remotion DemoStage).
 * Budget: initial 300 KB, kul 700 KB raw. Upar jaaye to pehle ticket, phir badlav. */
import { readdirSync, statSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dir = join(ROOT, "dist", "assets");
let initial = 0, lazyTotal = 0;
for (const n of readdirSync(dir)) {
  if (!n.endsWith(".js")) continue;
  const kb = statSync(join(dir, n)).size / 1024;
  if (n.startsWith("index-")) initial += kb; else lazyTotal += kb;
  console.log(`  ${n}: ${kb.toFixed(1)} KB${n.startsWith("index-") ? " (initial)" : " (lazy)"}`);
}
const total = initial + lazyTotal;
console.log(`Initial: ${initial.toFixed(1)} KB (budget 300) · Lazy: ${lazyTotal.toFixed(1)} KB · Kul: ${total.toFixed(1)} KB (budget 700)`);
if (initial > 300 || total > 700) { console.error("x Budget se bahar — pehle ticket kholo."); process.exit(1); }
console.log("✓ Bundle budget ke andar hai.");
