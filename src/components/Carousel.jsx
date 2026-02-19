import React, { useEffect, useRef, useState } from "react";

const Carousel = ({ children }) => {
    const items = React.Children.toArray(children);
    const length = items.length;

    const [visibleSlides, setVisibleSlides] = useState(1);
    const [index, setIndex] = useState(1);
    const [transition, setTransition] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    const trackRef = useRef(null);

    // Responsive slide detection
    useEffect(() => {
        const updateSlides = () => {
            if (window.innerWidth < 768) {
                setVisibleSlides(1);
            } else if (window.innerWidth < 1024) {
                setVisibleSlides(2);
            } else {
                setVisibleSlides(3);
            }
        };

        updateSlides();
        window.addEventListener("resize", updateSlides);
        return () => window.removeEventListener("resize", updateSlides);
    }, []);

    // Reset index when visibleSlides changes
    useEffect(() => {
        setIndex(visibleSlides);
    }, [visibleSlides]);

    // Auto slide (pause on hover)
    useEffect(() => {
        if (isHovered) return;

        const auto = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, 4000);

        return () => clearInterval(auto);
    }, [isHovered]);

    // Clone slides dynamically
    const clones = [
        ...items.slice(length - visibleSlides),
        ...items,
        ...items.slice(0, visibleSlides),
    ];

    const next = () => setIndex((prev) => prev + 1);
    const prev = () => setIndex((prev) => prev - 1);

    // Button support
    useEffect(() => {
        const nextBtn = document.getElementById("next");
        const prevBtn = document.getElementById("prev");

        nextBtn?.addEventListener("click", next);
        prevBtn?.addEventListener("click", prev);

        return () => {
            nextBtn?.removeEventListener("click", next);
            prevBtn?.removeEventListener("click", prev);
        };
    }, []);

    // Infinite reset
    useEffect(() => {
        const track = trackRef.current;

        const handleTransitionEnd = () => {
            if (index >= length + visibleSlides) {
                setTransition(false);
                setIndex(visibleSlides);
            }

            if (index < visibleSlides) {
                setTransition(false);
                setIndex(length + visibleSlides - 1);
            }
        };

        track.addEventListener("transitionend", handleTransitionEnd);
        return () =>
            track.removeEventListener("transitionend", handleTransitionEnd);
    }, [index, length, visibleSlides]);

    useEffect(() => {
        if (!transition) {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => setTransition(true));
            });
        }
    }, [transition]);

    return (
        <div
            className="overflow-hidden w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                ref={trackRef}
                className="flex items-stretch"
                style={{
                    transform: `translateX(-${index * (100 / visibleSlides)}%)`,
                    transition: transition ? "transform 0.5s ease" : "none",
                }}
            >
                {clones.map((child, i) => (
                    <div
                        key={i}
                        className="flex items-stretch"
                        style={{
                            flex: `0 0 ${100 / visibleSlides}%`,
                        }}
                    >
                        <div className="w-full h-full flex">
                            {child}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
