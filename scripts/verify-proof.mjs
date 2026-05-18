import fs from "node:fs";
import { execFileSync } from "node:child_process";

function run(command, args) {
  console.log([command, ...args].join(" "));
  execFileSync(command, args, { stdio: "inherit" });
}

run("npm", ["run", "proof:check-paths"]);
run("npm", ["run", "proof:audit"]);
if (fs.existsSync("topo")) {
  run("npx", ["topogram", "check", "."]);
  if (fs.existsSync("topogram.sdlc-policy.json")) run("npx", ["topogram", "sdlc", "check", ".", "--strict"]);
} else {
  console.log("No topo/ workspace in this checkpoint; Topogram validation intentionally skipped.");
}
run("npm", ["run", "proof:clean"]);
