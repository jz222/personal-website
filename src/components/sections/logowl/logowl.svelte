<script>
    import { fly } from "svelte/transition";
    import ContentWrapper from "../../layout/contentWrapper/contentWrapper.svelte";
    import MockupCard from "../../UI/mockupCards/mockupCards.svelte";

    import createIntersectionObserver from "helpers/intersectionObserver";
    import { labels } from "content";

    let intersecting;

    const intersectionListener = createIntersectionObserver(() => intersecting = true, "-150px");

    // Transition
    const t1 = { y: 70, duration: 750, delay: 250 };
    const t2 = { y: 70, duration: 1000, delay: 350 };
    const t3 = { y: 70, duration: 1100, delay: 400 };
</script>

<style lang="scss">
    @import "logowl";
</style>

<section use:intersectionListener>
    <ContentWrapper smallerBottomMargin>
        {#if intersecting}
            <article>
                <div transition:fly="{t1}">
                    <div>
                        <img src="/assets/logos/log-owl.svg" alt="log owl logo" />
                    </div>
                    <h3>{labels.logowl.name}</h3>
                </div>

                <h4 transition:fly="{t2}">{labels.logowl.caption}</h4>

                <div class="download" transition:fly="{t2}">
                    <a href="https://logowl.io" target="_blank" rel="noreferrer">
                        <img src="/assets/icons/rocket.svg" alt="rocket"/>
                        <span>{labels.logowl.website}</span>
                    </a>

                    <a href="https://docs.logowl.io" target="_blank" rel="noreferrer">
                        <img src="/assets/icons/globe.svg" alt="globe"/>
                        <span>{labels.logowl.docs}</span>
                    </a>
                </div>
            </article>

            <div class="wrapper" transition:fly="{t3}">
                <MockupCard/>
            </div>
        {/if}
    </ContentWrapper>
</section>