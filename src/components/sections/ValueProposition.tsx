import { Shield, Zap, Target, TrendingUp } from "lucide-react";

const ValueProposition = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Atendimento 24/7",
      description: "Resposta imediata em WhatsApp, Instagram, site e telefone"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Conversão Inteligente",
      description: "Reconhece perfis e adapta abordagem para máxima conexão"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Receita Previsível",
      description: "Agendamento e pagamento integrados no mesmo fluxo"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Padrão Premium",
      description: "Linguagem humanizada alinhada ao seu branding"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-marble">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A Conciera não é um software de atendimento; <span className="text-luxury-gold"é um sistema de receita recorrente 
            para clínicas de elite</span>, arquitetado por quem entende profundamente do negócio
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-background/50 hover:bg-background/80 transition-all duration-300 hover:shadow-marble hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div className="text-luxury-gold mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Unique Value */}
        <div className="mt-20 text-center">
          <div className="bg-background rounded-3xl p-8 md:p-12 shadow-luxury max-w-4xl mx-auto animate-fade-up">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Somos a única concierge humanizada de IA
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              capaz de reconhecer o perfil do seu paciente e se adaptar a ele para gerar 
              <span className="text-luxury-gold font-semibold"> empatia, conexão e maior conversão</span>
            </p>
            <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;