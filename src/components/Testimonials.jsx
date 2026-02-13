import React from 'react'

const Testimonials = () => {
    return (
        <>
            {/* TESTIMONIALS / SERVICES Section Start */}
            <section id="testimonials" className="py-20 bg-black/30 dark:bg-white/5">
                <div className="max-w-6xl mx-auto px-5">
                    {/* SECTION TITLE */}
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white dark:text-neutral-900">
                        Client <span className="text-teal-400">Testimonials</span>
                    </h2>
                    <p className="mb-14 text-sm md:text-base text-white/65 dark:text-neutral-600 max-w-2xl">
                        Feedback from clients and collaborators highlighting my expertise in
                        <strong>front-end development</strong>, <strong>responsive UI</strong>,
                        and <strong>clean, accessible code</strong>.
                    </p>
                    <div className="relative overflow-hidden">
                        {/* CAROUSEL TRACK */}
                        <div id="carousel-track" className="flex gap-4 md:gap-6 items-stretch min-h-64 md:min-h-72 px-[7.5%] md:px-0">
                            {/* TESTIMONIAL 1 */}
                            <div className="carousel-item shrink-0 w-full md:w-1/2 lg:w-1/3 px-2 md:px-4 flex">
                                <div className="p-7 rounded-3xl bg-black/40 dark:bg-white/10 fancy-card glow-teal flex flex-col w-full shadow-lg">
                                    <p className="text-white/75 dark:text-black/75 mb-6 grow text-sm leading-relaxed">
                                        “Excellent work! The web design project exceeded expectations.
                                        Pooja delivered a clean, responsive website with intuitive navigation.”
                                    </p>
                                    <div className="mt-auto">
                                        <div className="font-semibold text-teal-400 tracking-wide">
                                            — Sunil Sharma
                                        </div>
                                        <div className="text-xs text-white/55 dark:text-black/55">
                                            Business Website
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* TESTIMONIAL 2 */}
                            <div className="carousel-item shrink-0 w-full md:w-1/2 lg:w-1/3 px-2 md:px-4 flex">
                                <div className="p-7 rounded-3xl bg-black/40 dark:bg-white/10 fancy-card glow-teal flex flex-col w-full shadow-lg">
                                    <p className="text-white/75 dark:text-black/75 mb-6 grow text-sm leading-relaxed">
                                        "Pooja created an engaging UI with smooth animations. Our project now feels
                                        interactive and professional."
                                    </p>
                                    <div className="mt-auto">
                                        <div className="font-semibold text-teal-400 tracking-wide">— Client A</div>
                                        <div className="text-xs text-white/55 dark:text-black/55">UI/UX Design</div>
                                    </div>
                                </div>
                            </div>
                            {/* TESTIMONIAL 3 */}
                            <div className="carousel-item shrink-0 w-full md:w-1/2 lg:w-1/3 px-2 md:px-4 flex">
                                <div className="p-7 rounded-3xl bg-black/40 dark:bg-white/10 fancy-card glow-teal flex flex-col w-full shadow-lg">
                                    <p className="text-white/75 dark:text-black/75 mb-6 grow text-sm leading-relaxed">
                                        "Front-end development done professionally. Clean code, fast performance, and
                                        interactive features."
                                    </p>
                                    <div className="mt-auto">
                                        <div className="font-semibold text-teal-400 tracking-wide">— Client B</div>
                                        <div className="text-xs text-white/55 dark:text-black/55">Dashboard Application</div>
                                    </div>
                                </div>
                            </div>
                            {/* TESTIMONIAL 4 */}
                            <div className="carousel-item shrink-0 w-full md:w-1/2 lg:w-1/3 px-2 md:px-4 flex">
                                <div className="p-7 rounded-3xl bg-black/40 dark:bg-white/10 fancy-card glow-teal flex flex-col w-full shadow-lg">
                                    <p className="text-white/75 dark:text-black/75 mb-6 grow text-sm leading-relaxed">
                                        "Professional, detail-oriented, and creative front-end development services."
                                    </p>
                                    <div className="mt-auto">
                                        <div className="font-semibold text-teal-400 tracking-wide">— Client C</div>
                                        <div className="text-xs text-white/55 dark:text-black/55">UI Animation Project</div>
                                    </div>
                                </div>
                            </div>
                            {/* TESTIMONIAL 5 */}
                            <div className="carousel-item shrink-0 w-full md:w-1/2 lg:w-1/3 px-2 md:px-4 flex">
                                <div className="p-7 rounded-3xl bg-black/40 dark:bg-white/10 fancy-card glow-teal flex flex-col w-full shadow-lg">
                                    <p className="text-white/75 dark:text-black/75 mb-6 grow text-sm leading-relaxed">
                                        "Creative animations and clean front-end code. Highly recommended for web projects
                                        and portfolios."
                                    </p>
                                    <div className="mt-auto">
                                        <div className="font-semibold text-teal-400 tracking-wide">— Client D</div>
                                        <div className="text-xs text-white/55 dark:text-black/55">Portfolio Website</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* CAROUSEL NAVIGATION BUTTONS */}
                        <button id="prev" className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 bg-teal-400 hover:bg-teal-300 text-black
              rounded-full w-12 h-12 items-center justify-center shadow-lg transition">
                            ‹
                        </button>
                        <button id="next" className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-0 bg-teal-400 hover:bg-teal-300 text-black
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
