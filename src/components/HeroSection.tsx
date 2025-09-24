import { Button } from '@/components/ui/button';
import { Crown, Sparkles, MessageSquare } from 'lucide-react';
import heroImage from '@/assets/hero-jewelry.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <div className="fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <Crown className="w-12 h-12 text-primary mr-3" />
            <Sparkles className="w-8 h-8 text-primary-glow" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gold-gradient">Tatugold</span>
            <br />
            <span className="text-3xl md:text-4xl font-normal">Tradição em Ouro há 20 anos</span>
          </h1>
          
          <p className="text-2xl md:text-3xl mb-8 font-light">
            Mais que ouro. É identidade.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-12">
            <Button size="lg" className="btn-gold text-lg px-8 py-4">
              <Crown className="w-5 h-5 mr-2" />
              Descubra o valor do seu ouro agora
            </Button>
            
            <Button size="lg" variant="outline" className="btn-outline-gold text-lg px-8 py-4">
              <Sparkles className="w-5 h-5 mr-2" />
              Crie sua joia personalizada
            </Button>
            
            <Button size="lg" variant="secondary" className="btn-elegant text-lg px-8 py-4">
              <MessageSquare className="w-5 h-5 mr-2" />
              Fale com nosso Agente IA
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <div className="animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-transparent via-white to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;