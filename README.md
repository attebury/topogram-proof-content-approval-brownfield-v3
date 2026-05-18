# Topogram Brownfield Proof Content Approval V3

> Brownfield extract/adopt proof for the current Topogram beta story.

Status: current scaffold
Audience: Topogram evaluators, maintainers, and coding agents
Use when: you want the v3 beta proof story and branch/tag plan before the full checkpoints are populated.

This v3 proof repo exists because the Topogram demo story changed, not because every CLI patch requires proof history churn. It is pinned to `@topogram/cli@0.3.99`.

## Story

This repo will prove real-ish brownfield app, package-backed extractors, reviewable adoption, agent-safe maintained change, drift refresh, and cross-stack recreation.

## Planned Checkpoints

| Step | Branch | Tag | Claim |
| --- | --- | --- | --- |
| 01 | `step/01-brownfield-baseline` | `proof-01-brownfield-baseline` | Create a real-ish maintained app with no Topogram workspace. |
| 02 | `step/02-extract-with-packages` | `proof-02-extract-with-packages` | Use package-backed extractors to emit review-only candidates and provenance. |
| 03 | `step/03-adopt-app-map` | `proof-03-adopt-app-map` | Promote reviewed candidates into canonical topo source and enable SDLC. |
| 04 | `step/04-feature-from-slice` | `proof-04-feature-from-slice` | Implement a maintained feature from agent-safe slice context. |
| 05 | `step/05-refresh-drift` | `proof-05-refresh-drift` | Refresh extraction and review source/spec drift explicitly. |
| 06 | `step/06-recreate-other-stack` | `proof-06-recreate-other-stack` | Generate a cross-stack recreation beside maintained source. |
| 07 | `step/07-parity-proof` | `proof-07-parity-proof` | Compare maintained and recreated stacks through contracts and verification summaries. |

## Verify

```bash
npm ci
npm run verify
```

The initial scaffold verifies package pinning, proof manifest shape, path hygiene, and clean worktree behavior. Later step branches add app-specific Topogram and runtime checks.
