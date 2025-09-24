import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import GoldSimulator from './GoldSimulator';
import { 
  MapPin, 
  Phone, 
  Instagram, 
  Clock,
  Navigation
} from 'lucide-react';

const ContactSection = () => {
  const handleGoogleMaps = () => {
    window.open('https://maps.google.com/?q=Rua+Soriano+de+Souza,+190+Tatuapé+São+Paulo', '_blank');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá, quero fazer uma avaliação gratuita com a Tatugold.");
    window.open(`https://wa.me/5511972801984?text=${message}`, '_blank');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/tatugold.joias', '_blank');
  };

  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
            <span className="text-gold-gradient">Localização</span> e Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Venha nos visitar ou entre em contato conosco
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="card-elegant p-8">
              <div className="flex items-center space-x-4 mb-6">
                <MapPin className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    Rua Soriano de Souza, 190 - Tatuapé<br />
                    <span className="text-sm">(Próximo ao Shopping Metrô Boulevard Tatuapé)</span>
                  </p>
                </div>
              </div>
              
              <Button onClick={handleGoogleMaps} className="btn-gold w-full mb-4">
                <Navigation className="w-4 h-4 mr-2" />
                Ver no Google Maps
              </Button>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="card-elegant p-6 text-center">
                <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-secondary mb-2">Telefone</h3>
                <p className="text-muted-foreground mb-4">(11) 97280-1984</p>
                <Button onClick={handleWhatsApp} size="sm" className="btn-outline-gold w-full">
                  WhatsApp
                </Button>
              </Card>

              <Card className="card-elegant p-6 text-center">
                <Instagram className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-secondary mb-2">Instagram</h3>
                <p className="text-muted-foreground mb-4">@tatugold.joias</p>
                <Button onClick={handleInstagram} size="sm" className="btn-outline-gold w-full">
                  Seguir
                </Button>
              </Card>
            </div>

            <Card className="card-elegant p-6">
              <div className="flex items-center space-x-4">
                <Clock className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">Horário de Funcionamento</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Segunda à Sexta: 9h às 18h</p>
                    <p>Sábado: 9h às 14h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Gold Simulator & Features */}
          <div className="space-y-6">
            <GoldSimulator />
            
            <Card className="card-elegant p-8">
              <h3 className="text-2xl font-semibold text-secondary mb-6">Por que escolher a Tatugold?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">20</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Anos de Tradição</h4>
                    <p className="text-muted-foreground text-sm">Duas décadas servindo o Tatuapé com excelência</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">💰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Melhor Preço Garantido</h4>
                    <p className="text-muted-foreground text-sm">Avaliação justa e pagamento imediato</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">💎</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Criações Exclusivas</h4>
                    <p className="text-muted-foreground text-sm">Joias personalizadas feitas especialmente para você</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">🏆</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Atendimento Local</h4>
                    <p className="text-muted-foreground text-sm">Compromisso e confiança com a comunidade</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;