<script lang="ts">
	// Image imports
	import HeroTextSvg from '$lib/assets/images/hero-text.svg';
	import TheIgboCulture from '$lib/assets/images/The igbo culture.jpg';
	import Bottle from '$lib/assets/images/1890.jpg';
	import VintageYorubaCouple from '$lib/assets/images/vintage yoruba couple.jpg';
	import PalmWineGourd from '$lib/assets/images/palm wine gourd.jpg';
	import Sarahlaird from '$lib/assets/images/sarahlaird.jpg';
	import GrapeEscape from '$lib/assets/images/grape escape.png';
	import GhiaPear from '$lib/assets/images/ghia pear.jpg';
	import Waragi from '$lib/assets/images/waragi.jpg';
	import PourDrink from '$lib/assets/images/pour drink.jpg';
	import DrinkServed from '$lib/assets/images/drink served.jpg';
	import { initHeroAnimations, scaleDownAnimation } from '$lib/utils/animation';
	import { onMount } from 'svelte';

	let heroImages: any;
	let heroTextElement: HTMLDivElement | null = null;

	onMount(() => {
		// Get all hero images
		heroImages = document.querySelectorAll('.hero-image');

		// Initialize animations
		if (heroImages.length) {
			initHeroAnimations(heroImages);
		}

		// Animate hero text
		if (heroTextElement) {
			scaleDownAnimation(heroTextElement, {
				scale: 1.3,
				duration: 1.8,
				delay: 0.5
			});

			gsap.set(heroTextElement, { x: 0, opacity: 1 });

			// Animate hero text to scroll left as we scroll past the hero section
			gsap.to(heroTextElement, {
				x: '-100vw',
				opacity: 0,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '#hero',
					start: 'bottom 130%',
					end: 'bottom top',
					scrub: true
				}
			});

			gsap.to('#hero', {
				backgroundColor: '#A52F00',
				scrollTrigger: {
					trigger: '#hero',
					start: 'bottom 200%',
					end: 'bottom top',
					scrub: true
				}
			});
		}

		return () => {
			// Clean up animations if needed
			gsap.killTweensOf(heroImages);
			gsap.killTweensOf(heroTextElement);
		};
	});
</script>

<!-- ===================== HERO SECTION ===================== -->
<section
	id="hero"
	style="background-color: #091300;"
	class="relative flex w-full items-center overflow-x-hidden"
>
	<!-- ===================== Hero Background ===================== -->
	<div class="absolute inset-0 -z-10 bg-black/40"></div>

	<!-- ===================== Hero Content ===================== -->
	<div class="z-10 container mx-auto px-4">
		<div
			bind:this={heroTextElement}
			class="fixed top-1/2 left-1/2 z-[999] flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center opacity-0"
		>
			<img src={HeroTextSvg} alt="Hero Text" class="w-full max-w-[333px] md:max-w-[600px]" />
		</div>

		<!-- ===================== Animated Scroll Images ===================== -->
		<div class="relative h-screen overflow-hidden">
			<!-- first five images -->
			<img
				src={TheIgboCulture}
				alt="The igbo culture"
				class="hero-image absolute top-35 left-[5%] -z-10 w-full max-w-25 opacity-0 md:max-w-40 lg:top-[10%]"
			/>
			<img
				src={Bottle}
				alt="Bottle"
				class="hero-image absolute top-[2%] right-15 -z-10 w-full max-w-25 opacity-0 md:max-w-40 lg:right-[35%]"
			/>
			<img
				src={VintageYorubaCouple}
				alt="Vintage Yoruba Couple"
				class="hero-image absolute top-95 right-5 -z-10 w-full max-w-25 opacity-0 md:max-w-40 lg:top-[33%] lg:right-[10%]"
			/>
			<img
				src={PalmWineGourd}
				alt="PalmWine Gourd"
				class="hero-image absolute bottom-[10%] left-5 -z-10 w-full max-w-25 opacity-0 md:max-w-40 lg:left-[20%]"
			/>
			<img
				src={Sarahlaird}
				alt="Sarahlaird"
				class="hero-image absolute right-[25%] bottom-[0] -z-10 w-full max-w-25 opacity-0 md:max-w-40"
			/>
		</div>
		<!-- ===================== Second Image Section ===================== -->
		<div class="relative h-screen overflow-hidden">
			<!-- second set of images -->
			<img
				src={GrapeEscape}
				alt="Grape Escape"
				class="hero-image absolute top-60 left-[5%] -z-10 w-full max-w-25 opacity-0 md:max-w-40 lg:top-[10%]"
			/>
			<img
				src={GhiaPear}
				alt="Ghia Pear"
				class="hero-image absolute top-[2%] right-[50%] -z-10 w-full max-w-25 opacity-0 md:max-w-40"
			/>
			<img
				src={Waragi}
				alt="Waragi"
				class="hero-image absolute top-[33%] right-5 -z-10 w-full max-w-25 opacity-0 md:max-w-40 lg:right-[25%]"
			/>
			<img
				src={PourDrink}
				alt="Pour Drink"
				class="hero-image absolute bottom-[10%] left-[20%] -z-10 w-full max-w-25 opacity-0 md:max-w-40"
			/>
			<img
				src={DrinkServed}
				alt="Drink Served"
				class="hero-image absolute right-[5%] bottom-[0] -z-10 w-full max-w-25 opacity-0 md:max-w-40"
			/>
		</div>
	</div>
</section>
