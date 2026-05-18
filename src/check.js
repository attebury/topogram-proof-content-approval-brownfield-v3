import assert from "node:assert/strict";
import { createContentApprovalApp } from "./api/app.js";

const server = createContentApprovalApp().listen(0);
const baseUrl = `http://127.0.0.1:${server.address().port}`;

async function request(path, options = {}) {
  const response = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers: {
      "content-type": "application/json",
      ...(options.headers || {}),
    },
  });
  const body = await response.json();
  return { response, body };
}

try {
  const health = await request("/health");
  assert.equal(health.response.status, 200);
  assert.equal(health.body.ok, true);

  const listBefore = await request("/submissions");
  assert.equal(listBefore.response.status, 200);
  assert.ok(Array.isArray(listBefore.body.items));
  assert.ok(listBefore.body.items.length >= 2);

  const created = await request("/submissions", {
    method: "POST",
    body: JSON.stringify({
      title: "New editorial note",
      body: "Proof baseline can create a new submission.",
      author_name: "Rae Adams",
      review_priority: "normal",
      assigned_reviewer: "editorial",
    }),
  });
  assert.equal(created.response.status, 201);
  assert.equal(created.body.status, "submitted");

  const detail = await request(`/submissions/${created.body.id}`);
  assert.equal(detail.response.status, 200);
  assert.equal(detail.body.title, "New editorial note");

  const approved = await request(`/submissions/${created.body.id}/approve`, {
    method: "POST",
    body: JSON.stringify({ reviewer_note: "Approved for proof baseline." }),
  });
  assert.equal(approved.response.status, 200);
  assert.equal(approved.body.status, "approved");

  const changes = await request("/submissions/sub_100/request-changes", {
    method: "POST",
    body: JSON.stringify({ reviewer_note: "Add source links." }),
  });
  assert.equal(changes.response.status, 200);
  assert.equal(changes.body.status, "changes_requested");

  const bulk = await request("/submissions/bulk-approve", {
    method: "POST",
    body: JSON.stringify({
      submission_ids: ["sub_100", "sub_101"],
      reviewer_note: "Approved in bulk.",
    }),
  });
  assert.equal(bulk.response.status, 200);
  assert.equal(bulk.body.count, 2);
  assert.ok(bulk.body.items.every((item) => item.status === "approved"));

  const archived = await request("/submissions/sub_101/archive", {
    method: "POST",
    body: JSON.stringify({ reason: "No longer needed." }),
  });
  assert.equal(archived.response.status, 200);
  assert.equal(archived.body.status, "archived");

  console.log("Brownfield baseline API behavior verified.");
} finally {
  await new Promise((resolve) => server.close(resolve));
}
