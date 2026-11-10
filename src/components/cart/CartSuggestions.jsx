"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { products } from "@/data/products";
import { formatCartMoney, useCart } from "@/context/CartContext";

export default function CartSuggestions() {
  const { items, addItem } = useCart();
  const inCart = new Set(items.map((item) => item.productId));
  const suggestions = products
    .filter((product) => product.active !== false && !inCart.has(product.id))
    .slice(0, 4);

  if (!suggestions.length)
    return (
      <p className="text-xs leading-relaxed text-[#8090a4]">
        Your selected research products will appear here.
      </p>
    );

  return (
    <div className="flex flex-col gap-2.5">
      {suggestions.map((product) => {
        const variant =
          product.variants?.[product.defaultVariant] || product.variants?.[0];
        if (!variant) return null;
        const available =
          variant.inStock !== false &&
          (variant.stock == null || variant.stock > 0);
        return (
          <article
            key={product.id}
            className="rounded-2xl border border-[#e3ebf3] bg-white p-2.5"
          >
            <div className="flex items-center gap-2">
              <div className="relative size-12 shrink-0 rounded-xl bg-[#edf5fe]">
                {product.image && (
                  <Image
                    src={product.image}
                    alt=""
                    fill
                    sizes="48px"
                    className="rounded-xl object-cover"
                  />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-bold text-[#0b1b3f]">
                  {product.name}
                </p>
                <p className="text-[10px] text-[#7e91a9]">{variant.label}</p>
                <p className="mt-0.5 text-[11px] font-semibold text-[#0b1b3f]">
                  {formatCartMoney(variant.price)}
                </p>
              </div>
            </div>
            <button
              type="button"
              disabled={!available}
              onClick={() => addItem(product, variant, 1)}
              className="group relative mt-2 flex h-9 w-full items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(110deg,var(--color-primary),var(--color-secondary))] px-4 text-[12px] font-semibold text-white shadow-md transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 sm:h-10"
            >
              <span className="absolute inset-0 bg-[linear-gradient(110deg,var(--color-primary-dark),var(--color-primary))] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-disabled:opacity-0" />

              <span className="relative z-10">
                {available ? "Add to Cart" : "Unavailable"}
              </span>
            </button>
          </article>
        );
      })}
    </div>
  );
}
