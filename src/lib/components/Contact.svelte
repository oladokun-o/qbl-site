<script>
	import ContactText from '$lib/assets/images/Contact text.svg';
	import ContactImage from '$lib/assets/images/contact img.png';
</script>

<!-- ===================== CONTACT US SECTION ===================== -->
<section
	id="contact"
	class="relative z-99 flex min-h-screen flex-col overflow-x-hidden bg-[#566353] px-8 py-30 text-white"
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
