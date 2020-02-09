<script>
    import MosaicLogo from "../logo/mosaicLogo.svelte"
</script>

<style lang="scss">
    @import "styling/stylesheet";

    .nav {
        width: 100%;
        height: 15%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        background-color: $white;
        backdrop-filter: saturate(180%) blur(20px);
        -webkit-backdrop-filter: saturate(180%) blur(20px);

        > div {
            height: 50%;
        }
    }

    .burger {
        width: 25px;
        height: 10px;

        div:first-child {
            width: 25px;
            height: 2px;
            margin-bottom: 7px;
            background-color: $black;
        }

        div:last-child {
            width: 20px;
            height: 2px;
            margin-left: 5px;
            background-color: $black;
        }
    }
</style>

<div class="nav">
    <div>
        <MosaicLogo/>
    </div>

    <div class="burger">
        <div></div>
        <div></div>
    </div>
</div>