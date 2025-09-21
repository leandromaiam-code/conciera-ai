import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import heroImage from "@/assets/hero-video-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)] pt-12 lg:pt-16 flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 text-center px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        

        {/* Main Headline */}
        <div className="mb-8 lg:mb-12 animate-fade-up [animation-delay:200ms] opacity-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-luxury-ivory mb-6 lg:mb-8 leading-tight">
            Transforme conversas em receita
          </h1>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-luxury-ivory/90 leading-relaxed max-w-4xl lg:max-w-5xl mx-auto">
            A Conciera é a única concierge humanizada de IA capaz de reconhecer o perfil do seu paciente e se adaptar a ele para gerar conexão e maior conversão
          </p>
        </div>

        {/* CTA + Social Proof */}
        <div className="animate-fade-up [animation-delay:400ms] opacity-0">
          <Button variant="gold" size="lg" className="hover-glow mb-4 lg:mb-6 h-12 lg:h-14 px-6 lg:px-8">
            <Calendar className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
            <span className="text-sm lg:text-base">Agendar demonstração gratuita</span>
          </Button>
          <p className="text-luxury-ivory/70 text-xs sm:text-sm px-4">
            Clínicas de alto padrão já podem aumentar imediatamente a conversão com a CONCIERA.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;