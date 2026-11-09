"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FlaskConical, Sparkles } from "lucide-react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const researchFeatures = [
  {
    title: "Identification",
    description: "Accurate compound identification.",
    image: "/assets/identification.jpg",
    position: "top-left",
  },
  {
    title: "Purity",
    description: "Reliable purity assessment.",
    image: "/assets/purity.jpg",
    position: "top-right",
  },
  {
    title: "Endotoxins",
    description: "Precise endotoxin testing.",
    image: "/assets/endotoxins.jpg",
    position: "bottom-left",
  },
  {
    title: "Net Content",
    description: "Accurate content measurement.",
    image: "/assets/measurement.jpg",
    position: "bottom-right",
  },
];

function ResearchFeature({ feature }) {
  const positionClasses = {
    "top-left":
      "top-[2%] left-[2%] sm:top-[8%] sm:left-[5%] lg:top-[12%] lg:left-[7%]",

    "top-right":
      "top-[5%] right-[2%] sm:top-[6%] sm:right-[5%] lg:top-[10%] lg:right-[7%]",

    "bottom-left":
      "bottom-[3%] left-[4%] sm:bottom-[10%] sm:left-[7%] lg:bottom-[13%] lg:left-[12%]",

    "bottom-right":
      "right-[3%] bottom-[1%] sm:right-[7%] sm:bottom-[9%] lg:right-[12%] lg:bottom-[12%]",
  };

  return (
    <article
      data-research-feature
      className={`absolute z-20 flex w-30 flex-col items-center text-center sm:w-[170px] lg:w-[220px] xl:w-[245px] ${positionClasses[feature.position]} `}
    >
      {/* CIRCULAR IMAGE */}

      <div className="group hover:border-secondary/40 relative mb-3 flex h-[76px] w-[76px] items-center justify-center rounded-full border border-[#D8EBF0] bg-white/90 shadow-[0_12px_35px_rgba(7,85,143,0.08)] transition-all duration-500 hover:shadow-[0_15px_40px_rgba(7,85,143,0.14)] sm:h-[110px] sm:w-[110px] lg:h-[140px] lg:w-[140px]">
        {/* OUTER RING */}

        <div className="pointer-events-none absolute -inset-[5px] rounded-full border border-[#D9EDF1]/80 sm:-inset-[8px]" />

        {/* IMAGE */}

        <div className="relative h-[85%] w-[85%] overflow-hidden rounded-full bg-gradient-to-br from-[#F0FAFC] to-[#E2F3F7]">
          <Image
            src={feature.image}
            alt={`${feature.title} laboratory research illustration`}
            fill
            sizes="(max-width: 640px) 76px, (max-width: 1024px) 110px, 140px"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <span className="bg-secondary absolute right-[5%] bottom-[8%] h-2 w-2 rounded-full border-2 border-white sm:h-3 sm:w-3" />
      </div>

      {/* TITLE */}

      <h3 className="font-heading text-primary text-md leading-tight font-semibold tracking-[-0.025em]">
        {feature.title}
      </h3>

      {/* DESCRIPTION */}

      <p className="mt-1.5 max-w-36 font-sans text-[12px] leading-[1.5] text-[#758995] sm:mt-2 sm:max-w-[175px] md:text-sm lg:max-w-[215px]">
        {feature.description}
      </p>
    </article>
  );
}

