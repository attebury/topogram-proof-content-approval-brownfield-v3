# Brownfield Content Approval Proof

This repository demonstrates the brownfield half of the Topogram proof line.

## Checkpoints

| Step | Branch | Tag | Purpose |
| --- | --- | --- | --- |
| 01 | `step/01-brownfield-baseline` | `proof-01-brownfield-baseline` | Realish working Content Approval app with no `topo/`. |
| 02 | `step/02-extract-candidates` | `proof-02-extract-candidates` | Run package-backed DB/API/UI extractors and commit reviewable candidates. |
| 03 | `step/03-adopt-spec` | `proof-03-adopt-spec` | Adopt selected candidates into canonical `topo/` and enable SDLC. |
| 04 | `step/04-feature-from-topo` | `proof-04-feature-from-topo` | Add a maintained feature from Topogram specs and agent packets. |
| 05 | `step/05-refresh-drift` | `proof-05-refresh-drift` | Refresh extraction and show source/spec drift handling. |
| 06 | `step/06-recreate-other-stack` | `proof-06-recreate-other-stack` | Generate a second stack from the adopted `topo/`. |
| 07 | `step/07-parity-proof` | `proof-07-parity-proof` | Compare contracts, queries, and verification outputs across maintained and recreated stacks. |

## Artifact Rules

- Commit focused proof artifacts under `proof/artifacts/`.
- Do not commit noisy raw logs.
- Extracted candidates are review evidence until explicitly adopted.
- Maintained app files are never changed by extraction.
