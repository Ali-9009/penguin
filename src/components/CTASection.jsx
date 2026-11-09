"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Mail,
  Sparkles,
  FlaskConical,
} from "lucide-react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    // Connect your newsletter API here.
    setStatus("Newsletter subscriptions are not available yet.");
  };

  return (
    <section
      aria-labelledby="newsletter-cta-heading"
      className="relative overflow-hidden bg-white px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8 lg:pt-20 lg:pb-24"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* =====================================
            MAIN CTA BACKGROUND
        ===================================== */}

        <div className="relative min-h-[420px] overflow-hidden rounded-[26px] bg-gradient-to-br from-[#E9F5FD] via-[#E6F6FC] to-[#C8E9F6] sm:min-h-[450px] sm:rounded-[32px] lg:min-h-[480px]">
          {/* BACKGROUND DECORATIONS */}

          <div className="pointer-events-none absolute -top-32 -left-32 h-[350px] w-[350px] rounded-full bg-white/50 blur-[80px]" />

          <div className="pointer-events-none absolute -right-32 -bottom-32 h-[400px] w-[400px] rounded-full bg-[#75D7E8]/30 blur-[100px]" />

          {/* DECORATIVE CIRCLES */}

          <div className="pointer-events-none absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/35 sm:h-[550px] sm:w-[550px]" />

          <div className="pointer-events-none absolute top-1/2 left-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/40 sm:h-[420px] sm:w-[420px]" />

          {/* =====================================
              LEFT PRODUCT
          ===================================== */}

          <div className="pointer-events-none absolute bottom-[14%] -left-8 z-10 h-[190px] w-[120px] -rotate-15 sm:bottom-[20%] sm:left-[2%] sm:h-[270px] sm:w-[170px] lg:bottom-[18%] lg:left-[4%] lg:h-[340px] lg:w-[210px]">
            <div className="cta-float-left relative h-full w-full">
              <Image
                src="/assets/pp-1sm.png"
                alt="Penguin Peptides PP-1SM research vial"
                fill
                sizes="(max-width: 640px) 120px, (max-width: 1024px) 170px, 210px"
                className="object-contain drop-shadow-[0_20px_25px_rgba(7,59,104,0.18)]"
              />
            </div>
          </div>

          {/* =====================================
              RIGHT PRODUCT
          ===================================== */}

          <div className="pointer-events-none absolute -right-8 bottom-[14%] z-10 h-[190px] w-[120px] rotate-15 sm:right-[2%] sm:bottom-[20%] sm:h-[270px] sm:w-[170px] lg:right-[4%] lg:bottom-[18%] lg:h-[340px] lg:w-[210px]">
            <div className="cta-float-right relative h-full w-full">
              <Image
                src="/assets/pp-1cag.png"
                alt="Penguin Peptides PP-1 Cag research vial"
                fill
                sizes="(max-width: 640px) 120px, (max-width: 1024px) 170px, 210px"
                className="object-contain drop-shadow-[0_20px_25px_rgba(7,59,104,0.18)]"
              />
            </div>
          </div>

          {/* =====================================
              CENTER CONTENT
          ===================================== */}

          <div className="relative z-20 mx-auto flex max-w-[850px] flex-col items-center px-5 pt-14 pb-36 text-center sm:px-10 sm:pt-20 sm:pb-32 lg:pt-24">
            {/* HEADING */}

            <h2
              id="newsletter-cta-heading"
              className="font-heading text-primary max-w-[720px] text-[clamp(1.75rem,4.5vw,4rem)] leading-[1.12] font-bold tracking-[-0.055em]"
            >
              Explore Research Compounds
              <br className="hidden sm:block" />
              <span className="text-secondary-dark"> With Confidence.</span>
            </h2>

            {/* DESCRIPTION */}

            <p className="mt-5 max-w-[500px] text-[12px] leading-[1.8] text-[#5F7C8A] sm:text-[14px]">
              Discover our carefully selected collection of research peptides
              and formulations for scientific and laboratory applications.
            </p>

            {/* BUTTON */}

            <Link href="/shop" className="btn-primary mt-4">
              See All Products
            </Link>
          </div>
        </div>

        {/* =====================================
            NEWSLETTER SUBSCRIPTION BAR
        ===================================== */}

        <div className="relative z-30 mx-auto -mt-20 w-[calc(100%-24px)] max-w-[1050px] sm:-mt-16 sm:w-[calc(100%-60px)]">
          <div className="rounded-[22px] border border-[#E2EDF2] bg-white px-5 py-6 shadow-[0_20px_60px_rgba(7,59,104,0.12)] sm:rounded-[26px] sm:px-7 sm:py-7 lg:px-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
              {/* NEWSLETTER TEXT */}

              <div className="min-w-0">
                <div className="mb-2 flex items-center gap-2">
                  <Mail size={17} className="text-secondary-dark" />

                  <span className="text-secondary-dark text-[10px] font-bold tracking-[0.15em] uppercase">
                    Stay Connected
                  </span>
                </div>

                <h3 className="font-heading text-primary text-[19px] font-bold tracking-[-0.04em] sm:text-[23px]">
                  Subscribe to Our Newsletter
                </h3>

                <p className="mt-1.5 max-w-[420px] text-[11px] leading-[1.7] text-[#708692] sm:text-[12px]">
                  Receive product updates and news from Penguin Peptides.
                </p>
              </div>

              {/* NEWSLETTER FORM */}

              <form onSubmit={handleSubmit} className="w-full lg:max-w-[450px]">
                <div className="focus-within:border-primary/40 flex w-full items-center gap-2 rounded-full border border-[#DCEAF0] bg-[#F7FBFC] p-1.5 transition-colors">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>

                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setStatus("");
                    }}
                    placeholder="Enter your email"
                    className="text-primary min-w-0 flex-1 bg-transparent px-3 py-2 text-[12px] outline-none placeholder:text-[#9AAEB8] sm:px-4 sm:text-[13px]"
                  />

                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary-dark inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full px-4 text-[11px] font-semibold text-white transition-colors sm:px-6 sm:text-[12px]"
                  >
                    Subscribe
                    <ArrowRight size={15} />
                  </button>
                </div>

                {status && (
                  <p
                    role="status"
                    className="mt-3 px-2 text-[11px] text-[#708692]"
                  >
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================
          FLOATING ANIMATIONS
      ===================================== */}

      <style jsx global>{`
        @keyframes ctaFloatLeft {
          0%,
          100% {
            transform: translateY(0) rotate(-8deg);
          }

          50% {
            transform: translateY(-14px) rotate(-5deg);
          }
        }

        @keyframes ctaFloatRight {
          0%,
          100% {
            transform: translateY(-8px) rotate(8deg);
          }

          50% {
            transform: translateY(10px) rotate(5deg);
          }
        }

        .cta-float-left {
          animation: ctaFloatLeft 5.5s ease-in-out infinite;
        }

        .cta-float-right {
          animation: ctaFloatRight 6s ease-in-out infinite;
          animation-delay: -1.5s;
        }

        @media (prefers-reduced-motion: reduce) {
          .cta-float-left,
          .cta-float-right {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
