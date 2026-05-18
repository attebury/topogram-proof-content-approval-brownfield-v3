---
id: health_journey
kind: journey
title: Health Core Journey
status: inferred
summary: Candidate health journey inferred during reconcile from imported app evidence.
source_of_truth: imported
confidence: medium
review_required: true
related_capabilities:
  - cap_list_health
  - cap_res
provenance:
  - src/api/app.js#GET /health
  - src/api/app.js#GET /submissions
  - src/api/app.js#GET /submissions/:submissionId
  - src/api/app.js#POST /submissions
  - src/api/app.js#POST /submissions/bulk-approve
  - src/api/app.js#POST /submissions/:submissionId/approve
  - src/api/app.js#POST /submissions/:submissionId/archive
  - src/api/app.js#POST /submissions/:submissionId/request-changes
tags:
  - import
  - journey
---

Candidate journey inferred during reconcile from imported capabilities, UI surfaces, and workflow evidence.

Review and rewrite this draft before promoting it as canonical.

The user intent centers on moving through the recovered health flow with confidence based on the brownfield capabilities, route evidence, and workflow signals recovered for this bundle.

## Recovered Signals

Capabilities: `cap_list_health`, `cap_res`
Workflows: _none_
Rules: _none_
Screens: _none_
Routes: _none_

## Happy Path

1. The user enters the flow through the health API surface.
2. The recovered flow uses `cap_list_health` to load or establish the current health state.
3. The user continues through `cap_list_health` while keeping the recovered health lifecycle coherent.

## Alternate Paths

- If the brownfield app exposes alternate lifecycle branches, capture them explicitly before promoting this journey.
- If the brownfield app enforces important constraints outside the imported model, capture them explicitly before promotion.
- If only API evidence exists today, add UI or docs context before promoting this journey as canonical.

## Change Review Notes

Review this journey when changing health capabilities, screen surfaces, route structure, or workflow transitions.

## Promotion Notes

- Canonical destination: `docs/journeys/health_journey.md`.
- Promote this draft with `reconcile adopt journeys --write` after reviewing participants, recovered signals, and change-review notes.
- Keep the promoted journey aligned with bundle `health` so future reconcile runs continue to explain the same user-goal flow.
