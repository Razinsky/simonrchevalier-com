<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  let ref: HTMLElement | null = null;
  let isHovering = false;
  let translation = { x: 0, y: 0 };
  let style = $state<Record<string, string>>({});
  let transitionInComplete = false;
  let timer: ReturnType<typeof setTimeout> | null = null;

  const getTransform = () => `translate3d(${translation.x}%, ${translation.y}%, 0)`;

  const handleMouseMove = (event: MouseEvent) => {
    const rect = ref!.getBoundingClientRect();
    const elX = event.clientX - rect.left;
    const elY = event.clientY - rect.top;
    const elW = rect.width;
    const elH = rect.height;

    translation = {
      x: (0.5 - elX / elW) * -2,
      y: (0.5 - elY / elH) * -2,
    };

    style = {
      transform: getTransform(),
    };
  };

  const handleMouseEnter = () => {
    isHovering = true;

    if (!transitionInComplete) {
      style = {
        transform: getTransform(),
        transition: "transform 0.25s ease-out",
      };

      timer = setTimeout(() => {
        transitionInComplete = true;
      }, 200);
    }
  };

  const handleMouseLeave = () => {
    isHovering = false;
    if (timer) clearTimeout(timer);

    if (transitionInComplete) {
      transitionInComplete = false;
      translation = { x: 0, y: 0 };
      style = {
        transition: "transform 0.35s cubic-bezier(0.680, -0.550, 0.265, 1.550)",
      };
    }
  };

  onMount(() => {
    if (ref) {
      ref.addEventListener("mousemove", handleMouseMove);
      ref.addEventListener("mouseenter", handleMouseEnter);
      ref.addEventListener("mouseleave", handleMouseLeave);
    }
  });

  onDestroy(() => {
    if (ref) {
      ref.removeEventListener("mousemove", handleMouseMove);
      ref.removeEventListener("mouseenter", handleMouseEnter);
      ref.removeEventListener("mouseleave", handleMouseLeave);
    }
    if (timer) clearTimeout(timer);
  });

  const { children, class: className = "" } = $props();
</script>

<div
  bind:this={ref}
  class={`relative ${className}`}
  style={Object.entries(style)
    .map(([key, value]) => `${key}: ${value};`)
    .join(" ")}
>
  <div class="absolute -inset-8"></div>
  {@render children?.()}
</div>
