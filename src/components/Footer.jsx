"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  RiInstagramLine,
  RiFacebookCircleLine,
  RiTwitterXLine,
  RiYoutubeLine,
} from "@remixicon/react";
import { ShieldAlert } from "lucide-react";

// =====================================
// FOOTER NAVIGATION
// =====================================

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "Shop All", href: "/shop" },
      { label: "Research Peptides", href: "/shop" },
      { label: "Research Blends", href: "/shop" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Contact Us", href: "/contact-us" },
      { label: "FAQs", href: "/#faq" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Shipping Policy", href: "/shipping-policy" },
      { label: "Return Policy", href: "/return-policy" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("");

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    // Connect your newsletter API here.
    setNewsletterStatus("Newsletter subscriptions are not available yet.");
  };

  return (
    <footer className="relative isolate w-full overflow-hidden bg-[#041B2D] text-white">
      {/* TOP GRADIENT LINE */}
      <div className="absolute inset-x-0 top-0 z-20 h-[2px] bg-gradient-to-r from-[#07558F] via-[#04C1CA] to-[#07558F]" />

      {/* BACKGROUND GRADIENT */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#092F4B] via-[#051F35] to-[#031523]" />

      {/* SOFT GLOW */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[550px] w-[550px] rounded-full bg-[#04C1CA]/10 blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full bg-[#07558F]/20 blur-[130px]" />

      <div className="relative z-10">
        {/* =====================================
          TOP BRAND + NAVIGATION
      ===================================== */}

        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-x-8 gap-y-12 px-4 pt-16 pb-14 sm:px-6 sm:pt-20 sm:pb-16 lg:grid-cols-[1.6fr_0.7fr_0.7fr_0.8fr] lg:gap-14 lg:px-8">
          {/* BRAND */}
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

            {/* BRAND LABEL */}
            <div className="mt-6 inline-flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#04C1CA] shadow-[0_0_12px_rgba(4,193,202,0.8)]" />

              <span className="text-[10px] font-semibold tracking-[0.14em] text-[#82DDE5] uppercase">
                For Laboratory Research Only
              </span>
            </div>
          </div>

          {/* NAVIGATION */}
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

        {/* =====================================
          FDA DISCLAIMER
      ===================================== */}
        {/* FDA DISCLAIMER */}
        <section
          aria-labelledby="footer-fda-title"
          className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-y border-white/10 py-4">
            {/* TITLE */}
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

            {/* DESCRIPTION */}
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

        {/* =====================================
          PAYMENT METHODS + COPYRIGHT
      ===================================== */}

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* PAYMENT ROW */}
          <div className="flex flex-col gap-5 border-b border-white/10 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="font-heading text-[13px] font-semibold text-white">
                Payment Methods
              </h4>

              <p className="mt-1 text-[11px] text-[#8EADBE]">
                Payment options available at checkout.
              </p>
            </div>

            {/* REAL PAYMENT LOGO IMAGES */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-7">
              {[
                { name: "Visa", image: "/assets/visa.png" },

                {
                  name: "American Express",
                  image: "/assets/american.png",
                },
              ].map((payment) => (
                <div
                  key={payment.name}
                  className="group flex h-9 items-center justify-center"
                >
                  <Image
                    src={payment.image}
                    alt={payment.name}
                    width={65}
                    height={36}
                    className="h-[24px] w-auto max-w-[65px] object-contain opacity-65 brightness-0 invert transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* COPYRIGHT ROW */}
          <div className="flex flex-col items-center justify-center gap-5 py-6 text-center">
            <p className="text-[12px] text-[#8EADBE]">
              © {new Date().getFullYear()} Penguin Peptides. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
