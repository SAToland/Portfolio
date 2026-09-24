import {useRef, useEffect, useState} from "react";

function AnimatedSection({ children, className, threshold = 0.2 }) {
    const ref = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        // A fixed threshold misfires on sections taller than the viewport: 20%
        // of a very tall block can exceed a full screen, so it reveals late or
        // not at all. Fall back to "any part visible" in that case.
        const fits = node.offsetHeight * threshold <= window.innerHeight;

        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            {threshold: fits ? threshold : 0}
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold]);

    return (
        <section ref={ref}
        className={`${className} toAnimate${visible ? " animateIn" : ""}`}>
            {children}
        </section>
    );
}

export default AnimatedSection;
