const now = new Date("2026-05-15T12:00:00.000Z").toISOString();

const submissions = new Map([
  [
    "sub_100",
    {
      id: "sub_100",
      title: "Spring campaign landing page",
      body: "Hero copy and CTA need editorial approval before launch.",
      status: "submitted",
      author_name: "Mira Lee",
      review_priority: "high",
      assigned_reviewer: "editorial",
      submitted_at: now,
      reviewer_note: null,
      reviewed_at: null,
    },
  ],
  [
    "sub_101",
    {
      id: "sub_101",
      title: "Partner announcement draft",
      body: "Legal review requested before publishing.",
      status: "changes_requested",
      author_name: "Dev Patel",
      review_priority: "medium",
      assigned_reviewer: "legal",
      submitted_at: new Date("2026-05-14T16:30:00.000Z").toISOString(),
      reviewer_note: "Add approval quote source.",
      reviewed_at: new Date("2026-05-14T18:45:00.000Z").toISOString(),
    },
  ],
]);

function serialize(submission) {
  return { ...submission };
}

export function listSubmissions({ status } = {}) {
  return [...submissions.values()]
    .filter((submission) => !status || submission.status === status)
    .sort((a, b) => b.submitted_at.localeCompare(a.submitted_at))
    .map(serialize);
}

export function getSubmission(id) {
  const submission = submissions.get(id);
  return submission ? serialize(submission) : null;
}

export function createSubmission(input) {
  const id = `sub_${Math.random().toString(16).slice(2, 8)}`;
  const submission = {
    id,
    title: input.title,
    body: input.body,
    status: "submitted",
    author_name: input.author_name,
    review_priority: input.review_priority || "normal",
    assigned_reviewer: input.assigned_reviewer || "editorial",
    submitted_at: new Date().toISOString(),
    reviewer_note: null,
    reviewed_at: null,
  };
  submissions.set(id, submission);
  return serialize(submission);
}

export function approveSubmission(id, input = {}) {
  const submission = submissions.get(id);
  if (!submission) return null;
  submission.status = "approved";
  submission.reviewed_at = new Date().toISOString();
  submission.reviewer_note = input.reviewer_note || null;
  return serialize(submission);
}

export function bulkApproveSubmissions(input = {}) {
  const ids = Array.isArray(input.submission_ids) ? input.submission_ids : [];
  return ids
    .map((id) => approveSubmission(id, { reviewer_note: input.reviewer_note }))
    .filter(Boolean);
}

export function requestChanges(id, input = {}) {
  const submission = submissions.get(id);
  if (!submission) return null;
  submission.status = "changes_requested";
  submission.reviewed_at = new Date().toISOString();
  submission.reviewer_note = input.reviewer_note || "Changes requested.";
  return serialize(submission);
}
