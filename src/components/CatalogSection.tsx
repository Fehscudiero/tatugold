import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import chainsImage from '@/assets/category-chains.jpg';
import braceletsImage from '@/assets/category-bracelets.jpg';
import ringsImage from '@/assets/category-rings.jpg';
import prataImage from '@/assets/category-prata.png';
import correntesImage from '@/assets/category-correntes.png';
import aliancaImage from '@/assets/category-alianca.png';
import joiasImage from '@/assets/category-joias.png';
import platinaImage from '@/assets/category-platina.png';


const CatalogSection = () => {
  const categories = [
    {
      title: "Correntes",
      description: "Correntes em ouro 18k com diversos modelos",
      image: correntesImage,
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
      image: aliancaImage,
      popular: true
    },
    {
      title: "Prata",
      description: "Joias em prata 925 com acabamento premium",
      image: prataImage,
      popular: false
    },
    {
      title: "Platina",
      description: "Peças exclusivas em platina",
      image: platinaImage,
      popular: false
    },
    {
      title: "Pedras Preciosas",
      description: "Joias com diamantes, esmeraldas e rubis",
      image: joiasImage,
      popular: true
    }
  ];

  return (
    <section id="catalog" className="py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gold-gradient">
            Catálogo de Joias
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra nossa coleção exclusiva de joias artesanais
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((category, index) => (
            <Card key={index} className="bg-white text-black shadow-xl rounded-lg overflow-hidden">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2 text-secondary">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
                {category.popular && (
                  <Badge className="mt-4 bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
