import { TrendingUp, Calendar, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Gestão inteligente",
      description: "Relatórios claros de conversão, faltas, satisfação e receita por canal."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-3xl bg-gradient-to-br from-background to-muted/20 hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-luxury-gold mb-6 flex justify-center">
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
        <div className="text-center animate-fade-up [animation-delay:600ms]">
          <Button variant="outline_gold" size="lg">
            Quero ver na prática
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MainBenefits;