import { Reveal } from "./Reveal";
import { Ornament } from "./IslamicArch";
import { motion } from "framer-motion";
import kaaba from "@/assets/hero-kaaba.jpg";
import madinah from "@/assets/madinah.jpg";
import dua from "@/assets/pilgrim-dua.jpg";
import tawaf from "@/assets/tawaf.jpg";
import airport from "@/assets/airport.jpg";
import elder from "@/assets/elder-pilgrim.jpg";
import haram from "@/assets/haram-interior.jpg";

const images = [
  { src: kaaba, alt: "The Holy Kaaba", span: "lg:col-span-2 lg:row-span-2" },
  { src: dua, alt: "Pilgrim in dua", span: "" },
  { src: madinah, alt: "Masjid an-Nabawi", span: "" },
  { src: tawaf, alt: "Tawaf around the Kaaba", span: "lg:col-span-2" },
  { src: airport, alt: "Bangladesh pilgrims at airport", span: "" },
  { src: elder, alt: "Elderly pilgrim moved to tears", span: "" },
  { src: haram, alt: "Haram interior", span: "lg:col-span-2" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-16 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <Ornament className="w-32 mx-auto text-[var(--gold)] mb-6" />
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] font-medium">
            Real moments
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-[var(--midnight)]">
            Glimpses of the journeys we've{" "}
            <em className="not-italic gradient-gold-text">been part of</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] lg:auto-rows-[240px] gap-3 lg:gap-4">
          {images.map((img, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-2xl group shadow-luxe ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--midnight)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <figcaption className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {img.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
