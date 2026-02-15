import React from 'react'

const About = () => {
    return (
        <section
            id="about"
            className="py-20 bg-white dark:bg-neutral-950 
            transition-colors duration-500"
        >
            <div className="max-w-6xl mx-auto px-5">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* ABOUT TEXT */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold 
                        text-neutral-900 dark:text-white">
                            About <span className="text-teal-500">Me</span>
                        </h2>

                        <p className="mt-6 max-w-xl text-base leading-relaxed 
                        text-neutral-600 dark:text-neutral-400">
                            I’m a front-end developer currently pursuing a{" "}
                            <strong>Master in Front-End Development</strong> at{" "}
                            <strong>Red &amp; White Skill Education</strong>. I focus on
                            building responsive, accessible, and performance-optimized
                            web interfaces that deliver clean UI and consistent user
                            experiences across devices.
                            <br /><br />
                            I’m actively seeking a{" "}
                            <strong>Junior Front-End / UI Developer</strong> role where I
                            can apply my skills, contribute to real-world projects, and
                            continue growing as a professional developer.
                        </p>

                        {/* SKILLS */}
                        <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                            {[
                                "HTML5 & CSS3",
                                "Bootstrap",
                                "JavaScript",
                                "Tailwind CSS",
                                "Responsive Design",
                                "Accessibility (WCAG)"
                            ].map((skill) => (
                                <li
                                    key={skill}
                                    className="px-4 py-2 rounded-lg 
                                    bg-neutral-100 dark:bg-neutral-800
                                    text-neutral-800 dark:text-neutral-200
                                    border border-neutral-200 dark:border-neutral-700
                                    text-center transition"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* WHAT I BRING CARD */}
                    <div>
                        <div className="p-8 rounded-2xl 
                        bg-neutral-100 dark:bg-neutral-900
                        border border-neutral-200 dark:border-neutral-800
                        shadow-lg transition-colors duration-500">

                            <h3 className="text-xl font-semibold 
                            text-neutral-900 dark:text-white">
                                What I Bring to the Table
                            </h3>

                            <p className="mt-4 text-sm leading-relaxed 
                            text-neutral-600 dark:text-neutral-400">
                                From micro-interactions and animated states to
                                optimized markup and accessible components, I build{" "}
                                <strong className="text-neutral-900 dark:text-white">
                                    production-ready, high-performance
                                </strong>{" "}
                                front-end solutions with a strong focus on clean UI,
                                usability, and smooth user experiences.
                            </p>

                            <div className="mt-6 flex gap-4 flex-wrap">
                                <a
                                    href="#projects"
                                    className="px-5 py-2.5 rounded-lg 
                                    border border-neutral-300 dark:border-neutral-700
                                    text-neutral-800 dark:text-neutral-200
                                    hover:bg-neutral-200 dark:hover:bg-neutral-800
                                    transition"
                                >
                                    See Projects
                                </a>

                                <a
                                    href="#contact"
                                    className="px-6 py-2.5 rounded-lg 
                                    bg-teal-500 text-black font-semibold
                                    hover:bg-teal-400 transition"
                                >
                                    Let’s Talk
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About
