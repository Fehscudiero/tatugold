import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import CatalogSection from '@/components/CatalogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GoldSimulator from '@/components/GoldSimulator'; // ← importado aqui
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CatalogSection />
      <TestimonialsSection />
      <GoldSimulator /> {/* ← posicionado antes do contato */}
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
