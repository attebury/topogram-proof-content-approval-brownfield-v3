CREATE TABLE IF NOT EXISTS "content_submissions" (
  "id" UUID NOT NULL,
  "title" TEXT NOT NULL,
  "body" TEXT NOT NULL,
  "status" TEXT NOT NULL,
  "review_priority" TEXT,
  "assigned_reviewer" TEXT,
  "author_name" TEXT NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL,
  "submitted_at" TIMESTAMPTZ NOT NULL,
  "reviewed_at" TIMESTAMPTZ,
  "reviewer_note" TEXT,
  PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "content_submissions_status_idx" ON "content_submissions" ("status");

CREATE INDEX IF NOT EXISTS "content_submissions_review_priority_idx" ON "content_submissions" ("review_priority");

CREATE INDEX IF NOT EXISTS "content_submissions_assigned_reviewer_idx" ON "content_submissions" ("assigned_reviewer");

CREATE INDEX IF NOT EXISTS "content_submissions_submitted_at_idx" ON "content_submissions" ("submitted_at");
