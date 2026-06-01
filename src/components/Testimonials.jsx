import React from "react";

const Testimonials = () => {
  return (
    <section
      id="testimonial"
      className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-500"
      data-reveal
    >
      <div className="max-w-5xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-teal-500/10 text-teal-500 text-sm font-medium mb-4">
            Client Feedback
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white">
            Client <span className="text-teal-500">Testimonial</span>
          </h2>

          <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Feedback from a client highlighting the quality, professionalism,
            and effectiveness of my front-end development work.
          </p>
        </div>

        {/* Testimonial Card */}
        <div
          className="relative p-8 md:p-10 rounded-3xl
          bg-neutral-100 dark:bg-neutral-900
          border border-neutral-200 dark:border-neutral-800
          shadow-xl hover:shadow-2xl
          transition-all duration-300"
        >
          {/* Quote Icon */}
          <div className="absolute -top-5 left-8">
            <div
              className="w-12 h-12 rounded-full
              bg-teal-500 text-black
              flex items-center justify-center
              text-3xl font-bold shadow-lg"
            >
              "
            </div>
          </div>

          <p className="mt-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 italic">
            Excellent, working with Pooja was a great experience. Thanks to her
            knowledge and dedication, our website looks professional, performs
            smoothly, and provides a much better experience for our customers.
          </p>

          {/* Client Info */}
          <div className="mt-8 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-teal-500 flex items-center justify-center text-black font-bold text-lg">
              SS
            </div>

            <div>
              <h4 className="font-bold text-lg text-neutral-900 dark:text-white">
                Sunil Sharma
              </h4>

              <p className="text-sm text-neutral-500">
                Owner • Shivaji Good Poha Website
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="mt-6 flex gap-1 text-yellow-400 text-xl">
            ⭐ ⭐ ⭐ ⭐ ⭐
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
