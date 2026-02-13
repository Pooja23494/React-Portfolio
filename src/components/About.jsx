import React from 'react'

const About = () => {
    return (
        <>
            {/* ABOUT Section Start */}
            <section id="about" className="py-20 bg-black/40 dark:bg-white/5">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        {/* ABOUT ME TEXT */}
                        <div className="reveal" data-reveal>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white dark:text-neutral-900">
                                About <span className="text-teal-400">Me</span>
                            </h2>
                            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65 dark:text-black/65">
                                I’m a front-end developer currently pursuing a <strong>Master in Front-End
                                    Development</strong> at
                                <strong>Red &amp; White Skill Education</strong>. I focus on building responsive, accessible,
                                and
                                performance-optimized web interfaces that deliver clean UI and consistent user experiences
                                across devices.
                                <br /><br />
                                I’m actively seeking a <strong>Junior Front-End / UI Developer</strong> role where I can
                                apply my
                                skills, contribute to real-world projects, and continue growing as a professional developer.
                            </p>
                            <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                                <li className="skill-pill">HTML5 &amp; CSS3</li>
                                <li className="skill-pill">Bootstrap</li>
                                <li className="skill-pill">JavaScript</li>
                                <li className="skill-pill">Tailwind CSS</li>
                                <li className="skill-pill">Responsive Design</li>
                                <li className="skill-pill">Accessibility (WCAG)</li>
                            </ul>
                        </div>
                        {/* WHAT I BRING */}
                        <div className="reveal" data-reveal>
                            <div className="p-7 rounded-2xl fancy-card bg-linear-to-br from-white/5 to-transparent border border-white/20 shadow-lg">
                                <h3 className="text-xl font-semibold text-white dark:text-neutral-900">
                                    What I Bring to the Table
                                </h3>
                                <p className="mt-4 text-sm leading-relaxed text-white/65 dark:text-black/65">
                                    From micro-interactions and animated states to optimized markup and
                                    accessible components, I build
                                    <strong className="text-white dark:text-black">
                                        production-ready, high-performance
                                    </strong>
                                    front-end solutions with a strong focus on
                                    <strong>clean UI, usability, and smooth user experiences</strong>.
                                </p>
                                <div className="mt-6 flex gap-4 flex-wrap">
                                    {/* Secondary */}
                                    <a href="#projects" role="button" className="px-5 py-2.5 rounded-lg border border-white/30 text-sm text-white/80 hover:bg-white/10 transition" aria-label="see projects">
                                        See Projects
                                    </a>
                                    {/* Primary */}
                                    <a href="#contact" role="button" className="px-6 py-2.5 rounded-lg bg-teal-500 text-black font-semibold hover:bg-teal-400 transition" aria-label="let's talk">
                                        Let’s Talk
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ABOUT Section End */}
        </>
    )
}

export default About
