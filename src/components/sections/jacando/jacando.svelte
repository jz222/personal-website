<script>
    import { fly } from "svelte/transition";

    import ContentWrapper from "../../layout/contentWrapper/contentWrapper.svelte";
    import MockupDashboard from "../../UI/mockupDashboard/mockupDashboard.svelte";
    import MockupWeb from "../../UI/mockupWeb/mockupWeb.svelte";

    import createIntersectionObserver from "helpers/intersectionObserver";
    import { labels } from "content";

    let intersecting;

    const intersectionListener = createIntersectionObserver(() => intersecting = true, "-150px");

    // Transitions
    const t1 = { y: 70, duration: 750, delay: 250 };
    const t2 = { y: 70, duration: 1000, delay: 350 };
</script>

<style lang="scss">
    @import "jacando";
</style>

<section use:intersectionListener>

    <ContentWrapper>
        {#if intersecting}
            <article>
                <div transition:fly="{t1}">
                    <div>jacando</div>
                    <h3>{labels.jacando.name}</h3>
                </div>

                <h4 transition:fly="{t2}">{labels.jacando.caption}</h4>
            </article>

            <div class="wrapper">
                <MockupWeb intersecting/>
            </div>
        {/if}
    </ContentWrapper>


    <ContentWrapper disableFlex disableTopMargin smallerBottomMargin>
        <div class="header">
            <h4>{labels.jacando.title}</h4>
            <h4>{labels.jacando.subtitle}</h4>
        </div>

        <MockupDashboard/>
    </ContentWrapper>

</section>