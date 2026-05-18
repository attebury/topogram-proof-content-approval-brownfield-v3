# Topogram Proof: Content Approval Brownfield

> This v2 proof uses hardened verification: `npm run verify` validates proof metadata, portable public artifacts, Topogram contracts when adopted, SDLC state when adopted, app compile checks, recreated-stack compile checks when present, and a clean working tree.

This repository demonstrates brownfield Topogram workflows against a real-ish
Content Approval app.

The proof uses branch and tag checkpoints. It also uses Topogram SDLC after
adoption so human and agent work is auditable. SDLC is not required to use
Topogram; for smaller projects, use `topogram extract`, `topogram adopt`,
`topogram check`, and `topogram emit` directly.

See [`proof/README.md`](proof/README.md) for the checkpoint map.

## Baseline Stack

- React Router UI with queue, detail, and new-submission screens.
- Express API with list, detail, create, approve, and request-changes routes.
- Prisma schema plus SQL migration evidence.
- No `topo/` workspace at Step 01.

## Verify

```bash
npm run verify
```

## V3 checkpoint story

This repository is refreshed only when the Topogram demo story changes. It is pinned to `@topogram/cli@0.3.99` and each checkpoint must pass `npm run verify`.
