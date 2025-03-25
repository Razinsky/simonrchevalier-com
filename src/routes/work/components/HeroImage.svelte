<script lang="ts">
  import type { PortfolioItem } from "$lib/portfolio-items";

  type Props = Pick<PortfolioItem, "imageUrl" | "altText">;

  const { imageUrl, altText }: Props = $props();
</script>

<picture class="relative block aspect-[21/9] overflow-hidden rounded-lg">
  {#each imageUrl.slice(1) as srcset, i}
    <source {srcset} />
  {/each}
  <img src={imageUrl[0]} alt={altText} class="absolute h-full w-full object-cover" />
</picture>
