<script>
	import ContactText from '$lib/assets/images/Contact text.svg';
	import ContactTextSm from '$lib/assets/images/Contact text-sm.svg';
	import ContactImage from '$lib/assets/images/contact img.png';
	import MaskedContactImage from '$lib/assets/images/contact img.svg';
	import AnimateOnScroll from './AnimateOnScroll.svelte';
	import ZoomInTop from './ZoomInTop.svelte';
	import MaskedZoomInImage from './MaskedZoomInImage.svelte';
</script>

<!-- ===================== CONTACT US SECTION ===================== -->
<section
	id="contact"
	class="z-99 md:py-30 relative flex min-h-screen flex-col overflow-x-hidden bg-[#566353] px-8 pb-5 pt-20 text-white"
>
	<AnimateOnScroll
		animation="slide-top"
		duration={1.5}
		once={false}
		extendedClass="flex w-full flex-col items-center justify-center"
	>
		<img
			src={ContactText}
			alt="contact text"
			class="hidden w-[1000px] xl:block"
			loading="lazy"
			decoding="async"
		/>
		<img
			src={ContactTextSm}
			alt="contact text"
			class="block w-[235px] xl:hidden"
			loading="lazy"
			decoding="async"
		/>
	</AnimateOnScroll>

	<div class="flex w-full flex-col items-center justify-center gap-5 md:flex-row md:gap-10">
		<div class="zoom-wrapper relative top-[-8px] flex w-full items-center justify-center md:hidden">
			<ZoomInTop once={false}>
				<img src={ContactImage} alt="ContactImage" class="w-[250px]" />
			</ZoomInTop>
			<!-- <MaskedZoomInImage imageUrl={ContactImage} maskImageUrl={MaskedContactImage} /> -->
		</div>
		<div class="w-50">
			<div class="flex flex-col gap-3 text-center">
				<p class="dm-sans text-[12px]">
					Order Now — Get your favorite Quench products delivered or find a stockist near you.
				</p>
				<a href="#" class="dm-sans text-[12px] underline">Order Now</a>
			</div>
		</div>
		<div class="relative top-[-28px] hidden w-full items-center justify-center md:flex">
			<img src={ContactImage} alt="ContactImage" class="w-[214px" />
		</div>
		<div class="w-50">
			<div class="flex flex-col gap-3 text-center">
				<p class="dm-sans text-[12px]">
					Follow us for updates, new drops, cocktail reciepes, and exclusive events.
				</p>
				<div class="flex flex-col text-center underline">
					<a href="#" class="dm-sans text-[12px]">Instagram</a>
					<a href="#" class="dm-sans text-[12px]">Twitter</a>
					<a href="#" class="dm-sans text-[12px]">Facebook</a>
				</div>
				<p class="dm-sans text-[12px]">info@quenchbeverages.com</p>
			</div>
		</div>
	</div>
</section>
