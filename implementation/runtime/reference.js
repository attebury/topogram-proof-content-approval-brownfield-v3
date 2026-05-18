import { CONTENT_BACKEND_REFERENCE } from "../backend/reference.js";

export const CONTENT_RUNTIME_REFERENCE = {
  localDbProjectionId: "proj_db_postgres",
  serviceName: CONTENT_BACKEND_REFERENCE.serviceName,
  ports: {
    server: 3000,
    web: 5173
  },
  environment: {
    name: "Content Approval Local Runtime Stack",
    databaseName: "topogram_content_approval",
    envExample: `PUBLIC_TOPOGRAM_DEMO_PRIMARY_ID=${CONTENT_BACKEND_REFERENCE.demo.submissionId}
TOPOGRAM_DEMO_PRIMARY_ID=${CONTENT_BACKEND_REFERENCE.demo.submissionId}
TOPOGRAM_DEMO_BODY="${CONTENT_BACKEND_REFERENCE.demo.body}"`
  },
  compileCheck: {
    name: "Content Approval Generated Compile Checks"
  },
  smoke: {
    name: "Content Approval Runtime Smoke Plan",
    bundleTitle: "Content Approval Runtime Smoke Bundle",
    defaultContainerEnvVar: "TOPOGRAM_DEMO_BODY",
    webPath: "/",
    expectText: "Topogram Starter",
    createPath: "/submissions",
    getPathPrefix: "/submissions/",
    listPath: "/submissions",
    createPayload: {
      title: "Smoke Test Submission",
      author_name: "Smoke Author",
      containerField: "body"
    }
  },
  runtimeCheck: {
    name: "Content Approval Runtime Check Plan",
    bundleTitle: "Content Approval Runtime Check Bundle",
    requiredEnv: [
      "TOPOGRAM_API_BASE_URL",
      "TOPOGRAM_WEB_BASE_URL",
      "TOPOGRAM_DEMO_PRIMARY_ID"
    ],
    demoContainerEnvVar: "TOPOGRAM_DEMO_BODY",
    demoPrimaryEnvVar: "TOPOGRAM_DEMO_PRIMARY_ID",
    lookupPaths: {},
    stageNotes: [
      {
        id: "environment",
        summary: "required env, web readiness, API health, API readiness, and seeded content submission lookup"
      },
      {
        id: "api",
        summary: "core content submission create, get, list, approve, and request-changes paths"
      }
    ],
    notes: [
      "Mutating checks create, approve, and request changes on a runtime-check content submission.",
      "Later stages are skipped if environment readiness fails.",
      "The generated server exposes both /health and /ready.",
      "Use the smoke bundle for a faster minimal confidence check.",
      "Use this runtime-check bundle for staged verification and JSON reporting."
    ]
  },
  appBundle: {
    name: "Content Approval App Bundle",
    demoContainerName: CONTENT_BACKEND_REFERENCE.demo.body,
    demoPrimaryTitle: CONTENT_BACKEND_REFERENCE.demo.title
  },
  demoEnv: {
    userId: "",
    containerId: CONTENT_BACKEND_REFERENCE.demo.body,
    primaryId: CONTENT_BACKEND_REFERENCE.demo.submissionId
  }
};

export const HELLO_RUNTIME_REFERENCE = CONTENT_RUNTIME_REFERENCE;
