import { Reveal } from "./Reveal";
import { Heart, MessageSquare, Handshake, ShieldCheck, Users2 } from "lucide-react";
import haram from "@/assets/haram-interior.jpg";

const reasons = [
  { icon: Heart, t: "Trusted guidance", s: "We listen first, then suggest the right path for you." },
  { icon: MessageSquare, t: "Clear communication", s: "No confusion. Honest answers, plain language." },
  { icon: Handshake, t: "Face-to-face consultation", s: "Visit any of our 3 offices in Dhaka." },
  { icon: ShieldCheck, t: "End-to-end assistance", s: "From Bangladesh to Saudi and safely back home." },
  { icon: Users2, t: "A team that truly cares", s: "Brothers and sisters serving brothers and sisters." },
];

export function WhyUs() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-5 gap-14 items-center">
        <Reveal className="lg:col-span-2">
          <div className="relative rounded-[2rem] overflow-hidden shadow-luxe">
            <img
              src={haram}
              alt="Interior of Masjid al-Haram with golden chandeliers"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--midnight)]/70 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="font-arabic text-3xl text-[var(--gold-soft)] mb-2">
                وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ
              </p>
              <p className="text-sm text-white/75">
                "And to Allah belongs the pilgrimage to the House for those able." — Qur'an 3:97
              </p>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-3">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] font-medium">
              Why choose Holy Kafela
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-[var(--midnight)] leading-[1.05]">
              The kind of care you'd want for your{" "}
              <em className="not-italic gradient-gold-text">own family.</em>
            </h2>
          </Reveal>

          <div className="mt-10 space-y-4">
            {reasons.map((r, i) => (
              <Reveal key={r.t} delay={i * 0.05}>
                <div className="flex gap-5 p-5 rounded-2xl border border-border bg-card hover:border-[var(--gold)]/40 hover:shadow-luxe transition-all duration-500 group">
                  <div className="shrink-0 size-12 rounded-full bg-[var(--gold)]/10 flex items-center justify-center group-hover:bg-[var(--gold)] transition-colors">
                    <r.icon className="size-5 text-[var(--gold)] group-hover:text-[var(--midnight)] transition-colors" />
                  </div>
                  <div>
                    <div className="font-display text-xl text-[var(--midnight)]">{r.t}</div>
                    <div className="text-sm text-muted-foreground mt-1">{r.s}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
