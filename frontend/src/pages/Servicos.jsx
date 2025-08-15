import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Wrench, Headphones, Target, CheckCircle, ArrowRight, Clock, Award, Users, Phone } from 'lucide-react';
import { services, companyInfo } from '../mock';

const Servicos = () => {
  const iconMap = {
    Settings,
    Wrench,
    Headphones,
    Target
  };

  const processSteps = [
    {
      number: "01",
      title: "Consulta Inicial",
      description: "Análise detalhada das suas necessidades e especificações técnicas."
    },
    {
      number: "02",
      title: "Proposta Técnica",
      description: "Elaboração de proposta personalizada com cronograma e especificações."
    },
    {
      number: "03",
      title: "Execução",
      description: "Implementação do serviço por nossa equipe técnica especializada."
    },
    {
      number: "04",
      title: "Acompanhamento",
      description: "Monitoramento contínuo e suporte para garantir resultados otimizados."
    }
  ];

  const supportBenefits = [
    {
      icon: Clock,
      title: "Resposta Rápida",
      description: "Atendimento em até 2 horas para emergências"
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Técnicos certificados e treinados em nossas máquinas"
    },
    {
      icon: Award,
      title: "Garantia Estendida",
      description: "Cobertura completa com peças originais"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-gray-900 to-black">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Nossos Serviços</h1>
            <p className="body-large text-gray-300 mb-8">
              Oferecemos suporte completo para maximizar a produtividade das suas máquinas industriais. Da instalação à manutenção, nossa equipe especializada garante operação contínua e eficiente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#servicos"
                className="btn-primary"
              >
                Conheça Nossos Serviços
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a
                href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Serviços Especializados</h2>
            <p className="body-large text-gray-300 max-w-3xl mx-auto">
              Nossa equipe técnica oferece soluções completas para manter suas máquinas operando com máxima eficiência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div key={service.id} className="service-card text-left">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent size={32} className="text-black" />
                    </div>
                    <div>
                      <h3 className="heading-4 text-white mb-2">{service.title}</h3>
                      <p className="body-small text-gray-300">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="heading-6 text-lime-400">Inclui:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle size={16} className="text-lime-400 flex-shrink-0" />
                          <span className="body-small text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-700">
                    <a
                      href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-lime-400 hover:text-lime-300 transition-colors"
                    >
                      Solicitar Orçamento
                      <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Nosso Processo</h2>
            <p className="body-large text-gray-300 max-w-3xl mx-auto">
              Seguimos um processo estruturado para garantir que cada serviço seja executado com excelência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-lime-400 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-black font-bold text-xl">{step.number}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-lime-400 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="heading-5 text-white mb-4">{step.title}</h3>
                <p className="body-small text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Benefits */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Vantagens do Nosso Suporte</h2>
            <p className="body-large text-gray-300 max-w-3xl mx-auto">
              Oferecemos suporte técnico diferenciado para garantir que suas máquinas operem sempre com máxima eficiência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
                  <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent size={32} className="text-black" />
                  </div>
                  <h3 className="heading-5 text-white mb-4">{benefit.title}</h3>
                  <p className="body-small text-gray-300">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="section-padding bg-gray-900">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-8 mb-8">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone size={32} className="text-white" />
              </div>
              <h2 className="heading-3 text-white mb-4">Suporte de Emergência 24/7</h2>
              <p className="body-medium text-gray-300 mb-6">
                Para situações de emergência, nossa equipe está disponível 24 horas por dia, 7 dias por semana. 
                Ligue agora e receba atendimento imediato.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="btn-primary bg-red-500 hover:bg-red-600"
                >
                  Ligar Agora: {companyInfo.phone}
                </a>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary border-red-500 text-red-400 hover:bg-red-500 hover:text-white"
                >
                  WhatsApp Emergência
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Planos de Manutenção</h2>
            <p className="body-large text-gray-300 max-w-3xl mx-auto">
              Escolha o plano de manutenção que melhor se adequa às necessidades da sua empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-8">
              <div className="text-center mb-6">
                <h3 className="heading-4 text-white mb-2">Básico</h3>
                <p className="body-small text-gray-400 mb-4">Para pequenas operações</p>
                <div className="heading-2 text-lime-400">Consulte</div>
                <p className="caption text-gray-400">Preço por máquina/mês</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-lime-400" />
                  <span className="body-small text-gray-300">Manutenção preventiva mensal</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-lime-400" />
                  <span className="body-small text-gray-300">Suporte técnico por telefone</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-lime-400" />
                  <span className="body-small text-gray-300">Relatórios básicos</span>
                </li>
              </ul>
              
              <a href="/contato" className="btn-secondary w-full">
                Escolher Plano
              </a>
            </div>

            {/* Professional Plan */}
            <div className="bg-gray-800 rounded-xl border-2 border-lime-400 p-8 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-lime-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  RECOMENDADO
                </span>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="heading-4 text-white mb-2">Profissional</h3>
                <p className="body-small text-gray-400 mb-4">Para médias empresas</p>
                <div className="heading-2 text-lime-400">Consulte</div>
                <p className="caption text-gray-400">Preço por máquina/mês</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-lime-400" />
                  <span className="body-small text-gray-300">Manutenção preventiva quinzenal</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-lime-400" />
                  <span className="body-small text-gray-300">Suporte técnico prioritário</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-lime-400" />
                  <span className="body-small text-gray-300">Atendimento presencial</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-lime-400" />
                  <span className="body-small text-gray-300">Relatórios detalhados</span>
                </li>
              </ul>
              
              <a href="/contato" className="btn-primary w-full">
                Escolher Plano
              </a>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-8">
              <div className="text-center mb-6">
                <h3 className="heading-4 text-white mb-2">Empresarial</h3>
                <p className="body-small text-gray-400 mb-4">Para grandes indústrias</p>
                <div className="heading-2 text-lime-400">Consulte</div>
                <p className="caption text-gray-400">Plano personalizado</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-lime-400" />
                  <span className="body-small text-gray-300">Manutenção preventiva semanal</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-lime-400" />
                  <span className="body-small text-gray-300">Suporte 24/7 dedicado</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-lime-400" />
                  <span className="body-small text-gray-300">Técnico residente</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-lime-400" />
                  <span className="body-small text-gray-300">Monitoramento remoto</span>
                </li>
              </ul>
              
              <a href="/contato" className="btn-secondary w-full">
                Solicitar Proposta
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6">Precisa de Suporte Técnico?</h2>
            <p className="body-large text-gray-300 mb-8">
              Nossa equipe de especialistas está pronta para atender suas necessidades. Entre em contato e receba atendimento personalizado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato" className="btn-primary">
                Solicitar Serviço
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <a
                href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicos;