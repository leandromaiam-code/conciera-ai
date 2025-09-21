import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
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
        

        {/* Main Headline */}
        <div className="mb-12 animate-fade-up [animation-delay:200ms] opacity-0">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-luxury-ivory mb-8 leading-tight">
            O concierge de IA humanizado que transforma leads em pacientes e pacientes em receita
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-luxury-ivory/90 leading-relaxed max-w-5xl mx-auto">
            Acolhe, qualifica, agenda, recebe e acompanha cada paciente antes e depois do procedimento — 24/7, via WhatsApp, Instagram, site e telefone — em uma linguagem natural e alinhada ao seu branding.
          </p>
        </div>

        {/* CTA + Social Proof */}
        <div className="animate-fade-up [animation-delay:400ms] opacity-0">
          <Button variant="gold" size="xl" className="hover-glow mb-6">
            <Calendar className="mr-2 h-5 w-5" />
            Agendar demonstração gratuita
          </Button>
          <p className="text-luxury-ivory/70 text-sm">
            Clínicas de alto padrão já aumentaram conversão e reduziram faltas com a CONCIERA.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;