<script lang="ts">
  export const prerender = true;

  import Header from "$lib/components/Header.svelte";
  import "../app.css";
  let { children } = $props();
</script>

<div
  class="min-h-[screen] w-full bg-[linear-gradient(316deg,#3A3340_0%,#323442_20%,#2A3542_40%,#223640_60%,#1D363C_80%,#1C3636_100%)] *:not-last:mb-10 md:*:not-last:mb-20"
>
  <Header />
  {@render children()}
  <footer class="p-container flex h-26 items-center justify-between">
    <span class="text-sm">© 2025 Simon R. Chevalier, Product Desginer</span>
    <a href="/" class="text-sm font-bold">LinkedIn</a>
  </footer>
</div>
