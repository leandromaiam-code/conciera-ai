import { Check, Crown, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const PlansSection = () => {
  const plans = [
    {
      name: "Light",
      subtitle: "Atendimento que converte",
      icon: <Zap className="w-8 h-8" />,
      description: "Muito mais que um chatbot, a nova era da concierge digital com IA especializada",
      features: [
        "Atendente Inteligente 24/7",
        "Relatórios básicos",
        "Proteção LGPD"
      ],
      highlight: false
    },
    {
      name: "Core",
      subtitle: "Sistema de Receita Recorrente",
      icon: <Zap className="w-8 h-8" />,
      description: "Muito mais que um chatbot, inaugura a nova era do concierge digital via IA",
      features: [
        "Atendente Inteligente 24/7",
        "Orquestração multi-canal",
        "Agendamento + Pagamento integrado",
        "Confirmações automáticas",
        "Relatórios por canal e etapa do funil",
        "Painel da Equipe",
        "Relatórios básicos",
        "Proteção LGPD"
      ],
      highlight: false
    },
    {
      name: "Pro", 
      subtitle: "Sistema de Receita Recorrente + Estratégia individualizada",
      icon: <Star className="w-8 h-8" />,
      description: "Todos os benefícios do Core + orientação estratégica baseada em análise comportamental",
      features: [
        "Tudo da versão Core +",
        
        "Recomendações de vendas para comercial",
        "Acompanhamento pré, durante e pós",
        "Registro de orientações e lembretes",
        "Check-ins personalizados",
        "Pesquisa de satisfação",
        "Agendamentos conectados à jornada",
      ],
      highlight: true
    },
    {
      name: "Ultra",
      subtitle: "Plataforma de Jornada Completa", 
      icon: <Crown className="w-8 h-8" />,
      description: "Acompanhamento 360° individualizado - disponível apenas para clínicas elegíveis",
      features: [
        "Tudo da versão Pro +",
        
        "Método ARCHETIPSE®
        "Análise de tendência comportamental"
        "Inteligência de Conversão (Aplicação DISC)",
      ],
      highlight: false,
      exclusive: true
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Solução elegante e escalável
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Começamos simples (Light/Core), evoluímos para jornada do cliente completa (Pro) 
            e chegamos à total alinhamento estratégico para geração de receita (Ultra)
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 animate-fade-up ${
                plan.highlight 
                  ? 'bg-gradient-gold text-primary shadow-gold border-2 border-luxury-gold' 
                  : 'bg-gradient-marble hover:shadow-luxury border border-border/20'
              }`}
              style={{ animationDelay: `${index * 150 + 200}ms` }}
            >
              
              {/* Popular Badge */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-luxury-ivory px-6 py-2 rounded-full text-sm font-semibold">
                  Mais Popular
                </div>
              )}

              {/* Exclusive Badge */}
              {plan.exclusive && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-luxury-gold text-primary px-6 py-2 rounded-full text-sm font-semibold">
                  Clínicas Elegíveis
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex p-3 rounded-2xl mb-4 ${
                  plan.highlight ? 'bg-primary/10' : 'bg-luxury-gold/10'
                }`}>
                  <div className={plan.highlight ? 'text-primary' : 'text-luxury-gold'}>
                    {plan.icon}
                  </div>
                </div>
                
                <h3 className="text-3xl font-serif font-bold mb-2">
                  {plan.name}
                </h3>
                <p className={`text-lg font-semibold mb-3 ${
                  plan.highlight ? 'text-primary' : 'text-luxury-gold'
                }`}>
                  {plan.subtitle}
                </p>
                <p className={`text-sm leading-relaxed ${
                  plan.highlight ? 'text-primary/80' : 'text-muted-foreground'
                }`}>
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.highlight ? 'text-primary' : 'text-luxury-gold'
                    }`} />
                    <span className={`text-sm ${
                      plan.highlight ? 'text-primary' : 'text-muted-foreground'
                    }`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button 
                variant={plan.highlight ? "hero" : "outline_gold"} 
                size="lg" 
                className="w-full hover-glow mx-6 sm:mx-0"
              >
                {plan.exclusive ? "Solicitar Elegibilidade" : "Solicitar Proposta"}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-up [animation-delay:600ms]">
          <p className="text-muted-foreground mb-6">
            Demonstração de 15 minutos • Sem custo • Resultados garantidos
          </p>
          <Button variant="gold" size="xl" className="hover-glow mx-6 sm:mx-0">
            Agendar Demonstração Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;