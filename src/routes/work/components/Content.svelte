<script lang="ts">
  const { children } = $props();
</script>

<section class="prose mt-10">
  {@render children?.()}
</section>
