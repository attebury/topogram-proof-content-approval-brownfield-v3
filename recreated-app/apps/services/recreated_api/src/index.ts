import { serve } from "@hono/node-server";
import { PrismaClient } from "@prisma/client";
import { createApp } from "./lib/server/app";
import { PrismaStarterRepository } from "./lib/persistence/prisma/repositories";
import { authorizeWithGeneratedAuthProfile } from "./lib/server/helpers";

export function createServer() {
  const prisma = new PrismaClient();
  const starterRepository = new PrismaStarterRepository(prisma);
  return createApp({
    starterRepository,
    ready: async () => {
      await prisma.$queryRaw`SELECT 1`;
    },
    authorize: async (
      ctx: Parameters<typeof authorizeWithGeneratedAuthProfile>[0],
      authz: Parameters<typeof authorizeWithGeneratedAuthProfile>[1],
      authorizationContext: Parameters<typeof authorizeWithGeneratedAuthProfile>[2]
    ) => {
      await authorizeWithGeneratedAuthProfile(ctx, authz, authorizationContext);
    }
  });
}

const app = createServer();
const port = Number(process.env.PORT || 3100);

serve({ fetch: app.fetch, port });
console.log(`content-approval-server listening on http://localhost:${port}`);
