"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import QuickView from "./QuickView";

export default function ProductGrid() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Show all active products
  const activeProducts = products.filter((product) => product.active !== false);

  return (
    <section id="shop" className="bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* =========================
            SECTION HEADER
        ========================= */}

        <div className="mb-10 text-center sm:mb-14">
          {/* Heading */}

          <h2 className="section-heading">Explore Collection</h2>

          {/* Description */}

          <p className="text-muted text-md mx-auto mt-5 max-w-2xl font-sans leading-7">
            Discover research peptides and blends in multiple strengths for
            laboratory applications.
          </p>
        </div>

        {/* =========================
            PRODUCT GRID
        ========================= */}

        {activeProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {activeProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        ) : (
          <div className="bg-surface rounded-2xl px-6 py-16 text-center">
            <p className="text-muted font-sans text-sm">
              No products are available at the moment.
            </p>
          </div>
        )}
      </div>

      {/* =========================
          QUICK VIEW MODAL
      ========================= */}

      {quickViewProduct && (
        <QuickView
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </section>
  );
}
