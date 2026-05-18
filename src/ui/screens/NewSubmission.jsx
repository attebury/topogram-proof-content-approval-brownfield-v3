import { Link } from "react-router-dom";

export function NewSubmissionScreen() {
  return (
    <section className="screen form-screen">
      <p className="eyebrow">Submit content</p>
      <h1>New submission</h1>
      <form className="submission-form" data-testid="submission-form">
        <label>
          Title
          <input name="title" />
        </label>
        <label>
          Body
          <textarea name="body" rows="6" />
        </label>
        <label>
          Author
          <input name="author_name" />
        </label>
        <button type="button">Submit for review</button>
      </form>
      <Link to="/submissions">Cancel</Link>
    </section>
  );
}
