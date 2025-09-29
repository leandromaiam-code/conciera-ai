import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Crown, Zap, Star, Gem } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Planos = () => {
  const plans = [
     {
      name: "Light",
      subtitle: "Atendimento que converte",
      icon: Zap,
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
      price: "Sob consulta",
      icon: Star,
      description: "Concierge digital 24/7 com agendamento e pagamento integrados",
      features: [
        "Atendente Inteligente 24/7",
        "Orquestração multi-canal (WhatsApp, Instagram, Site, Telefone)",
        "Integração com agenda e pagamentos",
        "Agendamento e pagamento no mesmo fluxo",
        "Confirmações automáticas pré-consulta",
        "Painel da Equipe",
        "Relatórios de conversão e receita",
        "Proteção de Dados (LGPD)"
      ],
      highlight: false,
      cta: "Solicitar Proposta"
    },
    {
      name: "Pro",
      subtitle: "Sistema de Receita Recorrente + Jornada Completa",
      price: "Sob consulta",
      icon: Crown,
      description: "Tudo do Core + orientação estratégica com MÉTODO ARCHETIPSE®",
      features: [
        "Tudo da versão Core",
        "Recomendações de vendas para comercial",
        "Acompanhamento pré, durante e pós",
        "Registro de orientações e lembretes",
        "Check-ins personalizados",
        "Agendamentos conectados à jornada"
      ],
      highlight: true,
      cta: "Mais Procurado"
    },
    {
      name: "Prime",
      subtitle: "Plataforma Estratégica Premium",
      price: "Sob consulta",
      icon: Gem,
      description: "Tudo do Pro + acompanhamento 360° individualizado",
      features: [
        "Tudo da versão Pro +",
        "Método ARCHETIPSE®",
        "Análise comportamental avançada",
        "Inteligência de Conversão",
        "Disponível apenas para clínicas elegíveis"
      ],
      highlight: false,
      exclusive: true,
      cta: "Verificar Elegibilidade"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-luxury-marble/10 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Escolha o Plano Ideal para sua Clínica
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Solução elegante e escalável: começamos simples, evoluímos para estratégia e chegamos à jornada completa do paciente
            </p>
          </div>
        </section>

        {/* Plans Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {plans.map((plan) => (
                <div key={plan.name} className={`relative bg-card border border-border rounded-2xl p-8 ${
                  plan.highlight ? 'ring-2 ring-luxury-gold shadow-2xl scale-105' : 'shadow-lg'
                }`}>
                  {plan.highlight && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-luxury-gold text-white">
                      Mais Procurado
                    </Badge>
                  )}
                  
                  {plan.exclusive && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                      Exclusivo
                    </Badge>
                  )}

                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                      plan.highlight ? 'bg-luxury-gold/20' : 'bg-primary/10'
                    }`}>
                      <plan.icon className={`h-8 w-8 ${
                        plan.highlight ? 'text-luxury-gold' : 'text-primary'
                      }`} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-card-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {plan.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground mb-6">
                      {plan.description}
                    </p>
                    <div className="text-3xl font-bold text-card-foreground">
                      {plan.price}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-luxury-gold mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={plan.highlight ? "gold" : "outline"} 
                    className="w-full"
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-luxury-gold/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif text-foreground mb-6">
              Pronto para começar?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Agende uma demonstração personalizada e veja a Conciera em ação na sua clínica
            </p>
            <Button variant="gold" size="xl" className="mx-6 sm:mx-0">
              Agendar Demonstração Gratuita
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Planos;