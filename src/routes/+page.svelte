<script>
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Products from '$lib/components/Products.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import OurCraft from '$lib/components/OurCraft.svelte';
</script>

<main class="relative w-full">
	<!-- Main Page Layout -->
	<Header />

	<!-- Landing Section -->
	<Hero />

	<!-- About Section -->
	<!-- <section class="sticky"> -->
		<OurCraft />

		<!-- <div class="absolute top-0 z-30"> -->
			<!-- Products Section -->
			<Products />

			<!-- Contact Us Section -->
			<Contact />
		<!-- </div> -->
	<!-- </section> -->
</main>
