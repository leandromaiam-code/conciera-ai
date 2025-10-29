import { Clock, TrendingDown, AlertTriangle, Timer } from "lucide-react";
import { useIntersectionObserver, useStaggeredAnimation } from "@/hooks/useIntersectionObserver";

const statistics = [
  {
    icon: Clock,
    stat: "78%",
    description: "das pessoas acabam optando pelo primeiro fornecedor que responde"
  },
  {
    icon: Timer,
    stat: "21x",
    description: "mais chance de conversão quando respondido em até 5 minutos vs. 30 minutos"
  },
  {
    icon: TrendingDown,
    stat: "400%",
    description: "de redução na chance de conversão a cada 10 minutos de tempo de resposta"
  },
  {
    icon: AlertTriangle,
    stat: "60x",
    description: "menores chances de conversão após 24 horas sem resposta"
  }
];

const CostOfDelay = () => {
  const { ref: headerRef, isInView: headerInView } = useIntersectionObserver();
  const { ref: statsRef, visibleItems } = useStaggeredAnimation(statistics, 150);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 lg:mb-6">
            O Custo da <span className="text-luxury-gold">Demora</span>
          </h2>
          <p className="text-lg lg:text-xl text-foreground/80 max-w-3xl mx-auto">
            Quanto vale o tempo do seu cliente?
          </p>
        </div>

        {/* Statistics Grid */}
        <div 
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {statistics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`glass-card p-6 lg:p-8 rounded-xl border border-border/50 hover-scale transition-all duration-500 ${
                  visibleItems.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-luxury-gold" />
                  </div>
                  
                  <div className="text-4xl lg:text-5xl font-bold text-luxury-gold">
                    {item.stat}
                  </div>
                  
                  <p className="text-base lg:text-lg text-foreground/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div 
          className={`mt-12 lg:mt-16 text-center transition-all duration-700 delay-600 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto">
            Cada minuto perdido é uma oportunidade que escapa. 
            <span className="text-luxury-gold font-semibold"> A Conciera responde em segundos.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CostOfDelay;
