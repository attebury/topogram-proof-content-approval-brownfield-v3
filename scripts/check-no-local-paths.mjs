import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const blocked = [
  /\/Users\/[^\s"']+/g,
  /\/private\/tmp\/[^\s"']+/g,
  /\/private\/var\/[^\s"']+/g,
  /\/home\/runner\/[^\s"']+/g,
  /C:\\\\Users\\\\[^\\s"']+/g
];
const ignoredDirs = new Set([".git", "node_modules", ".svelte-kit", ".vite", "dist", "build"]);
const checkedExtensions = new Set([".json", ".md", ".txt", ".tg", ".sql", ".yml", ".yaml"]);
const violations = [];

function shouldCheck(filePath) {
  if (filePath.includes(`${path.sep}node_modules${path.sep}`)) return false;
  const ext = path.extname(filePath);
  return checkedExtensions.has(ext);
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (ignoredDirs.has(entry.name)) continue;
      walk(absolute);
      continue;
    }
    if (!entry.isFile() || !shouldCheck(absolute)) continue;
    const text = fs.readFileSync(absolute, "utf8");
    for (const pattern of blocked) {
      pattern.lastIndex = 0;
      if (pattern.test(text)) {
        violations.push(path.relative(root, absolute));
        break;
      }
    }
  }
}

walk(root);
if (violations.length > 0) {
  console.error("Local absolute paths found in public proof files:");
  for (const file of violations) console.error(`- ${file}`);
  process.exit(1);
}
console.log("No local absolute paths found in public proof files.");
