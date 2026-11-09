"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, FlaskConical } from "lucide-react";
import { products } from "@/data/products";

// =====================================
// PRODUCT HELPERS
// =====================================

function getDisplayProducts(currentProduct) {
  const availableProducts = products.filter(
    (product) =>
      product.active !== false && product.slug !== currentProduct?.slug,
  );

  if (currentProduct) {
    return availableProducts
      .sort((a, b) => {
        const aMatch = a.category === currentProduct.category ? 1 : 0;

        const bMatch = b.category === currentProduct.category ? 1 : 0;

        return bMatch - aMatch;
      })
      .slice(0, 8);
  }

  const bestsellers = availableProducts.filter((product) =>
    /best.?sell|popular|featured/i.test(product.badge || ""),
  );

  return bestsellers.length
    ? bestsellers.slice(0, 8)
    : availableProducts.slice(0, 8);
}

// =====================================
// PRICE FORMATTER
// =====================================

function formatPrice(price) {
  if (price == null || !Number.isFinite(Number(price))) {
    return null;
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(price));
}

// =====================================
// BESTSELLER PRODUCT CARD
// =====================================

function BestsellerCard({ product }) {
  const variant = product.variants?.[product.defaultVariant ?? 0];

  const price = variant?.price;
  const compareAt = variant?.compareAt;

  const hasPrice = price != null && Number.isFinite(Number(price));

  const hasDiscount =
    hasPrice &&
    compareAt != null &&
    Number.isFinite(Number(compareAt)) &&
    Number(compareAt) > Number(price);

  const discountPercent = hasDiscount
    ? Math.round(
        ((Number(compareAt) - Number(price)) / Number(compareAt)) * 100,
      )
    : 0;

  return (
    <article className="group w-[235px] shrink-0 sm:w-[270px] lg:w-[305px]">
      {/* =========================
          IMAGE CONTAINER
      ========================= */}

      <div className="relative overflow-hidden rounded-[26px] transition-colors duration-500 group-hover:bg-[#E6F3F7] sm:rounded-[30px]">
        <div className="relative aspect-[1/1.12] overflow-hidden rounded-[21px] bg-gradient-to-br from-[#F5FAFC] via-[#EAF5F8] to-[#DCEEF3] sm:rounded-[25px]">
          {/* PRODUCT IMAGE */}

          <Link
            href={`/products/${product.slug}`}
            aria-label={`View ${product.name}`}
            className="relative block h-full w-full"
          >
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 235px, (max-width: 1024px) 270px, 305px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <FlaskConical
                  size={65}
                  strokeWidth={1.1}
                  className="text-primary/25"
                />
              </div>
            )}
          </Link>

          {/* VIEW PRODUCT BUTTON */}

          <Link
            href={`/products/${product.slug}`}
            aria-label={`Explore ${product.name}`}
            className="bg-primary hover:bg-primary-dark absolute right-3 bottom-3 flex h-11 w-11 items-center justify-center rounded-full text-white shadow-[0_8px_20px_rgba(7,85,143,0.18)] transition-all duration-300 group-hover:rotate-45 sm:right-4 sm:bottom-4 sm:h-12 sm:w-12"
          >
            <ArrowUpRight size={21} strokeWidth={1.8} />
          </Link>
        </div>
      </div>

      {/* =========================
          PRODUCT DETAILS
      ========================= */}

      <div className="px-2 pt-5 sm:px-3">
        {/* PRODUCT NAME */}

        <Link href={`/products/${product.slug}`} className="mt-2 block">
          <h3 className="font-heading group-hover:text-primary text-[18px] leading-[1.3] font-semibold tracking-[-0.035em] text-[#102E38] transition-colors duration-300 sm:text-[21px]">
            {product.name}
          </h3>
        </Link>

        {/* PRICE */}

        <div className="mt-2 flex items-center gap-2.5">
          {hasPrice ? (
            <>
              <span className="text-primary font-sans text-[19px] font-semibold tracking-tight sm:text-[21px]">
                {formatPrice(price)}
              </span>

              {hasDiscount && (
                <span className="font-sans text-[13px] text-[#9AABB2] line-through">
                  {formatPrice(compareAt)}
                </span>
              )}
            </>
          ) : (
            <span className="text-muted font-sans text-sm">
              View product details
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

// =====================================
// BESTSELLERS SECTION
// =====================================

export default function Bestsellers({ currentProduct = null }) {
  const displayProducts = getDisplayProducts(currentProduct);

  if (!displayProducts.length) return null;

  const isProductPage = Boolean(currentProduct);

  // Repeat products if collection is too small
  const marqueeProducts =
    displayProducts.length >= 4
      ? displayProducts
      : [...displayProducts, ...displayProducts];

  return (
    <section
      id="bestsellers"
      aria-labelledby="bestsellers-title"
      className="relative overflow-hidden py-12 md:py-16"
    >
      {/* =========================
          SECTION HEADING
      ========================= */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[650px]">
            <h2 id="bestsellers-title" className="section-heading">
              {isProductPage ? (
                <>
                  Explore More{" "}
                  <span className="text-secondary-dark">Peptides.</span>
                </>
              ) : (
                <>
                  Research{" "}
                  <span className="text-secondary-dark">Favorites.</span>
                </>
              )}
            </h2>

            <p className="text-muted text-md mt-4 max-w-[530px] font-sans leading-7">
              {isProductPage
                ? "Discover more research peptides and formulations from our collection."
                : "Explore selected research peptides and blends from the Penguin Peptides collection."}
            </p>
          </div>
        </div>
      </div>

      {/* =========================
          PRODUCT MARQUEE
      ========================= */}

      <div className="relative mx-auto mt-12 max-w-7xl sm:mt-14">
        {/* LEFT FADE */}

        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-20 bg-gradient-to-r from-white to-transparent lg:block" />

        {/* RIGHT FADE */}

        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-20 bg-gradient-to-l from-white to-transparent lg:block" />

        {/* MARQUEE */}

        <div className="bestseller-marquee overflow-hidden">
          <div className="bestseller-track flex w-max items-stretch">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                inert={copy === 1}
                className="flex shrink-0 items-stretch gap-4 pr-4 sm:gap-5 sm:pr-5 lg:gap-6 lg:pr-6"
              >
                {marqueeProducts.map((product, index) => (
                  <BestsellerCard
                    key={`${copy}-${product.id}-${index}`}
                    product={product}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================
          MARQUEE ANIMATION
      ========================= */}

      <style jsx global>{`
        @keyframes penguin-bestseller-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .bestseller-track {
          animation: penguin-bestseller-scroll 45s linear infinite;
          will-change: transform;
        }

        .bestseller-marquee:hover .bestseller-track,
        .bestseller-marquee:focus-within .bestseller-track {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .bestseller-track {
            animation-duration: 32s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bestseller-track {
            animation: none;
            will-change: auto;
          }

          .bestseller-marquee {
            overflow-x: auto;
          }
        }
      `}</style>
    </section>
  );
}
