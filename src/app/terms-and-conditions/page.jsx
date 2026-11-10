import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms & Conditions | Spectrum Biosciences",
  description: "Website terms and conditions for Spectrum Biosciences.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [
      "By accessing, browsing, or using this website, you agree to comply with these Terms and Conditions and all applicable laws and regulations. Please review these terms carefully before purchasing products or using any services provided through this website.",
      "If you do not agree with these terms, you should discontinue use of the website.",
    ],
  },
  {
    title: "2. Research Use Only",
    paragraphs: [
      "All research peptides and related compounds offered through this website are intended exclusively for scientific research, laboratory analysis, and educational research purposes.",
      "Products are not intended for human consumption, veterinary use, medical treatment, diagnostic applications, or clinical administration. They are not intended to diagnose, treat, cure, or prevent any disease.",
      "Purchasers are responsible for ensuring that all products are handled and used appropriately within a suitable research environment.",
    ],
  },
  {
    title: "3. Product Information",
    paragraphs: [
      "We aim to provide clear and accurate information regarding product descriptions, specifications, available strengths, pricing, and research-related documentation.",
      "Product information, availability, packaging, and prices may be updated or modified without prior notice. Customers should review all relevant product details before completing a purchase.",
      "Any certificates of analysis or testing documents provided should be reviewed in relation to the specific product and batch they represent.",
    ],
  },
  {
    title: "4. Eligibility to Purchase",
    paragraphs: [
      "By placing an order, you confirm that you are at least 18 years of age, legally permitted to purchase the products in your jurisdiction, and capable of entering into a binding agreement.",
      "Products are intended for individuals or organizations with appropriate knowledge of laboratory research materials and safe handling practices.",
    ],
  },
  {
    title: "5. Orders and Payments",
    paragraphs: [
      "All orders are subject to product availability, payment authorization, and acceptance. Placing an order does not automatically guarantee that the order will be processed or fulfilled.",
      "We reserve the right to refuse, limit, or cancel orders where necessary due to product availability, suspected fraudulent activity, pricing errors, or applicable legal restrictions.",
      "Product prices, shipping charges, applicable taxes, and the final order total will be displayed during checkout before payment confirmation.",
    ],
  },
  {
    title: "6. Shipping and Delivery",
    paragraphs: [
      "Shipping methods, delivery charges, available destinations, and estimated delivery times may vary depending on the order and shipping location.",
      "Delivery estimates are provided for convenience and are not guaranteed. Delays may occur due to carrier operations, weather conditions, customs procedures, or other circumstances beyond reasonable control.",
      "Customers are responsible for providing accurate and complete shipping information when placing an order.",
    ],
  },
  {
    title: "7. Returns, Refunds, and Cancellations",
    paragraphs: [
      "Returns, refunds, order cancellations, and damaged shipment claims are handled according to the Refund Policy published on this website.",
      "Due to the specialized nature of research compounds, certain products may be subject to additional return restrictions where permitted by applicable law.",
      "Customers should review the Refund Policy before completing a purchase.",
    ],
  },
  {
    title: "8. Responsible Product Handling",
    paragraphs: [
      "Purchasers are responsible for the lawful acquisition, storage, transportation, handling, and use of all research materials purchased through this website.",
      "Products should be handled only by individuals with appropriate laboratory training, equipment, and knowledge of relevant safety procedures.",
      "All research activities must comply with applicable laws, regulations, institutional guidelines, and laboratory safety standards.",
    ],
  },
  {
    title: "9. Product Documentation",
    paragraphs: [
      "Product documentation, including certificates of analysis, specifications, and available testing information, may be provided to support research-related purchasing decisions.",
      "Testing documentation applies only to the products and batches specifically identified in the relevant reports.",
      "Any demonstration documents or illustrative testing values must not be interpreted as verified laboratory results.",
    ],
  },
  {
    title: "10. Intellectual Property",
    paragraphs: [
      "All website content, including text, graphics, product images, logos, designs, and other materials, may be protected by copyright, trademark, and other intellectual property laws.",
      "Visitors may access website content for personal informational purposes. Reproduction, distribution, modification, or commercial use of protected materials without appropriate authorization is prohibited.",
    ],
  },
  {
    title: "11. Website Use and Restrictions",
    paragraphs: [
      "Visitors agree to use this website only for lawful purposes and in a manner that does not interfere with its security, functionality, or availability.",
      "Unauthorized access attempts, fraudulent transactions, misuse of website content, and activities that may damage or disrupt website operations are prohibited.",
    ],
  },
  {
    title: "12. Disclaimer of Warranties",
    paragraphs: [
      "Website content and services are provided on an as-available basis. While reasonable efforts may be made to maintain accurate information and reliable functionality, uninterrupted access and complete freedom from errors cannot be guaranteed.",
      "Research-related information provided on this website is intended for general informational purposes and should not be considered medical, clinical, or professional scientific advice.",
      "Any warranties or disclaimers relating to products are subject to applicable law and any express terms provided at the time of purchase.",
    ],
  },
  {
    title: "13. Limitation of Liability",
    paragraphs: [
      "To the extent permitted by applicable law, liability for losses arising from website use, service interruptions, or product-related matters may be limited as described in these terms.",
      "Nothing in these Terms and Conditions excludes or restricts rights, remedies, or liabilities that cannot legally be excluded or limited.",
    ],
  },
  {
    title: "14. Third-Party Services",
    paragraphs: [
      "This website may integrate or provide access to third-party services, including payment processors, shipping providers, and external informational resources.",
      "Third-party services may operate under their own terms and privacy policies. Users are encouraged to review those policies when interacting with external platforms.",
    ],
  },
  {
    title: "15. Privacy and Data Protection",
    paragraphs: [
      "Personal information collected through website interactions, customer accounts, inquiries, and purchases is handled in accordance with the Privacy Policy available on this website.",
      "By using the website, you acknowledge that personal information may be processed as described in the applicable Privacy Policy.",
    ],
  },
  {
    title: "16. Changes to Terms",
    paragraphs: [
      "These Terms and Conditions may be updated periodically to reflect changes in website operations, product offerings, business practices, or applicable legal requirements.",
      "Updated terms will be published on this page. Continued use of the website after changes take effect may constitute acceptance of the revised terms, where permitted by applicable law.",
    ],
  },
  {
    title: "17. Contact Information",
    paragraphs: [
      "If you have questions regarding these Terms and Conditions, product information, order processing, or website policies, please contact our support team through the contact page available on this website.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      description="Please review the conditions governing website access, product purchases, and responsible use of our research collection."
      sections={sections}
    />
  );
}
