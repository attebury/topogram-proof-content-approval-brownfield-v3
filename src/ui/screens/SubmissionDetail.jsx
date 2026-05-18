import { Link, useParams } from "react-router-dom";

export function SubmissionDetailScreen() {
  const { submissionId } = useParams();
  return (
    <section className="screen detail-screen">
      <p className="eyebrow">Submission detail</p>
      <h1>{submissionId}</h1>
      <p className="body-copy">
        Review the submitted content, then approve it or request changes with a reviewer note.
      </p>
      <div className="action-row" data-testid="review-actions">
        <button type="button">Approve</button>
        <button type="button" className="secondary">Request changes</button>
      </div>
      <Link to="/submissions">Back to queue</Link>
    </section>
  );
}
