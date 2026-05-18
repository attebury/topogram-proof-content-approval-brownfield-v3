# Content Submission Candidate Bundle

Concept id: `entity_content_submission`

Actors: 0
Roles: 0
Entities: 1
Enums: 0
Capabilities: 0
Shapes: 0
Widgets: 0
CLI surfaces: 0
Screens: 0
UI routes: 0
UI actions: 0
UI flows: 0
Workflows: 0
Verifications: 0
Workflow states: 0
Workflow transitions: 0
Docs: 0

## Operator Summary

- Primary concept: `entity_content_submission`
- Primary entity: `entity_content_submission`
- Participants: _none_
- Main capabilities: _none_
- Main widgets: _none_
- Main CLI surfaces: _none_
- Main screens: _none_
- Main routes: _none_
- Main workflows: _none_
- Auth permission hints: _none_
- Auth claim hints: _none_
- Ownership hints: _none_
- Auth role guidance: _none_
- Auth closure: no auth hints (adopted=0, deferred=0, unresolved=0)

## Why This Bundle Exists

This bundle exists because entity evidence converges on the same content submission concept.

## Suggested Merge

- Action: `promote_as_candidate_concept`

## Suggested Adoption

- `promote_entity` `entity_content_submission`

## Candidate Maintained Seam Mappings

- proposal `content-submission:entity:entity_content_submission` (entity)
  - candidate maintained seam `seam_prisma_db_migrations` -> output `maintained_app` (review_required, human_owned, confidence=high)
    - label PRISMA maintained database migrations
    - kind maintained_db_migration_seam
    - why matched found Prisma schema; found Prisma migrations directory
    - missing decisions none
    - project config target `topology.runtimes[id=app_db].migration`
    - evidence `prisma/schema.prisma`, `prisma/migrations/20260515010101_init/migration.sql`
    - proposed runtime migration
      ```json
      {
        "ownership": "maintained",
        "tool": "prisma",
        "apply": "never",
        "snapshotPath": "topo/state/db/app_db/current.snapshot.json",
        "schemaPath": "prisma/schema.prisma",
        "migrationsPath": "prisma/migrations"
      }
      ```
    - manual next: Review evidence, match_reasons, and missing_decisions before accepting this seam.
    - manual next: Confirm database runtime 'app_db' and projection 'proj_db' are the right topology targets for the maintained app.
    - manual next: If accepted, copy proposed_runtime_migration into the matching database runtime's migration block in topogram.project.json.
    - manual next: Keep ownership 'maintained' and apply 'never'; import must not apply migrations or patch maintained app files.
    - manual next: After editing topogram.project.json, run topogram check . --json and the maintained app's migration verification.

## Entity Evidence

- `entity_content_submission` from 
