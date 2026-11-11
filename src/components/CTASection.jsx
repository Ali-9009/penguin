"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  FlaskConical,
  ShieldCheck,
  Snowflake,
} from "lucide-react";
import { useRef, useState } from "react";

const floatingProducts = [
  {
    image: "/assets/pp-1sm.png",
    left: "5%",
    delay: "-2s",
    duration: "19s",
    size: "w-[62px] sm:w-[85px]",
    rotation: "-22deg",
  },
  {
    image: "/assets/pp-1cag.png",
    left: "18%",
    delay: "-11s",
    duration: "24s",
    size: "w-[48px] sm:w-[75px]",
    rotation: "18deg",
  },
  {
    image: "/assets/pp-1sm.png",
    left: "33%",
    delay: "-16s",
    duration: "21s",
    size: "w-[54px] sm:w-[82px]",
    rotation: "-15deg",
  },
  {
    image: "/assets/pp-1cag.png",
    left: "49%",
    delay: "-7s",
    duration: "26s",
    size: "w-[55px] sm:w-[78px]",
    rotation: "25deg",
  },
  {
    image: "/assets/pp-1sm.png",
    left: "65%",
    delay: "-13s",
    duration: "22s",
    size: "w-[50px] sm:w-[70px]",
    rotation: "-28deg",
  },
  {
    image: "/assets/pp-1cag.png",
    left: "79%",
    delay: "-4s",
    duration: "20s",
    size: "w-[60px] sm:w-[85px]",
    rotation: "16deg",
  },
  {
    image: "/assets/pp-1sm.png",
    left: "92%",
    delay: "-17s",
    duration: "25s",
    size: "w-[54px] sm:w-[80px]",
    rotation: "-18deg",
  },
];

const floatingSnowflakes = Array.from({ length: 35 }, (_, index) => {
  const sizes = [10, 14, 18, 12, 20, 15, 24];

  return {
    id: index,
    left: `${(index * 37.7 + 11) % 100}%`,
    size: sizes[index % sizes.length],
    duration: `${7 + ((index * 3.7) % 9)}s`,
    delay: `${-((index * 2.3) % 15)}s`,
    opacity: 0.2 + ((index * 7) % 5) / 10,
    drift: `${(index % 2 === 0 ? 1 : -1) * (15 + (index % 5) * 9)}px`,
  };
});

