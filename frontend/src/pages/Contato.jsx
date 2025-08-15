import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, User, MessageSquare, Building, ArrowRight } from 'lucide-react';
import { companyInfo } from '../mock';
import { useToast } from '../hooks/use-toast';

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Orçamento de Produto',
    'Instalação e Comissionamento',
    'Manutenção Preventiva',
    'Suporte Técnico',
    'Consultoria em Automação',
    'Outro'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    try {
      // Mock successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em até 24 horas.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        service: ''
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato pelo telefone.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-gray-900 to-black">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Entre em Contato</h1>
            <p className="body-large text-gray-300 mb-8">
              Estamos prontos para atender suas necessidades em máquinas industriais. Fale conosco e receba atendimento especializado.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={32} className="text-black" />
                </div>
                <h3 className="heading-5 text-white mb-2">Ligue Agora</h3>
                <p className="body-small text-gray-300">{companyInfo.phone}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={32} className="text-black" />
                </div>
                <h3 className="heading-5 text-white mb-2">Envie um E-mail</h3>
                <p className="body-small text-gray-300">{companyInfo.email}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare size={32} className="text-black" />
                </div>
                <h3 className="heading-5 text-white mb-2">WhatsApp</h3>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-small text-lime-400 hover:text-lime-300 transition-colors"
                >
                  Conversar Agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="heading-2 mb-6">Solicite um Orçamento</h2>
              <p className="body-medium text-gray-300 mb-8">
                Preencha o formulário abaixo e nossa equipe entrará em contato para oferecer a melhor solução para sua empresa.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block heading-6 text-white mb-2">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                        placeholder="Seu nome completo"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block heading-6 text-white mb-2">
                      E-mail *
                    </label>
                    <div className="relative">
                      <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block heading-6 text-white mb-2">
                      Telefone *
                    </label>
                    <div className="relative">
                      <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block heading-6 text-white mb-2">
                      Empresa
                    </label>
                    <div className="relative">
                      <Building size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block heading-6 text-white mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block heading-6 text-white mb-2">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                    placeholder="Qual é o assunto da sua mensagem?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block heading-6 text-white mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent resize-none"
                    placeholder="Descreva detalhadamente sua necessidade..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </button>

                <p className="body-small text-gray-400 text-center">
                  Ao enviar este formulário, você concorda com nossa política de privacidade.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="heading-2 mb-6">Informações de Contato</h2>
                <p className="body-medium text-gray-300 mb-8">
                  Nossa equipe está sempre disponível para atender suas necessidades. Entre em contato através dos canais abaixo.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="heading-5 text-white mb-2">Endereço</h3>
                    <p className="body-small text-gray-300">{companyInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="heading-5 text-white mb-2">Telefone</h3>
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="body-small text-lime-400 hover:text-lime-300 transition-colors"
                    >
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="heading-5 text-white mb-2">E-mail</h3>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="body-small text-lime-400 hover:text-lime-300 transition-colors"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="heading-5 text-white mb-2">Horário de Funcionamento</h3>
                    <div className="body-small text-gray-300 space-y-1">
                      <p>Segunda à Sexta: 8h às 18h</p>
                      <p>Sábado: 8h às 12h</p>
                      <p className="text-lime-400">Suporte 24/7 para emergências</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="heading-5 text-white mb-4">Contato Rápido</h3>
                <p className="body-small text-gray-300 mb-6">
                  Precisa de atendimento imediato? Use nossos canais de contato direto.
                </p>
                
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full"
                  >
                    WhatsApp
                    <ArrowRight size={18} className="ml-2" />
                  </a>
                  
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="btn-secondary w-full"
                  >
                    Ligar Agora
                    <Phone size={18} className="ml-2" />
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-lime-400/10 border border-lime-400/30 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle size={24} className="text-lime-400" />
                  <h3 className="heading-5 text-lime-400">Tempo de Resposta</h3>
                </div>
                <div className="space-y-2 body-small text-gray-300">
                  <p>• E-mail: até 4 horas úteis</p>
                  <p>• WhatsApp: até 30 minutos</p>
                  <p>• Telefone: atendimento imediato</p>
                  <p>• Emergências: resposta em 2 horas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-900">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6">Nossa Localização</h2>
            <p className="body-large text-gray-300 max-w-3xl mx-auto">
              Visite nossa sede em São Paulo e conheça de perto nossas instalações e máquinas em funcionamento.
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl overflow-hidden">
            <div className="h-96 bg-gray-700 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-lime-400 mx-auto mb-4" />
                <h3 className="heading-5 text-white mb-2">Mapa Interativo</h3>
                <p className="body-small text-gray-300 mb-4">
                  {companyInfo.address}
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Ver no Google Maps
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;