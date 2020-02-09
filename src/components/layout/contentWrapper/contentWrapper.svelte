<script>
    export let disableFlex = false;
    export let disableTopMargin = false;
    export let smallerBottomMargin = false;

    const display = `display: ${disableFlex ? "block" : "flex"};`;
    const topMargin = disableTopMargin ? "margin-top: 0;" : "margin-top: 11rem;";
    const bottomMargin = smallerBottomMargin ? "margin-bottom: 0;" : "margin-bottom: 11rem;";

    const style = display + topMargin + bottomMargin;
</script>

<style lang="scss">
    .wrapper {
        position: relative;
        width: 100%;
        max-width: 1250px;
        min-height: 13rem;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        @media screen and (min-width: 768px) {
            flex-direction: row;
            align-items: normal;
        }
    }
</style>

<div class="wrapper" style="{style}">
    <slot/>
</div>