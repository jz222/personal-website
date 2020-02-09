<script>
    import { fly } from "svelte/transition";

    import ContentWrapper from "../../layout/contentWrapper/contentWrapper.svelte";
    import Mockup from "../../UI/mockupMobile/mockup.svelte"

    import createIntersectionObserver from "helpers/intersectionObserver";
    import { labels } from "content";

    let intersecting;

    const intersectionListener = createIntersectionObserver(() => intersecting = true, "-150px");

    // Transitions
    const t1 = { y: 100, duration: 950, delay: 450 };
    const t2 = { y: 100, duration: 1200, delay: 500 };
    const t3 = { y: 100, duration: 1250, delay: 550 };
</script>

<style lang="scss">
    @import "mosaic";
</style>

<section use:intersectionListener class:intersecting class="top-clip bottom-clip">
    <ContentWrapper>
        {#if intersecting}
            <div class="mockup">
                <Mockup/>
            </div>

            <article>
                <h3 transition:fly="{t1}">{labels.mosaic.name}</h3>

                <h4 transition:fly="{t2}">{labels.mosaic.caption}</h4>

                <a transition:fly="{t3}" class="link" href="https://mosaic.mc" rel="noreferrer">
                    <img src="/assets/icons/globe.svg" alt="globe"/>
                    <span>Visit Website</span>
                </a>
            </article>
        {/if}
    </ContentWrapper>
</section>