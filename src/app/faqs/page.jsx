import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  MessageCircle,
} from "lucide-react";

export const metadata = {
  title: "Frequently Asked Questions | Spectrum Biosciences",
  description:
    "Answers about Spectrum Biosciences research products, orders, shipping, and batch documentation.",
};

const groups = [
  {
    title: "Products & Research",
    items: [
      {
        question: "Are your products intended for human use?",
        answer:
          "No. Products in the Spectrum Biosciences research collection are intended for scientific and laboratory research only, not for human or veterinary use.",
      },
      {
        question: "How do I select a product strength?",
        answer:
          "Open a product page and choose from the available strength options. Pricing and availability update for the selected variant.",
      },
      {
        question: "Do you provide dosing or administration guidance?",
        answer:
          "No. We do not provide dosing, administration, or personal-use guidance. Researchers should follow their applicable laboratory procedures and product documentation.",
      },
      {
        question: "How should products be stored?",
        answer:
          "Storage requirements vary by compound and formulation. Follow the documentation for your specific product and your laboratory's established procedures.",
      },
    ],
  },
  {
    title: "Ordering & Shipping",
    items: [
      {
        question: "How do multi-bottle discounts work?",
        answer:
          "On eligible product pages, select a 2-, 5-, or 10-bottle pack. The applicable discount is shown before you add the pack to your cart.",
      },
      {
        question: "When will I see shipping charges?",
        answer:
          "Shipping details and any available delivery estimates are shown during checkout. Final charges depend on the shipping setup for your store.",
      },
      {
        question: "Can I update quantities in my cart?",
        answer:
          "Yes. Use the plus and minus controls in your cart to adjust quantities or remove an item before checkout.",
      },
      {
        question: "How do I ask about an existing order?",
        answer:
          "Visit our Contact page and select Order support. Include your order reference if one is available, but do not send payment card details.",
      },
    ],
  },
  {
    title: "Documentation & Support",
    items: [
      {
        question: "Where can I find a Certificate of Analysis?",
        answer:
          "Open the relevant product page and review its Laboratory Documentation section. Certificates are displayed when available for that product or batch.",
      },
      {
        question: "Why is a certificate not shown for every product?",
        answer:
          "Some products may not have a linked document on the website. Contact our team to ask about available batch documentation rather than assuming a result.",
      },
      {
        question: "How can I contact Spectrum Biosciences?",
        answer:
          "Use the Contact page to prepare an inquiry about products, documentation, or your order.",
      },
    ],
  },
];

