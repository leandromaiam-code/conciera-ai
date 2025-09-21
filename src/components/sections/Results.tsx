import { TrendingUp, UserCheck, DollarSign, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Results = () => {
  const results = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      percentage: "40%",
      title: "Mais conversão",
      description: "transformar até 40% a mais de conversas em agendamentos confirmados."
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      percentage: "30%",
      title: "Menos faltas (no-show)", 
      description: "reduzir em até 30% as ausências com confirmações ativas e sinal antecipado."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      percentage: "+",
      title: "Mais receita",
      description: "aumentar faturamento ao integrar agendamento + pagamento no mesmo fluxo."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      percentage: "24/7",
      title: "Mais eficiência na equipe",
      description: "liberar o time para fechamentos estratégicos enquanto a CONCIERA cuida do repetitivo 24/7."
    }
  ];

  const examples = [
    "Uma clínica de estética que hoje perde pacientes por demora no WhatsApp passa a responder em segundos e aumenta sua taxa de conversão.",
    "Uma clínica plástica que sofria com 1 em cada 3 pacientes faltando reduz o no-show pela metade com confirmações ativas.",
    "Uma clínica premium que gastava tempo treinando recepcionistas passa a ter atendimento padronizado, sem pausas, férias ou turnover."
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">
            Resultados Possíveis
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Com a CONCIERA, sua clínica poderá atingir resultados como:
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {results.map((result, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-luxury-gold/5 hover:shadow-luxury transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-luxury-gold mb-4 flex justify-center">
                {result.icon}
              </div>
              <div className="text-4xl font-bold text-luxury-gold mb-2">
                {result.percentage}
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">
                {result.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {result.description}
              </p>
            </div>
          ))}
        </div>

        {/* Examples */}
        <div className="bg-gradient-marble rounded-3xl p-8 md:p-12 mb-12 animate-fade-up [animation-delay:600ms]">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-8 text-center">
            Exemplos práticos:
          </h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            {examples.map((example, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 animate-fade-up"
                style={{ animationDelay: `${index * 150 + 800}ms` }}
              >
                <div className="w-2 h-2 bg-luxury-gold rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {example}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-up [animation-delay:1200ms]">
          <Button variant="gold" size="xl">
            Quero ver como funciona na prática
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Results;