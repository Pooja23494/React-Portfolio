import React from "react";

const Projects = () => {
  return (
    <>
      {/* PROJECTS Section Start */}
      <section
        id="projects"
        className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-500"
        data-reveal
      >
        <div className="max-w-6xl mx-auto px-5">
          {/* SECTION TITLE */}
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/10 text-teal-500 text-sm font-medium mb-5">
            Featured Projects
          </span>

          {/* FEATURED PROJECT */}
          <div className="mb-16 reveal" data-reveal>
            <div
              className="group grid md:grid-cols-2 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800
                            bg-neutral-100 dark:bg-neutral-900 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl h-full hover:shadow-teal-500/10 hover:border-teal-400  shadow-md"
            >
              {/* Image */}
              <div className="relative group overflow-hidden">
                <img
                  src="./project1.webp"
                  alt="Shivaji Good Poha website homepage"
                  width="1200"
                  height="675"
                  className="w-full h-full object-cover
                      transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover Overlay */}
                <div
                  className="absolute inset-0 bg-black/60 dark:bg-black/60 opacity-0 group-hover:opacity-100 
                                    transition flex items-center justify-center"
                >
                  <span className="text-neutral-900 dark:text-white text-sm font-semibold">
                    View Project Preview
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3  text-neutral-900 dark:text-white">
                    Shivaji Good Poha
                    <span className="block text-sm font-medium text-teal-500">
                      Business Website
                    </span>
                  </h3>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    <strong>Problem:</strong> The business lacked a modern
                    digital presence, making it difficult to showcase products,
                    build customer trust, and reach a wider audience online.
                    <br />
                    <br />
                    <strong>My Role:</strong> Designed and developed a complete
                    business website from scratch, focusing on clean UI,
                    responsive layouts, and clear product presentation to
                    improve usability and brand credibility.
                    <br />
                    <br />
                    <strong>Result:</strong> Delivered a fully responsive and
                    professional website that improves online visibility,
                    clearly communicates brand values, and offers a smooth user
                    experience across all devices.
                  </p>
                  <ul className="space-y-1 text-sm text-neutral-900 dark:text-neutral-300 mb-4">
                    <li>
                      • Fully responsive UI using HTML, CSS, Bootstrap &amp;
                      JavaScript
                    </li>
                    <li>
                      • Clean UI with trust indicators (quality, purity,
                      certifications)
                    </li>
                    <li>
                      • Accessible navigation and structured content for better
                      UX
                    </li>
                    <li>• Optimized layout for desktop and mobile users</li>
                  </ul>
                </div>
                {/* Links */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-3 text-xs text-neutral-700 dark:text-neutral-300">
                    <span className="flex items-center gap-1">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                        className="w-4"
                        loading="lazy"
                        alt="html5"
                      />
                      HTML5
                    </span>
                    <span className="flex items-center gap-1">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                        className="w-4"
                        loading="lazy"
                        alt="css3"
                      />
                      CSS3
                    </span>
                    <span className="flex items-center gap-1">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                        className="w-4"
                        loading="lazy"
                        alt="javascript"
                      />
                      JavaScript
                    </span>
                    <span className="flex items-center gap-1">
                      <img
                        src="https://img.jsdelivr.com/github.com/twbs.png"
                        className="w-4"
                        loading="lazy"
                        alt="bootstrap"
                      />
                      Bootstrap
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="https://www.shivajigoodpoha.com"
                      target="_blank"
                      role="button"
                      className="text-teal-400 font-semibold hover:underline"
                      aria-label="view shivaji good poha live site"
                    >
                      Live Site ↗
                    </a>
                    <a
                      href="https://github.com/Pooja23494/Shivajigoodpoha"
                      target="_blank"
                      role="button"
                      className="text-teal-400 font-semibold hover:underline"
                      aria-label="view shivaji good poha"
                    >
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
            <div className="reveal">
              <div
                className="group rounded-2xl overflow-hidden 
border border-neutral-200 dark:border-neutral-800 
bg-neutral-100 dark:bg-neutral-900 
transition-all duration-300 ease-out
hover:-translate-y-1 hover:shadow-xl 
hover:shadow-teal-500/10 hover:border-teal-400 
h-full flex flex-col shadow-md"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src="./project2.webp"
                    alt="Stylish Web App Preview"
                    width="800"
                    height="450"
                    className="w-full h-full object-cover
        transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Hover Overlay */}
                  <div
                    className="absolute inset-0 bg-black/60
        opacity-0 group-hover:opacity-100
        transition flex items-center justify-center"
                  >
                    <span className="text-white text-sm font-semibold">
                      View Project Preview
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col grow">
                  <h3
                    className="text-lg font-semibold mb-2
      text-neutral-900 dark:text-white"
                  >
                    Stylish
                    <span className="block text-xs text-teal-500 font-medium">
                      Interactive Web App
                    </span>
                  </h3>

                  <p
                    className="text-sm
      text-neutral-600 dark:text-neutral-400 mb-3"
                  >
                    <strong>Problem:</strong> Managing product data dynamically
                    on the client side required an interactive interface that
                    could handle updates without page reloads.
                    <br />
                    <br />
                    <strong>My Role:</strong> Built an interactive web
                    application using JavaScript to handle dynamic DOM updates,
                    event handling, and client-side product sorting
                    functionality.
                    <br />
                    <br />
                    <strong>Result:</strong> Created a smooth, user-friendly
                    experience that allows users to manage and organize product
                    data efficiently in real time.
                  </p>

                  <ul
                    className="space-y-1 text-xs
      text-neutral-600 dark:text-neutral-400 mb-4"
                  >
                    <li>• Dynamic DOM updates & event handling</li>
                    <li>• Responsive layout with Bootstrap</li>
                    <li>• Client-side sorting logic</li>
                  </ul>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                    {/* Tech Stack */}
                    <div
                      className="flex flex-wrap gap-3 text-xs
        text-neutral-700 dark:text-neutral-300"
                    >
                      <span className="flex items-center gap-1">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                          className="w-4"
                          loading="lazy"
                          alt="html5"
                        />
                        HTML5
                      </span>

                      <span className="flex items-center gap-1">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                          className="w-4"
                          loading="lazy"
                          alt="css3"
                        />
                        CSS3
                      </span>

                      <span className="flex items-center gap-1">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                          className="w-4"
                          loading="lazy"
                          alt="javascript"
                        />
                        JavaScript
                      </span>

                      <span className="flex items-center gap-1">
                        <img
                          src="https://img.jsdelivr.com/github.com/twbs.png"
                          className="w-4"
                          loading="lazy"
                          alt="bootstrap"
                        />
                        Bootstrap
                      </span>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href="https://java-script-practical-exam-pooja.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-500 font-medium hover:underline"
                      >
                        Live ↗
                      </a>

                      <a
                        href="https://github.com/Pooja23494/JavaScript-Practical-Exam-Pooja"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-500 font-medium hover:underline"
                      >
                        GitHub ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PROJECT CARD 2 */}
            <div className="reveal" data-reveal>
              <div
                className="group rounded-2xl overflow-hidden
    border border-neutral-200 dark:border-neutral-800
    bg-neutral-100 dark:bg-neutral-900
    transition-all duration-300 ease-out
    hover:-translate-y-1 hover:shadow-xl
    hover:shadow-teal-500/10 hover:border-teal-400
    h-full flex flex-col shadow-md"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src="project3.webp"
                    alt="QuickShow Movie Ticket Booking Platform"
                    width="800"
                    height="450"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Hover Overlay */}
                  <div
                    className="absolute inset-0 bg-black/60
        opacity-0 group-hover:opacity-100
        transition flex items-center justify-center"
                  >
                    <span className="text-white text-sm font-semibold">
                      View Project Preview
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col grow">
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                    QuickShow
                    <span className="block text-xs text-teal-500 font-medium">
                      Movie Ticket Booking Platform
                    </span>
                  </h3>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    <strong>Problem:</strong> Users needed a convenient and
                    secure platform to browse movies, book tickets, and manage
                    reservations online.
                    <br />
                    <br />
                    <strong>My Role:</strong> Built a full-stack movie ticket
                    booking platform using React.js, Node.js, Express.js,
                    MongoDB, and Stripe with authentication, seat selection, and
                    payment integration.
                    <br />
                    <br />
                    <strong>Result:</strong> Delivered a responsive application
                    that enables seamless ticket booking and efficient
                    management of shows, users, and bookings.
                  </p>

                  <ul className="space-y-1 text-xs text-neutral-600 dark:text-neutral-400 mb-4">
                    <li>• User Registration & Authentication</li>
                    <li>• Movie & Show Listings</li>
                    <li>• Interactive Seat Selection System</li>
                    <li>• Secure Stripe Payment Integration</li>
                    <li>• Booking History & Account Management</li>
                    <li>• Admin Dashboard</li>
                    <li>• Manage Shows, Users & Bookings</li>
                    <li>• Fully Responsive Design</li>
                  </ul>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3 text-xs text-neutral-700 dark:text-neutral-300">
                      <span>⚛ React.js</span>
                      <span>🟢 Node.js</span>
                      <span>🚀 Express.js</span>
                      <span>🍃 MongoDB</span>
                      <span>💳 Stripe</span>
                      <span>🎨 Tailwind CSS</span>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href="https://quickshow-omega-blush.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-500 font-medium hover:underline"
                      >
                        Live ↗
                      </a>

                      <a
                        href="https://github.com/Pooja23494/QuickShow"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-500 font-medium hover:underline"
                      >
                        GitHub ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PROJECT CARD 3  */}
            <div className="reveal" data-reveal>
              <div
                className="group rounded-2xl overflow-hidden
    border border-neutral-200 dark:border-neutral-800
    bg-neutral-100 dark:bg-neutral-900
    transition-all duration-300 ease-out
    hover:-translate-y-1 hover:shadow-xl
    hover:shadow-teal-500/10 hover:border-teal-400
    h-full flex flex-col shadow-md"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src="./project4.webp"
                    alt="MERN Ecommerce Platform"
                    width="800"
                    height="450"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  <div
                    className="absolute inset-0 bg-black/60
        opacity-0 group-hover:opacity-100
        transition flex items-center justify-center"
                  >
                    <span className="text-white text-sm font-semibold">
                      View Project Preview
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col grow">
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                    MERN E-Commerce Platform
                    <span className="block text-xs text-teal-500 font-medium">
                      Full Stack Web Application
                    </span>
                  </h3>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    <strong>Problem:</strong> Modern online stores require
                    secure user authentication, product management, shopping
                    cart functionality, and order processing in a scalable
                    application.
                    <br />
                    <br />
                    <strong>My Role:</strong> Developed a complete MERN Stack
                    e-commerce platform with authentication, product catalog,
                    cart management, order tracking, payment integration, and
                    admin dashboard.
                    <br />
                    <br />
                    <strong>Result:</strong> Delivered a fully responsive
                    full-stack application that provides a seamless shopping
                    experience for users and powerful management tools for
                    administrators.
                  </p>

                  <ul className="space-y-1 text-xs text-neutral-600 dark:text-neutral-400 mb-4">
                    <li>• JWT Authentication & Authorization</li>
                    <li>• Product, Category & Order Management</li>
                    <li>• Shopping Cart & Checkout System</li>
                    <li>• Admin Dashboard Analytics</li>
                    <li>• REST API Integration</li>
                    <li>• Fully Responsive Design</li>
                  </ul>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-3 text-xs text-neutral-700 dark:text-neutral-300">
                      <span>⚛ React.js</span>
                      <span>🟢 Node.js</span>
                      <span>🚀 Express.js</span>
                      <span>🍃 MongoDB</span>
                      <span>🎨 Tailwind CSS</span>
                      <span>🔄 Redux Toolkit</span>
                    </div>

                    <div className="flex gap-3">
                      <a
                        href="https://mern-ecommerce-pooja.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-500 font-medium hover:underline"
                      >
                        Live ↗
                      </a>

                      <a
                        href="https://github.com/Pooja23494/mern-ecommerce"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-500 font-medium hover:underline"
                      >
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
  );
};

export default Projects;
