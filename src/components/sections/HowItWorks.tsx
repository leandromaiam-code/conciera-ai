import { MessageCircle, Brain, CreditCard, Calendar, Users, BarChart3, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver, useStaggeredAnimation } from "@/hooks/useIntersectionObserver";

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

  const { ref: headerRef, isInView: headerInView } = useIntersectionObserver();
  const { ref: stepsRef, visibleItems, isInView: stepsInView } = useStaggeredAnimation(steps, 150);

  return (
    <section id="como-funciona" className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Como Funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            De um simples contacto a um agendamento pago. Em 7 passos.
          </p>
        </div>

        {/* Linear Timeline - Left Aligned */}
        <div className="max-w-4xl mx-auto" ref={stepsRef}>
          <div className="relative">
            
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-luxury-gold/80 via-luxury-gold/40 to-luxury-gold/10 h-full"></div>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-6 transition-all duration-700 ${
                    visibleItems.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  
                  {/* Step Circle */}
                  <div className="relative z-10 w-16 h-16 bg-background rounded-full shadow-luxury flex items-center justify-center border-4 border-luxury-gold/30 flex-shrink-0 hover-3d">
                    <span className="text-lg font-serif font-bold text-luxury-gold">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-start space-x-4">
                      <div className="text-luxury-gold flex-shrink-0">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-bold text-primary mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-700 delay-1000 ${
          stepsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'  
        }`}>
          <Button variant="gold" size="xl" className="hover-glow animate-magnetic mx-4 sm:mx-0">
            Quero ver isso funcionando na prática
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;