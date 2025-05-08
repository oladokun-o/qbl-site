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
<section id="hero" class="relative flex h-screen items-center bg-[#091300]">
	<!-- ===================== Navigation Bar ===================== -->
	<nav class="absolute top-0 left-0 z-40 w-full">
		<div class="container mx-auto flex items-center justify-between px-4 py-5">
			<!-- Site Logo -->
			<a href="/" class="text-xl font-bold text-indigo-600">
				<img src={LogoSvg} alt="Logo" class="w-[48px]" />
			</a>
			<!-- Navigation Links -->
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
				class="scroll-move absolute top-[10%] left-[5%] -z-10 w-full max-w-40 transition-transform duration-700 ease-out"
			/>
			<img
				src={Bottle}
				alt="The igbo culture"
				class="scroll-move absolute top-[2%] right-[35%] -z-10 w-full max-w-40 transition-transform delay-200 duration-700 ease-out"
			/>
			<img
				src={VintageYorubaCouple}
				alt="The igbo culture"
				class="scroll-move absolute top-[33%] right-[10%] -z-10 w-full max-w-40 transition-transform delay-300 duration-700 ease-out"
			/>
			/>
			<img
				src={PalmWineGourd}
				alt="The igbo culture"
				class="scroll-move absolute bottom-[10%] left-[20%] -z-10 w-full max-w-40 transition-transform delay-500 duration-700 ease-out"
			/>
			<img
				src={Sarahlaird}
				alt="Sarahlaird"
				class="scroll-move absolute right-[25%] bottom-[0] -z-10 w-full max-w-40 transition-transform delay-600 duration-700 ease-out"
			/>
		</div>
	</div>
</section>

<!-- ===================== SECOND IMAGE SECTION ===================== -->
<section class="relative flex h-screen items-center bg-[#091300]">
	<div class="relative z-1 h-screen w-full overflow-hidden">
		<!-- first five images -->
		<img
			src={GrapeEscape}
			alt="The igbo culture"
			class="scroll-move absolute top-[10%] left-[5%] -z-10 w-full max-w-40 transition-transform duration-700 ease-out"
		/>
		<img
			src={GhiaPear}
			alt="The igbo culture"
			class="scroll-move absolute top-[2%] right-[50%] -z-10 w-full max-w-40 transition-transform delay-200 duration-700 ease-out"
		/>
		<img
			src={Waragi}
			alt="The igbo culture"
			class="scroll-move absolute top-[33%] right-[25%] -z-10 w-full max-w-40 transition-transform delay-300 duration-700 ease-out"
		/>
		/>
		<img
			src={PourDrink}
			alt="The igbo culture"
			class="scroll-move absolute bottom-[10%] left-[20%] -z-10 w-full max-w-40 transition-transform delay-500 duration-700 ease-out"
		/>
		<img
			src={DrinkServed}
			alt="Sarahlaird"
			class="scroll-move absolute right-[5%] bottom-[0] -z-10 w-full max-w-40 transition-transform delay-600 duration-700 ease-out"
		/>
	</div>
</section>

<!-- ===================== ABOUT SECTION ===================== -->
<section id="about" class="relative flex min-h-screen items-center bg-[#A52F00] text-black py-30">
	<img src={Anise} alt="anise" class="absolute top-75 left-[21%] w-60" />
	<div
		class="relative z-8 container mx-auto flex flex-col items-center justify-center space-y-6 px-20 pt-90"
	>
		<div>
			<h1 class="text-black/70 font-bold text-[50px] leading-relaxed indent-58">
				<span class="text-white">At Quench</span> Beverages, we bottle more than liquor — we bottle legacy. Inspired by time-honored
				methods and reimagined for today’s drinker, our spirits are bold, intentional, and full of
				character. Every pour is a celebration — of where we’ve been, and where we’re going.
			</h1>
		</div>
	</div>
</section>

<!-- ===================== OUR CRAFT SECTION ===================== -->
<section
	id="craft"
	class="relative flex min-h-screen flex-col items-center bg-[#233020] pt-50 text-black"
>
	<div class="container flex justify-center gap-40">
		<!-- Our Craft Group 1 -->
		<div class="flex flex-col gap-20">
			<p class="uppercase text-white font-light">Our craft</p>>
			<img src={CraftTitle} alt="craft title" class="w-90" />
		</div>
		<!-- Our Craft Group 2 -->
		<div class="flex flex-col gap-15">
			<img src={Anise} alt="anise" class="w-70" />
			<div class="flex w-70 flex-col gap-5 text-sm font-light text-white">
				<p>We started with two foundational spirits:</p>
				<p>
					<span class="italic">Ògógóró</span><br />a timeless, bold distillate crafted with clarity
					and character.
				</p>
				<p>
					<span class="italic">Waragia</span> <br />refined botanical spirit, smooth with a
					signature aromatic finish.
				</p>
			</div>
		</div>
		<!-- Our Craft Group 3 -->
		<div class="flex flex-col gap-15 pt-20">
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
				<p>Each bottle is crafted to refresh, connect, and redefine how spirits are experienced.</p>
			</div>
		</div>
	</div>

	<!-- Decorative Ogogoro Image -->
	<div>
		<img src={ogogoro} alt="ogogoro" class="" />
	</div>
