"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Snowflake,
  ShieldCheck,
  FileText,
  ChevronDown,
  ArrowUpRight,
  Mail,
} from "lucide-react";

export default function LegalPage({ title, sections }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const getSectionId = (index) => `policy-section-${index + 1}`;

  return (
    <main className="min-h-screen bg-[#F7FAFC]">
      <header className="border-b border-[#DCE8ED] bg-[linear-gradient(180deg,#F3FAFC_0%,#FFFFFF_100%)] px-5 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-3 flex items-center gap-2">
              <span className="bg-secondary h-1.5 w-1.5 rounded-full" />

              <span className="text-secondary text-[11px] font-bold tracking-[0.16em] uppercase sm:text-xs">
                Policies & Information
              </span>
            </div>

            <h1 className="font-heading text-primary text-[32px] leading-tight font-bold tracking-[-0.04em] sm:text-[42px] lg:text-[48px]">
              {title}
            </h1>

            <p className="mt-3 max-w-2xl font-sans text-sm leading-7 text-[#617987] sm:text-[15px]">
              Important information about our policies, research products, and
              customer guidelines.
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:px-8 sm:py-14 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12 lg:py-20">
        <aside className="lg:self-start">
          <div className="hidden lg:sticky lg:top-28 lg:block">
            <div className="overflow-hidden rounded-[22px] border border-[#DFEAF0] bg-white shadow-[0_8px_30px_rgba(7,59,104,0.04)]">
              <div className="border-b border-[#EDF2F5] px-5 py-5">
                <div className="flex items-center gap-2">
                  <FileText size={17} className="text-secondary" />

                  <h2 className="font-heading text-primary text-sm font-bold">
                    On This Page
                  </h2>
                </div>
              </div>

              <nav
                aria-label="Policy sections"
                className="max-h-[65vh] space-y-1 overflow-y-auto p-3"
              >
                {sections.map((section, index) => (
                  <a
                    key={section.title}
                    href={`#${getSectionId(index)}`}
                    className="hover:bg-primary/5 group hover:text-primary flex items-start gap-3 rounded-xl px-3 py-3 text-xs leading-5 text-[#617987] transition-all duration-200"
                  >
                    <span className="text-secondary shrink-0 font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-medium">
                      {section.title.replace(/^\d+\.\s*/, "")}
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="mt-5 rounded-[22px] border border-[#D7E9EF] bg-[linear-gradient(135deg,#EAF7FA_0%,#F6FBFD_100%)] p-6">
              <Mail size={25} strokeWidth={1.5} className="text-secondary" />

              <h3 className="font-heading text-primary mt-4 text-lg font-bold">
                Need Assistance?
              </h3>

              <p className="mt-2 text-xs leading-6 text-[#617987]">
                Have questions about our policies? Our support team is here to
                help.
              </p>

              <Link
                href="/contact"
                className="group text-primary hover:text-secondary mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              >
                Contact Support
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-[#DFEAF0] bg-white lg:hidden">
            <button
              type="button"
              onClick={() => setMobileNavOpen((previous) => !previous)}
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-policy-navigation"
              className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
            >
              <span className="font-heading text-primary flex items-center gap-2 text-sm font-semibold">
                <FileText size={17} className="text-secondary" />
                Jump to Section
              </span>

              <ChevronDown
                size={18}
                className={`text-primary transition-transform duration-300 ${
                  mobileNavOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileNavOpen && (
              <nav
                id="mobile-policy-navigation"
                aria-label="Mobile policy sections"
                className="max-h-[300px] space-y-1 overflow-y-auto border-t border-[#EDF2F5] p-3"
              >
                {sections.map((section, index) => (
                  <a
                    key={section.title}
                    href={`#${getSectionId(index)}`}
                    onClick={() => setMobileNavOpen(false)}
                    className="hover:bg-primary/5 hover:text-primary flex items-center gap-3 rounded-xl px-3 py-3 text-xs font-medium text-[#617987] transition-colors"
                  >
                    <span className="text-secondary font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {section.title.replace(/^\d+\.\s*/, "")}
                  </a>
                ))}
              </nav>
            )}
          </div>
        </aside>

        <div className="min-w-0">
          <div className="mb-7 flex items-center justify-between gap-4">
            <div>
              <p className="text-secondary text-[10px] font-bold tracking-[0.18em] uppercase sm:text-xs">
                Important Information
              </p>

              <h2 className="font-heading text-primary mt-1 text-xl font-bold sm:text-2xl">
                Policy Details
              </h2>
            </div>
          </div>

          <div className="space-y-5 sm:space-y-6">
            {sections.map((section, index) => (
              <section
                key={section.title}
                id={getSectionId(index)}
                aria-labelledby={`${getSectionId(index)}-heading`}
                className="scroll-mt-28 overflow-hidden rounded-[20px] border border-[#DFEAF0] bg-white shadow-[0_5px_25px_rgba(7,59,104,0.035)] transition-all duration-300 hover:border-[#B9DDE7] hover:shadow-[0_12px_35px_rgba(7,59,104,0.07)] sm:rounded-[24px]"
              >
                <div className="flex items-start gap-4 border-b border-[#EDF2F5] px-5 py-5 sm:gap-5 sm:px-7 sm:py-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--color-primary),var(--color-secondary))] text-xs font-bold text-white shadow-sm sm:h-12 sm:w-12 sm:rounded-2xl sm:text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="min-w-0 pt-1">
                    <p className="text-secondary mb-1 text-[10px] font-semibold tracking-[0.15em] uppercase">
                      Section {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3
                      id={`${getSectionId(index)}-heading`}
                      className="font-heading text-primary text-[17px] leading-snug font-bold tracking-[-0.025em] sm:text-[21px]"
                    >
                      {section.title.replace(/^\d+\.\s*/, "")}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4 px-5 py-5 sm:space-y-5 sm:px-7 sm:py-7">
                  {section.paragraphs?.map((paragraph, i) => (
                    <p
                      key={i}
                      className="font-sans text-[13px] leading-7 text-[#58707D] sm:text-[14px] sm:leading-8"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.items && (
                    <ul className="space-y-3 pt-1">
                      {section.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 font-sans text-[13px] leading-6 text-[#58707D] sm:text-[14px] sm:leading-7"
                        >
                          <span className="bg-secondary mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full" />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-[24px] bg-[linear-gradient(135deg,#041B2D_0%,var(--color-primary)_60%,var(--color-secondary)_100%)] p-6 text-white sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-2 text-cyan-200">
                  <ShieldCheck size={18} />

                  <span className="text-[10px] font-bold tracking-[0.16em] uppercase">
                    Questions & Support
                  </span>
                </div>

                <h2 className="font-heading text-xl font-bold sm:text-2xl">
                  Still Have Questions?
                </h2>

                <p className="mt-2 max-w-md text-xs leading-6 text-slate-200 sm:text-sm">
                  We're here to help you understand our policies and find the
                  information you need.
                </p>
              </div>

              <Link
                href="/contact"
                className="group text-primary inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EAF7FA]"
              >
                Contact Us
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
