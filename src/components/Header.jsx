import React, { useEffect, useState } from 'react'

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);
    return (
        <>
            {/*HEADER Section Start */}
            <header className="fixed w-full z-40 backdrop-blur-sm bg-black/40 dark:bg-white/20 border-b border-white">
                <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-3 text-white dark:text-black no-underline">
                        <div className="w-11 h-11 rounded-full bg-linear-to-br from-teal-400 to-teal-600 flex items-center justify-center text-black font-extrabold 
                            tracking-wide shadow-md">
                            PP
                        </div>
                        <span className="text-lg font-bold tracking-wide">
                            Pooja Patel
                        </span>
                    </a>
                    {/* Desktop Menu */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-7 text-sm font-medium">
                            <li><a href="#home" className="nav-link">Home</a></li>
                            <li><a href="#about" className="nav-link">About</a></li>
                            <li><a href="#skills-resume" className="nav-link">Skills</a></li>
                            <li><a href="#projects" className="nav-link">Projects</a></li>
                            <li><a href="#contact" className="nav-link">Contact</a></li>
                        </ul>
                    </nav>
                    {/* Mobile Menu Button */}
                    <button id="menuBtn" className="md:hidden text-teal-400 text-3xl font-bold hover:scale-110 transition-transform duration-200 focus:outline-none">
                        ☰
                    </button>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black transition"
                    >
                        {darkMode ? "☀ Light" : "🌙 Dark"}
                    </button>
                </div>
                {/* Mobile Menu */}
                <div id="mobileMenu" className="md:hidden hidden bg-white/95 dark:bg-black/90
      border-t border-black/10 dark:border-white/10">
                    <ul className="flex flex-col px-6 py-4 space-y-4 text-sm">
                        <li>
                            <a href="#home" className="block py-2.5 font-medium text-black/80 dark:text-white/90 transition-colors duration-300 ease-in-out
               dark:hover:text-white hover:text-(--teal)">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="block py-2.5 font-medium text-black/80 dark:text-white/90 transition-colors duration-300 ease-in-out
               dark:hover:text-white hover:text-(--teal)">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#skills-resume" className="block py-2.5 font-medium text-black/80 dark:text-white/90 transition-colors duration-300 ease-in-out
               dark:hover:text-white hover:text-(--teal)">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="block py-2.5 font-medium text-black/80 dark:text-white/90 transition-colors duration-300 ease-in-out
               dark:hover:text-white hover:text-(--teal)">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="block py-2.5 font-medium text-black/80 dark:text-white/90 transition-colors duration-300 ease-in-out
               dark:hover:text-white hover:text-(--teal)">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                
            </header>
            {/* HEADER Section End */}
        </>
    )
}

export default Header
