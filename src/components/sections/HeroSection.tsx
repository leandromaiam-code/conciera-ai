import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const HeroSection = () => {
  const { theme } = useTheme();
  
  return (
    <section className={theme === 'light' ? 
      "relative min-h-screen lg:min-h-[calc(100vh-4rem)] pt-24 sm:pt-28 lg:pt-32 flex items-center justify-center overflow-hidden bg-background" : 
      "relative min-h-screen lg:min-h-[calc(100vh-4rem)] pt-24 sm:pt-28 lg:pt-32 flex items-center justify-center overflow-hidden bg-background"
    }>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Main Headline */}
        <div className="mb-8 lg:mb-12 animate-fade-up [animation-delay:200ms] opacity-0 w-full">
          <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mb-6 lg:mb-8 leading-tight">
            Transforme <strong className="text-luxury-gold">atendimento em receita,</strong> com a excelência da sua marca, 24/7.
          </h1>
          <p className="text-lg sm:text-lg lg:text-xl xl:text-2xl text-foreground/90 leading-relaxed max-w-4xl lg:max-w-5xl mx-auto mb-10">
            Somos a única concierge humanizada de IA capaz de reconhecer o perfil do seu paciente e se adaptar a ele para gerar empatia, conexão e maior conversão.
          </p>
          
          {/* YouTube Video */}
          <div className="w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl border border-border/50">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/_vAsOhvp4qs?si=w7gXz6s1I_k9S0iI" 
              title="Apresentação Conciera" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* CTA + Social Proof */}
        <div className="animate-fade-up [animation-delay:400ms] opacity-0 mt-8">
          <Button 
            variant="gold" 
            size="lg" 
            className="hover-glow h-12 lg:h-14 px-6 lg:px-8 mx-4 sm:mx-0"
            onClick={() => window.location.href = '#plans'}
          >
            <Calendar className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
            <span className="text-sm lg:text-base">Agendar demonstração</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
