"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  FileCheck2,
  FileSearch,
  Search,
  FileText,
} from "lucide-react";

import { products } from "@/data/products";
import { coaRecords } from "@/data/coa-records";
import CustomSelect from "../CustomSelect";
import PageHero from "../PageHero";

function CoACard({ product }) {
  const [variantIndex, setVariantIndex] = useState(product.defaultVariant ?? 0);

  const variants = product.variants || [];
  const variant = variants[variantIndex] || variants[0];

  const realRecord =
    coaRecords[`${product.slug}:${variant?.id}`] ||
    coaRecords[variant?.id] ||
    null;

  const sampleNumber = Number(product.id) * 17 + variantIndex * 13;
  const samplePurity = (98.5 + (sampleNumber % 140) / 100).toFixed(2);

  const record = realRecord || {
    demo: true,
    purity: samplePurity,
    lot: `DEMO-${String(product.id).padStart(3, "0")}-${variantIndex + 1}`,
    accession: `SAMPLE-${String(sampleNumber).padStart(6, "0")}`,
    testDate: "Sample record · 2026",
    results: [
      { name: "Identity (LC-MS)", value: product.name, status: "Example" },
      {
        name: "Purity (HPLC-UV)",
        value: `${samplePurity}%`,
        status: "Example",
      },
      { name: "Net content", value: variant?.label, status: "Example" },
      { name: "Microbial (PCR)", value: "Not tested", status: "Sample only" },
      { name: "Laboratory", value: "Demo laboratory", status: "Sample only" },
    ],
  };

  // Always keep the selected strength visible in the two-pill preview.
  const selectedIndex = variants[variantIndex] ? variantIndex : 0;

  // Keep the first strength and the selected strength visible.
  const visibleIndexes =
    variants.length <= 2
      ? variants.map((_, index) => index)
      : selectedIndex > 1
        ? [0, selectedIndex]
        : [0, 1];

  const remainingOptions = variants.flatMap((item, index) =>
    visibleIndexes.includes(index)
      ? []
      : [
          {
            value: String(index),
            label: item.label,
          },
        ],
  );

  const pdfUrl = record?.pdfUrl || "/assets/certificate.pdf";

  return (
    <article className="group hover:border-primary/20 relative flex h-full min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#DCE8ED] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(7,85,143,0.10)] sm:rounded-[26px]">
      <div className="relative aspect-square overflow-hidden bg-[#EAF4F7]">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="text-primary/40 flex h-full items-center justify-center text-xs sm:text-sm">
            Image unavailable
          </div>
        )}

        {record?.demo && (
          <span className="text-primary absolute top-2 left-2 rounded-full bg-white/90 px-2 py-1 text-[8px] font-semibold tracking-wider uppercase shadow-sm sm:top-4 sm:left-4 sm:px-3 sm:text-[10px]">
            Sample COA
          </span>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col px-2.5 pt-3 pb-3 sm:px-5 sm:pt-5 sm:pb-5">
        <h2 className="font-heading text-primary group-hover:text-secondary text-[13px] leading-[1.3] font-semibold tracking-[-0.03em] transition-colors sm:text-[18px]">
          {product.name}
        </h2>

        <div className="mt-3 min-h-[26px] min-w-0 sm:min-h-[32px]">
          {variants.length > 1 && (
            <div
              role="group"
              aria-label={`Select strength for ${product.name}`}
              className="flex min-w-0 flex-nowrap items-center gap-1 sm:gap-2"
            >
              {visibleIndexes.map((index) => {
                const item = variants[index];
                const isSelected = selectedIndex === index;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setVariantIndex(index)}
                    aria-pressed={isSelected}
                    title={item.label}
                    className={`focus-visible:ring-primary/30 inline-flex h-6 shrink-0 items-center justify-center rounded-full border px-1.5 text-[8px] leading-none font-semibold whitespace-nowrap transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:h-[32px] sm:px-3 sm:text-[11px] ${
                      isSelected
                        ? "border-primary bg-primary text-white shadow-sm"
                        : "hover:border-primary hover:text-primary border-[#DCE8ED] bg-[#F7FAFC] text-[#54717C] hover:bg-white"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              {remainingOptions.length > 0 && (
                <div className="relative z-20 shrink-0">
                  <CustomSelect
                    compact
                    openUp
                    value=""
                    placeholder={`+${remainingOptions.length}`}
                    options={remainingOptions}
                    onChange={(event) => {
                      setVariantIndex(Number(event.target.value));
                    }}
                    className="shrink-0"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-auto pt-4 sm:pt-5">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative flex h-9 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[linear-gradient(110deg,var(--color-primary),var(--color-secondary))] px-2 text-sm font-semibold text-white shadow-md transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] sm:h-11 sm:px-4"
          >
            <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,var(--color-primary-dark),var(--color-primary))] opacity-0 transition-opacity duration-500 ease-in-out group-hover/btn:opacity-100" />

            <span className="relative z-10">View COA</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function CoALibrary() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [category, setCategory] = useState("all");
  const catalog = useMemo(
    () =>
      products
        .filter((product) => product.active !== false)
        .flatMap((product) =>
          (product.variants || []).map((variant) => ({
            product,
            variant,
            record: coaRecords[`${product.slug}:${variant.id}`] || null,
          })),
        ),
    [],
  );
  const categories = useMemo(
    () => [
      ...new Set(
        catalog.map(({ product }) => product.category).filter(Boolean),
      ),
    ],
    [catalog],
  );
  const filtered = useMemo(
    () =>
      catalog.filter(({ product, variant, record }) => {
        if (filter === "available" && (record?.demo || !record?.pdfUrl))
          return false;
        if (filter === "pending" && !record?.demo && record?.pdfUrl)
          return false;
        if (category !== "all" && product.category !== category) return false;
        return `${product.name} ${product.slug} ${product.category || ""} ${variant.label} ${record?.lot || ""} ${record?.accession || ""}`
          .toLowerCase()
          .includes(query.trim().toLowerCase());
      }),
    [catalog, query, filter, category],
  );
  const availableCount = catalog.filter(({ record }) =>
    Boolean(record?.pdfUrl && !record?.demo),
  ).length;

  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="Certificates of"
        highlight="Analysis."
        description="Explore available product testing documentation and batch-specific analysis reports."
        features={["Batch Information", "Research Documentation"]}
      />

      <section
        aria-label="Certificate of Analysis library"
        className="relative px-4 py-10 sm:px-6 sm:py-14 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex min-w-0 flex-col gap-3 border-b border-[#EEE6EF] pb-6 sm:flex-row sm:items-center sm:gap-4">
            <div className="relative w-full min-w-0 sm:flex-1 lg:max-w-[390px]">
              <Search
                size={17}
                className="text-primary/60 pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 sm:left-4"
              />
              <label htmlFor="coa-search" className="sr-only">
                Search products or batches
              </label>
              <input
                id="coa-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search compounds..."
                className="focus:border-primary h-11 w-full min-w-0 rounded-2xl border border-[#E8DCEA] bg-white pr-9 pl-9 text-[12px] text-[#29232D] outline-none placeholder:text-[#A69BA9] sm:h-12 sm:pl-11 sm:text-sm [&::-webkit-search-cancel-button]:hidden"
              />
              {query && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setQuery("")}
                  className="text-primary absolute top-1/2 right-2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full hover:bg-[#F6E5F7]"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <CustomSelect
              id="coa-category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              placeholder="Filter category"
              className="w-full sm:w-[190px] sm:shrink-0 lg:ml-auto"
              options={[
                { value: "all", label: "All categories" },
                ...categories.map((name) => ({
                  value: name,
                  label: name,
                })),
              ]}
            />
          </div>
          {filtered.length ? (
            <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Array.from(
                new Map(
                  filtered.map((item) => [item.product.slug, item.product]),
                ).values(),
              ).map((product) => (
                <CoACard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex min-h-64 flex-col items-center justify-center text-center">
              <FileSearch size={33} className="text-primary/30" />
              <h2 className="font-heading text-primary mt-4 text-xl font-bold">
                No matching records
              </h2>
              <p className="mt-2 text-sm text-[#817586]">
                Try another compound, strength, or filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setFilter("all");
                  setCategory("all");
                }}
                className="bg-primary mt-5 rounded-full px-5 py-3 text-xs font-semibold text-white"
              >
                Clear filters
              </button>
            </div>
          )}
          <p className="mt-12 flex items-start gap-2 border-t border-[#EEE6EF] pt-5 text-xs leading-6 text-[#817586]">
            <FileCheck2 size={17} className="text-primary mt-0.5 shrink-0" />
            Sample laboratory values are placeholders for UI testing only, not
            product certificates or evidence of testing. Display verified
            results and PDFs only after receiving actual batch documentation.
            Research use only.
          </p>
        </div>
      </section>
    </main>
  );
}
