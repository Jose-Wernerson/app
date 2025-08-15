// Mock data for MDX Industrial Machines Website

export const companyInfo = {
  name: "MDX",
  fullName: "MDX Máquinas Industriais",
  tagline: "Tecnologia em Máquinas Industriais Automatizadas",
  description: "Especializada em fabricação de máquinas CNC e equipamentos industriais de alta precisão para automação industrial.",
  mission: "Desenvolver soluções industriais inovadoras que aumentem a produtividade e precisão dos nossos clientes.",
  vision: "Ser referência nacional em fabricação de máquinas industriais automatizadas.",
  values: ["Inovação", "Qualidade", "Precisão", "Confiabilidade"],
  founded: "2022",
  location: "Bauru, SP - Brasil",
  phone: "+55 (14) 9827-2111",
  email: "mdxmaquinas@gmail.com",
  whatsapp: "+5514998442666",
  address: "Rua riachuelo, 4-8 - vila santa ines, bauru - SP"
};

export const products = [
  {
    id: 1,
    name: "CNC AR 06-3D",
    category: "CNC",
    image: "/img/CNC AR 06-D3.png",
    description: "Máquina CNC de alta precisão para usinagem 3D com controle automatizado avançado.",
    specifications: {
      "Área de Trabalho": "600 x 400 x 200 mm",
      "Precisão": "±0.005 mm",
      "Rotação do Spindle": "24.000 RPM",
      "Potência": "5.5 kW",
      "Controle": "Sistema CNC FANUC"
    },
    applications: ["Usinagem de precisão", "Prototipagem", "Produção seriada", "Moldes e matrizes"],
    price: "Consulte",
    featured: true
  },
  {
    id: 2,
    name: "CNC AR 08-3D",
    category: "CNC",
    image: "/img/CNC AR 08-3D.png",
    description: "Máquina CNC de alta precisão para usinagem 3D com controle automatizado avançado.",
    specifications: {
      "Área de Trabalho": "800 x 400 x 200 mm",
      "Precisão": "±0.005 mm",
      "Rotação do Spindle": "36.000 RPM",
      "Potência": "5.5 kW",
      "Controle": "Sistema CNC FANUC"
    },
    applications: ["Usinagem de precisão", "Prototipagem", "Produção seriada", "Moldes e matrizes"],
    price: "Consulte",
    featured: true
  },
  
];

export const services = [
  {
    id: 1,
    title: "Instalação e Comissionamento",
    description: "Instalação completa das máquinas com comissionamento técnico e treinamento operacional.",
    icon: "Settings",
    features: ["Instalação profissional", "Comissionamento técnico", "Treinamento de operadores", "Documentação completa"]
  },
  {
    id: 2,
    title: "Manutenção Preventiva",
    description: "Programa completo de manutenção preventiva para garantir máxima produtividade.",
    icon: "Wrench",
    features: ["Cronograma personalizado", "Peças originais", "Técnicos especializados", "Relatórios detalhados"]
  },
  {
    id: 3,
    title: "Suporte Técnico",
    description: "Suporte técnico especializado com atendimento presencial e remoto.",
    icon: "Headphones",
    features: ["Atendimento 24/7", "Suporte remoto", "Diagnóstico avançado", "Solução rápida"]
  },
  {
    id: 4,
    title: "Consultoria em Automação",
    description: "Consultoria especializada em automação industrial e otimização de processos.",
    icon: "Target",
    features: ["Análise de processos", "Projeto de automação", "Otimização produtiva", "ROI garantido"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    company: "Metalúrgica São Paulo",
    role: "Diretor de Produção",
    content: "As máquinas MDX revolucionaram nossa produção. A precisão e confiabilidade são excepcionais.",
    rating: 5
  },
  {
    id: 2,
    name: "Ana Santos",
    company: "Indústria Precision Tech",
    role: "Gerente de Operações",
    content: "Excelente suporte técnico e máquinas de alta qualidade. Recomendo a MDX para qualquer projeto industrial.",
    rating: 5
  },
  {
    id: 3,
    name: "Roberto Lima",
    company: "AutoParts Brasil",
    role: "Engenheiro de Processo",
    content: "A CNC AR 06-3D superou nossas expectativas. Produtividade aumentou 40% com a implementação.",
    rating: 5
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Como escolher uma máquina CNC para sua indústria",
    excerpt: "Guia completo para selecionar a máquina CNC ideal baseado nas necessidades específicas da sua produção.",
    date: "2024-12-15",
    category: "Guias Técnicos",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    title: "Automação industrial: tendências para 2025",
    excerpt: "Descubra as principais tendências em automação industrial e como elas podem impactar sua produção.",
    date: "2024-12-10",
    category: "Tendências",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2125&q=80"
  },
  {
    id: 3,
    title: "Manutenção preventiva: o segredo da alta produtividade",
    excerpt: "Entenda como um programa de manutenção preventiva pode aumentar a vida útil e produtividade das suas máquinas.",
    date: "2024-12-05",
    category: "Manutenção",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1565025755416-1c3faa50bbe4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
  }
];

export const certifications = [
  {
    name: "ISO 9001:2015",
    description: "Certificação de qualidade internacional"
  },
  {
    name: "CE Marking",
    description: "Conformidade europeia para equipamentos"
  },
  {
    name: "ABNT NBR",
    description: "Normas brasileiras de segurança industrial"
  }
];

export const stats = [
  {
    number: "500+",
    label: "Máquinas Instaladas",
    description: "Em todo território nacional"
  },
  {
    number: "3+",
    label: "Anos de Experiência",
    description: "No mercado industrial"
  },
  {
    number: "200+",
    label: "Clientes Ativos",
    description: "Satisfeitos com nossos produtos"
  },
  {
    number: "24/7",
    label: "Suporte Técnico",
    description: "Disponível todos os dias"
  }
];