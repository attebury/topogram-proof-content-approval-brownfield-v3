import fs from "node:fs";
import { execFileSync } from "node:child_process";

const manifest = JSON.parse(fs.readFileSync("proof/manifest.json", "utf8"));

function run(command, args) {
  execFileSync(command, args, { stdio: "inherit" });
}

function exists(path) {
  return fs.existsSync(path);
}

run("npm", ["run", "proof:check-paths"]);
run("npm", ["run", "proof:audit"]);

if (manifest.forbidsCanonicalTopo) {
  if (exists("topo") || exists("topogram.project.json")) {
    console.error("This checkpoint must remain pre-adoption and must not contain root topo/ or topogram.project.json.");
    process.exit(1);
  }
}

if (manifest.requiresCanonicalTopo) {
  run("./node_modules/.bin/topogram", ["check", ".", "--json"]);
}

if (manifest.requiresSdlc) {
  run("./node_modules/.bin/topogram", ["sdlc", "check", ".", "--strict"]);
}

run("npm", ["run", manifest.appCheckScript]);

if (manifest.requiresRecreatedCompile || exists("recreated-app/package.json")) {
  run("npm", ["run", "recreated:compile"]);
}

run("npm", ["run", "proof:clean"]);
console.log("Proof verification passed.");
