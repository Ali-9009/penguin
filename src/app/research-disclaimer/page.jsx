import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Research Disclaimer | Spectrum Biosciences",
  description: "Research use information and product limitations.",
};

const sections = [
  {
    title: "1. Research Use Only",
    paragraphs: [
      "All research peptides and related compounds offered through this website are intended exclusively for scientific investigation, laboratory analysis, and controlled research applications.",
      "These products are not intended for human consumption, veterinary use, medical treatment, clinical administration, or any form of personal use.",
      "Products should only be purchased and handled by individuals or organizations with appropriate knowledge, training, and laboratory facilities.",
    ],
  },
  {
    title: "2. Not for Human or Veterinary Use",
    paragraphs: [
      "Research compounds available on this website are not represented as medicines, dietary supplements, food products, or cosmetic treatments.",
      "These products are not intended to diagnose, treat, cure, or prevent any disease or medical condition.",
      "No information presented on this website should be interpreted as medical advice, treatment guidance, or a recommendation for human or animal administration.",
    ],
  },
  {
    title: "3. No Dosing or Administration Guidance",
    paragraphs: [
      "This website does not provide human or veterinary dosing recommendations, injection instructions, administration protocols, reconstitution instructions for personal use, or therapeutic treatment guidance.",
      "Any product information provided is intended solely to support legitimate laboratory research and scientific understanding.",
    ],
  },
  {
    title: "4. Laboratory Safety and Handling",
    paragraphs: [
      "Research peptides and laboratory compounds should be handled using appropriate scientific procedures, suitable laboratory equipment, and established safety protocols.",
      "Researchers are responsible for maintaining safe working environments and following applicable institutional and regulatory requirements.",
    ],
    items: [
      "Follow available product-specific storage and handling instructions.",
      "Use appropriate personal protective equipment and laboratory safety controls.",
      "Maintain suitable temperature, humidity, and environmental conditions.",
      "Prevent contamination through proper storage and handling procedures.",
      "Maintain accurate records of product identification, batch numbers, and research activities.",
      "Follow applicable laboratory safety standards and institutional procedures.",
    ],
  },
  {
    title: "5. Scientific and Educational Information",
    paragraphs: [
      "Scientific references, research articles, product descriptions, and experimental information available on this website are provided for general educational and informational purposes.",
      "References to published studies or experimental findings do not establish the safety, effectiveness, or regulatory approval of any product for human or veterinary use.",
      "Research findings may vary depending on experimental conditions, methodologies, and the materials used.",
    ],
  },
  {
    title: "6. Product Testing and Documentation",
    paragraphs: [
      "Where available, product documentation may include certificates of analysis, laboratory testing reports, analytical specifications, and batch identification information.",
      "Analytical results should be interpreted only in relation to the specific product and batch identified in the corresponding documentation.",
      "Results associated with one batch should not automatically be considered representative of other batches.",
      "Demonstration certificates, example reports, and illustrative testing values must not be treated as verified laboratory results.",
    ],
  },
  {
    title: "7. Purchaser Eligibility and Responsibility",
    paragraphs: [
      "Purchasers are responsible for ensuring that they are legally permitted to acquire, possess, transport, store, and use research peptides and related laboratory compounds within their jurisdiction.",
      "By purchasing products through this website, customers acknowledge that the materials are intended exclusively for legitimate scientific and laboratory research.",
      "Purchasers are responsible for ensuring that research activities comply with applicable laws, regulations, institutional policies, and laboratory safety requirements.",
    ],
  },
  {
    title: "8. Product Storage and Integrity",
    paragraphs: [
      "Research compounds may require specific storage and handling conditions to preserve their chemical stability and material integrity.",
      "Customers should consult available product documentation and follow appropriate laboratory storage procedures.",
      "Improper storage, environmental exposure, contamination, or handling may affect the condition and suitability of research materials.",
    ],
  },
  {
    title: "9. No Medical Claims",
    paragraphs: [
      "Information presented on this website does not constitute a claim that any product is approved, safe, or effective for medical, therapeutic, diagnostic, cosmetic, or veterinary applications.",
      "Product names, scientific descriptions, and references to biological mechanisms are provided for research identification and informational purposes only.",
      "Nothing on this website should be interpreted as an endorsement or recommendation of personal use.",
    ],
  },
  {
    title: "10. Regulatory Compliance",
    paragraphs: [
      "The legal and regulatory status of research peptides and related compounds may vary by product, jurisdiction, and intended application.",
      "Customers and researchers are responsible for understanding and complying with all applicable laws, regulations, import restrictions, and institutional requirements.",
      "The availability of a product on this website does not establish that its purchase, possession, or use is permitted in every location.",
    ],
  },
  {
    title: "11. Limitation of Information",
    paragraphs: [
      "We aim to present clear and useful research-related product information. However, scientific information may evolve as new research and analytical findings become available.",
      "Website content should not replace independent scientific evaluation, appropriate laboratory procedures, or professional regulatory guidance.",
    ],
  },
  {
    title: "12. Contact and Product Inquiries",
    paragraphs: [
      "For questions regarding research product specifications, available testing documentation, batch information, or general laboratory-related inquiries, please contact our support team through the contact page on this website.",
      "Customer support does not provide medical advice, personal dosing instructions, or recommendations for human or veterinary use.",
    ],
  },
];

export default function ResearchDisclaimerPage() {
  return (
    <LegalPage
      title="Research Disclaimer"
      description="Important information concerning the intended purpose, handling, and limitations of research compounds."
      sections={sections}
    />
  );
}
