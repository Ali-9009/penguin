export const PACK_OPTIONS = [
  { quantity: 5, label: "5–9 Vials", discountPercent: 5 },
  { quantity: 10, label: "10–15 Vials", discountPercent: 10 },
  { quantity: 16, label: "16–20 Vials", discountPercent: 15 },
  { quantity: 21, label: "21+ Vials", discountPercent: 20 },
];

export const getDiscountPercent = (quantity) => {
  if (quantity >= 21) return 20;
  if (quantity >= 16) return 15;
  if (quantity >= 10) return 10;
  if (quantity >= 5) return 5;
  return 0;
};

export const getPackPrice = (
  unitPrice,
  quantity,
  discountPercent = getDiscountPercent(quantity),
) => Math.round(unitPrice * quantity * (1 - discountPercent / 100) * 100) / 100;

export const formatMoney = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
