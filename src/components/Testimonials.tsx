import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const quotes = [
  {
    text: "They guided us like family. From visa to ziyarat in Madinah, every detail was handled with care. My elderly mother completed her Hajj without a single worry.",
    name: "Rahima Begum",
    role: "Hajj 2025 · Mirpur, Dhaka",
  },
  {
    text: "Everything was handled so smoothly. I didn't have to worry about anything — they took care of flights, hotels, even our food.",
    name: "Md. Karim Hossain",
    role: "Umrah 2025 · Polton",
  },
  {
    text: "Honest pricing, honest people. They listened to our budget and recommended the right package. Absolute trust.",
    name: "Tanvir Ahmed",
    role: "Umrah 2024 · Kazipara",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % quotes.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const testimonial = quotes[active];

  const handleNext = () => {
    setActive((prev) => (prev + 1) % quotes.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#F6FAF8] py-20">
      {/* subtle bg */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-teal-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        {/* heading */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700">
              Testimonials
            </span>
          </div>

          <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-900 md:text-5xl">
            What pilgrims say
          </h2>
        </div>

        {/* card */}
        <div className="mx-auto mt-12 max-w-4xl px-4 lg:px-0">
          <div className="relative flex items-center gap-4 md:gap-6">
            {/* Left button */}
            <button
              onClick={handlePrev}
              className="flex-shrink-0 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
            </button>

            {/* Card */}
            <div className="relative flex flex-col h-[400px] flex-1 overflow-hidden rounded-[30px] border border-emerald-100 bg-white px-7 py-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)] md:px-10">
              <div className="flex items-center justify-between flex-shrink-0">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-emerald-500 text-emerald-500" />
                  ))}
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <Quote className="h-5 w-5" />
                </div>
              </div>

              {/* animated content - grows to fill available space */}
              <div className="flex-1 flex items-center min-h-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{
                      opacity: 0,
                      y: 14,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -14,
                    }}
                    transition={{
                      duration: 0.45,
                    }}
                    className="w-full"
                  >
                    <blockquote className="mt-6 font-display text-[1.45rem] leading-[1.5] tracking-[-0.03em] text-slate-800 md:text-[1.8rem]">
                      “{testimonial.text}”
                    </blockquote>

                    <div className="mt-7 border-t border-emerald-100 pt-5">
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>

                      <div className="mt-1 text-sm text-slate-500">{testimonial.role}</div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* progress */}
              <div className="mt-6 h-[3px] overflow-hidden rounded-full bg-emerald-100 flex-shrink-0">
                <motion.div
                  key={active}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 4.5,
                    ease: "linear",
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
                />
              </div>

              {/* dots */}
              <div className="mt-5 flex justify-center gap-2 flex-shrink-0">
                {quotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === active ? "w-7 bg-emerald-500" : "w-2 bg-emerald-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right button */}
            <button
              onClick={handleNext}
              className="flex-shrink-0 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
