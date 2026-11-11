// import Bestsellers from "@/components/Bestsellers";
import CardSlider from "@/components/CardSlider";
import CTASection from "@/components/CTASection";
import Faqs from "@/components/Faqs";
// import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ProductGrid from "@/components/ProductGrid";
import ProductVerification from "@/components/ProductVerification";
import PromoMarquee from "@/components/PromoMarquee";
import ResearchShowcase from "@/components/ResearchShowcase";
import USShippingCoverage from "@/components/shipping/USShippingCoverage";
import WhyChooseUs from "@/components/WhyChooseUs";
import { ArrowUpRight, FlaskConical, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section
        aria-labelledby="hero-heading"
        className="relative h-[calc(100svh-110px)] w-full overflow-hidden bg-[#EAF7FA] sm:h-[calc(100svh-115px)] lg:h-[calc(100svh-110px)]"
      >
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

        {/* =====================================
      BACKGROUND OVERLAYS
  ===================================== */}

        {/* MOBILE OVERLAY */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#F2FAFC]/65 via-transparent to-transparent lg:hidden" />

        {/* DESKTOP OVERLAY */}
        <div className="pointer-events-none absolute inset-0 hidden bg-linear-to-r from-[#F2FAFC]/55 via-transparent to-transparent lg:block" />

        {/* =====================================
      HERO CONTENT
  ===================================== */}

        <div className="relative z-10 mx-auto h-full w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-full w-full flex-col items-center justify-start pt-12 text-center sm:pt-10 md:pt-12 lg:items-start lg:justify-center lg:py-0 lg:text-left">
            <div className="relative z-30 w-full max-w-[560px] lg:max-w-[620px]">
              {/* EYEBROW */}

              <div
                data-hero-eyebrow
                className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#D6EAF0] bg-white/90 px-4 py-2.5 shadow-[0_5px_20px_rgba(7,85,143,0.04)] sm:mb-5"
              >
                <span className="relative flex h-2 w-2">
                  <span className="bg-secondary/40 absolute inset-0 animate-ping rounded-full" />

                  <span className="bg-secondary relative h-2 w-2 rounded-full" />
                </span>

                <span className="text-primary text-[10px] font-bold tracking-[0.14em] uppercase sm:text-[11px]">
                  Precision in Every Discovery
                </span>
              </div>

              {/* =====================================
            HEADING
        ===================================== */}

              <h1
                id="hero-heading"
                data-hero-heading
                className="font-heading text-primary max-w-[620px] text-[clamp(2.5rem,10vw,3.3rem)] leading-[1.08] font-extrabold tracking-[-0.055em] sm:text-[clamp(2.8rem,5vw,4rem)] lg:text-[clamp(3.2rem,4vw,4.8rem)]"
              >
                Precision in
                <br />
                <span className="text-secondary-dark">Every Discovery.</span>
              </h1>

              {/* =====================================
            DESCRIPTION
        ===================================== */}

              <p
                data-hero-description
                className="mx-auto mt-4 max-w-[530px] font-sans text-sm leading-[1.7] sm:mt-6 sm:text-[16px] lg:mx-0"
              >
                Discover premium research peptides in a variety of strengths and
                formulations for laboratory research.
              </p>

              {/* =====================================
            BUTTONS
        ===================================== */}

              <div
                data-hero-buttons
                className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8 lg:justify-start"
              >
                {/* PRIMARY BUTTON */}

                <Link href="/shop" className="btn-gradient">
                  Explore Collection
                  <ArrowUpRight size={18} />
                </Link>

                {/* SECONDARY BUTTON */}

                <Link
                  href="/about"
                  className="group text-primary hover:border-primary inline-flex h-10 items-center justify-center gap-3 rounded-full border border-[#C8DEE8] bg-white/80 px-5 text-[12px] font-semibold shadow-[0_4px_15px_rgba(7,85,143,0.04)] backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#EAF7FA] hover:shadow-[0_10px_25px_rgba(7,85,143,0.10)] active:translate-y-0 sm:h-[52px] sm:px-8 sm:text-[14px]"
                >
                  <span>Learn More</span>

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>

              {/* =====================================
            TRUST PILLS
            HIDDEN ON MOBILE
        ===================================== */}

              <div className="mt-6 hidden flex-wrap items-center justify-center gap-3 sm:flex lg:mt-8 lg:justify-start">
                {[
                  {
                    value: "99.5%+",
                    label: "Verified Purity",
                  },
                  {
                    value: "100K+",
                    label: "Researchers Served",
                  },
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

      <ProductGrid />
      <WhyChooseUs />

      <section className="relative overflow-hidden px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-10">
          <div className="">
            <span className="mb-5 inline-flex rounded-full border border-[#D7EAF0] bg-[#F2FAFC] px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-[#07558F] uppercase">
              Discover Penguin Peptides
            </span>

            <h2 className="section-heading">
              Built for
              <br />
              <span className="text-[#009CA9]">Scientific Discovery.</span>
            </h2>

            <p className="text-md mt-6 font-sans leading-[1.9] text-[#607F8B]">
              At Penguin Peptides, we focus on providing a diverse selection of
              research peptides for scientific and laboratory applications.
              Explore our collection of compounds, available in different
              strengths and formulations to support your research needs.
            </p>

            <Link href="/shop" className="btn-gradient mt-7">
              Explore Collection
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="relative aspect-[1.12/1] overflow-hidden rounded-[26px] bg-[#E8F7FA] shadow-[0_20px_55px_rgba(7,85,143,0.12)] sm:rounded-[34px]">
              <Image
                src="/assets/home-info.png"
                alt="Penguin Peptides research product"
                fill
                sizes="(max-width: 1023px) 90vw, 540px"
                className="object-cover"
              />
            </div>

            <div className="absolute -top-3 -left-3 z-10 flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full border-[5px] border-white bg-gradient-to-br from-[#073B68] to-[#04C1CA] text-center text-white shadow-[0_12px_30px_rgba(7,85,143,0.2)] sm:h-[130px] sm:w-[130px]">
              <ShieldCheck size={24} strokeWidth={1.7} />
              <span className="mt-1.5 text-[10px] font-bold tracking-[0.08em] uppercase sm:text-[12px]">
                Research
                <br />
                Focused
              </span>
            </div>
          </div>
        </div>
      </section>

      <CardSlider />

      <ProductVerification />

      <HowItWorks />

      <ResearchShowcase />

      <Faqs />
      <USShippingCoverage />
      <CTASection />
    </main>
  );
}
