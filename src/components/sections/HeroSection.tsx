import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import heroImage from "@/assets/hero-video-bg.jpg";
import { useTheme } from "@/contexts/ThemeContext";

const HeroSection = () => {
  const { theme } = useTheme();
  
  return (
    <section className={theme === 'light' ? 
      "relative min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)] pt-8 lg:pt-16 flex items-center justify-center overflow-hidden bg-background" : 
      "relative min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)] pt-8 lg:pt-16 flex items-center justify-center overflow-hidden"
    }>
      {/* Background Image with Overlay */}
      {theme !== 'light' && (
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Luxury clinic environment" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        

        {/* Main Headline */}
        <div className="mb-8 lg:mb-12 animate-fade-up [animation-delay:200ms] opacity-0">
          <h1 className={theme === 'light' ? 
            "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-foreground mb-6 lg:mb-8 leading-[1.1]" :
            "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-luxury-ivory mb-6 lg:mb-8 leading-[1.1]"
          }>
            Transforme conversas em receita
          </h1>
          <p className={theme === 'light' ?
            "text-lg sm:text-lg lg:text-xl xl:text-2xl text-foreground/90 leading-relaxed max-w-4xl lg:max-w-5xl mx-auto" :
            "text-lg sm:text-lg lg:text-xl xl:text-2xl text-luxury-ivory/90 leading-relaxed max-w-4xl lg:max-w-5xl mx-auto"
          }>
            A Conciera é a única concierge humanizada de IA capaz de reconhecer o perfil do seu paciente e se adaptar a ele para gerar conexão, qualificar os leads e agendar consultas 24/07.
          </p>
        </div>

        {/* CTA + Social Proof */}
        <div className="animate-fade-up [animation-delay:400ms] opacity-0">
          <Button variant="gold" size="xl" className="hover-glow animate-breathe mb-4 lg:mb-6 h-14 lg:h-16 px-8 lg:px-12 text-base lg:text-lg font-semibold mx-4 sm:mx-0">
            <Calendar className="mr-2 h-5 w-5 lg:h-6 lg:w-6" />
            <span>Garantir Minha Demonstração Gratuita</span>
          </Button>
          <p className={theme === 'light' ?
            "text-foreground/70 text-sm sm:text-base px-4 mb-2" :
            "text-luxury-ivory/70 text-sm sm:text-base px-4 mb-2"
          }>
            <span className="text-luxury-gold font-semibold">+ de 150 clínicas</span> de alto padrão já aumentaram sua conversão
          </p>
          <p className={theme === 'light' ?
            "text-foreground/60 text-xs sm:text-sm px-4" :
            "text-luxury-ivory/60 text-xs sm:text-sm px-4"
          }>
            ⚡ Demonstração gratuita • 🚀 Sem compromisso • ⏰ Vagas limitadas para este mês
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;