"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

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
    <article className="group border-b border-[#E2EAF0] first:border-t">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-5 py-5 text-left sm:py-6"
        >
          <span
            className={`font-heading text-[15px] leading-6 font-semibold tracking-[-0.02em] transition-colors duration-200 sm:text-[17px] ${
              isOpen
                ? "text-primary"
                : "group-hover:text-primary text-[#183846]"
            }`}
          >
            {faq.question}
          </span>

          <span
            className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
              isOpen
                ? "text-primary bg-[#E8F5F9]"
                : "bg-[#F3F7F9] text-[#68808C]"
            }`}
          >
            <Plus
              size={18}
              strokeWidth={1.8}
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </h3>

      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        inert={!isOpen}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="max-w-[720px] pr-8 pb-6 text-[13px] leading-7 text-[#6B808A] sm:text-[14px] sm:leading-8">
            {faq.answer}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faqs"
      aria-labelledby="faq-heading"
      className="bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-9 max-w-[650px] text-center sm:mb-12">
          <h2 id="faq-heading" className="section-heading">
            Frequently Asked{" "}
            <span className="text-secondary-dark">
              Questions<span className="text-primary">.</span>
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[540px] text-[13px] leading-7 text-[#6B808A] sm:text-[15px]">
            Find answers to common questions about our research products,
            ordering, and shipping.
          </p>
        </header>

        <div className="mx-auto w-full max-w-4xl">
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
      </div>
    </section>
  );
}
