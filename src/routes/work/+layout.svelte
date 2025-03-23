<script lang="ts">
  import { blur } from "svelte/transition";

  let { children } = $props();
</script>

<main in:blur>
  <article class="px-container prose">
    {@render children?.()}
  </article>
</main>
