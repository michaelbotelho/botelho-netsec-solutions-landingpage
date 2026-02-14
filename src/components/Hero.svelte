<script>
    import Header from "./Header.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";
    import CTAs from "./CTAs.svelte";
</script>

<SectionWrapper>
    <div
        class="flex flex-col gap-10 flex-1 items-center justify-center pb-10 md:pb-14 "
    >
        <h2
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-[1400px] mx-auto w-full text-center font-medium"
        >
            <span class="highlight">Secure</span> your network<br />
            with solutions <span class="highlight">tailored</span><br />
            to <span class="highlight underline">your business</span>
            <br />
        </h2>
        <p class="text-xl sm:text-2xl md:text-3xl text-center px-4 max-w-[1000px] mx-auto w-full">
            We provide a range of services to help you secure your network and
            protect your data. Our team of experts will work with you to develop
            a solution that meets your needs and fits your budget.
        </p>
        <CTAs mode="specialBtnDark"/>
    </div>
</SectionWrapper>


<!-- Shine effect for "your business" line
<style>
    @keyframes shine {
        0% {
            background-position: -200px;
        }
        100% {
            background-position: 200px;
        }
    }

    .shine {
        display: inline-block;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255), rgba(255, 255, 255, 0.6));
        background-size: 200px 100%;
        animation: shine 3s infinite linear;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        line-height: auto; /* Adjust line height */
        padding-bottom: 0.1em; /* Adjust padding to prevent clipping */
    }
</style>

<SectionWrapper>
    <div
        class="flex flex-col gap-10 flex-1 items-center justify-center pb-10 md:pb-14 text-white bg-gradient-to-tr from-purple-500 to-purple-300"
    >
        <h2
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-[1400px] mx-auto w-full text-center font-medium"
        >
            <span class="text-purple-600">Secure</span> your network<br />
            with solutions <span class="text-purple-600">tailored</span><br />
            to <span class="shine underline">your business</span>
            <br />
        </h2>
        <p class="text-xl sm:text-2xl md:text-3xl text-center px-4 max-w-[1000px] mx-auto w-full">
            We provide a range of services to help you secure your network and
            protect your data. Our team of experts will work with you to develop
            a solution that meets your needs and fits your budget.
        </p>
        <CTAs mode="specialBtnDark"/>
    </div>
</SectionWrapper> -->