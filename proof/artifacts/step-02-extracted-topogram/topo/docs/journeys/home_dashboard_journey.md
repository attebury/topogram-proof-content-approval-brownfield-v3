---
id: home_dashboard_journey
kind: journey
title: Home Dashboard Core Journey
status: inferred
summary: Candidate home dashboard journey inferred during reconcile from imported app evidence.
source_of_truth: imported
confidence: medium
review_required: true
provenance:
  - src/ui/App.jsx#/
tags:
  - import
  - journey
---

Candidate journey inferred during reconcile from imported capabilities, UI surfaces, and workflow evidence.

Review and rewrite this draft before promoting it as canonical.

The user intent centers on moving through the recovered home dashboard flow with confidence based on the brownfield capabilities, route evidence, and workflow signals recovered for this bundle.

## Recovered Signals

Capabilities: _none_
Workflows: _none_
Rules: _none_
Screens: `home_dashboard`
Routes: `/`

## Happy Path

1. The user enters the flow through `/`.
2. The recovered flow uses the inferred home dashboard capabilities to load or establish the current home dashboard state.
3. The user continues through the remaining home dashboard actions while keeping dashboard surfaces `home_dashboard` coherent.

## Alternate Paths

- If the brownfield app exposes alternate lifecycle branches, capture them explicitly before promoting this journey.
- If the brownfield app enforces important constraints outside the imported model, capture them explicitly before promotion.
- Recovered routes `/` should remain understandable to the user instead of fragmenting the flow.

## Change Review Notes

Review this journey when changing home dashboard capabilities, screen surfaces, route structure, or workflow transitions.

## Promotion Notes

- Canonical destination: `docs/journeys/home_dashboard_journey.md`.
- Promote this draft with `reconcile adopt journeys --write` after reviewing participants, recovered signals, and change-review notes.
- Keep the promoted journey aligned with bundle `home-dashboard` so future reconcile runs continue to explain the same user-goal flow.
