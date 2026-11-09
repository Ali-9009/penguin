"use client";

import { useState } from "react";
import Link from "next/link";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim() || !agreed) return;

    // Connect your newsletter API here.
    setStatus("Newsletter subscriptions are not available yet.");
  };

  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-title"
      className="relative px-3 py-12 sm:px-5 md:py-16"
    >
      {/* MAIN CTA CONTAINER */}

      <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-2xl border border-[#E5EEF1] bg-white">
        {/* BACKGROUND DECORATION */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_10%,rgba(4,193,202,0.08),transparent_55%),radial-gradient(ellipse_at_10%_95%,rgba(7,85,143,0.04),transparent_55%)]"
        />

        {/* CONTENT */}

        <div className="relative mx-auto flex max-w-[900px] flex-col items-center px-5 py-14 text-center sm:px-10 sm:py-20 lg:py-24">
          {/* EYEBROW */}

          <p className="text-secondary-dark mb-4 font-sans text-[11px] font-bold tracking-[0.18em] uppercase">
            Stay Connected
          </p>

          {/* HEADING */}

          <h2
            id="newsletter-title"
            className="font-heading text-primary text-[clamp(2.3rem,5.5vw,5rem)] leading-[1.08] font-semibold tracking-[-0.055em]"
          >
            Stay Ahead of
            <span className="text-secondary-dark block">Every Discovery.</span>
          </h2>

          {/* DESCRIPTION */}

          <p className="text-muted mx-auto mt-5 max-w-[520px] font-sans text-sm leading-7 sm:mt-6 sm:text-base">
            Discover new research products, collection updates, and
            announcements from Penguin Peptides.
          </p>

          {/* NEWSLETTER FORM */}

          <form
            onSubmit={handleSubmit}
            className="mt-8 w-full max-w-[560px] sm:mt-10"
          >
            {/* EMAIL FIELD */}

            <div className="focus-within:border-primary flex w-full min-w-0 items-center gap-1.5 rounded-full border border-[#E3EDF1] bg-[#F7FAFC] p-1.5 shadow-[0_8px_25px_rgba(7,85,143,0.05)] transition-colors sm:gap-2 sm:p-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>

              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setStatus("");
                }}
                placeholder="Your email address"
                autoComplete="email"
                required
                className="text-text placeholder:text-muted/70 h-11 min-w-0 flex-1 bg-transparent px-3 font-sans text-[12px] outline-none sm:h-12 sm:px-5 sm:text-sm"
              />

              {/* SUBSCRIBE BUTTON */}

              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark flex h-11 shrink-0 items-center justify-center rounded-full px-4 font-sans text-[12px] font-semibold text-white transition-colors duration-300 sm:h-12 sm:px-8 sm:text-sm"
              >
                Subscribe
              </button>
            </div>

            {/* PRIVACY CONSENT */}

            <div className="mx-auto mt-5 flex max-w-[530px] items-start gap-3 px-1 text-left sm:px-2">
              <input
                id="newsletter-consent"
                type="checkbox"
                checked={agreed}
                onChange={(event) => {
                  setAgreed(event.target.checked);
                  setStatus("");
                }}
                required
                className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[#07558F]"
              />

              <label
                htmlFor="newsletter-consent"
                className="text-muted font-sans text-[11px] leading-[1.7] sm:text-xs"
              >
                I agree to receive marketing emails from Penguin Peptides and
                accept the{" "}
                <Link
                  href="/privacy-policy"
                  className="text-primary hover:text-secondary-dark font-medium underline underline-offset-2 transition-colors"
                >
                  Privacy Policy
                </Link>
                . Unsubscribe at any time.
              </label>
            </div>

            {/* STATUS MESSAGE */}

            {status && (
              <p
                role="status"
                className="text-primary mt-5 font-sans text-sm font-medium"
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
