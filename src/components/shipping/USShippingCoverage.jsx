"use client";

import { useState } from "react";
import { ArrowUpRight, MapPin, Truck } from "lucide-react";
import usa from "@/data/us-map-data.json";

const hub = { x: 445.7, y: 379.2 };

const destinations = [
  { name: "Seattle", x: 124.3, y: 51.6 },
  { name: "Los Angeles", x: 115.5, y: 314.8 },
  { name: "Denver", x: 328.9, y: 240.9 },
  { name: "Minneapolis", x: 546, y: 163 },
  { name: "Chicago", x: 575.2, y: 201.2 },
  { name: "Nashville", x: 614, y: 321 },
  { name: "New York", x: 768.3, y: 192.4 },
];

const stateNames = {
  AL: "Alabama",
  AK: "Alaska",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  FL: "Florida",
  GA: "Georgia",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming",
  DC: "District of Columbia",
};

const highlighted = new Set(["TX", "OK", "NM", "AR", "LA", "IA"]);

function curvedRoute(city) {
  const dx = city.x - hub.x;
  const dy = city.y - hub.y;
  const distance = Math.hypot(dx, dy);
  const bend = Math.min(68, distance * 0.18);
  const mx = (hub.x + city.x) / 2;
  const my = (hub.y + city.y) / 2;

  return `M ${hub.x} ${hub.y} Q ${mx - (dy / distance) * bend} ${my + (dx / distance) * bend} ${city.x} ${city.y}`;
}

