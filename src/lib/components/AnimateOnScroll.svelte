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
  
  let element: Element;
  let hasAnimated = false;
  let observer: IntersectionObserver;
  
  // Animation configurations
  const animations = {
    'slide-top': { y: distance, opacity: 0 },
    'slide-bottom': { y: -distance, opacity: 0 },
    'slide-left': { x: distance, opacity: 0 },
    'slide-right': { x: -distance, opacity: 0 },
    'fade-in': { opacity: 0 }
  };
  
  onMount(() => {
    // Set initial state
    const initialState = animations[animation] || animations['slide-top'];
    gsap.set(element, initialState);
    
    // Create intersection observer
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
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
        } else if (!entry.isIntersecting && !once && hasAnimated) {
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
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  });
  
  // Helper function to get the reset state (original position)
  function getResetState(initialState: any) {
    const resetState: any = {};
    if (initialState.x !== undefined) resetState.x = 0;
    if (initialState.y !== undefined) resetState.y = 0;
    if (initialState.opacity !== undefined) resetState.opacity = 1;
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