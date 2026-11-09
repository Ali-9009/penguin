"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";
import PromoMarquee from "./PromoMarquee";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 30,
      disable: () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#F7FAFC] to-transparent pt-20 lg:pt-24">
      {/* BACKGROUND DECORATION */}

      <div className="pointer-events-none absolute top-[30%] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-100/40 blur-[120px]" />

      {/* MAIN HERO */}

      <div className="relative mx-auto max-w-350 px-4 sm:px-6 lg:px-10">
        <div className="relative flex min-h-140 flex-col items-center justify-center text-center lg:min-h-150">
          {/* LEFT PRODUCT */}

          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="pointer-events-none absolute bottom-0 left-0 hidden h-[430px] w-[250px] overflow-hidden rounded-t-[150px] bg-gradient-to-b from-[#04C1CA] to-[#07558F] lg:block xl:h-[490px] xl:w-[290px]"
          >
            <div className="absolute inset-x-0 top-10 flex justify-center">
              <Image
                src="/assets/pp-1sm.png"
                alt="Penguin Peptides Research Vial"
                width={260}
                height={420}
                priority
                className="product-float h-auto w-[230px] object-contain drop-shadow-2xl xl:w-[270px]"
              />
            </div>
          </div>

          {/* RIGHT PRODUCT */}

          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="pointer-events-none absolute right-0 bottom-0 hidden h-[430px] w-[250px] overflow-hidden rounded-t-[150px] bg-gradient-to-b from-[#07558F] to-[#04C1CA] lg:block xl:h-[490px] xl:w-[290px]"
          >
            <div className="absolute inset-x-0 top-10 flex justify-center">
              <Image
                src="/assets/pp-1cag.png"
                alt="Premium Research Peptide Vial"
                width={260}
                height={420}
                priority
                className="product-float h-auto w-[230px] object-contain drop-shadow-2xl xl:w-[270px]"
              />
            </div>
          </div>

          {/* CENTER CONTENT */}

          <div className="relative z-10 mx-auto flex max-w-[950px] flex-col items-center">
            {/* HEADING - AOS STAGGERED REVEAL */}

            <h1 className="font-heading text-primary text-[clamp(3.6rem,8vw,8.5rem)] leading-[0.85] font-extrabold tracking-[-0.065em] uppercase">
              <span className="block overflow-hidden pb-[0.08em]">
                <span data-aos="fade-up" data-aos-delay="100" className="block">
                  PRECISION
                </span>
              </span>

              <span className="block overflow-hidden pb-[0.08em]">
                <span
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="text-secondary-dark block"
                >
                  IN EVERY
                </span>
              </span>

              <span className="block overflow-hidden pb-[0.08em]">
                <span data-aos="fade-up" data-aos-delay="300" className="block">
                  DISCOVERY
                </span>
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-muted text-md mx-auto mt-8 max-w-[520px] font-sans leading-7"
            >
              Discover premium research peptides developed with a commitment to
              quality, consistency, and scientific exploration.
            </p>

            {/* BUTTONS */}

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              <Link href="/shop" className="btn-primary">
                Explore Peptides
              </Link>

              <Link href="/about-us" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>

          {/* MOBILE PRODUCT VISUALS */}

          <div className="mt-8 flex w-full items-end justify-between gap-3 lg:hidden">
            {/* LEFT */}

            <div
              data-aos="zoom-in"
              data-aos-delay="250"
              className="from-secondary to-primary relative flex h-[220px] w-1/2 items-end justify-center overflow-hidden rounded-t-full bg-gradient-to-b sm:h-[320px]"
            >
              <Image
                src="/assets/pp-1cag.png"
                alt="Research peptide vial"
                width={180}
                height={270}
                className="product-float relative z-10 h-[90%] w-auto -rotate-12 object-contain drop-shadow-xl"
              />
            </div>

            {/* RIGHT */}

            <div
              data-aos="zoom-in"
              data-aos-delay="350"
              className="from-primary to-secondary relative flex h-[220px] w-1/2 items-end justify-center overflow-hidden rounded-t-full bg-gradient-to-b sm:h-[320px]"
            >
              <Image
                src="/assets/pp-1sm.png"
                alt="Research peptide product"
                width={180}
                height={270}
                className="product-float relative z-10 h-[90%] w-auto rotate-12 object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM CURVED SHAPE */}
      <PromoMarquee />
    </section>
  );
}
