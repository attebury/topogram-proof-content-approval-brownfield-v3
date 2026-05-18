import { Link } from "react-router-dom";

const submissions = [
  {
    id: "sub_100",
    title: "Spring campaign landing page",
    status: "submitted",
    review_priority: "high",
    assigned_reviewer: "editorial",
    author_name: "Mira Lee",
  },
  {
    id: "sub_101",
    title: "Partner announcement draft",
    status: "changes_requested",
    review_priority: "medium",
    assigned_reviewer: "legal",
    author_name: "Dev Patel",
  },
];

export function SubmissionQueueScreen() {
  return (
    <section className="screen queue-screen">
      <div className="screen-heading">
        <div>
          <p className="eyebrow">Review queue</p>
          <h1>Submissions awaiting decision</h1>
        </div>
        <Link className="button" to="/submissions/new">New submission</Link>
      </div>
      <div className="submission-grid" data-testid="submission-grid">
        {submissions.map((submission) => (
          <article className="submission-card" key={submission.id}>
            <div>
              <p className="status">{submission.status}</p>
              <h2>{submission.title}</h2>
              <p>Priority: {submission.review_priority}</p>
              <p>Reviewer: {submission.assigned_reviewer}</p>
            </div>
            <Link to={`/submissions/${submission.id}`}>Review</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
