import Bestsellers from "@/components/Bestsellers";
import CTASection from "@/components/CTASection";
// import Faqs from "@/components/Faqs";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
// import LabVerification from "@/components/LabVerification";
import ProductGrid from "@/components/ProductGrid";
import USShippingCoverage from "@/components/shipping/USShippingCoverage";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProductGrid />
      <WhyChooseUs />

      <HowItWorks />
      <Bestsellers />

      {/* <Faqs /> */}
      <USShippingCoverage />
      <CTASection />
    </main>
  );
}
