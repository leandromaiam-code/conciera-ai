import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";

const Termos = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 animate-fade-up">
              Termos e Condições Gerais de Uso
            </h1>
            
            <div className="bg-card rounded-xl p-6 md:p-10 shadow-lg border border-border/50 animate-fade-up [animation-delay:200ms]">
              <ScrollArea className="h-[calc(100vh-300px)] pr-6">
                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none space-y-6 text-muted-foreground text-justify whitespace-pre-line">
                  
                  <p className="font-bold text-lg text-foreground mb-4">TERMOS DE USO DO SOFTWARE CONCIERA</p>

                  <p>Estes Termos de Uso (“Termos de Uso” ou “Termo”) aplicam-se ao uso dos serviços oferecidos pela CONCIERA (“Conciera” ou “Licenciante”), pessoa jurídica de direito privado, gestora da Plataforma CONCIERA.</p>
                  
                  <p>Os serviços da CONCIERA respeitarão os dispositivos do presente Termo, e vincularão a pessoa física ou jurídica licenciada (“Usuário”), que tenha preenchido o cadastro nesta Plataforma, diretamente ou por meio de representante ou preposto.</p>

                  <p>O Usuário, ao preencher os dados, aceita expressamente que estes passem a ser parte integrante deste Termo, bem como estejam sob a gestão da CONCIERA exclusivamente para o desenvolvimento das atividades listadas neste Termo.</p>

                  <p>O acesso ou uso da Plataforma, a conclusão do cadastro ou o envio dos dados pelo formulário de cadastro serão considerados, para todos os fins, como aceite eletrônico ao presente termo e todas as suas disposições e implicações.</p>

                  <p>Ressalte-se que o aceite ao presente termo caracteriza que o Usuário está automaticamente aderindo e concordando em se submeter integralmente a estes Termos de Uso, além de aceitar tudo quanto disposto nas demais Políticas da CONCIERA, disponíveis em seu endereço eletrônico https://www.conciera.com.br.</p>
                  <p>Assim, caso não concorde com os termos deste Termo, nem com a Política de Privacidade da CONCIERA, é importante que não realize o uso ou acesso da Plataforma, não preencha ou envie os seus dados, nem conclua qualquer cadastro disponível em nosso site.</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">1. DEFINIÇÕES</h3>
                  <p>Para exata compreensão e interpretação dos direitos e obrigações previstos no presente Termo, são adotadas as seguintes definições:</p>
                  <p><strong>CADASTRO:</strong> ficha cadastral com os dados pessoais e profissionais do Usuário, preenchida pelo próprio Usuário, representante ou preposto competente, para a utilização da Plataforma e dos Serviços da CONCIERA.</p>
                  <p><strong>FERRAMENTA ou CHATBOT:</strong> software “concierge digital” que utiliza inteligência artificial e processos eletrônicos para simular o atendimento humano em conversas com clientes ou pacientes das empresas Usuárias da CONCIERA. Tem como foco auxiliar o atendimento aos pacientes ou clientes do Usuário, com diversos recursos de administração de agenda, controle de consultas (ou horários em geral) e lembretes, automação de respostas às dúvidas de pacientes ou clientes, cadastro de pacientes ou clientes, dentre outros que podem ser adicionados à concierge digital CONCIERA para facilitar a gestão do cotidiano dos profissionais e/ou das empresas Usuárias da CONCIERA.</p>
                  <p><strong>APP:</strong> área reservada, acessada via o uso de login e senha, apenas para os Usuários que fizeram o Cadastro na Plataforma CONCIERA, onde os mesmos podem editar e personalizar as informações que a Ferramenta vai disponibilizar para os clientes ou pacientes dos Usuários.</p>
                  <p><strong>PLATAFORMA CONCIERA:</strong> software que engloba toda a solução da concierge digital CONCIERA, incluindo a Ferramenta e a App.</p>
                  <p><strong>ASSINATURA:</strong> contratação dos serviços da Ferramenta, realizada imediatamente após o preenchimento do Cadastro para que o Usuário possa usufruir das funcionalidades da Ferramenta oferecidas no Plano contratado.</p>
                  <p><strong>PLANO:</strong> pacote de serviços com valor monetário correspondente (“Pagamento pelo Plano”), com aquisição mediante pagamento recorrente e duração fixada no ato da assinatura dos serviços, que dá direito ao Usuário ter um certo número de Pacientes Únicos atendidos neste Período de Contratação.</p>
                  <p><strong>PAGAMENTO PELO PLANO:</strong> valor monetário que deve ser pago de acordo com o Plano selecionado no momento da Assinatura.</p>
                  <p><strong>SERVIÇOS DE PÓS-VENDA:</strong> serviços prestados por profissionais da CONCIERA, que não estão inclusos no valor pago pelo Licenciamento do software.</p>
                  <p><strong>SITE:</strong> portal eletrônico da CONCIERA, localizado no endereço eletrônico www.conciera.com.br e seus subdomínios, por meio do qual o Usuário poderá acessar a Plataforma CONCIERA e solicitar a disponibilização da Ferramenta, mediante preenchimento de Cadastro e efetuação do pagamento pelo plano ao qual aderiu.</p>
                  <p><strong>CLIENTES ou PACIENTES:</strong> São os clientes ou pacientes do Usuário, que se comunicam com o Usuário através da Ferramenta.</p>
                  <p><strong>CLIENTES ou PACIENTES ÚNICOS:</strong> nomenclatura para cada paciente individual atendido pela Ferramenta para aquele Usuário.</p>
                  <p><strong>CLIENTES ou PACIENTES ÚNICOS NO PERÍODO:</strong> número máximo de Pacientes Únicos que podem ser atendidos pela CONCIERA no período determinado pelo Plano escolhido na última Assinatura.</p>
                  <p><strong>CRÉDITOS DE CLIENTES ou PACIENTES ÚNICOS:</strong> créditos extras de Pacientes Únicos, com validade máxima de 12 meses, que podem ser obtidos de forma avulsa para suprir a necessidade de atendimentos além dos Pacientes Únicos no Período disponibilizados pela Assinatura de um Plano. Também referido como Créditos de Usuários Únicos em nosso Site.</p>
                  <p><strong>PERÍODO DE CONTRATAÇÃO DO PLANO ou PERÍODO DE ASSINATURA:</strong> É o tempo de funcionamento da Plataforma pela contratação dos planos. O período de contratação do plano será fixado no ato da assinatura dos serviços, e não possui vinculação com os Créditos de Pacientes Únicos no Período.</p>
                  <p><strong>ATENDENTES:</strong> nomenclatura dada a cada acesso concedido à Plataforma ao Usuário, para a gestão dos serviços da CONCIERA. Cada acesso será considerado como um Atendente. Para fins de responsabilidades, compreenda que todas as obrigações vinculadas ao Usuário alcançarão os Atendentes, por serem estes representantes do Usuário vinculado.</p>
                  <p><strong>USUÁRIOS:</strong> Usuários que assinarem quaisquer dos Planos da CONCIERA.</p>
                  <p><strong>FUNCIONALIDADES:</strong> benefícios e serviços específicos concedidos aos Usuários na assinatura da CONCIERA, que terão variação de acordo com o Plano contratado e terão a sua disponibilidade indicada no ato de contratação.</p>
                  <p><strong>UNIDADE ou SUBSIDIÁRIA:</strong> É um endereço físico de um estabelecimento de saúde de nosso Usuário.</p>
                  <p><strong>UNIDADE FRANQUEADA:</strong> É o franqueado, nos termos da Lei de Franquias (Lei Federal n.o 13.966/2019), de um Usuário da CONCIERA.</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">2. OBJETO DO TERMO</h3>
                  <p>2.1. Constitui objeto do presente Termo o licenciamento, pela CONCIERA, para fins exclusivos de uso, da referida Ferramenta para o Usuário, destinada a auxiliar os Usuários a automatizar as comunicações com os seus Clientes ou Pacientes.</p>
                  <p>2.2. A presente licença de uso tem o caráter oneroso, limitado e não sublicenciável, respeitando ainda todas as disposições deste Termo.</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">3. FUNCIONALIDADES DA FERRAMENTA</h3>
                  <p>3.1. A Ferramenta licenciada ao Usuário possui as seguintes funcionalidades:</p>
                  <p>a) gerenciamento de agendas;</p>
                  <p>b) marcação de consultas;</p>
                  <p>c) marcação de compromissos em geral;</p>
                  <p>d) prestação de informações gerais do Usuário aos Pacientes, Clientes ou interessados em seus serviços;</p>
                  <p>e) envio de lembretes, e;</p>
                  <p>f) automatização das respostas às perguntas mais frequentes.</p>
                  <p>3.2. A Plataforma CONCIERA possibilita a automação de algumas atividades de atendimento aos Pacientes ou Clientes, não intervindo, portanto, no contato, na inserção de informações, nos procedimentos profissionais, nos medicamentos prescritos ou terapias utilizadas, que são de responsabilidade única e exclusiva dos profissionais técnicos da Licenciada.</p>
                  <p>3.3. As Partes reconhecem, para todas as finalidades legais e contratuais, que a Plataforma CONCIERA não é fornecedora de quaisquer informações cadastradas pelo Usuário no seu Cadastro ou na Área de Membros, tampouco das informações fornecidas pelos Clientes ou Pacientes ao interagirem com Usuários através dos canais nos quais a Ferramenta é disponibilizada.</p>
                  <p>3.4. A CONCIERA não é responsável pela qualidade, estado, integridade ou legitimidade das informações inseridas nestas Plataformas, funcionando apenas como uma ferramenta de gestão das informações inseridas pelos Pacientes e Usuários nestas Plataformas e aplicativos.</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">4. CRIAÇÃO DE CONTA E CADASTRAMENTO</h3>
                  <p>4.1. O ato do Cadastro caracteriza a inserção da pessoa cujos dados foram inseridos nos campos no grupo de Usuários da Plataforma, dando acesso à Área de Membros.</p>
                  <p>4.2. O Usuário declara que forneceu informações verídicas, completas e atualizadas, conforme solicitado no Cadastro e na Área de Membros para uso da Ferramenta, não estando a CONCIERA obrigada a fiscalizar ou controlar a veracidade das informações fornecidas.</p>
                  <p>4.3. O Usuário responsabiliza-se, civil e criminalmente, pela veracidade das informações prestadas à CONCIERA.</p>
                  <p>4.4. Caso haja a assinatura para uso de uma pessoa jurídica, a pessoa física a proceder a assinatura está concordando em nome da pessoa jurídica.</p>
                  <p>4.4.1. É necessário que a pessoa física responsável pela assinatura deste termo tenha poderes para representar a organização neste ato, caso contrário não deverá assinar este Termo.</p>
                  <p>4.4.2. Caso realize a concordância das disposições deste Termo em nome de uma pessoa jurídica, sem possuir autorização para tanto, o assinante responderá pelas obrigações advindas deste Termo, acrescidos dos prejuízos financeiros e morais que possam ser causados à CONCIERA.</p>
                  <p>4.5. Em caso de Usuário pessoa física, somente as pessoas que tenham plena capacidade legal estão autorizadas a se cadastrar na Plataforma.</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">5. USO E FUNCIONAMENTO DA PLATAFORMA</h3>
                  <p>5.1. Em regra, a Plataforma CONCIERA estará à disposição do Usuário em tempo integral.</p>
                  <p>5.1.1. Excepcionalmente, a Plataforma poderá ficar indisponível para manutenções e atualizações regulares, em virtude de problemas com os data centers terceirizados, vícios técnicos, indisponibilidade de sistemas de propriedade de terceiros ou situações de caso fortuito e de força maior.</p>
                  <p>5.1.2. Em caso de indisponibilidade programada (manutenção e atualização) com duração superior à 24 (vinte e quatro) horas, a CONCIERA deverá comunicar tal fato aos Usuários com antecedência mínima de 48 (quarenta e oito) horas via e- mail para o endereço de e-mail de login do Usuário na Plataforma, por meio de aviso em suas redes sociais ou via qualquer meio de comunicação que permita a comprovação de recebimento.</p>
                  <p>5.1.3. Em caso de indisponibilidade por ato de terceiros, caso fortuito ou força maior, a CONCIERA envidará todos os esforços possíveis para solucionar o problema da melhor forma.</p>
                  <p>5.2. A Plataforma e o Chatbot somente funcionarão com a assinatura vigente de, no mínimo, um dos planos da CONCIERA.</p>
                  <p>5.2.1. Mesmo que o Usuário possua Créditos de Pacientes Únicos disponíveis ao final do período de assinatura, a manutenção das funcionalidades da Plataforma somente ocorrerá com renovação ou assinatura de um novo plano para o próximo período.</p>
                  <p>5.3. A mera existência ou disponibilidade de Créditos de Pacientes Únicos na Plataforma, sem a assinatura em vigência de um plano, não habilita as funcionalidades da Plataforma e do Chatbot.</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">6. SUPORTE</h3>
                  <p>6.1. O suporte dado pela equipe da CONCIERA estará disponível nos dias úteis, em horário comercial, podendo levar até 48 (quarenta e oito) horas para que a questão seja respondida.</p>
                  <p>6.1.1. O tempo para a resolução de problemas apontados pelo Usuário para o suporte dependerá da complexidade do trabalho para a sua resolução e do nível de criticidade da demanda, a ser avaliado pelo time da CONCIERA.</p>
                  <p>6.2. A CONCIERA compromete-se em manter a transparência na comunicação com o Usuário, objetivando a resolução dos problemas que porventura possam surgir originados por força deste Termo.</p>
                  <p>6.3. A CONCIERA poderá disponibilizar, dependendo do Plano do Usuário e ao seu livre e exclusivo critério, diversos meios para o atendimento de suporte, como e-mail, telefone e aplicativos para troca de mensagem (como o WhatsApp).</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">7. DOS SERVIÇOS PROFISSIONAIS ADICIONAIS DA CONCIERA</h3>
                  <p>7.1. A CONCIERA disponibiliza ainda aos seus Usuários serviços profissionais adicionais de Pós-Venda, os quais não estão inclusos no valor pago pelo Licenciamento do software (“os planos”), à medida que não se enquadram como os serviços típicos de suporte.</p>
                  <p>7.2. Os serviços compreendem, mas não se limitam, a:</p>
                  <ul className="list-disc pl-5">
                    <li>Implementação e configuração de novas contas;</li>
                    <li>Alterações de fluxos de atendimento;</li>
                    <li>Treinamentos extras;</li>
                    <li>Construção e disponibilização de automações de envios de mensagens, e; quaisquer outros serviços que sejam ofertados pela CONCIERA e não estejam expressamente indicados no Plano do Usuário.</li>
                  </ul>
                  <p>7.3. Tais serviços adicionais somente serão prestados se expressamente solicitados pelos Usuários à CONCIERA, mediante o respectivo pagamento dos valores devidos, que serão previamente indicados pelos canais de atendimento da CONCIERA no ato da solicitação de contratação dos serviços.</p>
                  <p>7.4. Os valores deverão ser pagos sempre em formato pré-pago. Assim, só haverá a execução dos serviços adicionais após a confirmação de pagamento pelo Usuário.</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">8. VÍCIOS E RESPONSABILIDADES</h3>
                  <p>8.1. A CONCIERA não se responsabilizará por danos causados aos Usuários, Atendentes ou Pacientes ou Clientes ocasionados por indisponibilidades no serviço causadas por interrupções, situações de caso fortuito, força maior, falhas de qualquer natureza e/ou bugs nas Plataformas e aplicativos de trocas de mensagens instantâneas, redes sociais ou outras Plataformas utilizadas para acesso ou integração com a CONCIERA, informações indevidas cadastradas ou qualquer outra ação e omissão que cause danos e seja de sua responsabilidade, seja praticadas pelos Usuários, Atendentes, Pacientes ou terceiros.</p>
                  <p>8.2. Em que pese a adoção das boas práticas de segurança da informação, a CONCIERA não será responsabilizada por erros, interrupções, mal funcionamentos, atrasos ou outras imperfeições que possam surgir nos seus serviços, passíveis de ocorrência diante da natureza técnica da atividade.</p>
                  <p>8.3. Por sua natureza, a CONCIERA não garante, de nenhuma forma, a prestação de serviço de forma ininterrupta e/ou isenta de vícios.</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">9. LIMITAÇÃO DE RESPONSABILIDADE DA CONCIERA SOBRE RESPOSTAS FORNECIDAS POR SISTEMAS DE IA</h3>
                  <p>9.1. A CONCIERA utiliza tecnologia de inteligência artificial para aprimorar o atendimento automatizado, fornecendo respostas instantâneas e facilitando a comunicação entre pacientes e clínicas. O usuário reconhece e concorda que as interações com sistemas de inteligência artificial, como assistentes virtuais, chatbots, ou outras ferramentas automatizadas utilizadas pela CONCIERA, são baseadas em algoritmos e processos automatizados.</p>
                  <p>9.2. No entanto, é importante ressaltar que, como qualquer sistema baseado em IA, os sistemas da CONCIERA estão sujeitos a erros de interpretação, respostas imprecisas, incompletas ou até mesmo fora de contexto, fenômeno comumente conhecido como “alucinação” da IA.</p>
                  <p>9.3. São alguns exemplos de erros que podem ser cometidos:</p>
                  <ul className="list-disc pl-5">
                    <li>Exemplo de erro de interpretação: Em casos em que a IA possa interpretar erroneamente informações fornecidas pelo usuário. Por exemplo, um termo com múltiplos significados, ou mesmo uma pronúncia dúbia, imprecisa ou pouco audível, pode ser compreendido de forma incorreta, levando a uma resposta que não condiz com a necessidade do paciente.</li>
                    <li>Exemplo de erro gerado por falha humana: Caso em que um funcionário da clínica insere incorretamente informações no sistema, e a IA replica tal erro. Nesse caso, a IA não estaria “alucinando”, mas sim replicando um erro humano, o que reforça a importância da revisão contínua dos dados imputados pelos Atendentes.</li>
                    <li>Exemplo de alucinação da IA: A IA pode gerar respostas sem fundamento real quando, ao tentar prever a melhor resposta, combina fragmentos de informações que não correspondem a dados existentes no sistema.</li>
                  </ul>
                  <p>9.4. A IA pode apresentar retornos errados, porque:</p>
                  <ul className="list-disc pl-5">
                    <li>A IA é treinada em vastos volumes de texto, e a forma como ela aprende a gerar respostas não envolve entender o mundo ou verificar a verdade, mas sim reconhecer padrões em dados e prever a sequência mais provável de palavras, o que significa que ela pode parecer confiante em sua resposta, mesmo que seja completamente inventada;</li>
                    <li>A IA não possui mecanismos embutidos para verificar a precisão de suas respostas. Ela não checa dados de uma fonte externa ao gerar uma resposta;</li>
                    <li>A IA pode interpretar incorretamente perguntas ambíguas, gerando respostas que não condizem com o contexto ou o significado pretendido pelo usuário.</li>
                  </ul>
                  <p>9.5. A CONCIERA e seus desenvolvedores não se responsabilizam por eventuais respostas inadequadas, inexatas ou equivocadas fornecidas pela IA. O usuário reconhece que a tecnologia, apesar de avançada, não substitui a análise humana e deve ser utilizada como ferramenta auxiliar na prestação de informações ao paciente.</p>
                  <p>9.6. Para mitigar possíveis equívocos, recomendamos que:</p>
                  <ul className="list-disc pl-5">
                    <li>O atendimento automatizado seja supervisionado por profissionais da clínica sempre que necessário;</li>
                    <li>As informações obtidas por meio da IA sejam validadas antes de qualquer tomada de decisão médica ou administrativa;</li>
                    <li>Os pacientes sejam orientados a procurar um profissional de saúde em caso de dúvidas ou informações sensíveis;</li>
                    <li>A equipe da clínica revise periodicamente os dados inseridos no sistema para evitar erros causados por falha humana.</li>
                  </ul>
                  <p>9.7. Ao utilizar os serviços da CONCIERA, os clientes e usuários reconhecem e concordam com essa limitação, eximindo a CONCIERA de qualquer responsabilidade decorrente de erros da IA.</p>
                  <p>9.8. Caso ocorra alguma inconsistência, a CONCIERA recomenda que os usuários reportem imediatamente o ocorrido para que melhorias contínuas possam ser implementadas na tecnologia, quando pertinente.</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">10. CONFIDENCIALIDADE DAS INFORMAÇÕES</h3>
                  <p>10.1. As informações fornecidas pelo Usuário, Atendentes e pelos Pacientes do Usuário serão de uso confidencial e exclusivo do próprio Usuário e da CONCIERA.</p>
                  <p>10.1.1. A CONCIERA pode, mediante autorização explícita do Usuário, fornecer dados agregados relacionados à performance das campanhas de marketing do Usuário à agência de marketing ou a outros parceiros de marketing do Usuário. Neste caso, o Usuário deverá indicar à CONCIERA quem são as pessoas jurídicas ou parceiros com as quais a CONCIERA fica expressamente autorizada a realizar o compartilhamento dos seus dados.</p>
                  <p>10.1.2. Nos termos da Lei Federal no. 13.709/2019, em caso de autorização para compartilhamento dos dados, o Usuário garante que está resguardado por uma base legal para o referido tratamento.</p>
                  <p>10.1.3. O Usuário autoriza a CONCIERA a utilizar dados anonimizados e agregados (que não permitam a identificação do seu titular) em artigos, relatórios, ebooks ou outros tipos de publicação da CONCIERA.</p>
                  <p>10.2. As informações somente serão fornecidas nos casos previstos pela Lei ou quando constatada(s) fraude(s), como por exemplo falsidade ideológica (utilização de nomes e documentos falsos), falsificação ou incorreta utilização dos serviços, hipótese em que as informações do fraudador (nome, endereço, IP, etc.) poderão ser fornecidas às autoridades responsáveis.</p>
                  <p>10.3. Para os Usuários que permanecem com um Cadastro ativo e com os planos pagos em dia, a CONCIERA manterá os dados e informações dos Clientes ou Pacientes do Usuário, por prazo indeterminado, na forma prevista na legislação.</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">11. SUSPENSÃO E ADVERTÊNCIA AO USUÁRIO</h3>
                  <p>11.1. Sem prejuízo de outras medidas, a CONCIERA poderá advertir, suspender ou cancelar, temporária ou definitivamente, o Cadastro ou acesso de um Usuário, Atendente ou Paciente, a qualquer tempo, iniciando as ações legais cabíveis e/ou suspendendo a prestação de seus serviços se:</p>
                  <p>a) o Usuário não cumprir qualquer dispositivo deste Termo e demais políticas da CONCIERA;</p>
                  <p>b) se descumprir com seus deveres de Usuário;</p>
                  <p>c) se praticar atos fraudulentos ou dolosos, que possam provocar ações criminosas, ilícitas, disfuncionais ou moralmente censuráveis, ou que tenham como objetivo interferir no funcionamento e qualidade do Site e/ou da Plataforma CONCIERA e/ou quaisquer da Ferramenta, ou;</p>
                  <p>d) se não puder ser verificada a identidade do Usuário ou qualquer informação fornecida por ele esteja incorreta.</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">12. ASSINATURA, PLANOS E FORMA DE PAGAMENTO</h3>
                  <p>12.1. Para utilizar os serviços da Ferramenta, o Usuário deverá adquirir uma assinatura da CONCIERA, escolhendo um Plano e efetuando o Pagamento pelo Plano, antecipadamente, no valor previsto para o Plano contratado pelo Usuário.</p>
                  <p>12.2. A CONCIERA não possui quaisquer assinaturas de cobrança posterior (pós-pago), sendo a única forma de assinatura o pagamento prévio do plano contratado, cujo valor pode ser parcelado mensalmente.</p>
                  <p>12.3. Considerando que todos os Planos da CONCIERA são pré-pagos, a assinatura de qualquer destes dará direito a utilização dos serviços contratados pelo período contratado vinculados ao Plano.</p>
                  <p>12.4. Os Planos contratados terão duração vinculada ao Plano escolhido no ato da Contratação.</p>
                  <p>12.5. A CONCIERA disponibilizará Planos para a escolha pelos Usuários na assinatura dos seus serviços, que terão funcionalidades e entregas distintas, de acordo com as especificidades elencadas na página “Planos”, disponível no site da CONCIERA.</p>
                  <p>12.6. Os preços, planos e formas de pagamento estarão disponibilizados no site da CONCIERA.</p>
                  <p>12.7. Uma vez selecionado um Plano e realizado o Pagamento pelo Plano, não será permitido o downgrade do Plano contratado dentro do período contratado.</p>
                  <p>12.8. Caso o Usuário queira aumentar o limite de Pacientes Únicos em vigor no Período de Contratação do Plano atual, este deverá realizar um upgrade de Plano, ou seja, selecionar um Plano de maior valor com um maior volume de Pacientes Únicos no Período de Contratação do Plano atual e realizar o pagamento do valor da diferença entre o seu plano atual e o plano selecionado; ou comprar pacotes de Créditos de Pacientes Únicos e realizar o pagamento dentro do limite previsto.</p>
                  <p>12.9. Os Créditos de Pacientes Únicos só serão computados após a confirmação do recebimento do pagamento.</p>
                  <p>12.10. Caso o Pagamento pelo Plano para o próximo Período de Contratação não seja detectado até 5 (cinco) dias após a data de vencimento, ou seja, após o final do Período de Contratação do Plano atual, a Ferramenta da assistente virtual CONCIERA será imediatamente desativada.</p>
                  <p>12.10.1. O Usuário será notificado por e-mails enviados automaticamente pela Plataforma de gestão de pagamentos recorrentes da CONCIERA 15 (quinze) dias antes do vencimento, no dia do vencimento e 3 (três) dias após o vencimento do Pagamento pelo Plano correspondente ao próximo Período de Contratação do Plano.</p>
                  <p>12.10.2. É de responsabilidade do Usuário cadastrar o endereço de e-mail da CONCIERA e das suas Plataformas de pagamento como endereços confiáveis, para evitar que estas notificações caiam na caixa de spam do e-mail do Usuário.</p>
                  <p>12.10.3. O Usuário também será notificado na própria Área de Membros sobre a proximidade e sobre eventuais atrasos que houverem no Pagamento pelo Plano correspondente ao próximo Período de Contratação do Plano.</p>
                  <p>12.10.4. A Ferramenta será automaticamente reativada se o Usuário realizar o Pagamento pelo Plano para o próximo Período de Contratação em até 15 (quinze) dias após a data de vencimento.</p>
                  <p>12.11. Os pagamentos poderão ser realizados via cartão de crédito ou PIX.</p>
                  <p>12.12. É de inteira responsabilidade do Usuário realizar o preenchimento correto dos dados do meio de pagamento.</p>
                  <p>12.12.1. No momento de preenchimento dos dados na Plataforma financeira, o Usuário poderá habilitar a opção “usar esse cartão em cobranças futuras”, ação que autoriza a CONCIERA a realizar a renovação automática do plano selecionado, bem como a cobrança dos créditos de usuários únicos, até ordem em contrário do usuário.</p>
                  <p>12.12.2. Caso o usuário não habilite a função “usar esse cartão em cobranças futuras”, o usuário terá que realizar o preenchimento novamente dos dados do seu cartão de crédito antes do prazo do vencimento do seu plano.</p>
                  <p>12.13. As datas de vencimento dos pagamentos permanecerão sempre a mesma definida no ato de contratação do Plano pelo Usuário, independentemente da sua data de utilização da Plataforma ou ativação dos serviços, nos termos listados na Cláusula 12.4 deste Contrato.</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">13. DOS VALORES</h3>
                  <p>13.1. O Usuário expressamente reconhece e concorda com o valor do Pagamento referente ao Plano contratado, como remuneração pela utilização da Plataforma.</p>
                  <p>13.2. O Pagamento pelo Plano poderá ocorrer em parcelas mensais ou em parcela única.</p>
                  <p>13.3. O Plano terá o seu pagamento cobrado de acordo com o formato que estiver disponível e for escolhido pelo Usuário no ato da assinatura dos serviços.</p>
                  <p>13.4. Os valores pagos pelo plano contratado não incluem os serviços de Pós-Venda descritos na Cláusula 7a. Portanto, a Licenciante não é obrigada a prestar esses serviços sem a devida contraprestação financeira por parte do Licenciado.</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">14. RENOVAÇÃO DA ASSINATURA</h3>
                  <p>14.1. Cada novo Pagamento pelo Plano efetuado pelo Usuário representa a renovação da sua Assinatura e a renovação destes Termos de Uso.</p>
                  <p>14.2. Não estando vigente a assinatura de qualquer dos Planos, a Plataforma não desenvolverá as suas atividades, mesmo com a existência de créditos de pacientes únicos do Usuário.</p>
                  <p>14.3. A renovação ou a realização de novas assinaturas sempre serão contratadas pelos valores vigentes na data de contratação, previstos nos planos no Site da CONCIERA ou especificados em Termo específico, caso houver.</p>
                  <p>14.3.1. Não há qualquer garantia de direito a preços ou valores aos usuários da CONCIERA para a realização de renovação ou novas assinaturas.</p>
                  <p>14.4. A data de pagamento da primeira parcela pelo Usuário, definida no ato da contratação dos Planos da CONCIERA, permanecerá a mesma para todas as demais cobranças subsequentes.</p>
                  <p>14.4.1. O Usuário reconhece que a ausência de ativação ou uso da Plataforma não ocasionará, em nenhuma hipótese, a postergação ou alteração da data de vencimento das parcelas subsequentes.</p>
                  <p>14.4.2. Assim, qualquer ação ou omissão de responsabilidade do Usuário que ocasione qualquer modalidade de atraso ou não utilização da Plataforma não justificará ou ocasionará a mudança da data de vencimento das parcelas subsequentes e tampouco seu estorno.</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">15. CANCELAMENTO DA ASSINATURA</h3>
                  <p>15.1. Caso o Usuário deseje cancelar a sua Assinatura, este deverá realizar o Cancelamento de forma automática na sua Área de Membros através do botão “Cancelar Assinatura”.</p>
                  <p>15.2. Caso o Usuário venha a cancelar um Plano Anual antes de expirado o seu prazo de vencimento, o mesmo não fará jus ao reembolso ou estorno parcial, proporcional ao período não utilizado, caso o pagamento tenha sido efetivado em parcela única no ato da contratação, ou mesmo ao cancelamento das cobranças mensais subsequentes, caso o pagamento tenha sido parcelado no ato da contratação do plano anual.</p>
                  <p>15.3. O cancelamento da assinatura não ensejará a devolução de quaisquer valores já pagos à CONCIERA, sejam referentes ao Plano, sejam referentes aos Créditos de Usuários Únicos, ainda que de maneira proporcional.</p>
                  <p>15.4. Se houver o Cancelamento, os Créditos de Pacientes Únicos dos Planos e os Créditos de Pacientes Únicos que o Usuário comprou separadamente do plano acumulados até imediatamente antes do momento do Cancelamento pelo Usuário serão perdidos e não serão reembolsados, mesmo que de maneira proporcional.</p>
                  <p>15.5. Caso o Pagamento pelo Plano correspondente ao próximo Período de Contratação não seja realizado em até 15 (quinze) dias após a data de vencimento, a Assinatura do Usuário será cancelada.</p>
                  <p>15.6. Ao cancelar sua Assinatura, a CONCIERA não garantirá mais a disponibilidade dos dados do Usuário, tampouco dos seus Clientes ou Pacientes.</p>
                  <p>15.6.1. É de inteira responsabilidade do Usuário fazer o backup desses dados pelo período que ele necessitar ou pelo prazo exigido em lei, de acordo com as normas do seu conselho profissional.</p>
                  <p>15.6.2. Estes dados podem ser acessados pelo Usuário em sua Área de Membros.</p>
                  <p>15.7. Os planos mensais, caso estejam disponíveis para contratação, terão um tempo mínimo de fidelização de 3 (três) mensalidades pagas. Assim, após a assinatura de um plano mensal, o Cliente somente poderá realizar o seu cancelamento após o pagamento de pelo menos 3 mensalidades referentes ao plano assinado desde o início da vigência do Termo.</p>
                  <p>15.7.1. Em caso de cancelamento de qualquer dos planos mensais antes do pagamento de pelo menos 3 mensalidades, o usuário concorda em pagar uma multa não compensatória cujo valor é a soma de todas as mensalidades restantes necessárias para completar as três mensalidades mínimas correspondentes ao período de fidelização para planos mensais.</p>
                  <p>15.8. Em caso de cancelamento de planos anuais, valores já pagos à CONCIERA, ou mesmo parcelas vincendas, não serão devolvidos, estornados, ressarcidos ou terão sua cobrança cancelada, total ou parcialmente, em qualquer hipótese.</p>
                  <p>15.9. Tendo em vista a personalização do presente serviço, não aplica-se aos serviços da CONCIERA o disposto no art. 49, parágrafo único do Código de Defesa do Consumidor (“Direito ao arrependimento”).</p>
                  <p>15.9.1. Por personalização, compreenda a realização das configurações da conta do cliente na plataforma pela equipe técnica da CONCIERA.</p>
                  <p>15.9.2. Assim, mesmo se o cliente se arrepender de ter assinado um plano do software dentro dos 7 (sete) primeiros dias após a contratação, dado que a implantação inicial do sistema exige um considerável grau de personalização e esforço humano, os valores pagos não serão estornados como forma de pagamento pela implementação ou setup do sistema.</p>
                  <p>15.9.2.1. Por setup e ativação, compreenda o ato técnico customizado e manual de integrar, por meio de liberação, instalação e ativação, os dados do Usuário à Plataforma, permitindo o seu integral funcionamento e uso.</p>
                  <p>15.9.3. O Usuário manifestou plena e expressa concordância quanto aos termos da presente Cláusula, declarando que reconhece a atividade técnica de personalização e customização necessária para o correto funcionamento dos serviços.</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">16. REATIVAÇÃO DAS ASSINATURAS</h3>
                  <p>16.1. Os Usuários que cancelarem as suas Assinaturas ou que tiverem as suas Assinaturas Canceladas automaticamente, poderão reativar a sua Assinatura e restabelecer o serviço entrando na Área de Membros até 6 (seis) meses depois da data do seu Cancelamento e selecionar o Plano desejado para realização de uma nova Assinatura.</p>
                  <p>16.2. Os usuários Antigos que porventura cancelarem as suas assinaturas de Planos Antigos, caso desejem reativar a sua assinatura, somente poderão assinar os Planos Novos da CONCIERA, conforme escopo e preço vigentes destes planos, não sendo permitida a assinatura de qualquer dos Planos Antigos.</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">17. REAJUSTE DE VALORES E POLÍTICA DE PREÇOS</h3>
                  <p>17.1. A CONCIERA se reserva o direito de modificar, aumentar, incluir ou eliminar preços vigentes a qualquer momento ou realizar promoções e outras formas transitórias de alteração dos preços praticados.</p>
                  <p>17.1.1. Os Usuários serão informados com pelo menos 30 (trinta) dias de antecedência sobre alterações nos preços dos planos da CONCIERA que afetem o seu Plano contratado.</p>
                  <p>17.2. Os valores dos Pagamentos pelo Plano não serão reajustados durante o Período de Contratação do Plano.</p>
                  <p>17.2.1. Os valores do Pagamento pelo Plano só poderão ser reajustados para o próximo Período de Contratação do Plano.</p>
                  <p>17.3. A CONCIERA não é obrigada a informar com antecedência ao Usuário eventuais mudanças em preços e promoções que não sejam aplicáveis ao Usuário, por exemplo, modificações que sejam aplicáveis apenas a novos usuários da Plataforma.</p>
                  <p>17.4. As novas Assinaturas, bem como a renovação de assinaturas, sempre serão contratadas pelos valores vigentes na data de contratação, previstos nos planos no Site da CONCIERA ou especificados em cláusulas deste termo de uso, caso houver.</p>
                  <p>17.5. Caso o Usuário não concorde com os novos preços praticados pela CONCIERA, basta não renovar a sua assinatura para os períodos posteriores, ou solicitar o cancelamento dos serviços.</p>
                  <p>17.6. Os descontos, reduções, diferenciações, bônus ou qualquer outra política de benefício ou redução de preços obtidas pelo Usuário por força de Termos específicos de qualquer natureza (ex: assinaturas coletivas, assinaturas por franquias, Termos de parceria) serão imediatamente cancelados:</p>
                  <ul className="list-disc pl-5">
                    <li>Caso o Usuário se desvincule, de qualquer maneira, do Termo que originou o benefício;</li>
                    <li>Deixe de cumprir as condições ou requisitos essenciais para usufruto do benefício, ou;</li>
                    <li>Haja a rescisão ou extinção do Termo jurídico original que concedeu o benefício.</li>
                  </ul>

                  <h3 className="text-lg font-bold text-foreground mt-6">18. PRÁTICAS PROIBIDAS</h3>
                  <p>18.1. Pelo presente Termo, pelas demais políticas da CONCIERA, ou pela lei vigente, está expressamente proibida a inserção de quaisquer informações pelo Usuário e Atendentes na Plataforma CONCIERA que contenham os seguintes dados, imagens e/ou legendas, ou que façam apologia a:</p>
                  <p>a) quaisquer atividades ilícitas, e/ou vedadas ao profissional;</p>
                  <p>b) propriedades roubadas, furtadas ou subtraídas, ou de qualquer origem ilícita, tais como contrabando, falsificações ou adulterações;</p>
                  <p>c) cigarro e derivados de tabaco e/ou que façam apologia ao hábito de fumar;</p>
                  <p>d) conteúdos que promovam violência e maus tratos contra seres vivos de qualquer espécie;</p>
                  <p>e) conteúdos relacionados à prostituição ou similares, e quaisquer informações sobre produtos de material pornográfico, erótico, obsceno, inadequados para menores ou contrários a moral e aos bons costumes;</p>
                  <p>f) conteúdos que promovam a violência e/ou discriminação, baseada em questões de raça, sexo, religião, nacionalidade, orientação sexual ou de qualquer outro tipo;</p>
                  <p>g) conteúdos ou arquivos que contenham vírus, programas ou códigos que possam danificar e/ou roubar dados, informações ou o funcionamento de outros computadores, ou qualquer tentativa de explorar, rastrear ou testar vulnerabilidades do sistema da CONCIERA ou das Plataformas e redes sociais integradas, e/ou burlar qualquer medida de segurança e/ou autenticação;</p>
                  <p>h) conteúdos que falsifiquem, omitem ou simulem endereços de IP’s, de rede ou de correio eletrônico, na tentativa de ocultar a identidade e/ou autoria dos transgressores;</p>
                  <p>i) atividades que violem as leis sobre a propriedade intelectual, tais como cópias não autorizadas, utilização de imagens ou textos sem autorização do autor, sejam elas marcas, réplicas e/ou falsificações;</p>
                  <p>j) quaisquer outras atividades, produtos e/ou serviços vedados na legislação vigente, nos códigos de ética da profissão do Usuário, e/ou que se caracterizem ilícitos penais ou contravenções.</p>
                  <p>18.2. É responsabilidade exclusiva do Usuário velar pela legalidade de suas atividades e informações cadastradas, não assumindo a CONCIERA nenhuma responsabilidade pela existência delas em sua Plataforma.</p>
                  <p>18.3. A CONCIERA poderá excluir os Usuários e Atendentes que não cumpram com as restrições descritas no presente Termo, independente de aviso prévio.</p>
                  <p>18.3.1. O Usuário e Atendentes serão os únicos e exclusivos responsáveis perante a CONCIERA ou terceiros, pela transgressão desta regra que resulte em infração a direitos intelectuais de terceiros, estando a CONCIERA isenta de qualquer responsabilidade perante o titular destes direitos.</p>
                  <p>18.4. Os Usuários também não poderão, entre outras atitudes previstas no presente Termo:</p>
                  <p>a) manipular os preços dos Planos e/ou informações da CONCIERA;</p>
                  <p>b) agredir, caluniar, injuriar ou difamar a CONCIERA e/ou outros Usuários, Pacientes ou Clientes, por qualquer meio disponível para a comunicação dos Usuários;</p>
                  <p>c) usar qualquer meio virtual, mecanismo de busca, aplicativo de pesquisa/recuperação de sites ou outro dispositivo para recuperar ou indexar qualquer parte dos serviços da CONCIERA ou coletar informações sobre os Usuários para qualquer finalidade não autorizada;</p>
                  <p>d) enviar conteúdo com propaganda enganosa afirmando que tal conteúdo é patrocinado ou endossado pela CONCIERA;</p>
                  <p>e) criar contas de Usuários por meios automatizados ou com intenções falsas ou fraudulentas; e</p>
                  <p>f) transmitir quaisquer vírus, worms, defeitos, cavalos de Tróia, malwares ou quaisquer itens de natureza destrutiva.</p>
                  <p>18.4.1. Os comportamentos listados nesta cláusula poderão ser sancionados com a suspensão ou cancelamento do seu Cadastro como Usuário da CONCIERA, sem prejuízo das ações legais que possam ocorrer pela configuração de delitos ou contravenções ou os prejuízos civis que possam causar a CONCIERA ou terceiros.</p>
                  <p>18.5. Caso a CONCIERA verifique ou suspeite que algum Usuário está violando alguma condição específica do presente Termo ou que seja considerada uma atividade ilícita, além das medidas de proteção já discriminadas no presente Termo, tal como o cancelamento da referida Assinatura, os dados do Usuário infrator serão encaminhados às autoridades competentes, para que estas tomem as medidas judiciais cabíveis.</p>
                  <p>18.6. A CONCIERA se reserva o direito de retirar de sua base de dados quaisquer parceiros, Usuários, Atendentes e Clientes ou Pacientes destes Usuários que não atendam aos padrões de ética, qualidade e boa-fé da CONCIERA, cuja principal preocupação é prover um ambiente livre e seguro para o gerenciamento de informações profissionais de seus Usuários, a satisfação integral do Usuário na Plataforma CONCIERA e o atendimento aos clientes ou pacientes dos Usuários.</p>
                  <p>18.7. O Usuário da Plataforma CONCIERA está ciente e concorda que se as informações inseridas na Plataforma CONCIERA infringirem alguma norma ou regulamento aplicável à referida atividade, a CONCIERA não possui qualquer responsabilidade por esta atividade.</p>
                  <p>18.8. A CONCIERA não será responsável pelo efetivo cumprimento das obrigações assumidas por terceiros ou parceiros com o Usuário, atuando sempre, no entanto, para tentar evitar quaisquer fraudes ou má-fé de terceiros.</p>
                  <p>18.9. O Usuário reconhece e aceita que ao importar ou exportar ou usar serviços de parceiros ou terceiros que possuam serviços de integração com a CONCIERA, o faz por sua conta e risco, sendo exclusivamente de ambas as partes a responsabilidade por todas as obrigações delas decorrentes, sejam fiscais, trabalhistas, consumeristas ou de qualquer outra natureza.</p>
                  <p>18.9.1. A CONCIERA não possui qualquer responsabilidade pelos danos ou prejuízos que o Usuário possa sofrer devido à contratação destes serviços de terceiros ou parceiros da CONCIERA.</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">19. INFORMAÇÕES PESSOAIS COLETADAS PELA PLATAFORMA CONCIERA</h3>
                  <p>19.1. O Usuário autoriza a CONCIERA a utilizar dados anônimos e agregados como insumos para o mapeamento de informações de mercado e formação de estatísticas em artigos, relatórios internos ou externos, ebooks ou outros tipos de publicação da CONCIERA.</p>
                  <p>19.2. Através do cadastramento, uso e fornecimento de informações à CONCIERA, o Usuário de forma expressa aceita o presente Termo e as condições previstas na Política de Privacidade sobre o uso de suas informações.</p>
                  <p>19.2.1. A CONCIERA ressalta que não terá acesso a quaisquer informações de Pacientes, cujo sigilo seja protegido pela legislação brasileira e pelas resoluções de categoria profissional.</p>
                  <p>19.3. Qualquer tentativa de intromissão ou atividade que viole ou contrarie as leis de direito de propriedade intelectual, de proteção de dados e/ou as proibições estipuladas neste Termo, tornarão o Usuário responsável passível das ações legais pertinentes, bem como das sanções aqui previstas, sendo ainda responsável pelas indenizações por eventuais danos causados.</p>
                  <p>19.4. O tratamento, sigilo e privacidade dos dados de seus Usuários e pessoas relacionadas pela CONCIERA encontra-se regulamentado em nossa Política de Privacidade, Sigilo e Proteção de Dados (“Política de Privacidade”), disponível em nosso site.</p>
                  <p>19.4.1. A Política de Privacidade da CONCIERA é parte integrante e indissociável deste Contrato, para todas as finalidades legais e contratuais cabíveis.</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">20. ATUALIZAÇÕES DA PLATAFORMA</h3>
                  <p>20.1. A CONCIERA pode atualizar, adicionar, interromper, alterar, remover ou suspender funcionalidades na Plataforma, a seu critério, sempre objetivando obter o melhor desempenho de seus Usuários, sem notificação prévia.</p>
                  <p>20.2. Caso o Usuário não concorde com as alterações realizadas na Plataforma, basta não renovar a sua assinatura para os períodos posteriores, ou solicitar o cancelamento dos serviços.</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">21. RESPONSABILIDADES E ALCANCE DOS SERVIÇOS</h3>
                  <p>21.1. Considerando que a CONCIERA é uma mera fornecedora online da Ferramenta para atendimento ao Paciente, caberá única e exclusivamente ao Usuário e aos seus Atendentes verificar a veracidade e situação das informações da sua agenda de atendimentos, e dos seus Pacientes nas Plataformas e aplicativos de trocas de mensagens instantâneas através das quais a CONCIERA atende aos Clientes ou Pacientes dos Usuários.</p>
                  <p>21.2. Os Usuários não poderão atribuir à CONCIERA nenhuma responsabilidade nem exigir o pagamento de indenização por danos ou lucros cessantes em virtude de prejuízos resultantes de dificuldades técnicas ou falhas nos sistemas ou na internet, tampouco por falhas decorrentes de “alucinações” da IA.</p>
                  <p>21.2.1. Eventualmente, a Plataforma CONCIERA poderá não estar disponível por motivos técnicos, por estar passando por manutenção ou falhas da internet, ou por qualquer outro evento fortuito ou de força maior alheio ao controle da CONCIERA, como indisponibilidade dos serviços e aplicativos de troca de mensagens instantâneas ou serviços de calendários, ou quaisquer outros sistemas com os quais a CONCIERA se integra.</p>
                  <p>21.3. Se houver dolo ou culpa comprovados, o Usuário e/ou Atendentes indenizarão a CONCIERA, suas filiais, empresas controladas ou controladoras, diretores, administradores, colaboradores, representantes e empregados por qualquer demanda promovida por outros Usuários ou terceiros decorrentes de atividades inapropriadas do Usuário e/ou Atendentes na Plataforma CONCIERA ou pelo descumprimento do presente Termo e demais políticas da CONCIERA, ou pela violação de qualquer lei ou direitos de terceiros, incluindo honorários advocatícios.</p>
                  <p>21.4. Em caso de interpelação judicial que tenha como réu a CONCIERA, cujos fatos fundem-se em ações do Usuário, este será chamado ao processo devendo arcar com todos os ônus que daí decorram, nos termos do artigo 338 e seguintes do Novo Código de Processo Civil.</p>
                  <p>21.5. A CONCIERA não se responsabiliza pelas obrigações tributárias, trabalhistas ou de qualquer outra natureza que recaiam sobre as atividades dos Usuários.</p>
                  <p>21.5. A CONCIERA não garante quaisquer resultados comerciais a seus Usuários e sua responsabilidade é restrita exclusivamente ao Objeto do presente Termo.</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">22. PRAZO E VIGÊNCIA</h3>
                  <p>22.1. O presente Termo possui prazo igual ao Período de Contratação do Plano selecionado por último pelo Usuário, entrando em vigor na data de seu aceite eletrônico e será automaticamente renovado enquanto o Usuário utilizar a Plataforma através da Assinatura ou renovação de novos Planos.</p>
                  <p>22.2. A CONCIERA poderá rescindir a prestação dos serviços objeto do presente Termo a qualquer momento, mediante comunicação expressa ao Usuário com até 30 (trinta) dias de antecedência, e este deverá quitar eventuais débitos existentes (custos, despesas, encargos operacionais) e/ou efetuar o pagamento de eventuais indenizações existentes decorrentes de lesão a terceiros por conta do mal-uso dos serviços pelo Usuário.</p>
                  <p>22.3. O presente Termo ainda poderá ser rescindido, de pleno direito, independentemente de qualquer notificação ou interpelação, judicial ou extrajudicial, nas seguintes hipóteses:</p>
                  <p>a) pela quebra de qualquer de suas disposições, por qualquer das Partes, de forma a impedir a continuidade da execução do objeto do mesmo;</p>
                  <p>b) se quaisquer das Partes, de qualquer forma, comprometer a imagem pública da CONCIERA e/ou de qualquer empresa associada a esta na prestação dos serviços;</p>
                  <p>c) se quaisquer das Partes utilizar de práticas que desrespeitem a lei, a ordem pública, a moral, os bons costumes ou, ainda, o presente Termo e a Política de Privacidade, e;</p>
                  <p>d) pelo não pagamento da remuneração referente aos serviços.</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">23. PROPRIEDADE INTELECTUAL</h3>
                  <p>23.1. O uso comercial da expressão “CONCIERA” como marca, nome empresarial ou nome de domínio, bem como os conteúdos, todas as criações protegidas pelo direito autoral e propriedade industrial, tais como telas relativas aos serviços disponíveis na Plataforma CONCIERA, programas, software s, imagens, processos, conteúdos, bancos de dados, redes e arquivos, que permitem que o Usuário acesse e use sua conta, são propriedade única e exclusiva da CONCIERA e estão protegidos pelas leis e tratados internacionais de direito autoral, marcas, patentes, modelos e desenhos industriais.</p>
                  <p>23.2. O uso indevido e a reprodução total ou parcial dos referidos conteúdos são proibidos, salvo quando autorizados expressamente pela CONCIERA.</p>
                  <p>23.3. Englobam-se nestas disposições todas e quaisquer melhorias, aperfeiçoamentos, correções, acréscimos ou alterações realizadas pela CONCIERA em seus produtos e serviços, inclusive quando executadas por sugestão ou recomendação dos Usuários.</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">24. PACIENTES ÚNICOS NO PERÍODO</h3>
                  <p>24.1. Os Pacientes Únicos no Período representam o número máximo de Pacientes Únicos que podem ser atendidos pela CONCIERA no período determinado pelo Plano escolhido na última Assinatura.</p>
                  <p>24.2. Se o número de Pacientes Únicos no Período atingir o limite de Pacientes Únicos contratados no Plano, a Ferramenta não funcionará para novos Pacientes dentro do período do Plano assinado, mas seguirá funcionando para Pacientes que já foram atendidos anteriormente dentro desse mesmo período.</p>
                  <p>24.3. Se o número de Pacientes Únicos atendidos no período for inferior ao número de Pacientes Únicos no Período disponibilizado pelo Plano contratado, o Usuário recebe um crédito equivalente ao número de Pacientes Únicos remanescentes para o próximo Período de Assinatura, válido por, no máximo, 12 (doze) meses.</p>
                  <p>24.4. Se houver Cancelamento da Assinatura, o crédito acumulado de Pacientes Únicos é perdido, ou seja, passa a ser zero, não sendo devido qualquer tipo de restituição ao usuário.</p>
                  <p>24.5. Os valores dos planos variam conforme a quantidade de Pacientes Únicos atendidos no Período de Contratação, portanto se um mesmo Paciente for atendido várias vezes em um mesmo Período de Contratação, ele será contabilizado apenas como 1 (um) Paciente Único.</p>
                  <p>24.5.1. Se este mesmo Paciente interagir no próximo Período de Contratação, ele será contabilizado novamente, sendo descontado novamente do seu total de Pacientes Únicos.</p>
                  <p>24.6. O crédito acumulado de Pacientes Únicos é de uso exclusivo de uma única conta individual na Plataforma CONCIERA. O crédito acumulado de Pacientes Únicos não pode ser transferido entre contas distintas na Plataforma CONCIERA, mesmo que essas duas contas pertençam a um Cliente único que possua o mesmo CPF ou o mesmo CNPJ.</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">25. DAS INTEGRAÇÕES PARA A PLATAFORMA WHATSAPP</h3>
                  <p>25.1. Os Planos da CONCIERA apresentam a funcionalidade da integração com o Whatsapp (https://www.whatsapp.com/), aplicativo de envio e recebimento de mensagens, arquivos e chamadas de voz.</p>
                  <p>25.2. A integração com o Whatsapp poderá ser fornecida pela CONCIERA por dois meios, à livre escolha do Usuário, via WhatsApp Business API (integração oficial do Whatsapp) ou via integrações não oficiais do Whatsapp. Diante da natureza dos serviços, a CONCIERA sempre recomenda o uso das integrações oficiais da Plataforma.</p>
                  <p>24.3. Cada modalidade de integração possui custos, taxas e procedimentos específicos, que serão apresentados ao Usuário na página de preços da CONCIERA ou no ato da contratação dos Planos.</p>
                  <p>25.4. A integração oficial do Whatsapp, também conhecida como WhatsApp Business API, pressupõe um serviço oficial do próprio Whatsapp, que disponibiliza a sua API para funcionamento de Plataformas integradas, como a CONCIERA. Assim, a própria Plataforma Whatsapp se responsabiliza, dentro dos limites de suas políticas e condições, pelos serviços vinculados à API de integração.</p>
                  <p>25.4.1. A opção pela integração oficial do Whatsapp implica na concordância, do Usuário, com as condições, políticas, prazos, preços e planos praticados pelo Whatsapp na prestação dos seus serviços.</p>
                  <p>25.5. A integração não oficial do Whatsapp pressupõe um serviço oferecido por terceiros para a integração com o próprio Whatsapp, que criam e disponibilizam API’s próprias para integrar o Whatsapp a outras Plataformas, como a CONCIERA. Assim, o responsável, dentro dos limites de suas políticas e condições, pelos serviços vinculados à API, é a empresa fornecedora da API não oficial.</p>
                  <p>25.5.1. O Usuário declara plena e expressa ciência que o uso da integração não oficial está sujeito à falha, vício ou impossibilidade de integração com WhatsApp, o que, por conseguinte, impedem o seu funcionamento integrado da CONCIERA com o Whatsapp; bem como está sujeito à total suspensão ou encerramento, sem qualquer aviso prévio, da prestação dos serviços de integração.</p>
                  <p>25.5.2. O Usuário declara expressamente que quaisquer falhas, vícios, interrupção ou defeitos na prestação dos serviços da API não oficial, que causem ou possam causar danos ao Usuário ou a terceiros, estão vinculados ao risco da atividade e não serão de responsabilidade da CONCIERA, por nenhuma hipótese.</p>
                  <p>25.6. Independente da utilização das integrações oficiais ou não oficiais do Whatsapp, o Usuário expressamente declara:</p>
                  <p>a) que a CONCIERA não possui qualquer responsabilidade por falhas, vícios, interrupção ou defeitos que possam ocorrer vinculadas aos serviços de integração com o Whatsapp;</p>
                  <p>b) que os serviços podem ser suspensos, interrompidos ou extintos a qualquer momento, de acordo com as condições e políticas dos seus fornecedores.</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">26. SEGURANÇA E EMERGÊNCIA</h3>
                  <p>26.1. Havendo qualquer emergência de segurança, caso fortuito ou força maior que coloque em risco a segurança empresarial e os dados dos Usuários ou Pacientes, a CONCIERA se reserva ao direito de suspender automaticamente o fornecimento dos seus Serviços.</p>
                  <p>26.2. A CONCIERA envidará esforços razoáveis para adequar a suspensão conforme necessário, a fim de evitar ou resolver a Emergência de segurança.</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">27. DA PROTEÇÃO DE DADOS</h3>
                  <p>27.1. Nos termos da Lei Federal n. 13.709/2018 (Lei Geral de Proteção de Dados), os titulares dos dados pessoais alimentados na Plataforma poderão obter da CONCIERA, mediante requisição: confirmação da existência de tratamento; acesso aos dados; correção de dados incompletos, inexatos ou desatualizados; anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto nesta Lei; portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa e observados os segredos comercial e industrial, de acordo com a regulamentação do órgão controlador; eliminação dos dados pessoais tratados com o consentimento do titular, exceto nas hipóteses previstas no art. 16 desta Lei; informação das entidades públicas e privadas com as quais o controlador realizou uso compartilhado de dados; informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa; revogação do consentimento.</p>
                  <p>27.2. A requisição acerca das informações tratadas deverá ser enviada para o endereço suporte@conciera.com.br, devendo constar no corpo do e-mail os dados de identificação do proprietário das informações (nome completo, data de nascimento, número no Cadastro de Pessoas Físicas – CPF e Registro Geral – RG) e cópia de documento pessoal com foto.</p>
                  <p>27.3. A CONCIERA garante o tratamento adequado de qualquer dado caracterizado como “sensível” na forma da Lei que seja solicitado pelos usuários finais.</p>
                  <p>27.4. O tratamento, sigilo e privacidade dos dados de seus Usuários e pessoas relacionadas pela CONCIERA encontra-se regulamentado em nossa Política de Privacidade, Sigilo e Proteção de Dados (“Política de Privacidade”), disponível em nosso site.</p>
                  <p>27.4.1. A Política de Privacidade da CONCIERA é parte integrante e indissociável deste Contrato, para todas as finalidades legais e contratuais cabíveis.</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">28. DISPOSIÇÕES GERAIS</h3>
                  <p>28.1. Os presentes Termos podem ser modificados pela CONCIERA a qualquer tempo e a seu único e exclusivo critério.</p>
                  <p>28.1.1. Os novos Termos entrarão em vigor 30 (trinta) dias após a publicação na Plataforma.</p>
                  <p>28.1.2. Caso o usuário não concorde com os novos termos de uso, ele deverá não assinar os Planos da CONCIERA para os períodos subsequentes, ou cancelar a sua assinatura.</p>
                  <p>28.2. Caso o Usuário promova uma nova assinatura do plano, entender-se-á que o Usuário aceitou tacitamente os novos Termos, que continuará vinculando as partes.</p>
                  <p>27.3. O Usuário expressamente aceita que a CONCIERA e/ou qualquer de seus parceiros enviem aos Usuários e aos seus Clientes ou Pacientes mensagens de e- mail de caráter informativo, referentes a comunicações específicas inerentes aos serviços prestados sob este Termo, bem como de natureza comercial, incluindo, entre outras, novidades na Plataforma CONCIERA.</p>
                  <p>28.3.1. Caso o Usuário ou seus Clientes ou Pacientes não deseje mais receber as referidas mensagens, poderá solicitar o cancelamento pelo link do próprio e- mail recebido.</p>
                  <p>28.4. A fim de manter e atender os últimos requisitos de mercado e de desenvolvimento tecnológicos, a CONCIERA poderá alterar, a seu critério, tanto em forma como em conteúdo, suspender ou cancelar, a seu exclusivo critério e a qualquer tempo, quaisquer dos serviços, produtos, utilidade ou aplicação, disponibilizados por si ou por terceiros, inclusive com relação aos serviços disponíveis na Ferramenta, citados no presente Termo.</p>
                  <p>28.5. A CONCIERA poderá ceder os serviços da Plataforma CONCIERA, no todo ou em parte, a empresas parceiras ou de seu grupo econômico, a qualquer momento.</p>
                  <p>28.5.1. Caso a cessão altere os serviços ou termos deste Termo, a CONCIERA deverá comunicar aos Usuários sobre a cessão, via e-mail ou comunicado na Plataforma.</p>
                  <p>28.6. Este Termo não implica ou significa, de nenhuma forma, qualquer Termo de sociedade, mandato, franquia ou relação de trabalho entre a CONCIERA e o Usuário.</p>
                  <p>28.7. Caso qualquer disposição, obrigação ou restrição destes Termos seja, por juízo competente ou outra autoridade, considerada inválida, nula ou inexequível, todos os demais termos, disposições, obrigações e restrições deverão permanecer em pleno vigor e efeito, não podendo ser de forma nenhuma afetados, prejudicados ou invalidados.</p>
                  <p>28.8. Todos os itens destes Termos são regidos pelas leis vigentes na República Federativa do Brasil.</p>
                  <p>28.9. Para todos os assuntos referentes à interpretação, ao cumprimento ou a qualquer outro questionamento relacionado a estes Termos, as partes concordam em se submeter ao Foro da Comarca de Nova Lima, Estado de Minas Gerais.</p>

                  <h3 className="text-lg font-bold text-foreground mt-6">29. DECLARAÇÕES FINAIS DE ASSINATURA</h3>
                  <p>29.1. O Usuário declara e concorda expressamente:</p>
                  <ul className="list-disc pl-5">
                    <li>ser maior de 18 anos e possuir capacidade jurídica, ou caso seja menor de 18 anos, ter expressa anuência de seus pais ou representantes legais;</li>
                    <li>em não utilizar os serviços objeto do presente Termo para quaisquer transações em desacordo com esses termos;</li>
                    <li>em notificar imediatamente a CONCIERA caso tome ciência de qualquer violação de segurança relacionada ao serviço;</li>
                    <li>ter condições financeiras de arcar com os pagamentos, custos e despesas decorrentes do presente Termo;</li>
                    <li>reconhecer que o presente Termo se formaliza, vinculando as Partes, com a sua aceitação eletrônica pelo Usuário, o que se fará explicitamente mediante o clique no botão ou checkbox “Aceito o Termo de Uso” ou implicitamente através do simples uso da Plataforma;</li>
                    <li>que leu e está ciente e de pleno acordo com todos os termos e condições do presente Termo, razão pela qual o aceita de livre e espontânea vontade.</li>
                  </ul>
                  <p>29.2. Assim, tendo em vista as cláusulas do presente Termo, o Usuário concorda integralmente com essas disposições, se comprometendo a respeitar as condições aqui previstas de forma irretratável e irrevogável, bem como a utilizar de modo proveitoso e legal os serviços a ele oferecidos.</p>
                  <p>29.3. O Usuário e a CONCIERA estarão sempre, e em qualquer hipótese, sujeitos à legislação brasileira.</p>
                  <p>29.4. Quaisquer dúvidas, sugestões ou reclamações a respeito dos presentes Termos e Condições Gerais de Uso poderão ser dirigidas ao e-mail suporte@conciera.com.br.</p>
                  <p>29.5. O presente termo de uso entrará em vigor a partir de 01 de janeiro de 2026.</p>
                  <p>Ficou alguma dúvida ou quer entrar em contato? Fale com um consultor ou nos contacte pelo e-mail suporte@conciera.com.br.</p>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Termos;
