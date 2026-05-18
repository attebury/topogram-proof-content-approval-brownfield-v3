# DB Extract Report

- Entities: 2
- Enums: 0
- Relations: 0
- Indexes: 8
- Maintained DB migration seams: 1

## Maintained DB Migration Seam Candidates

- `seam_prisma_db_migrations` tool `prisma` confidence high schema `prisma/schema.prisma` migrations `prisma/migrations` missing decisions 0
  - project config target: `topology.runtimes[id=app_db].migration`
  - evidence: `prisma/schema.prisma`, `prisma/migrations/20260515010101_init/migration.sql`
  - manual next: Review evidence, match_reasons, and missing_decisions before accepting this seam. Confirm database runtime 'app_db' and projection 'proj_db' are the right topology targets for the maintained app.
