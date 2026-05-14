import { motion } from "framer-motion";
import { Check, Plane, Hotel, FileCheck, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { Ornament } from "./IslamicArch";

const packages = [
  {
    name: "Standard Economy",
    bn: "স্ট্যান্ডার্ড ইকোনমি",
    price: "৳1,35,000",
    sub: "Transit Flight · ৳1,45,000 Direct",
    distance: "600–800 m from Haram",
    features: [
      "Visa (VISA) processing",
      "Round-trip air ticket",
      "Hotel accommodation",
      "Madinah ziyarah (visit)",
      "Group guide support",
      "Airport assistance",
    ],
    accent: false,
  },
  {
    name: "Premium",
    bn: "প্রিমিয়াম",
    price: "৳1,89,999",
    sub: "Direct Flight · 4★ Hotel",
    distance: "0–500 m from Haram",
    features: [
      "Priority visa processing",
      "Direct return flight",
      "4-star hotel near Haram",
      "Guided Ziyarat in Madinah",
      "Daily breakfast & dinner",
      "Experienced Bangla guide",
      "Workshop & training",
    ],
    accent: true,
  },
  {
    name: "VIP Platinum",
    bn: "ভিআইপি প্ল্যাটিনাম",
    price: "৳2,49,999",
    sub: "Direct Flight · 5★ Service",
    distance: "0–500 m from Haram",
    features: [
      "Premium 5-star accommodation",
      "Direct flights, business comfort",
      "Private guided Ziyarat",
      "Concierge support 24/7",
      "Full meal arrangements",
      "Personal travel manager",
      "Bangladesh ↔ Saudi assistance",
    ],
    accent: false,
  },
];

export function Packages() {
  return (
    <section id="packages" className="relative py-16 bg-cream pattern-islamic overflow-hidden">
      <span id="hajj2026" className="absolute -top-24" aria-hidden="true" />
      {/* <div className="absolute inset-0 gradient-radiance" /> */}

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <Ornament className="w-44 mx-auto text-[var(--gold)] mb-6" />
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] font-medium">
            Hajj 2026 · Post-Hajj Umrah
          </p>
          <h2 className="mt-5 font-display text-4xl md:text-6xl text-[var(--midnight)] leading-tight">
            Packages crafted for your{" "}
            <em className="not-italic gradient-gold-text">sacred journey</em>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Three thoughtfully arranged paths to the Haramain — choose the comfort that fits your
            family, your budget, and your intention.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-7 lg:gap-6">
          {packages.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative rounded-3xl p-8 lg:p-10 border transition-all duration-500 ${
                p.accent
                  ? "bg-gradient-to-b from-[var(--midnight)] to-[oklch(0.1_0.03_255)] text-white border-[var(--gold)]/40 lg:-translate-y-4 shadow-luxe"
                  : "bg-white border-[var(--gold)]/15 hover:border-[var(--gold)]/40 hover:shadow-luxe hover:-translate-y-2"
              }`}
            >
              {p.accent && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] text-[var(--midnight)] text-xs font-semibold uppercase tracking-wider">
                  Most Loved
                </div>
              )}

              {/* Decorative arch border top */}
              <svg
                className={`absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 ${
                  p.accent ? "text-[var(--gold)]" : "text-[var(--gold)]/40"
                }`}
                viewBox="0 0 100 24"
                fill="none"
              >
                <path d="M5 24 V12 A 20 12 0 0 1 95 12 V24" stroke="currentColor" strokeWidth="1" />
              </svg>

              <div className="text-center mb-7">
                <h3
                  className={`font-display text-3xl ${
                    p.accent ? "text-[var(--gold)]" : "text-[var(--midnight)]"
                  }`}
                >
                  {p.name}
                </h3>
                <p
                  className={`font-bangla text-sm mt-1 ${
                    p.accent ? "text-white/60" : "text-muted-foreground"
                  }`}
                >
                  {p.bn}
                </p>
              </div>

              <div className="text-center mb-7">
                <div
                  className={`font-display text-5xl ${
                    p.accent ? "gradient-gold-text" : "text-[var(--midnight)]"
                  }`}
                >
                  {p.price}
                </div>
                <p
                  className={`text-xs mt-2 ${p.accent ? "text-white/55" : "text-muted-foreground"}`}
                >
                  {p.sub}
                </p>
                <p
                  className={`text-[11px] mt-1 uppercase tracking-wider ${
                    p.accent ? "text-[var(--gold-soft)]/80" : "text-[var(--gold)]"
                  }`}
                >
                  {p.distance}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className={`flex gap-3 text-sm ${
                      p.accent ? "text-white/85" : "text-foreground/80"
                    }`}
                  >
                    <Check
                      className={`size-4 mt-0.5 shrink-0 ${
                        p.accent ? "text-[var(--gold)]" : "text-[var(--emerald-deep)]"
                      }`}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-3.5 rounded-full font-medium text-sm transition ${
                  p.accent
                    ? "bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] text-[var(--midnight)] hover:scale-[1.02]"
                    : "border border-[var(--midnight)]/15 text-[var(--midnight)] hover:bg-[var(--midnight)] hover:text-white"
                }`}
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>

        {/* Inclusions strip */}
        <Reveal className="mt-20">
          <div className="rounded-3xl bg-white/70 backdrop-blur border border-[var(--gold)]/20 p-8 lg:p-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {[
              { icon: FileCheck, t: "Visa Processing", s: "Hands-on, no surprises" },
              { icon: Plane, t: "Air Ticket", s: "Biman, Saudia, US-Bangla" },
              { icon: Hotel, t: "Hotel & Transport", s: "Close to Haram" },
              { icon: Sparkles, t: "Ziyarat Guidance", s: "Experienced Bangla guides" },
            ].map((x) => (
              <div key={x.t} className="flex items-start gap-4">
                <div className="rounded-xl bg-[var(--gold)]/10 p-3">
                  <x.icon className="size-5 text-[var(--gold)]" />
                </div>
                <div>
                  <div className="font-medium text-[var(--midnight)]">{x.t}</div>
                  <div className="text-sm text-muted-foreground">{x.s}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
