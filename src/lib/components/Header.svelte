<script lang="ts">
	import LogoSvg from '$lib/assets/images/icon.svg';
    import CloseSvg from '$lib/assets/images/close-icon.svg';
    
	let menuOpen = false;
</script>

<nav class="fixed top-0 left-0 z-[999] w-full bg-transparent">
    <div class="container mx-auto flex items-center justify-between px-4 py-5">
        <!-- Logo -->
        <a href="/" class="text-xl font-bold text-indigo-600">
            <img src={LogoSvg} alt="Logo" class="w-[48px]" />
        </a>

        <!-- Hamburger Button (mobile only) -->
        <button
            type="button"
            aria-label="Toggle navigation"
            class="cursor-pointer text-white focus:outline-none md:hidden"
            on:click={() => (menuOpen = !menuOpen)}
        >
            <svg
                width="28"
                height="18"
                viewBox="0 0 28 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M0 1H28" stroke="white" stroke-width="2" />
                <path d="M0 9H28" stroke="white" stroke-width="2" />
                <path d="M0 17H28" stroke="white" stroke-width="2" />
            </svg>
        </button>

        <!-- Nav Links (desktop) -->
        <div class="hidden space-x-8 md:flex">
            <a href="#craft" class="dm-sans text-[12px] font-bold text-white transition-colors"
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
        class={`fixed top-0 left-0 z-50 h-full w-full transform bg-[#091300] p-6 text-white transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
    >
        <div class="mb-9 flex justify-between">
            <a href="/" class="text-xl font-bold text-indigo-600">
                <img src={LogoSvg} alt="Logo" class="w-[38px]" />
            </a>
            <!-- Close Button -->
            <button class="mb-6 cursor-pointer text-white" on:click={() => (menuOpen = false)}>
                <img src={CloseSvg} alt="Close" class="w-[24px]" />
            </button>
        </div>

        <!-- Sidebar Links -->
        <nav class="flex flex-col space-y-6">
            <a href="#craft" class="dm-sans text-sm font-bold" on:click={() => (menuOpen = false)}>OUR CRAFT</a>
            <a href="#products" class="dm-sans text-sm font-bold" on:click={() => (menuOpen = false)}
                >OUR PRODUCTS</a
            >
            <a href="#contact" class="dm-sans text-sm font-bold" on:click={() => (menuOpen = false)}>CONTACT</a>
        </nav>
    </div>
</nav>