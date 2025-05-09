<script lang="ts">
  import { onMount } from 'svelte';
  
  export let animation: keyof typeof animations = 'slide-top'; // Default animation type
  export let duration = 0.5; // Animation duration
  export let delay = 0; // Animation delay
  export let threshold = 0.1; // IntersectionObserver threshold
  export let ease = 'power2.out'; // GSAP easing function
  export let distance = 100; // Distance to slide in pixels
  export let once = true; // Whether to trigger the animation only once
  export let extendedClass = '';
  // New screen size option
  export let screenSize: 'all' | 'mobile' | 'tablet' | 'desktop' = 'all';
  
  let element: Element;
  let hasAnimated = false;
  let observer: IntersectionObserver;
  let isCorrectScreenSize = false;
  let resizeObserver: ResizeObserver;
  
  // Animation configurations
  const animations = {
    'slide-top': { y: distance, opacity: 0 },
    'slide-bottom': { y: -distance, opacity: 0 },
    'slide-left': { x: distance, opacity: 0 },
    'slide-right': { x: -distance, opacity: 0 },
    'fade-in': { opacity: 0 },
    'scale-in-top': { y: 0, scale: 0.8, opacity: 1 },
  };

  // Screen size breakpoints (in pixels)
  const breakpoints = {
    mobile: { min: 0, max: 767 },
    tablet: { min: 768, max: 1023 },
    desktop: { min: 1024, max: Infinity }
  };
  
  // Check if current screen matches selected size
  function checkScreenSize() {
    const width = window.innerWidth;
    
    if (screenSize === 'all') {
      isCorrectScreenSize = true;
    } else {
      const { min, max } = breakpoints[screenSize];
      isCorrectScreenSize = width >= min && width <= max;
    }
    
    // Apply or reset animations based on screen size
    if (isCorrectScreenSize) {
      setupAnimation();
    } else {
      // Reset to normal state when screen size doesn't match
      if (element) {
        gsap.set(element, getResetState(animations[animation]));
      }
    }
  }
  
  // Setup animation with intersection observer
  function setupAnimation() {
    if (!element) return;
    
    const initialState = animations[animation] || animations['slide-top'];
    gsap.set(element, initialState);
    
    if (observer) {
      observer.disconnect();
    }
    
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && (!once || !hasAnimated) && isCorrectScreenSize) {
          // Element is in view - animate!
          gsap.to(element, {
            ...getResetState(initialState),
            duration,
            delay,
            ease,
            onComplete: () => {
              hasAnimated = true;
              if (once) {
                observer.disconnect();
              }
            }
          });
        } else if (!entry.isIntersecting && !once && hasAnimated && isCorrectScreenSize) {
          // Element is out of view - reset if not 'once'
          gsap.to(element, {
            ...initialState,
            duration: duration / 2,
            ease
          });
          hasAnimated = false;
        }
      });
    }, { threshold });
    
    observer.observe(element);
  }
  
  onMount(() => {
    // Initial check
    checkScreenSize();
    
    // Watch for resize events
    resizeObserver = new ResizeObserver(() => {
      checkScreenSize();
    });
    
    resizeObserver.observe(document.body);
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  });
  
  // Helper function to get the reset state (original position)
  function getResetState(initialState: any) {
    const resetState: any = {};
    if (initialState.x !== undefined) resetState.x = 0;
    if (initialState.y !== undefined) resetState.y = 0;
    if (initialState.opacity !== undefined) resetState.opacity = 1;
    if (initialState.scale !== undefined) resetState.scale = 1;
    return resetState;
  }
</script>

<div bind:this={element} class={'animate-wrapper ' + extendedClass}>
  <slot></slot>
</div>

<style>
  .animate-wrapper {
    will-change: transform, opacity;
  }
</style>