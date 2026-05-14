import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Features } from "../components/Features";
import { Packages } from "../components/Packages";
import { Gallery } from "../components/Gallery";
import { Testimonials } from "../components/Testimonials";
import { WhyUs } from "../components/WhyUs";
import { CtaSection } from "../components/CtaSection";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Packages />
      <Gallery />
      <WhyUs />
      <CtaSection />
      <Testimonials />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