export default function FAQsPage() {
  return (
    <main className="min-h-screen bg-[#F8FBFC]">
      <header className="border-b border-[#E2EBEF] bg-white px-4 py-8 sm:px-6 md:py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <h1 className="font-heading text-primary text-[34px] leading-[1.15] font-bold tracking-[-0.04em] sm:text-[44px] lg:text-[52px]">
              Frequently Asked{" "}
              <span className="text-secondary">Questions.</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#617987] sm:text-[15px]">
              Find answers to common questions about our research products,
              ordering process, shipping, and product documentation.
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12 lg:px-8 lg:py-16">
        <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
          <div className="lg:rounded-[20px] lg:border lg:border-[#E2EBEF] lg:bg-white lg:p-5">
            <div className="mb-4 hidden items-center gap-2 lg:flex">
              <HelpCircle
                size={17}
                strokeWidth={1.8}
                className="text-secondary"
              />

              <h2 className="font-heading text-primary text-sm font-bold">
                Browse Topics
              </h2>
            </div>

            <nav
              aria-label="FAQ sections"
              className="flex [scrollbar-width:none] gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden"
            >
              {groups.map((group, index) => (
                <a
                  key={group.title}
                  href={`#faq-${index}`}
                  className="group/nav hover:border-primary/30 hover:text-primary inline-flex shrink-0 items-center gap-2 rounded-full border border-[#DCE8ED] bg-white px-4 py-2.5 text-[12px] font-semibold whitespace-nowrap text-[#617987] transition-all duration-200 hover:bg-[#F0F8FA] lg:w-full lg:rounded-xl lg:border-transparent lg:px-3 lg:py-3 lg:text-left"
                >
                  <span className="group-hover/nav:bg-secondary hidden h-1.5 w-1.5 shrink-0 rounded-full bg-[#B8D4DE] transition-colors lg:block" />

                  {group.title}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-5 hidden rounded-[20px] border border-[#D9EAF0] bg-[#EDF7FA] p-5 lg:block">
            <MessageCircle
              size={23}
              strokeWidth={1.6}
              className="text-secondary"
            />

            <h3 className="font-heading text-primary mt-3 text-[16px] font-bold">
              Need more help?
            </h3>

            <p className="mt-2 text-[12px] leading-6 text-[#617987]">
              Can't find what you're looking for? We're here to help.
            </p>

            <Link
              href="/contact"
              className="text-primary hover:text-secondary mt-4 inline-flex items-center gap-2 text-[12px] font-semibold transition-colors"
            >
              Contact Support
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </aside>

        <div className="min-w-0 space-y-10 sm:space-y-12">
          {groups.map((group, index) => (
            <section
              key={group.title}
              id={`faq-${index}`}
              aria-labelledby={`faq-heading-${index}`}
              className="scroll-mt-28"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E5F3F7] text-xs font-bold">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h2
                  id={`faq-heading-${index}`}
                  className="font-heading text-primary text-[21px] font-bold tracking-[-0.03em] sm:text-[25px]"
                >
                  {group.title}
                </h2>
              </div>

              <div className="overflow-hidden rounded-[18px] border border-[#E2EBEF] bg-white sm:rounded-[22px]">
                {group.items.map((item, itemIndex) => (
                  <details
                    key={item.question}
                    className={`group/faq px-4 transition-colors duration-200 open:bg-[#FAFDFE] sm:px-6 ${
                      itemIndex !== 0 ? "border-t border-[#EAF0F3]" : ""
                    }`}
                  >
                    <summary className="flex min-h-[70px] cursor-pointer list-none items-center justify-between gap-5 py-4 text-left text-[13px] leading-6 font-semibold text-[#173B4A] marker:content-none sm:min-h-[76px] sm:text-[15px] [&::-webkit-details-marker]:hidden">
                      <span className="group-open/faq:text-primary transition-colors duration-200">
                        {item.question}
                      </span>

                      <span className="text-primary group-open/faq:border-primary/20 group-open/faq:bg-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DCE8ED] bg-[#F5FAFC] transition-all duration-300 group-open/faq:text-white">
                        <ChevronDown
                          size={16}
                          strokeWidth={2}
                          className="transition-transform duration-300 group-open/faq:rotate-180"
                        />
                      </span>
                    </summary>

                    <div className="border-t border-[#EDF2F5] pt-4 pb-6">
                      <p className="max-w-[760px] text-[13px] leading-7 text-[#617987] sm:text-[14px] sm:leading-8">
                        {item.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}

          <section className="relative overflow-hidden rounded-[22px] border border-[#D9EAF0] bg-[linear-gradient(120deg,#EFF8FA_0%,#FFFFFF_100%)] p-6 sm:rounded-[26px] sm:p-8">
            <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-md">
                <p className="text-secondary text-[11px] font-bold tracking-[0.14em] uppercase">
                  We're Here to Help
                </p>

                <h2 className="font-heading text-primary mt-2 text-[23px] font-bold tracking-[-0.03em] sm:text-[27px]">
                  Still have a question?
                </h2>

                <p className="mt-2 text-[13px] leading-6 text-[#617987] sm:text-sm">
                  Get in touch with our team for help with product information,
                  orders, or general inquiries.
                </p>
              </div>

              <Link
                href="/contact"
                className="group relative inline-flex h-11 shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-[linear-gradient(110deg,var(--color-primary),var(--color-secondary))] px-6 text-[13px] font-semibold text-white shadow-md transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
              >
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,var(--color-primary-dark),var(--color-primary))] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />

                <span className="relative z-10">Contact Us</span>

                <ArrowUpRight
                  size={16}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
