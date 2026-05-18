# Submissions Candidate Bundle

Concept id: `entity_submissions`

Actors: 0
Roles: 0
Entities: 0
Enums: 0
Capabilities: 0
Shapes: 0
Widgets: 0
CLI surfaces: 0
Screens: 3
UI routes: 3
UI actions: 3
UI flows: 0
Workflows: 0
Verifications: 0
Workflow states: 0
Workflow transitions: 0
Docs: 1

## Operator Summary

- Primary concept: `entity_submissions`
- Primary entity: `entity_submissions`
- Participants: _none_
- Main capabilities: _none_
- Main widgets: _none_
- Main CLI surfaces: _none_
- Main screens: `submissions_create`, `submissions_detail`, `submissions_list`
- Main routes: `/submissions/new`, `/submissions/:submissionId`, `/submissions`
- Main workflows: _none_
- Auth permission hints: _none_
- Auth claim hints: _none_
- Ownership hints: _none_
- Auth role guidance: _none_
- Auth closure: no auth hints (adopted=0, deferred=0, unresolved=0)

## Why This Bundle Exists

This bundle exists because UI screen/route evidence, doc evidence converges on the same submissions concept.

## Suggested Merge

- Action: `promote_as_candidate_concept`

## Suggested Adoption

- `promote_doc` `submissions_journey`
- `promote_ui_report` `ui_submissions_create`
- `promote_ui_report` `ui_submissions_detail`
- `promote_ui_report` `ui_submissions_list`

## Journey Drafts

- `submissions_journey` (Submissions Core Journey) -> `docs/journeys/submissions_journey.md`
- Promote reviewed journey drafts with `reconcile adopt journeys --write`.

## UI Evidence

- `submissions_create` form at `/submissions/new`
- `submissions_detail` detail at `/submissions/:submissionId`
- `submissions_list` list at `/submissions`

## Doc Evidence

- `submissions_journey` (journey) from `src/ui/App.jsx#/submissions`, `src/ui/App.jsx#/submissions/:submissionId`
