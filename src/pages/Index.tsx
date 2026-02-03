import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CostOfDelay from "@/components/sections/CostOfDelay";
import MainBenefits from "@/components/sections/MainBenefits";
import Differentials from "@/components/sections/Differentials";
import HowItWorks from "@/components/sections/HowItWorks";
import Results from "@/components/sections/Results";
import PlansSection from "@/components/sections/PlansSection";
import Authority from "@/components/sections/Authority";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import ValueProposition from "@/components/sections/ValueProposition";
import SocialProof from "@/components/sections/SocialProof";
import FixedCTA from "@/components/FixedCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CostOfDelay />
        <MainBenefits />
        <Differentials />
        <ValueProposition />
        <HowItWorks />
        <Results />
        <Authority />
        <PlansSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FixedCTA />
    </div>
  );
};

export default Index;
