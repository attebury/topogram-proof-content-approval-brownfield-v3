import express from "express";
import {
  approveSubmission,
  bulkApproveSubmissions,
  createSubmission,
  getSubmission,
  listSubmissions,
  requestChanges,
} from "./repository.js";

export function createContentApprovalApp() {
  const app = express();
  app.use(express.json());

  app.get("/health", (_req, res) => {
    res.json({ ok: true, service: "content-approval" });
  });

  app.get("/submissions", (req, res) => {
    res.json({ items: listSubmissions({ status: req.query.status }) });
  });

  app.get("/submissions/:submissionId", (req, res) => {
    const submission = getSubmission(req.params.submissionId);
    if (!submission) {
      res.status(404).json({ error: "submission_not_found" });
      return;
    }
    res.json(submission);
  });

  app.post("/submissions", (req, res) => {
    const { title, body, author_name } = req.body || {};
    if (!title || !body || !author_name) {
      res.status(400).json({ error: "submission_required_fields_missing" });
      return;
    }
    res.status(201).json(createSubmission(req.body));
  });

  app.post("/submissions/bulk-approve", (req, res) => {
    const approved = bulkApproveSubmissions(req.body);
    res.json({ items: approved, count: approved.length });
  });

  app.post("/submissions/:submissionId/approve", (req, res) => {
    const submission = approveSubmission(req.params.submissionId, req.body);
    if (!submission) {
      res.status(404).json({ error: "submission_not_found" });
      return;
    }
    res.json(submission);
  });

  app.post("/submissions/:submissionId/request-changes", (req, res) => {
    const submission = requestChanges(req.params.submissionId, req.body);
    if (!submission) {
      res.status(404).json({ error: "submission_not_found" });
      return;
    }
    res.json(submission);
  });

  return app;
}
