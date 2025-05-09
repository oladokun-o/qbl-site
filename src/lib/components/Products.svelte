<script lang="ts">
	import { onMount } from 'svelte';
	import { qbl_products } from '$lib/utils/products';
	import OurProducts from '$lib/assets/images/OUR PRODUCTS.svg';
	
	// Product data array
	const products = qbl_products;
	
	let productsContainer: HTMLDivElement | null = null;
	
	onMount(() => {
		// Set the container width based on the number of products
		const containerWidth = products.length * 350; // Width in pixels
		const viewportWidth = window.innerWidth;
		
		gsap.set(productsContainer, {
			width: `${containerWidth}px`
		});
		
		// Create scroll animation
		const scrollAnimation = gsap.to(productsContainer, {
			x: () => -(containerWidth - viewportWidth + 100), // Adding padding
			ease: 'none',
			scrollTrigger: {
				trigger: '#products',
				start: 'top top',
				end: () => `+=${containerWidth - viewportWidth + 200}`, // Longer scroll area
				pin: true,
				scrub: 1,
				invalidateOnRefresh: true,
				anticipatePin: 1
			}
		});
		
		// Add parallax effect to products
		const productElements = document.querySelectorAll('.product-item');
		productElements.forEach((product, index) => {
			gsap.to(product, {
				y: (index % 2 === 0) ? -30 : 30, // Alternating up and down movement
				scrollTrigger: {
					trigger: '#products',
					start: 'top top',
					end: () => `+=${containerWidth - viewportWidth + 200}`,
					scrub: true,
					containerAnimation: scrollAnimation
				}
			});
		});
		
		// Cleanup on component unmount
		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());
		};
	});
</script>

<!-- ===================== PRODUCTS SECTION ===================== -->
<section
	id="products"
	class="relative z-10 flex min-h-screen w-full flex-col overflow-hidden bg-[#A52F00] text-white gap-5 md:gap-10"
>
	<div class="px-5 pt-20 lg:px-35">
		<h1 class="text-left text-[60px] font-light leading-[0.9] text-[#FFEEAF]">
			<img src={OurProducts} alt="Our Products" class="w-[250px] sm:w-[300px] md:w-[250px] 2xl:w-[331px]" />
		</h1>
	</div>
	
	<!-- Products Display - Horizontal Scrolling Container -->
	<div class="products-scroll-container relative flex w-full items-center overflow-hidden">
		<div bind:this={productsContainer} class="products-wrapper flex gap-5 md:gap-20 px-5 pl-10 lg:px-35 md:pr-[100px]">
			{#each products as product, i}
				<div class="product-item flex w-[280px] flex-col gap-3 md:gap-6">
					<div class="product-image-container relative w-[274px] md:w-[200px] xl:w-[334px]">
						<img src={product.image} alt={product.name} class="w-full transition-transform duration-500" />
					</div>
					<div class="flex flex-col gap-3 md:gap-6 text-left text-sm w-full sm:w-[208px]">
						<p class="font-bold uppercase">{product.name}</p>
						<ul class="flex flex-col gap-4">
							{#each product.variants as variant}
								<li class="font-light">
									{#if variant.name}
										<span class="font-bold italic">{variant.name}</span><br />
									{/if}
									{variant.description}
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>