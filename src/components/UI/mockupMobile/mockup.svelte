<script>
    import { fly } from "svelte/transition";

    import Transactions from "./transactions/transactions.svelte";
    import Navbar from "./navbar/navbar.svelte";
    import Card from "./card/card.svelte";

    import { labels } from "content"

    // Transitions
    const t1 = { y: 100, duration: 1000, delay: 900 };
</script>

<style lang="scss">
    @import "styling/stylesheet";

    h5 {
        margin: 0 0 15px 0;
        font-size: 2rem;
        font-weight: bold;
        color: $black;
    }

    .mockup {
        position: relative;
        width: 280px;
        height: 550px;
        border-radius: 35px;
        background-color: $white;
        overflow: hidden;
        -webkit-mask-image: -webkit-radial-gradient(white, black);

        &:after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 70px;
            background: linear-gradient(0deg, rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 0) 100%);
        }
    }

    .wrapper {
        padding: 0 15px 15px 15px;
    }

    @media screen and (min-width: 768px) {
        .mockup {
            transform: scale(1.1);
        }
    }
</style>

<div class="mockup">
    <Navbar/>

    <div class="wrapper">
        <h5 transition:fly="{t1}">{labels.mosaic.mockup}</h5>
        <Card/>
        <Transactions/>
    </div>
</div>