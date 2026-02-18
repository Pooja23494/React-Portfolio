import React, { useEffect, useRef, useState } from "react";

const Carousel = ({ children }) => {
    const items = React.Children.toArray(children);
    const length = items.length;

    const visibleSlides = 3; // desktop view
    const [index, setIndex] = useState(visibleSlides);
    const [transition, setTransition] = useState(true);

    const trackRef = useRef(null);

    useEffect(() => {
        const auto = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, 4000);

        return () => clearInterval(auto);
    }, []);

    // Clone slides
    const clones = [
        ...items.slice(length - visibleSlides),
        ...items,
        ...items.slice(0, visibleSlides),
    ];

    const next = () => setIndex((prev) => prev + 1);
    const prev = () => setIndex((prev) => prev - 1);

    // Buttons
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

        const track = trackRef.current;
        track.addEventListener("transitionend", handleTransitionEnd);

        return () =>
            track.removeEventListener("transitionend", handleTransitionEnd);
    }, [index, length]);

    useEffect(() => {
        if (!transition) {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => setTransition(true));
            });
        }
    }, [transition]);

    return (
        <div className="overflow-hidden w-full">
            <div
                ref={trackRef}
                className="flex gap-4 md:gap-6"
                style={{
                    transform: `translateX(-${index * (100 / visibleSlides)}%)`,
                    transition: transition ? "transform 0.5s ease" : "none",
                }}
            >
                {clones}
            </div>
        </div>
    );
};

export default Carousel;
