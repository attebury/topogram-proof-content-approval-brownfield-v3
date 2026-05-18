<script lang="ts">
  const screens = [
  {
    "id": "submission_queue",
    "title": "Review Queue",
    "route": "/submissions"
  },
  {
    "id": "submission_create",
    "title": "Submit Content",
    "route": "/submissions/new"
  }
];
</script>

<main>
  <div class="stack">
    <section class="card hero">
      <div>
        <p class="muted">Generated starter</p>
        <h1>Content Approval Web UI</h1>
        <p>This SvelteKit app was generated from a Topogram UI web contract.</p>
      </div>
      <div class="button-row">
        {#each screens.slice(0, 2) as screen}
          <a class="button-link" href={screen.route}>{screen.title}</a>
        {/each}
      </div>
    </section>

    <section class="grid two">
      {#each screens as screen}
        <article class="card">
          <h2>{screen.title}</h2>
          <p><a href={screen.route}>Open screen</a></p>
        </article>
      {/each}
    </section>
  </div>
</main>

<style>
  main { max-width: 72rem; margin: 0 auto; padding: 2rem 1.25rem 4rem; }
  .card { background: white; border-radius: 16px; padding: 1.25rem; box-shadow: 0 12px 30px rgba(24, 32, 38, 0.08); }
  .hero, .stack, .grid { display: grid; gap: 1rem; }
  .grid.two { grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr)); }
  .button-row { display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center; }
  .button-link { display: inline-flex; align-items: center; justify-content: center; border-radius: 999px; padding: 0.7rem 1rem; background: #0f5cc0; color: white; font-weight: 600; }
  .muted { color: #607284; }
</style>
