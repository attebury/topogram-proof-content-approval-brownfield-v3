import { Link, NavLink, Route, Routes } from "react-router-dom";
import { NewSubmissionScreen } from "./screens/NewSubmission.jsx";
import { SubmissionDetailScreen } from "./screens/SubmissionDetail.jsx";
import { SubmissionQueueScreen } from "./screens/SubmissionQueue.jsx";

export function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <Link to="/" className="brand">Content Approval</Link>
        <nav>
          <NavLink to="/submissions">Queue</NavLink>
          <NavLink to="/submissions/new">New submission</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<SubmissionQueueScreen />} />
          <Route path="/submissions" element={<SubmissionQueueScreen />} />
          <Route path="/submissions/new" element={<NewSubmissionScreen />} />
          <Route path="/submissions/:submissionId" element={<SubmissionDetailScreen />} />
        </Routes>
      </main>
    </div>
  );
}
