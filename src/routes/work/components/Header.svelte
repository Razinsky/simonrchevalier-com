<script lang="ts">
  import ExternalLink from "./ExternalLink.svelte";

  interface Props {
    comingSoon?: boolean;
    title: string;
    externalLink?: string;
    externalLinkLabel?: string;
  }

  const { comingSoon, externalLink, externalLinkLabel, title }: Props = $props();
</script>

<header
  class="col-span-full mb-8 flex flex-col items-start justify-between gap-4 md:col-span-10 md:col-start-2 md:flex-row md:items-center md:gap-8"
>
  <div>
    <h2 class="text-fluid-xl mb-2 font-bold tracking-tight text-balance">
      {title}
    </h2>
    {#if comingSoon}
      <h3 class="text-fluid-md font-bold opacity-50">Coming soon</h3>
    {/if}
  </div>
  {#if externalLink}
    <ExternalLink link={externalLink} label={externalLinkLabel} />
  {/if}
</header>
