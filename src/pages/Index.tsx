import WhatsAppFloat from '@/components/WhatsAppFloat';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import CatalogSection from '@/components/CatalogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GoldSimulator from '@/components/GoldSimulator'; // ← importado aqui
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollToTopButton />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {/* <CatalogSection/> */}
      <GoldSimulator />
      <TestimonialsSection />
      <ContactSection />
      <Footer />

    </div>
  );
};

export default Index;
