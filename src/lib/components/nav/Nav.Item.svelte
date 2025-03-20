<script lang="ts">
  import clsx from "clsx";

  import { page } from "$app/state";
  import type { HTMLAnchorAttributes } from "svelte/elements";

  const { children, class: className, href, ...restProps }: HTMLAnchorAttributes = $props();
</script>

<a
  {href}
  class={clsx(
    "relative block pt-2.5 pb-2 text-center text-sm leading-none font-bold tracking-normal transition-colors md:pt-3.5 md:pb-3 md:text-base",
    page.route.id === href && "text-neutral-800",
    className,
  )}
  {...restProps}
>
  {@render children?.()}
</a>
