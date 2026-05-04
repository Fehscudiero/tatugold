import { useEffect, useRef } from 'react';
import { Shield, Award, Star, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FloatingParticles from './FloatingParticles';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const highlights = [
    { icon: Shield, title: 'Confiança', description: '20 anos de tradição no mercado' },
    { icon: Award, title: 'Qualidade', description: 'Produtos certificados e garantia' },
    { icon: Star, title: 'Excelência', description: 'Atendimento premium personalizado' },
    { icon: Heart, title: 'Personalização', description: 'Criação de peças únicas' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-title',
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-title',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(card,
          { y: 80, opacity: 0, scale: 0.8, rotateX: -20 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      gsap.fromTo('.stats-item',
        { y: 30, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.stats-container',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full scroll-mt-20 px-4 sm:px-8 py-20 bg-background dark:bg-gradient-to-br dark:from-black dark:via-zinc-900 dark:to-black text-foreground transition-colors duration-300 flex flex-col items-center relative overflow-hidden"
      aria-labelledby="about-title"
    >
      <FloatingParticles count={6} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.05)_0%,transparent_40%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16 px-2 sm:px-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-yellow-400/20 to-amber-500/20 border border-yellow-400/30 mb-4 sm:mb-6"
          >
            <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-500" />
            <span className="text-xs sm:text-sm font-medium text-yellow-600 dark:text-yellow-400">Quem Somos</span>
          </motion.div>

          <h2
            id="about-title"
            className="about-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-8"
          >
            Sobre a <span className="text-shimmer">Tatugold</span>
          </h2>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
            Há mais de duas décadas de excelência, a <span className="text-shimmer font-semibold">Tatugold</span> é referência em compra de ouro e criação de joias personalizadas.
            Com transparência total e pagamento imediato, transformamos suas peças antigas em novas possibilidades.
          </p>
        </motion.header>

        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          aria-label="Destaques da Tatugold"
        >
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-8 px-2 sm:px-0">
            {highlights.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <motion.div
                  ref={(el) => { if (el) cardsRef.current[index] = el }}
                  whileHover={{ y: -8 }}
                  className="group relative p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-white/10 hover:border-yellow-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]"
                >
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/5 group-hover:to-amber-500/5 transition-all duration-500" />

                  <div className="relative z-10 text-center sm:text-left">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 mb-3 sm:mb-6 shadow-lg shadow-yellow-500/20 group-hover:shadow-yellow-500/40 transition-shadow"
                    >
                      <item.icon className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8 text-black" />
                    </motion.div>

                    <h3 className="text-sm sm:text-base lg:text-xl font-bold mb-1 sm:mb-3 group-hover:text-yellow-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </motion.article>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="stats-container mt-10 sm:mt-16 text-center px-4 sm:px-0"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 rounded-xl sm:rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="text-center stats-item">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-shimmer">20+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Anos</div>
            </div>
            <div className="hidden sm:block w-px h-8 lg:h-12 bg-gradient-to-b from-transparent via-yellow-500/50 to-transparent" />
            <div className="text-center stats-item">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-shimmer">50k+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Clientes</div>
            </div>
            <div className="hidden sm:block w-px h-8 lg:h-12 bg-gradient-to-b from-transparent via-yellow-500/50 to-transparent" />
            <div className="text-center stats-item">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-shimmer">98%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Satisfação</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
