<script lang="ts">
  import { portfolioItems } from "$lib/portfolio-items";
  import Header from "../components/Header.svelte";
  const {
    gaia: { altText, imageUrl, title },
  } = portfolioItems;
</script>

<main>
  <article class="px-container container-grid">
    <Header {title} comingSoon />
    <picture
      class="aspect-golden relative col-span-full overflow-hidden rounded-lg md:col-span-10 md:col-start-2"
    >
      {#each imageUrl.slice(1) as srcset, i}
        <source {srcset} />
      {/each}
      <img src={imageUrl[0]} alt={altText} class="absolute object-cover" />
    </picture>
  </article>
</main>
