import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import CommunitySection from "@/components/landing/CommunitySection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import SubscriptionSection from "@/components/landing/SubscriptionSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <BenefitsSection />
        <CommunitySection />
        <CTASection />
        <SubscriptionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
