import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const banned = [/\/Users\//, /\/private\/tmp\//, /\/private\/var\//, /\/home\//, /C:\\Users\\/i];
const skipDirs = new Set([".git", "node_modules", "dist", "build", ".svelte-kit", "coverage"]);
const scanned = [];
const offenders = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skipDirs.has(entry.name)) continue;
    const absolute = path.join(dir, entry.name);
    const relative = path.relative(root, absolute).replace(/\\/g, "/");
    if (entry.isDirectory()) {
      walk(absolute);
      continue;
    }
    if (!entry.isFile()) continue;
    scanned.push(relative);
    const text = fs.readFileSync(absolute, "utf8");
    if (banned.some((pattern) => pattern.test(text))) offenders.push(relative);
  }
}

walk(root);
if (offenders.length > 0) {
  console.error(JSON.stringify({ ok: false, type: "proof_path_hygiene", offenders }, null, 2));
  process.exit(1);
}
console.log(JSON.stringify({ ok: true, type: "proof_path_hygiene", scanned: scanned.length }, null, 2));
