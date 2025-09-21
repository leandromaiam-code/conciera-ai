import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Shield, Zap, Clock } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const FinalCTA = () => {
  const { ref: ctaRef, isInView: ctaInView } = useIntersectionObserver();
  const { ref: trustRef, isInView: trustInView } = useIntersectionObserver();

  const trustElements = [
    { icon: <Shield className="w-4 h-4" />, text: "LGPD Certificado" },
    { icon: <Zap className="w-4 h-4" />, text: "Resultados Garantidos" },
    { icon: <Clock className="w-4 h-4" />, text: "Suporte Premium 24/7" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-luxury-gold/5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main CTA */}
        <div 
          ref={ctaRef}
          className={`transition-all duration-700 ${
            ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 leading-tight">
            Pronto(a) para transformar o seu atendimento em 
            <span className="text-gradient"> receita previsível</span>?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Demonstração personalizada de 15 minutos. <strong className="text-luxury-gold">Gratuita</strong>. <strong className="text-luxury-gold">Sem compromisso</strong>. Resultados visíveis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button variant="gold" size="xl" className="hover-glow animate-breathe hover-magnetic">
              <Calendar className="mr-2 h-5 w-5" />
              Garantir Minha Demonstração Premium
            </Button>
            
            <Button variant="outline_gold" size="xl" className="hover-lift">
              Ver Planos e Investimento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust Elements */}
          <div 
            ref={trustRef}
            className={`flex flex-wrap justify-center items-center gap-6 mb-8 transition-all duration-500 delay-300 ${
              trustInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {trustElements.map((element, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 text-muted-foreground"
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <div className="text-luxury-gold">
                  {element.icon}
                </div>
                <span className="text-sm font-medium">{element.text}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-luxury-gold font-semibold mb-6">
            ⚡ Últimas vagas para demonstrações deste mês • 🏆 Preferência para clínicas premium
          </p>
        </div>
        
        {/* Enhanced Contact Form */}
        <div className={`max-w-md mx-auto transition-all duration-700 delay-500 ${
          ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-sm text-muted-foreground mb-4">
            Ou deixe seu contato para retorno prioritário em <strong className="text-luxury-gold">até 2 horas</strong>
          </p>
          <div className="glass rounded-xl p-6 shadow-luxury border border-luxury-gold/20">
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Nome completo"
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 transition-all duration-300 hover:border-luxury-gold/30"
              />
              <input 
                type="text" 
                placeholder="WhatsApp (com DDD)"
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 transition-all duration-300 hover:border-luxury-gold/30"
              />
              <input 
                type="text" 
                placeholder="Nome da clínica"
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 transition-all duration-300 hover:border-luxury-gold/30"
              />
              <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 transition-all duration-300 hover:border-luxury-gold/30">
                <option value="">Tipo de clínica</option>
                <option value="estetica">Estética</option>
                <option value="plastica">Cirurgia Plástica</option>
                <option value="dermatologia">Dermatologia</option>
                <option value="odontologia">Odontologia</option>
                <option value="outros">Outros</option>
              </select>
              <Button variant="gold" className="w-full hover-magnetic">
                Solicitar Contato Prioritário
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;