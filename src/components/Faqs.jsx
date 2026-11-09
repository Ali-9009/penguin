"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus,
  ArrowUpRight,
  Headphones,
  Sparkles,
  MessageCircle,
  FlaskConical,
} from "lucide-react";

const faqs = [
  {
    question: "What are research peptides?",
    answer:
      "Research peptides are short chains of amino acids used in scientific and laboratory studies. At Penguin Peptides, our products are supplied exclusively for appropriate research applications and are not intended for human or animal consumption.",
  },
  {
    question: "Are your products intended for human use?",
    answer:
      "No. All Penguin Peptides products are intended strictly for laboratory and in-vitro research purposes. They are not approved or intended for human consumption, medical treatment, clinical administration, veterinary use, or diagnostic applications.",
  },
  {
    question: "How do I choose the correct peptide strength?",
    answer:
      "Our products are available in multiple strengths and formulations to support different laboratory research requirements. You can review the available variants on each product page, along with the product description and relevant specifications.",
  },
  {
    question: "How long does order processing take?",
    answer:
      "Orders generally require approximately 1–3 business days for processing before shipment. Processing times may vary depending on product availability, order volume, and other operational factors.",
  },
  {
    question: "Will I receive tracking information?",
    answer:
      "Once your order has been dispatched and tracking becomes available, the tracking details will be provided through the email address associated with your order. Carrier updates and delivery times may vary.",
  },
  {
    question: "How are research peptides packaged?",
    answer:
      "Products are packaged with attention to protection, labeling, and secure handling during transit. Packaging may vary depending on the selected product, quantity, and applicable shipping requirements.",
  },
  {
    question: "Can I cancel or modify my order?",
    answer:
      "If you need to request a change or cancellation, please contact our support team as soon as possible. Whether an order can be changed depends on its processing and shipping status.",
  },
  {
    question: "How should research peptides be stored?",
    answer:
      "Storage requirements may differ between products and formulations. Always refer to the specific product documentation and applicable laboratory handling guidelines for appropriate storage conditions.",
  },
];

