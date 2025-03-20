<script lang="ts">
  import type { PortfolioItem } from "$lib/portfolio-items";
  import type { MouseEventHandler } from "svelte/elements";

  let contentRect = $state({} as DOMRectReadOnly);
  let posX = $state(0);
  let posY = $state(0);
  const wiggleRoom = 40;

  const handleMouseMove: MouseEventHandler<HTMLImageElement> = (e) => {
    const { width, height } = contentRect;

    const centerX = (width - wiggleRoom * 2) / 2;
    const centerY = (height - wiggleRoom * 2) / 2;

    posX = (e.offsetX - wiggleRoom - centerX) / centerX;
    posY = (e.offsetY - wiggleRoom - centerY) / centerY;
  };

  const { title, tags, imageUrl, altText, link }: PortfolioItem = $props();
</script>

<article
  class="relative flex flex-col transition-transform duration-300 ease-in-out hover:scale-105"
>
  <div class="aspect-golden relative overflow-hidden rounded-lg bg-black">
    {#if imageUrl && imageUrl.length > 0}
      <picture>
        {#each imageUrl.slice(1) as srcset, i}
          <source {srcset} />
        {/each}
        <img
          bind:contentRect
          src={imageUrl[0]}
          alt={altText}
          class="absolute -top-10 -left-10 h-[calc(100%+theme(spacing.20))] w-[calc(100%+theme(spacing.20))] max-w-none object-cover transition-transform hover:transition-none"
          style={`transform: translate(calc(${posX} * -10px), calc(${posY} * -10px))`}
          onmousemove={handleMouseMove}
          onmouseleave={() => {
            posX = 0;
            posY = 0;
          }}
        />
      </picture>
    {/if}
  </div>
  <div class="pt-4">
    <h3 class="mb-2 text-xl leading-5 font-bold tracking-tight">
      <a href={link}>{title}</a>
    </h3>
    <p class="text-sm leading-4 font-bold text-white/50">
      {tags}
    </p>
  </div>
</article>

<style lang="postcss">
  .link-overlay::before {
    content: "";
    cursor: inherit;
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 0;
    width: 100%;
    height: 100%;
  }
</style>
