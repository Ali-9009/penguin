"use client";

import { useEffect } from "react";
import {
  FlaskConical,
  ShieldCheck,
  Microscope,
  PackageCheck,
  BadgeCheck,
  Headphones,
  ArrowUpRight,
} from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

// =====================================
// FEATURES DATA
// =====================================

const features = [
  {
    title: "Research-Driven Quality",
    description:
      "Quality research peptides for scientific and laboratory applications.",
    icon: FlaskConical,
  },
  {
    title: "Quality-Focused Approach",
    description: "Focused on consistency, quality, and attention to detail.",
    icon: ShieldCheck,
  },
  {
    title: "Scientific Exploration",
    description: "A diverse peptide collection supporting laboratory research.",
    icon: Microscope,
  },
  {
    title: "Secure Packaging",
    description: "Carefully packaged products for safe and secure handling.",
    icon: PackageCheck,
  },
  {
    title: "Flexible Product Selection",
    description:
      "Multiple strengths and formulations for different research needs.",
    icon: BadgeCheck,
  },
  {
    title: "Dedicated Support",
    description: "Helpful assistance with products, orders, and inquiries.",
    icon: Headphones,
  },
];

// =====================================
// FEATURE CARD
// =====================================

function FeatureCard({ feature, index }) {
  const Icon = feature.icon;

  return (
    <article
      data-aos="fade-up"
      data-aos-delay={index * 70}
      className="group flex h-full min-w-0 flex-col items-center px-3 py-3 text-center sm:px-5"
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-gradient-to-br from-[#073B68] via-[#07558F] to-[#04C1CA] text-white shadow-[0_10px_25px_rgba(7,85,143,0.22)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_15px_30px_rgba(4,193,202,0.25)] sm:h-16 sm:w-16 sm:rounded-[20px]">
        <Icon size={26} strokeWidth={1.7} className="sm:h-[29px] sm:w-[29px]" />
      </div>

      {/* TITLE */}
      <h3 className="font-heading mt-3 text-[16px] leading-[1.3] font-bold tracking-[-0.03em] text-[#102E38] sm:mt-6 sm:text-[20px]">
        {feature.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-3 max-w-[320px] text-[12px] leading-[1.75] text-[#60758A] sm:text-[15px]">
        {feature.description}
      </p>
    </article>
  );
}

// =====================================
// WHY CHOOSE US SECTION
// =====================================

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });

    AOS.refresh();
  }, []);

  return (
    <section
      id="why"
      aria-labelledby="why-title"
      className="relative overflow-hidden bg-[#F5FAFC] px-4 py-12 sm:px-6 md:py-16 lg:px-8"
    >
      {/* BACKGROUND DECORATIONS */}

      <div className="pointer-events-none absolute top-10 -left-40 h-[400px] w-[400px] rounded-full bg-[#DFF6FA]/50 blur-[100px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#D9EEF7]/50 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 text-center sm:mb-14">
          {/* Heading */}

          <h2 id="why-title" className="section-heading">
            Why Choose
            <br />
            <span className="text-secondary-dark">Penguin Peptides?</span>
          </h2>
          {/* Description */}

          <p className="text-muted text-md mx-auto mt-5 max-w-2xl font-sans leading-7">
            Discover a research-focused collection designed around product
            variety, clear information, and a commitment to quality.
          </p>
        </div>

        {/* FEATURE CARDS */}

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
