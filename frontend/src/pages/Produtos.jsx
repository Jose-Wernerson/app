import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search, ChevronRight, Star, ArrowRight } from 'lucide-react';
import { products } from '../mock';

const Produtos = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', ...new Set(products.map(product => product.category))];
  
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryLabel = (category) => {
    const labels = {
      'all': 'Todos os Produtos',
      'CNC': 'Máquinas CNC',
      'Torno': 'Tornos',
      'Centro de Usinagem': 'Centros de Usinagem'
    };
    return labels[category] || category;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-gray-900 to-black">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Nossos Produtos</h1>
            <p className="body-large text-gray-300 mb-8">
              Descubra nossa linha completa de máquinas industriais de alta precisão, desenvolvidas com tecnologia avançada para atender às demandas mais exigentes do mercado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#produtos"
                className="btn-primary"
              >
                Ver Catálogo
                <ChevronRight size={18} className="ml-2" />
              </a>
              <a
                href="/contato"
                className="btn-secondary"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section id="produtos" className="section-padding bg-gray-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            {/* Search */}
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center space-x-2 text-gray-300 mr-4">
                <Filter size={16} />
                <span className="caption">FILTRAR:</span>
              </div>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-lime-400 text-black'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {getCategoryLabel(category)}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="product-card">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover-scale"
                  />
                  {product.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-lime-400 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star size={14} />
                        <span>DESTAQUE</span>
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="heading-4 text-white mb-2">{product.name}</h3>
                    <p className="body-small text-gray-300 mb-4">{product.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="heading-6 text-lime-400">Especificações Principais:</h4>
                    {Object.entries(product.specifications).slice(0, 3).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="caption text-gray-400">{key.toUpperCase()}</span>
                        <span className="body-small text-white font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="heading-6 text-lime-400">Aplicações:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.slice(0, 3).map((app, idx) => (
                        <span key={idx} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                          {app}
                        </span>
                      ))}
                      {product.applications.length > 3 && (
                        <span className="text-lime-400 text-xs">+{product.applications.length - 3} mais</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700 flex justify-between items-center">
                    <div>
                      <span className="caption text-gray-400">PREÇO</span>
                      <div className="heading-5 text-lime-400">{product.price}</div>
                    </div>
                    <Link 
                      to={`/produtos/${product.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
                      className="btn-secondary text-sm px-4 py-2"
                    >
                      Ver Detalhes
                      <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-gray-400" />
              </div>
              <h3 className="heading-4 text-white mb-4">Nenhum produto encontrado</h3>
              <p className="body-medium text-gray-400 mb-8">
                Tente ajustar seus filtros ou termo de busca.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
                className="btn-secondary"
              >
                Limpar Filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Por Que Escolher a MDX?</h2>
            <p className="body-large text-gray-300 max-w-3xl mx-auto">
              Nossos produtos são desenvolvidos com os mais altos padrões de qualidade e tecnologia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-black font-bold text-2xl">±0.005</span>
              </div>
              <h3 className="heading-5 text-white mb-4">Alta Precisão</h3>
              <p className="body-small text-gray-300">
                Precisão de até ±0.005mm garantindo qualidade excepcional em cada peça usinada.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-black font-bold text-lg">24/7</span>
              </div>
              <h3 className="heading-5 text-white mb-4">Suporte Total</h3>
              <p className="body-small text-gray-300">
                Suporte técnico especializado disponível 24 horas por dia, 7 dias por semana.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-black font-bold text-lg">ISO</span>
              </div>
              <h3 className="heading-5 text-white mb-4">Qualidade Certificada</h3>
              <p className="body-small text-gray-300">
                Produtos certificados ISO 9001:2015 garantindo os mais altos padrões de qualidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6">Interessado em Nossos Produtos?</h2>
            <p className="body-large text-gray-300 mb-8">
              Entre em contato conosco para receber um orçamento personalizado e descobrir como nossas máquinas podem otimizar sua produção.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato" className="btn-primary">
                Solicitar Orçamento
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <a
                href={`https://wa.me/${require('../mock').companyInfo.whatsapp.replace(/\D/g, '')}`}
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

export default Produtos;