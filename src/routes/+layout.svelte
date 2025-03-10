<script>
    let { children } = $props();
    import "../app.css";
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
</script>

<Header />
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