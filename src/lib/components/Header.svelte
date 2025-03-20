<script lang="ts">
  import { page } from "$app/state";

  import LinkedInButton from "./ButtonLinkedIn.svelte";
  import NavSelectionMarker from "./nav/Nav.SelectionMarker.svelte";
  import NavItem from "./nav/Nav.Item.svelte";

  let navIndex = $derived(page.route.id === "/" ? 0 : 1);
</script>

<header class="px-container grid h-26 w-full grid-cols-4 items-center justify-between">
  <h1 class="col-span-1 font-bold">Simon R. Chevalier</h1>

  <nav class="col-span-2 text-center">
    <ul
      class="relative inline-flex items-center rounded-full bg-black/20"
      style={`--nav-index: ${navIndex}`}
    >
      <NavSelectionMarker />
      <li><NavItem href="/" label="Showcase" class="w-28" /></li>
      <li><NavItem href="/about" label="About" class="w-28" /></li>
    </ul>
  </nav>

  <div class="col-span-1 flex items-center justify-end gap-2">
    <NavItem
      href="https://www.icloud.com/iclouddrive/070jPiH_ZITYIVH6Wm6sa946g#cv-simonrchevalier"
      target="_blank"
      rel="noopener noreferrer"
      label="Download CV"
    />
    <LinkedInButton />
  </div>
</header>
