import { useEffect, useState } from "react";

function Header() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  // Detect saved theme OR system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setDark(savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(prefersDark);
    }
  }, []);

  // Apply theme to <html>
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <header className="fixed w-full bg-white dark:bg-neutral-950 
    shadow-md z-50 transition-colors duration-500">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 no-underline">
          <div className="w-11 h-11 rounded-full 
          bg-linear-to-br from-teal-400 to-teal-600 
          flex items-center justify-center text-black font-extrabold 
          tracking-wide shadow-md">
            PP
          </div>

          <span className="font-bold text-lg 
          text-neutral-900 dark:text-white">
            Pooja Patel
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-medium">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace("skills", "skills-resume")}`}
                  className="text-neutral-700 dark:text-neutral-300 
                  hover:text-teal-500 transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-4">

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="text-xl transition-transform duration-300 
            hover:scale-110"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-neutral-800 dark:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden 
        bg-white dark:bg-neutral-900 
        border-t border-neutral-200 dark:border-neutral-800 
        transition-colors duration-300">

          <ul className="flex flex-col px-6 py-4 space-y-4 text-sm">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace("skills", "skills-resume")}`}
                  className="block text-neutral-700 dark:text-neutral-300 
                  hover:text-teal-500 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
