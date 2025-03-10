<script>
    import Header from "./Header.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";
    import CTAs from "./CTAs.svelte";
</script>

<SectionWrapper>
    <div
        class="flex flex-col gap-10 flex-1 items-center justify-center pb-10 md:pb-14"
    >
        <h2
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-[1400px] mx-auto w-full text-center font-medium"
        >
            <span class="text-purple-700">Secure</span> your network<br />
            with solutions <span class="text-purple-700">tailored</span><br />
            to <span class="text-slate-500 underline">your business</span>
            <br />
        </h2>
        <p class="text-xl sm:text-2xl md:text-3xl text-center px-4 max-w-[1000px] mx-auto w-full">
            We provide a range of services to help you secure your network and
            protect your data. Our team of experts will work with you to develop
            a solution that meets your needs and fits your budget.
        </p>
        <CTAs />
    </div>
</SectionWrapper>
