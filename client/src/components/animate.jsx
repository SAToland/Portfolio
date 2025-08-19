import {useRef, useEffect, useState} from "react";

function AnimatedSection({ children, className}) {
    const ref = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            {threshold: 0.2}
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref}
        className={`${className} toAnimate${visible ? " animateIn" : ""}`}>
            {children}
        </section>
    );
}

export default AnimatedSection;