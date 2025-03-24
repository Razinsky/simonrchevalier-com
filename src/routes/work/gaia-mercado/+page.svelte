<script lang="ts">
  import { portfolioItems } from "$lib/portfolio-items";
  import Header from "../components/Header.svelte";
  import HeroImage from "../components/HeroImage.svelte";
  import SEO from "../components/SEO.svelte";

  const {
    gaia: { altText, imageUrl, title },
  } = portfolioItems;
</script>

<SEO {title} />
<Header {title} comingSoon />
<HeroImage {imageUrl} {altText} />
