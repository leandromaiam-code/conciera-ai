import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Privacidade = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-luxury-marble/10 to-background border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/">
              <Button variant="ghost" className="mb-6 -ml-3">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground">
                  Política de Privacidade
                </h1>
                <p className="text-sm text-muted-foreground mt-2">
                  Última atualização: 1 de Outubro de 2025
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate max-w-none">
              {/* Introdução */}
              <div className="mb-8 sm:mb-12 p-6 sm:p-8 bg-card border border-border rounded-xl">
                <p className="text-sm sm:text-base text-card-foreground leading-relaxed">
                  A <strong>CONCIERA LTDA</strong> ("CONCIERA", "nós") está comprometida com a proteção da sua privacidade e dos dados dos seus pacientes. Esta Política de Privacidade descreve como os dados são tratados na nossa plataforma Conciera Suite™ ("Plataforma"), em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/18).
                </p>
              </div>

              {/* Seção 1 */}
              <div className="mb-8 sm:mb-10">
                <h2 className="text-xl sm:text-2xl font-serif text-foreground mb-4 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary mr-3 text-sm font-bold">
                    1
                  </span>
                  PAPÉIS NO TRATAMENTO DE DADOS
                </h2>
                <div className="ml-11 space-y-4 text-sm sm:text-base text-muted-foreground">
                  <p>
                    Para os fins da LGPD, é fundamental distinguir os papéis:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      A <strong>Clínica ("Contratante")</strong> é a <strong>Controladora dos Dados Pessoais</strong>, pois é quem toma as decisões sobre o tratamento dos dados dos seus pacientes.
                    </li>
                    <li>
                      A <strong>CONCIERA LTDA</strong> é a <strong>Operadora dos Dados Pessoais</strong>, pois realiza o tratamento dos dados em nome e sob as instruções da Controladora, através da Plataforma.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Seção 2 */}
              <div className="mb-8 sm:mb-10">
                <h2 className="text-xl sm:text-2xl font-serif text-foreground mb-4 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary mr-3 text-sm font-bold">
                    2
                  </span>
                  QUAIS DADOS TRATAMOS?
                </h2>
                <div className="ml-11 space-y-4 text-sm sm:text-base text-muted-foreground">
                  <p>
                    Na qualidade de Operadora, tratamos os dados que os pacientes ("Titulares de Dados") fornecem ao Agente de IA, tais como:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Dados de Contato:</strong> Nome, telefone, e-mail.</li>
                    <li><strong>Dados de Agendamento:</strong> Procedimentos de interesse, preferências de data e horário.</li>
                    <li><strong>Dados Comportamentais:</strong> Informações extraídas da conversa para fins de qualificação e personalização do atendimento.</li>
                  </ul>
                  <p className="mt-4">
                    A Plataforma não foi projetada para coletar ou armazenar "Dados Pessoais Sensíveis" (conforme definido pela LGPD). A responsabilidade de evitar a solicitação e o armazenamento de tais dados é da Controladora.
                  </p>
                </div>
              </div>

              {/* Seção 3 */}
              <div className="mb-8 sm:mb-10">
                <h2 className="text-xl sm:text-2xl font-serif text-foreground mb-4 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary mr-3 text-sm font-bold">
                    3
                  </span>
                  FINALIDADE DO TRATAMENTO
                </h2>
                <div className="ml-11 space-y-4 text-sm sm:text-base text-muted-foreground">
                  <p>
                    Os dados são tratados com as seguintes finalidades:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Executar as funções de comunicação e agendamento do Agente de IA.</li>
                    <li>Gerar relatórios analíticos e briefings de conversão para a Clínica.</li>
                    <li>Prestar suporte técnico.</li>
                    <li>Melhorar a segurança e a performance da Plataforma.</li>
                    <li>Utilizar dados de forma <strong>anonimizada e agregada</strong> para o treino dos nossos modelos de inteligência artificial, sem qualquer possibilidade de identificação individual dos titulares.</li>
                  </ul>
                </div>
              </div>

              {/* Seção 4 */}
              <div className="mb-8 sm:mb-10">
                <h2 className="text-xl sm:text-2xl font-serif text-foreground mb-4 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary mr-3 text-sm font-bold">
                    4
                  </span>
                  COMPARTILHAMENTO E TRANSFERÊNCIA DE DADOS
                </h2>
                <div className="ml-11 space-y-4 text-sm sm:text-base text-muted-foreground">
                  <p>
                    Não vendemos nem alugamos dados pessoais. O compartilhamento ocorre apenas quando estritamente necessário para a operação do Serviço, como:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Com <strong>provedores de infraestrutura</strong> (servidores em nuvem) que possuem os mais altos padrões de segurança.</li>
                    <li>Com <strong>plataformas de comunicação</strong> (ex: Meta/WhatsApp), para a transmissão das mensagens, nos termos das políticas de privacidade dessas plataformas.</li>
                  </ul>
                </div>
              </div>

              {/* Seção 5 */}
              <div className="mb-8 sm:mb-10">
                <h2 className="text-xl sm:text-2xl font-serif text-foreground mb-4 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary mr-3 text-sm font-bold">
                    5
                  </span>
                  MEDIDAS DE SEGURANÇA
                </h2>
                <div className="ml-11 space-y-4 text-sm sm:text-base text-muted-foreground">
                  <p>
                    Adotamos medidas de segurança técnicas e administrativas de ponta para proteger os dados, incluindo criptografia de dados em trânsito e em repouso, controle de acesso restrito, monitorização de segurança e trilhas de auditoria.
                  </p>
                </div>
              </div>

              {/* Seção 6 */}
              <div className="mb-8 sm:mb-10">
                <h2 className="text-xl sm:text-2xl font-serif text-foreground mb-4 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary mr-3 text-sm font-bold">
                    6
                  </span>
                  DIREITOS DOS TITULARES
                </h2>
                <div className="ml-11 space-y-4 text-sm sm:text-base text-muted-foreground">
                  <p>
                    A Controladora (Clínica) é a responsável por receber e atender às requisições dos Titulares de Dados (seus pacientes) previstas na LGPD. A Plataforma Conciera fornecerá à Clínica as ferramentas necessárias para facilitar o cumprimento dessas obrigações, como a exportação e a exclusão de dados de um paciente.
                  </p>
                </div>
              </div>

              {/* Seção 7 */}
              <div className="mb-8 sm:mb-10">
                <h2 className="text-xl sm:text-2xl font-serif text-foreground mb-4 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary mr-3 text-sm font-bold">
                    7
                  </span>
                  RETENÇÃO DE DADOS
                </h2>
                <div className="ml-11 space-y-4 text-sm sm:text-base text-muted-foreground">
                  <p>
                    Os dados pessoais serão retidos enquanto o contrato com a Clínica estiver ativo. Após a rescisão, os dados serão eliminados de forma segura, conforme os prazos e procedimentos estabelecidos na nossa política interna e na legislação aplicável.
                  </p>
                </div>
              </div>

              {/* Seção 8 */}
              <div className="mb-8 sm:mb-10">
                <h2 className="text-xl sm:text-2xl font-serif text-foreground mb-4 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary mr-3 text-sm font-bold">
                    8
                  </span>
                  CONTATO
                </h2>
                <div className="ml-11 space-y-4 text-sm sm:text-base text-muted-foreground">
                  <p>
                    Para qualquer dúvida relacionada a esta Política de Privacidade ou ao tratamento de dados, entre em contato com o nosso Encarregado de Proteção de Dados (DPO) através do e-mail: <a href="mailto:contato@conciera.com.br" className="text-primary hover:text-luxury-gold transition-colors font-semibold">contato@conciera.com.br</a>.
                  </p>
                </div>
              </div>

              {/* CTA Final */}
              <div className="mt-12 p-6 sm:p-8 bg-gradient-to-br from-primary/10 to-luxury-gold/5 rounded-xl border border-primary/20">
                <h3 className="text-lg sm:text-xl font-serif text-foreground mb-3">
                  Dúvidas sobre Privacidade?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Nossa equipe está disponível para esclarecer qualquer questão relacionada à proteção de dados.
                </p>
                <Button variant="default" asChild>
                  <a href="mailto:contato@conciera.com.br">
                    Falar com o DPO
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Privacidade;
