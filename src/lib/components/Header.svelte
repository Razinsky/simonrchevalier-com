<script lang="ts">
  import { page } from "$app/state";

  import LinkedInButton from "./ButtonLinkedIn.svelte";
  import NavSelectionMarker from "./nav/Nav.SelectionMarker.svelte";
  import NavItem from "./nav/Nav.Item.svelte";
  import { pdfResumeUrl } from "$lib/urls";

  let navIndex = $derived(page.route.id === "/" ? 0 : page.route.id === "/about" ? 1 : -1);
</script>

<header class="px-container grid h-26 w-full grid-cols-4 items-center justify-between">
  <h1 class="leading-tight font-bold lg:col-span-1"><a href="/">Simon R.&nbsp;Chevalier</a></h1>

  <nav class="col-span-3 text-right lg:col-span-2 lg:text-center">
    <ul
      class="relative inline-flex items-center overflow-hidden rounded-full bg-black/20"
      style={`--nav-index: ${navIndex}`}
    >
      {#if navIndex > -1}
        <NavSelectionMarker />
      {/if}
      <li><NavItem href="/" class="w-24 md:w-28">Showcase</NavItem></li>
      <li><NavItem href="/about" class="w-24 md:w-28">About</NavItem></li>
    </ul>
  </nav>

  <div class="col-span-1 flex items-center justify-end gap-4 max-lg:hidden">
    <NavItem
      href={pdfResumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="underline underline-offset-4"
    >
      Download CV
    </NavItem>
    <LinkedInButton />
  </div>
</header>
