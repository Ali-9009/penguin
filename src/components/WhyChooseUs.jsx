"use client";

import { useEffect, useRef } from "react";
import {
  FlaskConical,
  ShieldCheck,
  Microscope,
  PackageCheck,
  BadgeCheck,
  Headphones,
  Check,
} from "lucide-react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    number: "01",
    title: "Research-Driven Quality",
    description:
      "Research-focused peptides for scientific and laboratory applications.",
    icon: FlaskConical,
  },
  {
    number: "02",
    title: "Quality-Focused Approach",
    description:
      "Consistency and careful attention to detail across our collection.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Scientific Exploration",
    description: "A diverse peptide collection supporting laboratory research.",
    icon: Microscope,
  },
  {
    number: "04",
    title: "Secure Packaging",
    description:
      "Carefully prepared and packaged products for secure handling.",
    icon: PackageCheck,
  },
  {
    number: "05",
    title: "Flexible Selection",
    description:
      "Multiple strengths and formulations for different research needs.",
    icon: BadgeCheck,
  },
  {
    number: "06",
    title: "Dedicated Support",
    description:
      "Helpful assistance with product information, orders, and inquiries.",
    icon: Headphones,
  },
];

const animationOrder = [0, 4, 1, 5, 2, 3];

const connections = animationOrder.slice(0, -1).map((start, index) => ({
  start,
  end: animationOrder[index + 1],
}));

