import { Facebook, Globe, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

import logo from "@/assets/logo.png";

const aboutLinks = [
  "Management Board",
  "Sharia Consultant",
  "Umrah Guide",
  "Client Testimonials",
  "Hours and Location",
];

const guidanceLinks = ["Umrah Guideline English", "Umrah Guideline Bangla"];

const facilityLinks = [
  "Visa Processing",
  "Hotel Booking",
  "Ziyarat Tours",
  "Airline Ticketing",
  "Umrah Training",
];

const socials = [
  { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { Icon: Youtube, href: "#", label: "YouTube" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Globe, href: "#", label: "Website" },
];

function BackgroundMosque() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 right-[8%] hidden h-[420px] w-[520px] text-[#172636] opacity-55 lg:block"
      fill="currentColor"
      viewBox="0 0 520 420"
    >
      <path d="M55 420V227h410v193H55Z" opacity=".72" />
      <path d="M118 230c14-96 75-154 142-154s128 58 142 154H118Z" opacity=".9" />
      <path
        d="M155 146c23-47 61-76 105-76s82 29 105 76c-33-26-68-39-105-39s-72 13-105 39Z"
        opacity=".58"
      />
      <path d="M251 48q10-19 28-3-17 0-17 16h-11q0-7 0-13Z" />
      <path d="M260 38q-20-13-1-25-7 14 10 21Z" />
      <path d="M75 228q26-53 72 0H75ZM373 228q26-53 72 0h-72Z" opacity=".82" />
      <path d="M35 420V162h42v258H35ZM443 420V162h42v258h-42Z" />
      <path d="M28 162h56l-10-22H38l-10 22ZM436 162h56l-10-22h-36l-10 22Z" />
      <path d="M40 140V88h32v52H40ZM448 140V88h32v52h-32Z" />
      <path d="M34 88q22-36 44 0H34ZM442 88q22-36 44 0h-44Z" />
      <path d="M54 24h3v39h-3ZM462 24h3v39h-3Z" />
      <g opacity=".3">
        {Array.from({ length: 13 }).map((_, index) => (
          <path
            key={index}
            d={`M${130 + index * 20} 228c-8-36 8-68 20-85 12 17 28 49 20 85h-40Z`}
          />
        ))}
      </g>
    </svg>
  );
}

function LinkColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="font-display text-[1.85rem] font-bold leading-none text-white">{title}</h3>

      <div className="mt-7 space-y-3.5">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
            className="block w-fit text-[15px] font-semibold leading-6 text-white/68 underline decoration-white/35 decoration-1 underline-offset-2 transition hover:text-white hover:decoration-white"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">
      <div className="relative bg-[#263747]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.08),transparent_7%),radial-gradient(circle_at_32%_68%,rgba(255,255,255,0.06),transparent_6%),radial-gradient(circle_at_88%_18%,rgba(255,255,255,0.07),transparent_8%),linear-gradient(90deg,rgba(20,37,53,0.65),rgba(38,55,71,0.9))]" />
        <div className="absolute inset-0 pattern-stars opacity-35" />
        <BackgroundMosque />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-10 pt-16 sm:pt-20 lg:grid-cols-[1.35fr_0.75fr_0.8fr_0.75fr] lg:px-8 lg:pb-12 lg:pt-16">
          <div className="max-w-md">
            <img
              src={logo}
              alt="Holy Kafela"
              className="h-20 w-auto object-contain brightness-0 invert sm:h-24"
            />

            <h3 className="mt-6 font-display text-[1.85rem] font-bold leading-none text-white">
              Corporate Office
            </h3>

            <address className="mt-6 space-y-4 not-italic text-[15px] font-semibold leading-7 text-white/70">
              <a
                href="https://maps.google.com/?q=Azad+Centre+55+Purana+Paltan+Dhaka+1000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 underline decoration-white/35 underline-offset-2 transition hover:text-white"
              >
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-white/80" />
                <span>Suite: 16/B, Azad Centre, 55 Purana Paltan, Dhaka 1000</span>
              </a>

              <a
                href="mailto:info@holykafela.com"
                className="flex items-center gap-2 underline decoration-white/35 underline-offset-2 transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-white/80" />
                info@holykafela.com
              </a>

              <div className="flex gap-2">
                <Phone className="mt-1.5 h-4 w-4 shrink-0 text-white/80" />
                <div className="space-y-1">
                  <a
                    href="tel:+8801815380600"
                    className="block underline decoration-white/35 underline-offset-2 transition hover:text-white"
                  >
                    +88 01815-380600
                  </a>
                  <a
                    href="tel:+8801886250603"
                    className="block underline decoration-white/35 underline-offset-2 transition hover:text-white"
                  >
                    +88 01886-250603
                  </a>
                </div>
              </div>
            </address>

            <div className="mt-7 flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-white/8 text-white/78 transition hover:-translate-y-0.5 hover:bg-white hover:text-[#263747]"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <LinkColumn title="About Us" links={aboutLinks} />
          <LinkColumn title="Guidance" links={guidanceLinks} />
          <LinkColumn title="Facilities" links={facilityLinks} />
        </div>

        <div className="relative border-t border-white/10 px-5 py-5">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-center text-sm text-white/55 md:flex-row md:text-left">
            <p>© {new Date().getFullYear()} Holy Kafela. All rights reserved.</p>
            <p className="font-bangla">পবিত্র যাত্রার বিশ্বস্ত সঙ্গী - Holy Kafela</p>
            <p>
              Developed by{" "}
              <a
                href="https://it.bepro.com.bd/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#47D8B5] underline decoration-white/35 underline-offset-2 transition hover:text-white hover:decoration-white"
              >
                BePro IT
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
