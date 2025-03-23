<script lang="ts">
  import { blur } from "svelte/transition";

  let { children } = $props();
</script>

<main in:blur>
  <article class="px-container container-grid">
    {@render children?.()}
  </article>
</main>
