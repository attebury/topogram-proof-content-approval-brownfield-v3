import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const demoSubmissionId = process.env.TOPOGRAM_DEMO_PRIMARY_ID || "33333333-3333-4333-8333-333333333333";
const demoTitle = process.env.TOPOGRAM_DEMO_TITLE || "Launch announcement";
const demoBody = process.env.TOPOGRAM_DEMO_BODY || "Draft content waiting for editorial approval.";
const demoAuthor = process.env.TOPOGRAM_DEMO_AUTHOR || "Avery Author";

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
