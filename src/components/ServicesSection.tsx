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
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const whatsappNumber = "5511972801984";

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  const services = [
    {
      icon: DollarSign,
      title: "Compra de Ouro",
      description: "Avaliação justa e pagamento imediato",
      popular: true,
      message: "Olá, tenho interesse na Compra de Ouro. Gostaria de saber mais sobre avaliação justa e pagamento imediato."
    },
    {
      icon: Gem,
      title: "Joias Personalizadas",
      description: "Criações exclusivas sob medida",
      popular: true,
      message: "Olá, gostaria de saber mais sobre Joias Personalizadas e como funcionam as criações sob medida."
    },
    {
      icon: Search,
      title: "Avaliação Gratuita",
      description: "Descubra o valor real das suas peças",
      message: "Olá, quero fazer uma Avaliação Gratuita das minhas peças. Como funciona?"
    },
    {
      icon: RefreshCw,
      title: "Resgate de Penhor",
      description: "Recupere suas joias com facilidade",
      message: "Olá, tenho interesse em Resgate de Penhor. Como posso recuperar minhas joias?"
    },
    {
      icon: TrendingUp,
      title: "Melhor Oferta",
      description: "Garantimos o melhor preço do mercado",
      message: "Olá, gostaria de saber mais sobre a Melhor Oferta que vocês garantem no mercado."
    },
    {
      icon: Sparkles,
      title: "Transformação",
      description: "Transforme peças antigas em novas criações",
      message: "Olá, quero transformar minhas peças antigas em novas criações. Como funciona esse serviço?"
    }
  ];

  return (
    <section id="service" className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
            Nossos <span className="text-gold-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas para suas necessidades em ouro e joias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="card-elegant p-8 relative overflow-hidden hover-lift group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="800"
            >
              {/* Imagem de fundo com degradê no hover */}
              {hoveredIndex === index && (
                <div
                  className="absolute inset-0 z-0 transition-all duration-1000 ease-out opacity-0 group-hover:opacity-70 scale-95 group-hover:scale-100"
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(255,215,0,0.3)), url(${lunetaImage})`,
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

              {/* Conteúdo com texto preto */}
              <div className="relative z-10 text-black">
                <service.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="mb-6 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(service.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold w-full inline-block text-center py-2 px-4 border border-gold rounded text-gold hover:bg-gold hover:text-white transition-colors duration-200"
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
