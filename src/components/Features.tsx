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
    <section className="relative overflow-hidden bg-[#f8f5ec] py-20 text-slate-900 sm:py-24">
      <div className="absolute inset-0 pattern-islamic opacity-60" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/70 to-transparent" />
      <div className="absolute left-[-180px] top-16 h-[420px] w-[420px] rounded-full bg-[#0f6b4f]/10 blur-3xl" />
      <div className="absolute bottom-[-180px] right-[-140px] h-[460px] w-[460px] rounded-full bg-[var(--gold)]/14 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center sm:mb-18">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/35 bg-white/75 px-4 py-2 shadow-[0_12px_35px_rgba(8,26,61,0.06)] backdrop-blur">
            <Sparkles className="h-4 w-4 text-[var(--gold)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
              What We Offer
            </span>
          </div>

          <Ornament className="mx-auto mt-7 w-36 text-[var(--gold)] opacity-90" />

          <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-[var(--midnight)] md:text-5xl lg:text-6xl">
            Everything Managed
            <span className="mt-2 block text-[#0f6b4f]">With Excellence & Care</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-8 text-slate-600">
            From visa processing to hotel arrangements and guided Ziyarat, we provide a complete
            premium Hajj & Umrah experience with comfort, trust, and Islamic values.
          </p>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
          {items.map((it, i) => {
            const featured = i === 0;
            const compact = i >= 3;

            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                }}
                className={`group relative overflow-hidden border border-[var(--gold)]/25 bg-white/82 shadow-[0_18px_55px_rgba(8,26,61,0.07)] backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-[var(--gold)]/45 hover:shadow-[0_24px_70px_rgba(8,26,61,0.1)] ${
                  featured
                    ? "min-h-[390px] rounded-t-[120px] rounded-b-[32px] p-7 sm:p-9 lg:col-span-5 lg:row-span-2 lg:min-h-[560px] lg:p-10"
                    : compact
                      ? "rounded-t-[72px] rounded-b-[28px] p-6 sm:p-7 lg:col-span-4"
                      : "rounded-[28px] p-6 sm:p-7 lg:col-span-7"
                }`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(248,245,236,0.72))]" />
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/70 to-transparent" />
                <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full border border-[var(--gold)]/20" />
                <div className="absolute -bottom-24 left-8 h-44 w-44 rounded-full bg-[#0f6b4f]/8 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {featured ? (
                  <div className="relative flex h-full flex-col justify-between">
                    <div>
                      <div className="mx-auto flex h-28 w-24 items-center justify-center rounded-t-full rounded-b-[34px] border border-[var(--gold)]/45 bg-[#fffaf0] text-[var(--primary)] shadow-[0_18px_45px_rgba(8,26,61,0.08)] transition-transform duration-500 group-hover:-translate-y-1">
                        <it.icon className="h-10 w-10" strokeWidth={1.7} />
                      </div>

                      <div className="mt-9 text-center">
                        <div className="mx-auto mb-5 flex w-fit items-center gap-3">
                          <span className="h-px w-10 bg-[var(--gold)]/60" />
                          <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[#0f6b4f]">
                            0{i + 1}
                          </span>
                          <span className="h-px w-10 bg-[var(--gold)]/60" />
                        </div>

                        <h3 className="font-display text-4xl font-semibold leading-[1.05] text-[var(--midnight)] sm:text-5xl">
                          {it.title}
                        </h3>

                        <p className="mx-auto mt-6 max-w-sm text-[16px] leading-8 text-slate-600">
                          {it.desc}
                        </p>
                      </div>
                    </div>

                    <div className="mt-10 rounded-[24px] border border-[var(--gold)]/25 bg-[#f8f5ec]/75 p-5">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
                          Complete Journey Care
                        </span>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-white transition-transform duration-500 group-hover:translate-x-1">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : compact ? (
                  <div className="relative flex h-full flex-col text-center">
                    <div className="mx-auto flex h-20 w-16 items-center justify-center rounded-t-full rounded-b-[24px] border border-[var(--gold)]/35 bg-[#fffaf0] text-[#0f6b4f] shadow-[0_14px_36px_rgba(8,26,61,0.06)] transition-all duration-500 group-hover:border-[var(--gold)]/70 group-hover:text-[var(--primary)]">
                      <it.icon className="h-7 w-7" strokeWidth={1.8} />
                    </div>

                    <div className="mx-auto mt-6 flex w-full max-w-[220px] items-center gap-3">
                      <span className="h-px flex-1 bg-[var(--gold)]/35" />
                      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">
                        0{i + 1}
                      </span>
                      <span className="h-px flex-1 bg-[var(--gold)]/35" />
                    </div>

                    <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-[var(--midnight)] sm:text-[1.7rem]">
                      {it.title}
                    </h3>

                    <p className="mx-auto mt-4 max-w-sm flex-1 text-[15px] leading-7 text-slate-600">
                      {it.desc}
                    </p>

                    <div className="mx-auto mt-7 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--gold)]/35 bg-white text-[var(--primary)] transition-all duration-500 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white">
                      <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                ) : (
                  <div className="relative grid gap-5 sm:grid-cols-[88px_1fr_auto] sm:items-center">
                    <div className="flex h-24 w-20 items-center justify-center rounded-t-full rounded-b-[28px] border border-[var(--gold)]/35 bg-[#fffaf0] text-[#0f6b4f] shadow-[0_14px_36px_rgba(8,26,61,0.06)] transition-all duration-500 group-hover:border-[var(--gold)]/70 group-hover:text-[var(--primary)]">
                      <it.icon className="h-8 w-8" strokeWidth={1.8} />
                    </div>

                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">
                          0{i + 1}
                        </span>
                        <span className="h-px flex-1 bg-[var(--gold)]/25" />
                      </div>

                      <h3 className="font-display text-2xl font-semibold leading-tight text-[var(--midnight)] sm:text-3xl">
                        {it.title}
                      </h3>

                      <p className="mt-3 max-w-2xl text-[15px] leading-7 text-slate-600">
                        {it.desc}
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--gold)]/35 bg-white text-[var(--primary)] transition-all duration-500 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white sm:ml-2">
                      <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
