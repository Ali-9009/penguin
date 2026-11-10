import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy | Spectrum Biosciences",
  description: "Privacy information for Spectrum Biosciences.",
};

const sections = [
  {
    title: "1. Introduction",
    paragraphs: [
      "We value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how information is collected, used, stored, and protected when you visit our website, browse research products, or place an order.",
    ],
  },
  {
    title: "2. Information We Collect",
    paragraphs: [
      "We may collect certain information when you interact with our website, create an account, make a purchase, or contact our support team.",
    ],
    items: [
      "Personal information such as your name, email address, and phone number.",
      "Billing addresses, shipping addresses, and order details.",
      "Payment-related information processed through secure third-party payment providers.",
      "Account information, preferences, and purchase history.",
      "Messages, inquiries, and communications submitted through our website.",
      "Technical information, including IP address, browser type, device information, and website usage data.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    paragraphs: [
      "The information collected may be used to process and fulfill orders, provide customer support, respond to inquiries, manage customer accounts, improve website functionality, prevent unauthorized transactions, and comply with applicable legal requirements.",
      "Where permitted by law and based on your preferences, we may also use contact information to share updates about research products, new arrivals, and promotional offers.",
    ],
  },
  {
    title: "4. Information Sharing",
    paragraphs: [
      "We do not sell personal information to third parties. Information may be shared with trusted service providers when necessary to operate our website and deliver services.",
    ],
    items: [
      "Payment processing providers for secure transactions.",
      "Shipping and logistics providers for order fulfillment.",
      "Website hosting and technical service providers.",
      "Customer support and communication platforms.",
      "Government or regulatory authorities when required by applicable law.",
    ],
  },
  {
    title: "5. Cookies and Website Analytics",
    paragraphs: [
      "Our website may use cookies and similar technologies to maintain essential website functionality, remember preferences, support shopping cart features, and understand how visitors interact with our website.",
      "You can manage or disable cookies through your browser settings. Certain website features may not function correctly when essential cookies are disabled.",
    ],
  },
  {
    title: "6. Data Security",
    paragraphs: [
      "We take reasonable technical and organizational measures to help protect personal information against unauthorized access, loss, misuse, or disclosure.",
      "Although we work to maintain a secure online environment, no method of electronic transmission or storage can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "7. Data Retention",
    paragraphs: [
      "Personal information is retained only for as long as reasonably necessary to fulfill the purposes described in this policy, maintain business records, resolve disputes, and comply with applicable legal obligations.",
      "When information is no longer required, reasonable steps may be taken to securely delete or anonymize it.",
    ],
  },
  {
    title: "8. Third-Party Services",
    paragraphs: [
      "Our website may contain links to external websites or integrate third-party services, including payment processors, shipping providers, and analytics platforms.",
      "These third parties may operate under their own privacy policies. We encourage visitors to review those policies before sharing personal information.",
    ],
  },
  {
    title: "9. Your Privacy Rights",
    paragraphs: [
      "Depending on your location and applicable privacy laws, you may have certain rights regarding your personal information, including requesting access, correction, deletion, or restrictions on its processing.",
      "To submit a privacy-related request or ask questions about your information, please contact us through the contact page on our website.",
    ],
  },
  {
    title: "10. Research Product Information",
    paragraphs: [
      "Our website provides information about products intended for laboratory research and scientific applications. Information submitted in connection with product inquiries, purchases, or research-related communications may be processed for customer service, order management, and compliance purposes.",
      "Research-related inquiries are handled in accordance with this Privacy Policy and applicable legal requirements.",
    ],
  },
  {
    title: "11. Children's Privacy",
    paragraphs: [
      "Our website and research products are not intended for children. We do not knowingly collect personal information from individuals under the age of 18.",
      "If we become aware that personal information has been collected from a child, we will take appropriate steps to address the situation in accordance with applicable law.",
    ],
  },
  {
    title: "12. Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy periodically to reflect changes in our services, website operations, legal requirements, or privacy practices.",
      "Any updates will be published on this page. We encourage visitors to review this policy occasionally to stay informed about how their information is handled.",
    ],
  },
  {
    title: "13. Contact Us",
    paragraphs: [
      "If you have questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact our support team through the contact page available on our website.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="Learn how personal information may be collected, used, and protected when interacting with Spectrum Biosciences."
      sections={sections}
    />
  );
}
