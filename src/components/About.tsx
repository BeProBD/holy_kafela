import { Reveal } from "./Reveal";
import { Ornament } from "./IslamicArch";
import madinah from "@/assets/madinah.jpg";
import elder from "@/assets/elder-pilgrim.jpg";

export function About() {
  return (
    <section id="about" className="relative py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <Reveal>
          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-luxe">
              <img
                src={madinah}
                alt="Masjid an-Nabawi at twilight"
                width={1280}
                height={960}
                loading="lazy"
                className="w-full h-[520px] object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-6 w-48 h-64 rounded-2xl overflow-hidden shadow-luxe border-4 border-background hidden md:block">
              <img
                src={elder}
                alt="Elderly pilgrim moved to tears at the Kaaba"
                width={1024}
                height={1280}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-[var(--gold)]/15 blur-2xl" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Ornament className="w-32 text-[var(--gold)] mb-5 -ml-2" />
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] font-medium">
            About Holy Kafela
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-[var(--midnight)] leading-[1.05]">
            This isn't just travel.
            <br />
            <em className="not-italic gradient-gold-text">It's a sacred journey.</em>
          </h2>

          <div className="mt-7 space-y-5 text-foreground/75 text-lg leading-relaxed">
            <p>
              At Holy Kafela, we understand how important this journey is for you and your family.
              It's not just travel — it's something you've been waiting for, praying for.
            </p>
            <p>
              That's why we stay with you at every step — from the first conversation to your visa,
              your flight, your stay near the Haram, your ziyarat in Madinah, and your safe return
              home.
            </p>
            <p className="font-bangla text-base text-foreground/65 italic border-l-2 border-[var(--gold)] pl-5">
              "যখন নিয়ত খাঁটি হয়, পথ সহজ হয়ে যায়।" — আমরা সেই পথের সঙ্গী হতে চাই।
            </p>
          </div>

          <div className="mt-9 grid grid-cols-3 gap-5">
            {[
              ["12+", "Years of service"],
              ["3", "Office locations"],
              ["24/7", "Saudi support"],
            ].map(([n, l]) => (
              <div key={l} className="border-l-2 border-[var(--gold)] pl-4">
                <div className="font-display text-3xl text-[var(--midnight)]">{n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