</section>

<!-- ===================== PRODUCTS SECTION ===================== -->
<section
	id="products"
	class="relative flex min-h-screen flex-col bg-[#A52F00] px-8 py-30 text-white"
>
	<h1 class="items-left mb-15 text-left text-[60px] text-[#FFEEAF] px-35">OUR <br /> PRODUCTS</h1>
	<!-- Products Display -->
	<div class="py-10 w-full overflow-x-auto">
		<div class="flex flex-nowrap justify-center gap-x-10 gap-y-20 mx-auto max-w-7xl">
		  
		  <!-- ogogoro -->
		  <div class="flex flex-col items-center gap-6 w-72">
			<img src={Product1} alt="Product" class="w-full object-contain" />
			<div class="flex flex-col gap-6 text-sm font-medium text-left">
			  <p class="font-bold uppercase">Ogogoro</p>
			  <ul class="flex flex-col gap-4">
				<li class="font-light"><span class="italic font-bold">Classic</span><br />The original palm spirit.</li>
				<li class="font-light"><span class="italic font-bold">Crema de Naija</span><br />A silky cream liqueur inspired by tropical indulgence.</li>
				<li class="font-light"><span class="italic font-bold">Flavored</span><br />Pineapple & Coconut variants for a fresh island twist.</li>
			  </ul>
			</div>
		  </div>
	  
		  <!-- waragi -->
		  <div class="flex flex-col items-center gap-6 w-72">
			<img src={Product2} alt="Product" class="w-full object-contain" />
			<div class="flex flex-col gap-6 text-sm font-medium text-left">
			  <p class="font-bold uppercase">Waragi</p>
			  <ul class="flex flex-col gap-4">
				<li class="font-light"><span class="italic font-bold">Original</span><br />Clean, clear, and botanical.</li>
				<li class="font-light"><span class="italic font-bold">Flavored</span><br />Guava & Mango infusions for fruit-forward flair.</li>
			  </ul>
			</div>
		  </div>
	  
		  <!-- Zobolo Plus -->
		  <div class="flex flex-col items-center gap-6 w-72">
			<img src={Product3} alt="Product" class="w-full object-contain" />
			<div class="flex flex-col gap-6 text-sm font-medium text-left">
			  <p class="font-bold uppercase">Zobolo Plus</p>
			  <ul class="flex flex-col gap-4">
				<li class="font-light">Ogogoro meets Zobo in a hibiscus-spiced cocktail. Bold and floral.</li>
			  </ul>
			</div>
		  </div>
	  
		  <!-- Calmar -->
		  <div class="flex flex-col items-center gap-6 w-72">
			<img src={Product4} alt="Product" class="w-full object-contain" />
			<div class="flex flex-col gap-6 text-sm font-medium text-left">
			  <p class="font-bold uppercase">Calmar</p>
			  <ul class="flex flex-col gap-4">
				<li class="font-light">A zesty Ogogoro + Chapman mix. Bittersweet, citrusy, iconic.</li>
			  </ul>
			</div>
		  </div>
	  
		  <!-- Zobolo -->
		  <div class="flex flex-col items-center gap-6 w-72">
			<img src={Product5} alt="Product" class="w-full object-contain" />
			<div class="flex flex-col gap-6 text-sm font-medium text-left">
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
	class="relative flex min-h-screen flex-col bg-[#566353] px-8 py-30 text-white"
>
	<div class="absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
		<img src={ContactText} alt="contact text" class="w-full max-w-[600px] md:max-w-[900px]" />
	</div>
	<div class="absolute bottom-1 left-1/2 z-50 -translate-x-1/2 -translate-y-9">
		<img src={ContactImage} alt="ContactImage" class="w-full max-w-[100px] md:max-w-[250px]" />
	</div>
	<div class="absolute bottom-9 left-[5%] w-50 text-sm">
		<div class="flex flex-col gap-3 text-center">
			<p>Order Now — Get your favorite Quench products delivered or find a stockist near you.</p>
			<a href="#" class="underline">Order Now</a>
		</div>
	</div>
	<div class="absolute right-[5%] bottom-9 w-50 text-sm">
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
</section>
