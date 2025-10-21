import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import {
  DollarSign,
  Gem,
  Search,
  RefreshCw,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import lunetaImage from '@/assets/luneta.png';

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const whatsappNumber = "5511972801984";

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    {
      icon: DollarSign,
      title: "Compra de Ouro",
      description: (
        <span>
          Avaliação justa e pagamento imediato com total transparência
        </span>
      ),
      popular: true,
      message: "Olá, tenho interesse na Compra de Ouro. Gostaria de saber mais sobre avaliação justa e pagamento imediato."
    },
    {
      icon: Gem,
      title: "Joias Personalizadas",
      description: (
        <span>
          Criações exclusivas sob medida para refletir sua identidade
        </span>
      ),
      popular: true,
      message: "Olá, gostaria de saber mais sobre Joias Personalizadas e como funcionam as criações sob medida."
    },
    {
      icon: Search,
      title: "Avaliação Gratuita",
      description: (
        <span>
          Descubra o valor real das suas joias sem compromisso
        </span>
      ),
      message: "Olá, quero fazer uma Avaliação Gratuita das minhas peças. Como funciona?"
    },
    {
      icon: RefreshCw,
      title: "Resgate de Penhor",
      description: (
        <span>
          Recupere suas joias com facilidade, segurança e agilidade
        </span>
      ),
      message: "Olá, tenho interesse em Resgate de Penhor. Como posso recuperar minhas joias?"
    },
    {
      icon: TrendingUp,
      title: "Oferta Imbatível",
      description: (
        <span>
          Garantimos a melhor proposta do mercado com confiança
        </span>
      ),
      message: "Olá, gostaria de saber mais sobre a Oferta Imbatível que vocês garantem no mercado."
    },
    {
      icon: Sparkles,
      title: "Transformação de Joias",
      description: (
        <span>
          Renove suas peças antigas em novas criações exclusivas
        </span>
      ),
      message: "Olá, quero transformar minhas peças antigas em novas criações. Como funciona esse serviço?"
    }
  ];

  return (
    <section
      id="service"
      className="w-full scroll-mt-20 px-4 sm:px-8 py-12 bg-[#f5f5f5] flex flex-col items-center"
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-secondary">
            Nossos <span className="text-gold-gradient">Serviços</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-secondary max-w-3xl mx-auto">
            Oferecemos soluções completas para suas necessidades em ouro e joias
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="card-elegant p-6 sm:p-8 relative overflow-hidden hover-lift group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {(hoveredIndex === index || isMobile) && (
                <div
                  className={`absolute inset-0 z-0 transition-all duration-1000 ease-out ${isMobile
                    ? 'opacity-70 scale-100'
                    : 'opacity-0 group-hover:opacity-70 scale-95 group-hover:scale-100'
                    }`}
                  style={{
                    backgroundImage: `url(${lunetaImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              )}

              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </span>
                </div>
              )}

              <div className="relative z-10 text-black">
                <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4 sm:mb-6 mx-auto" />
                <div className="mb-4 sm:mb-6 p-4 bg-black/60 rounded-lg text-center text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{service.title}</h3>
                  <div className="text-sm sm:text-base font-bold">{service.description}</div>
                </div>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(service.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block text-center py-2 px-4 rounded bg-yellow-400 text-black font-semibold shadow-md hover:bg-yellow-500 transition-colors duration-200"
                >
                  Saiba mais
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
