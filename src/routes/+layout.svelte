<script>
    let { children } = $props();
    import "../app.css";
    import Footer from "../components/Footer.svelte";
</script>

{@render children()}
<Footer />


<!-- General page structure for landing pages
header
hero
service cards/descriptions
user reviews
faq
conversion
footer 
-->