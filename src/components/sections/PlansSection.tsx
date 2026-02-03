import { Check, Crown, Zap, Star, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";

const PlansSection = () => {
  // Dados vindos do system_stripe_plans (Supabase)
  const plansData = [
    {
      id: "951bfd04-20ae-404f-a10d-4ed0758326d6",
      name: "Essential",
      subtitle: "Atendimento que converte",
      price: "1.497", // Formatado manualmente do integer 1497
      iconName: "Star",
      stripe_price_id: "price_1SpUmi4JxgJFNDzLx52NTcuB",
      features: [
        "Atendente Inteligente 24/7 integrada ao WhatsApp",
        "Agendamento automático",
        "Confirmação de pagamento (com apoio humano)",
        "Dashboard com indicadores de perfomance"
      ],
      highlight: false,
      exclusive: false,
      cta_text: "Selecionar Plano"
    },
    {
      id: "92b90887-d32f-4586-bfba-fc97d24b467b",
      name: "Pro",
      subtitle: "Sistema de Receita Recorrente",
      price: "2.497", // Formatado
      iconName: "Crown",
      stripe_price_id: "price_1SpUpH4JxgJFNDzLOllkwsH1",
      features: [
        "Tudo da versão Essential +",
        "Integração com Instagram",
        "Acompanhamento e lembrete pré-consulta",
        "Análise comportamental para aumentar conversão"
      ],
      highlight: true,
      exclusive: false,
      cta_text: "Selecionar Plano"
    },
    {
      id: "fac44998-754e-4be4-8753-42d6d5a7903c",
      name: "Prime",
      subtitle: "Plataforma Estratégica Premium",
      price: "3.497", // Formatado
      iconName: "Gem",
      stripe_price_id: "price_1SpUob4JxgJFNDzL9KXVFQHM",
      features: [
        "Tudo da versão Pro +",
        "Geração de recomendações personalizados",
        "Integrações com TypeForms e Site",
        "Suporte Prioritário",
        "Personalizações On-demand"
      ],
      highlight: false,
      exclusive: true,
      cta_text: "Selecionar Plano"
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "Star": return <Star className="w-8 h-8" />;
      case "Crown": return <Crown className="w-8 h-8" />;
      case "Gem": return <Gem className="w-8 h-8" />;
      default: return <Zap className="w-8 h-8" />;
    }
  };

  return (
    <section id="plans" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Planos & Investimento
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha a estratégia ideal para o momento da sua clínica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plansData.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-8 transition-all duration-500 hover:transform hover:-translate-y-2 group
                ${plan.highlight 
                  ? 'bg-gradient-to-b from-luxury-gold/10 to-transparent border-2 border-luxury-gold shadow-2xl shadow-luxury-gold/10 scale-105 lg:scale-110 z-20' 
                  : 'bg-card border border-border/50 hover:border-luxury-gold/50 shadow-lg hover:shadow-xl'
                }
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-luxury-gold text-white px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg flex items-center gap-2">
                    <Crown className="w-4 h-4" /> Mais Popular
                  </span>
                </div>
              )}

              {plan.exclusive && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                   <span className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg flex items-center gap-2">
                    <Gem className="w-4 h-4" /> Exclusivo
                  </span>
                </div>
              )}

              <div className="mb-8 text-center relative">
                <div className={`inline-flex p-4 rounded-full mb-6 transition-colors duration-500 group-hover:scale-110
                  ${plan.highlight ? 'bg-luxury-gold/20 text-luxury-gold' : 'bg-primary/10 text-primary'}`}>
                  {getIcon(plan.iconName)}
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground min-h-[40px]">{plan.subtitle}</p>
              </div>

              <div className="text-center mb-8 pb-8 border-b border-border/50">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-muted-foreground align-top mt-2">R$</span>
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-left">
                    <Check className={`w-5 h-5 mr-3 shrink-0 mt-0.5 ${plan.highlight ? 'text-luxury-gold' : 'text-primary'}`} />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full h-12 text-base font-semibold transition-all duration-300
                  ${plan.highlight 
                    ? 'bg-luxury-gold hover:bg-luxury-gold/90 text-white shadow-lg hover:shadow-luxury-gold/50 hover:scale-[1.02]' 
                    : 'bg-primary hover:bg-primary/90 text-white'
                  }`}
                onClick={() => window.location.href = "https://app.conciera.com.br/briefing-inicial"}
              >
                {plan.cta_text}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
