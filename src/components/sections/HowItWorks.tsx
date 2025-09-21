import { MessageCircle, Brain, CreditCard, Calendar, Users, BarChart3, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <Phone className="w-10 h-10" />,
      title: "O paciente chega",
      description: "(WhatsApp, Instagram, site ou telefone)"
    },
    {
      number: "02", 
      icon: <MessageCircle className="w-10 h-10" />,
      title: "A CONCIERA acolhe e interage",
      description: "de forma natural e humanizada"
    },
    {
      number: "03",
      icon: <Brain className="w-10 h-10" />,
      title: "Reconhece o perfil comportamental",
      description: "(ARCHETIPSE®️ + DISC) e adapta a comunicação"
    },
    {
      number: "04",
      icon: <Users className="w-10 h-10" />,
      title: "Remove objeções",
      description: "com ética e playbooks específicos"
    },
    {
      number: "05",
      icon: <CreditCard className="w-10 h-10" />,
      title: "Agenda e recebe",
      description: "envia link de pagamento seguro (PIX/cartão) e confirma"
    },
    {
      number: "06",
      icon: <Calendar className="w-10 h-10" />,
      title: "Confirmações e lembretes",
      description: "automáticos para reduzir faltas"
    },
    {
      number: "07",
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Entrega relatórios",
      description: "de ponta a ponta para gestão eficiente"
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Como Funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            De um simples contacto a um agendamento pago. Em 7 passos.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-luxury-gold/50 to-luxury-gold/10 h-full"></div>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-center animate-fade-up ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} text-center md:text-inherit`}>
                    <h3 className="text-xl font-serif font-bold text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Circle */}
                  <div className="relative z-10 w-16 h-16 bg-background rounded-full shadow-luxury flex items-center justify-center border-4 border-luxury-gold/20 mx-8 md:mx-0 flex-shrink-0">
                    <span className="text-lg font-serif font-bold text-luxury-gold">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-8 md:text-left' : 'md:pr-8 md:text-right'} text-center md:text-inherit`}>
                    <div className="text-luxury-gold flex justify-center md:justify-start">
                      {step.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-up [animation-delay:800ms]">
          <Button variant="gold" size="xl">
            Agendar minha demo gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;