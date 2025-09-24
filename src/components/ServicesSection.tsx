import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  DollarSign, 
  Gem, 
  Search, 
  RefreshCw, 
  TrendingUp, 
  Sparkles 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: DollarSign,
      title: "Compra de Ouro",
      description: "Avaliação justa e pagamento imediato",
      popular: true
    },
    {
      icon: Gem,
      title: "Joias Personalizadas",
      description: "Criações exclusivas sob medida",
      popular: true
    },
    {
      icon: Search,
      title: "Avaliação Gratuita",
      description: "Descubra o valor real das suas peças"
    },
    {
      icon: RefreshCw,
      title: "Resgate de Penhor",
      description: "Recupere suas joias com facilidade"
    },
    {
      icon: TrendingUp,
      title: "Melhor Oferta",
      description: "Garantimos o melhor preço do mercado"
    },
    {
      icon: Sparkles,
      title: "Transformação",
      description: "Transforme peças antigas em novas criações"
    }
  ];

  return (
    <section className="py-24 px-6 bg-card">
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
            <Card key={index} className="card-elegant p-8 relative overflow-hidden hover-lift">
              {service.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </span>
                </div>
              )}
              
              <service.icon className="w-12 h-12 text-primary mb-6" />
              
              <h3 className="text-2xl font-semibold mb-4 text-secondary">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <Button variant="outline" className="btn-outline-gold w-full">
                Saiba mais
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;