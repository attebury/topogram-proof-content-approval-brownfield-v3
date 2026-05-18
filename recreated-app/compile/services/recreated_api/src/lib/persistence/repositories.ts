import type {
  ApproveSubmissionInput,
  ApproveSubmissionResult,
  BulkApproveSubmissionsInput,
  BulkApproveSubmissionsResult,
  GetSubmissionInput,
  GetSubmissionResult,
  ListSubmissionsInput,
  ListSubmissionsResult,
  RequestChangesInput,
  RequestChangesResult,
  SubmitContentInput,
  SubmitContentResult,
} from "./types";

export interface StarterRepository {
  submitContent(input: SubmitContentInput): Promise<SubmitContentResult>;
  getSubmission(input: GetSubmissionInput): Promise<GetSubmissionResult>;
  listSubmissions(input: ListSubmissionsInput): Promise<ListSubmissionsResult>;
  approveSubmission(input: ApproveSubmissionInput): Promise<ApproveSubmissionResult>;
  requestChanges(input: RequestChangesInput): Promise<RequestChangesResult>;
  bulkApproveSubmissions(input: BulkApproveSubmissionsInput): Promise<BulkApproveSubmissionsResult>;
}
