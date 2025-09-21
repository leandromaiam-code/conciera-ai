import { MessageCircle, Brain, Calendar, BarChart3 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <MessageCircle className="w-10 h-10" />,
      title: "Acolhe",
      description: "Paciente chega via WhatsApp, Instagram, site ou telefone. IA reconhece intenção e perfil comportamental."
    },
    {
      number: "02", 
      icon: <Brain className="w-10 h-10" />,
      title: "Qualifica & Conecta",
      description: "Adapta comunicação ao perfil, usa playbooks especializados e quebra objeções com empatia natural."
    },
    {
      number: "03",
      icon: <Calendar className="w-10 h-10" />,
      title: "Agenda & Recebe",
      description: "Apresenta horários, envia link seguro de pagamento (PIX/cartão) e confirma reserva no mesmo fluxo."
    },
    {
      number: "04",
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Entrega Insights",
      description: "Gera relatórios de conversão e briefings estratégicos baseados no MÉTODO ARCHETIPSE®"
    }
  ];

  return (
    <section className="py-24 bg-gradient-marble">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            De um simples contacto a um 
            <br />
            <span className="text-luxury-gold">agendamento pago. Em 4 passos.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fluxo inteligente que transforma visitantes em pacientes pagos, 
            com a precisão de quem entende profundamente o negócio de clínicas premium
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-gold opacity-30"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative text-center animate-fade-up hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 150 + 200}ms` }}
              >
                
                {/* Step Number */}
                <div className="relative z-10 w-20 h-20 mx-auto mb-6 bg-background rounded-full shadow-luxury flex items-center justify-center border-4 border-luxury-gold/20">
                  <span className="text-2xl font-serif font-bold text-luxury-gold">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="text-luxury-gold mb-4 flex justify-center">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Connection Arrow (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-2">
                    <div className="w-6 h-6 border-r-2 border-b-2 border-luxury-gold/50 rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-up [animation-delay:800ms]">
          <div className="bg-background rounded-2xl p-8 shadow-marble max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              Resultado que importa
            </h3>
            <p className="text-luxury-gold font-semibold text-lg">
              Conversão contato→agenda ↑ • no-show ↓ • tempo de resposta ↓ • satisfação ↑
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Com metas de KPI no piloto e ajustes contínuos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;