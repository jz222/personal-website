<script>
    import Integrations from "./integrations/integrations.svelte";
    import Statistic from "./statistic/statistic.svelte";

    import { labels } from "content";
</script>

<style lang="scss">
    @import "mockupDashboard";
</style>

<div class="mockup">
    <div class="browser">
        <div class="controls">
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div class="bar"></div>
    </div>

    <div class="nav">
        <b>{labels.jacando.jacandoX}</b>

        <div>
            <div></div>
            <div></div>
        </div>
    </div>

    <div class="content">
        <span class="title">{labels.jacando.chart}</span>

        <Statistic/>

        <span class="title">{labels.jacando.latest}</span>

        <Integrations/>
    </div>
</div>