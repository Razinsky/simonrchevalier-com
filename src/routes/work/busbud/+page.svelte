<script lang="ts">
  import { portfolioItems } from "$lib/portfolio-items";
  import Content from "../components/Content.svelte";
  import Header from "../components/Header.svelte";
  import HeroImage from "../components/HeroImage.svelte";
  import SEO from "../components/SEO.svelte";

  const {
    busbud: { altText, externalLink, imageUrl, title },
  } = portfolioItems;
</script>

<SEO {title} />
<Header {title} {externalLink} externalLinkLabel="View website" comingSoon />
<HeroImage {imageUrl} {altText} />
<Content>
  <p class="lead">
    Busbud.com is a world-leading marketplace for intercity ground transportation. Think the largest
    bus and train station in the world where millions of people come to buy their tickets.
  </p>
  <p>
    Today, Busbud is the best way to book bus tickets online. It's a platform that aggregates and
    sells bus, train, ferry and shuttle tickets from thousands of operators in more than 90
    countries.
  </p>
  <p>
    I've been with Busbud for more than 5 years and was brought in to orchestrate the redesign of
    our web app back in 2019. One interesting challenge was to design a system that could scale
    across multiple countries, cultures and languages (local) while keeping a consistent (global)
    user experience.
  </p>
  <p>
    As a part of that redesign project, I worked on a brand refresh to support the fresh new look of
    the product.
  </p>
  <figure class="mx-auto max-w-md">
    <video autoplay loop class="rounded-4xl">
      <track kind="captions" />
      <source src="/images/busbud-brand-refresh.mov" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <figcaption class="mt-4 text-center text-sm text-pretty opacity-70">
      The brand refresh was a great opportunity to work with the leadership team and CEO, clarify
      business aspirations, values and purpose.
    </figcaption>
  </figure>
  <figure class="aspect-golden overflow-hidden rounded-2xl">
    <picture>
      <source srcset="/images/busbud-ipad-home.avif" type="image/avif" />
      <img src="/images/busbud-ipad-home.png" alt="Busbud.com homepage in an iPad" />
    </picture>
  </figure>
  <figure class="flex flex-col rounded-2xl bg-white/95 px-10 py-8">
    <picture class="mx-auto mt-8 max-w-xl">
      <source srcset="/images/busbud-illustration.avif" type="image/avif" />
      <source srcset="/images/busbud-illustration.webp" type="image/webp" />
      <img src="/images/busbud-illustration.png" alt="Busbud main illustration" />
    </picture>
    <picture>
      <source srcset="/images/busbud-illustration-assets.avif" type="image/avif" />
      <source srcset="/images/busbud-illustration-assets.webp" type="image/webp" />
      <img src="/images/busbud-illustration-assets.png" alt="Busbud illustration assets" />
    </picture>
  </figure>
  <p></p>
</Content>
