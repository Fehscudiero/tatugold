import { useEffect } from 'react';
import heroImage from '@/assets/hero-jewelry.jpg';
import iconeImage from '@/assets/icone.png';
import logoImage from '@/assets/tatugold-logo.png';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  useEffect(() => {
    const bg = document.getElementById('hero-bg');
    const isMobile = window.innerWidth < 768;

    const handleMouseMove = (e: MouseEvent) => {
      if (!bg || isMobile) return;
      const x = (e.clientX / window.innerWidth) * 50;
      const y = (e.clientY / window.innerHeight) * 50;
      bg.style.transform = `scale(1.05) translate(${x}px, ${y}px)`;
    };

    if (bg && isMobile) {
      bg.style.transform = 'none';
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const section = document.getElementById("about");
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-black">
      {/* Background Image */}
      <div
        id="hero-bg"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-out will-change-transform"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-6 max-w-5xl mx-auto pt-0 pb-20">
        <img
          src={logoImage}
          alt="Tatugold - Mais que ouro. É identidade."
          className="w-[360px] md:w-[650px] h-auto hover:brightness-125 transition duration-500 mt-4 md:mt-0"
        />

        <p className="mt-[-3rem] md:mt-[-6rem] text-xl md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-yellow-300 animate-text-glow max-w-3xl">
          Vendendo ouro? Aqui você recebe mais. Avaliação gratuita e pagamento na hora.
        </p>

        <div className="mt-40 md:mt-10">
          <a
            href="#gold-simulator"
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById("gold-simulator");
              if (section) {
                const yOffset = -80;
                const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="relative inline-flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold shadow-lg hover:shadow-yellow-400 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white border border-yellow-600 rounded-full shadow-md flex items-center justify-center transition-transform duration-300 hover:scale-110">
              <img src={iconeImage} alt="Diamante" className="w-8 h-8" />
            </div>
            <span className="text-base md:text-lg tracking-wide text-simulador-fodaa">Simule o valor da sua joia</span>
            <span className="absolute inset-0 rounded-full bg-white opacity-5 blur-sm pointer-events-none" />
          </a>
        </div>
      </div>

      {/* Contact Info */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white text-center md:text-base leading-relaxed z-10">
        <p>📍 Rua Soriano de Souza, 190  Tatuapé, SP</p>
      </div>

      {/* Scroll Indicator - agora clicável */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-14 left-1/2 transform -translate-x-1/2 text-white z-10 hover:scale-110 transition"
        aria-label="Ir para a seção Sobre"
      >
        <ChevronDown className="w-6 h-6 animate-bounce text-yellow-300 drop-shadow-md" />
      </button>
    </section>
  );
};

export default HeroSection;
