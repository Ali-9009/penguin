"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles, Zap, FlaskConical } from "lucide-react";

// =====================================
// PROMOTIONS
// =====================================

const promotions = [
  {
    title: "Premium Research Peptides",
    icon: FlaskConical,
  },
  {
    title: "Explore Our Collection",
    icon: Sparkles,
  },
  {
    title: "Multiple Strengths Available",
    icon: Zap,
  },
  {
    title: "Research-Focused Products",
    icon: FlaskConical,
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
    <div className="flex shrink-0 items-center gap-6 pr-6 sm:gap-10 sm:pr-10 lg:gap-14 lg:pr-14">
      {/* ICON + TEXT */}
      <div className="flex shrink-0 items-center gap-3 sm:gap-4">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[#8AF0F1] backdrop-blur-sm sm:h-8 sm:w-8">
          <Icon size={16} strokeWidth={1.7} />
        </span>

        <span className="font-heading text-[13px] font-semibold tracking-[-0.02em] whitespace-nowrap text-white sm:text-[16px] lg:text-[18px]">
          {promotion.title}
        </span>
      </div>

      {/* SEPARATOR */}
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7CE5E8]"
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
      aria-label="Penguin Peptides highlights"
      className="relative z-30 w-full overflow-hidden bg-linear-to-r from-[#073B68] via-[#07558F] to-[#009CA9] py-3 sm:py-3"
    >
      {/* SUBTLE BACKGROUND GLOW */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/3 h-40 w-80 rounded-full bg-white/10 blur-[70px]"
      />

      {/* SCROLLING CONTENT */}
      <div className="promo-marquee relative flex w-full items-center overflow-hidden">
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

      {/* MARQUEE ANIMATION */}
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

        .promo-marquee:hover .promo-marquee-track {
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
