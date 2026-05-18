# Submission Candidate Bundle

Concept id: `entity_submission`

Actors: 0
Roles: 0
Entities: 0
Enums: 0
Capabilities: 3
Shapes: 1
Widgets: 1
CLI surfaces: 0
Screens: 0
UI routes: 0
UI actions: 0
UI flows: 0
Workflows: 0
Verifications: 0
Workflow states: 0
Workflow transitions: 0
Docs: 1

## Operator Summary

- Primary concept: `cap_create_submissions`
- Primary entity: _none_
- Participants: _none_
- Main capabilities: `cap_create_submissions`, `cap_get_submission`, `cap_list_submissions`
- Main widgets: `widget_submissions_list_results`
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

This bundle exists because API capability evidence, UI widget evidence, doc evidence converges on the same submission concept.

## Suggested Merge

- Action: `promote_as_candidate_concept`
- Promote capabilities: `cap_create_submissions`, `cap_get_submission`, `cap_list_submissions`
- Promote shapes: `shape_event_submissions_row_select`

## Suggested Adoption

- `promote_capability` `cap_create_submissions`
- `promote_capability` `cap_get_submission`
- `promote_capability` `cap_list_submissions`
- `promote_shape` `shape_event_submissions_row_select`
- `promote_doc` `submission_journey`
- `promote_widget` `widget_submissions_list_results`

## Journey Drafts

- `submission_journey` (Submission Discovery and Detail Flow) -> `docs/journeys/submission_journey.md`
- Promote reviewed journey drafts with `reconcile adopt journeys --write`.

## API Evidence

- `cap_create_submissions` at `? ?`
- `cap_get_submission` at `? ?`
- `cap_list_submissions` at `? ?`

## Doc Evidence

- `submission_journey` (journey) from 
