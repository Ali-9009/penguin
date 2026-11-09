import Bestsellers from "@/components/Bestsellers";
import CTASection from "@/components/CTASection";
import Faqs from "@/components/Faqs";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ProductGrid from "@/components/ProductGrid";
import ResearchShowcase from "@/components/ResearchShowcase";
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
      <ResearchShowcase />
      <Faqs />
      <USShippingCoverage />
      <CTASection />
    </main>
  );
}