export default function USShippingCoverage() {
  const [activeState, setActiveState] = useState("IA");
  const [hoveredState, setHoveredState] = useState(null);
  const [activeCity, setActiveCity] = useState(null);
  const [hoveredCity, setHoveredCity] = useState(null);

  const selectedState = hoveredState || activeState;
  const selectedCity = hoveredCity || activeCity;
  const currentName = stateNames[selectedState] || selectedState;

  return (
    <section
      aria-labelledby="shipping-coverage-title"
      className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <h2 id="shipping-coverage-title" className="section-heading">
              Across the{" "}
              <span className="text-secondary-dark">United States.</span>
            </h2>

            <p className="mt-4 max-w-xl text-[13px] leading-7 text-[#617987] sm:text-[15px]">
              Explore our illustrated domestic shipping network. Select a state
              or destination to view more information.
            </p>
          </div>

          <div className="flex w-fit items-center gap-2.5 rounded-full border border-[#DCE8ED] bg-[#F4FAFC] px-4 py-2.5">
            <Truck size={16} strokeWidth={1.8} className="text-secondary" />

            <span className="text-primary text-[12px] font-semibold">
              Domestic Shipping
            </span>
          </div>
        </header>

        <div className="overflow-hidden rounded-[22px] border border-[#DCE8ED] bg-[linear-gradient(135deg,#FFFFFF_0%,#F0FAFC_55%,#E5F5F9_100%)] shadow-[0_12px_45px_rgba(7,59,104,0.04)] sm:rounded-[28px]">
          <div className="grid min-w-0 gap-5 p-3 sm:p-5 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-stretch lg:gap-6 lg:p-7">
            <div className="relative flex min-w-0 flex-col overflow-hidden rounded-[18px] border border-[#E1EDF1] bg-white/80 sm:rounded-[22px]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EAF1F4] px-4 py-4 sm:px-6">
                <div className="flex items-center gap-2">
                  <MapPin
                    size={16}
                    strokeWidth={1.8}
                    className="text-secondary"
                  />

                  <span className="text-primary text-[12px] font-semibold sm:text-[13px]">
                    United States
                  </span>
                </div>

                <span className="rounded-full border border-[#DCE8ED] bg-[#F4FAFC] px-3 py-1.5 text-[10px] font-medium text-[#617987]">
                  Interactive Map
                </span>
              </div>

              <div className="relative flex min-h-[220px] w-full flex-1 items-center justify-center overflow-hidden sm:min-h-40">
                <svg
                  viewBox="0 0 900 540"
                  role="img"
                  aria-label="Interactive United States shipping map with illustrative routes from Dallas"
                  preserveAspectRatio="xMidYMid meet"
                  className="block h-auto w-full max-w-[800px]"
                >
                  <defs>
                    <linearGradient
                      id="shipping-land"
                      x1="0"
                      x2="1"
                      y1="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#C5E9F2" />
                      <stop offset="100%" stopColor="#E6F7FA" />
                    </linearGradient>
                  </defs>

                  <path d={usa.outline} fill="url(#shipping-land)" />

                  {usa.states.map((state) => {
                    const selected = selectedState === state.id;

                    const name = stateNames[state.id] || state.name || state.id;

                    return (
                      <path
                        key={state.id}
                        d={state.d}
                        role="button"
                        tabIndex={0}
                        aria-label={`Select ${name}`}
                        aria-pressed={activeState === state.id}
                        fill={
                          selected
                            ? "#07558F"
                            : highlighted.has(state.id)
                              ? "#64B9D0"
                              : "#B8DFEA"
                        }
                        stroke="#FFFFFF"
                        strokeWidth={selected ? 2 : 1.25}
                        strokeLinejoin="round"
                        className="cursor-pointer transition-colors duration-300 outline-none focus:stroke-[#04C1CA]"
                        onMouseEnter={() => setHoveredState(state.id)}
                        onMouseLeave={() => setHoveredState(null)}
                        onFocus={() => setHoveredState(state.id)}
                        onBlur={() => setHoveredState(null)}
                        onClick={() => {
                          setActiveState(state.id);
                          setActiveCity(null);
                        }}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            setActiveState(state.id);
                            setActiveCity(null);
                          }
                        }}
                      >
                        <title>{name}</title>
                      </path>
                    );
                  })}

                  {destinations.map((city, index) => {
                    const active = selectedCity === city.name;
                    const route = curvedRoute(city);

                    return (
                      <g key={city.name}>
                        <path
                          d={route}
                          fill="none"
                          stroke={active ? "#04C1CA" : "#07558F"}
                          strokeWidth={active ? 2.8 : 1.5}
                          strokeDasharray="6 8"
                          strokeLinecap="round"
                          opacity={selectedCity && !active ? 0.25 : 0.8}
                          className="shipping-route pointer-events-none"
                        />

                        <circle
                          r={active ? 4.5 : 3}
                          fill={active ? "#009CA9" : "#073B68"}
                          opacity={selectedCity && !active ? 0.2 : 0.9}
                          className="pointer-events-none motion-reduce:hidden"
                        >
                          <animateMotion
                            dur={`${5 + index * 0.65}s`}
                            path={route}
                            repeatCount="indefinite"
                          />
                        </circle>

                        <g
                          role="button"
                          tabIndex={0}
                          aria-label={`Highlight route to ${city.name}`}
                          aria-pressed={activeCity === city.name}
                          className="cursor-pointer outline-none"
                          onMouseEnter={() => setHoveredCity(city.name)}
                          onMouseLeave={() => setHoveredCity(null)}
                          onFocus={() => setHoveredCity(city.name)}
                          onBlur={() => setHoveredCity(null)}
                          onClick={() => setActiveCity(city.name)}
                          onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                              event.preventDefault();
                              setActiveCity(city.name);
                            }
                          }}
                        >
                          <circle
                            cx={city.x}
                            cy={city.y}
                            r="15"
                            fill="transparent"
                          />

                          {active && (
                            <circle
                              cx={city.x}
                              cy={city.y}
                              r="9"
                              fill="#04C1CA"
                              opacity="0.18"
                              className="motion-safe:animate-pulse"
                            />
                          )}

                          <circle
                            cx={city.x}
                            cy={city.y}
                            r={active ? 5.5 : 4}
                            fill={active ? "#009CA9" : "#073B68"}
                            stroke={active ? "#04C1CA" : "#FFFFFF"}
                            strokeWidth="2"
                          />

                          <text
                            x={city.x + 9}
                            y={city.y - 8}
                            fontSize="12"
                            fontWeight="650"
                            fill={active ? "#009CA9" : "#073B68"}
                            stroke="#FFFFFF"
                            strokeWidth="3.5"
                            paintOrder="stroke"
                            fontFamily="Arial, sans-serif"
                            className="pointer-events-none"
                          >
                            {city.name}
                          </text>
                        </g>
                      </g>
                    );
                  })}

                  <circle
                    cx={hub.x}
                    cy={hub.y}
                    r="18"
                    fill="#04C1CA"
                    opacity="0.15"
                    className="motion-safe:animate-pulse"
                  />

                  <circle
                    cx={hub.x}
                    cy={hub.y}
                    r="9"
                    fill="#07558F"
                    stroke="white"
                    strokeWidth="3"
                  />

                  <text
                    x={hub.x + 15}
                    y={hub.y + 7}
                    fontSize="15"
                    fontWeight="700"
                    fill="#07558F"
                    stroke="#FFFFFF"
                    strokeWidth="4"
                    paintOrder="stroke"
                    className="pointer-events-none"
                  >
                    Dallas
                  </text>
                </svg>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#EAF1F4] px-4 py-3 sm:px-6">
                <div className="flex items-center gap-2">
                  <span className="bg-primary h-2 w-2 rounded-full" />

                  <span className="text-[11px] font-medium text-[#617987]">
                    Shipping Hub
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="bg-secondary h-2 w-2 rounded-full" />

                  <span className="text-[11px] font-medium text-[#617987]">
                    Destinations
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="border-primary h-px w-5 border-t-2 border-dashed" />

                  <span className="text-[11px] font-medium text-[#617987]">
                    Shipping Routes
                  </span>
                </div>
              </div>
            </div>

            <aside
              aria-label="Shipping information"
              className="flex min-w-0 flex-col rounded-[18px] border border-[#DCE8ED] bg-white p-5 shadow-[0_8px_25px_rgba(7,85,143,0.04)] sm:rounded-[22px] sm:p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-secondary text-[10px] font-bold tracking-[0.14em] uppercase">
                  Shipping Overview
                </span>

                <span className="text-primary flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF7FA]">
                  <Truck size={18} strokeWidth={1.8} />
                </span>
              </div>

              <div className="mt-6">
                <div className="flex items-end gap-3">
                  <span className="font-heading text-primary text-[42px] leading-none font-bold tracking-[-0.06em]">
                    US
                  </span>

                  <span className="pb-1 text-[12px] font-semibold text-[#617987]">
                    Domestic Delivery
                  </span>
                </div>

                <p className="mt-3 text-[12px] leading-6 text-[#718A96]">
                  Explore available shipping information across the United
                  States.
                </p>
              </div>

              <div className="mt-6 border-t border-[#EAF1F4] pt-6">
                <p className="text-[10px] font-bold tracking-[0.12em] text-[#8CA1AB] uppercase">
                  Selected Location
                </p>

                <div className="mt-3 flex items-center gap-2.5">
                  <MapPin
                    size={19}
                    strokeWidth={1.8}
                    className="text-secondary shrink-0"
                  />

                  <h3 className="font-heading text-primary min-w-0 text-[21px] font-bold tracking-[-0.03em]">
                    {selectedCity || currentName}
                  </h3>
                </div>

                <p className="mt-3 text-[12px] leading-6 text-[#718A96]">
                  {selectedCity
                    ? `Illustrative shipping route from Dallas to ${selectedCity}. Actual routes and delivery times depend on the carrier.`
                    : `Explore shipping information for ${currentName}. Availability and delivery estimates are confirmed at checkout.`}
                </p>
              </div>

              <div className="mt-6 space-y-4 border-t border-[#EAF1F4] pt-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[12px] text-[#718A96]">
                    Shipping Service
                  </span>

                  <span className="text-primary text-right text-[12px] font-semibold">
                    Tracked Shipping*
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-[12px] text-[#718A96]">Coverage</span>

                  <span className="text-primary text-right text-[12px] font-semibold">
                    United States
                  </span>
                </div>
              </div>

              {activeCity && (
                <button
                  type="button"
                  onClick={() => setActiveCity(null)}
                  className="text-secondary hover:text-primary mt-6 inline-flex w-fit items-center gap-2 text-[12px] font-semibold transition-colors"
                >
                  Show All Routes
                  <ArrowUpRight size={15} />
                </button>
              )}
            </aside>
          </div>

          <div className="flex items-start gap-3 border-t border-[#DCE8ED] bg-white/75 px-4 py-4 sm:px-6">
            <MapPin
              size={16}
              strokeWidth={1.8}
              className="text-secondary mt-0.5 shrink-0"
            />

            <p className="text-[11px] leading-6 text-[#718A96] sm:text-[12px]">
              This map is for illustration purposes only. Shipping routes are
              not live tracking information. Actual carrier availability,
              routes, and delivery estimates may vary.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .shipping-route {
          animation: shipping-flow 16s linear infinite;
        }

        @keyframes shipping-flow {
          to {
            stroke-dashoffset: -140;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .shipping-route {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
