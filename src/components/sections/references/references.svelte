<script>
    import { onMount } from "svelte";
    import { fly, fade } from "svelte/transition";

    import { references, labels } from "content";

    let referenceIndex;

    onMount(() => {
        referenceIndex = 0;

        setInterval(() => {
            referenceIndex = (referenceIndex === references.length - 1) ? 0 : referenceIndex + 1;
        }, 8000);
    });

    // Transitions
    const t1 = { y: 100, duration: 950, delay: 0 };
    const t2 = { y: -100, duration: 950, delay: 0 };
    const t3 = { y: 80, duration: 1200, delay: 50 };
    const t4 = { y: -80, duration: 1200, delay: 50 };
</script>

<style lang="scss">
    @import "references";
</style>

<section>
    <div class="wrapper">
        <div class="references">
            {#each references as reference (reference.id)}
                {#if referenceIndex === reference.id}
                    <div class="reference">
                        <div class="avatar" in:fly="{{ ...t1, key: reference.id}}" out:fly="{{ ...t2, key: reference.id}}">
                            <img src="{reference.image}" alt="avatar"/>
                        </div>

                        <div class="company" in:fly="{{ ...t3, key: reference.id}}" out:fly="{{ ...t4, key: reference.id}}">
                            <img src="{reference.logo}" alt="avatar" class:black={reference.company === "Mosaic"}/>
                        </div>

                        <div transition:fade={{ key: reference.id }} class="text">
                            <span>{reference.text}</span>
                        </div>
                    </div>
                {/if}
            {/each}
        </div>
    </div>
</section>