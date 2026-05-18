import { CONTENT_BACKEND_REFERENCE } from "./backend/reference.js";
import { CONTENT_BACKEND_REPOSITORY_REFERENCE } from "./backend/repository-reference.js";
import {
  renderContentDrizzleRepositoryBody,
  renderContentPrismaRepositoryBody
} from "./backend/repository-renderers.js";
import { CONTENT_RUNTIME_REFERENCE } from "./runtime/reference.js";
import { CONTENT_RUNTIME_CHECKS } from "./runtime/checks.js";
import {
  renderContentRuntimeCheckCases,
  renderContentRuntimeCheckCreatePayload,
  renderContentRuntimeCheckHelpers,
  renderContentRuntimeCheckState
} from "./runtime/check-renderers.js";

export const WEB_API_DB_IMPLEMENTATION = {
  exampleId: "web-api-db-template",
  exampleRoot: "/topogram",
  backend: {
    reference: CONTENT_BACKEND_REFERENCE,
    repositoryReference: CONTENT_BACKEND_REPOSITORY_REFERENCE,
    repositoryRenderers: {
      renderPrismaRepositoryBody: renderContentPrismaRepositoryBody,
      renderDrizzleRepositoryBody: renderContentDrizzleRepositoryBody
    }
  },
  runtime: {
    reference: CONTENT_RUNTIME_REFERENCE,
    checks: CONTENT_RUNTIME_CHECKS,
    checkRenderers: {
      renderRuntimeCheckState: renderContentRuntimeCheckState,
      renderRuntimeCheckCreatePayload: renderContentRuntimeCheckCreatePayload,
      renderRuntimeCheckHelpers: renderContentRuntimeCheckHelpers,
      renderRuntimeCheckCases: renderContentRuntimeCheckCases
    }
  },
  web: {}
};

export default WEB_API_DB_IMPLEMENTATION;
