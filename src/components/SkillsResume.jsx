import React from "react";

const SkillsResume = () => {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
    },
    {
      title: "UI & Styling",
      skills: ["Tailwind CSS", "Bootstrap", "Responsive Design"],
    },
    {
      title: "Programming",
      skills: ["C++", "DSA Basics", "ES6+"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Vercel"],
    },
  ];

  return (
    <section
      id="skills-resume"
      className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-5">
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/10 text-teal-500 text-sm font-medium mb-5">
          Skills & Resume
        </span>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* SKILLS */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
              Technical Expertise
            </h3>

            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              Technologies and tools I use to build modern, scalable, and
              responsive web applications.
            </p>

            <div className="grid gap-5">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="p-5 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-teal-500 transition"
                >
                  <h4 className="font-semibold text-teal-500 mb-4">
                    {group.title}
                  </h4>

                  <div className="flex flex-wrap gap-2 text-neutral-600 dark:text-neutral-400">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-2 rounded-full text-sm bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RESUME */}
          <div>
            <div className="p-8 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg sticky top-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-teal-500 flex items-center justify-center text-black font-bold text-2xl">
                  PP
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                    Pooja Patel
                  </h3>

                  <p className="text-neutral-500">Front-End Developer</p>
                </div>
              </div>

              <div className="space-y-4 mb-8 text-neutral-600 dark:text-neutral-400">
                <div className="flex items-center gap-3">
                  <span>✓</span>
                  <p>React.js Development</p>
                </div>

                <div className="flex items-center gap-3">
                  <span>✓</span>
                  <p>Responsive UI Design</p>
                </div>

                <div className="flex items-center gap-3">
                  <span>✓</span>
                  <p>REST API Integration</p>
                </div>

                <div className="flex items-center gap-3">
                  <span>✓</span>
                  <p>MERN Stack Projects</p>
                </div>

                <div className="flex items-center gap-3">
                  <span>✓</span>
                  <p>Git & GitHub Workflow</p>
                </div>
              </div>

              <a
                href="./Resume/Pooja_Patel_Front_End_Developer_Resume.pdf"
                download
                className="block w-full text-center py-4 rounded-xl bg-teal-500 text-black font-bold hover:bg-teal-400 transition"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsResume;

