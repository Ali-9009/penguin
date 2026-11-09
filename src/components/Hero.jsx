"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  FlaskConical,
  ShieldCheck,
  Microscope,
  PackageCheck,
  Sparkles,
  Check,
} from "lucide-react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ==========================================
   PRODUCT IMAGES

   Change image paths here whenever needed.
========================================== */

const heroProducts = [
  {
    id: 1,
    name: "PP-1SM Research Peptide",
    image: "/assets/pp-1sm.png",
    position: "left",
  },
  {
    id: 2,
    name: "PP-1 Cag Research Peptide",
    image: "/assets/pp-1cag.png",
    position: "center",
  },
  {
    id: 3,
    name: "PP-1SM Research Peptide",
    image: "/assets/pp-1tz.png",
    position: "right",
  },
];

/* ==========================================
   PRODUCT VISUAL
========================================== */

function HeroProduct({ product, index }) {
  const positions = {
    left: `
      left-[2%] bottom-[13%]
      h-[205px] w-[140px]
      sm:left-[6%] sm:bottom-[11%]
      sm:h-[290px] sm:w-[190px]
      lg:left-[0%] lg:bottom-[14%]
      lg:h-[350px] lg:w-[225px]
      xl:left-[3%]
      xl:h-[395px] xl:w-[255px]
      z-10
    `,

    center: `
      left-1/2 bottom-[8%]
      h-[260px] w-[175px]
      -translate-x-1/2
      sm:bottom-[6%]
      sm:h-[375px] sm:w-[240px]
      lg:bottom-[8%]
      lg:h-[450px] lg:w-[290px]
      xl:h-[500px] xl:w-[320px]
      z-30
    `,

    right: `
      right-[2%] bottom-[15%]
      h-[205px] w-[140px]
      sm:right-[6%] sm:bottom-[13%]
      sm:h-[290px] sm:w-[190px]
      lg:right-[0%] lg:bottom-[16%]
      lg:h-[350px] lg:w-[225px]
      xl:right-[3%]
      xl:h-[395px] xl:w-[255px]
      z-20
    `,
  };

  const floatClasses = {
    left: "hero-float-left",
    center: "hero-float-center",
    right: "hero-float-right",
  };

  return (
    <div
      data-hero-product={product.position}
      className={`pointer-events-none absolute ${positions[product.position]} `}
    >
      <div
        className={`relative h-full w-full ${floatClasses[product.position]} `}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={index === 1}
          sizes="
            (max-width: 640px) 175px,
            (max-width: 1024px) 240px,
            320px
          "
          className="object-contain drop-shadow-[0_25px_22px_rgba(7,59,104,0.20)]"
        />
      </div>
    </div>
  );
}

