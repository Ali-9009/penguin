"use client";

import { useEffect, useRef } from "react";
import {
  ShoppingBag,
  ClipboardCheck,
  Package,
  Truck,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Order Received",
    description: "Order and address captured.",
    icon: ShoppingBag,
  },
  {
    number: "02",
    title: "Details Reviewed",
    description: "Usually 1–3 business days.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Parcel Prepared",
    description: "Packed and batch-labelled.",
    icon: Package,
  },
  {
    number: "04",
    title: "Carrier Handoff",
    description: "Handed to UPS.",
    icon: Truck,
  },
  {
    number: "05",
    title: "Tracking Active",
    description: "Tracking sent by email.",
    icon: MapPin,
  },
];

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const desktopLineRef = useRef(null);
  const mobileLineRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      // Heading animation

      gsap.from(".process-heading", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".process-heading",
          start: "top 88%",
          once: true,
        },
      });

      // Step animation

      gsap.from(".process-step", {
        y: 45,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".process-steps",
          start: "top 85%",
          once: true,
        },
      });

      // Desktop line animation

      if (desktopLineRef.current) {
        gsap.fromTo(
          desktopLineRef.current,
          {
            scaleX: 0,
          },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".process-steps",
              start: "top 80%",
              end: "bottom 55%",
              scrub: 1.2,
            },
          },
        );
      }

      // Mobile line animation

      if (mobileLineRef.current) {
        gsap.fromTo(
          mobileLineRef.current,
          {
            scaleY: 0,
          },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".process-mobile",
              start: "top 75%",
              end: "bottom 65%",
              scrub: 1,
            },
          },
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      aria-labelledby="process-title"
      className="relative overflow-hidden px-4 py-12 sm:px-6 md:py-16 lg:px-8"
    >
      {/* Background decoration */}

      <div className="bg-secondary/5 pointer-events-none absolute top-0 -left-40 h-[450px] w-[450px] rounded-full blur-[100px]" />

      <div className="bg-primary/5 pointer-events-none absolute -right-40 -bottom-40 h-[450px] w-[450px] rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* =========================
            SECTION HEADING
        ========================= */}

        <div className="process-heading mx-auto mb-14 max-w-[750px] text-center lg:mb-20">
          <h2 id="process-title" className="section-heading">
            How It <span className="text-secondary-dark">Works.</span>
          </h2>

          <p className="text-muted mx-auto mt-5 max-w-[560px] font-sans text-sm leading-7 sm:text-base">
            From order confirmation to shipment tracking, explore the process
            behind every Penguin Peptides order.
          </p>
        </div>

        {/* =========================
            DESKTOP TIMELINE
        ========================= */}

        <div className="process-steps relative hidden lg:block">
          {/* Connecting line */}

          <div
            aria-hidden="true"
            className="absolute top-[50px] right-[10%] left-[10%] h-[2px] bg-[#DCE9EF]"
          >
            <div
              ref={desktopLineRef}
              className="from-primary via-secondary-dark to-secondary h-full w-full origin-left bg-gradient-to-r"
            />
          </div>

          {/* Steps */}

          <div className="relative grid grid-cols-5 gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="process-step group relative flex flex-col items-center text-center"
                >
                  {/* Icon circle */}

                  <div className="group-hover:border-secondary/40 relative z-10 flex h-[100px] w-[100px] items-center justify-center rounded-full border border-[#DCE9EF] bg-white shadow-[0_8px_30px_rgba(7,85,143,0.05)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_45px_rgba(7,85,143,0.12)]">
                    {/* Inner circle */}

                    <div className="text-primary group-hover:bg-primary flex h-[74px] w-[74px] items-center justify-center rounded-full bg-[#EAF7FA] transition-all duration-500 group-hover:text-white">
                      <Icon size={29} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}

                  <div className="mt-8 flex w-full flex-col items-center">
                    <span className="font-heading text-secondary-dark text-[13px] font-bold tracking-[0.2em]">
                      STEP {step.number}
                    </span>

                    <h3 className="font-heading mt-3 text-[19px] leading-[1.25] font-semibold tracking-[-0.035em] text-[#102E38] xl:text-[21px]">
                      {step.title}
                    </h3>

                    <p className="text-muted mt-3 max-w-[190px] font-sans text-[13px] leading-[1.7]">
                      {step.description}
                    </p>
                  </div>

                  {/* Decorative bottom dot */}

                  <div className="bg-secondary/60 mt-7 h-[5px] w-[5px] rounded-full transition-all duration-500 group-hover:w-8" />
                </article>
              );
            })}
          </div>
        </div>

        {/* =========================
            MOBILE / TABLET TIMELINE
        ========================= */}

        <div className="process-mobile relative mx-auto max-w-[650px] lg:hidden">
          {/* Vertical line */}

          <div
            aria-hidden="true"
            className="absolute top-8 bottom-12 left-[34px] w-[2px] bg-[#DCE9EF] sm:left-[41px]"
          >
            <div
              ref={mobileLineRef}
              className="from-primary to-secondary h-full w-full origin-top bg-gradient-to-b"
            />
          </div>

          <div className="process-steps relative space-y-6 sm:space-y-8">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="process-step group relative flex items-start gap-5 sm:gap-7"
                >
                  {/* Icon */}

                  <div className="relative z-10 flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full border border-[#DCE9EF] bg-white shadow-[0_8px_25px_rgba(7,85,143,0.05)] sm:h-[84px] sm:w-[84px]">
                    <div className="text-primary group-hover:bg-primary flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#EAF7FA] transition-colors duration-300 group-hover:text-white sm:h-[64px] sm:w-[64px]">
                      <Icon
                        size={24}
                        strokeWidth={1.6}
                        className="sm:h-7 sm:w-7"
                      />
                    </div>
                  </div>

                  {/* Text */}

                  <div className="group-hover:border-primary/20 flex min-h-[90px] flex-1 flex-col justify-center rounded-[20px] border border-[#E3EDF1] bg-white px-5 py-5 transition-all duration-300 group-hover:shadow-[0_10px_30px_rgba(7,85,143,0.06)] sm:px-7 sm:py-6">
                    <span className="text-secondary-dark text-[10px] font-bold tracking-[0.2em] uppercase">
                      STEP {step.number}
                    </span>

                    <h3 className="font-heading mt-2 text-[18px] font-semibold tracking-[-0.035em] text-[#102E38] sm:text-[21px]">
                      {step.title}
                    </h3>

                    <p className="text-muted mt-2 font-sans text-[12px] leading-[1.7] sm:text-sm">
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
