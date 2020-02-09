<script>
    import Bar from "./bar.svelte";

    let heights = [80, 70, 65, 55, 75, 90, 70, 80];

    const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

    setInterval(() => {
        heights = heights.map(() => randomNumber(10, 90));
    }, 4000)
</script>

<style lang="scss">
    @import "styling/stylesheet";

    .chart {
        width: 100%;
        height: 15rem;
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
    }
</style>

<div class="chart">
    <Bar bottomHeight="{heights[0]}" caption="Week 1"/>
    <Bar bottomHeight={heights[1]} caption="Week 2"/>
    <Bar bottomHeight={heights[2]} caption="Week 3"/>
    <Bar bottomHeight={heights[3]} caption="Week 4"/>
    <Bar bottomHeight={heights[4]} caption="Week 5"/>
    <Bar bottomHeight={heights[5]} caption="Week 6"/>
    <Bar bottomHeight={heights[6]} caption="Week 7"/>
    <Bar bottomHeight={heights[7]} caption="Week 8"/>
</div>