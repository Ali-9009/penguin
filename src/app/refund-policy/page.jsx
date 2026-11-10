import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Refund Policy | Spectrum Biosciences",
  description: "Refund and return information for Spectrum Biosciences.",
};

const sections = [
  {
    title: "1. Policy Overview",
    paragraphs: [
      "We are committed to providing a reliable shopping experience and addressing customer concerns regarding orders, returns, cancellations, and refunds.",
      "This Refund and Return Policy explains how requests are handled for research peptides and related laboratory products. Eligibility may depend on product condition, order status, and applicable consumer protection laws.",
    ],
  },
  {
    title: "2. Order Cancellations",
    paragraphs: [
      "If you need to cancel an order, please contact our customer support team as soon as possible and provide your order number.",
      "Cancellation requests may be accommodated before an order has been processed or shipped. Once an order has entered the shipping process, cancellation may no longer be possible.",
      "If an order cannot be canceled, any available return or refund options will be determined according to this policy.",
    ],
  },
  {
    title: "3. Return Eligibility",
    paragraphs: [
      "Due to the specialized nature of research peptides and laboratory compounds, returns may be subject to additional restrictions to protect product integrity, quality, and safety.",
      "Customers should contact our support team before initiating a return. Return requests will be reviewed based on product condition, packaging, order details, and applicable legal requirements.",
    ],
    items: [
      "Products should remain unused and in their original condition.",
      "Original packaging, labels, and seals should remain intact where applicable.",
      "Customers may be required to provide proof of purchase or an order number.",
      "Returns must be authorized by customer support before items are shipped back.",
      "Certain products may be ineligible for return due to handling, storage, or product integrity considerations, except where required by law.",
    ],
  },
  {
    title: "4. Damaged, Defective, or Incorrect Products",
    paragraphs: [
      "If you receive a damaged, defective, incomplete, or incorrect product, please contact our support team promptly after delivery.",
      "To help us review the issue efficiently, provide your order number, a description of the problem, and clear photographs of the product and packaging when available.",
      "After reviewing the request, an appropriate resolution may include a replacement, refund, or other remedy, depending on the circumstances and applicable consumer protection laws.",
    ],
  },
  {
    title: "5. Non-Returnable Products",
    paragraphs: [
      "Certain research materials may not be eligible for return once opened, used, improperly stored, or otherwise compromised.",
      "Return restrictions may apply to products with broken seals, altered packaging, missing identification labels, or conditions that prevent verification of product integrity.",
      "These restrictions do not affect any statutory rights or remedies available to customers under applicable law.",
    ],
  },
  {
    title: "6. Refund Requests",
    paragraphs: [
      "Refund requests are evaluated based on the circumstances of the order, the reason for the request, product condition, and applicable legal requirements.",
      "If a refund is approved, it will generally be issued through the original payment method used during checkout.",
      "Processing times may vary depending on the payment provider, financial institution, and payment method. Additional time may be required before the refunded amount appears in your account.",
    ],
  },
  {
    title: "7. Exchanges and Replacements",
    paragraphs: [
      "Exchanges or replacements may be considered when an incorrect, damaged, or defective product has been delivered.",
      "All replacement requests are subject to review and product availability. If a replacement is unavailable, an alternative resolution may be offered in accordance with applicable law.",
      "Customers should not return or dispose of affected products until they receive instructions from customer support.",
    ],
  },
  {
    title: "8. Shipping and Return Costs",
    paragraphs: [
      "Original shipping charges and return shipping costs may be refundable depending on the reason for the return, the outcome of the request, and applicable consumer protection laws.",
      "Where a return is approved, our support team will provide instructions regarding the return process and any applicable shipping responsibilities.",
      "Customers should not send products to a return address without receiving authorization.",
    ],
  },
  {
    title: "9. Lost or Missing Shipments",
    paragraphs: [
      "If an order has not arrived within the expected delivery period, please contact our support team with your order number and relevant tracking information.",
      "We may review shipping records and coordinate with the delivery provider to investigate the shipment status.",
      "Any available refund, replacement, or other resolution will depend on the circumstances of the shipment and applicable legal requirements.",
    ],
  },
  {
    title: "10. Research Product Handling",
    paragraphs: [
      "Research peptides and laboratory compounds require appropriate storage, handling, and environmental conditions to maintain product integrity.",
      "Products should be handled according to the available product information and appropriate laboratory procedures.",
      "Damage or deterioration resulting from improper handling or storage after delivery may affect eligibility for a voluntary return or refund, without limiting rights provided by applicable law.",
    ],
  },
  {
    title: "11. Refund Processing",
    paragraphs: [
      "Once a refund request has been reviewed and approved, customers will be notified of the outcome through the contact information associated with their order.",
      "Approved refunds are generally returned to the original payment method. The time required for funds to become available depends on the payment processor and financial institution.",
      "If you have not received an approved refund, please contact your payment provider or our customer support team for assistance.",
    ],
  },
  {
    title: "12. Changes to This Policy",
    paragraphs: [
      "We may update this Refund and Return Policy periodically to reflect changes in our business operations, fulfillment processes, product offerings, or applicable legal requirements.",
      "Any updates will be published on this page. Customers are encouraged to review the policy before placing an order.",
    ],
  },
  {
    title: "13. Contact Customer Support",
    paragraphs: [
      "If you have questions about cancellations, damaged products, returns, replacements, or refunds, please contact our customer support team through the contact page available on this website.",
      "When submitting a request, include your order number, contact information, and a brief description of the issue to help us assist you efficiently.",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      description="Information about order cancellations, damaged shipments, returns, and refund requests."
      sections={sections}
    />
  );
}