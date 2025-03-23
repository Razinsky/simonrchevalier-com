<script lang="ts">
  import { blur } from "svelte/transition";

  import WorkExperience from "$lib/components/WorkExperience.svelte";
</script>

<main in:blur class="px-container">
  <article class="flex flex-col gap-8 md:gap-16">
    <section
      class="md:shadow-huge relative grid h-auto grid-cols-1 items-center gap-8 overflow-hidden rounded-2xl md:grid-cols-5 md:gap-16"
    >
      <div class="h-full md:col-span-2">
        <img
          src="/images/simonrchevalier-profile.avif"
          alt="Simon Chevalier"
          class="h-full w-full rounded-2xl object-cover"
        />
      </div>
      <h2
        class="text-fluid-xl font-bold tracking-tight text-balance max-md:-order-1 sm:pe-16 md:col-span-3 md:py-12"
      >
        A genuinely empathetic&nbsp;and entrepreneurial personality with a passion for art,
        technology and business.
      </h2>
    </section>
    <section class="prose">
      <p class="lead">
        I am a passionate 41-year-old product designer. In a twenty-or-so-year career, I co-founded
        an award-winning web studio and created numerous digital products for enterprises and
        consumers. With an entrepreneurial mindset, I am driven by the challenge of solving complex
        problems, intrigued by the workings of the human mind, and passionate about design and
        coding. My wife and I live on the northwest Pacific coast of Costa Rica, where we own a
        guesthouse and welcome guests worldwide.
      </p>
      <p>
        In 2006, I started my career as an entrepreneur. It was the golden age of Flash and
        immersive experiences. Inspired by the works of bleeding-edge studios like 2advanced,
        Fantasy Interactive, and others, my co-founder and I started our studio, Ok!nteractive. So,
        right out of the gate, I was called to do everything, everywhere, all at once. And boy, did
        I love it.
      </p>
      <p>
        A couple of years later, as I looked at expanding my designer's horizons and working more
        closely with brands, we merged the studio with a local branding agency, where I oversaw
        interactive media for a while until I had the opportunity to join a startup. That's when
        everything clicked for me. The craft involved in building a product, its brand, reputation,
        etc., became much more fulfilling for me.
      </p>
      <p>
        Throughout my journey at the intersection of art, technology, and business, I've witnessed
        the power of design. The ability to see problems through multiple lenses is what I consider
        to be the designer's superpower.
      </p>
      <p>
        I'm currently head of design at Terra Mobility, a global travel company that specializes in
        intercity ground transportation connecting millions of commuters to operators in more than
        90 countries.
      </p>
    </section>
    <section class="max-sm:hidden">
      <picture>
        <source srcset="/images/competency-grid.avif" type="image/avif" />
        <source srcset="/images/competency-grid.webp" type="image/webp" />
        <img src="/images/competency-grid.png" alt="Competency Grid" />
      </picture>
    </section>
    <section class="flex flex-col gap-8 sm:hidden">
      <picture>
        <source srcset="/images/competency-grid-sm-1.avif" type="image/avif" />
        <source srcset="/images/competency-grid-sm-1.webp" type="image/webp" />
        <img src="/images/competency-grid-sm-1.png" alt="Small Competency Grid - Part 1" />
      </picture>
      <picture>
        <source srcset="/images/competency-grid-sm-2.avif" type="image/avif" />
        <source srcset="/images/competency-grid-sm-2.webp" type="image/webp" />
        <img src="/images/competency-grid-sm-2.png" alt="Small Competency Grid - Part 2" />
      </picture>
    </section>
    <section class="container-grid gap-y-8">
      <header>
        <h3 class="text-fluid-xl font-bold tracking-tight">Work experience</h3>
      </header>
      <WorkExperience />
    </section>
  </article>
</main>
