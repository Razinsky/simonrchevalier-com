<script lang="ts">
  import { workExperience } from "$lib/work-experience";
  import WorkExperienceItem from "./WorkExperienceItem.svelte";
</script>

<div class="flex flex-col gap-8">
  {#each workExperience as experience, index}
    <WorkExperienceItem {...experience} />
    {#if index < workExperience.length - 1}
      <hr class="h-px w-28 border-0 bg-white/20" />
    {/if}
  {/each}
</div>
