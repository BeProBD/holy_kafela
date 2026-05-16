import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Plane, ShieldCheck, Star, Users } from "lucide-react";

import heroImg from "@/assets/hero-kaaba.jpg";

const stats = [
  { icon: Users, number: "5K+", label: "Pilgrims" },
  { icon: ShieldCheck, number: "99%", label: "Visa Success" },
  { icon: Plane, number: "24/7", label: "Support" },
];

const imageTags = ["Visa", "Hotel", "Guide", "Support"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream text-slate-900">
      <div className="absolute inset-0">
        <div className="absolute left-[-160px] top-[-130px] h-[430px] w-[430px] rounded-full bg-[var(--gold)]/16 blur-3xl" />
        <div className="absolute right-[-120px] top-[120px] h-[390px] w-[390px] rounded-full bg-[var(--gold)]/18 blur-3xl" />
        <div className="absolute bottom-[-140px] left-[24%] h-[320px] w-[320px] rounded-full bg-[var(--gold-soft)]/25 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(8,26,61,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(8,26,61,0.035)_1px,transparent_1px)] bg-[size:52px_52px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-12 pt-32 sm:pb-14 sm:pt-32 lg:px-8 lg:pb-20 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(440px,560px)]">
          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto mb-7 overflow-hidden rounded-[28px] shadow-[0_24px_70px_rgba(15,23,42,0.16)] lg:hidden"
            >
              <div className="aspect-[4/3] min-h-[280px]">
                <img
                  src={heroImg}
                  alt="Holy Kaaba"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/16 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/25" />

              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/50 bg-white/90 px-3 py-2 text-left shadow-[0_14px_40px_rgba(15,23,42,0.12)] backdrop-blur">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--gold)]/15">
                  <Star className="h-4 w-4 text-[var(--gold)]" />
                </div>
                <div>
                  <p className="text-[10px] leading-none text-slate-500">Rated</p>
                  <h4 className="mt-1 text-xs font-semibold leading-none text-slate-900">
                    4.9/5 Service
                  </h4>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur-md">
                  <div className="h-2 w-2 rounded-full bg-[var(--gold)]" />
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/85">
                    Complete Journey Care
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {imageTags.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/20 bg-white/14 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="font-display text-[2.75rem] font-semibold leading-[0.94] text-slate-900 sm:text-[3.25rem] lg:mt-6 lg:text-[4.85rem]"
            >
              Hajj & Umrah
              <span className="block bg-gradient-to-r from-[var(--primary)] via-[var(--gold)] to-[var(--midnight)] bg-clip-text text-transparent">
                Made Simple
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-5 max-w-lg text-[15px] leading-7 text-slate-600 sm:text-[16px] sm:leading-8 lg:mx-0"
            >
              Premium visa assistance, hotel booking, Islamic guidance, and full travel support from
              Bangladesh to Saudi Arabia.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-3 max-w-lg text-[14px] leading-7 text-slate-500 sm:text-[15px] lg:mx-0"
            >
              {" "}
              Reliable Hajj and Umrah service with modern management and complete guidance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 lg:mt-9 lg:justify-start"
            >
              <a
                href="https://wa.me/8801815380600"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(18,60,140,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(18,60,140,0.38)]"
              >
                <MessageCircle className="h-4.5 w-4.5" />
                WhatsApp Consultation
              </a>

              <a
                href="#packages"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold)]/50 hover:text-[var(--primary)]"
              >
                Explore Packages
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 grid grid-cols-3 gap-2 sm:mt-12 sm:gap-3"
            >
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white bg-white/85 p-3 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-4"
                >
                  <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:gap-3 sm:text-left">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--secondary)] sm:h-11 sm:w-11">
                      <item.icon className="h-4.5 w-4.5 text-[var(--primary)] sm:h-5 sm:w-5" />
                    </div>

                    <div>
                      <div className="text-xl font-bold leading-none text-slate-900 sm:text-2xl">
                        {item.number}
                      </div>
                      <div className="mt-1 text-[9px] uppercase tracking-[0.12em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
                        {item.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative hidden min-h-[570px] lg:block"
          >
            <div className="absolute -right-8 top-8 h-52 w-52 rounded-full bg-[var(--primary)]/18 blur-3xl" />
            <div className="absolute -bottom-6 -left-8 h-48 w-48 rounded-full bg-[var(--gold)]/25 blur-3xl" />

            <div className="absolute left-6 top-4 z-20 flex items-center gap-3 rounded-full border border-white/70 bg-white/90 px-4 py-3 shadow-[0_18px_50px_rgba(15,23,42,0.12)] backdrop-blur">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gold)]/15">
                <Star className="h-5 w-5 text-[var(--gold)]" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Rated by pilgrims</p>
                <h4 className="text-base font-semibold text-slate-900">4.9/5 Service</h4>
              </div>
            </div>

            <div className="absolute bottom-7 right-7 z-20 flex min-h-[64px] items-center gap-3 rounded-full border border-white/70 bg-white/90 px-4 py-3 text-slate-900 shadow-[0_18px_50px_rgba(15,23,42,0.12)] backdrop-blur">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--secondary)] text-sm font-bold text-[var(--primary)]">
                ৳
              </div>
              <div>
                <p className="text-xs text-slate-500">Package starts</p>
                <div className="text-base font-semibold leading-tight">BDT 1.85L</div>
              </div>
            </div>

            <div className="relative ml-auto h-[560px] w-[92%] overflow-hidden rounded-[34px] shadow-[0_34px_110px_rgba(15,23,42,0.18)]">
              <img
                src={heroImg}
                alt="Holy Kaaba"
                className="h-full w-full scale-[1.02] object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/78 via-slate-950/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/18 via-transparent to-[var(--gold)]/18" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/25" />

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="max-w-sm">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-md">
                    <div className="h-2 w-2 rounded-full bg-[var(--gold)]" />
                    <span className="text-[11px] uppercase tracking-[0.22em] text-white/80">
                      Complete Journey Care
                    </span>
                  </div>

                  <h3 className="mt-4 text-3xl font-semibold leading-tight text-white">
                    Peaceful planning for a sacred journey.
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {imageTags.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/20 bg-white/12 px-3 py-1.5 text-xs font-medium text-white/85 backdrop-blur"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
