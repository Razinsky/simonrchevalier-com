<script lang="ts">
  import { page } from "$app/state";

  import LinkedInButton from "./ButtonLinkedIn.svelte";
  import NavSelectionMarker from "./nav/Nav.SelectionMarker.svelte";
  import NavItem from "./nav/Nav.Item.svelte";
  import { pdfResumeUrl } from "$lib/urls";
  import { scale } from "svelte/transition";

  let navIndex = $derived(page.route.id === "/" ? 0 : page.route.id === "/about" ? 1 : -1);
  let isWorkPage = $derived(page.route.id?.startsWith("/work"));
</script>

<header class="px-container grid h-26 w-full grid-cols-4 items-center justify-between">
  <h1 class="leading-tight font-bold lg:col-span-1"><a href="/">Simon R.&nbsp;Chevalier</a></h1>

  <nav class="col-span-3 text-right lg:col-span-2 lg:text-center">
    <ul
      class="relative inline-flex items-center overflow-hidden rounded-full bg-black/20"
      style={`--nav-index: ${navIndex}`}
    >
      {#if isWorkPage}
        <li in:scale={{ delay: 250 }}>
          <NavItem href="/" class="w-48 py-2 md:w-52 md:py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg
            ><span class="pt-0.5">Back to showcase</span>
          </NavItem>
        </li>
      {:else}
        {#if navIndex > -1}
          <NavSelectionMarker />
        {/if}
        <li in:scale={{ delay: 250 }}>
          <NavItem href="/" class="w-24 md:w-28">Showcase</NavItem>
        </li>
        <li in:scale={{ delay: 250 }}>
          <NavItem href="/about" class="w-24 md:w-28">About</NavItem>
        </li>
      {/if}
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
