"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

import { LordIcon } from "@lordicon/react";

function AnimatedIcon({
  src = "/assets/wired.json",
  size = 60,
  color = "#009CA9",
}) {
  return (
    <LordIcon
      src={src}
      trigger="loop"
      colorize={color}
      style={{
        width: size,
        height: size,
        display: "inline-block",
      }}
    />
  );
}

function CheckItem({ check, iconRef }) {
  return (
    <article
      className={`absolute z-10 flex w-[106px] flex-col items-center text-center sm:w-[135px] md:w-[165px] ${check.position}`}
    >
      <div
        ref={iconRef}
        className="check-icon-float relative flex size-15 shrink-0 items-center justify-center rounded-full border border-[#CBE7EE] bg-[#EAF8FB] shadow-[0_6px_20px_rgba(7,85,143,0.07)] sm:size-[60px] md:size-[76px]"
      >
        <div className="absolute inset-[4px] rounded-full bg-white/80" />

        <div className="relative z-10 flex items-center justify-center">
          <AnimatedIcon src={check.icon} size={46} color="#009CA9" />
        </div>
      </div>

      <h3 className="font-heading text-primary mt-2 text-sm leading-tight font-semibold tracking-[-0.025em] sm:mt-3 sm:text-[14px] md:text-[17px]">
        {check.title}
      </h3>

      <p className="mt-1 max-w-full text-xs leading-[1.5] text-[#71808A] md:text-[12px]">
        {check.subtitle}
      </p>
    </article>
  );
}

function getRectCenter(rect, stageRect) {
  return {
    x: rect.left + rect.width / 2 - stageRect.left,
    y: rect.top + rect.height / 2 - stageRect.top,
  };
}

function getRectEdge(center, rect, directionX, directionY) {
  const halfWidth = rect.width / 2;
  const halfHeight = rect.height / 2;

  const scale = Math.min(
    Math.abs(directionX) > 0.0001 ? halfWidth / Math.abs(directionX) : Infinity,
    Math.abs(directionY) > 0.0001
      ? halfHeight / Math.abs(directionY)
      : Infinity,
  );

  return {
    x: center.x + directionX * scale,
    y: center.y + directionY * scale,
  };
}

