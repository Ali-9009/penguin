"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";

import { products } from "@/data/products";
import ProductCard from "../ProductCard";
import QuickView from "../QuickView";
import CustomSelect from "../CustomSelect";
import Image from "next/image";
import PageHero from "../PageHero";

const catalog = products.filter((product) => product.active !== false);

const getProductPrice = (product) => {
  const price = Number(product.variants?.[product.defaultVariant ?? 0]?.price);

  return Number.isFinite(price) ? price : null;
};

export default function ShopClient({ initialSearch = "" }) {
  const [search, setSearch] = useState(initialSearch);
  const [sort, setSort] = useState("featured");
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // ==========================================
  // SEARCH & SORT
  // ==========================================

  const filteredProducts = useMemo(() => {
    const term = search.trim().toLowerCase();

    const result = catalog.filter((product) => {
      if (!term) return true;

      const searchableText = [
        product.name,
        product.slug,
        product.category,
        product.description,
        ...(product.variants ?? []).map((variant) => variant.label),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(term);
    });

    switch (sort) {
      case "name":
        return result.sort((a, b) => a.name.localeCompare(b.name));

      case "price-low":
        return result.sort(
          (a, b) =>
            (getProductPrice(a) ?? Infinity) - (getProductPrice(b) ?? Infinity),
        );

      case "price-high":
        return result.sort(
          (a, b) =>
            (getProductPrice(b) ?? -Infinity) -
            (getProductPrice(a) ?? -Infinity),
        );

      default:
        return result;
    }
  }, [search, sort]);

  return (
    <main className="min-h-screen">
      <PageHero
        title="A Fresh Approach to"
        highlight="Research."
        description="Explore quality research compounds, thoughtfully presented with clear, accessible information."
      />

      <section
        id="shop-products"
        aria-label="Shop products"
        className="relative px-4 py-10 sm:px-6 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          {/* ==========================================
              SEARCH & SORT
          ========================================== */}

          <div className="flex min-w-0 flex-col gap-3 border-b border-[#E2EDF2] pb-6 sm:flex-row sm:items-center sm:gap-4">
            {/* SEARCH */}

            <div className="relative w-full min-w-0 sm:flex-1 lg:max-w-[390px]">
              <Search
                size={17}
                className="text-primary/60 pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 sm:left-4"
              />

              <label htmlFor="shop-search" className="sr-only">
                Search products
              </label>

              <input
                id="shop-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search products..."
                className="focus:border-primary h-11 w-full min-w-0 rounded-2xl border border-[#DCE8ED] bg-white pr-10 pl-10 text-[12px] text-[#102E38] transition-colors outline-none placeholder:text-[#91A3AB] sm:h-12 sm:pl-11 sm:text-sm [&::-webkit-search-cancel-button]:hidden"
              />

              {/* CLEAR SEARCH */}

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="text-primary absolute top-1/2 right-2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full transition-colors hover:bg-[#E6F9FB]"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* SORT */}

            <CustomSelect
              id="shop-sort"
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              placeholder="Sort products"
              className="w-full sm:w-[190px] sm:shrink-0 lg:ml-auto"
              options={[
                { value: "featured", label: "Featured" },
                { value: "name", label: "Name A–Z" },
                { value: "price-low", label: "Price: Low to High" },
                { value: "price-high", label: "Price: High to Low" },
              ]}
            />
          </div>

          {/* ==========================================
              PRODUCT GRID
          ========================================== */}

          {filteredProducts.length > 0 ? (
            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={setQuickViewProduct}
                />
              ))}
            </div>
          ) : (
            /* ==========================================
                NO PRODUCTS FOUND
            ========================================== */

            <div className="flex min-h-72 flex-col items-center justify-center text-center">
              <Search size={30} className="text-primary/35" />

              <h2 className="font-heading text-primary mt-4 text-xl font-bold">
                No matching products
              </h2>

              <p className="text-muted mt-2 text-sm">
                Try searching for another product or strength.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setSort("featured");
                }}
                className="group relative mt-5 inline-flex items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(110deg,var(--color-primary),var(--color-secondary))] px-6 py-3 text-xs font-semibold text-white shadow-md transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
              >
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,var(--color-primary-dark),var(--color-primary))] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />

                <span className="relative z-10">Clear Search</span>
              </button>
            </div>
          )}

          {/* ==========================================
              RESEARCH DISCLAIMER
          ========================================== */}

          <p className="text-muted mt-12 border-t border-[#E2EDF2] pt-5 text-xs leading-6">
            All products are intended for scientific and laboratory research
            only. Not for human or veterinary use.
          </p>
        </div>
      </section>

      {quickViewProduct && (
        <QuickView
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </main>
  );
}
