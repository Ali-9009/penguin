
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShieldAlert, Snowflake } from "lucide-react";
import { SiVisa, SiAmericanexpress, SiPaypal } from "react-icons/si";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Shop All", href: "/shop" },
      { label: "COA", href: "/coa" },
      { label: "Partner Program", href: "/partner-program" },
      { label: "Track Order", href: "/track-order" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Research Disclaimer", href: "/research-disclaimer" },
    ],
  },
];


const footerStars = Array.from({ length: 100 }, (_, index) => {
  const seed = (index * 137.508) % 100;

  return {
    left: `${seed}%`,
    top: `${(index * 73.37) % 100}%`,
    size: index % 7 === 0 ? 2 : index % 3 === 0 ? 1.5 : 1,
    opacity: 0.15 + ((index * 13) % 35) / 100,
    duration: 3 + (index % 6),
    delay: (index % 12) * -0.7,
  };
});

const footerSnowflakes = Array.from({ length: 22 }, (_, index) => ({
  left: `${(index * 47.31 + 8) % 100}%`,
  top: `${(index * 29.73 + 5) % 100}%`,
  size: 10 + (index % 5) * 5,
  opacity: 0.08 + (index % 4) * 0.035,
  duration: 12 + (index % 7) * 3,
  delay: (index % 8) * -2,
}));

const footerLargeSnowflakes = [
  {
    left: "5%",
    top: "12%",
    size: 155,
    opacity: 0.07,
    rotate: -18,
  },
  {
    left: "78%",
    top: "8%",
    size: 200,
    opacity: 0.06,
    rotate: 20,
  },
  {
    left: "48%",
    top: "42%",
    size: 145,
    opacity: 0.045,
    rotate: -12,
  },
  {
    left: "88%",
    top: "65%",
    size: 170,
    opacity: 0.065,
    rotate: 25,
  },
  {
    left: "12%",
    top: "78%",
    size: 125,
    opacity: 0.045,
    rotate: 15,
  },
];

