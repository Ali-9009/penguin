"use client";

import { useRef, useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  FileCheck2,
  Gift,
  Handshake,
  Link2,
  Percent,
  ShieldCheck,
} from "lucide-react";

import { TrendingUp, Users } from "lucide-react";

import { products } from "@/data/products";

const tiers = [
  {
    name: "Associate",
    rate: 0.1,
    minimum: 0,
    range: "Under $2,500 / month",
    perks: [
      "Tracking link & dashboard",
      "Partner creative assets",
      "Available CoA access",
    ],
  },
  {
    name: "Partner",
    rate: 0.125,
    minimum: 2500,
    range: "$2,500–$9,999 / month",
    perks: [
      "Everything in Associate",
      "Audience discount code*",
      "Priority partner support",
    ],
  },
  {
    name: "Senior",
    rate: 0.15,
    minimum: 10000,
    range: "$10,000–$49,999 / month",
    perks: [
      "Everything in Partner",
      "Dedicated account contact",
      "Early product announcements",
    ],
  },
  {
    name: "Laboratory",
    rate: 0.18,
    minimum: 50000,
    range: "$50,000+ / month",
    perks: [
      "Everything in Senior",
      "Co-branded materials*",
      "Custom volume discussions",
    ],
  },
];

const benefits = [
  {
    icon: BarChart3,
    title: "Clear performance reporting",
    description:
      "Review referral activity, order totals, estimated earnings, and payout history in one place.",
  },
  {
    icon: Link2,
    title: "Your own referral link",
    description:
      "Share one identifiable link with your audience and see which eligible orders it brings in.",
  },
  {
    icon: FileCheck2,
    title: "Research documentation",
    description:
      "Reference published, batch-specific Certificates of Analysis when available.",
  },
  {
    icon: Gift,
    title: "Ready-to-use creative",
    description:
      "Use approved product images and brand assets instead of building every campaign from scratch.",
  },
  {
    icon: Handshake,
    title: "Partner support",
    description:
      "Get a direct channel for questions about eligibility, creative guidelines, and reporting.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible communication",
    description:
      "Keep messaging aligned with research-use restrictions and avoid unsupported medical claims.",
  },
];

const suggestedSlugs = ["bpc-157", "tesamorelin", "selank", "tb-500"];
const featured = suggestedSlugs
  .map((slug) => products.find((item) => item.slug === slug))
  .filter(Boolean)
  .map((product) => ({
    product,
    variant:
      product.variants?.[product.defaultVariant ?? 0] || product.variants?.[0],
  }))
  .filter((item) => item.variant?.price != null);

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="text-secondary mb-4 flex items-center gap-2 font-sans text-xs font-bold tracking-[0.15em] uppercase">
        {eyebrow}
      </p>
      <h2 className="section-heading">{title}</h2>
      {description && (
        <p className="text-md mt-3 text-[#756779]">{description}</p>
      )}
    </div>
  );
}

