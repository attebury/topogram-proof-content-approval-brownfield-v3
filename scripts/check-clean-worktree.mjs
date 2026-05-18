import { execFileSync } from "node:child_process";
const status = execFileSync("git", ["status", "--short"], { encoding: "utf8" }).trim();
if (status) {
  console.error(status);
  process.exit(1);
}
console.log(JSON.stringify({ ok: true, type: "clean_worktree" }, null, 2));