const paymentMethods = [
  {
    name: "Visa",
    icon: SiVisa,
    color: "#1434CB",
  },
  {
    name: "American Express",
    icon: SiAmericanexpress,
    color: "#2E77BC",
  },
  {
    name: "PayPal",
    icon: SiPaypal,
    color: "#0070BA",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("");

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    setNewsletterStatus("Newsletter subscriptions are not available yet.");
  };

  return (
    <footer className="relative isolate w-full overflow-hidden bg-[#041B2D] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[2px] bg-gradient-to-r from-[#07558F] via-[#04C1CA] to-[#07558F]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,#020B17_0%,#041B2D_38%,#062B48_72%,#031321_100%)]" />

      <div className="pointer-events-none absolute -top-48 -right-48 h-[600px] w-[600px] rounded-full bg-[#04C1CA]/8 blur-[150px]" />

      <div className="pointer-events-none absolute -bottom-60 -left-40 h-[550px] w-[550px] rounded-full bg-[#07558F]/15 blur-[140px]" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      >
        {footerStars.map((star, index) => (
          <span
            key={`footer-star-${index}`}
            className="footer-star absolute rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              "--star-opacity": star.opacity,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
      >
        {footerLargeSnowflakes.map((flake, index) => (
          <Snowflake
            key={`footer-large-flake-${index}`}
            strokeWidth={0.65}
            className="footer-large-snowflake absolute text-[#BCEEF5]"
            style={{
              left: flake.left,
              top: flake.top,
              width: flake.size,
              height: flake.size,
              opacity: flake.opacity,
              "--flake-rotation": `${flake.rotate}deg`,
              animationDelay: `${index * -3}s`,
            }}
          />
        ))}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[3] overflow-hidden"
      >
        {footerSnowflakes.map((flake, index) => (
          <Snowflake
            key={`footer-small-flake-${index}`}
            strokeWidth={1}
            className="footer-falling-snowflake absolute text-[#D6F7FB]"
            style={{
              left: flake.left,
              top: flake.top,
              width: flake.size,
              height: flake.size,
              opacity: flake.opacity,
              animationDuration: `${flake.duration}s`,
              animationDelay: `${flake.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-x-8 gap-y-12 px-4 pt-16 pb-14 sm:px-6 sm:pt-20 sm:pb-16 lg:grid-cols-[1.6fr_0.7fr_0.7fr_0.8fr] lg:gap-14 lg:px-8">
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label="Penguin Peptides homepage"
              className="inline-flex items-center"
            >
              <Image
                src="/assets/penguin-logo.png"
                alt="Penguin Peptides"
                width={230}
                height={90}
                className="h-auto w-[180px] brightness-0 invert sm:w-[210px]"
              />
            </Link>

            <p className="mt-6 max-w-[350px] font-sans text-[13px] leading-[1.9] text-[#A9C5D5]">
              A focused collection of research peptides and blends for
              scientific exploration and laboratory applications.
            </p>

            <div className="mt-6 inline-flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#04C1CA] shadow-[0_0_12px_rgba(4,193,202,0.8)]" />

              <span className="text-[10px] font-semibold tracking-[0.14em] text-[#82DDE5] uppercase">
                For Laboratory Research Only
              </span>
            </div>
          </div>

          {footerLinks.map((column) => (
            <nav
              key={column.title}
              aria-label={`${column.title} footer links`}
              className="min-w-0"
            >
              <h3 className="font-heading mb-6 text-sm font-semibold tracking-[-0.01em] text-white">
                {column.title}
              </h3>

              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 font-sans text-[13px] text-[#A9C5D5] transition-colors duration-300 hover:text-[#65E4E9]"
                    >
                      <span className="h-[3px] w-0 rounded-full bg-[#04C1CA] transition-all duration-300 group-hover:w-2" />

                      {link.label ?? link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <section
          aria-labelledby="footer-fda-title"
          className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-y border-white/10 py-5 sm:py-6">
            <div className="flex items-center gap-2.5">
              <ShieldAlert
                size={19}
                strokeWidth={1.7}
                className="shrink-0 text-[#04C1CA]"
                aria-hidden="true"
              />

              <h3
                id="footer-fda-title"
                className="font-heading text-[16px] font-semibold text-white sm:text-[18px]"
              >
                FDA Disclaimer
              </h3>
            </div>

            <p className="mt-4 font-sans text-[12px] leading-[1.9] text-[#AEC4D2] sm:text-[13px]">
              These products have not been evaluated or approved by the United
              States Food and Drug Administration, and no statement published on
              this site has been evaluated by it. They are not drugs, foods,
              dietary supplements, cosmetics, or medical devices, and nothing
              offered or described here is intended to diagnose, treat, cure,
              mitigate, or prevent any disease or health condition. For in-vitro
              laboratory research use only.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 border-b border-white/10 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="font-heading text-[13px] font-semibold text-white">
                Payment Methods
              </h4>

              <p className="mt-1 text-[11px] text-[#8EADBE]">
                Payment options available at checkout.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {paymentMethods.map((payment) => {
                const Icon = payment.icon;

                return (
                  <div
                    key={payment.name}
                    title={payment.name}
                    aria-label={payment.name}
                    className="group flex h-8 w-[52px] items-center justify-center rounded-md border border-white/15 bg-white px-2 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#04C1CA]/50 sm:h-9 sm:w-[58px]"
                  >
                    <Icon
                      size={26}
                      style={{ color: payment.color }}
                      className="h-auto max-h-[22px] w-full transition-transform duration-300 group-hover:scale-105"
                      aria-hidden="true"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-5 py-6 text-center">
            <p className="text-[12px] text-[#8EADBE]">
              © {new Date().getFullYear()} Penguin Peptides. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes footerStarTwinkle {
          0%,
          100% {
            opacity: calc(var(--star-opacity) * 0.45);
            transform: scale(0.8);
          }

          50% {
            opacity: var(--star-opacity);
            transform: scale(1.25);
          }
        }

        @keyframes footerSnowfall {
          0% {
            transform: translate3d(0, -15px, 0) rotate(0deg);
          }

          50% {
            transform: translate3d(14px, 25px, 0) rotate(30deg);
          }

          100% {
            transform: translate3d(-8px, 70px, 0) rotate(65deg);
          }
        }

        @keyframes footerLargeSnowDrift {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(var(--flake-rotation));
          }

          50% {
            transform: translate3d(8px, -12px, 0)
              rotate(calc(var(--flake-rotation) + 8deg));
          }
        }

        .footer-star {
          animation-name: footerStarTwinkle;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        .footer-falling-snowflake {
          animation-name: footerSnowfall;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        .footer-large-snowflake {
          animation: footerLargeSnowDrift 18s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-star,
          .footer-falling-snowflake,
          .footer-large-snowflake {
            animation: none !important;
          }

          .footer-star {
            opacity: var(--star-opacity);
          }
        }
      `}</style>
    </footer>
  );
}