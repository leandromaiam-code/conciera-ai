import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MainBenefits from "@/components/sections/MainBenefits";
import Differentials from "@/components/sections/Differentials";
import HowItWorks from "@/components/sections/HowItWorks";
import Results from "@/components/sections/Results";
import PlansOverview from "@/components/sections/PlansOverview";
import Authority from "@/components/sections/Authority";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import PainSolution from "@/components/sections/PainSolution";
import ValueProposition from "@/components/sections/ValueProposition";
import SocialProof from "@/components/sections/SocialProof";
import FixedCTA from "@/components/FixedCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MainBenefits />
        <Differentials />
        <HowItWorks />
        <Results />
        <PainSolution />
        <ValueProposition />
        <SocialProof />
        <Authority />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FixedCTA />
    </div>
  );
};

export default Index;
