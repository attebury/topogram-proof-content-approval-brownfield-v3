function reportFatal(error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}

process.on("uncaughtException", reportFatal);
process.on("unhandledRejection", reportFatal);

const apiBase = process.env.TOPOGRAM_API_BASE_URL || "";
const webBase = process.env.TOPOGRAM_WEB_BASE_URL || "";
const demoContainerId = process.env.TOPOGRAM_DEMO_BODY || "Draft content waiting for editorial approval.";
const demoUserId = process.env.TOPOGRAM_AUTH_USER_ID || process.env.TOPOGRAM_DEMO_USER_ID || "";
const authToken = process.env.TOPOGRAM_AUTH_TOKEN || "";

if (!apiBase || !webBase) {
  throw new Error("TOPOGRAM_API_BASE_URL and TOPOGRAM_WEB_BASE_URL are required");
}

function stackStartHint() {
  return "Start the generated stack with 'npm run dev' from the app bundle, or 'npm run app:dev' from the project root, then rerun this command.";
}

function describeFetchError(error) {
  if (error?.cause?.code) {
    return error.cause.code;
  }
  if (Array.isArray(error?.cause?.errors) && error.cause.errors.length > 0) {
    return [...new Set(error.cause.errors.map((entry) => entry.code).filter(Boolean))].join(", ");
  }
  return error instanceof Error ? error.message : String(error);
}

async function fetchWithStackHint(url, init, label) {
  try {
    return await fetch(url, init);
  } catch (error) {
    throw new Error(`${label} is not reachable at ${url.toString()}. ${stackStartHint()} Original error: ${describeFetchError(error)}`);
  }
}

async function expectStatus(response, expected, label) {
  if (response.status !== expected) {
    const body = await response.text();
    throw new Error(`${label} expected ${expected}, got ${response.status}: ${body}`);
  }
}

const webResponse = await fetchWithStackHint(new URL("/", webBase), undefined, "web app");
await expectStatus(webResponse, 200, "web page");
const webText = await webResponse.text();
if (!webText.includes("Topogram Starter")) {
  throw new Error("web page did not include expected page text");
}

const createResponse = await fetchWithStackHint(new URL("/submissions", apiBase), {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "Idempotency-Key": crypto.randomUUID(),
    ...(authToken ? { Authorization: `Bearer ${authToken}` } : {})
  },
  body: JSON.stringify({
    title: "Smoke Test Submission",
    body: demoContainerId
  })
}, "api service");
await expectStatus(createResponse, 201, "create resource");
const created = await createResponse.json();
if (!created.id) {
  throw new Error("create resource response did not include id");
}

const getResponse = await fetchWithStackHint(new URL(`/submissions/${created.id}`, apiBase), {
  headers: authToken ? { Authorization: `Bearer ${authToken}` } : undefined
}, "api service");
await expectStatus(getResponse, 200, "get resource");

const listResponse = await fetchWithStackHint(new URL("/submissions", apiBase), {
  headers: authToken ? { Authorization: `Bearer ${authToken}` } : undefined
}, "api service");
await expectStatus(listResponse, 200, "list resources");

console.log(JSON.stringify({
  ok: true,
  createdPrimaryId: created.id
}, null, 2));
