<script>
	import LogoSvg from '$lib/assets/images/icon.svg';
	import HeroTextSvg from '$lib/assets/images/hero-text.svg';
</script>

<!-- Landing Section -->
<section
	id="hero"
	class="relative flex h-screen items-center bg-[#091300]"
>
	<!-- Navigation -->
	<nav class="absolute left-0 top-0 z-50 w-full shadow-sm">
		<div class="container mx-auto flex items-center justify-between px-4 py-5">
			<a href="/" class="text-xl font-bold text-indigo-600">
				<img src={LogoSvg} alt="Logo" class="w-[48px]" />
			</a>
			<div class="hidden space-x-8 md:flex">
				<a href="#hero" class="dm-sans text-[12px] font-bold text-white transition-colors"
					>OUR CRAFT</a
				>
				<a href="#products" class="dm-sans text-[12px] font-bold text-white transition-colors"
					>OUR PRODUCTS</a
				>
				<a href="#contact" class="dm-sans text-[12px] font-bold text-white transition-colors"
					>CONTACT</a
				>
			</div>
		</div>
	</nav>
	<!-- Hero Section -->
	<div
		class="absolute inset-0 -z-10 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"
	></div>
	<div class="absolute inset-0 -z-10 bg-black/40"></div>
	<div class="container z-10 mx-auto px-4">
		<div class="hero-content flex w-full items-center justify-center">
			<img src={HeroTextSvg} alt="Hero Text" class="w-full max-w-[600px] md:max-w-[800px]" />
		</div>
	</div>
</section>
