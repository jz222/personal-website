import { transactions } from "content";

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const randomTransaction = () => {
    let cache = [];

    return () => {
        // Transaction
        let randomTx;

        // Ensure distribution
        while (!randomTx || cache.includes(randomTx.name)) {
            randomTx = transactions[Math.floor(Math.random() * transactions.length)];
        }

        // Amount
        const amount = randomNumber(randomTx.min, randomTx.max) + "." + randomNumber(10, 99);

        // Time
        const opts = { year: "2-digit", month: "2-digit", day: "2-digit" };
        const time = new Date().toLocaleDateString("de-DE", opts);

        // ID
        const id = new Date().getTime();

        // Add to cache
        cache = [randomTx.name, ...cache.splice(0, 4)];

        return { id, time, amount, ...randomTx };
    };
};

export default randomTransaction();