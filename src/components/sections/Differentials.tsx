import { Brain, Users, Settings, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const Differentials = () => {
  const differentials = [
    ,
    {
      icon: <Brain className="w-8 h-8" />,
      text: "Somos a única concierge humanizada de IA capaz de reconhecer o perfil do seu paciente e se adaptar a ele para gerar empatia, conexão e maior conversão."
    },
    {
      icon: <Users className="w-8 h-8" />,
      text: "Específicos para clínicas estéticas e cirúrgicas."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      text: "Personalizado ao seu branding e processos internos."
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      text: "Excelência em toda jornada do cliente do primeiro contato ao pós tratamento."
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-marble">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">
            <span className="text-luxury-gold">Por que somos únicos?</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            Eleve toda a jornada do cliente para um patamar onde a conversão e fidelização se tornem inevitáveis por meio de IA especializada, estratégia e processo.
            </p>
          </div>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto mb-16">
          {differentials.map((item, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 p-6 rounded-2xl bg-background/60 hover:bg-background/80 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div className="text-luxury-gold flex-shrink-0 mt-1">
                {item.icon}
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-up [animation-delay:800ms]">
          <Button variant="gold" size="lg" className="mx-6 sm:mx-0">
            Descubra como funciona
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Differentials;