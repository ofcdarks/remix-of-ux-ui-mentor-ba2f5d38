import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PillarsSection from "@/components/landing/PillarsSection";
import ModulesSection from "@/components/landing/ModulesSection";
import AboutSection from "@/components/landing/AboutSection";
import BonusSection from "@/components/landing/BonusSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import FooterSection from "@/components/landing/FooterSection";
import StickyHeader from "@/components/landing/StickyHeader";
import PurchaseNotifications from "@/components/landing/PurchaseNotifications";
import ChatWidget from "@/components/landing/ChatWidget";

const Index = () => {
  return (
    <>
      <StickyHeader />
      <PurchaseNotifications />
      <ChatWidget />
      <main className="scroll-snap-container">
        <HeroSection />
        <ProblemSection />
        <TestimonialsSection />
        <PillarsSection />
        <ModulesSection />
        <AboutSection />
        <BonusSection />
        <PricingSection />
        <FAQSection />
        <FooterSection />
      </main>
    </>
  );
};

export default Index;
