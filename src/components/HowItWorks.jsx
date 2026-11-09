"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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

const mobilePath = "M 32 60 C 120 165 120 555 32 690";

const desktopPath = "M 80 45 C 265 125 265 425 80 505";

const desktopPoints = [
  { x: 80, y: 45 },
  { x: 184.06, y: 145 },
  { x: 218.75, y: 275 },
  { x: 184.06, y: 405 },
  { x: 80, y: 505 },
];

const mobilePoints = [
  { x: 32, y: 60 },
  { x: 81.5, y: 183.75 },
  { x: 98, y: 363.75 },
  { x: 81.5, y: 553.75 },
  { x: 32, y: 690 },
];

function TimelineStep({ step, point, mobile = false }) {
  return (
    <article
      data-timeline-step
      className="pointer-events-none absolute inset-x-0 z-10"
      style={{
        top: `${point.y}px`,
      }}
    >
      <div
        data-timeline-node
        className={`text-primary absolute z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#C8E6EF] bg-white shadow-[0_5px_20px_rgba(7,85,143,0.08)] ${
          mobile ? "h-10 w-10" : "h-11 w-11"
        }`}
        style={{
          left: `${point.x}px`,
        }}
      >
        <span className="font-heading text-[11px] font-bold sm:text-[12px]">
          {step.number}
        </span>
      </div>

      <div
        data-timeline-content
        className="absolute -translate-y-1/2"
        style={{
          left: `${
            point.x +
            (mobile ? 31 : 38) +
            (!mobile && (step.number === "01" || step.number === "05") ? 30 : 0)
          }px`,
          right: "0",
        }}
      >
        <h3
          className={`font-heading leading-[1.3] font-semibold tracking-[-0.035em] text-[#102E38] ${
            mobile ? "text-[15px] sm:text-[18px]" : "text-[19px] xl:text-[21px]"
          }`}
        >
          {step.title}
        </h3>

        <p
          className={`mt-1.5 max-w-[310px] font-sans leading-[1.7] text-[#718792] ${
            mobile ? "text-[11px] sm:text-[13px]" : "text-[13px] xl:text-[14px]"
          }`}
        >
          {step.description}
        </p>
      </div>
    </article>
  );
}

function DesktopTimeline({ containerRef, pathRef }) {
  return (
    <div
      ref={containerRef}
      className="relative hidden h-[550px] w-full lg:block"
    >
      <svg
        viewBox="0 0 260 550"
        width="260"
        height="550"
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 overflow-visible"
      >
        <defs>
          <linearGradient
            id="desktopProcessGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#07558F" />
            <stop offset="50%" stopColor="#04C1CA" />
            <stop offset="100%" stopColor="#009CA9" />
          </linearGradient>
        </defs>

        <path
          d={desktopPath}
          fill="none"
          stroke="#DCEBF0"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          ref={pathRef}
          d={desktopPath}
          fill="none"
          stroke="url(#desktopProcessGradient)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {steps.map((step, index) => (
        <TimelineStep
          key={step.number}
          step={step}
          point={desktopPoints[index]}
        />
      ))}
    </div>
  );
}

function MobileTimeline({ containerRef, pathRef }) {
  return (
    <div
      ref={containerRef}
      className="relative mx-auto h-[760px] w-full max-w-[560px] lg:hidden"
    >
      <svg
        viewBox="0 0 130 760"
        width="130"
        height="760"
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 overflow-visible"
      >
        <defs>
          <linearGradient
            id="mobileProcessGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#07558F" />
            <stop offset="50%" stopColor="#04C1CA" />
            <stop offset="100%" stopColor="#009CA9" />
          </linearGradient>
        </defs>

        <path
          d={mobilePath}
          fill="none"
          stroke="#DCEBF0"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          ref={pathRef}
          d={mobilePath}
          fill="none"
          stroke="url(#mobileProcessGradient)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {steps.map((step, index) => (
        <TimelineStep
          key={step.number}
          step={step}
          point={mobilePoints[index]}
          mobile
        />
      ))}
    </div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  const desktopPathRef = useRef(null);
  const mobilePathRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      const setupTimeline = (container, path) => {
        if (!container || !path) return;

        const items = gsap.utils.toArray(
          container.querySelectorAll("[data-timeline-step]"),
        );

        const reducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        const length = path.getTotalLength();

        if (reducedMotion) {
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: 0,
          });

          gsap.set(
            items.flatMap((item) => [
              item.querySelector("[data-timeline-node]"),
              item.querySelector("[data-timeline-content]"),
            ]),
            {
              autoAlpha: 1,
              x: 0,
            },
          );

          return;
        }

        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        items.forEach((item) => {
          const node = item.querySelector("[data-timeline-node]");
          const content = item.querySelector("[data-timeline-content]");

          gsap.set(node, {
            autoAlpha: 0,
            scale: 0.5,
          });

          gsap.set(content, {
            autoAlpha: 0,
            x: 25,
          });
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            once: true,
          },
        });

        timeline.to(
          path,
          {
            strokeDashoffset: 0,
            duration: 3,
            ease: "power2.inOut",
          },
          0,
        );

        items.forEach((item, index) => {
          const node = item.querySelector("[data-timeline-node]");
          const content = item.querySelector("[data-timeline-content]");

          const position = 0.2 + index * 0.65;

          timeline.to(
            node,
            {
              autoAlpha: 1,
              scale: 1,
              backgroundColor: "#07558F",
              borderColor: "#04C1CA",
              color: "#FFFFFF",
              boxShadow: "0 8px 25px rgba(7,85,143,0.18)",
              duration: 0.45,
              ease: "back.out(1.7)",
            },
            position,
          );

          timeline.to(
            content,
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.6,
              ease: "power3.out",
            },
            position + 0.1,
          );
        });
      };

      mm.add("(min-width: 1024px)", () => {
        setupTimeline(desktopRef.current, desktopPathRef.current);
      });

      mm.add("(max-width: 1023px)", () => {
        setupTimeline(mobileRef.current, mobilePathRef.current);
      });

      return () => mm.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative w-full overflow-hidden bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-8"
    >
      <div className="pointer-events-none absolute top-0 -right-40 h-[500px] w-[500px] rounded-full bg-[#EAF7FA]/60 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <div className="mx-auto w-full max-w-[520px] lg:mx-0">
          <span className="text-primary mb-5 inline-flex items-center rounded-full border border-[#DCEBF0] bg-[#F3FAFC] px-4 py-2 text-[10px] font-bold tracking-[0.14em] uppercase">
            5 Simple Steps
          </span>

          <h2
            id="how-it-works-heading"
            className="font-heading text-primary text-[clamp(2.3rem,5vw,4.5rem)] leading-[1.08] font-bold tracking-[-0.055em]"
          >
            From Order
            <br />
            to <span className="text-secondary-dark">Delivery.</span>
          </h2>

          <p className="mt-5 max-w-[430px] font-sans text-[13px] leading-[1.85] text-[#718792] sm:text-[15px]">
            A simple, transparent process designed to keep you informed from
            checkout to shipment tracking.
          </p>

          <Link href="/shop" className="btn-gradient mt-7">
            Explore Collection
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <DesktopTimeline containerRef={desktopRef} pathRef={desktopPathRef} />

        <MobileTimeline containerRef={mobileRef} pathRef={mobilePathRef} />
      </div>
    </section>
  );
}
