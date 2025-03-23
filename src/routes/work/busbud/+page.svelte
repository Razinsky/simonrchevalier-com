<script lang="ts">
  import { portfolioItems } from "$lib/portfolio-items";
  import Header from "../components/Header.svelte";
  import HeroImage from "../components/HeroImage.svelte";
  const {
    busbud: { altText, externalLink, imageUrl, title },
  } = portfolioItems;
</script>

<Header {title} {externalLink} externalLinkLabel="View website" comingSoon />
<HeroImage {imageUrl} {altText} />
<section class="mt-10">
  <p class="lead">
    Busbud.com is a world-leading marketplace for intercity ground transportation. Think the largest
    bus and train station in the world where millions of people come to buy their tickets.
  </p>
  <p>
    Today, Busbud is the best way to book bus tickets online. It's a platform that aggregates and
    sells bus, train, ferry and shuttle tickets from thousands of operators in more than 90
    countries.
  </p>
</section>
