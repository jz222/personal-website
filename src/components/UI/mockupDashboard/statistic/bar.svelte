<script>
    export let bottomHeight;
    export let caption = "week";
</script>

<style lang="scss">
    @import "styling/stylesheet";

    .wrapper {
        width: 4.5rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        &:last-of-type {
            display: none;
        }
    }

    .bar {
        height: calc(100% - 2.5rem);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        div {
            width: 1.5rem;
            border-radius: 25px;
            transition: height 1.5s;
            will-change: height;
        }

        div:nth-child(1) {
            flex-grow: 1;
            background-color: $grey;
        }

        div:nth-child(2) {
            margin-top: 0.5rem;
            background-color: $dark-grey;
        }
    }

    .caption {
        width: 100%;
        height: 1.5rem;
        font-size: 1.1rem;
        font-weight: bold;
        text-align: center;
    }

    @media screen and (min-width: 768px) {
        .wrapper:last-of-type {
            display: flex;
        }
    }
</style>

<div class="wrapper">

    <div class="bar">
        <div></div>
        <div style="height: {bottomHeight}%;"></div>
    </div>

    <div class="caption">{caption}</div>
</div>
