"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  FlaskConical,
  LockKeyhole,
} from "lucide-react";
import Image from "next/image";

const STORAGE_KEY = "spectrum-researcher-verified-v1";

export default function ResearcherGate() {
  const [phase, setPhase] = useState("checking");
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [researchConfirmed, setResearchConfirmed] = useState(false);

  const firstCheckboxRef = useRef(null);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "accepted") {
        setPhase("accepted");
        return;
      }
    } catch {}

    setPhase("prompt");
  }, []);

  useEffect(() => {
    if (phase !== "prompt") return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    firstCheckboxRef.current?.focus();

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [phase]);

  const handleContinue = () => {
    if (!ageConfirmed || !researchConfirmed) return;

    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {}

    setPhase("accepted");

    window.dispatchEvent(new Event("researcher-gate:accepted"));
  };

  if (phase === "accepted" || phase === "checking") return null;

  return (
    <div className="fixed inset-0 z-[99999] overflow-y-auto bg-white lg:overflow-hidden">
      <main className="grid min-h-screen grid-cols-1 lg:h-screen lg:grid-cols-2">
        <section
          aria-label="Penguin Peptides welcome"
          className="relative hidden overflow-hidden bg-[#05243D] lg:block lg:h-full lg:min-h-0"
        >
          <Image
            src="/assets/about-penguin-1.png"
            alt="Penguin Peptides research products"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover object-center"
          />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(2,18,35,0.65)_100%)]" />

          <div className="absolute bottom-7 left-6 z-10 sm:bottom-10 sm:left-10 lg:bottom-12 lg:left-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-semibold tracking-[0.12em] text-white uppercase backdrop-blur-md">
              <FlaskConical size={15} />
              Research Use Only
            </span>

            <h2 className="font-heading mt-4 max-w-[470px] text-[28px] leading-[1.15] font-bold tracking-[-0.04em] text-white sm:text-[36px] lg:text-[42px]">
              Advancing Discovery.
              <span className="block text-[#70E1E8]">Supporting Research.</span>
            </h2>

            <p className="mt-3 hidden max-w-[390px] text-[13px] leading-7 text-white/75 sm:block">
              Premium research compounds for laboratory and scientific
              applications.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="verification-title"
          aria-describedby="verification-description"
          className="flex min-h-0 items-center justify-center bg-[linear-gradient(145deg,#FFFFFF_0%,#F3FAFC_100%)] px-5 py-9 sm:px-10 sm:py-12 lg:h-full lg:overflow-y-auto lg:px-10 xl:px-16"
        >
          <div className="w-full max-w-[510px]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D7EAF0] bg-[#E9F7FA] px-3.5 py-2">
              <ShieldCheck
                size={15}
                className="text-primary"
                strokeWidth={1.8}
              />

              <span className="text-primary text-[10px] font-bold tracking-[0.12em] uppercase">
                Researcher Access
              </span>
            </div>

            <h1
              id="verification-title"
              className="font-heading text-primary text-[32px] leading-[1.12] font-bold tracking-[-0.045em] sm:text-[40px] xl:text-[44px]"
            >
              Researcher <span className="text-secondary">Verification</span>
            </h1>

            <p
              id="verification-description"
              className="mt-4 max-w-[465px] text-[13px] leading-7 text-[#617987] sm:text-[14px]"
            >
              Welcome to Penguin Peptides. Our products are intended exclusively
              for qualified researchers and laboratory use. Please confirm the
              following requirements to continue.
            </p>

            <div className="mt-7 space-y-3">
              <label
                className={`flex cursor-pointer items-start gap-3.5 rounded-[15px] border p-4 transition-all duration-300 sm:p-5 ${
                  ageConfirmed
                    ? "border-primary/30 bg-[#EAF7FA]"
                    : "hover:border-primary/40 border-[#DBE9EE] bg-white"
                }`}
              >
                <input
                  ref={firstCheckboxRef}
                  type="checkbox"
                  checked={ageConfirmed}
                  onChange={(event) => setAgeConfirmed(event.target.checked)}
                  className="mt-0.5 size-5 shrink-0 cursor-pointer accent-[#07558F]"
                />

                <span className="text-[13px] leading-6 text-[#526F7D] sm:text-[14px]">
                  I confirm that I am at least{" "}
                  <strong className="text-primary font-bold">
                    21 years of age.
                  </strong>
                </span>
              </label>

              <label
                className={`flex cursor-pointer items-start gap-3.5 rounded-[15px] border p-4 transition-all duration-300 sm:p-5 ${
                  researchConfirmed
                    ? "border-primary/30 bg-[#EAF7FA]"
                    : "hover:border-primary/40 border-[#DBE9EE] bg-white"
                }`}
              >
                <input
                  type="checkbox"
                  checked={researchConfirmed}
                  onChange={(event) =>
                    setResearchConfirmed(event.target.checked)
                  }
                  className="mt-0.5 size-5 shrink-0 cursor-pointer accent-[#07558F]"
                />

                <span className="text-[13px] leading-6 text-[#526F7D] sm:text-[14px]">
                  I confirm that I am a{" "}
                  <strong className="text-primary font-bold">
                    qualified researcher
                  </strong>{" "}
                  purchasing for{" "}
                  <strong className="text-primary font-bold">
                    in vitro or laboratory research only
                  </strong>
                  , not for human or veterinary use.
                </span>
              </label>
            </div>

            <button
              type="button"
              onClick={handleContinue}
              disabled={!ageConfirmed || !researchConfirmed}
              className="group relative mt-6 flex h-[52px] w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[linear-gradient(110deg,var(--color-primary),var(--color-secondary))] px-5 text-[13px] font-semibold text-white shadow-[0_8px_25px_rgba(7,85,143,0.15)] transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-[#DCE7EB] disabled:bg-none disabled:text-[#81939C] disabled:shadow-none disabled:hover:translate-y-0 sm:text-sm"
            >
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,var(--color-primary-dark),var(--color-primary))] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-disabled:opacity-0" />

              <span className="relative z-10">Enter Penguin Peptides</span>

              <ArrowRight
                size={19}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-disabled:translate-x-0"
              />
            </button>

            <p className="mt-5 text-[11px] leading-6 text-[#8299A4]">
              By continuing, you confirm that these statements are accurate.
              Products are not intended for human consumption, veterinary use,
              or diagnostic procedures.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-[#DCE8ED] pt-5">
              <a
                href="https://www.google.com/"
                className="text-primary hover:text-secondary text-[12px] font-semibold underline underline-offset-4 transition-colors"
              >
                Not a researcher? Quit Site
              </a>

              <span className="flex items-center gap-1.5 text-[11px] text-[#81939C]">
                <LockKeyhole size={13} />
                Secure Verification
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
