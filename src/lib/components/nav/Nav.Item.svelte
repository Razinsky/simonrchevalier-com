<script lang="ts">
  import clsx from "clsx";

  import { page } from "$app/state";
  import type { HTMLAnchorAttributes } from "svelte/elements";

  type Props = HTMLAnchorAttributes & {
    label: string;
  };

  const { class: className, href, label, ...restProps }: Props = $props();
</script>

<a
  {href}
  class={clsx(
    "relative block px-4 pt-3.5 pb-3 text-center text-base leading-4 font-bold tracking-normal transition-colors delay-100",
    page.route.id === href && "text-neutral-800",
    className,
  )}
  {...restProps}
>
  {label}
</a>
