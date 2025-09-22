import { Zap, Target, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  return (
    <section className="py-24 bg-gradient-marble">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Soluções sob medida para cada clínica
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada clínica tem necessidades diferentes. Por isso, a CONCIERA foi desenhada em 3 versões escaláveis — apresentadas em detalhes durante a demonstração personalizada.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 animate-fade-up ${
                plan.highlight 
                  ? 'bg-background shadow-luxury border-2 border-luxury-gold/30' 
                  : 'bg-background/60 hover:bg-background/80 hover:shadow-marble'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-luxury-gold text-background px-4 py-2 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <div className="text-luxury-gold mb-6 flex justify-center">
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
                  className="w-full"
                >
                  Agendar demonstração
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-up [animation-delay:600ms]">
          <Button variant="gold" size="xl">
            Agendar minha demonstração gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlansOverview;