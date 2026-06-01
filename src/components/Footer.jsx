import React from "react";

const Footer = () => {
  return (
    <footer
      className="
      border-t border-neutral-200 dark:border-neutral-800
      bg-neutral-50 dark:bg-neutral-950
      transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-5 py-12">
        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
              Pooja <span className="text-teal-500">Patel</span>
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              Front-End Developer specializing in React.js, JavaScript, Tailwind
              CSS, and responsive web applications.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-500 text-sm">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              Open to Work
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold text-neutral-900 dark:text-white mb-4">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3 text-sm text-neutral-600 dark:text-neutral-400">
              <a href="#home" className="hover:text-teal-500 transition">
                Home
              </a>

              <a href="#about" className="hover:text-teal-500 transition">
                About
              </a>

              <a href="#projects" className="hover:text-teal-500 transition">
                Projects
              </a>

              <a
                href="#certifications"
                className="hover:text-teal-500 transition"
              >
                Certifications
              </a>

              <a href="#contact" className="hover:text-teal-500 transition">
                Contact
              </a>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div>
            <h4 className="font-semibold text-neutral-900 dark:text-white mb-4">
              Connect With Me
            </h4>

            <div className="flex flex-col gap-4 text-neutral-600 dark:text-neutral-400">
              <a
                href="https://github.com/Pooja23494"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-teal-500 transition"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                  className="w-5 h-5 dark:invert"
                />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/pooja-patel-aba85b303"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-teal-500 transition"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                  className="w-5 h-5"
                />
                LinkedIn
              </a>

              <a
                href="mailto:poojaclass1994@gmail.com"
                className="flex items-center gap-3 hover:text-teal-500 transition"
              >
                ✉️ Email
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
          pt-6 border-t border-neutral-200
          dark:border-neutral-800
          flex flex-col md:flex-row
          items-center justify-between
          gap-4"
        >
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Pooja Patel. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "React.js",
              "JavaScript",
              "Tailwind CSS",
              "Bootstrap",
              "GitHub",
            ].map((tech) => (
              <span
                key={tech}
                className="
                px-3 py-1 rounded-full
                text-xs
                bg-neutral-100 dark:bg-neutral-900
                border border-neutral-200 dark:border-neutral-800
                text-neutral-600 dark:text-neutral-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
