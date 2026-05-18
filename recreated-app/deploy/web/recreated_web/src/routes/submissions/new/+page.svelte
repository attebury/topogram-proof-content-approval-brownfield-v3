<script lang="ts">
  const items = [
  {
    "id": "sample-active",
    "title": "Submit Content sample",
    "message": "Submit Content sample",
    "description": "Generated from Topogram UI contract metadata.",
    "category": "sample"
  },
  {
    "id": "sample-completed",
    "title": "Submit Content completed sample",
    "message": "Submit Content completed sample",
    "description": "Second generated row for rendering checks.",
    "category": "sample"
  }
];
</script>

<main>
  <div class="stack">
    <section class="card">
      <p class="muted">form</p>
      <h1>Submit Content</h1>
      <p>This SvelteKit page was generated from <code>submission_create</code>.</p>
    </section>

    <section class="widget-card widget-generic" data-topogram-widget="widget_submission_form">
  <p class="widget-eyebrow">summary widget</p>
  <h2>Submission Form</h2>
  <p class="muted">Rendered from the Topogram widget contract.</p>
</section>
  </div>
</main>

<style>
  main { max-width: 72rem; margin: 0 auto; padding: 2rem 1.25rem 4rem; }
  .stack { display: grid; gap: 1rem; }
  .card { background: white; border-radius: 16px; padding: 1.25rem; box-shadow: 0 12px 30px rgba(24, 32, 38, 0.08); }
  .muted { color: #607284; }
</style>
