import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(root, "proof", "manifest.json"), "utf8"));

function fail(message) {
  console.error(message);
  process.exit(1);
}

function readJson(relativePath) {
  try {
    return JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));
  } catch (error) {
    fail(`Expected parseable JSON at ${relativePath}: ${error.message}`);
  }
}

function getKey(object, keyPath) {
  return keyPath.split(".").reduce((value, key) => (value && Object.hasOwn(value, key) ? value[key] : undefined), object);
}

function assertPackagePin() {
  const pkg = readJson("package.json");
  const actual = pkg.devDependencies?.["@topogram/cli"] || pkg.dependencies?.["@topogram/cli"];
  if (actual !== manifest.topogramCliVersion) {
    fail(`Expected @topogram/cli ${manifest.topogramCliVersion}, found ${actual || "missing"}`);
  }
  if (fs.existsSync(path.join(root, "package-lock.json"))) {
    const lock = readJson("package-lock.json");
    const locked = lock.packages?.["node_modules/@topogram/cli"]?.version;
    if (locked && locked !== manifest.topogramCliVersion) {
      fail(`Expected package-lock @topogram/cli ${manifest.topogramCliVersion}, found ${locked}`);
    }
  }
}

function assertTags() {
  const tags = new Set(execFileSync("git", ["tag", "--list"], { encoding: "utf8" }).trim().split(/\r?\n/).filter(Boolean));
  for (const tag of manifest.expectedTags || []) {
    if (!tags.has(tag)) fail(`Expected proof tag ${tag} to exist`);
  }
}

function assertPathHygieneAudit() {
  const audit = readJson("proof/artifacts/path-hygiene-audit.json");
  if (audit.type !== "proof_path_hygiene_audit") fail("Path hygiene audit has the wrong type");
  if (audit.repository !== manifest.repository) fail(`Path hygiene audit repository is ${audit.repository}, expected ${manifest.repository}`);
  if (audit.topogramCliVersion !== manifest.topogramCliVersion) fail("Path hygiene audit CLI pin is stale");
  const failed = (audit.checks || []).filter((check) => check.status !== "passed");
  if (failed.length > 0) fail(`Path hygiene audit has failing checks: ${failed.map((check) => check.id).join(", ")}`);
}

function assertArtifact(item) {
  const absolute = path.join(root, item.path);
  if (!fs.existsSync(absolute)) fail(`Missing required proof artifact: ${item.path}`);
  const text = fs.readFileSync(absolute, "utf8");
  let json = null;
  if (item.json || item.type || item.keys) {
    try {
      json = JSON.parse(text);
    } catch (error) {
      fail(`Expected parseable JSON at ${item.path}: ${error.message}`);
    }
  }
  if (item.type && json.type !== item.type) {
    fail(`${item.path} has type ${json.type || "missing"}, expected ${item.type}`);
  }
  for (const key of item.keys || []) {
    if (getKey(json, key) === undefined) fail(`${item.path} is missing key ${key}`);
  }
  for (const snippet of item.contains || []) {
    if (!text.includes(snippet)) fail(`${item.path} does not contain required text: ${snippet}`);
  }
}

assertPackagePin();
assertTags();
assertPathHygieneAudit();
for (const item of manifest.requiredArtifacts || []) assertArtifact(item);
console.log(JSON.stringify({ ok: true, type: "proof_audit", repository: manifest.repository, artifacts: manifest.requiredArtifacts.length }, null, 2));
