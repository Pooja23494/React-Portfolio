import React, { useEffect, useState } from "react";

const SkillsResume = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 88 },
    { name: "JavaScript (ES6+)", level: 85 },
    { name: "Tailwind CSS", level: 91 },
    { name: "Bootstrap 5", level: 90 },
    { name: "DSA with C++ (Basics)", level: 95 },
    { name: "React Js.", level: 88 },
  ];

  return (
    <section
      id="skills-resume"
      className="py-20 bg-white dark:bg-neutral-950 
      transition-colors duration-500"
      data-reveal
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* SECTION TITLE */}
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-14 
        text-neutral-900 dark:text-white"
        >
          Skills <span className="text-teal-500">&amp;</span> Resume
        </h2>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* LEFT : SKILLS */}
          <div>
            <h3
              className="text-2xl md:text-3xl font-bold mb-4 
            text-neutral-900 dark:text-white"
            >
              Technical Skills
            </h3>

            <p
              className="mb-10 max-w-md text-sm leading-relaxed 
            text-neutral-600 dark:text-neutral-400"
            >
              Technologies and tools I use to build
              <strong> responsive</strong>, <strong> accessible</strong>, and
              <strong> performance-focused</strong> web interfaces.
            </p>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div
                    className="flex justify-between mb-2 
                  text-sm font-medium 
                  text-neutral-800 dark:text-neutral-200"
                  >
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div
                    className="w-full 
                  bg-neutral-200 dark:bg-neutral-800 
                  rounded-full h-3 overflow-hidden"
                  >
                    <div
                      className="bg-teal-500 h-3 rounded-full 
                      transition-all duration-1000 ease-out"
                      style={{
                        width: animate ? `${skill.level}%` : "0%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT : RESUME */}
          <div>
            <h3
              className="text-2xl md:text-3xl font-bold mb-4 
            text-neutral-900 dark:text-white"
            >
              Resume
            </h3>

            <p
              className="mb-8 max-w-md text-sm leading-relaxed 
            text-neutral-600 dark:text-neutral-400"
            >
              Download my resume to learn more about my education, technical
              skills, and front-end projects focused on clean UI and responsive
              design.
            </p>

            <div
              className="p-8 rounded-2xl 
            bg-neutral-100 dark:bg-neutral-900
            border border-neutral-200 dark:border-neutral-800
            shadow-lg transition-colors duration-500"
            >
              <div
                className="flex flex-col gap-5 sm:flex-row 
              sm:items-center sm:justify-between"
              >
                <div className="text-center sm:text-left">
                  <p
                    className="text-lg font-semibold 
                  text-neutral-900 dark:text-white"
                  >
                    Pooja Patel
                  </p>

                  <p
                    className="text-sm 
                  text-neutral-500 dark:text-neutral-400"
                  >
                    Front-End Developer
                  </p>
                </div>

                <a
                  href="./Resume/Pooja_Patel_Front_End_Developer_Resume.pdf"
                  download
                  className="w-full sm:w-auto text-center px-7 py-3 rounded-xl
                  bg-teal-500 text-black font-bold 
                  hover:bg-teal-400 transition
                  focus:outline-none focus:ring-2 focus:ring-teal-400"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsResume;
