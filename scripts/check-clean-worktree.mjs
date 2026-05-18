import { execFileSync } from "node:child_process";

const status = execFileSync("git", ["status", "--short"], { encoding: "utf8" }).trim();
if (status) {
  console.error("Verification changed the working tree:");
  console.error(status);
  process.exit(1);
}
console.log("Working tree remained clean.");
