<script lang="ts">
  import { portfolioItems } from "$lib/portfolio-items";
  import Header from "../components/Header.svelte";
  import HeroImage from "../components/HeroImage.svelte";
  const {
    bopper: { altText, externalLink, imageUrl, title },
  } = portfolioItems;
</script>

<Header {title} {externalLink} externalLinkLabel="View website" comingSoon />
<HeroImage {imageUrl} {altText} />
