import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  FlaskConical,
  FileCheck2,
  Microscope,
  ShieldCheck,
} from "lucide-react";
import { ScanLine, ArrowDownRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "About Us | Spectrum Biosciences",
  description:
    "Discover Spectrum Biosciences and our approach to research products, product information, and laboratory documentation.",
};

const values = [
  {
    number: "01",
    icon: FlaskConical,
    title: "Research Focused",
    description:
      "A thoughtfully selected collection of peptides intended for scientific and laboratory research applications.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Quality Mindset",
    description:
      "An approach centered on product information, careful handling, and attention to detail.",
  },
  {
    number: "03",
    icon: Microscope,
    title: "Scientific Exploration",
    description:
      "Supporting researchers with a variety of formulations and strengths for different laboratory requirements.",
  },
  {
    number: "04",
    icon: ScanLine,
    title: "Clarity & Precision",
    description:
      "Clear product details and a straightforward shopping experience designed to simplify product selection.",
  },
];

const images = {
  bpc: "/products/BPC-157.webp",
  ghk: "/products/ghk-cu.webp",
  tesamorelin: "/products/tesamorelin.webp",
  blend: "/products/glow-blend.webp",
  tb: "/products/tb-500.webp",
};

const principles = [
  {
    number: "01",
    icon: Microscope,
    title: "Research-Focused",
    description:
      "Our collection is organized around compounds intended for scientific investigation and analytical laboratory applications.",
  },
  {
    number: "02",
    icon: FileCheck2,
    title: "Information Matters",
    description:
      "We believe researchers should be able to review clear product specifications and available batch-specific documentation.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Responsible Research",
    description:
      "Our products are presented for laboratory research purposes, with clear distinctions between research materials and medical products.",
  },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      <section
        data-aos="fade-up"
        className="px-3 pt-30 sm:px-5 sm:pt-32 lg:px-8 lg:pt-36"
      >
        <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-3xl bg-[#EAF7FA]">
          {/* RESPONSIVE BACKGROUND IMAGES */}

          <div className="absolute inset-0">
            {/* MOBILE + TABLET */}
            <Image
              src="/assets/banner-mob.png"
              alt=""
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 1px"
              className="object-cover object-bottom lg:hidden"
            />

            {/* DESKTOP */}
            <Image
              src="/assets/banner.png"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 1280px, 1px"
              className="hidden object-cover object-center lg:block"
            />
          </div>

          {/* SUBTLE MOBILE OVERLAY */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#F2FAFC]/65 via-transparent to-transparent lg:hidden" />

          {/* DESKTOP OVERLAY */}
          <div className="pointer-events-none absolute inset-0 hidden bg-linear-to-r from-[#F2FAFC]/70 via-[#F2FAFC]/20 to-transparent lg:block" />

          {/* CONTENT */}

          <div className="relative z-10 flex w-full flex-col items-center px-5 pt-9 pb-[320px] text-center sm:px-10 sm:pt-12 sm:pb-[440px] md:px-12 md:pt-14 md:pb-150 lg:min-h-90 lg:items-start lg:justify-center lg:px-16 lg:py-12 lg:text-left">
            <div className="w-full max-w-[440px] lg:max-w-[480px]">
              {/* EYEBROW */}

              <span className="text-secondary-dark mb-3 inline-block font-sans text-[10px] font-bold tracking-[0.18em] uppercase sm:text-[11px]">
                PENGUIN PEPTIDES
              </span>

              {/* HEADING */}

              <h2 className="font-heading text-primary text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05] font-extrabold tracking-[-0.055em]">
                About{" "}
                <span className="text-secondary-dark">Penguin Peptides.</span>
              </h2>

              {/* DESCRIPTION */}

              <p className="text-md mx-auto mt-4 max-w-100 font-sans text-[#587583] lg:mx-0">
                At Penguin Peptides, we believe meaningful scientific progress
                begins with curiosity, precision, and access to reliable
                research materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-10">
        <div className="mx-auto max-w-7xl text-center">
          {/* HEADING */}

          <h2 className="section-heading mx-auto max-w-[850px]">
            Inspired by <span className="text-secondary-dark">Discovery.</span>
            <br className="hidden sm:block" />
            Driven by Precision.
          </h2>

          {/* CENTER DIVIDER */}

          <div className="bg-secondary mx-auto mt-7 h-[3px] w-16 rounded-full" />

          {/* HIGHLIGHT TEXT */}

          <p className="font-heading text-primary mx-auto mt-8 max-w-230 text-[20px] leading-[1.45] font-semibold tracking-[-0.035em] sm:text-[26px] lg:text-[30px]">
            Every breakthrough begins with curiosity, and every discovery
            deserves a thoughtful approach.
          </p>

          {/* DESCRIPTION */}

          <div className="mx-auto mt-6 max-w-220 space-y-5 font-sans text-md leading-[1.7] text-[#667F8B]">
            <p>
              At Penguin Peptides, we are dedicated to supporting scientific
              exploration through a thoughtfully selected collection of research
              peptides and specialized formulations.
            </p>

            <p>
              We believe the research experience should be clear, accessible,
              and straightforward. From exploring available compounds to
              comparing strengths and understanding product information, our
              goal is to help researchers make informed selections for their
              laboratory needs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5FAFC] px-4 py-12 sm:px-6 md:py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* SECTION HEADING */}

          <div className="mb-12 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">
            <div>
              <h2 className="section-heading">
                The Principles
                <br />
                <span className="text-secondary-dark">
                  Behind Our Approach.
                </span>
              </h2>
            </div>

            <p className="text-md max-w-[380px] leading-[1.9] text-[#667F8B]">
              A research-focused approach built around clarity, thoughtful
              service, and attention to detail.
            </p>
          </div>

          {/* VALUE CARDS */}

          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.number}
                  className="group hover:border-secondary/30 relative flex min-w-0 flex-col overflow-hidden rounded-3xl border border-[#E2EDF2] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(7,85,143,0.07)] sm:p-7"
                >
                  {/* ICON */}

                  <div className="text-primary group-hover:bg-primary flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#E6F9FB] transition-colors group-hover:text-white sm:h-14 sm:w-14 sm:rounded-[18px]">
                    <Icon
                      size={22}
                      strokeWidth={1.7}
                      className="sm:h-7 sm:w-7"
                    />
                  </div>

                  {/* CONTENT */}

                  <div className="mt-4">
                    <h3 className="font-heading text-primary text-[15px] leading-[1.3] font-semibold tracking-[-0.03em] sm:text-[21px]">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-[1.7] text-[#708692]">
                      {value.description}
                    </p>
                  </div>

                  {/* BOTTOM ACCENT */}

                  <div className="mt-auto pt-7">
                    <div className="bg-secondary h-[3px] w-8 rounded-full transition-all duration-300 group-hover:w-16" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20">
          {/* LEFT CONTENT */}

          <div>
            <h2 className="section-heading max-w-[570px]">
              Built for{" "}
              <span className="text-secondary-dark">Curious Minds.</span>
            </h2>

            <p className="mt-4 max-w-[540px] text-sm leading-[1.7] text-[#667F8B]">
              Penguin Peptides is a research-focused peptide supplier dedicated
              to serving the scientific and laboratory research community.
            </p>

            <p className="mt-3 max-w-[540px] text-sm leading-[1.7] text-[#667F8B]">
              We understand that every research project has unique requirements.
              Our collection brings together different peptide formulations and
              strengths, supported by accessible product information and a
              straightforward ordering experience.
            </p>

            <p className="mt-3 max-w-[540px] text-sm leading-[1.7] text-[#667F8B]">
              Our goal is to make discovering and selecting research materials
              simpler, clearer, and more convenient.
            </p>

            <Link
              href="/shop"
              className="btn-primary mt-8 inline-flex items-center gap-3"
            >
              Discover Our Products
              <ArrowUpRight size={17} />
            </Link>
          </div>

          {/* RIGHT VISUAL */}

          <div className="relative">
            <div className="relative min-h-[420px] overflow-hidden rounded-3xl bg-linear-to-br from-[#07558F] via-[#087BA5] to-[#04C1CA] p-6 sm:p-9">
              {/* DECORATIVE CIRCLES */}

              <div className="pointer-events-none absolute -top-20 -right-20 h-[330px] w-[330px] rounded-full border border-white/20" />

              <div className="pointer-events-none absolute -right-10 -bottom-32 h-[400px] w-[400px] rounded-full border border-white/15" />

              {/* TOP TEXT */}

              <div className="relative z-10">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-white/70 uppercase">
                  Our Philosophy
                </p>

                <h3 className="font-heading mt-5 max-w-[390px] text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] font-semibold tracking-[-0.05em] text-white">
                  Every discovery begins with a question.
                </h3>
              </div>

              {/* DECORATIVE PRODUCT IMAGE */}

              <div className="pointer-events-none absolute right-[-4%] bottom-[-9%] h-[300px] w-[230px] rotate-12 opacity-90 sm:right-[2%] sm:h-[380px] sm:w-[290px]">
                <Image
                  src="/assets/pp-1sm.png"
                  alt=""
                  fill
                  sizes="(max-width: 640px) 230px, 290px"
                  className="product-float object-contain drop-shadow-2xl"
                />
              </div>

              {/* BOTTOM DETAIL */}

              <div className="absolute bottom-8 left-6 z-10 max-w-[200px] sm:bottom-10 sm:left-9">
                <div className="mb-4 h-px w-14 bg-white/60" />

                <p className="font-heading text-[14px] leading-6 font-medium text-white/90 sm:text-[16px]">
                  Supporting scientific curiosity through thoughtful product
                  selection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
