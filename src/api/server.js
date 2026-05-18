import { createContentApprovalApp } from "./app.js";

const port = Number(process.env.PORT || 4100);
const server = createContentApprovalApp().listen(port, () => {
  console.log(`Content Approval API listening on http://127.0.0.1:${port}`);
});

process.on("SIGTERM", () => server.close());
