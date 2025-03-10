<script>
    function reroute() {
        window.location.href = "/contact";
    }
</script>

<div class="flex items-center gap-4">
    <button class="specialBtn" on:click={reroute}>
        <p class="text-base sm:text-lg md:text-xl">Contact Us</p>
    </button>
</div>