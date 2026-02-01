import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CompanyIntroSection } from "@/components/home/CompanyIntroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section - Manufacturing plant visual with positioning */}
        <HeroSection />
        {/* Company Introduction - Manufacturing-focused paragraph */}
        <CompanyIntroSection />
        {/* Trust Indicators - Stats counter */}
        <StatsSection />
        {/* Product Discovery - Grid with links to detail pages */}
        <ProductsSection />
        {/* Industries We Serve */}
        <IndustriesSection />
        {/* Why Buy From Us - Quality, Technology, Delivery */}
        <WhyChooseUsSection />
        {/* Footer CTA */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
