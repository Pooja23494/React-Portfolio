import React from "react";
import TypingEffect from "./TypingEffect";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex items-center
            bg-white dark:bg-neutral-950 transition-colors duration-500"
      data-reveal
    >
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
        {/* INTRO TEXT */}
        <div className="space-y-6">
          <div
            className="inline-flex items-center gap-2
  px-4 py-2 rounded-full
  bg-teal-500/10 text-teal-500
  border border-teal-500/20
  text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
            Open to Work
          </div>
          <p className="text-teal-500 uppercase tracking-widest text-xs font-semibold">
            Hello 👋, I’m
          </p>

          <h1
            className="text-5xl md:text-7xl leading-[1.05] font-extrabold
                        text-neutral-900 dark:text-white"
          >
            Pooja <span className="text-teal-500">Patel</span>
          </h1>

          {/* TYPEWRITER */}
          <p
            className="text-lg md:text-2xl font-semibold
                        text-neutral-700 dark:text-neutral-300"
          >
            <TypingEffect />
          </p>

          {/* TAGLINE */}
          <p
            className="text-base md:text-lg leading-relaxed
  text-neutral-600 dark:text-neutral-400 max-w-xl"
          >
            Front-End Developer specializing in React.js, JavaScript, Tailwind
            CSS, and responsive web applications. Recently completed a Master in
            Front-End Development from Red & White Skill Education and actively
            seeking opportunities to build modern, scalable, and user-focused
            web experiences.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="
    px-6 py-3 rounded-xl
    bg-teal-500 text-black
    font-semibold
    hover:bg-teal-400 transition"
            >
              View Projects
            </a>

            <a
              href="/Resume/Pooja_Patel_Front_End_Developer_Resume.pdf"
              target="_blank"
              className="
    px-6 py-3 rounded-xl
    border border-neutral-300
    dark:border-neutral-700
    hover:bg-neutral-100
    dark:hover:bg-neutral-800
    transition text-neutral-600 dark:text-neutral-400"
            >
              Resume
            </a>

            <a
              href="#contact"
              className="
    px-6 py-3 rounded-xl
    border border-neutral-300
    dark:border-neutral-700
    hover:bg-neutral-100
    dark:hover:bg-neutral-800
    transition text-neutral-600 dark:text-neutral-400"
            >
              Contact
            </a>
          </div>
        </div>

        {/* PROFILE CARD */}
        <div
          className="relative p-6 rounded-2xl
                    bg-neutral-100 dark:bg-neutral-900
                    transition-colors duration-500 shadow-lg"
        >
          <div className="grid gap-4">
            <div className="relative flex justify-center">
              <div
                className="
    absolute w-52 h-52
    rounded-full
    bg-teal-500/20
    blur-3xl"
              />

              <img
                rel="preload"
                src="/pooja.webp"
                alt="Pooja Patel"
                width="208"
                height="208"
                loading="eager"
                className="
    relative z-10
    w-52 h-52
    object-cover
    rounded-full
    border-4 border-teal-500
    shadow-2xl"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div
                className="p-4 rounded-xl
    border border-neutral-300 dark:border-neutral-700"
              >
                <div className="text-xs text-neutral-500">Location</div>

                <div className="font-semibold text-neutral-900 dark:text-white">
                  Navsari, Gujarat
                </div>
              </div>

              <div
                className="p-4 rounded-xl
    border border-neutral-300 dark:border-neutral-700"
              >
                <div className="text-xs text-neutral-500">Status</div>

                <div className="font-semibold text-teal-500">Open to Work</div>
              </div>

              <div
                className="p-4 rounded-xl
    border border-neutral-300 dark:border-neutral-700"
              >
                <div className="text-xs text-neutral-500">Qualification</div>

                <div className="font-semibold text-neutral-900 dark:text-white">
                  Front-End Graduate
                </div>
              </div>

              <div
                className="p-4 rounded-xl
    border border-neutral-300 dark:border-neutral-700"
              >
                <div className="text-xs text-neutral-500">Focus</div>

                <div className="font-semibold text-neutral-900 dark:text-white">
                  React.js
                </div>
              </div>
            </div>

            <div className="mt-6 p-5 rounded-2xl border border-neutral-300 dark:border-neutral-700">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-teal-500 mb-3">
                Currently Open For
              </h4>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                  <span className="text-teal-500">✓</span>
                  Front-End Developer Roles
                </div>

                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                  <span className="text-teal-500">✓</span>
                  React.js Developer Roles
                </div>

                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                  <span className="text-teal-500">✓</span>
                  Freelance Projects
                </div>

                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                  <span className="text-teal-500">✓</span>
                  Internship Opportunities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
