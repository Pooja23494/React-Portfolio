import React from 'react'

const Contact = () => {
    return (
        <>
            {/* CONTACT Section Start */}
            <section
                id="contact"
                className="py-20 bg-white dark:bg-neutral-950 
  transition-colors duration-500"
            >
                <div className="max-w-4xl mx-auto px-5">
                    {/* SECTION TITLE */}
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 
text-neutral-900 dark:text-white">
                        Let’s <span className="text-teal-400">Connect</span>
                    </h2>
                    <p className="mb-8 text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
                        I’m currently open to <strong>internship</strong> and
                        <strong>entry-level Front-End Developer</strong> opportunities.
                        Whether you have a role, freelance project, or collaboration in mind,
                        feel free to reach out. I specialize in
                        <strong>responsive UI</strong>, <strong>JavaScript</strong>,
                        and <strong>Tailwind CSS</strong>.
                    </p>
                    <div className="reveal" data-reveal>
                        <h3 className="text-xl font-semibold mb-6 
text-neutral-900 dark:text-white">
                            Let’s build something impactful
                        </h3>
                        <div className="p-8 rounded-3xl 
bg-neutral-100 dark:bg-neutral-900
border border-neutral-200 dark:border-neutral-800
shadow-md hover:shadow-lg transition">
                            <form id="contactForm" method="post" className="mt-6 grid gap-4">
                                {/* Name & Email */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input name="name" aria-label="Your name" placeholder="Your name" required className="p-3 rounded-lg 
bg-white dark:bg-neutral-800
border border-neutral-300 dark:border-neutral-700
text-neutral-900 dark:text-white
placeholder-neutral-400 dark:placeholder-neutral-500
focus:outline-none focus:ring-2 focus:ring-teal-500
transition"
                                    />
                                    <input name="email" type="email" aria-label="Your email" placeholder="Your email" required className="p-3 rounded-lg 
bg-white dark:bg-neutral-800
border border-neutral-300 dark:border-neutral-700
text-neutral-900 dark:text-white
placeholder-neutral-400 dark:placeholder-neutral-500
focus:outline-none focus:ring-2 focus:ring-teal-500
transition"
                                    />
                                </div>
                                {/* Message */}
                                <textarea name="message" aria-label="Message" rows={6} placeholder="Tell me about your project" required className="p-3 rounded-lg 
bg-white dark:bg-neutral-800
border border-neutral-300 dark:border-neutral-700
text-neutral-900 dark:text-white
placeholder-neutral-400 dark:placeholder-neutral-500
focus:outline-none focus:ring-2 focus:ring-teal-500
transition"
                                    defaultValue={""} />
                                {/* Submit Button */}
                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-3 
  bg-teal-500 text-white 
  rounded-lg font-semibold 
  hover:bg-teal-600 
  transition shadow-md hover:shadow-lg"
                                    >
                                        Send Message
                                    </button>
                                    <div id="formMsg" className="text-sm text-neutral-600 dark:text-neutral-400" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* CONTACT Section End */}
        </>
    )
}

export default Contact
