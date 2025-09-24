import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote } from 'lucide-react';
import mariaImage from '@/assets/client-maria.jpg';
import robertoImage from '@/assets/client-roberto.jpg';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Santos",
      location: "Vila Formosa",
      rating: 5,
      text: "Você nem imagina como estou feliz com minha joia personalizada. Atendimento impecável!",
      image: mariaImage
    },
    {
      name: "Roberto Silva",
      location: "Tatuapé",
      rating: 5,
      text: "Qualidade total e atendimento de primeira. Tatugold é referência para toda família.",
      image: robertoImage
    },
    {
      name: "Ana Costa",
      location: "Vila Carrão",
      rating: 5,
      text: "Vendi meu ouro com total confiança. Preço justo e pagamento na hora. Recomendo!",
      image: mariaImage
    },
    {
      name: "Carlos Oliveira",
      location: "Penha",
      rating: 5,
      text: "Transformaram uma joia antiga da família em algo moderno e lindo. Trabalho excepcional!",
      image: robertoImage
    }
  ];

  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
            O que nossos <span className="text-gold-gradient">clientes</span> dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Histórias reais de quem confia na Tatugold
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-elegant p-8 hover-lift">
              <div className="flex items-start space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-secondary text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {testimonial.location}
                      </p>
                    </div>
                    
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Quote className="w-6 h-6 text-primary absolute -top-2 -left-2" />
                    <blockquote className="text-muted-foreground italic pl-6 mb-4">
                      "{testimonial.text}"
                    </blockquote>
                  </div>
                  
                  <Button variant="outline" size="sm" className="btn-outline-gold">
                    Ver história completa
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;