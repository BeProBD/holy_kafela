import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, Clock3 } from "lucide-react";
import logo from "@/assets/logo.jpg";

const links = [
  { href: "#home", label: "Home" },
  { href: "#packages", label: "Umrah Packages" },
  { href: "#hajj2026", label: "Hajj 2026" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      {/* TOP SUB HEADER */}
      <div
        className={`overflow-hidden bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? "max-h-0 border-b-0 py-0 opacity-0"
            : "max-h-[52px] border-b border-white/10 py-1.5 opacity-100 sm:max-h-[80px] sm:py-3"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 sm:gap-4 sm:px-5 lg:px-8">
          {/* LEFT */}
          <div className="flex flex-wrap items-center gap-3 text-[10px] font-medium sm:gap-5 sm:text-[12px]">
            <div className="hidden items-center gap-2 text-white/90 sm:flex">
              <Clock3 className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span>24/7 Premium Support</span>
            </div>

            <div className="hidden h-4 w-px bg-white/20 sm:block" />

            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="h-3.5 w-3.5" />
              <span>Bangladesh → Saudi Arabia</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-wrap items-center gap-3 text-[10px] sm:gap-5 sm:text-[12px]">
            <a
              href="tel:+8801815380600"
              className="flex items-center gap-2 text-white/90 transition hover:text-white"
            >
              <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              +880 1815-380600
            </a>

            <a
              href="mailto:info@holykafela.com"
              className="hidden items-center gap-2 text-white/90 transition hover:text-white sm:flex"
            >
              <Mail className="h-3.5 w-3.5" />
              info@holykafela.com
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <motion.header
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-slate-200/80 bg-white/80 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur-2xl"
            : "border-b border-slate-100/80 bg-white/92 shadow-[0_4px_30px_rgba(15,23,42,0.04)] backdrop-blur-xl"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 lg:px-8 ${
            scrolled ? "py-3" : "py-4"
          }`}
        >
          {/* LOGO */}
          <a href="#home" className="group flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-emerald-200 blur-xl opacity-50" />

              <img src={logo} alt="Holy Kafela" className="relative h-12 w-auto" />
            </div>

            <div className="hidden leading-none sm:block">
              <div className="font-display text-[1.35rem] font-semibold tracking-tight text-slate-900">
                Holy Kafela
              </div>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-[15px] font-medium text-slate-600 transition-all duration-300 hover:text-emerald-600"
              >
                {l.label}

                <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            {/* CTA */}
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(16,185,129,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(16,185,129,0.38)] md:inline-flex"
            >
              <Phone className="h-4 w-4" />
              Book Consultation
            </a>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:text-emerald-600 lg:hidden"
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3 }}
              className="border-t border-slate-200 bg-white/95 backdrop-blur-2xl lg:hidden"
            >
              <div className="flex flex-col gap-1 px-6 py-6">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-[15px] font-medium text-slate-700 transition-all duration-300 hover:bg-emerald-50 hover:text-emerald-600"
                  >
                    {l.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg"
                >
                  <Phone className="h-4 w-4" />
                  Book Consultation
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}
