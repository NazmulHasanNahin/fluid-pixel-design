import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import AboutStats from "@/components/AboutStats";
import ServicesSection from "@/components/ServicesSection";
import CTABanner from "@/components/CTABanner";
import PortfolioSection from "@/components/PortfolioSection";
import TeamSection from "@/components/TeamSection";

import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <LogoMarquee />
        <ServicesSection />
        <AboutStats />
        <CTABanner />
        <PortfolioSection />
        <TeamSection />
        
        <PricingSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;