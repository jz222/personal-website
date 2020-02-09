<script>
    import { fly } from "svelte/transition";

    // Transitions
    const t1 = { y: 100, duration: 1500, delay: 1000 };
</script>

<style lang="scss">
    @import "styling/stylesheet";

    .card {
        width: 100%;
        height: 140px;
        margin-bottom: 15px;
        padding: 15px;
        border-radius: 10px;
        background: url(/assets/images/mesh.jpg);
        background-size: cover;
        box-shadow: $shadow-card;
        font-size: 1.2rem;
        color: $dark-grey;

        div:nth-child(2) {
            margin-top: 55px;
            font-family: 'Share Tech Mono', monospace;
            letter-spacing: 1px;
            font-size: 1.7rem;
            font-weight: bold;
        }

        div:last-child {
            font-size: 1.2rem;
        }
    }
</style>

<div class="card" transition:fly="{t1}">
    <div><b>mosaic</b> | e-payments</div>
    <div>5003 2019 2091 2901</div>
    <div><span>Timo Zimmermann</span></div>
</div>