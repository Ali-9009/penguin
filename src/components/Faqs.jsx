"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Plus, HelpCircle } from "lucide-react";

// =====================================
// FAQ DATA
// =====================================

const faqs = [
  {
    question: "What are Penguin Peptides products intended for?",
    answer:
      "Our products are offered for laboratory research and analytical applications. They are not intended for human consumption, medical treatment, or veterinary use.",
  },
  {
    question: "How can I choose the correct product strength?",
    answer:
      "Each product page displays the available strengths and specifications. Review the product information carefully to select the option appropriate for your research requirements.",
  },
  {
    question: "How long does order processing take?",
    answer:
      "Orders typically go through a review process that may take 1–3 business days before preparation and shipping. Processing times can vary depending on order details and availability.",
  },
  {
    question: "How will I receive my tracking information?",
    answer:
      "Once your parcel has been prepared and handed to the shipping carrier, tracking information will be sent to the email address provided during checkout.",
  },
  {
    question: "How are research peptides packaged?",
    answer:
      "Products are packaged with attention to protection and handling during transit. Refer to the product labeling and any accompanying documentation for product-specific information.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "If you need to modify your order, contact our support team as soon as possible. Changes or cancellations may not be possible once processing or shipping has started.",
  },
  {
    question: "How should I store my research products?",
    answer:
      "Storage requirements vary by product. Always follow the storage instructions provided on the product label or in the accompanying documentation.",
  },
];

// =====================================
// FAQ ITEM
// =====================================

function FAQItem({ faq, isOpen, onToggle }) {
  const contentId = useId();

  return (
    <article
      className={`group relative w-full min-w-0 overflow-hidden rounded-[18px] border transition-[background-color,border-color,box-shadow] duration-300 sm:rounded-[20px] ${
        isOpen
          ? "border-primary/20 bg-[#F0FAFC] shadow-[0_8px_30px_rgba(7,85,143,0.05)]"
          : "hover:border-primary/20 border-[#E3EDF1] bg-white"
      }`}
    >
      {/* =========================
          QUESTION
      ========================= */}

      <h3>
        <button
          type="button"
          id={`${contentId}-trigger`}
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
          className="flex w-full min-w-0 items-center justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
        >
          {/* Question Text */}

          <span
            className={`font-heading min-w-0 flex-1 text-[15px] leading-[1.45] font-semibold tracking-[-0.025em] transition-colors duration-300 sm:text-[17px] ${
              isOpen
                ? "text-primary"
                : "group-hover:text-primary text-[#173743]"
            }`}
          >
            {faq.question}
          </span>

          {/* Animated Plus Icon */}

          <span
            className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-[background-color,color,transform] duration-300 ease-out motion-reduce:transition-none ${
              isOpen
                ? "bg-primary rotate-45 text-white"
                : "text-primary rotate-0 bg-[#EDF5F7] group-hover:bg-[#E0F0F4]"
            }`}
          >
            <Plus size={18} strokeWidth={1.8} />
          </span>
        </button>
      </h3>

      {/* =========================
          ANIMATED ANSWER
      ========================= */}

      <div
        id={contentId}
        role="region"
        aria-labelledby={`${contentId}-trigger`}
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`grid w-full min-w-0 transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 min-w-0 overflow-hidden">
          <div
            className={`w-full min-w-0 px-5 pb-6 transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none sm:px-6 sm:pb-7 ${
              isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
            }`}
          >
            {/* Divider */}

            <div className="bg-primary/10 mb-4 h-px w-full" />

            {/* Answer */}

            <p className="text-muted w-full font-sans text-[13px] leading-[1.85] sm:text-sm">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

// =====================================
// FAQ SECTION
// =====================================

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative isolate bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      {/* =========================
          BACKGROUND DECORATION
      ========================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 -left-48 h-[450px] w-[450px] rounded-full bg-[#E8F8FB]/50 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-0 h-[450px] w-[450px] rounded-full bg-[#EDF6FB]/60 blur-[110px]"
      />

      {/* =========================
          MAIN CONTAINER
      ========================= */}

      <div className="relative mx-auto w-full max-w-[1400px]">
        <div className="grid w-full grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          {/* =========================
              LEFT CONTENT
          ========================= */}

          <div className="w-full min-w-0 self-start lg:sticky lg:top-24">
            {/* Heading */}

            <h2 id="faq-title" className="section-heading">
              Frequently Asked
              <br />
              <span className="text-secondary-dark">Questions.</span>
            </h2>

            {/* Description */}

            <p className="text-muted mt-6 max-w-[420px] font-sans text-base leading-7">
              Everything you need to know about our research collection,
              ordering process, shipping, and product information.
            </p>

            {/* =========================
                SUPPORT BOX
            ========================= */}

            <div className="mt-9 w-full max-w-[420px] rounded-[24px] border border-[#DDECF0] bg-[#F5FAFC] p-5 sm:p-6">
              <div className="flex items-start gap-4">
                {/* Icon */}

                <div className="bg-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white">
                  <HelpCircle size={23} strokeWidth={1.6} />
                </div>

                {/* Support Content */}

                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-[18px] font-semibold text-[#173743]">
                    Still have questions?
                  </h3>

                  <p className="text-muted mt-2 font-sans text-[13px] leading-6">
                    Our support team is here to help with your questions and
                    product inquiries.
                  </p>

                  <Link
                    href="/contact-us"
                    className="group text-primary hover:text-secondary-dark mt-5 inline-flex items-center gap-2 font-sans text-sm font-semibold transition-colors"
                  >
                    Contact Support
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT FAQ ACCORDION
          ========================= */}

          <div className="flex w-full min-w-0 flex-col gap-3 sm:gap-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex((current) => (current === index ? null : index))
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
