import React from 'react'

const Projects = () => {
    return (
        <>
            {/* PROJECTS Section Start */}
            <section id="projects" className="py-20 bg-black/40 dark:bg-white/5">
                <div className="max-w-6xl mx-auto px-5">
                    {/* SECTION TITLE */}
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-white dark:text-neutral-900">
                        Featured <span className="text-teal-400">Projects</span>
                    </h2>
                    {/* FEATURED PROJECT */}
                    <div className="mb-16 reveal" data-reveal>
                        <div className="group grid md:grid-cols-2 rounded-3xl overflow-hidden border border-white/20 bg-black/30 transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/10 hover:border-teal-400 h-full shadow-md">
                            {/* Image */}
                            <div className="relative group overflow-hidden">
                                <img src="./project1.png" alt="Shivaji Good Poha website homepage" className="w-full h-full object-cover
                      transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                                    <span className="text-white text-sm font-semibold">
                                        View Project Preview
                                    </span>
                                </div>
                            </div>
                            {/* Content */}
                            <div className="p-6 md:p-8 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white dark:text-neutral-900">
                                        Shivaji Good Poha
                                        <span className="block text-sm font-medium text-teal-400">
                                            Business Website
                                        </span>
                                    </h3>
                                    <p className="text-sm text-white/70 mb-3">
                                        <strong>Problem:</strong> The business lacked a modern digital presence, making it
                                        difficult to showcase products, build customer trust, and reach a wider audience
                                        online.<br /><br />
                                        <strong>My Role:</strong> Designed and developed a complete business website from
                                        scratch, focusing on clean UI, responsive layouts, and clear product presentation to
                                        improve usability and brand credibility.<br /><br />
                                        <strong>Result:</strong> Delivered a fully responsive and professional website that
                                        improves online visibility, clearly communicates brand values, and offers a smooth
                                        user experience across all devices.
                                    </p>
                                    <ul className="space-y-1 text-sm text-white/75 dark:text-neutral-700 mb-4">
                                        <li>• Fully responsive UI using HTML, CSS, Bootstrap &amp; JavaScript</li>
                                        <li>• Clean UI with trust indicators (quality, purity, certifications)</li>
                                        <li>• Accessible navigation and structured content for better UX</li>
                                        <li>• Optimized layout for desktop and mobile users</li>
                                    </ul>
                                </div>
                                {/* Links */}
                                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex flex-wrap gap-3 text-xs text-white/80">
                                        <span className="flex items-center gap-1">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-4" loading="lazy" alt="html5" />
                                            HTML5
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-4" loading="lazy" alt="css3" />
                                            CSS3
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-4" loading="lazy" alt="javascript" />
                                            JavaScript
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <img src="https://img.jsdelivr.com/github.com/twbs.png" className="w-4" loading="lazy" alt="bootstrap" />
                                            Bootstrap
                                        </span>
                                    </div>
                                    <div className="flex gap-4">
                                        <a href="https://www.shivajigoodpoha.com" target="_blank" role="button" className="text-teal-400 font-semibold hover:underline" aria-label="view shivaji good poha live site">
                                            Live Site ↗
                                        </a>
                                        <a href="https://github.com/Pooja23494/Shivajigoodpoha" target="_blank" role="button" className="text-teal-400 font-semibold hover:underline" aria-label="view shivaji good poha">
                                            GitHub ↗
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* OTHER PROJECTS GRID */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {/* PROJECT CARD 1 */}
                        <div className="reveal" data-reveal>
                            <div className="group rounded-2xl overflow-hidden border border-white/20 bg-black/30 transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/10 hover:border-teal-400 h-full flex flex-col shadow-md">
                                <div className="relative group overflow-hidden">
                                    <img src="./java-script-practical-exam-pooja.vercel.app_.png" alt="Stylish" className="w-full h-full object-cover
                          transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                                        <span className="text-white text-sm font-semibold">
                                            View Project Preview
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5 flex flex-col grow">
                                    <h3 className="text-lg font-semibold mb-2 text-white dark:text-neutral-900">
                                        Stylish
                                        <span className="block text-xs text-teal-400 font-medium">
                                            Interactive Web App
                                        </span>
                                    </h3>
                                    <p className="text-sm text-white/70 mb-3">
                                        <strong>Problem:</strong> Managing product data dynamically on the client side
                                        required an interactive interface that could handle updates without page
                                        reloads.<br /><br />
                                        <strong>My Role:</strong> Built an interactive web application using JavaScript to
                                        handle dynamic DOM updates, event handling, and client-side product sorting
                                        functionality.<br /><br />
                                        <strong>Result:</strong> Created a smooth, user-friendly experience that allows
                                        users to manage and organize product data efficiently in real time.
                                    </p>
                                    <ul className="space-y-1 text-xs text-white/70 dark:text-neutral-700 mb-4">
                                        <li>• Dynamic DOM updates &amp; event handling</li>
                                        <li>• Responsive layout with Bootstrap</li>
                                        <li>• Client-side sorting logic</li>
                                    </ul>
                                    <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                                        <div className="flex flex-wrap gap-3 text-xs text-white/80">
                                            <span className="flex items-center gap-1">
                                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-4" loading="lazy" alt="html5" />
                                                HTML5
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-4" loading="lazy" alt="css3" />
                                                CSS3
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-4" loading="lazy" alt="javascript" />
                                                JavaScript
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <img src="https://img.jsdelivr.com/github.com/twbs.png" className="w-4" loading="lazy" alt="bootstrap" />
                                                Bootstrap
                                            </span>
                                        </div>
                                        <div className="flex gap-3">
                                            <a href="https://java-script-practical-exam-pooja.vercel.app/" target="_blank" role="button" className="text-teal-400 font-medium hover:underline" aria-label="view stylish live demo">
                                                Live ↗
                                            </a>
                                            <a href="https://github.com/Pooja23494/JavaScript-Practical-Exam-Pooja" role="button" target="_blank" className="text-teal-400 font-medium hover:underline" aria-label="view stylish live">
                                                GitHub ↗
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* PROJECT CARD 2 */}
                        <div className="reveal" data-reveal>
                            <div className="group rounded-2xl overflow-hidden border border-white/20 bg-black/30 transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/10 hover:border-teal-400 h-full flex flex-col shadow-md">
                                <div className="relative group overflow-hidden">
                                    <img src="./pr-10-weather-api-delta.vercel.app_.png" alt="Weather App" className="w-full h-full object-cover
                          transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                                        <span className="text-white text-sm font-semibold">
                                            View Project Preview
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5 flex flex-col grow">
                                    <h3 className="text-lg font-semibold mb-2 text-white dark:text-neutral-900">
                                        Weather App
                                        <span className="block text-xs text-teal-400 font-medium">
                                            API Integration
                                        </span>
                                    </h3>
                                    <p className="text-sm text-white/70 mb-3">
                                        <strong>Problem:</strong> Users needed a fast and simple way to access accurate,
                                        real-time weather information for different locations.<br /><br />
                                        <strong>My Role:</strong> Developed a responsive weather application using
                                        JavaScript and Fetch API to retrieve real-time weather data and update the UI
                                        dynamically based on user input.<br /><br />
                                        <strong>Result:</strong> Delivered a clean, responsive weather app that displays
                                        live temperature, humidity, and wind data with a smooth user experience.
                                    </p>
                                    <ul className="space-y-1 text-xs text-white/70 dark:text-neutral-700 mb-4">
                                        <li>• Fetch API integration for real-time weather data</li>
                                        <li>• Responsive UI using HTML, CSS, and JavaScript</li>
                                        <li>• Dynamic DOM updates and user-friendly interface</li>
                                        <li>• Clear presentation of temperature, humidity, and wind data</li>
                                    </ul>
                                    <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                                        <div className="flex flex-wrap gap-3 text-xs text-white/80">
                                            <span className="flex items-center gap-1">
                                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-4" loading="lazy" alt="html5" />
                                                HTML5
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-4" loading="lazy" alt="css3" />
                                                CSS3
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-4" loading="lazy" alt="javascript" />
                                                JavaScript
                                            </span>
                                            <span className="flex items-center gap-1">
                                                • Weather App
                                            </span>
                                        </div>
                                        <div className="flex gap-3">
                                            <a href="https://pr-10-weather-api-delta.vercel.app/" target="_blank" role="button" className="text-teal-400 font-medium hover:underline" aria-label="view weather app live demo">
                                                Live ↗
                                            </a>
                                            <a href="https://github.com/Pooja23494/PR10-Weather-API" target="_blank" role="button" className="text-teal-400 font-medium hover:underline" aria-label="view weather app live">
                                                GitHub ↗
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* PROJECTS Section End */}
        </>
    )
}

export default Projects
