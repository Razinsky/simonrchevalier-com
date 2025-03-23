<script lang="ts">
  import { portfolioItems } from "$lib/portfolio-items";
  import Header from "../components/Header.svelte";
  import HeroImage from "../components/HeroImage.svelte";
  const {
    horizon: { altText, imageUrl, title },
  } = portfolioItems;
</script>

<Header {title} comingSoon />
<HeroImage {imageUrl} {altText} />
