"use client";

import { useEffect, useRef } from "react";

import {
  ShoppingBag,
  ClipboardCheck,
  PackageCheck,
  Truck,
  MapPin,
  ArrowRight,
  Check,
} from "lucide-react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Order Placed",
    description:
      "Choose your research products and complete your order securely.",
    icon: ShoppingBag,
  },
  {
    number: "02",
    title: "Order Review",
    description: "Your order details are reviewed before preparation begins.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Carefully Packed",
    description: "Your products are prepared and packaged for shipment.",
    icon: PackageCheck,
  },
  {
    number: "04",
    title: "Order Dispatched",
    description: "Your package is handed over to the shipping carrier.",
    icon: Truck,
  },
  {
    number: "05",
    title: "Track Your Order",
    description: "Tracking information is provided when it becomes available.",
    icon: MapPin,
  },
];

export default function HowItWorks() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      const heading = section.querySelector(".timeline-heading");

      const desktopSteps = gsap.utils.toArray(".timeline-desktop-step");

      const mobileSteps = gsap.utils.toArray(".timeline-mobile-step");

      const desktopProgress = section.querySelector(
        ".timeline-desktop-progress",
      );

      const mobileProgress = section.querySelector(".timeline-mobile-progress");

      // HEADING
      gsap.fromTo(
        heading,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 88%",
            once: true,
          },
        },
      );

      // DESKTOP STEP ENTRANCE
      gsap.fromTo(
        desktopSteps,
        {
          opacity: 0,
          y: 35,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.13,
          duration: 0.75,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".timeline-desktop",
            start: "top 80%",
            once: true,
          },
        },
      );

      // DESKTOP PROGRESS LINE
      gsap.fromTo(
        desktopProgress,
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-desktop",
            start: "top 75%",
            end: "bottom 45%",
            scrub: 1,
            onUpdate: (self) => {
              const activeCount = Math.max(
                1,
                Math.floor(self.progress * (desktopSteps.length - 1)) + 1,
              );

              desktopSteps.forEach((step, index) => {
                step.classList.toggle("is-active", index < activeCount);
              });
            },
          },
        },
      );

      // MOBILE STEP ENTRANCE
      mobileSteps.forEach((step) => {
        gsap.fromTo(
          step,
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 88%",
              once: true,
            },
          },
        );

        ScrollTrigger.create({
          trigger: step,
          start: "top 75%",
          onEnter: () => step.classList.add("is-active"),
          onLeaveBack: () => step.classList.remove("is-active"),
        });
      });

      // MOBILE PROGRESS LINE
      gsap.fromTo(
        mobileProgress,
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-mobile",
            start: "top 72%",
            end: "bottom 55%",
            scrub: 1,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      aria-labelledby="timeline-heading"
      className="relative overflow-hidden px-4 py-12 sm:px-6 md:py-16 lg:px-8"
    >
      {/* BACKGROUND DECORATION */}

      <div
        aria-hidden="true"
        className="bg-secondary/10 pointer-events-none absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="bg-primary/5 pointer-events-none absolute -right-40 -bottom-40 h-[400px] w-[400px] rounded-full blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ==============================
            SECTION HEADING
        ============================== */}

        <header className="timeline-heading mx-auto mb-12 max-w-[700px] text-center sm:mb-16 lg:mb-20">
          <h2 id="timeline-heading" className="section-heading">
            From Order to <span className="text-secondary-dark">Delivery.</span>
          </h2>

          <p className="text-muted text-md mx-auto mt-5 max-w-2xl font-sans leading-7">
            A simple, transparent process designed to keep you informed from
            checkout to shipment tracking.
          </p>
        </header>

        {/* ==============================
            DESKTOP TIMELINE
        ============================== */}

        <div className="timeline-desktop relative hidden lg:block">
          {/* TRACK */}

          <div
            aria-hidden="true"
            className="absolute top-[44px] right-[10%] left-[10%] z-0 h-[3px] rounded-full bg-[#D8E8ED]"
          >
            <div className="timeline-desktop-progress from-primary to-secondary h-full w-full origin-left rounded-full bg-gradient-to-r via-[#087BA5]" />
          </div>

          {/* STEPS */}

          <div className="relative z-10 grid grid-cols-5 gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="timeline-desktop-step group relative flex flex-col items-center text-center"
                >
                  {/* CIRCLE */}

                  <div className="timeline-step-circle relative flex h-[88px] w-[88px] items-center justify-center rounded-full border-[3px] border-[#D8E8ED] bg-white shadow-[0_8px_25px_rgba(7,85,143,0.05)] transition-all duration-500">
                    <div className="timeline-step-inner text-primary flex h-[66px] w-[66px] items-center justify-center rounded-full bg-[#EAF7FA] transition-all duration-500">
                      <Icon size={27} strokeWidth={1.65} />
                    </div>

                    {/* ACTIVE INDICATOR */}

                    <span className="timeline-step-check bg-secondary absolute -right-1 -bottom-1 flex h-6 w-6 scale-0 items-center justify-center rounded-full border-[3px] border-[#F5FAFC] text-white opacity-0 transition-all duration-300">
                      <Check size={12} strokeWidth={2.5} />
                    </span>
                  </div>

                  {/* CONTENT */}

                  <div className="mt-4">
                    <h3 className="font-heading mt-3 text-[18px] leading-[1.3] font-bold tracking-[-0.035em] text-[#102E38] xl:text-[20px]">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-3 max-w-[190px] text-[12px] leading-[1.8] text-[#718792] xl:text-[13px]">
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* ==============================
            MOBILE / TABLET TIMELINE
        ============================== */}

        <div className="timeline-mobile relative mx-auto max-w-[650px] lg:hidden">
          {/* VERTICAL TRACK */}

          <div
            aria-hidden="true"
            className="absolute top-[32px] bottom-[calc(100px+32px)] left-[31px] w-[3px] rounded-full bg-[#D8E8ED] sm:top-[38px] sm:left-[37px]"
          >
            <div className="timeline-mobile-progress from-primary to-secondary h-full w-full origin-top rounded-full bg-gradient-to-b via-[#087BA5]" />
          </div>

          {/* STEPS */}

          <div className="relative space-y-5 sm:space-y-7">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="timeline-mobile-step group relative flex min-w-0 items-start gap-4 sm:gap-6"
                >
                  {/* ICON CIRCLE */}

                  <div className="timeline-step-circle relative z-10 flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full border-[3px] border-[#D8E8ED] bg-white transition-all duration-500 sm:h-[78px] sm:w-[78px]">
                    <div className="timeline-step-inner text-primary flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#EAF7FA] transition-all duration-500 sm:h-[58px] sm:w-[58px]">
                      <Icon size={22} strokeWidth={1.7} />
                    </div>

                    <span className="timeline-step-check bg-secondary absolute -right-1 -bottom-1 flex h-5 w-5 scale-0 items-center justify-center rounded-full border-2 border-[#F5FAFC] text-white opacity-0 transition-all duration-300">
                      <Check size={11} strokeWidth={2.5} />
                    </span>
                  </div>

                  {/* STEP CARD */}

                  <div className="timeline-step-card min-w-0 flex-1 rounded-[18px] border border-[#E2EDF2] bg-white px-4 py-5 transition-all duration-300 sm:rounded-[22px] sm:px-6 sm:py-6">
                    <span className="text-secondary-dark text-[10px] font-bold tracking-[0.16em] uppercase">
                      Step {step.number}
                    </span>

                    <h3 className="font-heading mt-2 text-[16px] font-bold tracking-[-0.035em] text-[#102E38] sm:text-[20px]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-[12px] leading-[1.75] text-[#718792] sm:text-[14px]">
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* ==============================
          ACTIVE STEP STYLING
      ============================== */}

      <style jsx global>{`
        .timeline-desktop-step.is-active .timeline-step-circle,
        .timeline-mobile-step.is-active .timeline-step-circle {
          border-color: #04c1ca;
          box-shadow: 0 10px 30px rgba(7, 85, 143, 0.12);
        }

        .timeline-desktop-step.is-active .timeline-step-inner,
        .timeline-mobile-step.is-active .timeline-step-inner {
          background-color: #07558f;
          color: white;
        }

        .timeline-desktop-step.is-active .timeline-step-check,
        .timeline-mobile-step.is-active .timeline-step-check {
          transform: scale(1);
          opacity: 1;
        }

        .timeline-mobile-step.is-active .timeline-step-card {
          border-color: #b8dfe9;
          box-shadow: 0 10px 30px rgba(7, 85, 143, 0.05);
        }

        @media (prefers-reduced-motion: reduce) {
          .timeline-step-circle,
          .timeline-step-inner,
          .timeline-step-check,
          .timeline-step-card {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
