import { Card } from '@/components/ui/card';
import { Shield, Award, Star, Heart } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    { icon: Shield, title: "Confiança", description: "20 anos de tradição" },
    { icon: Award, title: "Qualidade", description: "Produtos certificados" },
    { icon: Star, title: "Excelência", description: "Atendimento premium" },
    { icon: Heart, title: "Personalização", description: "Peças únicas" }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
            Sobre a <span className="text-gold-gradient">Tatugold</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Há duas décadas no coração do Tatuapé, a Tatugold é referência em compra de ouro e criação de joias personalizadas. 
            Com tradição, transparência e pagamento imediato, transformamos peças antigas em novas possibilidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="card-elegant p-8 text-center hover-lift">
              <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-secondary">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6">
          <blockquote className="text-2xl md:text-3xl font-light text-secondary italic">
            "O ouro muda, mas a história permanece."
          </blockquote>
          <blockquote className="text-xl md:text-2xl font-light text-muted-foreground italic">
            "Cada peça, uma tatuagem na memória."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;