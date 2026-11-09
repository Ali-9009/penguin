"use client";

import { useEffect } from "react";
import {
  FlaskConical,
  ShieldCheck,
  Microscope,
  PackageCheck,
  BadgeCheck,
  Headphones,
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
      className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[16px] border border-[#E2EDF2] bg-white p-3 transition-all duration-500 hover:-translate-y-1 hover:border-[#B7DEE8] hover:shadow-[0_20px_50px_rgba(7,85,143,0.09)] sm:rounded-[22px] sm:p-5 lg:rounded-[28px] lg:p-8"
    >
      {/* SUBTLE GRADIENT OVERLAY */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#E9FAFC]/80 via-white to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* TOP ACCENT LINE */}

      <div className="from-primary to-secondary absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r transition-all duration-700 group-hover:w-full" />

      {/* ICON */}

      <div className="text-primary group-hover:border-primary/20 group-hover:bg-primary relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] border border-[#D7EDF2] bg-gradient-to-br from-[#E6F9FB] to-[#D8F1F6] transition-all duration-500 group-hover:scale-105 sm:h-14 sm:w-14 sm:rounded-[17px] lg:h-16 lg:w-16 lg:rounded-[20px]">
        <Icon
          size={22}
          strokeWidth={1.6}
          className="transition-transform duration-500 group-hover:rotate-[-8deg] sm:h-[27px] sm:w-[27px] lg:h-[30px] lg:w-[30px]"
        />
      </div>

      {/* CONTENT */}

      <div className="relative z-10 mt-4 flex min-w-0 flex-1 flex-col sm:mt-5 lg:mt-7">
        <h3 className="font-heading group-hover:text-primary text-[14px] leading-[1.3] font-semibold tracking-[-0.025em] text-[#102E38] transition-colors duration-300 sm:text-[19px] lg:text-[22px]">
          {feature.title}
        </h3>

        <p className="text-muted mt-2 font-sans text-[11px] leading-[1.6] sm:mt-3 sm:text-[13px] sm:leading-[1.75] lg:text-[14px] lg:leading-[1.8]">
          {feature.description}
        </p>
      </div>

      {/* BOTTOM DECORATIVE DETAIL */}

      <div className="relative z-10 mt-5 flex items-center gap-1.5 sm:mt-7 sm:gap-2 lg:mt-8">
        <span className="bg-secondary h-[4px] w-[4px] rounded-full transition-all duration-500 group-hover:w-6 sm:h-[5px] sm:w-[5px] sm:group-hover:w-8" />

        <span className="h-[4px] w-[4px] rounded-full bg-[#C5E7ED] sm:h-[5px] sm:w-[5px]" />

        <span className="h-[4px] w-[4px] rounded-full bg-[#D9EEF2] sm:h-[5px] sm:w-[5px]" />
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
