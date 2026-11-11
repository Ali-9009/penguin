"use client";

import Image from "next/image";
import AnimatedIcon from "@/components/PlayOnce";

const checks = [
  {
    id: "identification",
    title: "Identification",
    subtitle: "HPLC + LC-MS",
    icon: "/assets/identification.json",
    position: "left-1/2 top-[8%] -translate-x-1/2 md:top-[5%]",
  },
  {
    id: "sterility",
    title: "Sterility",
    subtitle: "PCR screen",
    icon: "/assets/sterility.json",
    position:
      "left-[13%] top-[39%] -translate-x-1/2 md:left-[12%] md:top-[38%]",
  },
  {
    id: "purity",
    title: "Purity",
    subtitle: "Chromatographic analysis",
    icon: "/assets/pure.json",
    position:
      "left-[87%] top-[39%] -translate-x-1/2 md:left-[88%] md:top-[38%]",
  },
  {
    id: "endotoxins",
    title: "Endotoxins",
    subtitle: "Bacterial endotoxin screen",
    icon: "/assets/endotoxins.json",
    position:
      "left-[28%] top-[76%] -translate-x-1/2 md:left-[26%] md:top-[77%]",
  },
  {
    id: "content",
    title: "Net Content",
    subtitle: "Measured mass per vial",
    icon: "/assets/content.json",
    position:
      "left-[72%] top-[76%] -translate-x-1/2 md:left-[74%] md:top-[77%]",
  },
];

function CheckItem({ check }) {
  return (
    <article
      className={`absolute z-10 flex w-[106px] flex-col items-center text-center sm:w-[135px] md:w-[165px] ${check.position}`}
    >
      <div className="check-icon-float relative flex size-15 shrink-0 items-center justify-center rounded-full border border-[#CBE7EE] bg-[#EAF8FB] shadow-[0_6px_20px_rgba(7,85,143,0.07)] sm:size-[60px] md:size-[76px]">
        <div className="absolute inset-[4px] rounded-full bg-white/80" />

        <div className="relative z-10 flex items-center justify-center">
          <AnimatedIcon src={check.icon} size={46} color="#009CA9" />
        </div>
      </div>

      <h3 className="font-heading mt-2 text-sm leading-tight font-semibold tracking-[-0.025em] text-primary sm:mt-3 sm:text-[14px] md:text-[17px]">
        {check.title}
      </h3>

      <p className="mt-1 max-w-full text-xs leading-[1.5] text-[#71808A]  md:text-[12px]">
        {check.subtitle}
      </p>
    </article>
  );
}

function DiagramLines() {
  return (
    <>
      <svg
        aria-hidden="true"
        viewBox="0 0 360 500"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full md:hidden"
      >
        <circle
          cx="180"
          cy="250"
          r="115"
          fill="none"
          stroke="#C9D8DE"
          strokeWidth="0.7"
          strokeDasharray="3 4"
          opacity="0.7"
        />

        <circle
          cx="180"
          cy="250"
          r="77"
          fill="none"
          stroke="#C9D8DE"
          strokeWidth="0.7"
          opacity="0.6"
        />

        <g
          fill="none"
          stroke="#B9CBD2"
          strokeWidth="0.8"
          strokeDasharray="5 7"
          opacity="0.7"
          className="five-check-lines"
        >
          <path d="M180 250 L180 55" />
          <path d="M180 250 L47 205" />
          <path d="M180 250 L313 205" />
          <path d="M180 250 L101 385" />
          <path d="M180 250 L259 385" />
        </g>
      </svg>

      <svg
        aria-hidden="true"
        viewBox="0 0 1000 650"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
      >
        <circle
          cx="500"
          cy="325"
          r="225"
          fill="none"
          stroke="#C9D8DE"
          strokeWidth="1"
          strokeDasharray="3 5"
          opacity="0.65"
        />

        <circle
          cx="500"
          cy="325"
          r="165"
          fill="none"
          stroke="#C9D8DE"
          strokeWidth="1"
          opacity="0.55"
        />

        <g
          fill="none"
          stroke="#B9CBD2"
          strokeWidth="1.2"
          strokeDasharray="6 9"
          opacity="0.7"
          className="five-check-lines"
        >
          <path d="M500 325 L500 55" />
          <path d="M500 325 L120 245" />
          <path d="M500 325 L880 245" />
          <path d="M500 325 L260 500" />
          <path d="M500 325 L740 500" />
        </g>
      </svg>
    </>
  );
}

export default function FiveChecks() {
  return (
    <section
      aria-labelledby="five-checks-heading"
      className="relative isolate overflow-hidden bg-[#F8FAFB] px-3 py-12 sm:px-6 md:py-16 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_15%,rgba(0,156,169,0.08),transparent_45%),radial-gradient(ellipse_at_12%_80%,rgba(7,85,143,0.05),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <header className="text-center">
          <h2 id="five-checks-heading" className="section-heading">
            Five checks.
            <span className="text-secondary block">One clearer record.</span>
          </h2>
        </header>

        <figure className="mx-auto mt-5 w-full max-w-[950px] sm:mt-8">
          <div className="relative mx-auto h-[470px] w-full sm:h-[520px] md:h-[570px] lg:h-[610px]">
            <div className="pointer-events-none absolute top-1/2 left-1/2 size-[245px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DDF2F7]/60 blur-[65px] sm:size-[330px]" />

            <DiagramLines />

            <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
              <div className="five-check-logo relative flex h-[80px] w-[105px] items-center justify-center rounded-[15px] border border-[#E8F0F3] bg-white p-3 shadow-[0_15px_35px_rgba(7,59,104,0.13)] sm:h-[125px] sm:w-[155px] sm:rounded-[18px] md:h-[170px] md:w-[230px] md:rounded-[22px]">
                <Image
                  src="/assets/penguin-logo.png"
                  alt="Penguin Peptides"
                  width={260}
                  height={160}
                  sizes="(max-width: 639px) 140px, (max-width: 767px) 190px, 280px"
                  className="h-auto w-full scale-125 object-contain lg:scale-110"
                />
              </div>
            </div>

            {checks.map((check) => (
              <CheckItem key={check.id} check={check} />
            ))}
          </div>
        </figure>
      </div>

      <style jsx global>{`
        @keyframes fiveCheckFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes fiveCheckLineFlow {
          from {
            stroke-dashoffset: 0;
          }

          to {
            stroke-dashoffset: -60;
          }
        }

        @keyframes fiveCheckLogoFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-4px);
          }
        }

        .check-icon-float {
          animation: fiveCheckFloat 4s ease-in-out infinite;
        }

        .five-check-lines {
          animation: fiveCheckLineFlow 10s linear infinite;
        }

        .five-check-logo {
          animation: fiveCheckLogoFloat 6s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .check-icon-float,
          .five-check-lines,
          .five-check-logo {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
