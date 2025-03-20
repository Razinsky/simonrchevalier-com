<script lang="ts">
  interface Props {
    company: string;
    dateRange: string;
    title: string;
    subtitle: string;
    description?: string | undefined;
  }

  const { company, dateRange, title, subtitle, description }: Props = $props();
</script>

<article class="flex flex-col gap-4">
  <header>
    <h2 class="text-fluid-md font-bold">
      {title}
    </h2>
    <div class="flex items-start gap-2">
      <h3 class="text-fluid-xs font-bold">{company}</h3>
      <time class="text-fluid-xs font-bold opacity-50">{dateRange}</time>
    </div>
  </header>
  <p class="text-fluid-sm max-w-prose leading-normal font-bold text-pretty">
    {subtitle}
  </p>
  {#if description}
    <p class="text-fluid-sm max-w-prose leading-normal text-pretty opacity-70">
      {description}
    </p>
  {/if}
</article>
