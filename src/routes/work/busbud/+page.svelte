<script lang="ts">
  import FollowMouseEffect from "$lib/components/FollowMouseEffect.svelte";
  import { portfolioItems } from "$lib/portfolio-items";
  import ExternalLink from "../components/ExternalLink.svelte";
  import Header from "../components/Header.svelte";
  const {
    busbud: { altText, externalLink, imageUrl, title },
  } = portfolioItems;
</script>

<main>
  <article class="px-container container-grid">
    <Header {title} {externalLink} externalLinkLabel="View website" comingSoon />
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
