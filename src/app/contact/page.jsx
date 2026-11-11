"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Clock3,
  ShieldCheck,
} from "lucide-react";
import { RiFacebookFill, RiInstagramLine, RiMapPin2Line } from "react-icons/ri";

import CustomSelect from "@/components/CustomSelect";

const email = "support@penguinpeptides.com";
const phone = "951-262-0000";
const address = "1309 Coffeen Ave Ste 1200, Sheridan, WY 82801, USA";

const subjects = [
  "Product question",
  "Order support",
  "Laboratory documentation",
  "General inquiry",
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61575204561303",
    icon: RiFacebookFill,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/penguinpeptides",
    icon: RiInstagramLine,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: subjects[0],
    message: "",
  });

  const [notice, setNotice] = useState("");

  const update = (event) => {
    setForm((value) => ({
      ...value,
      [event.target.name]: event.target.value,
    }));
  };

  const submit = (event) => {
    event.preventDefault();

    if (!event.currentTarget.reportValidity()) return;

    const subject = `[Penguin Peptides] ${form.subject}`;

    const body = `Name: ${form.name}
Email: ${form.email}
Subject: ${form.subject}

Message:
${form.message}`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

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
              We're Here to <span className="text-secondary">Help.</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#617987] sm:text-[15px]">
              Have a question about our research products, an order, or product
              documentation? Get in touch with our team.
            </p>
          </div>
        </div>
      </header>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)] lg:gap-10">
            <section
              aria-labelledby="contact-form-heading"
              className="min-w-0 rounded-[22px] border border-[#DCE8ED] bg-white p-5 shadow-[0_12px_45px_rgba(7,59,104,0.04)] sm:rounded-[26px] sm:p-8 lg:p-10"
            >
              <div className="mb-8 border-b border-[#E8F0F3] pb-7">
                <p className="text-secondary text-[11px] font-bold tracking-[0.15em] uppercase">
                  Contact Form
                </p>

                <h2
                  id="contact-form-heading"
                  className="font-heading text-primary mt-3 text-[26px] font-bold tracking-[-0.035em] sm:text-[32px]"
                >
                  Send Us a Message
                </h2>

                <p className="mt-3 max-w-lg text-[13px] leading-7 text-[#617987] sm:text-sm">
                  Fill in the details below and let us know how we can help.
                </p>
              </div>

              <form onSubmit={submit} className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
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

                <div className="border-t border-[#E8F0F3] pt-6">
                  <button
                    type="submit"
                    className="group relative inline-flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[linear-gradient(110deg,var(--color-primary),var(--color-secondary))] px-7 text-sm font-semibold text-white shadow-md transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] sm:w-auto"
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

                  <p className="mt-4 text-[11px] leading-6 text-[#81939C]">
                    This form opens your email application. Messages are not
                    sent directly through the website.
                  </p>
                </div>
              </form>
            </section>

            <aside className="min-w-0 space-y-5">
              <div className="overflow-hidden rounded-[22px] border border-[#DCE8ED] bg-white shadow-[0_12px_45px_rgba(7,59,104,0.04)] sm:rounded-[26px]">
                <div className="border-b border-[#E2EDF1] bg-[linear-gradient(135deg,#F0FAFC_0%,#E5F5F9_100%)] px-6 py-6 sm:px-7">
                  <p className="text-secondary text-[11px] font-bold tracking-[0.15em] uppercase">
                    Contact Information
                  </p>

                  <h2 className="font-heading text-primary mt-2 text-[23px] font-bold tracking-[-0.03em] sm:text-[26px]">
                    Get in Touch
                  </h2>

                  <p className="mt-2 text-[12px] leading-6 text-[#617987]">
                    Reach our team directly for product inquiries, order
                    support, or general questions.
                  </p>
                </div>

                <div className="divide-y divide-[#EAF1F4] px-5 sm:px-6">
                  <div className="flex items-start gap-4 py-6">
                    <span className="text-primary flex size-11 shrink-0 items-center justify-center rounded-[14px] border border-[#D7ECF1] bg-[#EFF9FB]">
                      <MapPin size={20} strokeWidth={1.7} />
                    </span>

                    <div className="min-w-0">
                      <h3 className="font-heading text-primary text-md font-semibold">
                        Our Address
                      </h3>

                      <address className="mt-2 text-sm leading-6 text-[#617987] not-italic">
                        1309 Coffeen Ave Ste 1200 Sheridan, WY 82801 United
                        States
                      </address>

                      <a
                        href="https://maps.google.com/?cid=2875206308070069908"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-secondary mt-3 inline-flex items-center gap-2 text-xs font-semibold transition-colors"
                      >
                        Open in Google Maps
                        <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 py-6">
                    <span className="text-primary flex size-11 shrink-0 items-center justify-center rounded-[14px] border border-[#D7ECF1] bg-[#EFF9FB]">
                      <Mail size={20} strokeWidth={1.7} />
                    </span>

                    <div className="min-w-0">
                      <h3 className="font-heading text-primary text-md font-semibold">
                        Email Address
                      </h3>

                      <a
                        href={`mailto:${email}`}
                        className="text-primary hover:text-secondary mt-2 block text-sm font-medium break-all transition-colors"
                      >
                        {email}
                      </a>

                      <p className="mt-1 text-xs text-[#8AA0AA]">
                        Product and order inquiries
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 py-6">
                    <span className="text-primary flex size-11 shrink-0 items-center justify-center rounded-[14px] border border-[#D7ECF1] bg-[#EFF9FB]">
                      <Phone size={20} strokeWidth={1.7} />
                    </span>

                    <div className="min-w-0">
                      <h3 className="font-heading text-primary text-md font-semibold">
                        Phone Number
                      </h3>

                      <a
                        href="tel:+19512620000"
                        className="text-primary hover:text-secondary mt-2 block text-sm font-medium transition-colors"
                      >
                        {phone}
                      </a>

                      <p className="mt-1 text-xs text-[#8AA0AA]">
                        Contact our support team
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[22px] border border-[#DCE8ED] bg-[linear-gradient(135deg,#FFFFFF_0%,#EBF8FA_100%)] p-6 sm:rounded-[26px] sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-primary mt-2 text-[19px] font-semibold tracking-[-0.03em]">
                      Follow Penguin Peptides
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#617987]">
                      Connect with us on social media for updates and
                      announcements.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit Penguin Peptides on ${social.name}`}
                        className="group text-primary hover:border-primary hover:bg-primary flex h-11 w-11 items-center justify-center rounded-full border border-[#D5E8EF] bg-white transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
                      >
                        <Icon size={21} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </aside>
          </div>

          <section
            aria-labelledby="location-heading"
            className="mt-12 sm:mt-16"
          >
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-secondary text-[11px] font-bold tracking-[0.15em] uppercase">
                  Our Location
                </p>

                <h2
                  id="location-heading"
                  className="font-heading text-primary mt-2 text-[25px] font-bold tracking-[-0.035em] sm:text-[32px]"
                >
                  Find Us on the Map
                </h2>

                <p className="mt-2 text-[13px] leading-7 text-[#617987]">
                  1309 Coffeen Ave Ste 1200, Sheridan, WY 82801, USA
                </p>
              </div>

              <a
                href="https://maps.google.com/?cid=2875206308070069908"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary inline-flex w-fit items-center gap-2 text-[12px] font-semibold transition-colors"
              >
                Get Directions
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="overflow-hidden rounded-[22px] border border-[#DCE8ED] bg-white p-2 shadow-[0_12px_45px_rgba(7,59,104,0.04)] sm:rounded-[28px] sm:p-3">
              <iframe
                title="Penguin Peptides location in Sheridan, Wyoming"
                src="https://www.google.com/maps?q=1309%20Coffeen%20Ave%20Ste%201200%2C%20Sheridan%2C%20WY%2082801%2C%20USA&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-[280px] w-full rounded-[16px] sm:h-[360px] sm:rounded-[20px] lg:h-[420px]"
              />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
