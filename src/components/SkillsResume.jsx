import React, { useEffect, useState } from 'react'

const SkillsResume = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAnimate(true);
        }, 300);
    }, []);
    const skills = [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
    ];
    return (
        <>
            {/* SKILLS & RESUME Section Start */}
            <section id="skills-resume" className="py-20 px-6 md:px-20
   bg-black/40 dark:bg-white/5">
                <div className="max-w-6xl mx-auto px-5">
                    {/* SECTION TITLE */}
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-white dark:text-neutral-900">
                        Skills
                        <span className="text-teal-400">&amp;</span>
                        Resume
                    </h2>
                    <div className="grid md:grid-cols-2 gap-14 items-start">
                        {/* LEFT : SKILLS */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white dark:text-neutral-900">
                                Technical Skills
                            </h3>
                            <p className="mb-10 max-w-md text-sm leading-relaxed text-white/65 dark:text-neutral-600">
                                Technologies and tools I use to build
                                <strong>responsive</strong>, <strong>accessible</strong>, and
                                <strong>performance-focused</strong> web interfaces.
                            </p>
                            <div className="space-y-6">
                                {/* SKILL ITEM */}
                                {skills.map((skill, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between mb-2 text-black dark:text-white">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>

                                        <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
                                            <div
                                                className="bg-teal-500 h-3 rounded-full transition-all duration-1000"
                                                style={{
                                                    width: animate ? `${skill.level}%` : "0%",
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* RIGHT : RESUME */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white dark:text-neutral-900">
                                Resume
                            </h3>
                            <p className="mb-8 max-w-md text-sm leading-relaxed text-white/65 dark:text-neutral-600">
                                Download my resume to learn more about my education,
                                technical skills, and front-end projects focused on
                                clean UI and responsive design.
                            </p>
                            <div className="p-7 rounded-2xl fancy-card bg-linear-to-br from-white/5 to-transparent border border-white/20 shadow-lg">
                                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                                    {/* TEXT */}
                                    <div className="text-center sm:text-left">
                                        <p className="text-lg font-semibold text-white dark:text-neutral-900">
                                            Pooja Patel
                                        </p>
                                        <p className="text-sm text-white/60 dark:text-neutral-600">
                                            Front-End Developer
                                        </p>
                                    </div>
                                    {/* CTA */}
                                    <a href="./assest/PoojaPatel_Resume.pdf" download role="button" className="w-full sm:w-auto text-center px-7 py-3 rounded-xl
                          bg-teal-500 text-black font-bold hover:bg-teal-400 transition focus:outline-none focus:ring-2 focus:ring-teal-400" aria-label="download resume">
                                        Download Resume
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* SKILLS & RESUME Section End*/}

        </>
    )
}

export default SkillsResume
