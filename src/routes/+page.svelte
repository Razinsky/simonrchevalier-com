<script lang="ts">
  import { blur } from "svelte/transition";

  import PortfolioGrid from "$lib/components/PortfolioGrid.svelte";
</script>

<main in:blur class="px-container container-grid">
  <h2 class="text-fluid-xl col-span-10 mb-16 font-bold tracking-tight text-balance">
    Hello there, I'm Simon&nbsp;—<br />Product designer & UI engineer from Canada, based&nbsp;in
    Costa&nbsp;Rica.
  </h2>
  <PortfolioGrid />
</main>
