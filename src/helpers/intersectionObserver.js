const createIntersectionObserver = (cb, rootMargin = "0px") => {
    const observer = new IntersectionObserver(onIntersect, { rootMargin });

    function onIntersect(entries) {
        if (entries[0].isIntersecting) {
            cb();
            observer.unobserve(entries[0].target);
        }
    }

    function intersectionListener(node) {
        observer && observer.observe(node);
        return {
            destroy() {
                observer && observer.unobserve(node)
            }
        }
    }

    return intersectionListener;
};

export default createIntersectionObserver;