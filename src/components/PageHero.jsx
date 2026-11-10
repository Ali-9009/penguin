"use client";

import { Snowflake, ShieldCheck, Sparkles } from "lucide-react";

const heroStars = Array.from({ length: 45 }, (_, i) => ({
  id: i,
  left: `${(i * 37.7 + 13) % 100}%`,
  top: `${(i * 23.9 + 7) % 100}%`,
  size: i % 5 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
  delay: `${(i % 9) * 0.35}s`,
  duration: `${2 + (i % 4)}s`,
}));

const heroSnowflakes = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 31.7 + 8) % 100}%`,
  size: 9 + (i % 5) * 5,
  delay: `${(i % 8) * -1.7}s`,
  duration: `${9 + (i % 6) * 2}s`,
}));

export default function PageHero({
  title,
  highlight,
  description,
  features = [],
}) {
  return (
    <header className="relative isolate overflow-hidden border-b border-white/10 bg-[linear-gradient(125deg,#020B1C_0%,#041B35_35%,#073B68_75%,#07558F_100%)] px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_45%,rgba(4,193,202,0.15),transparent_45%),radial-gradient(ellipse_at_15%_100%,rgba(7,85,143,0.3),transparent_50%)]" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {heroStars.map((star) => (
          <span
            key={star.id}
            className="coa-star absolute rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {heroSnowflakes.map((flake) => (
          <Snowflake
            key={flake.id}
            className="coa-snowfall absolute text-cyan-100/50"
            style={{
              left: flake.left,
              width: flake.size,
              height: flake.size,
              animationDelay: flake.delay,
              animationDuration: flake.duration,
            }}
            strokeWidth={1.3}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute top-1/2 -right-24 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[100px] sm:right-0" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-2xl">
          <h1 className="font-heading text-[42px] leading-[1.1] font-bold tracking-tight text-white sm:text-5xl lg:text-[64px]">
            {title}

            {highlight && (
              <span className="to-secondary mt-1 block bg-gradient-to-r from-cyan-200 via-cyan-300 bg-clip-text text-transparent">
                {highlight}
              </span>
            )}
          </h1>

          {description && (
            <p className="mt-6 max-w-xl font-sans text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              {description}
            </p>
          )}

          {features.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              {features.map((feature, index) => (
                <div
                  key={`${feature}-${index}`}
                  className="flex items-center gap-2 text-xs font-medium text-slate-300 sm:text-sm"
                >
                  {index > 0 && (
                    <span className="mr-3 hidden h-4 w-px bg-white/20 sm:block" />
                  )}

                  {index % 2 === 0 ? (
                    <ShieldCheck size={17} className="text-cyan-300" />
                  ) : (
                    <Sparkles size={17} className="text-cyan-300" />
                  )}

                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div
          aria-hidden="true"
          className="relative hidden h-[380px] items-center justify-center lg:flex"
        >
          <div className="coa-orbit absolute h-[350px] w-[350px] rounded-full border border-cyan-300/10" />

          <div className="coa-orbit-reverse absolute h-[280px] w-[280px] rounded-full border border-dashed border-cyan-300/20" />

          <div className="absolute h-[280px] w-[280px] rounded-full bg-cyan-400/10 blur-[65px]" />

          <div className="coa-main-flake relative flex h-[250px] w-[250px] items-center justify-center">
            <Snowflake
              size={245}
              strokeWidth={0.7}
              className="absolute text-cyan-300/15 blur-[9px]"
            />

            <Snowflake
              size={235}
              strokeWidth={0.8}
              className="absolute text-cyan-100/90 drop-shadow-[0_0_25px_rgba(103,232,249,0.55)]"
            />

            <Snowflake
              size={140}
              strokeWidth={0.65}
              className="absolute text-white/50"
            />

            <div className="absolute h-12 w-12 rounded-full bg-cyan-100/20 blur-xl" />
          </div>

          <Snowflake
            size={45}
            strokeWidth={1}
            className="coa-floating-flake absolute top-12 left-4 text-cyan-200/60"
          />

          <Snowflake
            size={30}
            strokeWidth={1}
            className="coa-floating-flake absolute right-12 bottom-12 text-white/50"
            style={{ animationDelay: "-2s" }}
          />

          <Snowflake
            size={24}
            strokeWidth={1}
            className="coa-floating-flake absolute top-16 right-0 text-cyan-300/50"
            style={{ animationDelay: "-4s" }}
          />

          <div className="absolute bottom-0 left-1/2 h-px w-[300px] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#020B1C]/40 to-transparent" />

      <style jsx global>{`
        @keyframes coaTwinkle {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.4);
          }
        }

        @keyframes coaSnowfall {
          0% {
            transform: translate3d(0, -50px, 0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.65;
          }
          90% {
            opacity: 0.65;
          }
          100% {
            transform: translate3d(35px, 550px, 0) rotate(180deg);
            opacity: 0;
          }
        }

        @keyframes coaMainFlake {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-14px) rotate(8deg);
          }
        }

        @keyframes coaOrbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes coaOrbitReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes coaFloatingFlake {
          0%,
          100% {
            transform: translateY(0) rotate(-8deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-18px) rotate(12deg);
            opacity: 0.9;
          }
        }

        .coa-star {
          animation: coaTwinkle 3s ease-in-out infinite;
        }

        .coa-snowfall {
          top: -50px;
          animation: coaSnowfall 14s linear infinite;
        }

        .coa-main-flake {
          animation: coaMainFlake 7s ease-in-out infinite;
        }

        .coa-orbit {
          animation: coaOrbit 45s linear infinite;
        }

        .coa-orbit-reverse {
          animation: coaOrbitReverse 60s linear infinite;
        }

        .coa-floating-flake {
          animation: coaFloatingFlake 6s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .coa-star,
          .coa-snowfall,
          .coa-main-flake,
          .coa-orbit,
          .coa-orbit-reverse,
          .coa-floating-flake {
            animation: none;
          }
        }
      `}</style>
    </header>
  );
}
