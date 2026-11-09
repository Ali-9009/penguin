import Bestsellers from "@/components/Bestsellers";
import CTASection from "@/components/CTASection";
import Faqs from "@/components/Faqs";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ProductGrid from "@/components/ProductGrid";
import PromoMarquee from "@/components/PromoMarquee";
import ResearchShowcase from "@/components/ResearchShowcase";
import USShippingCoverage from "@/components/shipping/USShippingCoverage";
import WhyChooseUs from "@/components/WhyChooseUs";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section
        data-aos="fade-up"
        className="relative w-full overflow-hidden bg-[#EAF7FA]"
      >
        {/* BACKGROUND IMAGES */}
        <div className="absolute inset-0">
          {/* MOBILE + TABLET */}
          <Image
            src="/assets/hero-mob.png"
            alt=""
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 1px"
            className="object-cover object-bottom lg:hidden"
          />

          {/* DESKTOP */}
          <Image
            src="/assets/hero.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 100vw, 1px"
            className="hidden object-cover object-center lg:block"
          />
        </div>

        {/* MOBILE OVERLAY */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#F2FAFC]/65 via-transparent to-transparent lg:hidden" />

        {/* DESKTOP OVERLAY */}
        <div className="pointer-events-none absolute inset-0 hidden bg-linear-to-r from-[#F2FAFC]/55 via-transparent to-transparent lg:block" />

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col items-center pt-16 pb-100 text-center sm:pt-20 sm:pb-[450px] md:pt-14 md:pb-140 lg:min-h-[650px] lg:items-start lg:justify-center lg:py-20 lg:text-left xl:min-h-[700px]">
            <div className="relative z-30 w-full max-w-[560px] lg:max-w-[620px]">
              {/* EYEBROW */}
              <div
                data-hero-eyebrow
                className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#D6EAF0] bg-white/90 px-4 py-2.5 shadow-[0_5px_20px_rgba(7,85,143,0.04)]"
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
                className="font-heading text-primary max-w-[620px] text-[clamp(2.3rem,8vw,3.5rem)] leading-[1.08] font-extrabold tracking-[-0.055em] sm:text-[clamp(3rem,5vw,4rem)] lg:text-[clamp(3.2rem,4vw,4.8rem)]"
              >
                Precision in
                <br />
                <span className="text-secondary-dark">Every Discovery.</span>
              </h1>

              {/* DESCRIPTION */}
              <p
                data-hero-description
                className="mx-auto mt-6 max-w-[530px] font-sans text-[14px] leading-[1.75] text-[#657F8B] sm:mt-7 sm:text-[16px] lg:mx-0"
              >
                Discover premium research peptides in a variety of strengths and
                formulations for laboratory research.
              </p>

              {/* BUTTONS */}
              <div
                data-hero-buttons
                className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-9 lg:justify-start"
              >
                {/* PRIMARY BUTTON */}
                <Link
                  href="/shop"
                  className="group relative inline-flex h-11 items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#07558F] via-[#0878A5] to-[#04AEBB] px-5 text-[13px] font-semibold text-white shadow-[0_8px_24px_rgba(7,85,143,0.20)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(7,85,143,0.28)] active:translate-y-0 sm:h-[52px] sm:px-8 sm:text-[14px]"
                >
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
                  className="group text-primary hover:border-primary inline-flex h-11 items-center justify-center gap-3 rounded-full border border-[#C8DEE8] bg-white/80 px-5 text-[13px] font-semibold shadow-[0_4px_15px_rgba(7,85,143,0.04)] backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#EAF7FA] hover:shadow-[0_10px_25px_rgba(7,85,143,0.10)] active:translate-y-0 sm:h-[52px] sm:px-8 sm:text-[14px]"
                >
                  <span>Learn More</span>

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>

              {/* TRUST PILLS - HIDDEN ON MOBILE */}
              <div
                data-aos="fade-up"
                className="mt-8 hidden flex-wrap items-center justify-center gap-3 sm:flex lg:justify-start"
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
          </div>
        </div>
      </section>
      
      <PromoMarquee />

      <Hero />

      <ProductGrid />
      <WhyChooseUs />

      <HowItWorks />
      <Bestsellers />
      <ResearchShowcase />
      <Faqs />
      <USShippingCoverage />
      <CTASection />
    </main>
  );
}
