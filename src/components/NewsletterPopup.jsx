"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Bell,
  FlaskConical,
  Mail,
  PackageCheck,
  X,
} from "lucide-react";
import Link from "next/link";

const GATE_KEY = "spectrum-researcher-verified-v1";
const POPUP_KEY = "penguin-newsletter-dismissed";

const benefits = [
  { label: "New Compounds", icon: FlaskConical },
  { label: "Restock Alerts", icon: PackageCheck },
  { label: "Exclusive Offers", icon: Bell },
];

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [notice, setNotice] = useState("");
  const timerRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const schedulePopup = () => {
      if (timerRef.current !== null) return;

      try {
        if (sessionStorage.getItem(POPUP_KEY) === "true") return;
      } catch {}

      timerRef.current = window.setTimeout(() => {
        timerRef.current = null;
        setIsOpen(true);
      }, 3000);
    };

    try {
      if (localStorage.getItem(GATE_KEY) === "accepted") {
        schedulePopup();
      }
    } catch {}

    window.addEventListener("researcher-gate:accepted", schedulePopup);

    return () => {
      window.removeEventListener("researcher-gate:accepted", schedulePopup);

      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const closePopup = () => {
    setIsOpen(false);

    try {
      sessionStorage.setItem(POPUP_KEY, "true");
    } catch {}
  };

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim() || !agreed) return;

    const subject = "Penguin Peptides - Research Updates Subscription";

    const body = `Please add the following email to your research updates list:

Email: ${email.trim()}

I agree to receive research updates, restock alerts, and offers from Penguin Peptides.`;

    window.location.href = `mailto:support@penguinpeptides.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setNotice(
      "Your email application should open. Send the prepared message to request a subscription.",
    );
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/70 px-4 py-6 backdrop-blur-[7px] sm:px-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closePopup();
        }
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="newsletter-heading"
        aria-describedby="newsletter-description"
        className="relative my-auto w-full max-w-[490px] overflow-hidden rounded-3xl border border-[#DCEAF0] bg-white shadow-[0_25px_90px_rgba(0,20,40,0.25)]"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[210px] bg-[radial-gradient(ellipse_at_top,rgba(0,156,169,0.13),transparent_75%)]" />

        <button
          ref={closeButtonRef}
          type="button"
          onClick={closePopup}
          aria-label="Close newsletter popup"
          className="hover:border-primary hover:text-primary absolute top-4 right-4 z-20 flex size-9 items-center justify-center rounded-full border border-[#DCE8ED] bg-white text-[#718A96] transition-all duration-300"
        >
          <X size={18} />
        </button>

        <div className="relative z-10 px-5 pt-12 pb-8 sm:px-9 sm:pt-14 sm:pb-9">
          <div className="text-center">
            <h2
              id="newsletter-heading"
              className="font-heading text-primary mt-3 text-[23px] leading-tight font-semibold tracking-[-0.045em] sm:text-[28px]"
            >
              Join Our Research
              <span className="text-secondary block">Updates</span>
            </h2>

            <p
              id="newsletter-description"
              className="mx-auto mt-3 max-w-[350px] text-[13px] leading-7 text-[#718A96] sm:text-[14px]"
            >
              Be the first to know about new compounds, restocks, and exclusive
              offers.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="mt-7">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>

            <div className="relative">
              <Mail
                size={19}
                strokeWidth={1.7}
                className="text-primary pointer-events-none absolute top-1/2 left-4 -translate-y-1/2"
              />

              <input
                id="newsletter-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email address"
                className="focus:border-primary focus:ring-primary/10 text-primary h-[54px] w-full rounded-[13px] border border-[#DCE8ED] bg-[#FAFCFD] pr-4 pl-12 text-[13px] transition-all duration-300 outline-none placeholder:text-[#9BAAB2] focus:bg-white focus:ring-2 sm:text-sm"
              />
            </div>

            <div className="mt-5 flex items-start gap-3">
              <input
                id="newsletter-consent"
                type="checkbox"
                checked={agreed}
                onChange={(event) => setAgreed(event.target.checked)}
                className="mt-0.5 size-[17px] shrink-0 cursor-pointer accent-[#07558F]"
              />

              <label
                htmlFor="newsletter-consent"
                className="cursor-pointer text-[11px] leading-[1.7] text-[#718A96] sm:text-[12px]"
              >
                I agree to receive research updates, restock alerts, and offers
                from Penguin Peptides by email. I can unsubscribe at any time.
                See our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-primary hover:text-secondary font-medium underline underline-offset-2 transition-colors"
                >
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            <button
              type="submit"
              disabled={!agreed || !email.trim()}
              className="group relative mt-6 flex h-[54px] w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[linear-gradient(110deg,var(--color-primary),var(--color-secondary))] px-6 text-[14px] font-semibold text-white shadow-md transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-md"
            >
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,var(--color-primary-dark),var(--color-primary))] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-disabled:opacity-0" />

              <span className="relative z-10">Subscribe</span>

              <ArrowRight
                size={18}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-disabled:translate-x-0"
              />
            </button>

            {notice && (
              <p
                role="status"
                className="text-primary mt-4 text-center text-[11px] leading-6"
              >
                {notice}
              </p>
            )}

            <p className="mt-4 text-center text-[11px] text-[#8CA0AA]">
              No spam. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
