export const CONTENT_BACKEND_REPOSITORY_REFERENCE = {
  capabilityIds: [
    "cap_submit_content",
    "cap_get_submission",
    "cap_list_submissions",
    "cap_approve_submission",
    "cap_request_changes",
    "cap_bulk_approve_submissions"
  ],
  preconditionCapabilityIds: [],
  preconditionResource: {
    variableName: "currentSubmission",
    repositoryMethod: "getSubmission",
    inputField: "submission_id",
    versionField: "reviewed_at"
  },
  downloadCapabilityId: "",
  repositoryInterfaceName: "StarterRepository",
  prismaRepositoryClassName: "PrismaStarterRepository",
  drizzleRepositoryClassName: "DrizzleStarterRepository",
  dependencyName: "starterRepository",
  lookupBindings: [],
  export: {
    filename: "submissions-export.json",
    contentType: "application/json"
  },
  drizzleHint: "Fill in Drizzle query logic if you switch this proof to a Drizzle runtime.",
  drizzleSchemaImports: ["contentSubmissionsTable"],
  additionalTypeNames: [],
  additionalTypeDeclarations: [],
  additionalInterfaceMethods: []
};
