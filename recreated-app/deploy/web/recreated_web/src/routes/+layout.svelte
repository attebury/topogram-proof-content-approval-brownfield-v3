<script lang="ts">
  import "../app.css";
</script>

<svelte:head>
  <title>Content Approval</title>
</svelte:head>

<div class="app-shell">
  <header class="app-nav">
    <a class="brand" href="/">Content Approval</a>
    <nav>
    <a href="/submissions">Review Queue</a>
    <a href="/submissions/new">Submit Content</a>
    </nav>
  </header>
  <slot />
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: Inter, ui-sans-serif, system-ui, sans-serif;
    color: var(--topogram-text-color);
    background: var(--topogram-surface-background);
  }
  :global(a) { color: var(--topogram-action-primary-background); text-decoration: none; }
  :global(a:hover) { text-decoration: underline; }
  .app-shell { min-height: 100vh; }
  .app-nav {
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--topogram-space-unit);
    padding: 1rem 1.25rem;
    border-bottom: 1px solid rgba(24, 32, 38, 0.08);
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(12px);
  }
  nav { display: flex; flex-wrap: wrap; gap: 0.75rem; }
  .brand { font-weight: 700; }
  @media (max-width: 640px) { .app-nav { flex-wrap: wrap; } }
</style>
