import { Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: "Catálogo", href: "#catalog" },
    { name: "Avaliação", href: "#services" },
    { name: "Sobre Nós", href: "#about" },
    { name: "Contato", href: "#contact" },
    { name: "Política de Privacidade", href: "#privacy" }
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gold-gradient">Tatugold</h3>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              Há 20 anos transformando ouro em histórias e criando joias que marcam momentos especiais. 
              Sua joia, sua identidade.
            </p>
            <p className="text-sm text-secondary-foreground/60">
              Rua Soriano de Souza, 190 - Tatuapé, São Paulo
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Nossos Serviços</h4>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <h5 className="font-medium text-secondary-foreground">{feature.title}</h5>
                    <p className="text-sm text-secondary-foreground/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary-foreground/60 text-sm">
              © 2024 Tatugold. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-2 text-secondary-foreground/80">
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