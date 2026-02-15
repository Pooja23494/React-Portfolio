import { useEffect, useState } from "react";

function Header() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  // Load saved theme safely
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
    }
  }, []);

  // Apply theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="fixed w-full bg-white dark:bg-black shadow-md z-50 transition-colors duration-300">
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
          <button
            onClick={() => setDark(!dark)}
            className="text-xl transition-transform duration-300 hover:scale-110"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          <button
            className="md:hidden text-xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white/95 dark:bg-black/90 border-t border-black/10 dark:border-white/10">
          <ul className="flex flex-col px-6 py-4 space-y-4 text-sm">
            <li><a href="#home" className="block">Home</a></li>
            <li><a href="#about" className="block">About</a></li>
            <li><a href="#skills-resume" className="block">Skills</a></li>
            <li><a href="#projects" className="block">Projects</a></li>
            <li><a href="#contact" className="block">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
