<script>
    import ContentWrapper from "../../layout/contentWrapper/contentWrapper.svelte";
    import SocialButtons from "../../UI/socialButtons/socialButtons.svelte";

    import { labels } from "content";

    let yOffset = 0
</script>

<svelte:window bind:scrollY={yOffset}/>

<style lang="scss">
    @import "header";
</style>

<section class="bottom-clip">
    <ContentWrapper disableFlex>
        <div class="intro" style="transform: translate(0,{-yOffset * 2 / 4}px);">
            <h1>{labels.header.greeting}<br/>{labels.header.title}</h1>
            <p>{labels.header.intro}</p>

            <div>
                <SocialButtons/>
            </div>
        </div>
    </ContentWrapper>
</section>