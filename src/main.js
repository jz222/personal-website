import App from "./App.svelte";

// Polyfills
import "intersection-observer";
import "smoothscroll-polyfill";

const app = new App({
    target: document.body
});

export default app;