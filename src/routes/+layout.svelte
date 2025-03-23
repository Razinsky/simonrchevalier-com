<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import { linkedInProfileUrl, pdfResumeUrl } from "$lib/urls";
  import "../app.css";
  let { children } = $props();
</script>

<div
  class="min-h-dvh w-full bg-[linear-gradient(316deg,#3A3340_0%,#323442_20%,#2A3542_40%,#223640_60%,#1D363C_80%,#1C3636_100%)] *:not-last:mb-10 md:*:not-last:mb-20"
>
  <Header />
  {@render children()}
  <footer class="p-container flex h-26 items-center justify-between">
    <span class="text-sm">© 2025 Simon&nbsp;R.&nbsp;Chevalier</span>
    <div class="flex gap-4">
      <a href={pdfResumeUrl} target="_blank" class="text-sm font-bold">Download CV</a>
      <a href={linkedInProfileUrl} target="_blank" class="text-sm font-bold">LinkedIn</a>
    </div>
  </footer>
</div>
