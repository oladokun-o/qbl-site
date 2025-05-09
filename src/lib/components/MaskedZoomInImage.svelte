<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	export let imageUrl: string;
	export let maskImageUrl: string;
	export let duration = 0.6;
	export let delay = 0;
	export let distance = 80;
	export let once = true;
	export let threshold = 0.2;

	let wrapper: HTMLDivElement;
	let observer: IntersectionObserver;
	let hasAnimated = false;

	onMount(() => {
		if (!wrapper) return;

		gsap.set(wrapper, {
			scale: 1.3,
			y: -distance,
			opacity: 0,
			transformOrigin: 'top center'
		});

		observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && (!once || !hasAnimated)) {
					gsap.to(wrapper, {
						scale: 1,
						y: 0,
						opacity: 1,
						duration,
						delay,
						ease: 'power2.out',
						onComplete: () => {
							hasAnimated = true;
							if (once) observer.disconnect();
						}
					});
				} else if (!entry.isIntersecting && !once && hasAnimated) {
					gsap.to(wrapper, {
						scale: 1.3,
						y: -distance,
						opacity: 0,
						duration: duration / 2,
						ease: 'power2.out'
					});
					hasAnimated = false;
				}
			},
			{ threshold }
		);

		observer.observe(wrapper);

		return () => observer && observer.disconnect();
	});
</script>

<div
	class="masked-image-wrapper h-[36px] w-[37px] md:h-[32px] md:w-[33px]"
	style="--mask-url: url('{maskImageUrl}'); --image-url: url('{imageUrl}');"
	bind:this={wrapper}
>
	<div class="image-layer"></div>
</div>

<style>
	.masked-image-wrapper {
		position: relative;
		-webkit-mask-image: var(--mask-url);
		mask-image: var(--mask-url);
		-webkit-mask-size: contain;
		mask-size: contain;
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-position: center;
		mask-position: center;
		overflow: hidden;
		will-change: transform, opacity;
	}

	.image-layer {
		position: absolute;
		inset: 0;
		background-image: var(--image-url);
		background-size: cover;
		background-position: center;
	}
</style>
