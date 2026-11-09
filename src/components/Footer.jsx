"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { ArrowRight, ArrowUpRight, ChevronUp } from "lucide-react";

import {
  RiInstagramLine,
  RiFacebookCircleLine,
  RiTwitterXLine,
  RiYoutubeLine,
} from "@remixicon/react";

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

// =====================================
// SOCIAL LINKS
// =====================================

// Replace empty URLs with your real social media links.
// Social icons without URLs will not appear.

const socialLinks = [
  {
    label: "Instagram",
    href: "",
    icon: RiInstagramLine,
  },
  {
    label: "Facebook",
    href: "",
    icon: RiFacebookCircleLine,
  },
  {
    label: "X",
    href: "",
    icon: RiTwitterXLine,
  },
  {
    label: "YouTube",
    href: "",
    icon: RiYoutubeLine,
  },
];

// =====================================
// FOOTER COLUMN
// =====================================

function FooterColumn({ title, links }) {
  return (
    <nav aria-label={`${title} navigation`}>
      <h3 className="font-heading mb-6 text-[15px] font-semibold text-[#102E38]">
        {title}
      </h3>

      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group hover:text-primary inline-flex items-center gap-1 font-sans text-[13px] font-medium text-[#71838C] transition-colors duration-300 sm:text-sm"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// =====================================
// SOCIAL ICON
// =====================================

function SocialIcon({ social }) {
  const Icon = social.icon;

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      className="text-primary hover:border-primary hover:bg-primary flex h-11 w-11 items-center justify-center rounded-full border border-[#DFEAEE] bg-[#F5FAFC] transition-all duration-300 hover:-translate-y-1 hover:text-white"
    >
      <Icon size={20} />
    </a>
  );
}

// =====================================
// FOOTER
// =====================================

export default function Footer() {
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("");

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    // Connect your newsletter API here.
    setNewsletterStatus("Newsletter subscriptions are not available yet.");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full overflow-hidden bg-white border border-t-gray-200">
      {/* =====================================
          BACKGROUND GLOW
      ===================================== */}

      <div
        aria-hidden="true"
        className="bg-secondary/10 pointer-events-none absolute top-10 -left-40 h-[400px] w-[400px] rounded-full blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="bg-primary/5 pointer-events-none absolute -right-40 bottom-10 h-[400px] w-[400px] rounded-full blur-[100px]"
      />

      {/* =====================================
          MAIN FLOATING FOOTER
      ===================================== */}

      <div className="relative w-full bg-white">
        {/* =====================================
            MAIN FOOTER CONTENT
        ===================================== */}

        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-4 py-12 sm:gap-x-8 sm:px-6 sm:py-14 lg:grid-cols-[1.5fr_0.7fr_0.7fr_0.9fr] lg:gap-12 lg:px-8 lg:py-16">
          {/* BRAND COLUMN */}

          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label="Penguin Peptides homepage"
              className="inline-flex items-center"
            >
              <Image
                src="/assets/penguin-logo.png"
                alt="Penguin Peptides"
                width={200}
                height={80}
                className="h-auto w-[170px] object-contain sm:w-[200px]"
              />
            </Link>

            <p className="text-muted mt-6 max-w-[340px] font-sans text-[13px] leading-[1.9] sm:text-sm">
              Penguin Peptides offers a carefully selected range of research
              peptides and blends for scientific and laboratory applications.
            </p>

            {/* REMIX SOCIAL ICONS */}

            <div className="mt-7 flex flex-wrap items-center gap-2.5">
              {socialLinks
                .filter((social) => social.href)
                .map((social) => (
                  <SocialIcon key={social.label} social={social} />
                ))}
            </div>
          </div>

          {/* NAVIGATION COLUMNS */}

          {footerLinks.map((column) => (
            <FooterColumn
              key={column.title}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>

        {/* =====================================
            RESEARCH DISCLAIMER
        ===================================== */}

        <div className="border-t border-[#E8EFF2] bg-[#F8FBFC]">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-4 py-7 sm:flex-row sm:gap-5 sm:px-6 lg:px-8">
            <span className="border-primary/15 text-primary shrink-0 rounded-full border bg-[#E8F6F9] px-3.5 py-2 font-sans text-[10px] font-bold tracking-[0.12em] uppercase">
              Research Use Only
            </span>

            <p className="text-muted max-w-[1000px] font-sans text-[11px] leading-[1.9] sm:text-xs">
              Products offered by Penguin Peptides are intended exclusively for
              laboratory research and analytical applications. They are not
              intended for human consumption, medical treatment, diagnostic use,
              or veterinary applications.
            </p>
          </div>
        </div>

        {/* =====================================
            BOTTOM BAR
        ===================================== */}

        <div className="w-full bg-[#073B68]">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-5 text-white sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p className="font-sans text-xs text-white/65">
              © {new Date().getFullYear()} Penguin Peptides. All rights
              reserved.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/privacy-policy"
                className="font-sans text-xs text-white/65 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="font-sans text-xs text-white/65 transition-colors hover:text-white"
              >
                Terms & Conditions
              </Link>

              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="hover:bg-secondary hover:text-primary-dark flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300"
              >
                <ChevronUp size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
