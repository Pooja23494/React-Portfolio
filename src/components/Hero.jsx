import React from 'react'

const Hero = () => {
    return (
        <>
            {/* HERO Section Start */}
            <section id="home" className="pt-20 min-h-screen bg-black/40 dark:bg-white/5 flex items-center">
                <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
                    {/* INTRO TEXT */}
                    <div className="space-y-6">
                        <p className="text-teal-400 uppercase tracking-widest text-xs font-semibold">Hello 👋, I’m</p>
                        <h1 className="text-5xl md:text-7xl leading-[1.05] font-extrabold text-white dark:text-neutral-900">
                            Pooja <span className="text-teal-400">Patel</span>
                        </h1>
                        {/* TYPEWRITER EFFECT */}
                        <p className="typewriter text-lg md:text-2xl font-semibold text-white/80 dark:text-black/70">
                            <span id="typed" />
                            <span className="cursor" aria-hidden="true" />
                        </p>
                        {/* SHORT TAGLINE */}
                        <p className="text-base md:text-lg leading-relaxed text-white/60 dark:text-black/60 max-w-xl">
                            Front-End Developer specializing in responsive, accessible web interfaces. I build
                            performance-optimized UIs using JavaScript, Tailwind CSS, and Bootstrap, focusing on clean
                            layouts, usability, and cross-device consistency.
                        </p>
                        {/* CTA BUTTONS */}
                        <div className="flex gap-4 items-center flex-wrap pt-2">
                            {/* Primary CTA */}
                            <a href="#projects" role="button" className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-linear-to-r from-teal-400 to-teal-600
                  text-black font-bold shadow-xl hover:scale-[1.03] transition-transform" aria-label="view work">
                                View Work
                            </a>
                            {/* Secondary CTA */}
                            <a href="#contact" role="button" className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-white/30 text-sm
                  text-white/80 hover:bg-white/10 transition" aria-label="contact me">
                                Contact Me
                            </a>
                        </div>
                    </div>
                    {/* PROFILE CARD */}
                    <div className="relative fancy-card p-6 rounded-2xl bg-linear-to-b from-white/5 to-transparent">
                        <div className="relative z-10 grid gap-4">
                            <div className="w-full h-64 rounded-xl flex items-center justify-center">
                                <img src="/Pooja.jpeg" alt="Pooja Patel – Front-End Developer" className="w-44 h-44 object-cover rounded-full
                      border-4 border-teal-400 shadow-lg" />
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="p-4 rounded-xl border border-white/20">
                                    <div className="text-xs text-white/50">Location</div>
                                    <div className="font-semibold">Navsari, India</div>
                                </div>
                                <div className="p-4 rounded-xl border border-white/20">
                                    <div className="text-xs text-white/50">Experience</div>
                                    <div className="font-semibold">Fresher</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* HERO Section End */}
        </>
    )
}

export default Hero
