import { X, Check, ArrowRight } from "lucide-react";

const PainSolution = () => {
  const painSolutions = [
    {
      pain: "Leads caros perdidos por demora na resposta",
      solution: "Atendimento imediato 24/7 em todos os canais"
    },
    {
      pain: "Turnover e re-treinamento constante da equipe",
      solution: "IA humanizada com padrão premium consistente"
    },
    {
      pain: "Altas taxas de no-show e agenda furada",
      solution: "Confirmações ativas e opção de sinal antecipado"
    },
    {
      pain: "Conversas que não convertem em agendamentos",
      solution: "Playbooks especializados + análise comportamental"
    },
    {
      pain: "Dificuldade na gestão e controle do negócio",
      solution: "Relatórios completos de conversão e insights estratégicos"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            O fim do caos no atendimento.
            <br />
            <span className="text-luxury-gold">O início da receita previsível.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformamos as principais dores das clínicas de alto padrão em vantagens competitivas
          </p>
        </div>

        {/* Pain → Solution Grid */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {painSolutions.map((item, index) => (
            <div 
              key={index}
              className="group relative animate-fade-up hover:shadow-marble transition-all duration-300 rounded-2xl p-6 bg-gradient-marble/30"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                
                {/* Pain Side */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">PROBLEMA</h3>
                    <p className="text-muted-foreground">{item.pain}</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-gold rounded-full">
                    <ArrowRight className="absolute -right-2 -top-2 w-5 h-5 text-luxury-gold" />
                  </div>
                </div>

                {/* Solution Side */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-luxury-gold mb-2">SOLUÇÃO CONCIERA</h3>
                    <p className="text-muted-foreground">{item.solution}</p>
                  </div>
                </div>
              </div>

              {/* Connection Line Animation */}
              <div className="md:hidden flex justify-center my-4">
                <ArrowRight className="w-6 h-6 text-luxury-gold animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSolution;