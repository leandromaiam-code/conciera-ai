import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import SocialProof from "@/components/sections/SocialProof";
import PainSolution from "@/components/sections/PainSolution";
import HowItWorks from "@/components/sections/HowItWorks";
import FinalCTA from "@/components/sections/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SocialProof />
        <PainSolution />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
