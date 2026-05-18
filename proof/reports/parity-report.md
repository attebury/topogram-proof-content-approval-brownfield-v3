# Maintained vs Recreated Parity Report

## Summary

This checkpoint compares the maintained brownfield app
(React Router, Express, Prisma) with the generated recreation
(SvelteKit, Hono, Postgres) produced from the adopted Topogram.

Topogram is the shared contract. The maintained app is not regenerated. The
recreated app is generated into `recreated-app/` and verified independently.

## Matches

- Both stacks expose the content submission review domain.
- Both stacks preserve queue, detail, and create submission screen intent.
- Both stacks preserve list, get, submit, approve, request-changes, and bulk
  approve capability intent in the adopted Topogram.
- Both stacks preserve the Postgres persistence shape for content submissions.
- Both stacks pass consumer-visible verification:
  - maintained app: `npm run verify`
  - recreated app: `npm --prefix ./recreated-app run compile`

## Differences

- The maintained app includes an intentionally drifted archive endpoint from
  Step 05 that is not adopted into canonical `topo/`.
- The maintained UI is a hand-authored React Router app; the recreation is a
  generated SvelteKit surface.
- The maintained API returns a bulk approval collection response; the current
  generated API maps the bulk capability through the contract shape used by the
  generator and proof implementation provider.

## Current Proof Limits

- Topogram proves contract and compile parity, not pixel parity.
- Topogram does not yet prove full runtime equivalence between two live stacks.
- Extracted drift remains review-only until explicitly adopted.
- The package-backed generator implementation provider is still needed for
  stack-specific repository/runtime behavior.

## Evidence

- `proof/artifacts/step-07-db-schema-snapshot.json`
- `proof/artifacts/step-07-widget-conformance-report.json`
- `proof/artifacts/step-07-widget-behavior-report.json`
- `proof/artifacts/step-07-submission-queue-widget-contract.json`
- `proof/artifacts/step-07-bulk-approve-context-slice.json`
- `proof/artifacts/step-07-maintained-app-verify.txt`
- `proof/artifacts/step-07-recreated-app-compile.txt`
