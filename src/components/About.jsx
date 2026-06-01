import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/10 text-teal-500 text-sm font-medium mb-5">
              About Me
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white leading-tight">
              Front-End Developer Focused on Creating Exceptional User
              Experiences
            </h2>

            <p className="mt-6 text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Hi, I'm <strong>Pooja Patel</strong>, a Front-End Developer who
              has successfully completed the{" "}
              <strong>Master in Front-End Development</strong>
              program at <strong>Red & White Skill Education</strong>.
            </p>

            <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
              I enjoy turning ideas into modern, responsive, and user-friendly
              web applications. My primary focus is building clean interfaces,
              reusable components, and smooth user experiences using React.js
              and modern front-end technologies.
            </p>

            <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Currently seeking opportunities as a Front-End Developer or
              React.js Developer where I can contribute to real-world projects,
              collaborate with experienced teams, and continue growing as a
              software developer.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-teal-500 text-black font-semibold hover:bg-teal-400 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl text-neutral-600 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-5">
            <div className="p-6 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-3xl font-bold text-teal-500">10+</h3>
              <p className="text-sm text-neutral-500 mt-2">
                Projects Completed
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-3xl font-bold text-teal-500">4+</h3>
              <p className="text-sm text-neutral-500 mt-2">Certifications</p>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-3xl font-bold text-teal-500">70+</h3>
              <p className="text-sm text-neutral-500 mt-2">
                GitHub Repositories
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-3xl font-bold text-teal-500">300+</h3>
              <p className="text-sm text-neutral-500 mt-2">Commits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
