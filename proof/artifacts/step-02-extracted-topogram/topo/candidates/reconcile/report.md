# Reconcile Report

## Promoted

- None

## Skipped

- None

## Adoption

- Plan: `candidates/reconcile/adoption-plan.json`
- Selector: `from-plan`
- Write mode: yes
- Approved items: 0
- Applied items: 18
- Skipped items: 0
- Blocked items: 0
- Canonical files: 18
- Refreshed canonical files: 0
- Approved review groups: 0
- Projection-dependent items: 0
- Projection review groups: 0
- UI review groups: 0
- Workflow review groups: 0

## Promoted Canonical Items

- Creates: 18
- Updates: 0

- [content-submission] `entity_content_submission` `candidates/reconcile/model/bundles/content-submission/entities/entity_content_submission.tg` -> `entities/entity-content-submission.tg` (create)
- [contentsubmission] `entity_contentsubmission` `candidates/reconcile/model/bundles/contentsubmission/entities/entity_contentsubmission.tg` -> `entities/entity-contentsubmission.tg` (create)
- [health] `cap_list_health` `candidates/reconcile/model/bundles/health/capabilities/cap_list_health.tg` -> `capabilities/cap-list-health.tg` (create)
- [health] `cap_res` `candidates/reconcile/model/bundles/health/capabilities/cap_res.tg` -> `capabilities/cap-res.tg` (create)
- [health] `health_journey` `candidates/reconcile/model/bundles/health/docs/journeys/health_journey.md` -> `docs/journeys/health_journey.md` (create)
- [home-dashboard] `home_dashboard_journey` `candidates/reconcile/model/bundles/home-dashboard/docs/journeys/home_dashboard_journey.md` -> `docs/journeys/home_dashboard_journey.md` (create)
- [home-dashboard] `ui_home_dashboard` `candidates/reconcile/model/bundles/home-dashboard/docs/reports/ui-home_dashboard.md` -> `docs/reports/ui-home_dashboard.md` (create)
- [home-dashboard] `widget_home_dashboard_results` `candidates/reconcile/model/bundles/home-dashboard/widgets/widget_home_dashboard_results.tg` -> `widgets/widget-home-dashboard-results.tg` (create)
- [submission] `cap_create_submissions` `candidates/reconcile/model/bundles/submission/capabilities/cap_create_submissions.tg` -> `capabilities/cap-create-submissions.tg` (create)
- [submission] `cap_get_submission` `candidates/reconcile/model/bundles/submission/capabilities/cap_get_submission.tg` -> `capabilities/cap-get-submission.tg` (create)
- [submission] `cap_list_submissions` `candidates/reconcile/model/bundles/submission/capabilities/cap_list_submissions.tg` -> `capabilities/cap-list-submissions.tg` (create)
- [submission] `submission_journey` `candidates/reconcile/model/bundles/submission/docs/journeys/submission_journey.md` -> `docs/journeys/submission_journey.md` (create)
- [submission] `shape_event_submissions_row_select` `candidates/reconcile/model/bundles/submission/shapes/shape_event_submissions_row_select.tg` -> `shapes/shape-event-submissions-row-select.tg` (create)
- [submission] `widget_submissions_list_results` `candidates/reconcile/model/bundles/submission/widgets/widget_submissions_list_results.tg` -> `widgets/widget-submissions-list-results.tg` (create)
- [submissions] `submissions_journey` `candidates/reconcile/model/bundles/submissions/docs/journeys/submissions_journey.md` -> `docs/journeys/submissions_journey.md` (create)
- [submissions] `ui_submissions_create` `candidates/reconcile/model/bundles/submissions/docs/reports/ui-submissions_create.md` -> `docs/reports/ui-submissions_create.md` (create)
- [submissions] `ui_submissions_detail` `candidates/reconcile/model/bundles/submissions/docs/reports/ui-submissions_detail.md` -> `docs/reports/ui-submissions_detail.md` (create)
- [submissions] `ui_submissions_list` `candidates/reconcile/model/bundles/submissions/docs/reports/ui-submissions_list.md` -> `docs/reports/ui-submissions_list.md` (create)

## Next Best Action

- None

## Approved Review Groups

- None

## Projection Review Groups

- None

## UI Review Groups

- None

## Workflow Review Groups

- None

## Bundle Blockers

- `content-submission`: blocked=0, approved=0, applied=1, pending=0, dependencies=_none_
- `contentsubmission`: blocked=0, approved=0, applied=1, pending=0, dependencies=_none_
- `health`: blocked=0, approved=0, applied=3, pending=0, dependencies=_none_
- `home-dashboard`: blocked=0, approved=0, applied=3, pending=0, dependencies=_none_
- `submission`: blocked=0, approved=0, applied=6, pending=0, dependencies=_none_
- `submissions`: blocked=0, approved=0, applied=4, pending=0, dependencies=_none_

## Bundle Priorities

- `submission`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0
- `health`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0
- `content-submission`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0
- `contentsubmission`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0
- `submissions`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0
- `home-dashboard`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0

## Suppressed Noise Bundles

- None

## Projection Dependencies

- None

## Blocked Adoption Items

- None

## Candidate Model Bundles

