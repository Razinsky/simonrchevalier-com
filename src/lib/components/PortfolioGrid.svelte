<script lang="ts">
  import { portfolioItems } from "$lib/portfolio-items";
  import PortfolioItem from "./PortfolioItem.svelte";
</script>

<div class="col-span-full grid grid-cols-2 gap-8 max-md:grid-cols-1">
  {#each Object.values(portfolioItems) as item}
    <PortfolioItem {...item} />
  {/each}
</div>
