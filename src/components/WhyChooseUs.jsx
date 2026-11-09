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
      className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#E0EDF1] bg-white p-3.5 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#A9DCE7] hover:bg-[#EBF8FB] hover:shadow-[0_18px_45px_rgba(7,85,143,0.09)] sm:rounded-[28px] sm:p-6 lg:p-8"
    >
      {/* LARGE DECORATIVE ICON */}

      <Icon
        aria-hidden="true"
        strokeWidth={0.7}
        className="pointer-events-none absolute -top-5 -right-6 h-28 w-28 rotate-[-18deg] text-[#C8E8F0]/60 transition-all duration-700 group-hover:scale-110 group-hover:rotate-[-5deg] sm:-top-8 sm:-right-8 sm:h-44 sm:w-44"
      />

      {/* TOP ROW */}

      <div className="relative z-10 flex items-start justify-between gap-2">
        {/* ICON BADGE */}

        <div className="text-primary group-hover:bg-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] border border-white bg-white shadow-[0_8px_22px_rgba(7,85,143,0.06)] transition-all duration-500 group-hover:rotate-[-8deg] group-hover:text-white sm:h-16 sm:w-16 sm:rounded-[20px]">
          <Icon size={23} strokeWidth={1.7} className="sm:h-8 sm:w-8" />
        </div>
      </div>

      {/* CONTENT */}

      <div className="relative z-10 mt-4 flex flex-1 flex-col">
        <h3 className="font-heading text-[15px] leading-[1.25] font-semibold tracking-[-0.04em] text-[#103B50] sm:text-[21px] lg:text-[23px]">
          {feature.title}
        </h3>

        <p className="mt-3 text-[11px] leading-[1.7] text-[#6D8793] sm:text-[13px] sm:leading-[1.85] lg:text-[14px]">
          {feature.description}
        </p>
      </div>
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
        {/* SECTION HEADER */}

        <div className="mb-12 flex flex-col justify-between gap-6 lg:mb-14 lg:flex-row lg:items-end">
          <div data-aos="fade-up">
            <h2 id="why-title" className="section-heading">
              Why Choose
              <br />
              <span className="text-secondary-dark">Penguin Peptides?</span>
            </h2>
          </div>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-muted text-md max-w-[410px] font-sans leading-7"
          >
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
