export const CONTENT_RUNTIME_CHECKS = {
  environmentStage: {
    id: "environment",
    name: "Environment Readiness",
    failFast: true,
    checks: [
      {
        id: "required_env",
        kind: "env_required",
        mandatory: true,
        mutating: false
      },
      {
        id: "web_home_ready",
        kind: "web_contract",
        path: "/",
        expectStatus: 200,
        expectText: "Topogram Starter",
        mandatory: true,
        mutating: false
      },
      {
        id: "api_health_ready",
        kind: "api_health",
        path: "/health",
        expectStatus: 200,
        expectOk: true,
        mandatory: true,
        mutating: false
      },
      {
        id: "api_ready",
        kind: "api_ready",
        path: "/ready",
        expectStatus: 200,
        expectReady: true,
        mandatory: true,
        mutating: false
      },
      {
        id: "api_seed_submission_ready",
        kind: "api_contract",
        capabilityId: "cap_get_submission",
        pathParams: {
          submission_id: "$env:TOPOGRAM_DEMO_PRIMARY_ID"
        },
        mandatory: true,
        mutating: false
      }
    ]
  },
  apiStage: {
    id: "api",
    name: "API Contract Checks",
    checks: [
      { id: "submit_content", kind: "api_contract", capabilityId: "cap_submit_content", mutating: true, mandatory: true },
      { id: "get_created_submission", kind: "api_contract", capabilityId: "cap_get_submission", mutating: false, mandatory: true },
      { id: "list_submissions", kind: "api_contract", capabilityId: "cap_list_submissions", mutating: false, mandatory: true },
      { id: "approve_submission", kind: "api_contract", capabilityId: "cap_approve_submission", mutating: true, mandatory: true },
      { id: "request_changes", kind: "api_contract", capabilityId: "cap_request_changes", mutating: true, mandatory: true },
      { id: "invalid_submit_returns_4xx", kind: "api_negative", capabilityId: "cap_submit_content", expectStatusClass: 4, expectErrorCode: "cap_submit_content_invalid_request", mutating: false, mandatory: true },
      { id: "get_unknown_submission_not_found", kind: "api_negative", capabilityId: "cap_get_submission", expectStatus: 404, expectErrorCode: "cap_get_submission_not_found", mutating: false, mandatory: true }
    ]
  },
  smokeChecks: [
    { id: "web_home_page", type: "web_get", path: "/", expectStatus: 200, expectText: "Topogram Starter" },
    { id: "submit_content", type: "api_post", path: "/submissions", expectStatus: 201, capabilityId: "cap_submit_content" },
    { id: "get_submission", type: "api_get", path: "/submissions/:id", expectStatus: 200, capabilityId: "cap_get_submission" },
    { id: "list_submissions", type: "api_get", path: "/submissions", expectStatus: 200, capabilityId: "cap_list_submissions" }
  ]
};

export const HELLO_RUNTIME_CHECKS = CONTENT_RUNTIME_CHECKS;
