import { useState, useEffect } from "react";

export default function Header() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDark(true);
        }
    }, []);


    return (
        <header className="fixed w-full bg-white dark:bg-black shadow-md z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="font-bold text-lg text-black dark:text-white">
                    Pooja Patel
                </h1>

                <nav className="hidden md:block">
                    <ul className="flex items-center gap-7 text-sm font-medium">
                        <li><a href="#home" className="nav-link">Home</a></li>
                        <li><a href="#about" className="nav-link">About</a></li>
                        <li><a href="#skills-resume" className="nav-link">Skills</a></li>
                        <li><a href="#projects" className="nav-link">Projects</a></li>
                        <li><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>
                </nav>


                <div className="flex items-center gap-4">
                    <button onClick={() => setDark(!dark)}>
                        {dark ? "☀️" : "🌙"}
                    </button>

                    <button
                        className="md:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {open && (
                <div id="mobileMenu" className="md:hidden bg-white/95 dark:bg-black/90 border-t border-black/10 dark:border-white/10">
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
            )}
        </header>
    );
}
