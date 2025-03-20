<script lang="ts">
  import type { MouseEventHandler } from "svelte/elements";

  export let imageUrl: string[];
  export let altText: string;
  export let title: string;
  export let tags: string;

  let contentRect = {} as DOMRectReadOnly;
  const wiggleRoom = 40;

  const handleMouseMove: MouseEventHandler<HTMLImageElement> = (e) => {
    const { width, height } = contentRect;

    const centerX = width / 2;
    const centerY = height / 2;

    const posX = (e.offsetX - wiggleRoom - centerX) / centerX;
    const posY = (e.offsetY - wiggleRoom - centerY) / centerY;
    console.log(width, Math.round(posX * 100));
  };
</script>

<article class="flex flex-col">
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
          class="absolute -top-10 -left-10 h-[calc(100%+theme(spacing.20))] w-[calc(100%+theme(spacing.20))] max-w-none object-cover"
          on:mousemove={handleMouseMove}
        />
      </picture>
    {/if}
  </div>
  <div class="pt-4">
    <h3 class="mb-2 text-xl leading-5 font-bold tracking-tight">
      {title}
    </h3>
    <p class="text-sm leading-4 font-bold text-white/50">
      {tags}
    </p>
  </div>
</article>
