// =====================================
// PENGUIN PEPTIDES PRODUCT DATA
// =====================================

// Helper to generate product variants with prices
const createVariants = (slug, variants) =>
  variants.map(([dosage, price, compareAt]) => ({
    id: `${slug}-${dosage.toLowerCase()}`,
    label: dosage,
    price,
    compareAt,
    inStock: true,
  }));

export const products = [
  // =====================================
  // 1. PP-1 CAG
  // =====================================
  {
    id: "1",
    slug: "pp-1-cag",
    name: "PP-1 Cag",
    category: "Research Peptides",
    description:
      "PP-1 Cag research peptide supplied for controlled laboratory investigation and scientific analysis.",
    image: "/products/pp-1cag.webp",
    badge: "Featured",

    variants: createVariants("pp-1-cag", [
      ["5mg", 49, 65],
      ["10mg", 79, 99],
    ]),

    defaultVariant: 0,
  },

  // =====================================
  // 2. PP-1SM
  // =====================================
  {
    id: "2",
    slug: "pp-1sm",
    name: "PP-1SM",
    category: "Research Peptides",
    description:
      "PP-1SM research peptide available in multiple concentrations for laboratory research applications.",
    image: "/products/pp-1sm.webp",
    badge: "Popular",

    variants: createVariants("pp-1sm", [
      ["5mg", 45, 59],
      ["10mg", 69, 89],
      ["20mg", 109, 139],
      ["30mg", 149, 189],
    ]),

    defaultVariant: 0,
  },

  // =====================================
  // 3. PP-1 CAG + PP-1SM
  // =====================================
  {
    id: "3",
    slug: "pp-1-cag-pp-1sm",
    name: "PP-1 Cag + PP-1SM",
    category: "Research Blends",
    description:
      "Combined PP-1 Cag and PP-1SM research formulation intended for controlled laboratory investigation.",
    image: "/products/pp-1cag-pp-1sm.webp",
    badge: null,

    variants: createVariants("pp-1-cag-pp-1sm", [["5mg", 89, 115]]),

    defaultVariant: 0,
  },

  // =====================================
  // 4. PP-1TZ
  // =====================================
  {
    id: "4",
    slug: "pp-1tz",
    name: "PP-1TZ",
    category: "Research Peptides",
    description:
      "PP-1TZ research peptide supplied in a wide range of dosage options for scientific and analytical laboratory applications.",
    image: "/products/pp-1tz.webp",
    badge: "Popular",

    variants: createVariants("pp-1tz", [
      ["5mg", 39, 49],
      ["10mg", 59, 75],
      ["15mg", 79, 99],
      ["20mg", 99, 125],
      ["30mg", 129, 159],
      ["40mg", 159, 199],
      ["50mg", 189, 235],
      ["60mg", 219, 275],
      ["70mg", 249, 309],
      ["80mg", 279, 349],
      ["90mg", 309, 389],
      ["100mg", 339, 425],
      ["120mg", 399, 499],
      ["200mg", 599, 749],
    ]),

    defaultVariant: 0,
  },

  // =====================================
  // 5. PP-3RT
  // =====================================
  {
    id: "5",
    slug: "pp-3rt",
    name: "PP-3RT",
    category: "Research Peptides",
    description:
      "PP-3RT research peptide available in multiple concentrations for controlled laboratory research.",
    image: "/products/pp-3rt.webp",
    badge: "Featured",

    variants: createVariants("pp-3rt", [
      ["40mg", 129, 159],
      ["50mg", 159, 199],
      ["60mg", 189, 239],
      ["100mg", 299, 375],
    ]),

    defaultVariant: 0,
  },

  // =====================================
  // 6. PP-3RT + 1CAG
  // =====================================
  {
    id: "6",
    slug: "pp-3rt-1cag",
    name: "PP-3RT + 1Cag",
    category: "Research Blends",
    description:
      "PP-3RT and 1Cag combined research formulation supplied in multiple concentrations for controlled laboratory investigation.",
    image: "/products/pp-3rt-1cag.webp",
    badge: null,

    variants: createVariants("pp-3rt-1cag", [
      ["12.5mg", 119, 149],
      ["25mg", 189, 239],
      ["37.5mg", 259, 329],
    ]),

    defaultVariant: 0,
  },

  // =====================================
  // 7. PP-3RT + CAG
  // =====================================
  {
    id: "7",
    slug: "pp-3rt-cag",
    name: "PP-3RT + Cag",
    category: "Research Blends",
    description:
      "PP-3RT and Cag combined research formulation available in multiple concentrations for scientific laboratory applications.",
    image: "/products/pp-3rt-cag.webp",
    badge: null,

    variants: createVariants("pp-3rt-cag", [
      ["12.5mg", 109, 139],
      ["25mg", 179, 225],
      ["37.5mg", 249, 315],
    ]),

    defaultVariant: 0,
  },
];

// =====================================
// PRODUCT HELPERS
// =====================================

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug);

export const getFeaturedProducts = () =>
  products.filter((product) => product.badge === "Featured");
