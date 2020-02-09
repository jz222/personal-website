export default (anchor) => {
    const top = anchor.getBoundingClientRect().top;
    window.scroll({ top, behavior: "smooth" });
};