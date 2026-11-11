"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  LoaderCircle,
  ShoppingCart,
  X,
} from "lucide-react";
import { products } from "@/data/products";

import { useCart } from "@/context/CartContext";

function formatPrice(value) {
  if (value == null || !Number.isFinite(Number(value))) {
    return null;
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(value));
}

function getProductVariants(product) {
  if (Array.isArray(product.variants) && product.variants.length) {
    return product.variants.map((variant, index) => ({
      ...variant,
      label:
        variant.strength ||
        variant.size ||
        variant.label ||
        variant.title ||
        variant.name ||
        `Option ${index + 1}`,
    }));
  }

  return [
    {
      id: product.id,
      label: "Standard",
      price: product.price,
      compareAt: product.compareAt,
    },
  ];
}

function ProductCard({ product }) {
  const { addItem } = useCart();

  const variants = getProductVariants(product);
  const hasMultipleVariants = variants.length > 1;

  const defaultIndex =
    Number.isInteger(product.defaultVariant) &&
    product.defaultVariant >= 0 &&
    product.defaultVariant < Math.min(variants.length, 3)
      ? product.defaultVariant
      : 0;

  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const [panelOpen, setPanelOpen] = useState(false);
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);

  const selectedVariant = variants[selectedIndex] || variants[0];

  const price = selectedVariant?.price;
  const compareAt = selectedVariant?.compareAt;

  const hasDiscount =
    price != null &&
    compareAt != null &&
    Number.isFinite(Number(price)) &&
    Number.isFinite(Number(compareAt)) &&
    Number(compareAt) > Number(price);

  const productUrl = `/products/${product.slug}`;

  const handleAddToCart = async () => {
    const inStock =
      selectedVariant?.inStock !== false &&
      (selectedVariant?.stock == null || Number(selectedVariant.stock) > 0);

    const hasPrice =
      selectedVariant?.price != null &&
      Number.isFinite(Number(selectedVariant.price));

    if (adding || !inStock || !hasPrice) return;

    setAdding(true);

    try {
      await addItem(product, selectedVariant, 1);

      setAdded(true);
      setPanelOpen(false);

      window.setTimeout(() => {
        setAdded(false);
      }, 1800);
    } catch (error) {
      console.error("Unable to add product to cart:", error);
    } finally {
      setAdding(false);
    }
  };

  const handlePrimaryAction = () => {
    if (hasMultipleVariants && !panelOpen) {
      setPanelOpen(true);
      return;
    }

    handleAddToCart();
  };

  return (
    <article className="group relative flex h-full min-h-50 min-w-0 flex-col overflow-hidden rounded-[18px] border border-[#DCEAF0] bg-white shadow-[0_5px_20px_rgba(7,85,143,0.045)] sm:min-h-80 sm:rounded-[22px]">
      <Link
        href={productUrl}
        aria-label={`View ${product.name}`}
        className="relative block aspect-[1/1.08] w-full shrink-0 overflow-hidden bg-gradient-to-br from-[#D8EDF5] via-[#EDF8FB] to-[#C4E6EE]"
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <FlaskConical
              size={55}
              strokeWidth={1.2}
              className="text-[#07558F]/30"
            />
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-3 sm:p-4 lg:p-5">
        <Link href={productUrl} className="block">
          <h3 className="font-heading line-clamp-2 text-[15px] leading-[1.3] font-bold tracking-[-0.035em] text-[#102E38] transition-colors duration-300 hover:text-[#07558F] sm:text-[18px]">
            {product.name}
          </h3>
        </Link>

        <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          {formatPrice(price) ? (
            <>
              <span className="font-heading text-[16px] font-bold text-[#07558F] sm:text-[20px]">
                {formatPrice(price)}
              </span>

              {hasDiscount && (
                <span className="text-[11px] text-[#9AADB5] line-through sm:text-[12px]">
                  {formatPrice(compareAt)}
                </span>
              )}
            </>
          ) : (
            <span className="text-[12px] text-[#718792]">View pricing</span>
          )}
        </div>

        {/* <p className="mt-1 text-xs font-medium text-[#009CA9]">
          {hasMultipleVariants
            ? `${variants.length} Strength Options`
            : selectedVariant?.label === "Standard"
              ? "Research Peptide"
              : selectedVariant?.label}
        </p> */}

        {/* <p className="mt-3 line-clamp-2 min-h-[34px] font-sans text-[11px] leading-[1.6] text-[#718792] sm:min-h-[42px] sm:text-[13px]">
          {product.shortDescription ||
            product.description ||
            "Research-focused peptide for laboratory applications."}
        </p> */}

        <div className="mt-auto pt-5">
          <button
            type="button"
            onClick={handlePrimaryAction}
            disabled={adding || selectedVariant?.available === false}
            className="group/btn flex h-10 w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#07558F] to-[#04AEBB] px-2 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(7,85,143,0.14)] transition-all duration-300 hover:from-[#073B68] hover:to-[#07558F] hover:shadow-[0_10px_25px_rgba(7,85,143,0.20)] disabled:cursor-not-allowed disabled:opacity-60 sm:h-11"
          >
            <span>Add to Cart</span>
          </button>
        </div>
      </div>

      <div
        data-open={panelOpen}
        aria-hidden={!panelOpen}
        inert={!panelOpen}
        className="absolute inset-x-0 bottom-0 z-20 flex h-[43%] min-h-70 translate-y-full flex-col rounded-t-[18px] border-t border-[#A8DEE6] bg-white shadow-[0_-12px_35px_rgba(7,85,143,0.13)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] data-[open=true]:translate-y-0 sm:h-[42%] sm:rounded-t-[22px]"
      >
        <div className="mx-auto mt-2 h-1 w-9 shrink-0 rounded-full bg-[#D4E7EC]" />

        <div className="flex min-h-0 flex-1 flex-col px-3 pt-2 pb-3 sm:px-4 sm:pb-4">
          <div className="mb-2 flex shrink-0 items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <h4 className="font-heading text-[10px] font-semibold tracking-[0.07em] text-[#07558F] uppercase sm:text-[11px]">
                Select Strength
              </h4>
            </div>

            <button
              type="button"
              aria-label="Close strength selection"
              onClick={() => setPanelOpen(false)}
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EFF7F9] text-[#07558F] transition-colors hover:bg-[#D8F1F5]"
            >
              <X size={14} />
            </button>
          </div>

          <div
            role="group"
            aria-label={`Choose strength for ${product.name}`}
            className="flex min-h-0 flex-col gap-1.5"
          >
            {variants.slice(0, 3).map((variant, index) => {
              const isSelected = selectedIndex === index;
              const isUnavailable = variant.available === false;

              const variantDiscount =
                variant.compareAt != null &&
                Number(variant.compareAt) > Number(variant.price);

              return (
                <button
                  key={variant.id ?? index}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  disabled={isUnavailable}
                  aria-pressed={isSelected}
                  className={`flex min-h-[32px] w-full shrink-0 items-center justify-between gap-1.5 rounded-lg border px-2 py-1 text-left transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-40 sm:min-h-[35px] sm:px-3 ${
                    isSelected
                      ? "border-[#04C1CA] bg-gradient-to-r from-[#07558F] to-[#04AEBB] text-white shadow-[0_4px_12px_rgba(7,85,143,0.12)]"
                      : "border-[#DCEAF0] bg-white text-[#073B68] hover:border-[#8CDCE5] hover:bg-[#F3FBFC]"
                  }`}
                >
                  <span className="font-heading min-w-0 truncate text-[10px] font-bold sm:text-[12px]">
                    {variant.label}
                  </span>

                  <span className="flex shrink-0 items-center gap-1.5">
                    {variantDiscount && (
                      <span
                        className={`text-[8px] line-through sm:text-[9px] ${
                          isSelected ? "text-white/65" : "text-[#A2B4BD]"
                        }`}
                      >
                        {formatPrice(variant.compareAt)}
                      </span>
                    )}

                    <span className="text-[10px] font-bold sm:text-[12px]">
                      {formatPrice(variant.price) || "View price"}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {variants.length > 3 && (
            <Link
              href={productUrl}
              className="mt-1.5 inline-flex shrink-0 items-center justify-center gap-1 text-[10px] font-semibold text-[#07558F] transition-colors hover:text-[#009CA9]"
            >
              View All {variants.length} Strengths
              <ChevronRight size={13} />
            </Link>
          )}

          <div className="mt-auto shrink-0 pt-2">
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={adding || selectedVariant?.available === false}
              className="flex h-9 w-full items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#07558F] to-[#04AEBB] px-2 text-[10px] font-semibold text-white shadow-[0_5px_15px_rgba(7,85,143,0.17)] transition-all duration-300 hover:from-[#073B68] hover:to-[#07558F] disabled:cursor-not-allowed disabled:opacity-60 sm:h-10 sm:gap-2 sm:text-[12px]"
            >
              <span>{adding ? "Adding..." : "Add to Cart"}</span>

              {!adding && formatPrice(price) && (
                <span className="border-l border-white/30 pl-1.5 sm:pl-2">
                  {formatPrice(price)}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CardSlider({ currentProduct = null }) {
  const sortedProducts = useMemo(() => {
    const displayProducts = products.filter(
      (product) =>
        product.active !== false && product.slug !== currentProduct?.slug,
    );

    return currentProduct
      ? [...displayProducts].sort((a, b) => {
          const aMatch = a.category === currentProduct.category ? 1 : 0;

          const bMatch = b.category === currentProduct.category ? 1 : 0;

          return bMatch - aMatch;
        })
      : displayProducts;
  }, [currentProduct?.slug, currentProduct?.category]);

  const sliderProducts = useMemo(() => {
    if (!sortedProducts.length) return [];

    return Array.from({ length: 4 }, (_, repeatIndex) =>
      sortedProducts.map((product) => ({
        ...product,
        sliderKey: `${product.id ?? product.slug}-${repeatIndex}`,
      })),
    ).flat();
  }, [sortedProducts]);

  if (!sortedProducts.length) return null;

  return (
    <section
      id="bestsellers"
      aria-labelledby="bestsellers-title"
      className="relative overflow-hidden py-12 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-8 max-w-[700px] text-center md:mb-12">
          <h2 id="bestsellers-title" className="section-heading">
            Explore Our <span className="text-secondary-dark">Products.</span>
          </h2>
        </header>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 1800,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            waitForTransition: true,
          }}
          allowTouchMove={true}
          simulateTouch={true}
          grabCursor={true}
          slidesPerView={2}
          slidesPerGroup={1}
          spaceBetween={10}
          watchOverflow={false}
          observer={true}
          observeParents={true}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 12 },
            640: { slidesPerView: 3, spaceBetween: 16 },
            768: { slidesPerView: 4, spaceBetween: 18 },
            1024: { slidesPerView: 5, spaceBetween: 18 },
            1280: { slidesPerView: 6, spaceBetween: 20 },
            1440: { slidesPerView: 7, spaceBetween: 20 },
          }}
          className="!overflow-hidden"
          aria-label="Research peptide product slider"
        >
          {sliderProducts.map((product) => (
            <SwiperSlide key={product.sliderKey} className="!h-auto">
              <div className="h-full">
                <ProductCard product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
