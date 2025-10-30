import { Card } from '@/components/ui/card';
import { Shield, Award, Star, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const highlights = [
    { icon: Shield, title: 'Confiança', description: '20 anos de tradição' },
    { icon: Award, title: 'Qualidade', description: 'Produtos certificados' },
    { icon: Star, title: 'Excelência', description: 'Atendimento premium' },
    { icon: Heart, title: 'Personalização', description: 'Peças únicas' },
  ];

  return (
    <section
      id="about"
      className="w-full scroll-mt-20 px-4 sm:px-8 py-12 border-b border-neutral-700 bg-background dark:bg-gradient-to-br dark:from-zinc-900 dark:via-black dark:to-zinc-800 text-foreground transition-colors duration-300 flex flex-col items-center"
      aria-labelledby="about-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da seção com flip horizontal */}
        <motion.header
          initial={{ opacity: 0, rotateY: -90 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
          style={{ transformStyle: 'preserve-3d' }}
        >
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
        </motion.header>

        {/* Lista de destaques com flip horizontal */}
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 [perspective:1000px]">
            {highlights.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, rotateY: -90 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Card className="p-8 text-center bg-card text-card-foreground rounded-xl shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:shadow-yellow-400/40 group">
                  <item.icon className="w-12 h-12 text-yellow-500 mx-auto mb-4 drop-shadow-md transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </motion.li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  );
};

export default AboutSection;