/* ==========================================
   HERO
========================================== */

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const heading = hero.querySelector("[data-hero-heading]");
      const description = hero.querySelector("[data-hero-description]");
      const buttons = hero.querySelector("[data-hero-buttons]");
      const eyebrow = hero.querySelector("[data-hero-eyebrow]");

      const trustItems = gsap.utils.toArray(
        hero.querySelectorAll("[data-trust-item]"),
      );

      const leftProduct = hero.querySelector('[data-hero-product="left"]');

      const centerProduct = hero.querySelector('[data-hero-product="center"]');

      const rightProduct = hero.querySelector('[data-hero-product="right"]');

      const visual = hero.querySelector("[data-hero-visual]");

      const floatingBadges = gsap.utils.toArray(
        hero.querySelectorAll("[data-floating-badge]"),
      );

      /* INITIAL STATES */

      gsap.set([eyebrow, heading, description, buttons], {
        opacity: 0,
        y: 35,
      });

      gsap.set(trustItems, {
        opacity: 0,
        y: 25,
      });

      gsap.set(leftProduct, {
        opacity: 0,
        x: -130,
        y: 65,
        rotation: -22,
        scale: 0.65,
      });

      gsap.set(rightProduct, {
        opacity: 0,
        x: 130,
        y: 65,
        rotation: 22,
        scale: 0.65,
      });

      gsap.set(centerProduct, {
        opacity: 0,
        y: 160,
        rotation: -8,
        scale: 0.6,
      });

      gsap.set(visual, {
        opacity: 0,
        scale: 0.9,
      });

      gsap.set(floatingBadges, {
        opacity: 0,
        scale: 0.5,
      });

      /* MAIN TIMELINE */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top 85%",
          once: true,
        },
      });

      /* VISUAL BACKGROUND */

      tl.to(visual, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      });

      /* LEFT CONTENT */

      tl.to(
        eyebrow,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.9",
      );

      tl.to(
        heading,
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.45",
      );

      tl.to(
        description,
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
        },
        "-=0.55",
      );

      tl.to(
        buttons,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.5",
      );

      /* FIRST PRODUCT: LEFT */

      tl.to(
        leftProduct,
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.25)",
        },
        "-=0.65",
      );

      /* SECOND PRODUCT: RIGHT */

      tl.to(
        rightProduct,
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.25)",
        },
        "-=0.85",
      );

      /* THIRD PRODUCT: CENTER */

      tl.to(
        centerProduct,
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 1.25,
          ease: "back.out(1.4)",
        },
        "-=0.85",
      );

      /* FLOATING BADGES */

      tl.to(
        floatingBadges,
        {
          opacity: 1,
          scale: 1,
          duration: 0.65,
          stagger: 0.18,
          ease: "back.out(1.8)",
        },
        "-=0.5",
      );

      /* TRUST POINTS */

      tl.to(
        trustItems,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=1.1",
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      aria-labelledby="hero-heading"
      className="relative isolate w-full overflow-hidden bg-linear-to-b from-[#F5FAFC] via-white to-white px-4 py-8 sm:px-6 md:py-12 lg:flex lg:items-center lg:px-8"
    >
      {/* ==========================================
          BACKGROUND
      ========================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[250px] -right-[200px] h-[600px] w-[600px] rounded-full bg-[#DDF7FA]/50 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-250px] left-[-200px] h-[500px] w-[500px] rounded-full bg-[#E3F2FA]/60 blur-[120px]"
      />

      {/* ==========================================
          MAIN CONTAINER
      ========================================== */}

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-4 sm:gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-5 xl:gap-10">
        {/* LEFT CONTENT */}
        <div className="relative z-30 min-w-0">
          {/* EYEBROW */}

          <div
            data-hero-eyebrow
            className="mb-3 inline-flex items-center gap-2.5 rounded-full border border-[#D6EAF0] bg-white/90 px-4 py-2.5 shadow-[0_5px_20px_rgba(7,85,143,0.04)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="bg-secondary/40 absolute inset-0 animate-ping rounded-full" />
              <span className="bg-secondary relative h-2 w-2 rounded-full" />
            </span>

            <span className="text-primary text-[10px] font-bold tracking-[0.14em] uppercase sm:text-[11px]">
              Precision in Every Discovery
            </span>
          </div>

          {/* HEADING */}

          <h1
            id="hero-heading"
            data-hero-heading
            className="font-heading text-primary max-w-[650px] text-[clamp(2.3rem,8vw,3.5rem)] leading-[1.08] font-extrabold tracking-[-0.055em] sm:text-[clamp(3rem,5vw,4rem)] lg:text-[clamp(3.2rem,4vw,4.8rem)]"
          >
            Precision in
            <br />
            <span className="text-secondary-dark">Every Discovery.</span>
          </h1>

          {/* DESCRIPTION */}

          <p
            data-hero-description
            className="text-md mt-6 max-w-[530px] font-sans leading-[1.7] text-[#657F8B] sm:mt-7"
          >
            Discover premium research peptides in a variety of strengths and
            formulations for laboratory research.
          </p>

          <div
            data-hero-buttons
            className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9"
          >
            {/* PRIMARY BUTTON */}
            <Link
              href="/shop"
              className="group relative inline-flex h-10 items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#07558F] via-[#0878A5] to-[#04AEBB] px-4 text-[13px] font-semibold text-white shadow-[0_8px_24px_rgba(7,85,143,0.20)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(7,85,143,0.28)] active:translate-y-0 sm:h-[52px] sm:px-8 sm:text-[14px]"
            >
              {/* HOVER SHINE */}
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative z-10">Explore Collection</span>

              <ArrowUpRight
                size={18}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            {/* SECONDARY BUTTON */}
            <Link
              href="/about-us"
              className="group text-primary inline-flex h-10 items-center justify-center gap-3 rounded-full border border-[#C8DEE8] bg-white/80 px-4 text-[13px] font-semibold shadow-[0_4px_15px_rgba(7,85,143,0.04)] backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#07558F] hover:bg-[#EAF7FA] hover:shadow-[0_10px_25px_rgba(7,85,143,0.10)] active:translate-y-0 sm:h-[52px] sm:px-8 sm:text-[14px]"
            >
              <span>Learn More</span>

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          <div
            data-aos="fade-up"
            className="mt-8 hidden flex-wrap items-center gap-3 sm:flex"
          >
            {[
              { value: "99.5%+", label: "Verified Purity" },
              { value: "100K+", label: "Researchers Served" },
            ].map((item) => (
              <div
                key={item.label}
                className="group inline-flex items-center gap-2.5 rounded-full border border-[#D6E9EF] bg-gradient-to-r from-white to-[#EDF9FC] px-4 py-2.5 shadow-[0_4px_16px_rgba(7,85,143,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8DD8E3] hover:shadow-[0_8px_24px_rgba(7,85,143,0.10)]"
              >
                <span className="font-heading text-primary text-[13px] font-bold">
                  {item.value}
                </span>

                <span className="text-xs font-medium text-[#698593]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PRODUCT COMPOSITION */}
        <div className="relative min-w-0">
          <div className="relative mx-auto h-[370px] w-full max-w-[520px] sm:h-[500px] lg:h-[580px] lg:max-w-none xl:h-[650px]">
            {/* MAIN GRADIENT VISUAL */}

            <div
              data-hero-visual
              aria-hidden="true"
              className="pointer-events-none absolute inset-[8%] rounded-full bg-gradient-to-br from-[#E1F6FA] via-[#EFFBFC] to-[#D9EFF8]"
            />

            {/* CENTER GLOW */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#BDEAF3]/50 blur-[70px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]"
            />

            {/* OUTER RING */}

            <div
              aria-hidden="true"
              className="border-primary/10 pointer-events-none absolute top-1/2 left-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border sm:h-[430px] sm:w-[430px] lg:h-[530px] lg:w-[530px]"
            />

            {/* INNER RING */}

            <div
              aria-hidden="true"
              className="border-secondary/20 pointer-events-none absolute top-1/2 left-1/2 h-[245px] w-[245px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed sm:h-[350px] sm:w-[350px] lg:h-[430px] lg:w-[430px]"
            />

            {/* ==========================================
                FLOATING TOP BADGE
            ========================================== */}

            <div
              data-floating-badge
              className="absolute top-[8%] right-[1%] z-40 flex items-center gap-2 rounded-full border border-[#DCEAF0] bg-white/90 px-3 py-2 shadow-[0_10px_30px_rgba(7,85,143,0.08)] backdrop-blur-md sm:top-[11%] sm:right-[3%] sm:px-4 sm:py-3"
            >
              <span className="text-secondary-dark flex h-7 w-7 items-center justify-center rounded-full bg-[#E6F9FB] sm:h-9 sm:w-9">
                <Microscope size={17} />
              </span>

              <div>
                <p className="font-heading text-primary font-semibold sm:text-sm">
                  Research Focused
                </p>

                <p className="text-xs text-[#8199A4]">Scientific Exploration</p>
              </div>
            </div>

            {/* ==========================================
                PRODUCT IMAGES
            ========================================== */}

            {heroProducts.map((product, index) => (
              <HeroProduct key={product.id} product={product} index={index} />
            ))}

            {/* ==========================================
                FLOATING BOTTOM BADGE
            ========================================== */}

            <div
              data-floating-badge
              className="absolute bottom-[5%] left-[0%] z-40 flex items-center gap-2 rounded-[16px] border border-[#DCEAF0] bg-white/95 px-3 py-2.5 shadow-[0_12px_35px_rgba(7,85,143,0.10)] backdrop-blur-md sm:bottom-[9%] sm:px-4 sm:py-3"
            >
              <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-white sm:h-10 sm:w-10">
                <ShieldCheck size={18} />
              </div>

              <div>
                <p className="font-heading text-primary text-sm font-semibold">
                  Quality Mindset
                </p>

                <p className="mt-0.5 flex items-center gap-1 text-xs text-[#708692]">
                  Attention to Detail
                </p>
              </div>
            </div>

            {/* DECORATIVE SPARKLE */}

            <Sparkles
              aria-hidden="true"
              className="text-secondary/50 pointer-events-none absolute top-[24%] left-[5%] h-6 w-6 sm:h-8 sm:w-8"
              strokeWidth={1.2}
            />
          </div>
        </div>
      </div>

      {/* ==========================================
          PRODUCT FLOATING ANIMATIONS
      ========================================== */}

      <style jsx global>{`
        @keyframes heroProductFloatLeft {
          0%,
          100% {
            transform: translateY(0) rotate(-10deg);
          }

          50% {
            transform: translateY(-15px) rotate(-7deg);
          }
        }

        @keyframes heroProductFloatCenter {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-18px);
          }
        }

        @keyframes heroProductFloatRight {
          0%,
          100% {
            transform: translateY(-8px) rotate(10deg);
          }

          50% {
            transform: translateY(9px) rotate(7deg);
          }
        }

        .hero-float-left {
          animation: heroProductFloatLeft 5.5s ease-in-out infinite;
        }

        .hero-float-center {
          animation: heroProductFloatCenter 5s ease-in-out infinite;
          animation-delay: -1s;
        }

        .hero-float-right {
          animation: heroProductFloatRight 6s ease-in-out infinite;
          animation-delay: -2s;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-float-left,
          .hero-float-center,
          .hero-float-right {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
