# Home Dashboard Candidate Bundle

Concept id: `entity_home-dashboard`

Actors: 0
Roles: 0
Entities: 0
Enums: 0
Capabilities: 0
Shapes: 0
Widgets: 1
CLI surfaces: 0
Screens: 1
UI routes: 1
UI actions: 0
UI flows: 0
Workflows: 0
Verifications: 0
Workflow states: 0
Workflow transitions: 0
Docs: 1

## Operator Summary

- Primary concept: `home_dashboard`
- Primary entity: _none_
- Participants: _none_
- Main capabilities: _none_
- Main widgets: `widget_home_dashboard_results`
- Main CLI surfaces: _none_
- Main screens: `home_dashboard`
- Main routes: `/`
- Main workflows: _none_
- Auth permission hints: _none_
- Auth claim hints: _none_
- Ownership hints: _none_
- Auth role guidance: _none_
- Auth closure: no auth hints (adopted=0, deferred=0, unresolved=0)

## Why This Bundle Exists

This bundle exists because UI widget evidence, UI screen/route evidence, doc evidence converges on the same home dashboard concept.

## Suggested Merge

- Action: `promote_as_candidate_concept`

## Suggested Adoption

- `promote_doc` `home_dashboard_journey`
- `promote_widget` `widget_home_dashboard_results`
- `promote_ui_report` `ui_home_dashboard`

## Journey Drafts

- `home_dashboard_journey` (Home Dashboard Core Journey) -> `docs/journeys/home_dashboard_journey.md`
- Promote reviewed journey drafts with `reconcile adopt journeys --write`.

## UI Evidence

- `home_dashboard` dashboard at `/`

## Doc Evidence

- `home_dashboard_journey` (journey) from `src/ui/App.jsx#/`
