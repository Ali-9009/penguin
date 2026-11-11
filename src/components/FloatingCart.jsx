"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function FloatingCart() {
  const { openCart, itemCount, hydrated } = useCart();

  const cartCount = hydrated ? itemCount : 0;

  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={`Open shopping cart, ${cartCount} items`}
      title="View Cart"
      className="group fixed right-5 bottom-5 z-1 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[linear-gradient(135deg,#063B68_0%,#07558F_55%,#009CA9_100%)] text-white shadow-[0_8px_28px_rgba(7,85,143,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(7,85,143,0.4)] active:scale-95 sm:right-7 sm:bottom-7"
    >
      <ShoppingBag
        size={24}
        strokeWidth={1.8}
        className="transition-transform duration-300 group-hover:-translate-y-0.5"
      />

      {cartCount > 0 && (
        <span className="bg-secondary absolute -top-1 -right-1 flex h-[20px] min-w-[20px] items-center justify-center rounded-full border-2 border-white px-1 font-sans text-[10px] font-bold text-white">
          {cartCount > 99 ? "99+" : cartCount}
        </span>
      )}
    </button>
  );
}
