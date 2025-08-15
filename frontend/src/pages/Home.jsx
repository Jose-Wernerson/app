import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Wrench, Headphones, Target, Star, ChevronRight, Play, Award, Users, Clock, CheckCircle } from 'lucide-react';
import { companyInfo, products, services, testimonials, stats, certifications } from '../mock';

const Home = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const iconMap = {
    Settings,
    Wrench,
    Headphones,
    Target
  };

  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 fade-in">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full">
                  <Award size={16} className="text-lime-400" />
                  <span className="caption text-gray-300">EXPERIÊNCIA COMPROVADA </span>
                </div>

                <h1 className="brand-display">
                  {companyInfo.tagline}
                </h1>

                <p className="body-large text-gray-300 max-w-2xl">
                  Fabricamos máquinas CNC e equipamentos industriais de alta precisão para automação industrial.
                  Qualidade, inovação e confiabilidade em cada projeto.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/produtos" className="btn-primary">
                  Ver Produtos
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Solicitar Orçamento
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-gray-800">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="heading-3 text-lime-400">{stat.number}</div>
                    <div className="body-small font-semibold text-white">{stat.label}</div>
                    <div className="caption text-gray-400">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:h-[550px] fade-in-delay-1">
              <div className="lg:absolute lg:top-0 lg:left-0 lg:-translate-x-[-170px] lg:-translate-y-[150px] rounded-2xl overflow-hidden w-full max-w-[600px] mx-auto">
                <iframe
                  src="https://www.youtube.com/embed/AchaiSamF0M?autoplay=1&mute=1&controls=0&loop=1&playlist=AchaiSamF0M&modestbranding=1&rel=0"
                  title="Máquina CNC MDX em operação"
                  className="w-full h-[500px] object-cover"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className={`section-padding scroll-reveal ${isVisible.products ? 'revealed' : ''}`}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Nossos Produtos em Destaque</h2>
            <p className="body-large text-gray-300 max-w-3xl mx-auto">
              Máquinas industriais de alta precisão desenvolvidas com tecnologia avançada para atender às demandas mais exigentes do mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className={`product-card fade-in-delay-${index + 1}`}>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover-scale"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-lime-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      DESTAQUE
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="heading-4 text-white mb-2">{product.name}</h3>
                    <p className="body-small text-gray-300 mb-4">{product.description}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="caption text-gray-400">PRECISÃO</span>
                      <span className="body-small text-lime-400 font-semibold">
                        {product.specifications['Precisão']}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="caption text-gray-400">ÁREA DE TRABALHO</span>
                      <span className="body-small text-white">
                        {product.specifications['Área de Trabalho'] || product.specifications['Diâmetro máximo']}
                      </span>
                    </div>
                  </div>

                  {/* <div className="pt-4 border-t border-gray-700">
                    <Link
                      to={`/produtos/${product.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
                      className="inline-flex items-center text-lime-400 hover:text-lime-300 transition-colors"
                    >
                      Ver Detalhes
                      <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/produtos" className="btn-secondary">
              Ver Todos os Produtos
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`section-padding bg-gray-900 scroll-reveal ${isVisible.services ? 'revealed' : ''}`}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Nossos Serviços</h2>
            <p className="body-large text-gray-300 max-w-3xl mx-auto">
              Oferecemos suporte completo desde a instalação até a manutenção, garantindo máxima produtividade das suas máquinas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div key={service.id} className={`service-card fade-in-delay-${index + 1}`}>
                  <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent size={32} className="text-black" />
                  </div>

                  <h3 className="heading-5 text-white mb-4">{service.title}</h3>
                  <p className="body-small text-gray-300 mb-6">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-lime-400 flex-shrink-0" />
                        <span className="body-small text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/servicos" className="btn-primary">
              Conheça Nossos Serviços
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`section-padding scroll-reveal ${isVisible.testimonials ? 'revealed' : ''}`}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">O Que Nossos Clientes Dizem</h2>
            <p className="body-large text-gray-300 max-w-3xl mx-auto">
              Veja os depoimentos de empresas que confiam na qualidade e eficiência das máquinas MDX.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className={`bg-gray-800 p-8 rounded-xl border border-gray-700 fade-in-delay-${index + 1}`}>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-lime-400 fill-current" />
                  ))}
                </div>

                <p className="body-medium text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center">
                    <Users size={24} className="text-black" />
                  </div>
                  <div>
                    <h4 className="heading-6 text-white">{testimonial.name}</h4>
                    <p className="body-small text-gray-400">{testimonial.role}</p>
                    <p className="caption text-lime-400">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 border-t border-gray-800">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6">Pronto para Automatizar sua Produção?</h2>
            <p className="body-large text-gray-300 mb-8">
              Entre em contato conosco e descubra como nossas máquinas industriais podem revolucionar sua linha de produção com mais precisão, eficiência e qualidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Fale Conosco pelo WhatsApp
              </a>
              <Link to="/contato" className="btn-secondary">
                Solicitar Orçamento Detalhado
              </Link>
            </div>

            {/* Certifications */}
            <div className="mt-16 pt-12 border-t border-gray-800">
              <h3 className="heading-5 text-white mb-8">Certificações e Qualidade</h3>
              <div className="flex flex-wrap justify-center items-center gap-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-3">
                      <Award size={28} className="text-lime-400" />
                    </div>
                    <h4 className="heading-6 text-white">{cert.name}</h4>
                    <p className="caption text-gray-400">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;