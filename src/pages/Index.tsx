import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ValueProposition from "@/components/sections/ValueProposition";
import PainSolution from "@/components/sections/PainSolution";
import HowItWorks from "@/components/sections/HowItWorks";
import PlansSection from "@/components/sections/PlansSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <PainSolution />
        <HowItWorks />
        <PlansSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
