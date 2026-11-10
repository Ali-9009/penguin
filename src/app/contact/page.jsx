"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Mail,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { Package, FileCheck2, Headphones } from "lucide-react";
import CustomSelect from "@/components/CustomSelect";

const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";
const subjects = [
  "Product question",
  "Order support",
  "Laboratory documentation",
  "General inquiry",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: subjects[0],
    message: "",
  });
  const [notice, setNotice] = useState("");
  const update = (event) =>
    setForm((value) => ({ ...value, [event.target.name]: event.target.value }));

  const submit = (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    if (!email) {
      setNotice(
        "Contact email isn't configured yet. Set NEXT_PUBLIC_CONTACT_EMAIL in your environment.",
      );
      return;
    }
    const subject = `[Spectrum Biosciences] ${form.subject}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setNotice(
      "Your email application should open with your message. Send the email there to complete your inquiry.",
    );
  };

  return (
    <main className="min-h-screen bg-[#F8FBFC]">
      <header className="border-b border-[#E2EBEF] bg-white px-4 py-8 sm:px-6 md:py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <h1 className="font-heading text-primary text-[34px] leading-[1.15] font-bold tracking-[-0.04em] sm:text-[44px] lg:text-[52px]">
              We're Here to
              <span className="text-secondary">Help.</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#617987] sm:text-[15px]">
              Have a question about our research products, an order, or product
              documentation? Get in touch with our team.
            </p>
          </div>
        </div>
      </header>

      <section
        aria-label="Contact information"
        className="px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <article className="group hover:border-primary/20 rounded-[20px] border border-[#DFEAF0] bg-white p-5 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(7,59,104,0.06)] sm:p-6">
            <div className="text-primary mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7FA]">
              <Mail size={21} strokeWidth={1.7} />
            </div>

            <h2 className="font-heading text-primary text-[18px] font-bold tracking-[-0.02em]">
              Email Support
            </h2>

            <p className="mt-2 text-[13px] leading-6 text-[#617987]">
              Reach out directly for questions about products, orders, or
              general inquiries.
            </p>

            <div className="mt-5 border-t border-[#EDF2F5] pt-4">
              {email ? (
                <a
                  href={`mailto:${email}`}
                  className="text-primary hover:text-secondary inline-flex max-w-full items-center gap-2 text-[13px] font-semibold break-all transition-colors"
                >
                  {email}
                  <ArrowUpRight size={15} className="shrink-0" />
                </a>
              ) : (
                <p className="text-[12px] text-[#81939C]">
                  Contact email coming soon
                </p>
              )}
            </div>
          </article>

          <article className="group hover:border-primary/20 rounded-[20px] border border-[#DFEAF0] bg-white p-5 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(7,59,104,0.06)] sm:p-6">
            <div className="text-primary mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7FA]">
              <MessageCircle size={21} strokeWidth={1.7} />
            </div>

            <h2 className="font-heading text-primary text-[18px] font-bold tracking-[-0.02em]">
              Product Inquiries
            </h2>

            <p className="mt-2 text-[13px] leading-6 text-[#617987]">
              Need information about research compounds, available strengths, or
              documentation?
            </p>

            <div className="mt-5 border-t border-[#EDF2F5] pt-4">
              <a
                href="#contact-form"
                className="text-primary hover:text-secondary inline-flex items-center gap-2 text-[13px] font-semibold transition-colors"
              >
                Send an Inquiry
                <ArrowUpRight size={15} />
              </a>
            </div>
          </article>

          <article className="group hover:border-primary/20 rounded-[20px] border border-[#DFEAF0] bg-white p-5 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(7,59,104,0.06)] sm:col-span-2 sm:p-6 lg:col-span-1">
            <div className="text-primary mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7FA]">
              <ShieldCheck size={21} strokeWidth={1.7} />
            </div>

            <h2 className="font-heading text-primary text-[18px] font-bold tracking-[-0.02em]">
              Research Information
            </h2>

            <p className="mt-2 text-[13px] leading-6 text-[#617987]">
              Our products are intended for laboratory research only. We do not
              provide personal-use or dosing guidance.
            </p>

            <div className="mt-5 border-t border-[#EDF2F5] pt-4">
              <Link
                href="/faqs"
                className="text-primary hover:text-secondary inline-flex items-center gap-2 text-[13px] font-semibold transition-colors"
              >
                Visit FAQs
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section
        id="contact-form"
        aria-labelledby="contact-form-heading"
        className="scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center sm:mb-10">
            <p className="text-secondary text-[11px] font-bold tracking-[0.16em] uppercase">
              Contact Form
            </p>

            <h2
              id="contact-form-heading"
              className="font-heading text-primary mt-3 text-[28px] font-bold tracking-[-0.035em] sm:text-[36px]"
            >
              Send Us a Message
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-[13px] leading-7 text-[#617987] sm:text-sm">
              Fill out the form below with your question or inquiry, and we'll
              help you find the information you need.
            </p>
          </div>

          <div className="overflow-visible rounded-[22px] border border-[#DFEAF0] bg-white p-5 shadow-[0_10px_40px_rgba(7,59,104,0.04)] sm:rounded-[28px] sm:p-8 lg:p-10">
            <form onSubmit={submit} className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-[13px] font-semibold text-[#173B4A]"
                  >
                    Full Name <span className="text-secondary">*</span>
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={update}
                    placeholder="Enter your full name"
                    className="focus:border-primary focus:ring-primary/10 h-12 w-full rounded-xl border border-[#DCE8ED] bg-[#FAFCFD] px-4 text-sm text-[#173B4A] transition-all duration-200 outline-none placeholder:text-[#98ADB6] focus:bg-white focus:ring-2"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-[13px] font-semibold text-[#173B4A]"
                  >
                    Email Address <span className="text-secondary">*</span>
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={update}
                    placeholder="you@example.com"
                    className="focus:border-primary focus:ring-primary/10 h-12 w-full rounded-xl border border-[#DCE8ED] bg-[#FAFCFD] px-4 text-sm text-[#173B4A] transition-all duration-200 outline-none placeholder:text-[#98ADB6] focus:bg-white focus:ring-2"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-[13px] font-semibold text-[#173B4A]"
                >
                  What Can We Help With?
                </label>

                <CustomSelect
                  id="contact-subject"
                  value={form.subject}
                  onChange={(event) =>
                    update({
                      target: {
                        name: "subject",
                        value: event.target.value,
                      },
                    })
                  }
                  placeholder="Select a subject"
                  className="w-full"
                  options={subjects.map((subject) => ({
                    value: subject,
                    label: subject,
                  }))}
                  triggerClassName="!h-12 !rounded-xl !border-[#DCE8ED] !bg-[#FAFCFD] !text-[13px] !font-medium !text-[#173B4A] focus:!border-primary"
                  dropdownClassName="!border-[#DCE8ED] !shadow-[0_15px_40px_rgba(7,59,104,0.10)]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-[13px] font-semibold text-[#173B4A]"
                >
                  Your Message <span className="text-secondary">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength={10}
                  rows={6}
                  value={form.message}
                  onChange={update}
                  placeholder="Tell us how we can help..."
                  className="focus:border-primary focus:ring-primary/10 w-full resize-y rounded-xl border border-[#DCE8ED] bg-[#FAFCFD] px-4 py-3.5 text-sm leading-relaxed text-[#173B4A] transition-all duration-200 outline-none placeholder:text-[#98ADB6] focus:bg-white focus:ring-2"
                />
              </div>

              <div className="border-t border-[#EDF2F5] pt-6">
                <button
                  type="submit"
                  className="group relative flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[linear-gradient(110deg,var(--color-primary),var(--color-secondary))] px-7 text-sm font-semibold text-white shadow-md transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] sm:w-auto"
                >
                  <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,var(--color-primary-dark),var(--color-primary))] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />

                  <span className="relative z-10">Prepare Email</span>

                  <ArrowUpRight
                    size={17}
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>

                {notice && (
                  <p
                    role="status"
                    className="text-primary mt-4 flex items-start gap-2 text-xs leading-relaxed"
                  >
                    <CheckCircle2 size={16} className="shrink-0" />
                    {notice}
                  </p>
                )}

                <p className="mt-4 text-[11px] leading-relaxed text-[#81939C]">
                  This form opens your email application. Messages are not sent
                  directly through the website.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
