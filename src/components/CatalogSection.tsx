import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye } from 'lucide-react';
import chainsImage from '@/assets/category-chains.jpg';
import braceletsImage from '@/assets/category-bracelets.jpg';
import ringsImage from '@/assets/category-rings.jpg';

const CatalogSection = () => {
  const categories = [
    {
      title: "Correntes",
      description: "Correntes em ouro 18k com diversos modelos",
      image: chainsImage,
      popular: true
    },
    {
      title: "Pulseiras",
      description: "Pulseiras elegantes para todos os estilos",
      image: braceletsImage,
      popular: false
    },
    {
      title: "Anéis",
      description: "Anéis exclusivos com pedras preciosas",
      image: ringsImage,
      popular: true
    },
    {
      title: "Gargantilhas",
      description: "Gargantilhas delicadas e sofisticadas",
      image: chainsImage,
      popular: false
    },
    {
      title: "Alianças",
      description: "Alianças personalizadas para momentos especiais",
      image: ringsImage,
      popular: true
    },
    {
      title: "Prata",
      description: "Joias em prata 925 com acabamento premium",
      image: braceletsImage,
      popular: false
    },
    {
      title: "Platina",
      description: "Peças exclusivas em platina",
      image: ringsImage,
      popular: false
    },
    {
      title: "Pedras Preciosas",
      description: "Joias com diamantes, esmeraldas e rubis",
      image: ringsImage,
      popular: true
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
            Catálogo de <span className="text-gold-gradient">Joias</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra nossa coleção exclusiva de joias artesanais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="card-elegant overflow-hidden hover-lift group">
              <div className="relative">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {category.popular && (
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-secondary">
                  {category.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {category.description}
                </p>
                
                <Button variant="outline" className="btn-outline-gold w-full group">
                  <Eye className="w-4 h-4 mr-2" />
                  Ver mais
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;