- `content-submission` (0 actors, 0 roles, 1 entities, 0 enums, 0 capabilities, 0 shapes, 0 widgets, 0 CLI surfaces, 0 screens, 0 UI flows, 0 workflows, 0 docs)
  - primary concept `entity_content_submission`, primary entity `entity_content_submission`
  - participants _none_
  - main capabilities _none_
  - main widgets _none_
  - main routes _none_
  - candidate maintained seam mappings content-submission:entity:entity_content_submission: `seam_prisma_db_migrations` (review_required, human_owned, confidence=high, missing decisions=0)
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because entity evidence converges on the same content submission concept.
- `contentsubmission` (0 actors, 0 roles, 1 entities, 0 enums, 0 capabilities, 0 shapes, 0 widgets, 0 CLI surfaces, 0 screens, 0 UI flows, 0 workflows, 0 docs)
  - primary concept `entity_contentsubmission`, primary entity `entity_contentsubmission`
  - participants _none_
  - main capabilities _none_
  - main widgets _none_
  - main routes _none_
  - candidate maintained seam mappings contentsubmission:entity:entity_contentsubmission: `seam_prisma_db_migrations` (review_required, human_owned, confidence=high, missing decisions=0)
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because entity evidence converges on the same contentsubmission concept.
- `database` (0 actors, 0 roles, 0 entities, 0 enums, 0 capabilities, 0 shapes, 0 widgets, 0 CLI surfaces, 0 screens, 0 UI flows, 0 workflows, 0 docs)
  - primary concept `database`
  - participants _none_
  - main capabilities _none_
  - main widgets _none_
  - main routes _none_
  - candidate maintained seam mappings seam_prisma_db_migrations: `seam_prisma_db_migrations` (review_required, human_owned, confidence=high, missing decisions=0)
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because multiple imported signals point at the same database concept.
- `health` (0 actors, 0 roles, 0 entities, 0 enums, 2 capabilities, 0 shapes, 0 widgets, 0 CLI surfaces, 0 screens, 0 UI flows, 0 workflows, 1 docs)
  - primary concept `cap_list_health`
  - participants _none_
  - main capabilities `cap_list_health`, `cap_res`
  - main widgets _none_
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because API capability evidence, doc evidence converges on the same health concept.
- `home-dashboard` (0 actors, 0 roles, 0 entities, 0 enums, 0 capabilities, 0 shapes, 1 widgets, 0 CLI surfaces, 1 screens, 0 UI flows, 0 workflows, 1 docs)
  - primary concept `home_dashboard`
  - participants _none_
  - main capabilities _none_
  - main widgets `widget_home_dashboard_results`
  - main routes `/`
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because UI widget evidence, UI screen/route evidence, doc evidence converges on the same home dashboard concept.
- `submission` (0 actors, 0 roles, 0 entities, 0 enums, 3 capabilities, 1 shapes, 1 widgets, 0 CLI surfaces, 0 screens, 0 UI flows, 0 workflows, 1 docs)
  - primary concept `cap_create_submissions`
  - participants _none_
  - main capabilities `cap_create_submissions`, `cap_get_submission`, `cap_list_submissions`
  - main widgets `widget_submissions_list_results`
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because API capability evidence, UI widget evidence, doc evidence converges on the same submission concept.
- `submissions` (0 actors, 0 roles, 0 entities, 0 enums, 0 capabilities, 0 shapes, 0 widgets, 0 CLI surfaces, 3 screens, 0 UI flows, 0 workflows, 1 docs)
  - primary concept `entity_submissions`, primary entity `entity_submissions`
  - participants _none_
  - main capabilities _none_
  - main widgets _none_
  - main routes `/submissions/new`, `/submissions/:submissionId`, `/submissions`
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because UI screen/route evidence, doc evidence converges on the same submissions concept.

## Candidate Model Files

- `candidates/reconcile/model/bundles/content-submission/README.md`
- `candidates/reconcile/model/bundles/contentsubmission/README.md`
- `candidates/reconcile/model/bundles/database/README.md`
- `candidates/reconcile/model/bundles/health/README.md`
- `candidates/reconcile/model/bundles/home-dashboard/README.md`
- `candidates/reconcile/model/bundles/submission/README.md`
- `candidates/reconcile/model/bundles/submissions/README.md`

## Canonical Outputs

- `capabilities/cap-create-submissions.tg`
- `capabilities/cap-get-submission.tg`
- `capabilities/cap-list-health.tg`
- `capabilities/cap-list-submissions.tg`
- `capabilities/cap-res.tg`
- `docs/journeys/health_journey.md`
- `docs/journeys/home_dashboard_journey.md`
- `docs/journeys/submission_journey.md`
- `docs/journeys/submissions_journey.md`
- `docs/reports/ui-home_dashboard.md`
- `docs/reports/ui-submissions_create.md`
- `docs/reports/ui-submissions_detail.md`
- `docs/reports/ui-submissions_list.md`
- `entities/entity-content-submission.tg`
- `entities/entity-contentsubmission.tg`
- `shapes/shape-event-submissions-row-select.tg`
- `widgets/widget-home-dashboard-results.tg`
- `widgets/widget-submissions-list-results.tg`
