<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	export let duration = 0.6;
	export let delay = 0;
	export let threshold = 0.1;
	export let ease = 'power2.out';
	export let distance = 100; // just for offsetting the top zoom-in
	export let once = true;

	let element: Element;
	let observer: IntersectionObserver;
	let hasAnimated = false;

	const initial = {
		scale: 1.3,
		y: -distance,
		opacity: 0
	};

	const final = {
		scale: 1,
		y: 0,
		opacity: 1
	};

	function setup() {
		gsap.set(element, {
			...initial,
			transformOrigin: 'top center'
		});

		observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && (!once || !hasAnimated)) {
					gsap.to(element, {
						...final,
						duration,
						delay,
						ease,
						onComplete: () => {
							hasAnimated = true;
							if (once) observer.disconnect();
						}
					});
				} else if (!entry.isIntersecting && !once && hasAnimated) {
					gsap.to(element, {
						...initial,
						duration: duration / 2,
						ease
					});
					hasAnimated = false;
				}
			},
			{ threshold }
		);

		observer.observe(element);
	}

	onMount(() => {
		setup();
		return () => observer && observer.disconnect();
	});
</script>

<div class="zoom-in-wrapper">
	<div class="zoom-in-content" bind:this={element}>
		<slot></slot>
	</div>
</div>

<style>
	.zoom-in-wrapper {
		overflow: hidden;
		display: inline-block;
	}

	.zoom-in-content {
		will-change: transform, opacity;
	}
</style>
