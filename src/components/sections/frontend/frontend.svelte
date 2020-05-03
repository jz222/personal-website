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
    @import "frontend";
</style>

<section use:intersectionListener>
    <ContentWrapper disableTopMargin smallerBottomMargin>
        {#if intersecting}
            <div class="bubbles" transition:fly="{t1}">
                <div class="react">
                    <img src="/assets/logos/react.svg" alt="react"/>
                </div>

                <div class="svelte">
                    <img src="/assets/logos/svelte.png" alt="svelte"/>
                </div>

                <div class="sass">
                    <img src="/assets/logos/sass.png" alt="sass"/>
                </div>

                <div class="babel">
                    <img src="assets/logos/babel.png" alt="babel"/>
                </div>
            </div>

            <article transition:fly="{t1}">
                <h4>{labels.stack.frontendTitle}</h4>

                <p>{labels.stack.frontendText}</p>

                <div class="banner">
                    <img src="/assets/logos/react-grey.png" alt="react"/>
                    <img src="/assets/logos/svelte-grey.svg" alt="svelte"/>
                    <img src="/assets/logos/sass-grey.png" alt="sass"/>
                    <img src="/assets/logos/babel-grey.png" alt="babel"/>
                </div>
            </article>
        {/if}
    </ContentWrapper>
</section>