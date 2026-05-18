<script lang="ts">
  const items = [
  {
    "id": "sample-active",
    "title": "Submission Details sample",
    "message": "Submission Details sample",
    "description": "Generated from Topogram UI contract metadata.",
    "category": "sample"
  },
  {
    "id": "sample-completed",
    "title": "Submission Details completed sample",
    "message": "Submission Details completed sample",
    "description": "Second generated row for rendering checks.",
    "category": "sample"
  }
];
</script>

<main>
  <div class="stack">
    <section class="card">
      <p class="muted">detail</p>
      <h1>Submission Details</h1>
      <p>This SvelteKit page was generated from <code>submission_detail</code>.</p>
    </section>

    <section class="widget-card widget-generic" data-topogram-widget="widget_review_actions">
  <p class="widget-eyebrow">summary widget</p>
  <h2>Review Actions</h2>
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
