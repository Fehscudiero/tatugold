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
    {
      icon: "💰",
      title: "Compra de Ouro",
      description: "Melhor preço garantido"
    },
    {
      icon: "💎",
      title: "Joias Personalizadas",
      description: "Criações exclusivas"
    },
    {
      icon: "🏆",
      title: "Atendimento Local",
      description: "20 anos no Tatuapé"
    }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo centralizado */}
        <div className="flex justify-center mb-10">
          <img
            src={tatugoldLogo}
            alt="Tatugold - Mais que ouro. É identidade."
            className="w-[180px] md:w-[220px] h-auto"
          />
        </div>

        {/* Grid de conteúdo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12 text-center lg:text-left">
          {/* Institucional */}
          <div>
            <p className="text-secondary-foreground/80 leading-relaxed text-sm">
              Há 20 anos transformando ouro em histórias e criando joias que marcam momentos especiais.
              Sua joia, sua identidade.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-primary">Links Rápidos</h4>
            <ul className="space-y-3">
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
          <div>
            <h4 className="text-xl font-semibold mb-6 text-primary">Nossos Serviços</h4>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 justify-center lg:justify-start">
                  <span className="text-2xl">{feature.icon}</span>
                  <div className="text-left">
                    <h5 className="font-medium text-secondary-foreground">{feature.title}</h5>
                    <p className="text-sm text-secondary-foreground/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <div className="text-secondary-foreground/60 text-sm">
              © 2025 Tatugold. Todos os direitos reservados.
            </div>

            <div className="flex items-center space-x-2 text-secondary-foreground/80 text-sm">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>para nossos clientes.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
