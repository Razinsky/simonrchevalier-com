<script lang="ts">
  import type { PortfolioItem } from "$lib/portfolio-items";

  type Props = Pick<PortfolioItem, "imageUrl" | "altText">;

  const { imageUrl, altText }: Props = $props();
</script>

<picture
  class="aspect-golden relative col-span-full overflow-hidden rounded-lg md:col-span-10 md:col-start-2"
>
  {#each imageUrl.slice(1) as srcset, i}
    <source {srcset} />
  {/each}
  <img src={imageUrl[0]} alt={altText} class="absolute object-cover" />
</picture>
