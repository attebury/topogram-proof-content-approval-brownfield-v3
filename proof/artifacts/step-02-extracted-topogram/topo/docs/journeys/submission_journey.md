---
id: submission_journey
kind: journey
title: Submission Discovery and Detail Flow
status: inferred
summary: Candidate submission journey inferred during reconcile from imported app evidence.
source_of_truth: imported
confidence: medium
review_required: true
related_capabilities:
  - cap_create_submissions
  - cap_get_submission
  - cap_list_submissions
tags:
  - import
  - journey
---

Candidate journey inferred during reconcile from imported capabilities, UI surfaces, and workflow evidence.

Review and rewrite this draft before promoting it as canonical.

The user intent centers on finding and understanding submission state based on the brownfield capabilities, route evidence, and workflow signals recovered for this bundle.

## Recovered Signals

Capabilities: `cap_create_submissions`, `cap_get_submission`, `cap_list_submissions`
Workflows: _none_
Rules: _none_
Screens: _none_
Routes: _none_

## Happy Path

1. The user enters the flow through the submission API surface.
2. The recovered flow uses `cap_get_submission`, `cap_list_submissions` to load or establish the current submission state.
3. The user continues through `cap_get_submission`, `cap_list_submissions` while keeping the recovered submission lifecycle coherent.

## Alternate Paths

- If the brownfield app exposes alternate lifecycle branches, capture them explicitly before promoting this journey.
- If the brownfield app enforces important constraints outside the imported model, capture them explicitly before promotion.
- If only API evidence exists today, add UI or docs context before promoting this journey as canonical.

## Change Review Notes

Review this journey when changing submission capabilities, screen surfaces, route structure, or workflow transitions.

## Promotion Notes

- Canonical destination: `docs/journeys/submission_journey.md`.
- Promote this draft with `reconcile adopt journeys --write` after reviewing participants, recovered signals, and change-review notes.
- Keep the promoted journey aligned with bundle `submission` so future reconcile runs continue to explain the same user-goal flow.
