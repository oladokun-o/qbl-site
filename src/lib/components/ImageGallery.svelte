<script lang="ts">
	import GrapeEscape from '$lib/assets/images/grape escape.png';
	import GhiaPear from '$lib/assets/images/ghia pear.jpg';
	import Waragi from '$lib/assets/images/waragi.jpg';
	import PourDrink from '$lib/assets/images/pour drink.jpg';
	import DrinkServed from '$lib/assets/images/drink served.jpg';
	import { gsap } from 'gsap';
	import { initHeroAnimations } from '$lib/utils/animation';
	import { onMount } from 'svelte';
	
	let galleryImages: any;
	
	onMount(() => {
		// Get all gallery images
		galleryImages = document.querySelectorAll('.gallery-image');
		
		// Initialize animations with scroll trigger
		if (galleryImages.length) {
			// Create a ScrollTrigger
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: '#image-gallery',
					start: 'top 80%',
					end: 'bottom 20%',
					toggleActions: 'play none none reverse'
				}
			});
			
			// Animate images when section comes into view
			tl.fromTo(galleryImages, 
				{ scale: 1.5, opacity: 0 }, 
				{ 
					scale: 1, 
					opacity: 1, 
					duration: 1.2, 
					stagger: 0.15,
					ease: 'power3.out',
					onComplete: () => {
						// After initial animation, add floating effect
						galleryImages.forEach((img: any) => {
							createFloatingAnimation(img);
						});
					}
				}
			);
		}
		
		return () => {
			// Clean up animations
			gsap.killTweensOf(galleryImages);
		};
	});
	
	// Create a floating animation for an element
	function createFloatingAnimation(element: gsap.TweenTarget) {
		const xMovement = Math.random() * 20 - 10; // -10 to 10
		const yMovement = Math.random() * 20 - 10; // -10 to 10
		const duration = 3 + Math.random() * 2; // 3-5 seconds
		
		gsap.to(element, {
			x: xMovement,
			y: yMovement,
			rotation: Math.random() * 5 - 2.5,
			duration: duration,
			repeat: -1,
			yoyo: true,
			ease: 'sine.inOut'
		});
	}
</script>

<!-- ===================== SECOND IMAGE SECTION ===================== -->
<section id="image-gallery" class="relative flex h-screen items-center overflow-x-hidden bg-[#091300]">
	<div class="relative z-1 h-screen w-full overflow-hidden">
		<!-- second set of images -->
		<img
			src={GrapeEscape}
			alt="Grape Escape"
			class="gallery-image absolute top-60 left-[5%] -z-10 w-full max-w-25 opacity-0 md:max-w-40 lg:top-[10%]"
		/>
		<img
			src={GhiaPear}
			alt="Ghia Pear"
			class="gallery-image absolute top-[2%] right-[50%] -z-10 w-full max-w-25 opacity-0 md:max-w-40"
		/>
		<img
			src={Waragi}
			alt="Waragi"
			class="gallery-image absolute top-[33%] right-5 -z-10 w-full max-w-25 opacity-0 md:max-w-40 lg:right-[25%]"
		/>
		<img
			src={PourDrink}
			alt="Pour Drink"
			class="gallery-image absolute bottom-[10%] left-[20%] -z-10 w-full max-w-25 opacity-0 md:max-w-40"
		/>
		<img
			src={DrinkServed}
			alt="Drink Served"
			class="gallery-image absolute right-[5%] bottom-[0] -z-10 w-full max-w-25 opacity-0 md:max-w-40"
		/>
	</div>
</section>