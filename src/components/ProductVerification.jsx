"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Hash, QrCode, Snowflake } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Scan the QR Code",
    description:
      "Scan the QR code on your vial to access its corresponding Certificate of Analysis and review the available testing information.",
    icon: QrCode,
  },
  {
    number: "02",
    title: "Verify the Batch Details",
    description:
      "Compare the batch number and COA number printed on your vial with the information listed on the certificate.",
    icon: Hash,
  },
];

const snowflakes = Array.from({ length: 45 }, (_, index) => {
  const sizes = [9, 12, 15, 18, 11, 14, 20];

  return {
    id: index,
    left: `${(index * 37.7 + 11) % 100}%`,
    size: sizes[index % sizes.length],
    duration: 8 + ((index * 3.7) % 9),
    delay: -((index * 2.3) % 15),
    opacity: 0.3 + ((index * 7) % 6) / 10,
    drift: `${(index % 2 === 0 ? 1 : -1) * (15 + (index % 5) * 9)}px`,
  };
});

function FallingSnow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {snowflakes.map((snow) => (
        <Snowflake
          key={snow.id}
          size={snow.size}
          strokeWidth={1.5}
          className="verification-snow absolute top-0 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.7)]"
          style={{
            left: snow.left,
            opacity: snow.opacity,
            animationDuration: `${snow.duration}s`,
            animationDelay: `${snow.delay}s`,
            "--snow-drift": snow.drift,
          }}
        />
      ))}
    </div>
  );
}

function VerificationCard({ step }) {
  const Icon = step.icon;

  return (
    <article className="group relative flex items-start gap-3 overflow-hidden rounded-[18px] border border-[#DCECF1] bg-white/95 p-4 shadow-[0_8px_30px_rgba(7,85,143,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#8ADCE5] hover:shadow-[0_15px_35px_rgba(7,85,143,0.12)] sm:gap-5 sm:rounded-[22px] sm:p-6">
      <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#07558F] to-[#04C1CA] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-[15px] bg-[#E8F8FA] text-[#07558F] transition-all duration-300 group-hover:bg-[#D8F4F7] sm:h-14 sm:w-14 sm:rounded-[18px]">
          <Icon size={24} strokeWidth={1.8} />
        </div>

        <span className="font-heading absolute -top-2 -right-2 flex h-[23px] w-[23px] items-center justify-center rounded-full bg-gradient-to-br from-[#07558F] to-[#04C1CA] text-[10px] font-bold text-white shadow-[0_4px_10px_rgba(7,85,143,0.2)]">
          {step.number}
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="font-heading text-[15px] leading-[1.35] font-bold tracking-[-0.035em] text-[#102E38] sm:text-[19px]">
          {step.title}
        </h3>

        <p className="mt-2 font-sans text-[12px] leading-[1.75] text-[#607F8B] sm:text-[14px]">
          {step.description}
        </p>
      </div>
    </article>
  );
}

export default function ProductVerification() {
  return (
    <section
      id="product-verification"
      aria-labelledby="verification-heading"
      className="relative isolate w-full overflow-hidden bg-gradient-to-br from-[#A8D9E8] via-[#D6F0F5] to-[#B6E3ED] px-4 py-12 sm:px-6 md:py-16 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_55%,rgba(255,255,255,0.65)_0%,transparent_70%)]" />

      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#07558F]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 -bottom-40 h-[500px] w-[500px] rounded-full bg-[#04C1CA]/15 blur-[120px]" />

      <FallingSnow />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-[190px_minmax(0,1fr)] md:gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
        <figure className="mx-auto flex w-full max-w-[210px] flex-col items-center md:max-w-none">
          <div className="relative h-[260px] w-[155px] sm:h-[310px] sm:w-[185px] md:h-[330px] md:w-[195px] lg:h-[365px] lg:w-[230px]">
            <div className="absolute inset-x-0 bottom-4 h-16 rounded-full bg-[#07558F]/15 blur-[25px]" />

            <Image
              src="/assets/vari-qr.png"
              alt="Penguin Peptides research vial with QR verification code"
              fill
              priority={false}
              sizes="(max-width: 639px) 155px, (max-width: 1023px) 195px, 230px"
              className="relative object-contain drop-shadow-[0_20px_25px_rgba(7,59,104,0.16)]"
            />
          </div>

          <figcaption className="mt-2 text-center font-sans text-[11px] leading-relaxed text-[#466B7B] italic sm:text-[12px]">
            *For demonstration purposes.
          </figcaption>
        </figure>

        <div className="min-w-0">
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/70 bg-white/80 px-4 py-2 shadow-[0_4px_15px_rgba(7,85,143,0.05)] backdrop-blur-sm">
            <QrCode size={15} className="text-[#07558F]" />

            <span className="font-heading text-[10px] font-bold tracking-[0.15em] text-[#07558F] uppercase sm:text-[11px]">
              Product Verification
            </span>
          </div>

          <h2 id="verification-heading" className="section-heading">
            How to verify{" "}
            <span className="bg-gradient-to-r from-[#07558F] to-[#04C1CA] bg-clip-text text-transparent">
              each product.
            </span>
          </h2>

          <p className="text-md mt-4 max-w-[780px] font-sans leading-[1.8] text-[#456E7C]">
            Each compound comes with a scannable QR code, batch number, and COA
            number to help you verify its testing information.
          </p>

          <div className="mt-7 flex flex-col gap-4 sm:mt-8">
            {steps.map((step) => (
              <VerificationCard key={step.number} step={step} />
            ))}
          </div>

          <Link href="/coa" className="btn-gradient mt-6">
            View Full COA Archive
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes verificationSnowfall {
          0% {
            transform: translate3d(0, -60px, 0) rotate(0deg);
          }

          100% {
            transform: translate3d(var(--snow-drift, 30px), 110vh, 0)
              rotate(360deg);
          }
        }

        .verification-snow {
          animation: verificationSnowfall 12s linear infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .verification-snow {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
