<script>
    import ContentWrapper from "../contentWrapper/contentWrapper.svelte";
    import SocialButtons from "components/UI/socialButtons/socialButtons.svelte";

    import { labels } from "content";

    const scrollToTop = () => window.scroll({ top: 0, behavior: "smooth" });
</script>

<style lang="scss">
    @import "footer";
</style>

<footer class="top-clip">
    <ContentWrapper>
        <article>
            <span><b>timo</b> | engineer</span>
        </article>

        <article>
            <b>{labels.footer.legalNotice}</b>
            <ul>
                <li>{labels.footer.copyright}</li>
                <li>{labels.footer.name}</li>
            </ul>
        </article>

        <article>
            <b>{labels.footer.contact}</b>
            <ul>
                <li>{labels.footer.email}</li>
                <li>
                    <a href="https://t.me/zimmermanntimo" target="_blank" rel="noreferrer">{labels.footer.telegram}</a>
                </li>
            </ul>
        </article>

        <article>
            <b>{labels.footer.connect}</b>
            <SocialButtons/>
        </article>
    </ContentWrapper>
</footer>