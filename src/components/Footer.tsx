import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import tatugoldLogo from '@/assets/tatugold-logo.png';

const Footer = () => {
  const quickLinks = [
    { name: "Sobre Nós", href: "#about" },
    { name: "Catálogo", href: "#catalog" },
    { name: "Avaliação", href: "#services" },
    { name: "Contato", href: "#contact" },
    { name: "Serviços", href: "#service" },
    { name: "Simulador", href: "#simulador" },
  ];

  const features = [
    { icon: "💰", title: "Compra de Ouro", description: "Melhor preço garantido" },
    { icon: "💎", title: "Joias Personalizadas", description: "Criações exclusivas" },
    { icon: "🏆", title: "Atendimento Local", description: "20 anos no Tatuapé" }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground py-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Conteúdo principal em linha com espaçamento uniforme */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-6 text-left flex-wrap gap-6">
          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <img
              src={tatugoldLogo}
              alt="Tatugold - Mais que ouro. É identidade."
              className="w-[160px] md:w-[200px] h-auto"
            />
          </div>

          {/* Institucional - centralizado no bloco */}
          <div className="flex-1 flex items-center justify-center text-center h-[120px]">
            <p className="text-secondary-foreground/80 leading-relaxed text-sm max-w-md mx-auto">
              Há 20 anos transformando ouro em histórias e criando joias que marcam momentos especiais. Sua joia, sua identidade.
            </p>
          </div>

          {/* Links rápidos */}
          <div className="flex-1">
            <h4 className="text-lg font-semibold mb-2 text-primary">Links Rápidos</h4>
            <ul className="space-y-1">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      const section = document.getElementById(link.href.replace("#", ""));
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div className="flex-1">
            <h4 className="text-lg font-semibold mb-2 text-primary">Nossos Serviços</h4>
            <div className="space-y-1">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <span className="text-xl">{feature.icon}</span>
                  <div>
                    <h5 className="font-medium text-secondary-foreground text-sm">{feature.title}</h5>
                    <p className="text-xs text-secondary-foreground/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="border-t border-secondary-foreground/20 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-center md:text-left text-xs">
            <div className="text-secondary-foreground/60">
              © 2025 Tatugold. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-1 text-secondary-foreground/80">
              <span>Feito com</span>
              <Heart className="w-3 h-3 text-red-500 fill-current" />
              <span>para nossos clientes.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
