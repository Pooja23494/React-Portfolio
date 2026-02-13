import React from 'react'

const Footer = () => {
    return (
        <>
            {/* FOOTER Section Start */}
            <footer className="py-8 border-t border-white dark:border-black/10 bg-black/60 dark:bg-white/10">
                <div className="max-w-6xl mx-auto px-5
         text-sm text-white/70 dark:text-black/70
         flex flex-col gap-4 text-center
         sm:flex-row sm:items-center sm:justify-between sm:text-left">
                    {/* Left */}
                    <div>
                        Designed &amp; built by
                        <strong className="text-white dark:text-black">Pooja Patel</strong> © 2025
                        <p className="text-xs mt-1">
                            HTML • CSS • JavaScript • Tailwind CSS
                        </p>
                    </div>
                    {/* Right */}
                    <div className="flex justify-center sm:justify-end gap-6 items-center">
                        {/* GitHub */}
                        <a href="https://github.com/Pooja23494" role="button" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-teal-400 transition hover:-translate-y-0.5" aria-label="github">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-5 h-5" loading="lazy" />
                            <span className="text-sm">github.com/Pooja23494</span>
                        </a>
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/pooja-patel-aba85b303" target="_blank" role="button" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-teal-400 transition hover:-translate-y-0.5" aria-label="linkedin">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-5 h-5" loading="lazy" />
                            <span className="text-sm">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </footer>
            {/* FOOTER Section End */}
        </>
    )
}

export default Footer
