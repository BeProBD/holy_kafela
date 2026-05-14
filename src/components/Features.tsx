import {
  ArrowRight,
  Moon,
  FileCheck2,
  PlaneTakeoff,
  BedDouble,
  Compass,
  Headphones,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { Ornament } from "./IslamicArch";

const items = [
  {
    icon: Moon,
    title: "Hajj & Umrah Packages",
    desc: "Carefully designed spiritual journeys tailored to your comfort, schedule, and budget.",
  },
  {
    icon: FileCheck2,
    title: "Visa Processing",
    desc: "Fast, reliable, and transparent Saudi visa assistance with complete guidance.",
  },
  {
    icon: PlaneTakeoff,
    title: "Flight Booking",
    desc: "Affordable direct and transit flight arrangements from Bangladesh.",
  },
  {
    icon: BedDouble,
    title: "Hotel Arrangement",
    desc: "Premium accommodation close to Haram for a peaceful and comfortable stay.",
  },
  {
    icon: Compass,
    title: "Guided Ziyarat",
    desc: "Experienced Bangla-speaking Islamic guides for your sacred journey.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Continuous assistance from departure to return with dedicated support.",
  },
];

export function Features() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAF8] py-16 text-slate-900">
      {/* background */}
      <div className="absolute inset-0">
        {/* soft gradients */}
        <div className="absolute left-[-120px] top-0 h-[380px] w-[380px] rounded-full bg-emerald-100/70 blur-3xl" />

        <div className="absolute bottom-[-120px] right-[-120px] h-[420px] w-[420px] rounded-full bg-teal-100/70 blur-3xl" />

        {/* grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:54px_54px]" />
      </div>

      {/* top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* heading */}
        <Reveal className="mx-auto mb-20 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2 shadow-sm">
            <Sparkles className="h-4 w-4 text-emerald-500" />

            <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-600">
              What We Offer
            </span>
          </div>

          <Ornament className="mx-auto mt-7 w-32 text-emerald-500 opacity-90" />

          <h2 className="mt-7 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-slate-900 md:text-5xl lg:text-6xl">
            Everything Managed
            <span className="mt-2 block bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-700 bg-clip-text text-transparent">
              With Excellence & Care
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-[16px] leading-8 text-slate-600">
            From visa processing to hotel arrangements and guided Ziyarat, we provide a complete
            premium Hajj & Umrah experience with comfort, trust, and Islamic values.
          </p>
        </Reveal>

        {/* cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-emerald-900/10 bg-white/70 p-[1px] shadow-[0_18px_55px_rgba(15,23,42,0.06)] backdrop-blur"
            >
              {/* soft glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.9),rgba(220,238,230,0.55))]" />

              {/* hover glow */}
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-emerald-300/25 blur-3xl opacity-0 transition-all duration-700 group-hover:opacity-100" />

              {/* main content */}
              <div className="relative h-full rounded-[29px] bg-white/62 p-7 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 sm:p-8">
                {/* top */}
                <div className="flex items-start justify-between">
                  {/* icon area */}
                  <div className="relative flex h-[86px] w-[86px] items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-emerald-200/70 bg-emerald-50/70 transition-all duration-500 group-hover:scale-105 group-hover:border-emerald-300" />
                    <div className="absolute inset-2 rounded-full border border-white bg-white/80 shadow-[0_18px_45px_rgba(15,23,42,0.08)]" />
                    <div className="absolute right-0 top-2 h-5 w-5 rounded-full bg-teal-400 shadow-[0_8px_18px_rgba(20,184,166,0.3)] transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    <div className="relative flex h-[58px] w-[58px] items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-[0_16px_32px_rgba(16,185,129,0.28)] transition-all duration-500 group-hover:scale-105">
                      <it.icon className="h-7 w-7" strokeWidth={1.9} />
                    </div>
                  </div>

                  {/* number */}
                  <div className="rounded-full border border-emerald-100 bg-white/75 px-3 py-1.5 text-right shadow-sm">
                    <div className="text-xs font-bold tracking-[0.18em] text-emerald-700">
                      0{i + 1}
                    </div>
                  </div>
                </div>

                {/* content */}
                <div className="mt-8">
                  <h3 className="font-display text-[1.75rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0F172A] sm:text-[1.9rem]">
                    {it.title}
                  </h3>

                  <p className="mt-5 text-[15px] leading-8 text-slate-600">{it.desc}</p>
                </div>

                {/* bottom */}
                <div className="mt-9 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-[2px] w-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500 group-hover:w-16" />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700 sm:text-[11px]">
                      Luxury Service
                    </span>
                  </div>

                  {/* button */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald-100 bg-white/80 text-emerald-700 shadow-sm transition-all duration-500 group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:text-white">
                    <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
