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
    <section id="testimonials" className="relative overflow-hidden bg-cream py-20">
      {/* subtle bg */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[var(--primary)]/12 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[var(--gold)]/16 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        {/* heading */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/25 bg-white px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[var(--gold)]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
              Testimonials
            </span>
          </div>

          <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-900 md:text-5xl">
            What pilgrims say
          </h2>
        </div>

        {/* card */}
        <div className="mx-auto mt-10 max-w-4xl sm:mt-12 sm:px-4 lg:px-0">
          <div className="relative flex flex-col gap-5 sm:gap-6 md:flex-row md:items-center">
            {/* Left button */}
            <button
              onClick={handlePrev}
              className="hidden h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[var(--secondary)] text-[var(--primary)] shadow-md transition-all duration-300 hover:bg-[var(--gold)]/15 hover:shadow-lg md:flex"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>

            {/* Card */}
            <div className="relative flex min-h-[420px] flex-1 flex-col overflow-hidden rounded-[24px] border border-[var(--gold)]/25 bg-white px-5 py-7 shadow-[0_12px_40px_rgba(15,23,42,0.08)] sm:min-h-[390px] sm:rounded-[30px] sm:px-7 sm:py-8 md:px-10">
              <div className="flex items-center justify-between flex-shrink-0">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--secondary)] text-[var(--primary)]">
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
                    <blockquote className="mt-6 font-display text-[1.35rem] leading-[1.45] tracking-[-0.03em] text-slate-800 sm:text-[1.55rem] md:text-[1.8rem]">
                      “{testimonial.text}”
                    </blockquote>

                    <div className="mt-7 border-t border-[var(--gold)]/20 pt-5">
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>

                      <div className="mt-1 text-sm text-slate-500">{testimonial.role}</div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* progress */}
              <div className="mt-6 h-[3px] overflow-hidden rounded-full bg-[var(--secondary)] flex-shrink-0">
                <motion.div
                  key={active}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 4.5,
                    ease: "linear",
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--gold)]"
                />
              </div>

              {/* dots */}
              <div className="mt-5 flex justify-center gap-2 flex-shrink-0">
                {quotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === active ? "w-7 bg-[var(--gold)]" : "w-2 bg-[var(--secondary)]"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right button */}
            <button
              onClick={handleNext}
              className="hidden h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[var(--secondary)] text-[var(--primary)] shadow-md transition-all duration-300 hover:bg-[var(--gold)]/15 hover:shadow-lg md:flex"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-7 w-7" />
            </button>

            <div className="flex justify-center gap-3 md:hidden">
              <button
                onClick={handlePrev}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--secondary)] text-[var(--primary)] shadow-md transition-all duration-300 hover:bg-[var(--gold)]/15"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={handleNext}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--secondary)] text-[var(--primary)] shadow-md transition-all duration-300 hover:bg-[var(--gold)]/15"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
