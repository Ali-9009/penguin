"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles, Zap, FlaskConical } from "lucide-react";

// =====================================
// PROMOTIONS
// =====================================

const promotions = [
  {
    badge: "PENGUIN EXCLUSIVE",
    title: "DISCOVER THE COLLECTION",
    subtitle: "explore our research essentials",
    button: "Shop Now",
    href: "/shop",
    icon: Sparkles,
  },
  {
    badge: "RESEARCH ESSENTIALS",
    title: "PRECISION STARTS HERE",
    subtitle: "find your next research product",
    button: "Explore",
    href: "/shop",
    icon: FlaskConical,
  },
  {
    badge: "EXPLORE MORE",
    title: "FIND YOUR FORMULA",
    subtitle: "multiple strengths to discover",
    button: "View Products",
    href: "/shop",
    icon: Zap,
  },
];

// =====================================
// CURVED SHAPE
// =====================================

const curvePath = `
  M0 65
  C300 65 360 35 720 35
  C1080 35 1140 65 1440 65

  L1440 225

  C1140 225 1080 195 720 195
  C360 195 300 225 0 225

  Z
`;

// =====================================
// PROMO ITEM
// =====================================

function PromoItem({ promotion }) {
  const Icon = promotion.icon;

  return (
    <div className="flex shrink-0 items-center gap-5 pr-5 sm:gap-7 sm:pr-7 lg:gap-9 lg:pr-9">
      {/* BADGE */}

      <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/95 px-3 py-2 font-sans text-[9px] font-bold tracking-[0.12em] whitespace-nowrap text-[#073B68] uppercase shadow-sm sm:px-4 sm:text-[10px]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#04C1CA]" />

        {promotion.badge}
      </span>

      {/* TITLE */}

      <span className="font-heading shrink-0 text-[15px] font-bold tracking-[-0.035em] whitespace-nowrap text-white uppercase sm:text-[18px] lg:text-[20px]">
        {promotion.title}
      </span>

      {/* SUBTITLE */}

      <span className="font-heading hidden shrink-0 text-[15px] font-semibold whitespace-nowrap text-white/80 italic sm:inline sm:text-[18px] lg:text-[20px]">
        {promotion.subtitle}
      </span>

      {/* BUTTON */}

      {/* <Link
        href={promotion.href}
        className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2.5 font-sans text-[11px] font-semibold whitespace-nowrap text-[#073B68] transition-all duration-300 hover:bg-[#E6F9FB] sm:px-6 sm:text-xs"
      >
        {promotion.button}

        <ArrowUpRight size={15} strokeWidth={1.8} />
      </Link> */}

      {/* DECORATIVE ICON */}

      <Icon
        size={21}
        strokeWidth={1.7}
        aria-hidden="true"
        className="shrink-0 text-[#79E6EB]"
      />
    </div>
  );
}

// =====================================
// PROMO MARQUEE
// =====================================

export default function PromoMarquee() {
  return (
    <section
      aria-label="Penguin Peptides promotional offers"
      className="relative z-30 -mt-12 h-20 w-full overflow-hidden sm:-mt-18 sm:h-30 lg:-mt-10 lg:h-40"
    >
      {/* =========================
          SVG BACKGROUND
      ========================= */}

      <svg
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          {/* GRADIENT */}

          <linearGradient
            id="promoCurveGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#073B68" />
            <stop offset="50%" stopColor="#07558F" />
            <stop offset="100%" stopColor="#009CA9" />
          </linearGradient>

          {/* RESPONSIVE CLIP PATH */}

          <clipPath id="promoCurveClip" clipPathUnits="objectBoundingBox">
            <path
              d={curvePath}
              transform="scale(0.000694444444 0.003846153846)"
            />
          </clipPath>
        </defs>

        {/* MAIN CURVED RIBBON */}

        <path d={curvePath} fill="url(#promoCurveGradient)" />
      </svg>

      {/* =========================
          CURVED MARQUEE CONTENT
      ========================= */}

      <div
        className="absolute inset-0"
        style={{
          clipPath: "url(#promoCurveClip)",
        }}
      >
        <div className="promo-marquee flex h-full w-full items-center overflow-hidden">
          <div className="promo-marquee-track flex w-max items-center">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                inert={copy === 1}
                className="flex shrink-0 items-center"
              >
                {promotions.map((promotion) => (
                  <PromoItem
                    key={`${copy}-${promotion.title}`}
                    promotion={promotion}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================
          MARQUEE ANIMATION
      ========================= */}

      <style jsx global>{`
        @keyframes penguin-promo-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .promo-marquee-track {
          animation: penguin-promo-marquee 38s linear infinite;
          will-change: transform;
        }

        .promo-marquee:hover .promo-marquee-track,
        .promo-marquee:focus-within .promo-marquee-track {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .promo-marquee-track {
            animation-duration: 26s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .promo-marquee-track {
            animation: none;
            will-change: auto;
          }

          .promo-marquee {
            overflow-x: auto;
          }
        }
      `}</style>
    </section>
  );
}
