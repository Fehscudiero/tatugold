import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import CatalogSection from '@/components/CatalogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CatalogSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
      <ChatBot />
    </div>
  );
};

export default Index;
