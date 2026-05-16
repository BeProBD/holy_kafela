import { MessageCircle, Calendar } from "lucide-react";
import { Reveal } from "./Reveal";
import { Ornament } from "./IslamicArch";
import dua from "@/assets/pilgrim-dua.jpg";

export function CtaSection() {
  return (
    <section id="contact" className="relative py-16 lg:py-16 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={dua}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--midnight)]/95 via-[var(--midnight)]/85 to-[var(--midnight)]/70" />
        <div className="absolute inset-0 pattern-stars opacity-30" />
      </div>

      <div className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center text-white">
        <Reveal>
          <Ornament className="w-32 mx-auto text-[var(--gold)] mb-6" />
          <p className="font-arabic text-3xl text-[var(--gold-soft)] mb-4">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
            When the intention is pure,
            <br />
            <em className="not-italic gradient-gold-text">the path becomes easier.</em>
          </h2>
          <p className="mt-7 text-lg text-white/75 max-w-2xl mx-auto">
            Let us help you take that step. Talk to a real human at Holy Kafela today — no pressure,
            just guidance.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/8801815380600"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#25D366] text-white font-medium shadow-gold hover:scale-[1.03] transition"
            >
              <MessageCircle className="size-5" />
              Message on WhatsApp
            </a>
            <a
              href="tel:+8801815380600"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[var(--primary)] text-white font-medium hover:scale-[1.03] transition"
            >
              <Calendar className="size-5" />
              Book Free Consultation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
