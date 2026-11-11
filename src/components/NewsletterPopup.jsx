"use client";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Bell,
  FlaskConical,
  Mail,
  PackageCheck,
  X,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

  const closePopup = () => {
    setIsOpen(false);

    try {
      sessionStorage.setItem(POPUP_KEY, "true");
    } catch {}
  };
  const openPopup = () => {
    setIsOpen(true);
    setNotice("");
  };

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


return (
  <>
    <button
      type="button"
      onClick={openPopup}
      aria-label="Open Penguin Peptides newsletter"
      title="Research Updates"
      className="group fixed bottom-5 left-5 z-[9998] flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#063B68_0%,#07558F_55%,#009CA9_100%)] text-white shadow-[0_8px_28px_rgba(7,85,143,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(7,85,143,0.4)] active:scale-95 sm:bottom-7 sm:left-7"
    >
      <Mail size={24} strokeWidth={1.8} />

      <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full border-2 border-white bg-[#00B6C3]">
        <span className="size-1.5 rounded-full bg-white" />
      </span>
    </button>

    {isOpen && (
      <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[#020D19]/80 px-4 py-4 backdrop-blur-[8px] sm:px-6 sm:py-6"
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
        className="relative my-auto w-full max-w-[540px] overflow-hidden rounded-[24px] border border-[#D8EAF0] bg-white shadow-[0_30px_100px_rgba(0,20,40,0.35)] sm:rounded-[30px]"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[290px] bg-[radial-gradient(ellipse_at_top,#E0F6FA_0%,#F3FBFD_55%,transparent_100%)]" />

        <button
          ref={closeButtonRef}
          type="button"
          onClick={closePopup}
          aria-label="Close newsletter popup"
          className="text-primary absolute top-4 right-4 z-30 flex size-9 items-center justify-center rounded-full border border-[#DCE8ED] bg-white/90 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white"
        >
          <X size={18} />
        </button>

        <div className="relative z-10 px-5 pt-12 pb-7 sm:px-9  sm:py-9">
          <div className="relative">
            <div className="relative z-10 mx-auto max-w-[260px] text-center sm:max-w-[310px]">
              <span className="text-primary inline-flex items-center gap-2 rounded-full border border-[#D9EDF1] bg-white/80 px-3 py-1.5 text-[9px] font-bold tracking-[0.1em] uppercase shadow-sm sm:text-[10px]">
                <FlaskConical size={13} className="text-secondary" />
                Research Updates
              </span>

              <h2
                id="newsletter-heading"
                className="font-heading text-primary mt-5 text-[23px] leading-[1.15] font-bold tracking-[-0.04em] sm:text-[30px]"
              >
                Join Our Research Community
              </h2>
            </div>

            <div
              aria-hidden="true"
              className="newsletter-float-left pointer-events-none absolute top-10 left-0 z-20 h-[90px] w-[62px] drop-shadow-[0_10px_10px_rgba(7,59,104,0.15)] sm:top-8 sm:left-2 sm:h-[120px] sm:w-[85px]"
            >
              <Image
                src="/assets/pp-1sm.png"
                alt=""
                fill
                sizes="85px"
                className="object-contain"
              />
            </div>

            <div
              aria-hidden="true"
              className="newsletter-float-right pointer-events-none absolute top-12 right-0 z-20 h-[95px] w-[65px] drop-shadow-[0_10px_10px_rgba(7,59,104,0.15)] sm:top-9 sm:right-2 sm:h-[125px] sm:w-[90px]"
            >
              <Image
                src="/assets/pp-1tz.png"
                alt=""
                fill
                sizes="90px"
                className="object-contain"
              />
            </div>
          </div>

          <p
            id="newsletter-description"
            className="mx-auto mt-7 max-w-[390px] text-center text-sm leading-6 text-[#718A96] "
          >
            Discover new compounds, get restock alerts, and stay updated on
            exclusive Penguin Peptides offers.
          </p>

          <form onSubmit={handleSubscribe} className="mt-7">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>

            <div className="relative">
              <Mail
                size={18}
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
                className="text-primary focus:border-primary focus:ring-primary/10 h-[52px] w-full rounded-[13px] border border-[#DCE8ED] bg-[#FAFCFD] pr-4 pl-12 text-[13px] transition-all duration-300 outline-none placeholder:text-[#9BAAB2] focus:bg-white focus:ring-2 sm:text-sm"
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
                className="cursor-pointer text-xs leading-[1.7] text-[#718A96]"
              >
                I agree to receive research updates, restock alerts, and offers
                from Penguin Peptides by email. I can unsubscribe at any time.
                See our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-primary hover:text-secondary font-semibold underline underline-offset-2 transition-colors"
                >
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            <button
              type="submit"
              disabled={!agreed || !email.trim()}
              className="group relative mt-6 flex h-[52px] w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[linear-gradient(120deg,#063B68_0%,#07558F_45%,#009CA9_100%)] px-6 text-[13px] font-semibold text-white shadow-[0_6px_18px_rgba(7,85,143,0.2)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[linear-gradient(120deg,#032C50_0%,#064574_55%,#087B91_100%)] hover:shadow-[0_10px_25px_rgba(7,85,143,0.28)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none sm:text-sm"
            >
              <span className="relative z-10">Subscribe to Updates</span>

              <ArrowRight
                size={18}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-disabled:translate-x-0"
              />
            </button>

            {notice && (
              <div
                role="status"
                className="text-primary mt-4 flex items-start gap-2 rounded-xl border border-[#D9EDF1] bg-[#F0FAFC] p-3 text-[11px] leading-5"
              >
                <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                {notice}
              </div>
            )}

            <p className="mt-4 text-center text-xs text-[#8CA0AA]">
              No spam. Research updates only.
            </p>
          </form>
        </div>

        <style jsx>{`
          @keyframes newsletterFloatLeft {
            0%,
            100% {
              transform: translateY(0) rotate(-13deg);
            }
            50% {
              transform: translateY(-12px) rotate(-9deg);
            }
          }

          @keyframes newsletterFloatRight {
            0%,
            100% {
              transform: translateY(0) rotate(13deg);
            }
            50% {
              transform: translateY(-15px) rotate(17deg);
            }
          }

          .newsletter-float-left {
            animation: newsletterFloatLeft 4.5s ease-in-out infinite;
          }

          .newsletter-float-right {
            animation: newsletterFloatRight 5.2s ease-in-out infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .newsletter-float-left,
            .newsletter-float-right {
              animation: none;
            }
          }
        `}</style>
      </section>
    </div>
    )}
  </>
);}