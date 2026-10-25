#!/usr/bin/env node
/**
 * check-links.mjs — repo ke saare internal Markdown links verify karo.
 * Toota link mile to exit 1. Koi dependency nahi (sirf Node).
 * Use: npm run check:links
 */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
// "skill-pack" jaan-boojh kar bahar hai: wo user ki di hui byte-identical imported
// snapshot hai, uske andar ke kuch links un files ki taraf hain jo upload me aayi hi
// nahi thin. Use badalna provenance tod dega; checker repo-authored docs ke liye hai.
const SKIP_DIRS = new Set([".git", "node_modules", "dist", "out", "references", ".arena", "skill-pack"]);

function collectMarkdown(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) collectMarkdown(full, acc);
    else if (name.toLowerCase().endsWith(".md")) acc.push(full);
  }
  return acc;
}

const LINK_RE = /!?\[[^\]]*\]\(([^)]+)\)/g;
const SKIP_RE = /^(https?:|mailto:|tel:|data:|#)/i;

let checked = 0;
const broken = [];

for (const file of collectMarkdown(ROOT)) {
  const text = readFileSync(file, "utf8");
  for (const match of text.matchAll(LINK_RE)) {
    let target = match[1].trim();
    if (target.startsWith("<") && target.includes(">")) {
      target = target.slice(1, target.indexOf(">"));
    } else {
      target = target.split(/\s+/)[0];
    }
    if (!target || SKIP_RE.test(target)) continue;
    const clean = target.split("#")[0].split("?")[0];
    if (!clean) continue;
    let decoded = clean;
    try {
      decoded = decodeURIComponent(clean);
    } catch {
      /* garbled encoding ko jaisa hai waisa check karo */
    }
    const resolved = decoded.startsWith("/")
      ? resolve(ROOT, "." + decoded)
      : resolve(dirname(file), decoded);
    checked += 1;
    if (!existsSync(resolved)) {
      const line = text.slice(0, match.index).split("\n").length;
      broken.push(`${file.slice(ROOT.length + 1)}:${line} → ${target}`);
    }
  }
}

if (broken.length > 0) {
  console.error(`✗ ${broken.length} toota hua internal link mila:`);
  for (const b of broken) console.error("  " + b);
  process.exit(1);
}
console.log(`✓ Saare internal Markdown links theek hain (${checked} links checked).`);
