import { TrendingUp, Calendar, BarChart3, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver, useStaggeredAnimation } from "@/hooks/useIntersectionObserver";

const MainBenefits = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Mais pacientes e faturamento",
      description: "Atendimento imediato, humanizado e personalizado. Converte, agenda e recebe pagamento no mesmo fluxo."
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Menos faltas (no-show)",
      description: "Confirmações ativas, lembretes automáticos e opção de sinal antecipado."
    },,
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Gestão Inteligente",
      description: "Relatórios claros com insights valiosos para expandir sua clínica.."
    },
    {
      icon: <Gem className="w-12 h-12" />,
      title: "Excelência de Atendimento",
      description: "Maior nível de serviço a seus clientes, com tempos de resposta até 10x mais rápidos, padrão Premium."
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Atendimento Personalizado",
      description: "Abordagem conversacional hipercustomizada ao perfil comportamental de cada cliente."
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Fidelização de Clientes",
      description: "Mais fidelização (recorrência) pelo acompanhamento periódico do paciente."
    }
  ];

  const { ref: headerRef, isInView: headerInView } = useIntersectionObserver();
  const { ref: benefitsRef, visibleItems } = useStaggeredAnimation(benefits, 200);

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">
            <span className="text-luxury-gold">A Conciera entrega para sua Clínica</span>
          </h2>
        </div>

        
        {/* Benefits Grid */}
        <div ref={benefitsRef} className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`text-center p-8 rounded-3xl glass hover:shadow-depth transition-all duration-500 hover-3d ${
                visibleItems.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-luxury-gold mb-6 flex justify-center animate-glow-pulse">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Secondary CTA */}
        <div 
          ref={headerRef}
          className={`text-center transition-all duration-700 delay-600 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button variant="outline_gold" size="lg" className="hover-magnetic mx-6 sm:mx-0">
            Quero ver como funciona
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MainBenefits;