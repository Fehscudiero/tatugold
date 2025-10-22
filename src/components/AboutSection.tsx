import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Shield, Award, Star, Heart } from 'lucide-react';

const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('animate-fade-in-up');
        } else {
          el.classList.remove('animate-fade-in-up');
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
};

const AboutSection = () => {
  const highlights = [
    { icon: Shield, title: 'Confiança', description: '20 anos de tradição' },
    { icon: Award, title: 'Qualidade', description: 'Produtos certificados' },
    { icon: Star, title: 'Excelência', description: 'Atendimento premium' },
    { icon: Heart, title: 'Personalização', description: 'Peças únicas' },
  ];

  const titleRef = useScrollAnimation();
  const cardsRef = useScrollAnimation();

  return (
    <section
      id="about"
      className="pt-4 pb-4 sm:pt-40 sm:pb-40 px-6 bg-background text-foreground transition-colors duration-300 overflow-hidden"
      aria-labelledby="about-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da seção */}
        <header ref={titleRef} className="text-center mb-16">
          <h2
            id="about-title"
            className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"
          >
            Sobre a <span className="text-gold-gradient">Tatugold</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Há duas décadas de tradição, a <span className="text-gold-gradient font-semibold">Tatugold</span> é referência em compra de ouro e criação de joias personalizadas.
            Com transparência e pagamento imediato, transformamos peças antigas em novas possibilidades.
          </p>
        </header>

        {/* Lista de destaques */}
        <article ref={cardsRef} aria-label="Destaques da Tatugold">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {highlights.map((item, index) => (
              <li key={index}>
                <Card
                  className="p-8 text-center bg-card text-card-foreground rounded-xl shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:shadow-yellow-400/40 group"
                >
                  <item.icon className="w-12 h-12 text-yellow-500 mx-auto mb-4 drop-shadow-md transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default AboutSection;
