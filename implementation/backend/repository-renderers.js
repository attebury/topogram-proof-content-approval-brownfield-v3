export function renderContentPrismaRepositoryBody({
  repositoryInterfaceName,
  prismaRepositoryClassName
}) {
  return `
function iso(value: Date | string | null | undefined): string | undefined {
  if (!value) return undefined;
  return value instanceof Date ? value.toISOString() : value;
}

function nextCursor<T extends { submitted_at: Date | string }>(items: T[]): string {
  return items.length > 0 ? iso(items[items.length - 1]!.submitted_at) || "" : "";
}

function mapSubmissionRecord(submission: {
  id: string;
  title: string;
  body: string;
  status: string;
  author_name: string;
  submitted_at: Date | string;
  reviewed_at?: Date | string | null;
  reviewer_note?: string | null;
}): GetSubmissionResult {
  return {
    id: submission.id,
    title: submission.title,
    body: submission.body,
    status: submission.status,
    author_name: submission.author_name,
    submitted_at: iso(submission.submitted_at)!,
    ...(submission.reviewed_at ? { reviewed_at: iso(submission.reviewed_at) } : {}),
    ...(submission.reviewer_note ? { reviewer_note: submission.reviewer_note } : {})
  };
}

export class ${prismaRepositoryClassName} implements ${repositoryInterfaceName} {
  constructor(private readonly prisma: PrismaClient) {}

  async submitContent(input: SubmitContentInput): Promise<SubmitContentResult> {
    const now = new Date();
    const submission = await this.prisma.contentSubmission.create({
      data: {
        id: crypto.randomUUID(),
        title: input.title,
        body: input.body,
        author_name: input.author_name,
        status: "submitted",
        created_at: now,
        submitted_at: now
      }
    });
    return mapSubmissionRecord(submission);
  }

  async getSubmission(input: GetSubmissionInput): Promise<GetSubmissionResult> {
    const submission = await this.prisma.contentSubmission.findUnique({ where: { id: input.submission_id } });
    if (!submission) throw new HttpError(404, "cap_get_submission_not_found", "Submission not found");
    return mapSubmissionRecord(submission);
  }

  async listSubmissions(input: ListSubmissionsInput): Promise<ListSubmissionsResult> {
    const take = Math.min(input.limit ?? 25, 100);
    const submissions = await this.prisma.contentSubmission.findMany({
      where: {
        ...(input.status ? { status: input.status } : {}),
        ...(input.after ? { submitted_at: { lt: new Date(input.after) } } : {})
      },
      orderBy: [{ submitted_at: "desc" }],
      take: take + 1
    });
    const page = submissions.slice(0, take).map(mapSubmissionRecord);
    return {
      items: page,
      next_cursor: nextCursor(submissions.slice(0, take))
    };
  }

  async approveSubmission(input: ApproveSubmissionInput): Promise<ApproveSubmissionResult> {
    const submission = await this.prisma.contentSubmission.update({
      where: { id: input.submission_id },
      data: {
        status: "approved",
        reviewed_at: new Date(),
        ...(input.reviewer_note !== undefined ? { reviewer_note: input.reviewer_note } : {})
      }
    }).catch((error: unknown) => {
      throw new HttpError(404, "cap_get_submission_not_found", error instanceof Error ? error.message : "Submission not found");
    });
    return mapSubmissionRecord(submission);
  }

  async requestChanges(input: RequestChangesInput): Promise<RequestChangesResult> {
    const submission = await this.prisma.contentSubmission.update({
      where: { id: input.submission_id },
      data: {
        status: "changes_requested",
        reviewed_at: new Date(),
        reviewer_note: input.reviewer_note
      }
    }).catch((error: unknown) => {
      throw new HttpError(404, "cap_get_submission_not_found", error instanceof Error ? error.message : "Submission not found");
    });
    return mapSubmissionRecord(submission);
  }

  async bulkApproveSubmissions(input: BulkApproveSubmissionsInput): Promise<BulkApproveSubmissionsResult> {
    const rawIds = Array.isArray((input as any).submission_ids)
      ? (input as any).submission_ids
      : [input.submission_ids];
    const ids = rawIds.filter(Boolean);
    if (ids.length === 0) throw new HttpError(400, "cap_bulk_approve_submissions_invalid_request", "No submissions selected");
    const submissions = await Promise.all(ids.map((id: string) => this.prisma.contentSubmission.update({
      where: { id },
      data: {
        status: "approved",
        reviewed_at: new Date(),
        ...(input.reviewer_note !== undefined ? { reviewer_note: input.reviewer_note } : {})
      }
    })));
    return mapSubmissionRecord(submissions[0]!);
  }
}
`;
}

export function renderContentDrizzleRepositoryBody({
  repositoryInterfaceName,
  drizzleRepositoryClassName,
  drizzleHint
}) {
  return `
export class ${drizzleRepositoryClassName} implements ${repositoryInterfaceName} {
  constructor(private readonly db: NodePgDatabase) {}

  private unsupported(): never {
    void this.db;
    void contentSubmissionsTable;
    throw new Error(${JSON.stringify(drizzleHint)});
  }

  async submitContent(): Promise<SubmitContentResult> {
    this.unsupported();
  }

  async getSubmission(): Promise<GetSubmissionResult> {
    this.unsupported();
  }

  async listSubmissions(): Promise<ListSubmissionsResult> {
    this.unsupported();
  }

  async approveSubmission(): Promise<ApproveSubmissionResult> {
    this.unsupported();
  }

  async requestChanges(): Promise<RequestChangesResult> {
    this.unsupported();
  }

  async bulkApproveSubmissions(): Promise<BulkApproveSubmissionsResult> {
    this.unsupported();
  }
}
`;
}
