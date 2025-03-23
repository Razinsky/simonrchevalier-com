<script lang="ts">
  import clsx from "clsx";
  import { twMerge } from "tailwind-merge";

  import { page } from "$app/state";
  import type { HTMLAnchorAttributes } from "svelte/elements";

  type Props = HTMLAnchorAttributes & {
    label?: string;
  };

  const { children, class: className, href, label, ...restProps }: Props = $props();

  const isActive = $derived(page.route.id === href);
</script>

<a
  {href}
  class={twMerge(
    clsx(
      "nav-item group relative flex items-center justify-center gap-4 overflow-hidden px-2 pt-2.5 pb-2 text-sm leading-none font-bold tracking-normal transition-colors md:px-4 md:pt-3.5 md:pb-3 md:text-base",
      !isActive &&
        "before:translate-y-8 before:opacity-0 before:transition-all before:duration-300 before:ease-in-out hover:before:translate-y-0 hover:before:opacity-100",
      isActive && "cursor-default",
      page.route.id === href && "text-neutral-800",
      className,
    ),
  )}
  data-label={label}
  {...restProps}
>
  {#if label}
    <span
      class={clsx(
        !isActive &&
          "transition-all duration-300 ease-in-out group-hover:-translate-y-8 group-hover:opacity-0",
      )}>{label}</span
    >
  {:else}
    {@render children?.()}
  {/if}
</a>

<style lang="postcss">
  .nav-item::before {
    content: attr(data-label);
    position: absolute;
  }
</style>