function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <article
      data-feature-card
      data-active="false"
      className="group relative z-10 flex h-full min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#DCEAF0] bg-white p-4 shadow-[0_8px_30px_rgba(7,85,143,0.045)] transition-[border-color,box-shadow,background-color] duration-500 hover:border-[#79CFE0] hover:shadow-[0_18px_45px_rgba(7,85,143,0.11)] data-[active=true]:border-[#85DCE6] data-[active=true]:shadow-[0_10px_40px_rgba(4,193,202,0.12)] sm:rounded-[26px] sm:p-6 lg:rounded-[28px] lg:p-7"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#F4FCFD] via-white to-white opacity-60" />

      <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[#04C1CA]/0 blur-[50px] transition-colors duration-700 group-hover:bg-[#04C1CA]/10 group-data-[active=true]:bg-[#04C1CA]/10" />

      <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#07558F] via-[#04C1CA] to-[#7CECF0] transition-transform duration-700 group-data-[active=true]:scale-x-100" />

      <div className="relative z-10 flex items-start justify-between gap-3">
        <div className="relative">
          <div className="absolute -inset-[5px] rounded-[20px] border border-[#CDE9EF] opacity-0 transition-opacity duration-500 group-data-[active=true]:opacity-100 sm:rounded-[23px]" />

          <div className="relative flex h-12 w-12 items-center justify-center rounded-[15px] bg-gradient-to-br from-[#073B68] via-[#07558F] to-[#04C1CA] text-white shadow-[0_8px_22px_rgba(7,85,143,0.18)] transition-transform duration-500 group-hover:scale-105 sm:h-15 sm:w-15 sm:rounded-[18px]">
            <Icon size={23} strokeWidth={1.7} className="sm:h-7 sm:w-7" />
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-5 flex flex-1 flex-col">
        <h3 className="font-heading text-[15px] leading-[1.3] font-bold tracking-[-0.035em] text-[#102E38] sm:text-[19px] lg:text-[21px]">
          {feature.title}
        </h3>

        <p className="mt-3 max-w-[320px] font-sans text-[11px] leading-[1.75] text-[#718792] sm:text-[13px] sm:leading-[1.85] lg:text-[14px]">
          {feature.description}
        </p>
      </div>
    </article>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;

    if (!section || !grid) return;

    const cards = Array.from(grid.querySelectorAll("[data-feature-card]"));

    const tracks = Array.from(grid.querySelectorAll("[data-network-track]"));

    const progressPaths = Array.from(
      grid.querySelectorAll("[data-network-progress]"),
    );

    const updateConnections = () => {
      const points = cards.map((card) => ({
        x: card.offsetLeft + card.offsetWidth / 2,
        y: card.offsetTop + card.offsetHeight / 2,
      }));

      connections.forEach(({ start, end }, index) => {
        const from = points[start];
        const to = points[end];

        if (!from || !to) return;

        const dx = to.x - from.x;
        const dy = to.y - from.y;

        const distance = Math.hypot(dx, dy) || 1;

        const midX = (from.x + to.x) / 2;
        const midY = (from.y + to.y) / 2;

        const bend = index % 2 === 0 ? 22 : -22;

        const controlX = midX - (dy / distance) * bend;
        const controlY = midY + (dx / distance) * bend;

        const d = `M ${from.x} ${from.y} Q ${controlX} ${controlY} ${to.x} ${to.y}`;

        tracks[index]?.setAttribute("d", d);
        progressPaths[index]?.setAttribute("d", d);
      });
    };

    updateConnections();

    const observer = new ResizeObserver(updateConnections);

    observer.observe(grid);

    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) {
        cards.forEach((card) => {
          card.dataset.active = "true";
        });

        gsap.set(progressPaths, {
          strokeDasharray: 1,
          strokeDashoffset: 0,
        });

        return;
      }

      gsap.set(cards, {
        autoAlpha: 0,
        y: 35,
        scale: 0.94,
      });

      gsap.set(progressPaths, {
        strokeDasharray: 1,
        strokeDashoffset: 1,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      timeline.timeScale(2.5);

      animationOrder.forEach((cardIndex, sequenceIndex) => {
        const card = cards[cardIndex];

        if (!card) return;

        if (sequenceIndex > 0) {
          const path = progressPaths[sequenceIndex - 1];

          if (path) {
            timeline.to(path, {
              strokeDashoffset: 0,
              duration: 0.27,
              ease: "power2.inOut",
            });
          }
        }

        timeline.to(card, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.35)",
        });

        timeline.call(() => {
          card.dataset.active = "true";
        });

        timeline.fromTo(
          card,
          {
            boxShadow: "0 0 0 rgba(4,193,202,0)",
          },
          {
            boxShadow:
              "0 0 0 1px rgba(4,193,202,0.18), 0 12px 35px rgba(4,193,202,0.20)",
            duration: 0.35,
            ease: "power2.out",
            yoyo: true,
            repeat: 1,
          },
        );
      });

      timeline.set(cards, {
        clearProps: "boxShadow",
      });
    }, section);

    return () => {
      observer.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why"
      aria-labelledby="why-title"
      className="relative isolate overflow-hidden bg-[#F5FAFC] px-4 py-12 sm:px-6 md:py-16 lg:px-8"
    >
      <div className="pointer-events-none absolute top-0 -left-40 h-[450px] w-[450px] rounded-full bg-[#DFF6FA]/60 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#D9EEF7]/60 blur-[110px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <header className="mx-auto mb-12 max-w-[700px] text-center sm:mb-16">

          <h2 id="why-title" className="section-heading">
            Why Choose
            <br />
            <span className="text-secondary-dark">Penguin Peptides?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[550px] font-sans text-md leading-[1.8] text-[#718792]">
            A research-focused collection built around quality, product variety,
            and attention to detail.
          </p>
        </header>

        <div
          ref={gridRef}
          className="relative grid grid-cols-2 items-stretch gap-4 sm:gap-6 lg:grid-cols-3 lg:gap-8"
        >
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
          >
            <defs>
              <linearGradient
                id="researchNetworkGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#07558F" />
                <stop offset="45%" stopColor="#04C1CA" />
                <stop offset="100%" stopColor="#75E8EC" />
              </linearGradient>
            </defs>

            {connections.map(({ start, end }) => (
              <g key={`${start}-${end}`}>
                <path
                  data-network-track
                  fill="none"
                  stroke="#C7E4EB"
                  strokeOpacity="0.7"
                  strokeWidth="1.5"
                  pathLength="1"
                />

                <path
                  data-network-progress
                  fill="none"
                  stroke="url(#researchNetworkGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  pathLength="1"
                  style={{
                    filter: "drop-shadow(0 0 5px rgba(4,193,202,0.5))",
                  }}
                />
              </g>
            ))}
          </svg>

          {features.map((feature) => (
            <FeatureCard key={feature.number} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
