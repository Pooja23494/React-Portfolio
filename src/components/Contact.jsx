import React from 'react'

const Contact = () => {
    return (
        <>
            {/* CONTACT Section Start */}
            <section id="contact" className="py-20 bg-black/40 dark:bg-white/5">
                <div className="max-w-4xl mx-auto px-5">
                    {/* SECTION TITLE */}
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white dark:text-neutral-900">
                        Let’s <span className="text-teal-400">Connect</span>
                    </h2>
                    <p className="mb-8 text-white/70 dark:text-neutral-600 text-sm md:text-base">
                        I’m currently open to <strong>internship</strong> and
                        <strong>entry-level Front-End Developer</strong> opportunities.
                        Whether you have a role, freelance project, or collaboration in mind,
                        feel free to reach out. I specialize in
                        <strong>responsive UI</strong>, <strong>JavaScript</strong>,
                        and <strong>Tailwind CSS</strong>.
                    </p>
                    <div className="reveal" data-reveal>
                        <h3 className="text-xl font-semibold mb-6 text-white dark:text-neutral-900">
                            Let’s build something impactful
                        </h3>
                        <div className="p-8 rounded-3xl bg-black/30 dark:bg-white/10 border border-white/10 fancy-card">
                            <form id="contactForm" method="post" className="mt-6 grid gap-4">
                                {/* Name & Email */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input name="name" aria-label="Your name" placeholder="Your name" required className="p-3 rounded-md bg-black/30 dark:bg-white/10 border border-white/30 text-white dark:text-black
                      placeholder-white/60 dark:placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-teal-400" />
                                    <input name="email" type="email" aria-label="Your email" placeholder="Your email" required className="p-3 rounded-md bg-black/30 dark:bg-white/10 border border-white/30 text-white dark:text-black
                      placeholder-white/60 dark:placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-teal-400" />
                                </div>
                                {/* Message */}
                                <textarea name="message" aria-label="Message" rows={6} placeholder="Tell me about your project" required className="p-3 rounded-md bg-black/30 dark:bg-white/10 border border-white/30 text-white dark:text-black
                      placeholder-white/60 dark:placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-teal-400" defaultValue={""} />
                                {/* Submit Button */}
                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <button type="submit" className="px-6 py-3 bg-teal-400 text-black rounded-md font-semibold hover:bg-teal-300 transition
                      shadow-md hover:shadow-lg">
                                        Send Message
                                    </button>
                                    <div id="formMsg" className="text-sm text-white/60 dark:text-black/60" />
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
