<script>
    import { fly } from "svelte/transition";
    import { flip } from "svelte/animate";

    import getRandomTransaction from "./randomTransaction";

    let intervalID;
    let arr = [];

    $: if (!intervalID) {
        intervalID = setInterval(() => {
            const randomTx = getRandomTransaction();
            arr = [randomTx, ...arr.slice(0, 7)];
        }, 3800);
    }

    // Transitions
    const t1 = { x: 100, duration: 700 };
</script>

<style lang="scss">
    @import "styling/stylesheet";

    .transaction {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        background-color: $white;
        margin: 5px auto;
        padding: 0 5px;
        border-bottom: 1px solid $grey;

        > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        > div:first-child {
            font-weight: bold;

            div:last-child {
                font-weight: 400;
                font-size: 1rem;
            }
        }

        > div:last-child {
            font-size: 1.4rem;
        }
    }

    .red {
        color: $red;
    }
</style>

{#each arr as todo (todo.id)}
    <div animate:flip transition:fly="{t1}" class="transaction">
        <div>
            <div>{todo.name}</div>
            <div>{todo.time}</div>
        </div>

        <div class:red={todo.sign === '-'}><span>{todo.sign}{todo.amount} €</span></div>
    </div>
{/each}