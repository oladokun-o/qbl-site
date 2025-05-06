<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import LogoSvg from '$lib/assets/images/icon.svg';
    import HeroTextSvg from '$lib/assets/images/hero-text.svg';

	// Register ScrollTrigger with GSAP
	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		// Hero section animation
		gsap.from('.hero-content', {
			y: 50,
			opacity: 0,
			duration: 1.2,
			ease: 'power3.out'
		});

		// From left animation
		gsap.from('.from-left', {
			scrollTrigger: {
				trigger: '.from-left',
				start: 'top 80%',
				toggleActions: 'play none none none'
			},
			x: -100,
			opacity: 0,
			duration: 1,
			ease: 'power3.out'
		});

		// From right animation
		gsap.from('.from-right', {
			scrollTrigger: {
				trigger: '.from-right',
				start: 'top 80%',
				toggleActions: 'play none none none'
			},
			x: 100,
			opacity: 0,
			duration: 1,
			ease: 'power3.out'
		});

		// From bottom animation
		gsap.from('.from-bottom', {
			scrollTrigger: {
				trigger: '.from-bottom',
				start: 'top 80%',
				toggleActions: 'play none none none'
			},
			y: 100,
			opacity: 0,
			duration: 1,
			ease: 'power3.out'
		});

		// Staggered animation
		gsap.from('.stagger-item', {
			scrollTrigger: {
				trigger: '.stagger-container',
				start: 'top 70%',
				toggleActions: 'play none none none'
			},
			y: 50,
			opacity: 0,
			duration: 0.8,
			stagger: 0.2,
			ease: 'power3.out'
		});

		// Parallax effects
		gsap.utils.toArray('.parallax-section').forEach((section) => {
			const depth = section.dataset.depth || 0.2;

			gsap.to(section.querySelector('.parallax-bg'), {
				scrollTrigger: {
					trigger: section,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true
				},
				y: () => section.offsetHeight * depth,
				ease: 'none'
			});
		});

		// Scale-in animation
		gsap.from('.scale-in', {
			scrollTrigger: {
				trigger: '.scale-in',
				start: 'top 75%',
				toggleActions: 'play none none none'
			},
			scale: 0.8,
			opacity: 0,
			duration: 1,
			ease: 'power3.out'
		});
	});
</script>

<!-- Landing Section -->
<section
	id="hero"
	class="parallax-section relative flex h-screen items-center bg-[#091300]"
	data-depth="0.3"
>
	<!-- Navigation -->
	<nav class="absolute left-0 top-0 z-50 w-full shadow-sm">
		<div class="container mx-auto flex items-center justify-between px-4 py-5">
			<a href="/" class="text-xl font-bold text-indigo-600">
				<img src={LogoSvg} alt="Logo" class="w-[48px]" />
			</a>
			<div class="hidden space-x-8 md:flex">
				<a href="#hero" class="text-white text-[12px] font-bold transition-colors dm-sans">OUR CRAFT</a>
				<a href="#products" class="text-white text-[12px] font-bold transition-colors dm-sans">OUR PRODUCTS</a>
				<a href="#contact" class="text-white text-[12px] font-bold transition-colors dm-sans">CONTACT</a>
			</div>
		</div>
	</nav>
	<!-- Hero Section -->
	<div
		class="parallax-bg absolute inset-0 -z-10 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"
	></div>
	<div class="absolute inset-0 -z-10 bg-black/40"></div>
	<div class="container z-10 mx-auto px-4">
		<div class="hero-content w-full flex justify-center items-center">
			<img src={HeroTextSvg} alt="Hero Text" class="w-full max-w-[600px] md:max-w-[800px]" />
		</div>
	</div>
</section>
