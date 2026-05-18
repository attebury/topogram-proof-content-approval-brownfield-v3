export interface SubmitContentInput {
  title: string;
  body: string;
  author_name: string;
}

export interface SubmitContentResult {
  id: string;
  title: string;
  body: string;
  status: string;
  review_priority?: string;
  assigned_reviewer?: string;
  author_name: string;
  submitted_at: string;
  reviewed_at?: string;
  reviewer_note?: string;
}

export interface GetSubmissionInput {
  submission_id: string;
}

export interface GetSubmissionResult {
  id: string;
  title: string;
  body: string;
  status: string;
  review_priority?: string;
  assigned_reviewer?: string;
  author_name: string;
  submitted_at: string;
  reviewed_at?: string;
  reviewer_note?: string;
}

export interface ListSubmissionsInput {
  status?: string;
  after?: string;
  limit?: number;
}

export interface ListSubmissionsResultItem {
  id: string;
  title: string;
  body: string;
  status: string;
  review_priority?: string;
  assigned_reviewer?: string;
  author_name: string;
  submitted_at: string;
  reviewed_at?: string;
  reviewer_note?: string;
}

export interface ListSubmissionsResult {
  items: ListSubmissionsResultItem[];
  next_cursor: string;
}

export interface ApproveSubmissionInput {
  submission_id: string;
  reviewer_note?: string;
}

export interface ApproveSubmissionResult {
  id: string;
  title: string;
  body: string;
  status: string;
  review_priority?: string;
  assigned_reviewer?: string;
  author_name: string;
  submitted_at: string;
  reviewed_at?: string;
  reviewer_note?: string;
}

export interface RequestChangesInput {
  submission_id: string;
  reviewer_note: string;
}

export interface RequestChangesResult {
  id: string;
  title: string;
  body: string;
  status: string;
  review_priority?: string;
  assigned_reviewer?: string;
  author_name: string;
  submitted_at: string;
  reviewed_at?: string;
  reviewer_note?: string;
}

export interface BulkApproveSubmissionsInput {
  submission_ids: string;
  reviewer_note?: string;
}

export interface BulkApproveSubmissionsResult {
  id: string;
  title: string;
  status: string;
  review_priority?: string;
  assigned_reviewer?: string;
  author_name: string;
  submitted_at: string;
}
