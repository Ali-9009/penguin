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
      className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-8"
    >
      {/* BACKGROUND GLOW */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 -right-40 h-[500px] w-[500px] rounded-full bg-[#E9FAFC]/60 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* SECTION HEADING */}

        <div className="mx-auto mb-10 max-w-[650px] text-center sm:mb-14">
          <h2 id="faq-heading" className="section-heading">
            Frequently Asked{" "}
            <span className="text-secondary-dark">
              Questions<span className="text-primary">.</span>
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[540px] font-sans text-md leading-[1.8] text-[#6B808A]">
            Find answers to common questions about our research products,
            ordering, and shipping.
          </p>
        </div>

        {/* FAQ GRID */}

        {/* FAQ GRID - 2 COLUMNS WITH ACCORDION */}
        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? null : index))
              }
            />
          ))}
        </div>

        {/* BOTTOM CONTACT CTA */}

        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-[22px] border border-[#DCECF1] bg-[#F4FAFC] px-6 py-7 text-center sm:mt-12 sm:flex-row sm:px-8 sm:text-left lg:px-10">
          <div>
            <h3 className="font-heading text-primary text-[19px] font-semibold tracking-[-0.035em] sm:text-[22px]">
              Still have questions?
            </h3>

            <p className="mt-1.5 text-[13px] text-[#6B808A]">
              Our team is here to help with your questions.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#07558F] to-[#009CA9] px-6 text-[12px] font-semibold text-white shadow-[0_8px_22px_rgba(7,85,143,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(7,85,143,0.22)] sm:text-[13px]"
          >
            Contact Our Team
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
