import React from 'react'

const Footer = () => {
    return (
        <>
            {/* FOOTER Section Start */}
            <footer className="py-10 
border-t border-neutral-200 dark:border-neutral-800
bg-neutral-50 dark:bg-neutral-900
transition-colors duration-500">
                <div className="max-w-6xl mx-auto px-5
         text-sm text-neutral-600 dark:text-neutral-400
         flex flex-col gap-4 text-center
         sm:flex-row sm:items-center sm:justify-between sm:text-left">
                    {/* Left */}
                    <div>
                        Designed &amp; built by
                        <strong className="text-neutral-900 dark:text-white font-semibold"> Pooja Patel</strong> © 2025
                        <p className="text-xs mt-1">
                            HTML • CSS • JavaScript • Tailwind CSS
                        </p>
                    </div>
                    {/* Right */}
                    <div className="flex justify-center sm:justify-end gap-6 items-center">
                        {/* GitHub */}
                        <a href="https://github.com/Pooja23494" role="button" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 
text-neutral-700 dark:text-neutral-300
relative group
transition hover:-translate-y-0.5"
                            aria-label="github">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                alt="GitHub"
                                className="w-5 h-5 dark:invert"
                                loading="lazy"
                            />
                            <span className="text-sm relative">
                                github.com/Pooja23494
                                <span className="absolute left-0 -bottom-1 h-px w-0 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                            </span>

                        </a>
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/pooja-patel-aba85b303" target="_blank" role="button" rel="noopener noreferrer" className="flex items-center gap-2 
text-neutral-700 dark:text-neutral-300
relative group
transition hover:-translate-y-0.5"
                            aria-label="linkedin">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-5 h-5" loading="lazy" />
                            <span className="text-sm relative">
                                LinkedIn
                                <span className="absolute left-0 -bottom-1 h-px w-0 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                            </span>

                        </a>
                    </div>
                </div>
            </footer>
            {/* FOOTER Section End */}
        </>
    )
}

export default Footer
