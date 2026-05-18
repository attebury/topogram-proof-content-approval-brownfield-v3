export const CONTENT_BACKEND_REFERENCE = {
  serviceName: "content-approval-server",
  renderSeedScript() {
    const reference = CONTENT_BACKEND_REFERENCE;
    return `import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const demoSubmissionId = process.env.TOPOGRAM_DEMO_PRIMARY_ID || "${reference.demo.submissionId}";
const demoTitle = process.env.TOPOGRAM_DEMO_TITLE || "${reference.demo.title}";
const demoBody = process.env.TOPOGRAM_DEMO_BODY || "${reference.demo.body}";
const demoAuthor = process.env.TOPOGRAM_DEMO_AUTHOR || "${reference.demo.authorName}";

async function main() {
  const now = new Date();

  await prisma.contentSubmission.upsert({
    where: { id: demoSubmissionId },
    update: {
      title: demoTitle,
      body: demoBody,
      author_name: demoAuthor,
      status: "submitted",
      created_at: now,
      submitted_at: now,
      reviewed_at: null,
      reviewer_note: null
    },
    create: {
      id: demoSubmissionId,
      title: demoTitle,
      body: demoBody,
      author_name: demoAuthor,
      status: "submitted",
      created_at: now,
      submitted_at: now
    }
  });

  console.log(JSON.stringify({
    ok: true,
    demoSubmissionId,
    seededSubmissionCount: 1
  }, null, 2));
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
`;
  },
  demo: {
    submissionId: "33333333-3333-4333-8333-333333333333",
    title: "Launch announcement",
    body: "Draft content waiting for editorial approval.",
    authorName: "Avery Author"
  }
};

export const HELLO_BACKEND_REFERENCE = CONTENT_BACKEND_REFERENCE;
