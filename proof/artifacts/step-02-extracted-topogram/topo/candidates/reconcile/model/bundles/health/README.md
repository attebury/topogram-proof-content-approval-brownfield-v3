# Health Candidate Bundle

Concept id: `entity_health`

Actors: 0
Roles: 0
Entities: 0
Enums: 0
Capabilities: 2
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
Docs: 1

## Operator Summary

- Primary concept: `cap_list_health`
- Primary entity: _none_
- Participants: _none_
- Main capabilities: `cap_list_health`, `cap_res`
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

This bundle exists because API capability evidence, doc evidence converges on the same health concept.

## Suggested Merge

- Action: `promote_as_candidate_concept`
- Promote capabilities: `cap_list_health`, `cap_res`

## Suggested Adoption

- `promote_capability` `cap_list_health`
- `promote_capability` `cap_res`
- `promote_doc` `health_journey`

## Journey Drafts

- `health_journey` (Health Core Journey) -> `docs/journeys/health_journey.md`
- Promote reviewed journey drafts with `reconcile adopt journeys --write`.

## API Evidence

- `cap_list_health` at `? ?`
- `cap_res` at `GET /health`

## Doc Evidence

- `health_journey` (journey) from `src/api/app.js#GET /health`, `src/api/app.js#GET /submissions`
