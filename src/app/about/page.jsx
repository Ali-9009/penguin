import Image from "next/image";
import Link from "next/link";
import {
 CloudSnow,
  ArrowUpRight,
  ChevronRight,
  FlaskConical,
  FileCheck2,
  Microscope,
  ShieldCheck,
  Check,
} from "lucide-react";
import { ScanLine, ArrowDownRight, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";

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

export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="About Penguin"
        highlight="Peptides."
        description="At Penguin Peptides, we believe meaningful scientific progress begins with curiosity, precision, and access to reliable research materials."
        icon="cloud"
      />

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-10">
        <div className="mx-auto max-w-7xl text-center">
          {/* HEADING */}

          <h2 className="section-heading mx-auto max-w-[850px]">
            Inspired by <span className="text-secondary-dark">Discovery.</span>
          </h2>

          {/* CENTER DIVIDER */}

          <div className="bg-secondary mx-auto mt-7 h-[3px] w-16 rounded-full" />

          {/* HIGHLIGHT TEXT */}

          <p className="font-heading text-primary mx-auto mt-8 max-w-230 text-[20px] leading-[1.45] font-semibold tracking-[-0.035em] sm:text-[26px] lg:text-[30px]">
            Every breakthrough begins with curiosity, and every discovery
            deserves a thoughtful approach.
          </p>

          {/* DESCRIPTION */}

          <div className="text-md mx-auto mt-6 max-w-220 space-y-5 font-sans leading-[1.7] text-[#667F8B]">
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

          <div className="order-1 lg:order-2">
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
              className="group relative mt-8 inline-flex h-12 items-center justify-center gap-3 overflow-hidden rounded-full bg-[linear-gradient(110deg,var(--color-primary),var(--color-secondary))] px-7 text-sm font-semibold text-white shadow-md transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
            >
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,var(--color-primary-dark),var(--color-primary))] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />

              <span className="relative z-10">Discover Our Products</span>

              <ArrowUpRight
                size={17}
                className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* RIGHT VISUAL */}

          <div className="relative order-2 lg:order-1">
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

      <section className="bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="relative order-2 min-h-90 overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,#FFFFFF_0%,#E8F7FA_100%)] sm:min-h-130 lg:order-2 lg:min-h-[480px]">
            <Image
              src="/assets/about-penguin.png"
              alt="Penguin Peptides research products"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="order-1 min-w-0 lg:order-1">
            <h2 className="font-heading text-primary text-[32px] leading-[1.15] font-bold tracking-[-0.04em] sm:text-[42px] lg:text-[48px]">
              About Penguin Peptides
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-8 text-[#617987] sm:text-[15px]">
              At Penguin Peptides, our mission is to fuel scientific progress by
              delivering top-tier peptides at prices that make research
              accessible. We are committed to sourcing premium-grade peptides
              from certified North American manufacturers who adhere to
              stringent WHO/GMP and ISO 9001:2008 standards. By prioritizing
              quality and affordability, we empower researchers to push the
              boundaries of discovery without compromise.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="order-1 min-w-0 lg:order-2">
            <h2 className="font-heading text-primary text-[32px] leading-[1.15] font-bold tracking-[-0.04em] sm:text-[42px] lg:text-[48px]">
              Trusted Peptides, Secure Ordering, Exceptional Service
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-8 text-[#617987] sm:text-[15px]">
              As a trusted U.S.-based supplier, we ensure every peptide
              undergoes rigorous third-party testing for purity and reliability,
              giving you confidence in your results. Our streamlined, secure
              online platform makes ordering simple and discreet, with
              cutting-edge SSL encryption safeguarding your data. At Penguin
              Peptides, we blend exceptional customer service with competitive
              pricing, offering a seamless experience for researchers seeking
              high-purity peptides.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-8 text-[#617987] sm:text-[15px]">
              We’re proud to support the scientific community with dependable
              products and unwavering dedication. Choose Penguin Peptides as
              your partner in advancing knowledge, one breakthrough at a time.
            </p>
          </div>

          <div className="relative order-2 min-h-90 overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,#FFFFFF_0%,#E8F7FA_100%)] sm:min-h-130 lg:order-1 lg:min-h-[480px]">
            <Image
              src="/assets/about-penguin-1.png"
              alt="Penguin Peptides research products"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
