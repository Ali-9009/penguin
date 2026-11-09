"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Eye, FlaskConical } from "lucide-react";
import { useCart } from "@/context/CartContext";

const MAX_VISIBLE_VARIANTS = 2;

const formatPrice = (price) => {
  if (price == null || !Number.isFinite(Number(price))) {
    return null;
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(price));
};

export default function ProductCard({ product, onQuickView }) {
  const [selectedVariant, setSelectedVariant] = useState(
    product.defaultVariant ?? 0,
  );

  const [adding, setAdding] = useState(false);
  const [error, setError] = useState("");

  const { addItem } = useCart();

  const variants = product.variants ?? [];
  const variant = variants[selectedVariant];

  const inStock =
    variant?.inStock !== false &&
    (variant?.stock == null || Number(variant.stock) > 0);

  const hasPrice =
    variant?.price != null && Number.isFinite(Number(variant.price));

  const canAdd = Boolean(variant && inStock && hasPrice);

  // Always include selected dosage in the visible list.
  const visibleIndices = Array.from(
    { length: Math.min(MAX_VISIBLE_VARIANTS, variants.length) },
    (_, index) => index,
  );

  if (
    selectedVariant >= MAX_VISIBLE_VARIANTS &&
    visibleIndices.length === MAX_VISIBLE_VARIANTS
  ) {
    visibleIndices[MAX_VISIBLE_VARIANTS - 1] = selectedVariant;
  }

  const hiddenCount = Math.max(0, variants.length - MAX_VISIBLE_VARIANTS);

  const handleAddToCart = () => {
    if (!canAdd || adding) return;

    try {
      setAdding(true);
      setError("");

      addItem(product, variant, 1);
    } catch (err) {
      setError(err.message || "Unable to add to cart.");
    } finally {
      setAdding(false);
    }
  };

  return (
    <article className="product-glow-card group relative isolate flex h-full min-w-0 flex-col overflow-hidden rounded-[22px] p-[3px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(7,85,143,0.12)] sm:rounded-[26px]">
      {/* ALWAYS RUNNING GRADIENT BORDER */}
      <div
        aria-hidden="true"
        className="product-glow-border pointer-events-none absolute inset-0 rounded-[inherit]"
      />

      {/* CARD CONTENT */}
      <div className="relative z-10 flex h-full min-w-0 flex-col rounded-[19px] bg-white p-1.5 sm:rounded-[23px] sm:p-2.5">
        <div className="relative aspect-square overflow-hidden rounded-[18px] bg-[#EAF4F7] sm:rounded-[22px]">
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
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <FlaskConical
                  size={44}
                  className="text-primary/30"
                  strokeWidth={1.2}
                />
              </div>
            )}
          </Link>

          {/* QUICK VIEW */}

          <button
            type="button"
            onClick={() => onQuickView?.(product)}
            aria-label={`Quick view ${product.name}`}
            className="text-primary hover:bg-primary absolute top-2 right-2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition-all hover:scale-105 hover:text-white sm:top-3 sm:right-3 sm:h-9 sm:w-9"
          >
            <Eye size={17} strokeWidth={1.8} />
          </button>
        </div>

        {/* =========================
      PRODUCT INFO
  ========================= */}

        <div className="flex min-w-0 flex-1 flex-col px-1 pt-3 pb-1.5 sm:px-1.5 sm:pt-4">
          {/* TITLE */}

          <Link href={`/products/${product.slug}`} className="block">
            <h3 className="font-heading group-hover:text-primary text-md min-h-[42px] leading-[1.3] font-semibold tracking-[-0.03em] text-[#102E38] transition-colors">
              {product.name}
            </h3>
          </Link>

          {/* VARIANT SELECTOR */}

          <div className="min-h-[30px]">
            {variants.length > 1 ? (
              <div className="flex flex-nowrap items-center gap-1.5">
                {visibleIndices.map((index) => {
                  const item = variants[index];
                  const selected = selectedVariant === index;

                  const unavailable =
                    item.inStock === false ||
                    (item.stock != null && Number(item.stock) < 1);

                  return (
                    <button
                      key={item.id}
                      type="button"
                      disabled={unavailable}
                      onClick={() => {
                        setSelectedVariant(index);
                        setError("");
                      }}
                      aria-pressed={selected}
                      title={item.label}
                      className={`inline-flex h-6 shrink-0 items-center justify-center rounded-full border px-2 text-[8px] leading-none font-semibold whitespace-nowrap transition-all duration-200 sm:h-[32px] sm:px-3 sm:text-[11px] ${
                        selected
                          ? "border-primary bg-primary text-white shadow-sm"
                          : "hover:border-primary hover:text-primary border-[#DCE8ED] bg-[#F7FAFC] text-[#54717C] hover:bg-white"
                      } ${unavailable ? "cursor-not-allowed opacity-40" : ""}`}
                    >
                      {item.label}
                    </button>
                  );
                })}

                {/* MORE VARIANTS */}

                {hiddenCount > 0 && (
                  <button
                    type="button"
                    onClick={() => onQuickView?.(product)}
                    aria-label={`View ${hiddenCount} more variants of ${product.name}`}
                    className="text-primary hover:border-primary hover:bg-accent inline-flex h-[29px] shrink-0 items-center justify-center rounded-full border border-[#C8E4EB] bg-[#EAF7FA] px-2.5 text-[10px] leading-none font-semibold whitespace-nowrap transition-all duration-200 sm:h-[32px] sm:px-3 sm:text-[11px]"
                  >
                    +{hiddenCount} more
                  </button>
                )}
              </div>
            ) : (
              <span className="inline-flex h-[29px] items-center rounded-full border border-[#DCE8ED] bg-[#F3F8FA] px-3 text-[10px] font-semibold text-[#54717C] sm:h-[32px] sm:text-[11px]">
                {variant?.label ?? "Standard"}
              </span>
            )}
          </div>

          {/* =========================
        PRICE
    ========================= */}

          <div className="mt-auto pt-3">
            <div className="flex min-h-[42px] flex-wrap items-center gap-x-2 gap-y-0.5 border-t border-[#EDF2F4] pt-3">
              <span className="font-sans text-[16px] font-bold text-[#102E38] sm:text-[19px]">
                {hasPrice ? formatPrice(variant.price) : "Price pending"}
              </span>

              {hasPrice &&
                variant.compareAt != null &&
                Number(variant.compareAt) > Number(variant.price) && (
                  <span className="text-[11px] text-[#91A3AB] line-through sm:text-xs">
                    {formatPrice(variant.compareAt)}
                  </span>
                )}
            </div>

            {/* ERROR */}

            {error && (
              <p role="alert" className="mt-2 text-[11px] text-red-600">
                {error}
              </p>
            )}

            {/* =========================
          ADD TO CART BUTTON
      ========================= */}

            <button
              type="button"
              onClick={handleAddToCart}
              disabled={!canAdd || adding}
              aria-label={`Add ${product.name} to cart`}
              className="bg-primary hover:bg-primary-dark mt-3 flex h-10 w-full items-center justify-center gap-2 rounded-full px-2 text-[11px] font-semibold text-white transition-all duration-300 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 sm:h-11 sm:text-[13px]"
            >
              {adding ? (
                <>
                  <span
                    className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
                    aria-hidden="true"
                  />
                  Adding...
                </>
              ) : !inStock ? (
                "Out of Stock"
              ) : !hasPrice ? (
                "Unavailable"
              ) : (
                <>
                  <Plus size={16} strokeWidth={2} />
                  Add to Cart
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