export default function ResearchShowcase() {
  const sectionRef = useRef(null);
  const productRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        return;
      }

      const heading = section.querySelector("[data-showcase-heading]");

      const features = gsap.utils.toArray(
        section.querySelectorAll("[data-research-feature]"),
      );

      const products = gsap.utils.toArray(
        section.querySelectorAll("[data-showcase-product]"),
      );

      const centerGlow = section.querySelector("[data-center-glow]");

      // Set starting positions before the section enters the viewport.
      gsap.set(heading, {
        opacity: 0,
        y: 35,
      });

      gsap.set(products, {
        opacity: 0,
        y: 90,
        scale: 0.85,
      });

      gsap.set(features, {
        opacity: 0,
        scale: 0.35,
        y: 30,
      });

      gsap.set(centerGlow, {
        opacity: 0,
        scale: 0.7,
      });

      // Randomized appearance order, consistent across renders.
      const popOrder = [2, 0, 3, 1];

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
          invalidateOnRefresh: true,
        },
      });

      // Heading entrance
      timeline.to(heading, {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
      });

      // Background glow
      timeline.to(
        centerGlow,
        {
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: "power2.out",
        },
        "-=0.5",
      );

      // Two products rise into view
      timeline.to(
        products,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          stagger: 0.18,
          ease: "back.out(1.35)",
        },
        "-=1.0",
      );

      // Research features pop into view
      popOrder.forEach((featureIndex, order) => {
        timeline.to(
          features[featureIndex],
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.7,
            ease: "back.out(2.1)",
          },
          `-=${order === 0 ? 0.25 : 0.35}`,
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="research-showcase-heading"
      className="relative isolate overflow-hidden bg-[#F5FAFC] px-3 py-12 sm:px-6 md:py-16 lg:px-10"
    >
      {/* BACKGROUND DECORATION */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[25%] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-100/30 blur-[130px]"
      />

      {/* CONTAINER */}

      <div className="relative mx-auto max-w-[1400px]">
        {/* =========================
            SECTION HEADING
        ========================= */}

        <header
          data-showcase-heading
          className="relative z-30 mx-auto max-w-[760px] text-center"
        >
          {/* HEADING */}

          <h2 id="research-showcase-heading" className="section-heading">
            Precision Behind
            <br />
            <span className="text-secondary-dark">Every Discovery.</span>
          </h2>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-4 max-w-[570px] font-sans text-[12px] leading-[1.75] text-[#708692] sm:mt-5 sm:text-[15px]">
            Explore the analytical characteristics and research-focused details
            that matter when selecting laboratory materials.
          </p>
        </header>

        {/* =========================
            INTERACTIVE SHOWCASE
        ========================= */}

        <div className="relative mx-auto h-[520px] w-full max-w-[1300px] sm:h-[620px] lg:h-160">
          {/* CENTER GLOW */}

          <div
            data-center-glow
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#D6F4F8] via-[#ECFAFC] to-[#E6F0FB] blur-[45px] sm:h-[430px] sm:w-[430px] lg:h-130 lg:w-[570px]"
          />

          {/* =========================
              TWO CENTER PRODUCTS
          ========================= */}

          {/* CENTER LOGO */}
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
            <div
              data-showcase-product
              className="relative flex h-40 w-[180px] items-center justify-center rounded-3xl border border-[#C8E6EF] bg-white/80 p-5 shadow-[0_15px_50px_rgba(7,85,143,0.12),0_0_35px_rgba(4,193,202,0.08)] backdrop-blur-xl sm:w-[280px] sm:p-8 lg:w-[360px] lg:p-10"
            >
              {/* INNER BORDER */}
              <div className="pointer-events-none absolute inset-[6px] rounded-[22px] border border-white/80 sm:rounded-[30px] lg:rounded-[38px]" />

              {/* LOGO */}
              <div className="showcase-float-center relative h-full w-full">
                <Image
                  src="/assets/penguin-logo.png"
                  alt="Penguin Peptides"
                  fill
                  sizes="(max-width: 640px) 140px, (max-width: 1024px) 216px, 280px"
                  className="object-contain drop-shadow-[0_12px_25px_rgba(7,59,104,0.10)]"
                />
              </div>
            </div>
          </div>

          {/* =========================
              SURROUNDING RESEARCH ITEMS
          ========================= */}

          {researchFeatures.map((feature, index) => (
            <ResearchFeature
              key={feature.title}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes showcaseFloatLeft {
          0%,
          100% {
            transform: translateY(0) rotate(-8deg);
          }

          50% {
            transform: translateY(-16px) rotate(-5deg);
          }
        }

        @keyframes showcaseFloatRight {
          0%,
          100% {
            transform: translateY(-12px) rotate(8deg);
          }

          50% {
            transform: translateY(7px) rotate(5deg);
          }
        }

        .showcase-float-left {
          animation: showcaseFloatLeft 5.5s ease-in-out infinite;
        }

        .showcase-float-right {
          animation: showcaseFloatRight 6s ease-in-out infinite;
          animation-delay: -1.5s;
        }

        @media (prefers-reduced-motion: reduce) {
          .showcase-float-left,
          .showcase-float-right {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