export default function FiveChecks() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const logoRef = useRef(null);

  const iconRefs = useRef([]);
  const pathRefs = useRef([]);
  const dotRefs = useRef([]);

  const animationStartedRef = useRef(false);
  const animationCompletedRef = useRef(false);

  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  const [connections, setConnections] = useState([]);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    const logo = logoRef.current;

    if (!stage || !logo) return;

    let frame = 0;

    const updateConnections = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const stageRect = stage.getBoundingClientRect();
        const logoRect = logo.getBoundingClientRect();

        if (!stageRect.width || !stageRect.height) return;

        const logoCenter = getRectCenter(logoRect, stageRect);

        const paths = checks.map((check, index) => {
          const icon = iconRefs.current[index];

          if (!icon) return null;

          const iconRect = icon.getBoundingClientRect();

          const iconCenter = getRectCenter(iconRect, stageRect);

          const dx = iconCenter.x - logoCenter.x;
          const dy = iconCenter.y - logoCenter.y;

          const distance = Math.hypot(dx, dy);

          if (!distance) return null;

          const directionX = dx / distance;
          const directionY = dy / distance;

          const start = getRectEdge(
            logoCenter,
            logoRect,
            directionX,
            directionY,
          );

          const iconRadius = Math.min(iconRect.width, iconRect.height) / 2;

          const end = {
            x: iconCenter.x - directionX * iconRadius,
            y: iconCenter.y - directionY * iconRadius,
          };

          const lineDx = end.x - start.x;
          const lineDy = end.y - start.y;

          const curveAmount = Math.min(24, Math.hypot(lineDx, lineDy) * 0.12);

          let curveDirection = 0;

          if (check.id === "sterility") curveDirection = -1;
          if (check.id === "purity") curveDirection = 1;
          if (check.id === "endotoxins") curveDirection = 1;
          if (check.id === "content") curveDirection = -1;

          const normalX = -directionY * curveAmount * curveDirection;
          const normalY = directionX * curveAmount * curveDirection;

          const control1 = {
            x: start.x + lineDx * 0.38 + normalX,
            y: start.y + lineDy * 0.38 + normalY,
          };

          const control2 = {
            x: start.x + lineDx * 0.72 + normalX,
            y: start.y + lineDy * 0.72 + normalY,
          };

          const d = `
            M ${start.x} ${start.y}
            C ${control1.x} ${control1.y},
              ${control2.x} ${control2.y},
              ${end.x} ${end.y}
          `;

          return {
            id: check.id,
            d,
            x: end.x,
            y: end.y,
          };
        });

        setDimensions({
          width: stageRect.width,
          height: stageRect.height,
        });

        setConnections(paths);
      });
    };

    updateConnections();

    const observer = new ResizeObserver(updateConnections);

    observer.observe(stage);
    observer.observe(logo);

    iconRefs.current.forEach((icon) => {
      if (icon) observer.observe(icon);
    });

    window.addEventListener("resize", updateConnections);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", updateConnections);
    };
  }, []);

  useEffect(() => {
    if (connections.length !== checks.length) return;
    if (connections.some((connection) => !connection)) return;

    const elements = checks.map((_, index) => ({
      path: pathRefs.current[index],
      dot: dotRefs.current[index],
    }));

    if (elements.some(({ path, dot }) => !path || !dot)) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || animationCompletedRef.current) {
      elements.forEach(({ path, dot }) => {
        gsap.set(path, {
          strokeDasharray: "none",
          strokeDashoffset: 0,
        });

        gsap.set(dot, {
          autoAlpha: 1,
          scale: 1,
        });
      });

      return;
    }

    if (animationStartedRef.current) return;

    animationStartedRef.current = true;

    const ctx = gsap.context(() => {
      elements.forEach(({ path, dot }) => {
        const length = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.set(dot, {
          autoAlpha: 0,
          scale: 0,
          transformOrigin: "center center",
        });
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
        onComplete: () => {
          animationCompletedRef.current = true;
        },
      });

      elements.forEach(({ path, dot }, index) => {
        const start = index * 0.25;

        timeline.to(
          path,
          {
            strokeDashoffset: 0,
            duration: 1,
            ease: "power2.inOut",
          },
          start,
        );

        timeline.to(
          dot,
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.35,
            ease: "back.out(2)",
          },
          start + 0.75,
        );
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      animationStartedRef.current = false;
    };
  }, [connections.length]);

  return (
    <section
      ref={sectionRef}
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
          <div
            ref={stageRef}
            className="relative mx-auto h-[470px] w-full sm:h-[520px] md:h-[570px] lg:h-[610px]"
          >
            <div className="pointer-events-none absolute top-1/2 left-1/2 size-[245px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DDF2F7]/60 blur-[65px] sm:size-[330px]" />

            {dimensions.width > 0 && connections.length === checks.length && (
              <svg
                aria-hidden="true"
                viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
              >
                {connections.map((connection, index) => {
                  if (!connection) return null;

                  return (
                    <g key={connection.id}>
                      <path
                        d={connection.d}
                        fill="none"
                        stroke="#07558F"
                        strokeWidth="2"
                        strokeOpacity="0.1"
                      />

                      <path
                        ref={(element) => {
                          pathRefs.current[index] = element;
                        }}
                        d={connection.d}
                        fill="none"
                        stroke="#04C1CA"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />

                      <circle
                        ref={(element) => {
                          dotRefs.current[index] = element;
                        }}
                        cx={connection.x}
                        cy={connection.y}
                        r="5"
                        fill="#04C1CA"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </g>
                  );
                })}
              </svg>
            )}

            <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
              <div
                ref={logoRef}
                className="five-check-logo relative flex h-[80px] w-[105px] items-center justify-center rounded-[15px] border border-[#E8F0F3] bg-white p-3 shadow-[0_15px_35px_rgba(7,59,104,0.13)] sm:h-[125px] sm:w-[155px] sm:rounded-[18px] md:h-[170px] md:w-[230px] md:rounded-[22px]"
              >
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

            {checks.map((check, index) => (
              <CheckItem
                key={check.id}
                check={check}
                iconRef={(element) => {
                  iconRefs.current[index] = element;
                }}
              />
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

        .five-check-logo {
          animation: fiveCheckLogoFloat 6s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .check-icon-float,
          .five-check-logo {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
