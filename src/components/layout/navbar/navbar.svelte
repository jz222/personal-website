<script>
    import scrollHandler from "helpers/scrollHandler";
    import { labels } from "content";

    export let workAnchor;
    export let aboutAnchor;

    let yOffset = 0;
    let translate;
    let previousScrollPosition = yOffset;

    const handleScroll = () => {
        if (Math.abs(yOffset - previousScrollPosition) > 100) {
            translate = yOffset < previousScrollPosition ? "0" : "-100%";
            previousScrollPosition = yOffset;
        }
    };

    window.onscroll = handleScroll;
</script>

<svelte:window bind:scrollY={yOffset}/>

<style lang="scss">
    @import "navbar";
</style>

<nav style="transform: translateY({translate});">
    <div class="wrapper">
        <span><b>timo</b> | engineer</span>

        <ul>
            <li on:click={() => scrollHandler(workAnchor)}>{labels.nav.work}</li>
            <li on:click={() => scrollHandler(aboutAnchor)}>{labels.nav.about}</li>
        </ul>
    </div>
</nav>