"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Order Placed",
    description: "Select your products and complete checkout.",
  },
  {
    number: "02",
    title: "Order Review",
    description: "We review your order before processing.",
  },
  {
    number: "03",
    title: "Carefully Packed",
    description: "Your products are securely prepared and packed.",
  },
  {
    number: "04",
    title: "Order Dispatched",
    description: "Your package is handed to the shipping carrier.",
  },
  {
    number: "05",
    title: "Track Your Order",
    description: "Receive tracking details when available.",
  },
];

function TimelineConnector({ index }) {
  const isRight = index % 2 === 0;

  const path = isRight
    ? "M 0 0 C 120 0 120 100 0 100"
    : "M 120 0 C 0 0 0 100 120 100";

  return (
    <svg
      viewBox="0 0 120 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`pointer-events-none absolute top-1/2 hidden h-[calc(100%+16px)] w-[clamp(30px,12vw,140px)] overflow-visible sm:block ${
        isRight ? "left-full" : "right-full"
      }`}
    >
      <defs>
        <linearGradient
          id={`process-gradient-${index}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#07558F" />
          <stop offset="55%" stopColor="#04C1CA" />
          <stop offset="100%" stopColor="#009CA9" />
        </linearGradient>
      </defs>

      <path
        d={path}
        fill="none"
        stroke="#DCEAF0"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />

      <path
        data-process-connector
        d={path}
        fill="none"
        stroke={`url(#process-gradient-${index})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
function TimelineCard({ step, index, last }) {
  return (
    <li className={`relative flex w-full justify-center ${last ? "" : "pb-4"}`}>
      <article
        data-process-card
        className="group relative z-10 w-[85%] max-w-[500px] rounded-[14px] border border-[#DCE8ED] bg-white px-4 py-5 shadow-[0_8px_30px_rgba(7,59,104,0.05)] transition-[border-color,box-shadow] duration-300 hover:border-[#B9DEE8] hover:shadow-[0_14px_35px_rgba(7,59,104,0.09)] sm:rounded-[18px] sm:px-6 sm:py-6 xl:w-[78%] xl:px-7"
      >
        <div className="flex items-start gap-3 sm:gap-5">
          <div className="text-primary flex size-9 shrink-0 items-center justify-center rounded-xl border border-[#CFE7EF] bg-[#EAF7FA] sm:size-11 sm:rounded-[14px]">
            <span className="font-heading text-[11px] font-bold sm:text-[13px]">
              {step.number}
            </span>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-heading text-[15px] leading-[1.35] font-bold tracking-[-0.035em] text-[#102E38] sm:text-[18px]">
                {step.title}
              </h3>

              {last && (
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#E8F7F2] text-[#128A64]">
                  <Check size={15} strokeWidth={2.3} />
                </span>
              )}
            </div>

            <p className="mt-2 text-[12px] leading-[1.65] text-[#718792] sm:text-[13px]">
              {step.description}
            </p>
          </div>
        </div>

        {!last && <TimelineConnector index={index} />}
      </article>
    </li>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = timelineRef.current;

    if (!section || !container) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(
        container.querySelectorAll("[data-process-card]"),
      );

      const connectors = gsap.utils.toArray(
        container.querySelectorAll("[data-process-connector]"),
      );

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      connectors.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: reducedMotion ? 0 : length,
        });
      });

      if (reducedMotion) {
        gsap.set(cards, { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.set(cards, { autoAlpha: 0, y: 18 });

      const animation = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      cards.forEach((card, index) => {
        animation.to(card, {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        });

        if (connectors[index]) {
          animation.to(
            connectors[index],
            {
              strokeDashoffset: 0,
              duration: 0.65,
              ease: "power2.inOut",
            },
            "-=0.1",
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[22px] border border-[#DCE8ED] bg-[linear-gradient(135deg,#FFFFFF_0%,#F0FAFC_50%,#E4F6FA_100%)] px-5 py-10 sm:rounded-[30px] sm:px-8 sm:py-14 lg:px-12 lg:py-16">
          {/* Changed to a two-column grid on large screens */}
          <div className="relative mx-auto flex w-full max-w-[1100px] flex-col gap-12 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 xl:gap-20">
            {/* Left Column: Text & CTA */}
            <div className="flex flex-col items-center text-center lg:items-start lg:pt-10 lg:text-left">
              <span className="text-primary inline-flex items-center gap-2 rounded-full border border-[#DCE8ED] bg-white px-4 py-2 text-[10px] font-bold tracking-[0.14em] uppercase shadow-sm">
                <span className="bg-secondary size-1.5 rounded-full" />5 Simple
                Steps
              </span>

              <h2
                id="how-it-works-heading"
                className="font-heading text-primary mt-5 text-[clamp(29px,4vw,48px)] leading-[1.12] font-bold tracking-[-0.045em]"
              >
                From Order to <br className="hidden lg:block" />
                <span className="text-secondary">Delivery.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-[400px] text-[13px] leading-7 text-[#718792] sm:text-[14px] lg:mx-0">
                A simple, transparent process designed to keep you informed from
                checkout to shipment tracking.
              </p>

              <Link
                href="/shop"
                className="group relative mt-8 inline-flex h-12 w-fit items-center justify-center gap-2 overflow-hidden rounded-full bg-[linear-gradient(110deg,var(--color-primary),var(--color-secondary))] px-7 text-[13px] font-semibold text-white shadow-md transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
              >
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,var(--color-primary-dark),var(--color-primary))] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
                <span className="relative z-10">Explore Collection</span>
                <ArrowUpRight
                  size={17}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* Right Column: Timeline */}
            <div
              ref={timelineRef}
              className="relative mx-auto w-full max-w-[600px] lg:mx-0 lg:max-w-none"
            >
              <ol className="relative">
                {steps.map((step, index) => (
                  <TimelineCard
                    key={step.number}
                    step={step}
                    index={index}
                    last={index === steps.length - 1}
                  />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
