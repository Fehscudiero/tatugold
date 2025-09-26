import heroImage from '@/assets/hero-jewelry.jpg';
import tatugoldLogo from '@/assets/tatugold-logo.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-start md:items-center justify-center overflow-hidden pt-10 md:pt-0">
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
          {/* Logo */}
          <div className="flex items-center justify-center mb-6 md:mb-12">
            <img
              src={tatugoldLogo}
              alt="Tatugold - Mais que ouro. É identidade."
              className="w-[360px] md:w-[1028px] h-auto"
            />
          </div>

          {/* Institutional text */}
          <p className="text-lg md:text-3xl mb-6 md:mb-8 font-light text-primary-glow">
            Transformamos histórias em joias. Conheça nossa coleção.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <div className="animate-bounce">
          <div className="w-1 h-10 md:h-16 bg-gradient-to-b from-transparent via-white to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
