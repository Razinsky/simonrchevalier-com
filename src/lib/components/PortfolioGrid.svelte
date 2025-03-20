<script lang="ts">
  import PortfolioItem from "./PortfolioItem.svelte";

  const portfolioItems = [
    {
      imageUrl: [
        "/images/project-feature-img-horizon.jpg",
        "/images/project-feature-img-horizon.avif",
      ],
      altText: "Horizon Design System",
      title: "Horizon Design System",
      tags: "Design systems, Accessibility, React, Tailwind",
    },
    {
      imageUrl: [
        "/images/project-feature-img-busbud.jpg",
        "/images/project-feature-img-busbud.avif",
      ],
      altText: "Busbud.com",
      title: "Busbud.com",
      tags: "Branding, Product Exerience, Design systems",
    },
    {
      imageUrl: [
        "/images/project-feature-img-careers-busbud.jpg",
        "/images/project-feature-img-careers-busbud.avif",
      ],
      altText: "Career @ Busbud",
      title: "Career @ Busbud",
      tags: "Employer brand, Design, Copywriting, Gatsby",
    },
    {
      imageUrl: [
        "/images/project-feature-img-bopper.jpg",
        "/images/project-feature-img-bopper.avif",
      ],
      altText: "Bopper Music Licensing",
      title: "Bopper Music Licensing",
      tags: "Branding, Product Experience, React",
    },
    {
      imageUrl: ["/images/project-feature-img-gaia.jpg", "/images/project-feature-img-gaia.avif"],
      altText: "Gaia Mercado",
      title: "Gaia Mercado",
      tags: "Product Experience, Svelte",
    },
    {
      imageUrl: ["/images/project-feature-img-vv.jpg", "/images/project-feature-img-vv.avif"],
      altText: "Vida Verde Eco-Guesthouse",
      title: "Vida Verde Eco-Guesthouse",
      tags: "Branding, UI Design, Svelte",
    },
  ];
</script>

<div class="col-span-full grid grid-cols-2 gap-8 max-md:grid-cols-1">
  {#each portfolioItems as item}
    <PortfolioItem
      imageUrl={item.imageUrl}
      altText={item.altText}
      title={item.title}
      tags={item.tags}
    />
  {/each}
</div>
