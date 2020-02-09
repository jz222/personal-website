<script>
    import { fly } from "svelte/transition";

    export let intersecting;

    // Transitions
    const t1 = { y: 70, duration: 1000, delay: 250 };
</script>

<style lang="scss">
    @import "mockupWeb";
</style>

{#if intersecting}
    <div class="mockup" class:animate={intersecting} transition:fly="{t1}">

        <div class="browser">
            <div class="controls">
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div class="bar"></div>
        </div>

        <div class="content">
            <div class="modules">
                <div class="circle"></div>
                <div class="lining"></div>
                <div class="circle"></div>
            </div>

            <div class="mapping">
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>

    </div>
{/if}