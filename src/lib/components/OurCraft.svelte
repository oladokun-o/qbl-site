<script lang="ts">
	import { onMount } from 'svelte';
	import AnimateOnScroll from './AnimateOnScroll.svelte';
	import Anise from '$lib/assets/images/anise.png';
	import CraftTitle from '$lib/assets/images/craft title.svg';
	import GrapeEscape from '$lib/assets/images/grape escape.png';

	onMount(() => {
		const container: any = document.querySelector('.horizontal-scroll-container');
		const panelsWrapper = container?.querySelector('.panels-wrapper');
		const panels = panelsWrapper?.querySelectorAll('.panel');
		const panelCount = panels?.length;

		const innerPanelsContainer = panelsWrapper?.querySelector('.inner-panels-container');
		const endPanelWrapper = panelsWrapper?.querySelector('.end-panel-wrapper');
		const endPanels = endPanelWrapper?.querySelectorAll('.end-inner-panel');
		const endPanelCount = endPanels?.length;

		if (container && panelsWrapper && panelCount) {
			// Set the wrapper width precisely based on panel count
			gsap.set(panelsWrapper, {
				width: `${panelCount * 100}vw`
			});

			// Horizontal Scroll + Pinning for the panels
			gsap.to(panelsWrapper, {
				x: () => -(panelsWrapper.offsetWidth - window.innerWidth),
				ease: 'none',
				scrollTrigger: {
					trigger: container,
					start: 'top top',
					end: () => `+=${panelsWrapper.offsetWidth - window.innerWidth}`,
					pin: true,
					scrub: 1,
					invalidateOnRefresh: true
				}
			});

			// Background Color Transition
			gsap.to('.panel-brown', {
				backgroundColor: '#233020',
				ease: 'none',
				scrollTrigger: {
					trigger: container,
					start: 'top top',
					end: () => `+=${container.offsetWidth}`,
					scrub: true
				}
			});

			// Horizontal Scroll for the end panels
			if (endPanelWrapper && endPanelCount) {
				gsap.set(endPanelWrapper, {
					width: `${endPanelCount * 100}vw`
				});

				gsap.to(endPanelWrapper, {
					x: () => -(endPanelWrapper.offsetWidth - window.innerWidth),
					ease: 'none',
					scrollTrigger: {
						trigger: container,
						start: 'top top',
						end: () => `+=${(endPanelWrapper.offsetWidth - window.innerWidth) * 0.6}`,
						// pin: true,
						scrub: 1,
						invalidateOnRefresh: true
					}
				});
			}
		};
	});
</script>

<section
	id="craft"
	class="horizontal-scroll-container panel-brown sticky top-0 z-50 h-screen w-full overflow-hidden bg-[#A52F00] text-white"
>
	<div class="panels-wrapper flex h-full flex-row">
		<!-- Each panel should have full viewport width -->
		<div
			class="panel panel-brown py-30 relative flex h-full w-screen items-center justify-center bg-[#A52F00]"
		>
			<!-- Your first panel content -->
			<img
				src={Anise}
				alt="anise"
				class="absolute left-5 top-[10%] w-[194px] md:left-[21%] 2xl:w-[328px]"
			/>
			<AnimateOnScroll
				animation="slide-left"
				duration={1.5}
				once={false}
				extendedClass="z-8 w-full absolute left-[0] top-[32.3%] sm:w-[337px] pl-[3%] md:w-full md:px-20 xl:top-[270px] xl:px-[200px]"
			>
				<h1
					class="indent-23 md:indent-30 xl:indent-50 text-[30px] font-bold leading-tight text-black/70 md:leading-relaxed lg:indent-40 lg:text-[40px] 2xl:text-[45px]"
				>
					<span class="text-white">At Quench</span> Beverages, we bottle more than liquor — we bottle
					legacy. Inspired by time-honored methods and reimagined for today's drinker, our spirits are
					bold, intentional, and full of character. Every pour is a celebration — of where we've been,
					and where we're going.
				</h1>
			</AnimateOnScroll>
		</div>

		<div
			class="panel panel-brown relative flex h-full w-screen items-center justify-center bg-[#A52F00]"
		>
			<div
				class="inner-panels-container flex h-full w-full flex-col overflow-x-auto md:flex-row md:justify-between md:overflow-visible md:px-[100px]"
			>
				<div
					class="inner-panel md:py-30 flex w-full flex-shrink-0 flex-col pt-20 text-black md:w-auto"
				>
					<div class="flex flex-col gap-5 px-5 md:gap-20">
						<p class="dm-sans text-[14px] font-light uppercase text-white">Our craft</p>

						<div class="w-[260px] sm:w-[334px] md:w-[484px]">
							<img
								src={CraftTitle}
								alt="From Liquor To Fusions – A New Chapter In Spirits"
								class="w-full"
							/>
						</div>
					</div>
				</div>
				<div
					class="end-panel-wrapper flex w-full flex-row gap-20 overflow-y-hidden pl-[700px] pr-[600px] pt-5 md:w-auto md:gap-[50px] md:p-0 xl:gap-[70px]"
				>
					<AnimateOnScroll
						animation="slide-bottom"
						duration={1.5}
						once={false}
						extendedClass="inner-panel end-inner-panel w-auto flex-shrink-0 px-0 md:w-auto flex flex-col text-black gap-5 md:gap-[55px] relative md:top-10"
					>
						<img src={Anise} alt="anise" class="w-[215px] md:w-[328px]" />
						<AnimateOnScroll
							animation="fade-in"
							duration={1.5}
							delay={0.5}
							once={false}
							screenSize="mobile"
							extendedClass="dm-sans flex flex-col gap-2 md:gap-5 text-[14px] font-light text-white w-[215px] md:w-[251px]"
						>
							<p>We started with two foundational spirits:</p>
							<p>
								<span class="italic">Ògógóró</span> <br /> a timeless, bold distillate crafted with clarity
								and character.
							</p>
							<p>
								<span class="italic">Waragi</span> <br /> a refined botanical spirit, smooth with a signature
								aromatic finish.
							</p>
						</AnimateOnScroll>
					</AnimateOnScroll>
					<AnimateOnScroll
						animation="slide-top"
						duration={1.5}
						once={false}
						extendedClass="inner-panel end-inner-panel w-auto flex-shrink-0 px-0 md:w-auto flex flex-col text-black gap-5 md:gap-[55px] relative md:top-30"
					>
						<img src={GrapeEscape} alt="grape escape" class="w-[215px] md:w-[328px]" />
						<AnimateOnScroll
							animation="fade-in"
							duration={1.5}
							delay={0.5}
							once={false}
							screenSize="mobile"
							extendedClass="dm-sans flex flex-col gap-2 md:gap-5 text-[14px] font-light text-white w-[215px] md:w-[251px]"
						>
							<p>
								From these, we created Fusions — a line of ready-to-drink cocktails blending
								tradition with flavor-forward innovation:
							</p>
							<ol class="list-outside list-disc pl-9 italic">
								<li>Ògógóró + Zobo Ògógóró + Chapman</li>
								<li>Ògógóró+ Palm Wine</li>
							</ol>
							<p>
								Each bottle is crafted to refresh, connect, and redefine how spirits are
								experienced.
							</p>
						</AnimateOnScroll>
					</AnimateOnScroll>
				</div>
			</div>
		</div>
	</div>
</section>
