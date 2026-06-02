import React from "react";

const Certifications = () => {
  const certificates = [
    {
      title: "HTML & CSS Excellence Certificate",
      issuer: "NASSCOM Foundation (Cisco thingQbator)",
      image: "/certificates/nasscom.webp",
    },
    {
      title: "HTML & CSS Crash Course",
      issuer: "Coursera | Scrimba",
      image: "/certificates/coursera.webp",
    },
    {
      title: "TECHWAR 2026 Participant",
      issuer: "C Tsunami",
      image: "/certificates/techwarC.webp",
    },
    {
      title: "TECHWAR 2026 Participant",
      issuer: "WebHacks",
      image: "/certificates/techwarWeb.webp",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-500"
      data-reveal
    >
      <div className="max-w-6xl mx-auto px-5">
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/10 text-teal-500 text-sm font-medium mb-5">
          My Certifications
        </span>

        <p className="mb-12 text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Certifications and achievements that reflect my commitment to
          continuous learning and front-end development excellence.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl
      bg-neutral-100 dark:bg-neutral-900
      border border-neutral-200 dark:border-neutral-800
      hover:border-teal-500
      hover:shadow-2xl
      transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  width="600"
                  height="800"
                  loading="eager"
                  className="w-full h-64 object-cover
          group-hover:scale-105
          transition duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-teal-500/10 text-teal-500">
                    Certificate
                  </span>

                  <span className="text-sm text-neutral-500">{cert.year}</span>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                  {cert.title}
                </h3>

                <p className="text-neutral-500 mb-5">{cert.issuer}</p>

                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2 rounded-xl
          bg-teal-500 text-black font-semibold
          hover:bg-teal-400 transition"
                >
                  View Certificate →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
