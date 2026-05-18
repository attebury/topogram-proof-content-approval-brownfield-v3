<script lang="ts">
  const items = [
  {
    "id": "sample-active",
    "title": "Review Queue sample",
    "message": "Review Queue sample",
    "description": "Generated from Topogram UI contract metadata.",
    "category": "sample"
  },
  {
    "id": "sample-completed",
    "title": "Review Queue completed sample",
    "message": "Review Queue completed sample",
    "description": "Second generated row for rendering checks.",
    "category": "sample"
  }
];
</script>

<main>
  <div class="stack">
    <section class="card">
      <p class="muted">list</p>
      <h1>Review Queue</h1>
      <p>This SvelteKit page was generated from <code>submission_queue</code>.</p>
    </section>

    <section class="widget-card widget-generic" data-topogram-widget="widget_submission_summary">
  <p class="widget-eyebrow">hero widget</p>
  <h2>Submission Summary</h2>
  <p class="muted">Rendered from the Topogram widget contract.</p>
</section>

<section class="widget-card widget-generic" data-topogram-widget="widget_submission_queue">
  <p class="widget-eyebrow">results widget</p>
  <h2>Submission Queue</h2>
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
