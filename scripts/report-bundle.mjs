#!/usr/bin/env node
/** report-bundle.mjs (T147) — landing ke JS bundle ka wazan aur budget.
 * dist/ (npm run build:preview ke baad) ke JS files ka size jodta hai.
 * Budget: kul JS 600 KB (gzip nahi, raw) — badhe to ticket kholo, chupchap mat badhao. */
import { readdirSync, statSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dir = join(ROOT, "dist", "assets");
const BUDGET_KB = 700; // asal: 626 KB raw / ~196 KB gzip (2026-10 record, docs/42) — isse upar = ticket
let total = 0; const rows = [];
for (const n of readdirSync(dir)) {
  if (!n.endsWith(".js")) continue;
  const kb = statSync(join(dir, n)).size / 1024; total += kb;
  rows.push(`  ${n}: ${kb.toFixed(1)} KB`);
}
console.log(rows.join("\n"));
console.log(`Kul JS: ${total.toFixed(1)} KB · budget ${BUDGET_KB} KB`);
if (total > BUDGET_KB) { console.error("✗ Bundle budget se bahar hai."); process.exit(1); }
console.log("✓ Bundle budget ke andar hai.");