function FAQItem({ faq, index, isOpen, onToggle }) {
  const contentId = `faq-content-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <article
      className={`group relative overflow-hidden rounded-[18px] border transition-all duration-300 sm:rounded-[22px] ${
        isOpen
          ? "border-[#B8DFE9] bg-gradient-to-br from-[#F1FAFC] via-white to-white shadow-[0_12px_35px_rgba(7,85,143,0.05)]"
          : "border-[#E2EDF2] bg-white hover:border-[#BDDDE6] hover:bg-[#FAFDFE]"
      } `}
    >
      {/* ACCENT BAR */}

      <div
        className={`from-primary to-secondary absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"} `}
      />

      {/* QUESTION */}

      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left sm:gap-6 sm:px-6 sm:py-6 lg:px-7"
        >
          {/* NUMBER + QUESTION */}

          <span className="flex min-w-0 items-start gap-3 sm:gap-5">
            <span
              className={`font-heading text-[14px] leading-[1.5] font-semibold tracking-[-0.025em] transition-colors duration-300 sm:text-[17px] lg:text-[18px] ${
                isOpen
                  ? "text-primary"
                  : "group-hover:text-primary text-[#163443]"
              } `}
            >
              {faq.question}
            </span>
          </span>

          {/* PLUS ICON */}

          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-10 sm:w-10 ${
              isOpen
                ? "border-primary bg-primary rotate-45 text-white"
                : "text-primary group-hover:border-primary/20 border-[#DCEAF0] bg-[#F4F9FB] group-hover:bg-[#E8F5F9]"
            } `}
          >
            <Plus size={17} strokeWidth={1.8} />
          </span>
        </button>
      </h3>

      {/* ANSWER */}

      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        inert={!isOpen}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        } `}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="px-4 pb-6 sm:px-6 sm:pb-7 lg:px-7">
            <div className="">
              <div className="mb-4 h-px w-full bg-[#E4EFF2]" />

              <p className="max-w-[600px] font-sans text-sm leading-[1.85] text-[#637985]">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faqs"
      aria-labelledby="faq-heading"
      className="relative overflow-x-clip bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-10"
    >
      {/* BACKGROUND DECORATION */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[#E9FAFC]/60 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[450px] rounded-full bg-[#EAF4FB]/50 blur-[120px]"
      />

      {/* MAIN CONTAINER */}

      <div className="relative mx-auto w-full max-w-7xl">
        {/* TOP SECTION LABEL */}

        {/* TWO COLUMN LAYOUT */}

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-24">
          {/* =========================
              LEFT CONTENT
          ========================= */}

          <div className="min-w-0 lg:sticky lg:top-28">
            {/* HEADING */}

            <h2 id="faq-heading" className="section-heading">
              Frequently Asked
              <br />
              <span className="text-secondary-dark">
                Questions<span className="text-primary">.</span>
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p className="text-md mt-6 max-w-[430px] font-sans leading-[1.9] text-[#6B808A]">
              Everything you need to know about our research products, ordering
              process, and shipping experience.
            </p>

            {/* DECORATIVE DIVIDER */}

            <div className="my-8 flex items-center gap-3">
              <span className="bg-secondary h-[2px] w-12 rounded-full" />

              <span className="h-[2px] w-5 rounded-full bg-[#B9E5EB]" />

              <span className="h-[2px] w-2 rounded-full bg-[#D4EEF2]" />
            </div>

            {/* SUPPORT CARD */}

            <div className="relative max-w-[460px] overflow-hidden rounded-[22px] border border-[#DBEDF1] bg-gradient-to-br from-[#F0FAFC] via-[#F8FDFE] to-white p-5 sm:rounded-[26px] sm:p-7">
              {/* DECORATIVE CIRCLE */}

              <div
                aria-hidden="true"
                className="border-secondary/15 pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full border"
              />

              <div
                aria-hidden="true"
                className="border-secondary/15 pointer-events-none absolute -top-9 -right-9 h-32 w-32 rounded-full border"
              />

              {/* ICON */}

              <div className="bg-primary relative mb-5 flex h-12 w-12 items-center justify-center rounded-[15px] text-white shadow-[0_8px_20px_rgba(7,85,143,0.15)]">
                <Headphones size={23} strokeWidth={1.7} />
              </div>

              {/* TEXT */}

              <h3 className="font-heading text-primary relative text-[20px] font-semibold tracking-[-0.035em] sm:text-[23px]">
                Still have questions?
              </h3>

              <p className="relative mt-2 max-w-[300px] text-[12px] leading-[1.8] text-[#6B808A] sm:text-[13px]">
                Need help finding information about a product or an order? Our
                team is here to assist.
              </p>

              {/* BUTTON */}

              <Link
                href="/contact"
                className="bg-primary hover:bg-primary-dark relative mt-6 inline-flex h-11 items-center justify-center gap-3 rounded-full px-6 text-[12px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(7,85,143,0.15)]"
              >
                Contact Our Team
                <ArrowUpRight size={16} strokeWidth={1.8} />
              </Link>
            </div>

            {/* BOTTOM NOTE */}

            <div className="mt-6 flex items-center gap-2 text-[11px] text-[#91A8B2]">
              <FlaskConical
                size={15}
                strokeWidth={1.7}
                className="text-secondary-dark"
              />

              <span>Dedicated to responsible scientific research.</span>
            </div>
          </div>

          {/* =========================
              RIGHT FAQ ACCORDION
          ========================= */}

          <div className="min-w-0">
            {/* FAQ TOP INFO */}

            <div className="mb-5 flex items-center justify-between gap-4 border-b border-[#E4EDF1] pb-5 sm:mb-7">
              <div className="flex items-center gap-2">
                <MessageCircle
                  size={17}
                  strokeWidth={1.7}
                  className="text-secondary-dark"
                />

                <span className="font-heading text-[13px] font-semibold text-[#183E4E] sm:text-[14px]">
                  Common Questions
                </span>
              </div>

              <span className="text-primary rounded-full border border-[#DDECF0] bg-[#F5FAFC] px-3 py-1.5 text-[10px] font-semibold">
                {String(faqs.length).padStart(2, "0")} FAQs
              </span>
            </div>

            {/* ACCORDION ITEMS */}

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  faq={faq}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex((current) =>
                      current === index ? null : index,
                    )
                  }
                />
              ))}
            </div>

            {/* BOTTOM MESSAGE */}

            <div className="mt-7 flex flex-wrap items-center justify-between gap-3 rounded-[17px] border border-[#E1EDF1] bg-[#F8FBFC] px-5 py-4 sm:px-6">
              <p className="text-[12px] text-[#708892]">
                Didn't find what you're looking for?
              </p>

              <Link
                href="/contact"
                className="text-primary hover:text-secondary-dark inline-flex items-center gap-1.5 text-[12px] font-semibold transition-colors"
              >
                Get in touch
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
