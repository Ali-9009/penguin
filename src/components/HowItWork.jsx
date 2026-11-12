"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ShoppingBag,
  ClipboardCheck,
  PackageCheck,
  Truck,
  MapPin,
  Snowflake,
  ArrowRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Order Placed",
    description: "Select your products and complete checkout.",
    icon: ShoppingBag,
  },
  {
    number: "02",
    title: "Order Review",
    description: "We review your order before processing.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Carefully Packed",
    description: "Your products are securely prepared and packed.",
    icon: PackageCheck,
  },
  {
    number: "04",
    title: "Order Dispatched",
    description: "Your package is handed to the shipping carrier.",
    icon: Truck,
  },
  {
    number: "05",
    title: "Track Your Order",
    description: "Receive tracking details when available.",
    icon: MapPin,
  },
];

const snowflakes = Array.from({ length: 45 }, (_, index) => {
  const sizes = [9, 12, 15, 18, 11, 14, 20];

  return {
    id: index,
    left: `${(index * 37.7 + 11) % 100}%`,
    size: sizes[index % sizes.length],
    duration: 8 + ((index * 3.7) % 9),
    delay: -((index * 2.3) % 15),
    opacity: 0.3 + ((index * 7) % 6) / 10,
    drift: `${(index % 2 === 0 ? 1 : -1) * (15 + (index % 5) * 9)}px`,
  };
});

function FallingSnow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {snowflakes.map((snow) => (
        <Snowflake
          key={snow.id}
          size={snow.size}
          strokeWidth={1.5}
          className="how-snow absolute top-0 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.7)]"
          style={{
            left: snow.left,
            opacity: snow.opacity,
            animationDuration: `${snow.duration}s`,
            animationDelay: `${snow.delay}s`,
            "--snow-drift": snow.drift,
          }}
        />
      ))}
    </div>
  );
}

function StepCard({ step }) {
  const Icon = step.icon;

  return (
    <article className="how-step-card group relative flex min-w-0 items-start gap-3 overflow-hidden rounded-[18px] border border-[#DCECF1] bg-white/95 p-4 shadow-[0_8px_30px_rgba(7,85,143,0.06)] backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-[#8ADCE5] hover:shadow-[0_15px_35px_rgba(7,85,143,0.12)] sm:gap-5 sm:rounded-[22px] sm:p-6">
      <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#07558F] to-[#04C1CA] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-[15px] bg-[#E8F8FA] text-[#07558F] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#D8F4F7] sm:h-14 sm:w-14 sm:rounded-[18px]">
          <Icon
            size={24}
            strokeWidth={1.8}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <span className="font-heading absolute -top-2 -right-2 flex h-[23px] w-[23px] items-center justify-center rounded-full bg-gradient-to-br from-[#07558F] to-[#04C1CA] text-[10px] font-bold text-white shadow-[0_4px_10px_rgba(7,85,143,0.2)]">
          {step.number}
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="font-heading text-[15px] leading-[1.35] font-semibold tracking-[-0.035em] text-[#102E38] sm:text-[19px]">
          {step.title}
        </h3>

        <p className="mt-2 font-sans text-[12px] leading-[1.75] text-[#607F8B] sm:text-[14px]">
          {step.description}
        </p>
      </div>

      <ArrowRight
        size={18}
        strokeWidth={1.7}
        className="mt-1 hidden shrink-0 text-[#07558F]/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#07558F] sm:block"
      />
    </article>
  );
}

export default function HowItWork() {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const intro = introRef.current;
    const cardsContainer = cardsRef.current;

    if (!section || !intro || !cardsContainer) return;

    const cards = gsap.utils.toArray(
      cardsContainer.querySelectorAll(".how-step-card"),
    );

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      timeline
        .from(intro, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          cards,
          {
            opacity: 0,
            y: 55,
            scale: 0.88,
            rotation: -2,
            duration: 0.75,
            stagger: 0.14,
            ease: "back.out(1.6)",
            clearProps: "transform,opacity",
          },
          "-=0.35",
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative isolate w-full overflow-hidden bg-gradient-to-br from-[#A8D9E8] via-[#D6F0F5] to-[#B6E3ED] px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_55%,rgba(255,255,255,0.65)_0%,transparent_70%)]" />

      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#07558F]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 -bottom-40 h-[500px] w-[500px] rounded-full bg-[#04C1CA]/15 blur-[120px]" />

      <FallingSnow />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 xl:gap-20">
        <div ref={introRef} className="min-w-0 lg:sticky lg:top-28">
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/70 bg-white/80 px-4 py-2 shadow-[0_4px_15px_rgba(7,85,143,0.05)] backdrop-blur-sm">
            <PackageCheck size={15} className="text-[#07558F]" />

            <span className="font-heading text-[10px] font-bold tracking-[0.15em] text-[#07558F] uppercase sm:text-[11px]">
              5 Simple Steps
            </span>
          </div>

          <h2
            id="how-it-works-heading"
            className="font-heading text-[clamp(34px,4.5vw,58px)] leading-[1.1] font-bold tracking-[-0.045em] text-[#102E38]"
          >
            From Order to
            <span className="block bg-gradient-to-r from-[#07558F] to-[#04C1CA] bg-clip-text text-transparent">
              Delivery.
            </span>
          </h2>

          <p className="mt-5 max-w-[530px] font-sans text-[14px] leading-[1.85] text-[#456E7C] sm:text-[16px]">
            A simple, transparent process designed to keep you informed from
            checkout to shipment tracking.
          </p>

          <Link
            href="/shop"
            className="group relative mt-7 inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-[linear-gradient(110deg,var(--color-primary),var(--color-secondary))] px-7 text-[13px] font-semibold text-white shadow-md transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
          >
            <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,var(--color-primary-dark),var(--color-primary))] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />

            <span className="relative z-10">Explore Collection</span>

            <ArrowUpRight
              size={17}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          <div className="mt-10 hidden items-center gap-3 lg:flex">
            <div className="flex -space-x-2">
              {steps.slice(0, 3).map((step) => {
                const Icon = step.icon;

                return (
                  <span
                    key={step.number}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#D6F0F5] bg-white text-[#07558F] shadow-sm"
                  >
                    <Icon size={17} strokeWidth={1.8} />
                  </span>
                );
              })}
            </div>

            <div>
              <p className="font-heading text-sm font-semibold text-[#07558F]">
                Simple & Transparent
              </p>

              <p className="text-xs text-[#607F8B]">
                From checkout to tracking
              </p>
            </div>
          </div>
        </div>

        <div ref={cardsRef} className="flex min-w-0 flex-col gap-4">
          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes howSnowfall {
          0% {
            transform: translate3d(0, -60px, 0) rotate(0deg);
          }

          100% {
            transform: translate3d(var(--snow-drift, 30px), 110vh, 0)
              rotate(360deg);
          }
        }

        .how-snow {
          animation: howSnowfall 12s linear infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .how-snow {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
