<script>
    import { fly } from "svelte/transition";

    import ContentWrapper from "../../layout/contentWrapper/contentWrapper.svelte";

    import createIntersectionObserver from "helpers/intersectionObserver";
    import { labels } from "content";

    let intersecting;

    const intersectionListener = createIntersectionObserver(() => intersecting = true, "-150px");

    // Links
    const whitepaper = "https://firebasestorage.googleapis.com/v0/b/timo-engineer.appspot.com/o/whitepaper.pdf?alt=media&token=b31251a5-e146-4d7b-8931-f9bbd0ecd0fe";

    // Transitions
    const t1 = { y: 70, duration: 750, delay: 250 };
    const t2 = { y: 70, duration: 1000, delay: 350 };
    const t3 = { y: 70, duration: 1100, delay: 400 };
    const t4 = { y: 70, duration: 1250, delay: 350 };
    const t5 = { x: 400, duration: 1000, delay: 250 };
</script>

<style lang="scss">
    @import "blabber";
</style>

<section use:intersectionListener>
    <ContentWrapper>
        {#if intersecting}
            <article>
                <div transition:fly="{t1}">
                    <img src="/assets/logos/blabber.svg" alt="blabber"/>
                    <h3>{labels.blabber.name}</h3>
                </div>

                <h4 transition:fly="{t2}">{labels.blabber.caption}</h4>

                <div class="download" transition:fly="{t4}">
                    <a href="{whitepaper}" rel="noreferrer" target="_blank">
                        <img src="/assets/icons/document.svg" alt="document"/>
                        <span>{labels.blabber.whitepaper}</span>
                    </a>
                </div>
            </article>


            <div class="showcase">
                <img src="/assets/images/showcase.png" alt="showcase" transition:fly="{t5}"/>
            </div>
        {/if}
    </ContentWrapper>
</section>