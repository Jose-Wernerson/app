import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { companyInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Contato', path: '/contato' }
  ];

  const products = [
    { name: 'CNC AR 06-3D', path: 'href="https://wa.me/5514998442666"' },
    { name: 'CNC AR 08-3D', path: 'href="https://wa.me/5514998442666"' },
    // { name: 'Centro de Usinagem VMC-850', path: '/produtos/centro-usinagem-vmc-850' }
  ];

  const services = [
    { name: 'Instalação e Comissionamento', path: '/servicos#instalacao' },
    { name: 'Manutenção Preventiva', path: '/servicos#manutencao' },
    { name: 'Suporte Técnico', path: '/servicos#suporte' },
    { name: 'Consultoria em Automação', path: '/servicos#consultoria' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <Link to="/" className="flex items-center space-x-3 mb-4">
                <div>
                  <h3 className="text-xl font-black text-white tracking-tight">
                    {companyInfo.name}
                  </h3>
                  <p className="text-xs text-gray-400 -mt-1 tracking-wide">
                    MÁQUINAS INDUSTRIAIS
                  </p>
                </div>
              </Link>
              <p className="body-small text-gray-300 leading-relaxed">
                {companyInfo.description}
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="heading-6 text-white mb-4">Siga-nos</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-6 text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="body-small text-gray-300 hover:text-lime-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Services */}
          <div>
            <h4 className="heading-6 text-white mb-6">Produtos</h4>
            <ul className="space-y-3 mb-8">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    to={product.path}
                    className="body-small text-gray-300 hover:text-lime-400 transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="heading-6 text-white mb-6">Serviços</h4>
            <ul className="space-y-3">
              {services.slice(0, 2).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="body-small text-gray-300 hover:text-lime-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="heading-6 text-white mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-lime-400 mt-1 flex-shrink-0" />
                <p className="body-small text-gray-300">
                  {companyInfo.address}
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-lime-400 flex-shrink-0" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="body-small text-gray-300 hover:text-lime-400 transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-lime-400 flex-shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="body-small text-gray-300 hover:text-lime-400 transition-colors"
                >
                  {companyInfo.email}
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Clock size={18} className="text-lime-400 mt-1 flex-shrink-0" />
                <div className="body-small text-gray-300">
                  <p>Segunda à Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <a
                href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="body-small text-gray-400">
                © {currentYear} {companyInfo.fullName}. Todos os direitos reservados.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <Link to="/politica-privacidade" className="body-small text-gray-400 hover:text-lime-400 transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/termos-uso" className="body-small text-gray-400 hover:text-lime-400 transition-colors">
                Termos de Uso
              </Link>
              <p className="body-small text-gray-400">
                CNPJ: 46.354.264/0001-44
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;