export interface PortfolioItem {
  imageUrl: string[];
  altText: string;
  title: string;
  tags: string;
  link: string;
}

export const portfolioItems = {
  horizon: {
    imageUrl: [
      "/images/project-feature-img-horizon.jpg",
      "/images/project-feature-img-horizon.avif",
    ],
    altText: "Horizon Design System",
    title: "Horizon Design System",
    tags: "Design systems, Accessibility, React, Tailwind",
    link: "/work/horizon-design-system",
  },
  busbud: {
    imageUrl: ["/images/project-feature-img-busbud.jpg", "/images/project-feature-img-busbud.avif"],
    altText: "Busbud.com",
    title: "Busbud.com",
    tags: "Branding, Product Exerience, Design systems",
    link: "/work/busbud",
  },
  busbudCareers: {
    imageUrl: [
      "/images/project-feature-img-careers-busbud.jpg",
      "/images/project-feature-img-careers-busbud.avif",
    ],
    altText: "Career @ Busbud",
    title: "Career @ Busbud",
    tags: "Employer brand, Design, Copywriting, Gatsby",
    link: "/work/careers-busbud",
  },
  bopper: {
    imageUrl: ["/images/project-feature-img-bopper.jpg", "/images/project-feature-img-bopper.avif"],
    altText: "Bopper Music Licensing",
    title: "Bopper Music Licensing",
    tags: "Branding, Product Experience, React",
    link: "/work/bopper-music-licensing",
  },
  gaia: {
    imageUrl: ["/images/project-feature-img-gaia.jpg", "/images/project-feature-img-gaia.avif"],
    altText: "Gaia Mercado",
    title: "Gaia Mercado",
    tags: "Product Experience, Svelte",
    link: "/work/gaia-mercado",
  },
  vidaVerde: {
    imageUrl: ["/images/project-feature-img-vv.jpg", "/images/project-feature-img-vv.avif"],
    altText: "Vida Verde Eco-Guesthouse",
    title: "Vida Verde Eco-Guesthouse",
    tags: "Branding, UI Design, Svelte",
    link: "/work/vida-verde-eco-guesthouse",
  },
} as const satisfies Record<string, PortfolioItem>;
