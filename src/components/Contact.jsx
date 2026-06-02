import { Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      await fetch("https://formsubmit.co/poojaclass1994@gmail.com", {
        method: "POST",
        body: formData,
      });

      setMessage("✅ Message sent successfully!");
      e.target.reset();

      setTimeout(() => {
        setMessage("");
      }, 4000);
    } catch (error) {
      setMessage("❌ Something went wrong.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-500"
      data-reveal
    >
      <div className="max-w-6xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 rounded-full bg-teal-500/10 text-teal-500 text-sm font-medium mb-4">
            Contact
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white">
            Let's <span className="text-teal-500">Connect</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
            I'm currently open to Front-End Developer, React.js Developer,
            Internship, and Freelance opportunities. Feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="p-8 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              Get In Touch
            </h3>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center">
                  <Mail className="text-teal-500" size={20} />
                </div>

                <div>
                  <p className="font-medium text-neutral-900 dark:text-white">
                    Email
                  </p>
                  <p className="text-sm text-neutral-500">
                    poojaclass1994@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center">
                  <Phone className="text-teal-500" size={20} />
                </div>

                <div>
                  <p className="font-medium text-neutral-900 dark:text-white">
                    Phone
                  </p>
                  <p className="text-sm text-neutral-500">+91 XXXXX XXXXX</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center">
                  <MapPin className="text-teal-500" size={20} />
                </div>

                <div>
                  <p className="font-medium text-neutral-900 dark:text-white">
                    Location
                  </p>
                  <p className="text-sm text-neutral-500">
                    Navsari, Gujarat, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h4 className="font-semibold text-neutral-900 dark:text-white mb-4">
                Connect Online
              </h4>

              <div className="flex gap-4">
                <a
                  href="https://github.com/Pooja23494"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="
      w-12 h-12 rounded-xl
      bg-white dark:bg-neutral-800
      border border-neutral-200 dark:border-neutral-700
      flex items-center justify-center
      text-neutral-700 dark:text-neutral-300
      hover:text-teal-500 hover:border-teal-500
      hover:-translate-y-1
      transition-all duration-300
    "
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="https://www.linkedin.com/in/pooja-patel-aba85b303"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="
      w-12 h-12 rounded-xl
      bg-white dark:bg-neutral-800
      border border-neutral-200 dark:border-neutral-700
      flex items-center justify-center
      text-neutral-700 dark:text-neutral-300
      hover:text-teal-500 hover:border-teal-500
      hover:-translate-y-1
      transition-all duration-300
    "
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>

            {/* Availability Card */}
            <div className="mt-10 p-5 rounded-2xl bg-teal-500 text-black">
              <h4 className="font-bold text-lg mb-2">
                Available for Opportunities
              </h4>

              <p className="text-sm">
                Open to Front-End Developer, React.js Developer, Internship, and
                Freelance projects.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              Send Message
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-xl text-neutral-900 dark:text-white bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 focus:ring-2 focus:ring-teal-500 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded- text-neutral-900 dark:text-white bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 focus:ring-2 focus:ring-teal-500 outline-none"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Tell me about your project..."
                required
                className="w-full p-4 rounded-xl text-neutral-900 dark:text-white bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 focus:ring-2 focus:ring-teal-500 outline-none"
              />

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-teal-500 text-black font-bold hover:bg-teal-400 transition"
              >
                Send Message
              </button>

              {message && (
                <p className="text-center text-green-500 font-medium">
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
