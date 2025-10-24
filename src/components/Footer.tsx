import { Heart } from 'lucide-react';
import tatugoldLogo from '@/assets/tatugold-logo.png';

const Footer = () => {
  const quickLinks = [
    { name: "Início", href: "#hero-bg" },
    { name: "Sobre Nós", href: "#about" },
    { name: "Serviços", href: "#service" },
    { name: "Simulador", href: "#gold-simulator" },
    { name: "Localização", href: "#location" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <footer
      id="footer"
      className="bg-secondary text-secondary-foreground py-4"
      aria-labelledby="footer-title"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left gap-y-6 md:gap-y-0 mb-4">
          {/* Logo */}
          <div className="md:w-1/3 flex justify-center md:justify-start order-3 md:order-1">
            <img
              src={tatugoldLogo}
              alt="Tatugold - Mais que ouro. É identidade."
              className="w-[120px] h-auto"
            />
          </div>

          {/* Links rápidos */}
          <nav className="md:w-1/3 order-2 md:order-2" aria-label="Links rápidos">
            <h4 className="text-medium font-semibold mb-2 text-primary">Links Rápidos</h4>
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
          </nav>

          {/* Texto institucional */}
          <address className="md:w-1/3 order-1 md:order-3 not-italic">
            <p className="text-center text-secondary-foreground/80 leading-snug text-sm max-w-sm mx-auto md:hidden">
              <span className="text-gold-gradient font-semibold">Há mais de 20 anos no mercado de ouro, oferecendo</span> <span className="font-semibold">pagamento à vista</span>,
              <span className="font-semibold"> avaliação justa</span> e total transparência.<br />
              <span className="text-gold-gradient font-semibold">Resgatamos cautelas da Caixa Econômica Federal</span>,
              fabricamos <span className="font-semibold">joias e alianças sob medida</span> e
              <span className="text-gold-gradient font-semibold"> atendemos em domicílio</span> com segurança e discrição.
              Garantimos a melhor proposta do mercado — <span className="text-gold-gradient font-semibold">cobrimos qualquer oferta</span>.
            </p>

            <p className="hidden md:block text-secondary-foreground/80 leading-snug text-sm max-w-sm mx-auto md:mx-0">
              <span className="text-gold-gradient font-semibold">Há mais de 20 anos no mercado de ouro, oferecendo</span> <span className="font-semibold">pagamento à vista</span>,
              <span className="font-semibold"> avaliação justa</span> e total transparência.
              Resgatamos cautelas da <span className="text-gold-gradient font-semibold">Caixa Econômica Federal</span>,
              <span className="hidden md:inline">ㅤ</span>Fabricamos <span className="font-semibold">joias e alianças sob medida</span>
              <span className="hidden md:inline">ㅤㅤㅤㅤㅤ</span><span className="text-gold-gradient font-semibold">Atendemos em domicílio</span> com segurança e discrição.
              Garantimos a melhor proposta do mercado.<span className="hidden md:inline">ㅤㅤㅤㅤㅤ</span> <span className="text-gold-gradient font-semibold">Cobrimos qualquer oferta</span>.
            </p>
          </address>
        </div>

        {/* Rodapé inferior */}
        <div className="border-t border-secondary-foreground/20 pt-2">
          <small className="flex flex-col md:flex-row justify-center items-center text-center text-xs gap-y-1 md:gap-y-0">
            <span className="text-secondary-foreground/80 font-medium md:ml-4">
              Desenvolvido por <a
                href="https://devscud.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-devscud-epico"
              >
                DevScud
              </a> — Soluções digitais com identidade e propósito.
            </span>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
