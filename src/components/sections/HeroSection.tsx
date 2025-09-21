import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-video-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Luxury clinic environment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
        {/* Logo/Brand */}
        <div className="mb-8 animate-fade-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-luxury-ivory mb-4">
            CONCIERA<span className="text-luxury-gold">™</span>
          </h1>
        </div>

        {/* Main Headline */}
        <div className="mb-8 animate-fade-up [animation-delay:200ms] opacity-0">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-luxury-ivory/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Concierge de IA para Clínicas Premium
          </h2>
          <p className="text-lg md:text-xl text-luxury-gold font-medium leading-relaxed">
            Transforme atendimento em receita, 24/7
          </p>
        </div>

        {/* Single CTA */}
        <div className="animate-fade-up [animation-delay:400ms] opacity-0">
          <Button variant="gold" size="xl" className="hover-glow">
            <Play className="mr-2 h-5 w-5" />
            Ver Demonstração
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;