function PartnerHero() {
  const [referralSales, setReferralSales] = useState(0);

  const commissionRate = 20;
  const estimatedCommission = (referralSales * commissionRate) / 100;

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <section className="overflow-hidden border-b border-[#DCE8ED] bg-[linear-gradient(180deg,#FFFFFF_0%,#F5FAFC_100%)] px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="max-w-xl">
          <h1 className="font-heading text-primary text-[38px] leading-[1.12] font-bold tracking-[-0.045em] sm:text-[48px] lg:text-[58px]">
            Partner With Us.
            <span className="text-secondary mt-1 block">Grow Together.</span>
          </h1>

          <p className="mt-6 max-w-lg font-sans text-[14px] leading-7 text-[#617987] sm:text-[16px] sm:leading-8">
            Share our research peptides, earn through qualified referrals, and
            grow with our partner program.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <div className="text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F5F8]">
                <Users size={19} strokeWidth={1.8} />
              </div>

              <div>
                <h3 className="text-primary text-[15px] font-semibold">
                  Share & Refer
                </h3>

                <p className="mt-1 text-sm leading-5 text-[#718A96]">
                  Introduce your audience to our research collection.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F5F8]">
                <TrendingUp size={19} strokeWidth={1.8} />
              </div>

              <div>
                <h3 className="text-primary text-[15px] font-semibold">
                  Explore Earnings
                </h3>

                <p className="mt-1 text-sm leading-5 text-[#718A96]">
                  Estimate potential earnings from qualified referrals.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-[linear-gradient(110deg,var(--color-primary),var(--color-secondary))] px-7 text-[13px] font-semibold text-white shadow-md transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
            >
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,var(--color-primary-dark),var(--color-primary))] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />

              <span className="relative z-10">Become a Partner</span>

              <ArrowUpRight
                size={17}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <a
              href="#earnings"
              className="text-primary hover:border-primary inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#CBDDE5] bg-white px-7 text-[13px] font-semibold transition-all duration-300 hover:bg-[#EDF8FA]"
            >
              How It Works
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-7 flex items-center gap-2 text-[12px] text-[#81939C]">
            <ShieldCheck size={16} className="text-secondary" />

            <span>
              Research-focused partnerships. Subject to program approval.
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="overflow-hidden rounded-[18px] border border-[#D7E5EF] bg-[linear-gradient(145deg,#FFFFFF_35%,#EDF7FF_100%)] p-5 sm:rounded-[20px] sm:p-7">
            <div className="flex items-center justify-between gap-3">
              <div className="text-primary flex h-11 w-11 items-center justify-center rounded-full bg-[#E4F2FC]">
                <Percent size={22} strokeWidth={1.8} />
              </div>

              <div className="flex items-center gap-2">
                <span className="bg-secondary h-1.5 w-1.5 rounded-full" />
                <span className="text-[11px] font-medium text-[#59718C]">
                  Applications open
                </span>
              </div>
            </div>

            <div className="mt-7 flex items-center gap-5">
              <div className="text-primary flex shrink-0 items-baseline">
                <span className="font-heading text-[58px] leading-none font-bold tracking-[-0.06em] sm:text-[72px]">
                  20
                </span>
                <span className="font-heading text-[27px] font-bold sm:text-[35px]">
                  %
                </span>
              </div>

              <div className="max-w-[190px]">
                <h2 className="text-[13px] font-bold text-[#173B4A] sm:text-[14px]">
                  Affiliate Commission
                </h2>

                <p className="mt-2 text-[11px] leading-5 text-[#59718C] sm:text-[12px]">
                  On qualifying, approved referral purchases.
                </p>
              </div>
            </div>

            <div className="mt-7 border-t border-[#D7E5EF] pt-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <label
                  htmlFor="partner-referral-sales"
                  className="text-[11px] font-medium text-[#59718C] sm:text-[12px]"
                >
                  Qualifying Referral Sales
                </label>

                <span className="text-[14px] font-bold text-[#173B4A]">
                  {formatCurrency(referralSales)}
                </span>
              </div>

              <input
                id="partner-referral-sales"
                type="range"
                min="0"
                max="10000"
                step="100"
                value={referralSales}
                onChange={(event) =>
                  setReferralSales(Number(event.target.value))
                }
                className="accent-primary w-full cursor-pointer"
              />
            </div>

            <div className="mt-7 flex items-center justify-between gap-4">
              <span className="text-[11px] font-medium text-[#59718C] sm:text-[12px]">
                Illustrative Commission
              </span>

              <span
                aria-live="polite"
                className="font-heading text-primary text-[30px] font-bold tracking-tight sm:text-[35px]"
              >
                {formatCurrency(estimatedCommission)}
              </span>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-4 border-t border-[#D7E5EF] pt-6">
              <div className="border-r border-[#D7E5EF] pr-3">
                <h3 className="text-[13px] font-bold text-[#173B4A] sm:text-[15px]">
                  One Flat Rate
                </h3>

                <p className="mt-2 text-[10px] leading-5 text-[#59718C] sm:text-[11px]">
                  No tiers or volume targets
                </p>
              </div>

              <div className="pl-1">
                <h3 className="text-[13px] font-bold text-[#173B4A] sm:text-[15px]">
                  Manual Review
                </h3>

                <p className="mt-2 text-[10px] leading-5 text-[#59718C] sm:text-[11px]">
                  Every application read by our team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PartnerProgramPage() {
  return (
    <main className="min-h-screen">
      <PartnerHero />

      <section className="bg-[#F7FAFC] px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Commission Tiers." />

          <div className="mt-10 grid items-stretch gap-5 sm:mt-12 md:grid-cols-2 xl:grid-cols-4">
            {tiers.map((tier, index) => {
              const featured = index === 1;

              return (
                <article
                  key={tier.name}
                  className={`group relative isolate flex h-full min-w-0 flex-col rounded-[24px] p-px transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(7,59,104,0.10)] ${
                    featured
                      ? "bg-[linear-gradient(145deg,var(--color-primary),var(--color-secondary))] shadow-[0_12px_35px_rgba(7,85,143,0.10)]"
                      : "bg-[#DCE8ED]"
                  }`}
                >
                  <div
                    className={`relative flex h-full flex-col overflow-hidden rounded-[23px] p-5 sm:p-6 ${
                      featured
                        ? "bg-[linear-gradient(160deg,#F0F9FC_0%,#FFFFFF_55%)]"
                        : "bg-white"
                    }`}
                  >
                    <div className="flex min-h-7 items-center justify-between gap-2">
                      <span className="text-[10px] font-bold tracking-[0.15em] text-[#7A929D] uppercase">
                        Partner Level {String(index + 1).padStart(2, "0")}
                      </span>

                      {featured && (
                        <span className="bg-primary rounded-full px-3 py-1.5 text-[9px] font-semibold whitespace-nowrap text-white sm:text-[10px]">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="mt-7">
                      <h3 className="font-heading text-primary text-[22px] font-bold tracking-[-0.03em] sm:text-[24px]">
                        {tier.name}
                      </h3>

                      <div className="mt-5 flex items-baseline gap-2">
                        <span className="font-heading text-primary text-[54px] leading-none font-bold tracking-[-0.06em] sm:text-[62px]">
                          {tier.rate * 100}%
                        </span>

                        <span className="text-[11px] font-medium text-[#718A96]">
                          Commission
                        </span>
                      </div>

                      <p className="mt-4 text-[13px] leading-6 text-[#617987]">
                        {tier.range}
                      </p>
                    </div>

                    <div className="my-3 h-px w-full bg-[#E4EDF1]" />

                    <div className="flex-1">
                      <p className="text-primary mb-5 text-[11px] font-bold tracking-[0.12em] uppercase">
                        Included Benefits
                      </p>

                      <div className="space-y-4">
                        {tier.perks.map((perk) => (
                          <div key={perk} className="flex items-start gap-3">
                            <span className="text-secondary flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E8F5F8]">
                              <Check size={12} strokeWidth={2.5} />
                            </span>

                            <p className="text-[12px] leading-6 text-[#526C79] sm:text-[13px]">
                              {perk}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 border-t border-[#E4EDF1] pt-6">
                      <Link
                        href="/contact"
                        className={`group/btn relative flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-full text-[12px] font-semibold transition-all duration-300 ${
                          featured
                            ? "bg-[linear-gradient(110deg,var(--color-primary),var(--color-secondary))] text-white shadow-sm hover:shadow-md"
                            : "text-primary hover:border-primary border border-[#C8DDE6] bg-[#F5FAFC] hover:bg-[#EAF5F9]"
                        }`}
                      >
                        {featured && (
                          <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,var(--color-primary-dark),var(--color-primary))] opacity-0 transition-opacity duration-500 ease-in-out group-hover/btn:opacity-100" />
                        )}

                        <span className="relative z-10">Become a Partner</span>

                        <ArrowUpRight
                          size={16}
                          className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-7 flex items-start gap-3 rounded-xl border border-[#DCE8ED] bg-white px-4 py-4 sm:px-5">
            <ShieldCheck
              size={18}
              className="text-secondary mt-0.5 shrink-0"
              strokeWidth={1.8}
            />

            <p className="text-[12px] leading-6 text-[#718A96]">
              Commission tiers and benefits shown are illustrative and subject
              to program approval. Final rates, eligibility requirements, and
              partner benefits will be confirmed in the applicable partner
              agreement.
            </p>
          </div>
        </div>
      </section>

      <PartnerBenefits benefits={benefits} />
    </main>
  );
}

function BenefitCard({ icon: Icon, title, description, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (event) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="partner-benefit-card group relative isolate overflow-hidden rounded-[24px] p-px transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(7,85,143,0.12)]"
    >
      <div className="partner-benefit-border pointer-events-none absolute inset-0 rounded-[inherit]" />

      <div className="relative z-10 flex h-full flex-col overflow-hidden rounded-[23px] bg-[linear-gradient(145deg,#FFFFFF_0%,#F6FBFD_100%)] p-6 sm:p-7">
        <div className="partner-benefit-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10 flex items-start justify-between">
          <div className="text-primary group-hover:border-secondary/40 relative flex h-14 w-14 items-center justify-center rounded-[18px] border border-[#CFEAF0] bg-[linear-gradient(145deg,#E8F8FB,#D9F1F6)] shadow-[0_6px_18px_rgba(7,85,143,0.08)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_10px_25px_rgba(4,193,202,0.18)]">
            <Icon
              size={25}
              strokeWidth={1.7}
              className="relative z-10 transition-transform duration-500 group-hover:scale-110"
            />

            <span className="bg-secondary/10 pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        </div>

        <div className="relative z-10 mt-auto pt-4">
          <h3 className="font-heading text-primary text-[22px] font-bold tracking-[-0.035em] sm:text-[24px]">
            {title}
          </h3>

          <p className="mt-3 max-w-sm text-[13px] leading-7 text-[#617987] sm:text-[14px]">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
function PartnerBenefits({ benefits = [] }) {
  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="bg-secondary/5 pointer-events-none absolute top-0 left-1/2 h-[450px] w-[700px] -translate-x-1/2 rounded-full blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          title="Everything in One Place."
          description="Discover the tools, resources, and support designed to make sharing research information simple and managing partnerships effortless."
        />

        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} {...benefit} index={index} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes partnerBorderFlow {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }

        .partner-benefit-border {
          background: linear-gradient(
            125deg,
            #dce8ed,
            var(--color-secondary),
            var(--color-primary),
            #dce8ed
          );
          background-size: 300% 300%;
          animation: partnerBorderFlow 8s ease-in-out infinite;
          opacity: 0.55;
          transition: opacity 0.5s ease;
        }

        .partner-benefit-card:hover .partner-benefit-border {
          opacity: 1;
          animation-duration: 4s;
        }

        .partner-benefit-glow {
          background: radial-gradient(
            320px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(4, 193, 202, 0.12),
            transparent 65%
          );
        }

        @media (prefers-reduced-motion: reduce) {
          .partner-benefit-border {
            animation: none;
          }

          .partner-benefit-card,
          .partner-benefit-card * {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
