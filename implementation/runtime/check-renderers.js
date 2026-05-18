export function renderContentRuntimeCheckState() {
  return `const state = {
  createdPrimary: null,
  latestPrimary: null
};`;
}

export function renderContentRuntimeCheckCreatePayload() {
  return `function createPayload(overrides = {}) {
  return {
    title: "Runtime Check Submission",
    body: "Content body from the runtime check",
    author_name: "Runtime Author",
    ...overrides
  };
}`;
}

export function renderContentRuntimeCheckHelpers() {
  return "";
}

export function renderContentRuntimeCheckCases() {
  return `    } else if (definition.id === "api_seed_submission_ready") {
      const { contract, response, responseBody } = await requestContract(definition.capabilityId, {
        pathParams: inferPathParams(contractFor(definition.capabilityId), definition.pathParams)
      });
      assertCondition(response.status === contract.endpoint.successStatus, \`seed submission readiness expected \${contract.endpoint.successStatus}, got \${response.status}\`);
      assertCondition(responseBody?.id === envValue(plan.env.demoPrimaryId), "seed submission readiness did not return the expected demo submission");
    } else if (definition.id === "submit_content") {
      const { contract, response, responseBody } = await requestContract(definition.capabilityId, {
        payload: createPayload()
      });
      assertCondition(response.status === contract.endpoint.successStatus, \`submit content expected \${contract.endpoint.successStatus}, got \${response.status}\`);
      assertCondition(responseBody?.id, "submit content response did not include id");
      assertCondition(responseBody?.body === "Content body from the runtime check", "submit content did not persist body");
      assertCondition(responseBody?.status === "submitted", "submit content did not create a submitted record");
      state.createdPrimary = responseBody;
      state.latestPrimary = responseBody;
      result.resources.primaryId = responseBody.id;
    } else if (definition.id === "get_created_submission") {
      const { contract, response, responseBody } = await requestContract(definition.capabilityId);
      assertCondition(response.status === contract.endpoint.successStatus, \`get submission expected \${contract.endpoint.successStatus}, got \${response.status}\`);
      assertCondition(responseBody?.id === state.latestPrimary?.id, "get submission did not return the created submission");
      assertCondition(responseBody?.title, "get submission did not include title");
    } else if (definition.id === "list_submissions") {
      const { contract, response, responseBody } = await requestContract(definition.capabilityId);
      assertCondition(response.status === contract.endpoint.successStatus, \`list submissions expected \${contract.endpoint.successStatus}, got \${response.status}\`);
      assertCondition(Array.isArray(responseBody?.items), "list submissions did not return an items array");
      assertCondition(responseBody.items.some((item) => item.id === state.latestPrimary?.id), "list submissions did not include the created submission");
    } else if (definition.id === "approve_submission") {
      const { contract, response, responseBody } = await requestContract(definition.capabilityId, {
        payload: {
          reviewer_note: "Approved by runtime check"
        }
      });
      assertCondition(response.status === contract.endpoint.successStatus, \`approve submission expected \${contract.endpoint.successStatus}, got \${response.status}\`);
      assertCondition(responseBody?.status === "approved", "approve submission did not update status");
      state.latestPrimary = responseBody;
      result.resources.primaryId = responseBody.id;
    } else if (definition.id === "request_changes") {
      const { contract, response, responseBody } = await requestContract(definition.capabilityId, {
        payload: {
          reviewer_note: "Needs edits from runtime check"
        }
      });
      assertCondition(response.status === contract.endpoint.successStatus, \`request changes expected \${contract.endpoint.successStatus}, got \${response.status}\`);
      assertCondition(responseBody?.status === "changes_requested", "request changes did not update status");
      assertCondition(responseBody?.reviewer_note === "Needs edits from runtime check", "request changes did not persist reviewer note");
      state.latestPrimary = responseBody;
      result.resources.primaryId = responseBody.id;
    } else if (definition.id === "invalid_submit_returns_4xx") {
      const { response, responseBody } = await requestContract(definition.capabilityId, {
        payload: {}
      });
      assertCondition(Math.floor(response.status / 100) === definition.expectStatusClass, \`invalid submit expected \${definition.expectStatusClass}xx, got \${response.status}\`);
      assertErrorResponse(responseBody, definition.expectErrorCode, "invalid submit");
    } else if (definition.id === "get_unknown_submission_not_found") {
      const { response, responseBody } = await requestContract(definition.capabilityId, {
        pathParams: {
          id: crypto.randomUUID()
        }
      });
      assertCondition(response.status === definition.expectStatus, \`get unknown submission expected \${definition.expectStatus}, got \${response.status}\`);
      assertErrorResponse(responseBody, definition.expectErrorCode, "get unknown submission");`;
}

export const renderHelloRuntimeCheckState = renderContentRuntimeCheckState;
export const renderHelloRuntimeCheckCreatePayload = renderContentRuntimeCheckCreatePayload;
export const renderHelloRuntimeCheckHelpers = renderContentRuntimeCheckHelpers;
export const renderHelloRuntimeCheckCases = renderContentRuntimeCheckCases;
