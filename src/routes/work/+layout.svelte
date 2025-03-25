<script lang="ts">
  import { blur } from "svelte/transition";

  let { children } = $props();
</script>

<main in:blur>
  <article class="px-container">
    {@render children?.()}
  </article>
</main>
