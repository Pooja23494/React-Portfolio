import React from 'react'
import TypingEffect from './TypingEffect'

const Hero = () => {
    return (
        <section
            id="home"
            className="pt-20 min-h-screen flex items-center
            bg-white dark:bg-neutral-950 transition-colors duration-500" data-reveal
        >
            <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">

                {/* INTRO TEXT */}
                <div className="space-y-6">
                    <p className="text-teal-500 uppercase tracking-widest text-xs font-semibold">
                        Hello 👋, I’m
                    </p>

                    <h1 className="text-5xl md:text-7xl leading-[1.05] font-extrabold
                        text-neutral-900 dark:text-white">
                        Pooja <span className="text-teal-500">Patel</span>
                    </h1>

                    {/* TYPEWRITER */}
                    <p className="text-lg md:text-2xl font-semibold
                        text-neutral-700 dark:text-neutral-300">
                        <TypingEffect />
                    </p>

                    {/* TAGLINE */}
                    <p className="text-base md:text-lg leading-relaxed
                        text-neutral-600 dark:text-neutral-400 max-w-xl">
                        Front-End Developer specializing in responsive, accessible web interfaces.
                        I build performance-optimized UIs using JavaScript, Tailwind CSS, and Bootstrap,
                        focusing on clean layouts, usability, and cross-device consistency.
                    </p>

                    {/* BUTTONS */}
                    <div className="flex gap-4 items-center flex-wrap pt-2">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl
                            bg-linear-to-r from-teal-400 to-teal-600
                            text-black font-bold shadow-lg hover:scale-105
                            transition-transform duration-300"
                        >
                            View Work
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-3 px-5 py-3 rounded-xl
                            border border-neutral-300 dark:border-neutral-700
                            text-neutral-800 dark:text-white
                            hover:bg-neutral-100 dark:hover:bg-neutral-800
                            transition"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* PROFILE CARD */}
                <div className="relative p-6 rounded-2xl
                    bg-neutral-100 dark:bg-neutral-900
                    transition-colors duration-500 shadow-lg">

                    <div className="grid gap-4">
                        <div className="w-full h-64 rounded-xl flex items-center justify-center">
                            <img
                                src="/Pooja.jpeg"
                                alt="Pooja Patel – Front-End Developer"
                                className="w-44 h-44 object-cover rounded-full
                                border-4 border-teal-500 shadow-lg"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="p-4 rounded-xl
                                border border-neutral-300 dark:border-neutral-700">
                                <div className="text-xs text-neutral-500">
                                    Location
                                </div>
                                <div className="font-semibold text-neutral-900 dark:text-white">
                                    Navsari, India
                                </div>
                            </div>

                            <div className="p-4 rounded-xl
                                border border-neutral-300 dark:border-neutral-700">
                                <div className="text-xs text-neutral-500">
                                    Experience
                                </div>
                                <div className="font-semibold text-neutral-900 dark:text-white">
                                    Fresher
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero
