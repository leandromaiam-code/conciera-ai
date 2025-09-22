import { Zap, Target, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver, useStaggeredAnimation } from "@/hooks/useIntersectionObserver";

const PlansOverview = () => {
  const plans = [
    {
      icon: <Zap className="w-8 h-8" />,
      name: "Core",
      subtitle: "Atendimento que converte",
      description: "Atendente inteligente 24/7 + agendamento e pagamento no mesmo fluxo.",
      highlight: false
    },
    {
      icon: <Target className="w-8 h-8" />,
      name: "Pro", 
      subtitle: "Atendimento + Estratégia individualizada",
      description: "Tudo do Core + PersonaMap (ARCHETIPSE®️ + DISC) + relatórios avançados.",
      highlight: true
    },
    {
      icon: <Crown className="w-8 h-8" />,
      name: "Ultra",
      subtitle: "Plataforma de Jornada 360°",
      description: "Tudo do Pro + acompanhamento pré, durante e pós procedimento.",
      highlight: false
    }
  ];

  const { ref: headerRef, isInView: headerInView } = useIntersectionObserver();
  const { ref: plansRef, visibleItems } = useStaggeredAnimation(plans, 200);

  return (
    <section className="py-16 lg:py-20 bg-gradient-marble">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Soluções sob medida para cada clínica
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Cada clínica tem necessidades diferentes. Por isso, a CONCIERA foi desenhada em 3 versões escaláveis.
          </p>
          <p className="text-sm text-luxury-gold font-semibold">
            ⚡ Vagas limitadas para demonstrações personalizadas neste mês
          </p>
        </div>

        {/* Plans Grid */}
        <div ref={plansRef} className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl transition-all duration-500 hover-3d ${
                plan.highlight 
                  ? 'bg-background shadow-glow-gold border-2 border-luxury-gold/30 animate-breathe' 
                  : 'glass hover:shadow-depth'
              } ${
                visibleItems.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-glow-pulse">
                  <span className="bg-luxury-gold text-background px-6 py-2 rounded-full text-sm font-semibold shadow-gold">
                    🏆 Mais Popular
                  </span>
                </div>
              )}
              
              <div className="text-luxury-gold mb-6 flex justify-center animate-glow-pulse">
                {plan.icon}
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-primary mb-2 text-center">
                {plan.name}
              </h3>
              
              <h4 className="text-luxury-gold font-medium text-center mb-6">
                {plan.subtitle}
              </h4>
              
              <p className="text-muted-foreground leading-relaxed text-center mb-8">
                {plan.description}
              </p>
              
              <div className="text-center">
                <Button 
                  variant={plan.highlight ? "gold" : "outline_gold"}
                  size="lg" 
                  className={`w-full ${plan.highlight ? 'animate-magnetic' : 'hover-magnetic'}`}
                >
                  {plan.highlight ? 'Garantir Demonstração' : 'Ver Demonstração'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-700 delay-600 ${
          headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Button variant="gold" size="xl" className="hover-magnetic mx-6 sm:mx-0">
            Agendar minha demonstração gratuita
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            💎 Apresentação personalizada para clínicas premium • 🎯 Análise gratuita do seu negócio
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlansOverview;