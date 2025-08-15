import React from 'react';
import { Award, Users, Cog, Target, CheckCircle, ArrowRight } from 'lucide-react';
import { companyInfo, stats, certifications } from '../mock';

const Sobre = () => {
  const values = [
    {
      icon: Target,
      title: "Inovação",
      description: "Desenvolvimento constante de tecnologias avançadas para automação industrial."
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Produtos certificados e testados seguindo os mais altos padrões de qualidade."
    },
    {
      icon: Cog,
      title: "Precisão",
      description: "Máquinas desenvolvidas para garantir precisão absoluta em cada operação."
    },
    {
      icon: Users,
      title: "Confiabilidade",
      description: "Parceria sólida com nossos clientes, oferecendo suporte completo e duradouro."
    }
  ];

  const timeline = [
    {
      year: "2022",
      title: "Fundação da MDX",
      description: "Início das operações com foco em máquinas CNC de precisão."
    },
    {
      year: "2013",
      title: "Primeira Certificação ISO",
      description: "Conquista da certificação ISO 9001, consolidando nosso compromisso com a qualidade."
    },
    {
      year: "2016",
      title: "Expansão da Linha de Produtos",
      description: "Lançamento de centros de usinagem e tornos CNC automatizados."
    },
    {
      year: "2019",
      title: "Centro de Pesquisa e Desenvolvimento",
      description: "Inauguração do nosso centro de P&D para inovação contínua."
    },
    {
      year: "2022",
      title: "500ª Máquina Instalada",
      description: "Marco histórico com mais de 500 máquinas instaladas em todo o Brasil."
    },
    {
      year: "2024",
      title: "Tecnologia 4.0",
      description: "Implementação de IoT e automação avançada em toda linha de produtos."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-gray-900 to-black">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Sobre a MDX</h1>
            <p className="body-large text-gray-300 mb-8">
              {companyInfo.description} Fundada em {companyInfo.founded}, somos referência nacional em máquinas industriais de alta precisão.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="heading-2 text-lime-400 mb-2">{stat.number}</div>
                  <div className="body-small font-semibold text-white mb-1">{stat.label}</div>
                  <div className="caption text-gray-400">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <Target size={32} className="text-black" />
              </div>
              <h3 className="heading-3 mb-4">Nossa Missão</h3>
              <p className="body-medium text-gray-300">
                {companyInfo.mission}
              </p>
            </div>

            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <Award size={32} className="text-black" />
              </div>
              <h3 className="heading-3 mb-4">Nossa Visão</h3>
              <p className="body-medium text-gray-300">
                {companyInfo.vision}
              </p>
            </div>

            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <Users size={32} className="text-black" />
              </div>
              <h3 className="heading-3 mb-4">Nossos Valores</h3>
              <ul className="space-y-2">
                {companyInfo.values.map((value, index) => (
                  <li key={index} className="flex items-center justify-center lg:justify-start space-x-2">
                    <CheckCircle size={16} className="text-lime-400" />
                    <span className="body-medium text-gray-300">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Nossos Diferenciais</h2>
            <p className="body-large text-gray-300 max-w-3xl mx-auto">
              Conheça os pilares que sustentam nossa excelência em fabricação de máquinas industriais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-lime-400 transition-all duration-300">
                  <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent size={32} className="text-black" />
                  </div>
                  <h3 className="heading-5 text-white mb-4">{value.title}</h3>
                  <p className="body-small text-gray-300">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Nossa História</h2>
            <p className="body-large text-gray-300 max-w-3xl mx-auto">
              Uma jornada de mais de uma década construindo o futuro da automação industrial no Brasil.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-lime-400"></div>

              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center">
                          <span className="text-black font-bold text-sm">{item.year}</span>
                        </div>
                        <h3 className="heading-5 text-white ml-4">{item.title}</h3>
                      </div>
                      <p className="body-small text-gray-300">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-lime-400 rounded-full border-4 border-black"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Certificações e Qualidade</h2>
            <p className="body-large text-gray-300 max-w-3xl mx-auto">
              Nosso compromisso com a excelência é comprovado através de certificações internacionais e nacionais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-8 bg-gray-800 rounded-xl border border-gray-700">
                <div className="w-20 h-20 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award size={40} className="text-black" />
                </div>
                <h3 className="heading-5 text-white mb-4">{cert.name}</h3>
                <p className="body-small text-gray-300">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6">Conheça Nossos Produtos</h2>
            <p className="body-large text-gray-300 mb-8">
              Descubra como nossas máquinas industriais podem transformar sua produção com tecnologia de ponta e qualidade comprovada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/produtos"
                className="btn-primary"
              >
                Ver Produtos
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
    </div>
  );
};

export default Sobre;