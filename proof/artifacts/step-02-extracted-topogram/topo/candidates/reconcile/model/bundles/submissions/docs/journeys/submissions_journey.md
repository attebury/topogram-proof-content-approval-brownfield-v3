---
id: submissions_journey
kind: journey
title: Submissions Core Journey
status: inferred
summary: Candidate submissions journey inferred during reconcile from imported app evidence.
source_of_truth: imported
confidence: medium
review_required: true
related_entities:
  - entity_submissions
provenance:
  - src/ui/App.jsx#/submissions
  - src/ui/App.jsx#/submissions/:submissionId
  - src/ui/App.jsx#/submissions/new
tags:
  - import
  - journey
---

Candidate journey inferred during reconcile from imported capabilities, UI surfaces, and workflow evidence.

Review and rewrite this draft before promoting it as canonical.

The user intent centers on moving through the recovered submissions flow with confidence based on the brownfield capabilities, route evidence, and workflow signals recovered for this bundle.

## Recovered Signals

Capabilities: _none_
Workflows: _none_
Rules: _none_
Screens: `submissions_list`, `submissions_detail`, `submissions_create`
Routes: `/submissions`, `/submissions/:submissionId`, `/submissions/new`

## Happy Path

1. The user enters the flow through `/submissions` or `/submissions/:submissionId`.
2. The recovered flow uses the inferred submissions capabilities to load or establish the current submissions state.
3. The user continues through the remaining submissions actions while keeping list, detail, form surfaces `submissions_list`, `submissions_detail`, `submissions_create` coherent.

## Alternate Paths

- If the brownfield app exposes alternate lifecycle branches, capture them explicitly before promoting this journey.
- If the brownfield app enforces important constraints outside the imported model, capture them explicitly before promotion.
- Recovered routes `/submissions`, `/submissions/:submissionId`, `/submissions/new` should remain understandable to the user instead of fragmenting the flow.

## Change Review Notes

Review this journey when changing submissions capabilities, screen surfaces, route structure, or workflow transitions.

## Promotion Notes

- Canonical destination: `docs/journeys/submissions_journey.md`.
- Promote this draft with `reconcile adopt journeys --write` after reviewing participants, recovered signals, and change-review notes.
- Keep the promoted journey aligned with bundle `submissions` so future reconcile runs continue to explain the same user-goal flow.
