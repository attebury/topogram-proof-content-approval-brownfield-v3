# UI Extract Report

- Screens: 4
- Routes: 4
- Actions: 3
- Flow candidates: 0
- Widgets: 2
- Event payload shapes: 1
- Stacks: [object Object]

## Flow Candidates

- none

## Widget Candidates

- `widget_home_dashboard_results` confidence low pattern `search_results` region `results` events 0 evidence 1 missing decisions 4
- `widget_submissions_list_results` confidence low pattern `search_results` region `results` events 1 evidence 2 missing decisions 4

## Next Validation

- Review flow candidates in `topo/candidates/app/ui/candidates.json` before adding shared UI contract behavior.
- Review candidates under `topo/candidates/app/ui/drafts/widgets/**`.
- Run `topogram extract plan <path>` before adoption.
- After adoption, run `topogram check <path>`, `topogram widget check <path>`, and `topogram widget behavior <path>`.
