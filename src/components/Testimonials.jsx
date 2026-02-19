import React from 'react'
import Carousel from './Carousel'

const Testimonials = () => {
    return (
        <>
            {/* TESTIMONIALS / SERVICES Section Start */}
            <section
                id="testimonials"
                className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-500" data-reveal
            >
                <div className="max-w-6xl mx-auto px-5">
                    {/* SECTION TITLE */}
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-neutral-900 dark:text-white">
                        Client <span className="text-teal-400">Testimonials</span>
                    </h2>
                    <p className="mb-14 text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
                        Feedback from clients and collaborators highlighting my expertise in
                        <strong>front-end development</strong>, <strong>responsive UI</strong>,
                        and <strong>clean, accessible code</strong>.
                    </p>
                    <div className="relative overflow-hidden">
                        {/* CAROUSEL TRACK */}
                        <Carousel>
                            {/* TESTIMONIAL 1 */}
                            <div className="px-2 md:px-4 flex h-full">
                                <div className="p-7 rounded-3xl bg-neutral-100 dark:bg-neutral-900
border border-neutral-200 dark:border-neutral-800
hover:-translate-y-1 hover:shadow-xl
transition-all duration-300 flex flex-col w-full h-full shadow-lg">
                                    <p className="text-neutral-600 dark:text-neutral-400 mb-6 flex-grow text-sm leading-relaxed">
                                        “Excellent work! The web design project exceeded expectations.
                                        Pooja delivered a clean, responsive website with intuitive navigation.”
                                    </p>
                                    <div className="mt-auto">
                                        <div className="font-semibold text-teal-400 tracking-wide">
                                            — Sunil Sharma
                                        </div>
                                        <div className="text-xs text-neutral-500 dark:text-neutral-500">
                                            Business Website
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* TESTIMONIAL 2 */}
                            <div className="px-2 md:px-4 flex h-full">
                                <div className="p-7 rounded-3xl bg-neutral-100 dark:bg-neutral-900
border border-neutral-200 dark:border-neutral-800
hover:-translate-y-1 hover:shadow-xl
transition-all duration-300 flex flex-col w-full h-full shadow-lg">
                                    <p className="text-neutral-600 dark:text-neutral-400 mb-6 flex-grow text-sm leading-relaxed">
                                        "Pooja created an engaging UI with smooth animations. Our project now feels
                                        interactive and professional."
                                    </p>
                                    <div className="mt-auto">
                                        <div className="font-semibold text-teal-400 tracking-wide">— Client A</div>
                                        <div className="text-xs text-neutral-500 dark:text-neutral-500">UI/UX Design</div>
                                    </div>
                                </div>
                            </div>
                            {/* TESTIMONIAL 3 */}
                            <div className="px-2 md:px-4 flex h-full">
                                <div className="p-7 rounded-3xl bg-neutral-100 dark:bg-neutral-900
border border-neutral-200 dark:border-neutral-800
hover:-translate-y-1 hover:shadow-xl
transition-all duration-300 flex flex-col w-full h-full shadow-lg">
                                    <p className="text-neutral-600 dark:text-neutral-400 mb-6 flex-grow text-sm leading-relaxed">
                                        "Front-end development done professionally. Clean code, fast performance, and
                                        interactive features."
                                    </p>
                                    <div className="mt-auto">
                                        <div className="font-semibold text-teal-400 tracking-wide">— Client B</div>
                                        <div className="text-xs text-neutral-500 dark:text-neutral-500">Dashboard Application</div>
                                    </div>
                                </div>
                            </div>
                            {/* TESTIMONIAL 4 */}
                            <div className="px-2 md:px-4 flex h-full">
                                <div className="p-7 rounded-3xl bg-neutral-100 dark:bg-neutral-900
border border-neutral-200 dark:border-neutral-800
hover:-translate-y-1 hover:shadow-xl
transition-all duration-300 flex flex-col w-full h-full shadow-lg">
                                    <p className="text-neutral-600 dark:text-neutral-400 mb-6 flex-grow text-sm leading-relaxed">
                                        "Professional, detail-oriented, and creative front-end development services."
                                    </p>
                                    <div className="mt-auto">
                                        <div className="font-semibold text-teal-400 tracking-wide">— Client C</div>
                                        <div className="text-xs text-neutral-500 dark:text-neutral-500">UI Animation Project</div>
                                    </div>
                                </div>
                            </div>
                            {/* TESTIMONIAL 5 */}
                            <div className="px-2 md:px-4 flex h-full">
                                <div className="p-7 rounded-3xl bg-neutral-100 dark:bg-neutral-900
border border-neutral-200 dark:border-neutral-800
hover:-translate-y-1 hover:shadow-xl
transition-all duration-300 flex flex-col w-full h-full shadow-lg">
                                    <p className="text-neutral-600 dark:text-neutral-400 mb-6 flex-grow text-sm leading-relaxed">
                                        "Creative animations and clean front-end code. Highly recommended for web projects
                                        and portfolios."
                                    </p>
                                    <div className="mt-auto">
                                        <div className="font-semibold text-teal-400 tracking-wide">— Client D</div>
                                        <div className="text-xs text-neutral-500 dark:text-neutral-500">Portfolio Website</div>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                        {/* CAROUSEL NAVIGATION BUTTONS */}
                        <button id="prev" className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 bg-teal-500 hover:bg-teal-600 text-white
              rounded-full w-12 h-12 items-center justify-center shadow-lg transition">
                            ‹
                        </button>
                        <button id="next" className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-0 bg-teal-500 hover:bg-teal-600 text-white
              rounded-full w-12 h-12 items-center justify-center shadow-lg transition">
                            ›
                        </button>
                    </div>
                </div>
            </section>
            {/* TESTIMONIALS / SERVICES Section End */}
        </>
    )
}

export default Testimonials
