<script lang="ts">
  import { page } from "$app/state";

  import LinkedInButton from "./ButtonLinkedIn.svelte";
  import NavSelectionMarker from "./nav/Nav.SelectionMarker.svelte";
  import NavItem from "./nav/Nav.Item.svelte";

  let navIndex = $derived(page.route.id === "/" ? 0 : 1);
</script>

<header class="px-container flex h-26 w-full items-center justify-between">
  <h1 class="font-bold">Simon R. Chevalier</h1>

  <nav class="flex items-center gap-2">
    <div
      class="relative flex items-center rounded-full bg-black/20 max-sm:hidden"
      style={`--nav-index: ${navIndex}`}
    >
      <NavSelectionMarker />
      <NavItem href="/" label="Showcase" class="w-28" />
      <NavItem href="/about" label="About" class="w-28" />
    </div>
    <NavItem
      href="https://www.icloud.com/iclouddrive/070jPiH_ZITYIVH6Wm6sa946g#cv-simonrchevalier"
      target="_blank"
      rel="noopener noreferrer"
      label="Download CV"
    />
    <LinkedInButton />
  </nav>
</header>
