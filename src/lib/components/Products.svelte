<script>
	import Product1 from '$lib/assets/images/Group 1.png';
	import Product2 from '$lib/assets/images/Group 2.png';
	import Product3 from '$lib/assets/images/Group 3.png';
	import Product4 from '$lib/assets/images/Group 4.png';
	import Product5 from '$lib/assets/images/Group 5.png';
</script>

<!-- ===================== PRODUCTS SECTION ===================== -->
<section
	id="products"
	class="relative z-99 flex min-h-screen w-full flex-col overflow-x-hidden bg-[#A52F00] py-30 text-white"
>
	<h1
		class="items-left px-5 text-left text-[60px] leading-[0.9] font-light text-[#FFEEAF] lg:mb-15 lg:px-35"
	>
		OUR <br /> PRODUCTS
	</h1>
	<!-- Products Display -->
	<div class="overflow-x-hidden py-10">
		<div class="mx-auto flex max-w-7xl gap-x-10 gap-y-20 xl:justify-center">
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
