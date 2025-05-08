<script>
	import Anise from '$lib/assets/images/anise.png';
	import CraftTitle from '$lib/assets/images/craft title.svg';
	import GrapeEscape from '$lib/assets/images/grape escape.png';
	import ogogoro from '$lib/assets/images/OGOGORO,WARAGI.svg';
</script>

<!-- ===================== OUR CRAFT SECTION ===================== -->
<section
	id="craft"
	class="relative z-99 mx-0 flex min-h-screen flex-col items-center overflow-x-hidden bg-[#233020] px-0 pt-20 pb-20 text-black md:pt-50 md:pb-0"
>
	<div class="flex w-full flex-col justify-center gap-30 lg:flex-row">
		<!-- Our Craft Group 1 -->
		<div class="flex flex-col gap-20 px-5">
			<p class="font-light text-white uppercase">Our craft</p>
			<img src={CraftTitle} alt="craft title" class="w-90" />
		</div>
		<!-- Our Craft Group 2 -->
		<div class="lg flex justify-between gap-10 md:justify-center md:gap-30">
			<div class="flex flex-col gap-15">
				<img src={Anise} alt="anise" class="w-70" />
				<div class="flex w-70 flex-col gap-5 text-sm font-light text-white">
					<p>We started with two foundational spirits:</p>
					<p>
						<span class="italic">Ògógóró</span><br />a timeless, bold distillate crafted with
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
						<li>Ògógóró + Zobo Ògógóró + Chapman</li>
						<li>Ògógóró+ Palm Wine</li>
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
