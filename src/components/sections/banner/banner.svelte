<script>
    import ContentWrapper from "components/layout/contentWrapper/contentWrapper.svelte";
    import SocialButtons from "components/UI/socialButtons/socialButtons.svelte";

    import { labels } from "content";
</script>

<style lang="scss">
    @import "banner";
</style>

<section>
    <ContentWrapper smallerBottomMargin>
        <div class="banner">
            <div class="image">
                <img src="/assets/people/tz.png" alt="tz"/>
            </div>

            <article>
                <h2>{labels.banner.title}</h2>
                <h5>{labels.banner.subtitle}</h5>
                <SocialButtons/>
            </article>
        </div>
    </ContentWrapper>
</section>