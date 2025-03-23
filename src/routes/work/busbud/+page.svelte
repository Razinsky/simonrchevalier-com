<script lang="ts">
  import FollowMouseEffect from "$lib/components/FollowMouseEffect.svelte";
  import { portfolioItems } from "$lib/portfolio-items";
  import ExternalLink from "../components/ExternalLink.svelte";
  import Header from "../components/Header.svelte";
  import HeroImage from "../components/HeroImage.svelte";
  const {
    busbud: { altText, externalLink, imageUrl, title },
  } = portfolioItems;
</script>

<Header {title} {externalLink} externalLinkLabel="View website" comingSoon />
<HeroImage {imageUrl} {altText} />
