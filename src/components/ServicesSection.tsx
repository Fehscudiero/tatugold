import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DollarSign, Gem, Search, RefreshCw, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import FloatingParticles from './FloatingParticles';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const whatsappNumber = "5511972801984";
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Título com animação premium (Estilo Apple Reveal)
      gsap.fromTo('.services-title',
        { y: 40, opacity: 0, filter: 'blur(10px)' },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.services-title',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animação Desktop (Convergência)
      if (!isMobile && cardsRef.current.length > 0) {
        const viewportWidth = window.innerWidth;
        
        cardsRef.current.forEach((card, i) => {
          const angle = (i / cardsRef.current.length) * Math.PI * 2;
          const distance = viewportWidth * 0.8 + Math.random() * 200;
          const startX = Math.cos(angle) * distance;
          const startY = Math.sin(angle) * distance * 0.5;

          gsap.fromTo(card,
            { 
              x: startX, 
              y: startY, 
              opacity: 0, 
              scale: 0.5, 
              rotation: (Math.random() - 0.5) * 40,
              filter: 'blur(15px)'
            },
            {
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              rotation: 0,
              filter: 'blur(0px)',
              duration: 1.5,
              delay: i * 0.1,
              ease: 'power4.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        });
      } 
      
      // ANIMAÇÃO MOBILE REFEITA (ESTILO APPLE)
      if (isMobile && cardsRef.current.length > 0) {
        cardsRef.current.forEach((card, i) => {
          gsap.fromTo(card,
            { 
              y: 30, // Movimento mais curto = mais elegante
              opacity: 0, 
              scale: 0.98, // Inicia levemente menor
              filter: 'blur(4px)' // Leve desfoque na entrada
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
              duration: 1.1, // Duração maior para suavidade
              ease: 'power4.out', // Curva de aceleração Apple
              scrollTrigger: {
                trigger: card,
                start: 'top 92%', // Aciona um pouco antes para fluidez
                toggleActions: 'play none none reverse',
                // scrub: 0.5 // Opcional: descomente se quiser que a animação acompanhe o dedo
              }
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  const services = [
    {
      icon: DollarSign,
      title: "Compra de Ouro",
      description: "Avaliação justa e pagamento imediato com total transparência",
      popular: true,
      message: "Olá, tenho interesse na Compra de Ouro. Gostaria de saber mais sobre avaliação justa e pagamento imediato."
    },
    {
      icon: Gem,
      title: "Joias Personalizadas",
      description: "Criações exclusivas sob medida para refletir sua identidade",
      popular: true,
      message: "Olá, gostaria de saber mais sobre Joias Personalizadas e como funcionam as criações sob medida."
    },
    {
      icon: Search,
      title: "Avaliação Gratuita",
      description: "Descubra o valor real das suas joias sem compromisso",
      message: "Olá, quero fazer uma Avaliação Gratuita das minhas peças. Como funciona?"
    },
    {
      icon: RefreshCw,
      title: "Resgate de Penhor",
      description: "Recupere suas joias com facilidade, segurança e agilidade",
      message: "Olá, tenho interesse em Resgate de Penhor. Como posso recuperar minhas joias?"
    },
    {
      icon: TrendingUp,
      title: "Oferta Imbatível",
      description: "Garantimos a melhor proposta do mercado com confiança",
      message: "Olá, gostaria de saber mais sobre a Oferta Imbatível que vocês garantem no mercado."
    },
    {
      icon: Sparkles,
      title: "Transformação de Joias",
      description: "Renove suas peças antigas em novas criações exclusivas",
      message: "Olá, quero transformar minhas peças antigas em novas criações. Como funciona esse serviço?"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="service"
      className="w-full scroll-mt-20 px-4 sm:px-8 py-20 dark:bg-gradient-to-b dark:from-black dark:via-zinc-900 dark:to-black bg-gradient-to-b from-gray-50 via-white to-gray-50 text-foreground transition-colors duration-300 flex flex-col items-center relative overflow-hidden"
      aria-labelledby="services-title"
    >
      <FloatingParticles count={6} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(251,191,36,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(245,158,11,0.08)_0%,transparent_50%)]" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <header className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-yellow-400/20 to-amber-500/20 border border-yellow-400/30 mb-4 sm:mb-6">
            <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-500" />
            <span className="text-xs sm:text-sm font-medium text-yellow-600 dark:text-yellow-400">Serviços Premium</span>
          </div>
          <h2
            id="services-title"
            className="services-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          >
            Nossos <span className="text-shimmer">Serviços</span>
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Oferecemos soluções completas para suas necessidades em ouro e joias com excelência e transparência
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
          {services.map((service, index) => (
            <article key={index} className="h-full">
              <div 
                ref={(el) => { if (el) cardsRef.current[index] = el }}
                className={`card-glass h-full p-4 sm:p-6 lg:p-8 group cursor-pointer relative overflow-hidden will-change-transform ${isMobile ? 'active:scale-95 transition-transform' : ''}`}
              >
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full blur-2xl group-hover:bg-yellow-400/20 transition-all duration-500" />

                {service.popular && (
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                    <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-amber-400 to-yellow-500 text-black shadow-lg shadow-yellow-500/25">
                      Popular
                    </span>
                  </div>
                )}

                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 mb-4 sm:mb-6 shadow-lg shadow-yellow-500/30 group-hover:shadow-yellow-500/50 transition-shadow">
                    <service.icon className="w-5 sm:w-6 h-5 sm:h-6 text-black" />
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-yellow-500 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <motion.a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(service.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold text-sm shadow-lg shadow-yellow-500/20 group-hover:shadow-yellow-500/40 transition-all"
                  >
                    <span>Saiba mais</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;