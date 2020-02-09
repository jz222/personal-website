<script>
    import { fly } from "svelte/transition";

    import ContentWrapper from "../../layout/contentWrapper/contentWrapper.svelte";

    import createIntersectionObserver from "helpers/intersectionObserver";
    import { labels } from "content";

    let intersecting;

    const intersectionListener = createIntersectionObserver(() => intersecting = true, "-150px");

    // Transitions
    const t1 = { y: 70, duration: 750, delay: 250 };
</script>

<style lang="scss">
    @import "backend";
</style>

<section use:intersectionListener>
    <ContentWrapper disableTopMargin smallerBottomMargin>
        {#if intersecting}
            <article transition:fly="{t1}">
                <h4>{labels.stack.backendTitle}</h4>

                <p>{labels.stack.backendText}</p>

                <div class="banner">
                    <img src="/assets/logos/go-black.png" alt="go"/>
                    <img src="/assets/logos/nodejs-black.png" alt="nodejs"/>
                    <img src="/assets/logos/mongodb-black.png" alt="mongodb"/>
                    <img src="/assets/logos/graphql-black.png" alt="graphql"/>
                </div>
            </article>

            <div class="bubbles" transition:fly="{t1}">
                <div class="go">
                    <img src="/assets/logos/go.jpg" alt="go"/>
                </div>

                <div class="nodejs">
                    <img src="/assets/logos/nodejs.png" alt="nodejs"/>
                </div>

                <div class="mongoDB">
                    <img src="assets/logos/mongodb.png" alt="mongodb"/>
                </div>

                <div class="graphql">
                    <img src="/assets/logos/graphql.png" alt="graphql"/>
                </div>
            </div>
        {/if}
    </ContentWrapper>
</section>