export default function ResearchCTA() {
  const glowRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const section = e.currentTarget;
    const rect = section.getBoundingClientRect();

    if (glowRef.current) {
      glowRef.current.style.left = `${e.clientX - rect.left}px`;
      glowRef.current.style.top = `${e.clientY - rect.top}px`;
    }
  };
  return (
    <section
      aria-labelledby="research-cta-heading"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative isolate mt-10 flex min-h-110 w-full items-center justify-center overflow-hidden bg-[#041625] px-4 py-12 sm:min-h-120 sm:px-6 lg:min-h-140 lg:px-8"
    >
      {/* =====================================
          BACKGROUND GRADIENT
      ===================================== */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#092D49] via-[#041625] to-[#020C16]" />

      {/* LEFT GLOW */}

      <div className="pointer-events-none absolute top-1/4 -left-40 h-[500px] w-[500px] rounded-full bg-[#07558F]/20 blur-[130px]" />

      {/* RIGHT GLOW */}

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#04C1CA]/10 blur-[130px]" />

      {/* MOUSE FOLLOWING GLOW */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className={`pointer-events-none absolute z-[2] hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(4,193,202,0.24)_0%,rgba(7,85,143,0.12)_38%,transparent_72%)] blur-[35px] transition-opacity duration-500 md:block ${
          isHovering ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* =====================================
          FLOATING / RAINING PRODUCTS
      ===================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {floatingProducts.map((product, index) => (
          <div
            key={index}
            className={`cta-product-rain absolute top-0 ${product.size}`}
            style={{
              left: product.left,
              animationDelay: product.delay,
              animationDuration: product.duration,
              "--product-rotation": product.rotation,
            }}
          >
            <div className="relative aspect-[2/3] w-full">
              <Image
                src={product.image}
                alt=""
                fill
                sizes="(max-width: 640px) 62px, 85px"
                className="object-contain opacity-35 drop-shadow-[0_15px_25px_rgba(0,0,0,0.3)] sm:opacity-45"
              />
            </div>
          </div>
        ))}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      >
        {floatingSnowflakes.map((snow) => (
          <Snowflake
            key={snow.id}
            size={snow.size}
            strokeWidth={1.4}
            className="cta-snowflake absolute top-0 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]"
            style={{
              left: snow.left,
              opacity: snow.opacity,
              animationDuration: snow.duration,
              animationDelay: snow.delay,
              "--snow-drift": snow.drift,
            }}
          />
        ))}
      </div>

      {/* CENTER DARK GRADIENT FOR TEXT READABILITY */}

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(4,22,37,0.85)_0%,rgba(4,22,37,0.4)_45%,transparent_85%)]" />

      {/* =====================================
          CENTER CONTENT
      ===================================== */}

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        {/* HEADING */}

        <h2
          id="research-cta-heading"
          className="font-heading max-w-[1100px] text-[clamp(2.8rem,9vw,4.5rem)] leading-[1.05] font-extrabold tracking-[-0.06em] text-white sm:text-[clamp(4rem,7vw,6rem)] lg:text-[clamp(5rem,7vw,7rem)]"
        >
          Research Peptides.
          <br />
          <span className="bg-gradient-to-r from-[#54D9E7] via-[#8DF0F2] to-[#04C1CA] bg-clip-text text-transparent">
            Precision in Every Batch.
          </span>
        </h2>

        {/* CTA BUTTONS */}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10">
          {/* PRIMARY */}

          <Link href="/shop" className="btn-gradient">
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <span className="relative z-10">Shop Research Peptides</span>

            <ArrowUpRight
              size={17}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          {/* SECONDARY */}

          <Link
            href="/about"
            className="group inline-flex h-10 items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 text-[12px] font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/15 sm:h-12 sm:px-8 sm:text-[13px]"
          >
            <FlaskConical size={17} />
            Learn More
          </Link>
        </div>
      </div>

      {/* =====================================
          ANIMATIONS
      ===================================== */}

      <style jsx global>{`
        @keyframes ctaProductRain {
          0% {
            transform: translate3d(0, -180px, 0) rotate(var(--product-rotation));
          }

          50% {
            transform: translate3d(25px, 350px, 0)
              rotate(calc(var(--product-rotation) + 12deg));
          }

          100% {
            transform: translate3d(-15px, var(--product-fall-distance), 0)
              rotate(calc(var(--product-rotation) - 8deg));
          }
        }

        .cta-product-rain {
          --product-fall-distance: 700px;
          animation-name: ctaProductRain;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }

        @keyframes ctaSnowfall {
          0% {
            transform: translate3d(0, -60px, 0) rotate(0deg);
          }

          50% {
            transform: translate3d(
                calc(var(--snow-drift, 30px) * 0.5),
                calc(var(--snow-fall-distance) * 0.5),
                0
              )
              rotate(180deg);
          }

          100% {
            transform: translate3d(
                var(--snow-drift, 30px),
                var(--snow-fall-distance),
                0
              )
              rotate(360deg);
          }
        }

        .cta-snowflake {
          --snow-fall-distance: 650px;
          animation-name: ctaSnowfall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }

        @media (min-width: 640px) {
          .cta-product-rain {
            --product-fall-distance: 800px;
          }

          .cta-snowflake {
            --snow-fall-distance: 750px;
          }
        }

        @media (min-width: 1024px) {
          .cta-product-rain {
            --product-fall-distance: 950px;
          }

          .cta-snowflake {
            --snow-fall-distance: 850px;
          }
        }

        @media (max-width: 639px) {
          .cta-product-rain {
            opacity: 0.5;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cta-product-rain,
          .cta-snowflake {
            animation: none;
            will-change: auto;
          }

          .cta-product-rain {
            opacity: 0.15;
          }
        }
      `}</style>
    </section>
  );
}
