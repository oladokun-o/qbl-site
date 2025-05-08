<script>
	import LogoSvg from '$lib/assets/images/icon.svg';
	import HeroTextSvg from '$lib/assets/images/hero-text.svg';
	import TheIgboCulture from '$lib/assets/images/The igbo culture.jpg';
	import Bottle from '$lib/assets/images/1890.jpg';
	import VintageYorubaCouple from '$lib/assets/images/vintage yoruba couple.jpg';
	import PalmWineGourd from '$lib/assets/images/palm wine gourd.jpg';
	import Sarahlaird from '$lib/assets/images/sarahlaird.jpg';
	import PourDrink from '$lib/assets/images/pour drink.jpg';
	import DrinkServed from '$lib/assets/images/drink served.jpg';
	import Waragi from '$lib/assets/images/waragi.jpg';
	import GrapeEscape from '$lib/assets/images/grape escape.png';
	import GhiaPear from '$lib/assets/images/ghia pear.jpg';
	import Anise from '$lib/assets/images/anise.png';
	import Product3 from '$lib/assets/images/Group 3.png';
	import OurCraft from '$lib/assets/images/OUR CRAFT.svg';
	import Product5 from '$lib/assets/images/Group 5.png';
	import CraftTitle from '$lib/assets/images/craft title.svg';
	import Product4 from '$lib/assets/images/Group 4.png';
	import ogogoro from '$lib/assets/images/OGOGORO,WARAGI.svg';
	import Product2 from '$lib/assets/images/Group 2.png';
	import Product1 from '$lib/assets/images/Group 1.png';
	import ContactText from '$lib/assets/images/Contact text.svg';
	import ContactImage from '$lib/assets/images/contact img.png';
	let menuOpen = false;

	import { onMount } from 'svelte';
	let showHeroText = true;

	function handleScroll() {
		const scrollY = window.scrollY;
		const screenHeight = window.innerHeight;

		// Show only if we're within the first 2 sections (i.e., less than 2 screen heights)
		showHeroText = scrollY < screenHeight * 1.5;
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<!-- Landing Section -->
<!-- ===================== HERO SECTION ===================== -->
<section id="hero" class="relative flex h-screen items-center overflow-x-hidden bg-[#091300]">
	<!-- ===================== Navigation Bar ===================== -->
	<nav class="absolute top-0 left-0 z-40 w-full bg-transparent">
		<div class="container mx-auto flex items-center justify-between px-4 py-5">
			<!-- Logo -->
			<a href="/" class="text-xl font-bold text-indigo-600">
				<img src={LogoSvg} alt="Logo" class="w-[48px]" />
			</a>

			<!-- Hamburger Button (mobile only) -->
			<button
				class="cursor-pointer text-white focus:outline-none md:hidden"
				on:click={() => (menuOpen = !menuOpen)}
			>
				<svg
					class="h-6 w-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
					/>
				</svg>
			</button>

			<!-- Nav Links (desktop) -->
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

		<!-- Mobile Nav (slide-down) -->
		<div
			class={`fixed top-0 left-0 z-50 h-full w-64 transform bg-[#091300] p-6 text-white transition-transform duration-300 ease-in-out ${
				menuOpen ? 'translate-x-0' : '-translate-x-full'
			} md:hidden`}
		>
			<div class="mb-9 flex justify-between">
				<a href="/" class="text-xl font-bold text-indigo-600">
					<img src={LogoSvg} alt="Logo" class="w-[38px]" />
				</a>
				<!-- Close Button -->
				<button class="mb-6 cursor-pointer text-white" on:click={() => (menuOpen = false)}>
					✕
				</button>
			</div>

			<!-- Sidebar Links -->
			<nav class="flex flex-col space-y-6">
				<a href="#hero" class="text-sm font-bold" on:click={() => (menuOpen = false)}>OUR CRAFT</a>
				<a href="#products" class="text-sm font-bold" on:click={() => (menuOpen = false)}
					>OUR PRODUCTS</a
				>
				<a href="#contact" class="text-sm font-bold" on:click={() => (menuOpen = false)}>CONTACT</a>
			</nav>
		</div>
	</nav>

	<!-- ===================== Hero Background ===================== -->
	<div class="absolute inset-0 -z-10 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"></div>
	<div class="absolute inset-0 -z-10 bg-black/40"></div>

	<!-- ===================== Hero Content ===================== -->
	<div class="z-10 container mx-auto px-4">
		{#if showHeroText}
			<div class="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
				<img src={HeroTextSvg} alt="Hero Text" class="w-full max-w-[600px] md:max-w-[600px]" />
			</div>
		{/if}

		<!-- ===================== Animated Scroll Images ===================== -->
		<div class="relative h-screen overflow-hidden">
			<!-- first five images -->
			<img
				src={TheIgboCulture}
				alt="The igbo culture"
				class="scroll-move absolute top-35 lg:top-[10%] left-[5%] -z-10 w-full max-w-25 md:max-w-40 transition-transform duration-700 ease-out"
			/>
			<img
				src={Bottle}
				alt="Bottle"
				class="scroll-move absolute top-[2%] lg:right-[35%] right-15 -z-10 w-full max-w-25 md:max-w-40 transition-transform delay-200 duration-700 ease-out"
			/>
			<img
				src={VintageYorubaCouple}
				alt="Vintage Yoruba Couple"
				class="scroll-move absolute top-95 right-5 lg:top-[33%] lg:right-[10%] -z-10 w-full max-w-25 md:max-w-40 transition-transform delay-300 duration-700 ease-out"
			/>
			/>
			<img
				src={PalmWineGourd}
				alt="PalmWine Gourd"
				class="scroll-move absolute left-5 bottom-[10%] lg:left-[20%] -z-10 w-full max-w-25 md:max-w-40 transition-transform delay-500 duration-700 ease-out"
			/>
			<img
				src={Sarahlaird}
				alt="Sarahlaird"
				class="scroll-move absolute right-[25%] bottom-[0] -z-10 w-full max-w-25 md:max-w-40 transition-transform delay-600 duration-700 ease-out"
			/>
		</div>
	</div>
</section>

<!-- ===================== SECOND IMAGE SECTION ===================== -->
<section class="relative flex h-screen items-center overflow-x-hidden bg-[#091300]">
	<div class="relative z-1 h-screen w-full overflow-hidden">
		<!-- first five images -->
		<img
			src={GrapeEscape}
			alt="The igbo culture"
			class="scroll-move absolute top-60 lg:top-[10%] left-[5%] -z-10 w-full max-w-25 md:max-w-40 transition-transform duration-700 ease-out"
		/>
		<img
			src={GhiaPear}
			alt="The igbo culture"
			class="scroll-move absolute top-[2%] right-[50%] -z-10 w-full max-w-25 md:max-w-40 transition-transform delay-200 duration-700 ease-out"
		/>
		<img
			src={Waragi}
			alt="The igbo culture"
			class="scroll-move absolute right-5 top-[33%] lg:right-[25%] -z-10 w-full max-w-25 md:max-w-40 transition-transform delay-300 duration-700 ease-out"
		/>
		/>
		<img
			src={PourDrink}
			alt="The igbo culture"
			class="scroll-move absolute bottom-[10%] left-[20%] -z-10 w-full max-w-25 md:max-w-40 transition-transform delay-500 duration-700 ease-out"
		/>
		<img
			src={DrinkServed}
			alt="Sarahlaird"
			class="scroll-move absolute right-[5%] bottom-[0] -z-10 w-full max-w-25 md:max-w-40 transition-transform delay-600 duration-700 ease-out"
		/>
	</div>
</section>

<!-- ===================== ABOUT SECTION ===================== -->
<section
	id="about"
	class="px-o relative mx-0 flex min-h-screen overflow-x-hidden bg-[#A52F00] py-30 text-black z-99"
>
	<img
		src={Anise}
		alt="anise"
		class="absolute left-5 w-50 md:top-70 md:top-75 md:left-[21%] md:w-60"
	/>
	<div
		class="relative z-8 container mx-auto flex flex-col items-center justify-center space-y-6 px-5 pt-51 md:px-20 md:pt-90"
	>
		<div>
			<h1
				class="indent-15 text-[25px] leading-tight font-bold text-black/70 md:indent-58 md:text-[30px] md:text-[50px] md:leading-relaxed"
			>
				<span class="text-white">At Quench</span> Beverages, we bottle more than liquor — we bottle legacy.
				Inspired by time-honored methods and reimagined for today’s drinker, our spirits are bold, intentional,
				and full of character. Every pour is a celebration — of where we’ve been, and where we’re going.
			</h1>
		</div>
	</div>
</section>

<!-- ===================== OUR CRAFT SECTION ===================== -->
<section
	id="craft"
	class="relative mx-0 flex min-h-screen flex-col items-center overflow-x-hidden bg-[#233020] px-0 pt-20 pb-20 text-black md:pt-50 md:pb-0 z-99"
>
	<div class="flex w-full flex-col justify-center gap-30 lg:flex-row">
		<!-- Our Craft Group 1 -->
		<div class="flex flex-col gap-20 px-5">
			<p class="font-light text-white uppercase">Our craft</p>
			<img src={CraftTitle} alt="craft title" class="w-90" />
		</div>
		<!-- Our Craft Group 2 -->
		<div class="flex justify-between md:justify-center lg gap-10 md:gap-30">
			<div class="flex flex-col gap-15">
				<img src={Anise} alt="anise" class="w-70" />
				<div class="flex w-70 flex-col gap-5 text-sm font-light text-white">
					<p>We started with two foundational spirits:</p>
					<p>
						<span class="italic">Ògógóró</span><br />a timeless, bold distillate crafted with
						clarity and character.
					</p>
					<p>
						<span class="italic">Waragia</span> <br />refined botanical spirit, smooth with a
						signature aromatic finish.
					</p>
				</div>
			</div>
			<div class="flex flex-col gap-15 md:pt-20">
				<img src={GrapeEscape} alt="grape escape" class="w-70" />
				<div class="flex w-70 flex-col gap-5 text-sm font-light text-white">
					<p>
						From these, we created Fusions — a line of ready-to-drink cocktails blending tradition
						with flavor-forward innovation:
					</p>
					<ol class="list-outside list-disc pl-9 italic">
						<li>Ògógóró + Zobo Ògógóró + Chapman</li>
						<li>Ògógóró+ Palm Wine</li>
					</ol>
					<p>
						Each bottle is crafted to refresh, connect, and redefine how spirits are experienced.
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Decorative Ogogoro Image -->
	<div class="mt-10 hidden md:block">
		<img src={ogogoro} alt="ogogoro" class="" />
	</div>
</section>

<!-- ===================== PRODUCTS SECTION ===================== -->
<section
	id="products"
	class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#A52F00] py-30 text-white z-99"
>
	<h1 class="items-left px-5 text-left text-[60px] text-[#FFEEAF] lg:mb-15 lg:px-35 leading-[0.9] font-light">
		OUR <br /> PRODUCTS
	</h1>
	<!-- Products Display -->
	<div class="overflow-x-hidden py-10">
		<div class="mx-auto flex max-w-7xl xl:justify-center gap-x-10 gap-y-20">
			<!-- ogogoro -->
			<div class="flex flex-col items-center gap-6">
				<div class="w-[250px]">
					<img src={Product1} alt="Product" class="w-full" />
				</div>
				<div class="flex flex-col gap-6 text-left text-sm font-medium">
					<p class="font-bold uppercase">Ogogoro</p>
					<ul class="flex flex-col gap-4">
						<li class="font-light">
							<span class="font-bold italic">Classic</span><br />The original palm spirit.
						</li>
						<li class="font-light">
							<span class="font-bold italic">Crema de Naija</span><br />A silky cream liqueur
							inspired by tropical indulgence.
						</li>
						<li class="font-light">
							<span class="font-bold italic">Flavored</span><br />Pineapple & Coconut variants for a
							fresh island twist.
						</li>
					</ul>
				</div>
			</div>

			<!-- waragi -->
			<div class="flex w-72 flex-col items-center gap-6">
				<div class="w-[250px]">
					<img src={Product2} alt="Product" class="w-full" />
				</div>
				<div class="flex flex-col gap-6 text-left text-sm font-medium">
					<p class="font-bold uppercase">Waragi</p>
					<ul class="flex flex-col gap-4">
						<li class="font-light">
							<span class="font-bold italic">Original</span><br />Clean, clear, and botanical.
						</li>
						<li class="font-light">
							<span class="font-bold italic">Flavored</span><br />Guava & Mango infusions for
							fruit-forward flair.
						</li>
					</ul>
				</div>
			</div>

			<!-- Zobolo Plus -->
			<div class="flex w-72 flex-col items-center gap-6">
				<div class="w-[250px]">
					<img src={Product3} alt="Product" class="w-full" />
				</div>
				<div class="flex flex-col gap-6 text-left text-sm font-medium">
					<p class="font-bold uppercase">Zobolo Plus</p>
					<ul class="flex flex-col gap-4">
						<li class="font-light">
							Ogogoro meets Zobo in a hibiscus-spiced cocktail. Bold and floral.
						</li>
					</ul>
				</div>
			</div>

			<!-- Calmar -->
			<div class="flex w-72 flex-col items-center gap-6">
				<div class="w-[250px]">
					<img src={Product4} alt="Product" class="w-full" />
				</div>
				<div class="flex flex-col gap-6 text-left text-sm font-medium">
					<p class="font-bold uppercase">Calmar</p>
					<ul class="flex flex-col gap-4">
						<li class="font-light">A zesty Ogogoro + Chapman mix. Bittersweet, citrusy, iconic.</li>
					</ul>
				</div>
			</div>

			<!-- Zobolo -->
			<div class="flex w-72 flex-col items-center gap-6">
				<div class="w-[250px]">
					<img src={Product5} alt="Product" class="w-full" />
				</div>
				<div class="flex flex-col gap-6 text-left text-sm font-medium">
					<p class="font-bold uppercase">Zobolo</p>
					<ul class="flex flex-col gap-4">
						<li class="font-light">Our take on the classic beloved Zobo.</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ===================== CONTACT US SECTION ===================== -->
<section
	id="contact"
	class="relative flex min-h-screen flex-col overflow-x-hidden bg-[#566353] px-8 py-30 text-white z-99"
>
	<div class="absolute top-1/5 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 lg:top-1/2">
		<img
			src={ContactText}
			alt="contact text"
			class="w-[500px] min-w-[300px] md:w-full md:max-w-[900px]"
		/>
	</div>
	<div class="absolute top-65 left-1/2 z-50 -translate-x-1/2 -translate-y-9 sm:top-60 lg:top-125">
		<img src={ContactImage} alt="ContactImage" class="w-full min-w-[200px] md:max-w-[250px]" />
	</div>
	<div class="mt-[390px] grid w-full justify-center gap-10 lg:mt-0 lg:block">
		<div class="bottom-9 left-[5%] w-50 text-sm lg:absolute">
			<div class="flex flex-col gap-3 text-center">
				<p>Order Now — Get your favorite Quench products delivered or find a stockist near you.</p>
				<a href="#" class="underline">Order Now</a>
			</div>
		</div>
		<div class="right-[5%] bottom-9 w-50 text-sm lg:absolute">
			<div class="flex flex-col gap-3 text-center">
				<p>Follow us for updates, new drops, cocktail reciepes, and exclusive events.</p>
				<div class="flex flex-col text-center underline">
					<a href="#">Instagram</a>
					<a href="#">Twitter</a>
					<a href="#">Facebook</a>
				</div>
				<p>info@quenchbeverages.com</p>
			</div>
		</div>
	</div>
</section>
