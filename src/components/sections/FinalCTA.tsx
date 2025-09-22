import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-luxury-gold/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
          Pronto(a) para transformar o seu atendimento em receita?
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Demonstração de 15 minutos. Sem custo. Resultados garantidos.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="gold" size="xl" className="hover-glow mx-6 sm:mx-0">
            <Calendar className="mr-2 h-5 w-5" />
            Agendar Demonstração
          </Button>
          
          <Button variant="outline" size="xl" className="hover-lift mx-6 sm:mx-0">
            Ver Planos e Preços
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;