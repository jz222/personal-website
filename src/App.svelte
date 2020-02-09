<script>
    import Navbar from "components/layout/navbar/navbar.svelte";
    import Title from "components/layout/title/title.svelte";
    import Footer from "components/layout/footer/footer.svelte";

    import Header from "components/sections/header/header.svelte"
    import Blabber from "components/sections/blabber/blabber.svelte";
    import Mosaic from "components/sections/mosaic/mosaic.svelte";
    import Jacando from "components/sections/jacando/jacando.svelte";
    import Frontend from "components/sections/frontend/frontend.svelte"
    import Backend from "components/sections/backend/backend.svelte";
    import References from "components/sections/references/references.svelte"
    import Banner from "components/sections/banner/banner.svelte";

    import { labels } from "content";

    let workAnchor, aboutAnchor, referenceAnchor;
</script>


<Navbar workAnchor="{workAnchor}" aboutAnchor="{aboutAnchor}"/>

<main>
    <!--Header-->
    <Header/>

    <!--Work-->
    <span bind:this={workAnchor}></span>
    <Title title="{labels.titles.work}" subtitle="{labels.titles.workSubtitle}"/>
    <Blabber/>
    <Mosaic/>
    <Jacando/>

    <!--Stack-->
    <span bind:this={aboutAnchor}></span>
    <Title title="{labels.titles.stack}" subtitle="{labels.titles.stackSubtitle}"/>
    <Frontend/>
    <Backend/>

    <!--Testimonials-->
    <Title title="{labels.titles.testimonials}" subtitle="{labels.titles.testimonialsSubtitle}"/>
    <References/>

    <Banner />
</main>

<Footer workAnchor="{workAnchor}" aboutAnchor="{aboutAnchor}"/>