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
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-luxury-ivory mb-6 leading-tight">
            Elevando a comunicação a um patamar onde a conversão 
            <br className="hidden lg:block" />
            <span className="text-luxury-gold"> se torna inevitável</span>
          </h2>
          <p className="text-lg md:text-xl text-luxury-ivory/80 leading-relaxed">
            pela junção de IA, Estratégia e Arte
          </p>
        </div>

        {/* Subtitle */}
        <div className="mb-12 animate-fade-up [animation-delay:400ms] opacity-0">
          <p className="text-lg md:text-xl text-luxury-ivory/90 max-w-4xl mx-auto leading-relaxed">
            Acolhe, qualifica, agenda, recebe e acompanha o pré e o pós procedimento 
            de forma individualizada e com precisão cirúrgica — tudo alinhado ao 
            <span className="text-luxury-gold font-semibold"> branding e posicionamento da sua clínica</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up [animation-delay:600ms] opacity-0">
          <Button variant="gold" size="xl" className="hover-glow">
            Descubra como funciona agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button variant="outline_gold" size="xl" className="hover-lift">
            <Play className="mr-2 h-5 w-5" />
            Ver demonstração
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-luxury-gold/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-luxury-gold rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;