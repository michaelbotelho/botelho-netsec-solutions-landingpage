<script>
    import { isDropdownOpen } from '../store';
    import { onMount } from 'svelte';
    
    let dropdownOpen = false;
    
    $: $isDropdownOpen = dropdownOpen;
    
    function toggleDropdown() {
        dropdownOpen = !dropdownOpen;
        isDropdownOpen.set(dropdownOpen);
    }

    function reroute(href) {}
</script>

<header class="flex flex-col sticky top-0 z-20 bg-white">
    <div class="max-w-[1400px] mx-auto w-full flex items-center justify p-2 py-6">
        <a href="/" class="flex items-center">
            <img src="favicon.png" alt="Botelho NetSec Solutions" class="w-10 h-10 mr-4">
            <h1 class="text-lg md:text-xl lg:text-2xl font-bold">Botelho NetSec Solutions</h1>
        </a>
        <button class="ml-auto md:hidden grid place-items-center" aria-label="Toggle navigation" on:click={toggleDropdown}>
            <i class="fa-solid fa-bars"></i>
        </button>
        <nav class="ml-auto hidden md:flex font-medium items-center gap-4 lg:gap-6">
            <a class="duration-200 [&:hover]:text-purple-800 cursor-pointer">About</a>
            <a class="duration-200 [&:hover]:text-purple-800 cursor-pointer">Services</a>
            <a class="duration-200 [&:hover]:text-purple-800 cursor-pointer">Consulting</a>
            <a class="duration-200 [&:hover]:text-purple-800 cursor-pointer">Reviews</a>
            <a class="duration-200 [&:hover]:text-purple-800 cursor-pointer">Pricing</a>
            <a class="duration-200 [&:hover]:text-purple-800 cursor-pointer">FAQs</a>
            <button class="specialBtn">
                <p>Secure your network</p> 
            </button>
        </nav>
        {#if $isDropdownOpen}
            <div class="fixed top-0 left-0 w-screen h-screen border-b bg-white z-50 flex flex-col gap-8 p-5 px-2 md:hidden">
                <div class="flex items-center justify-between gap-4 border-b pb-2">
                    <a href="/" class="flex items-center" on:click={toggleDropdown}>
                        <img src="favicon.png" alt="Botelho NetSec Solutions" class="w-10 h-10 mr-4">
                        <h1 class="text-lg md:text-xl lg:text-2xl font-bold">Botelho NetSec Solutions</h1>
                    </a>
                    <button class="ml-auto md:hidden grid place-items-center" aria-label="Toggle navigation" on:click={toggleDropdown}>
                        <i class="fa-solid fa-times text-xl"></i>
                    </button>
                </div>
                <div class="flex flex-col flex-1 gap-4 font-medium">
                    <a class="text-left text-2xl border-none outline-none p-2 px-4 duration-200 [&:hover]:text-purple-800 [&:hover]:pl-6 cursor-pointer">
                        About
                        <i class="fa-solid fa-chevron-right text-lg px-2"></i>
                    </a><a class="text-left text-2xl border-none outline-none p-2 px-4 duration-200 [&:hover]:text-purple-800 [&:hover]:pl-6 cursor-pointer">
                        Services
                        <i class="fa-solid fa-chevron-right text-lg px-2"></i>
                    </a>
                    <a class="text-left text-2xl border-none outline-none p-2 px-4 duration-200 [&:hover]:text-purple-800 [&:hover]:pl-6 cursor-pointer">
                        Consulting
                        <i class="fa-solid fa-chevron-right text-lg px-2"></i>
                    </a>
                    <a class="text-left text-2xl border-none outline-none p-2 px-4 duration-200 [&:hover]:text-purple-800 [&:hover]:pl-6 cursor-pointer">
                        Reviews
                        <i class="fa-solid fa-chevron-right text-lg px-2"></i>
                    </a>
                    <a class="text-left text-2xl border-none outline-none p-2 px-4 duration-200 [&:hover]:text-purple-800 [&:hover]:pl-6 cursor-pointer">
                        Pricing
                        <i class="fa-solid fa-chevron-right text-lg px-2"></i>
                    </a>
                    <a class="text-left text-2xl border-none outline-none p-2 px-4 duration-200 [&:hover]:text-purple-800 [&:hover]:pl-6 cursor-pointer">
                        FAQs
                        <i class="fa-solid fa-chevron-right text-lg px-2"></i>
                    </a>
                    
                </div>
            </div>        
        {/if}
    </div>
</header>
