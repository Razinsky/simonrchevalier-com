<script lang="ts">
  import { portfolioItems } from "$lib/portfolio-items";
  const {
    gaia: { altText, imageUrl, title },
  } = portfolioItems;
</script>

<main>
  <article class="px-container container-grid">
    <header class="col-span-10 col-start-2 mb-8">
      <h2 class="text-fluid-xl mb-2 font-bold tracking-tight text-balance">
        {title}
      </h2>
      <h3 class="text-fluid-md font-bold opacity-50">Coming soon</h3>
    </header>
    <picture class="aspect-golden relative col-span-10 col-start-2 overflow-hidden rounded-lg">
      {#each imageUrl.slice(1) as srcset, i}
        <source {srcset} />
      {/each}
      <img src={imageUrl[0]} alt={altText} class="absolute object-cover" />
    </picture>
  </article>
</main>
