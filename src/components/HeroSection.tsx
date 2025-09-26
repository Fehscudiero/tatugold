import { useEffect } from 'react';
import heroImage from '@/assets/hero-jewelry.jpg';
import tatugoldLogo from '@/assets/tatugold-logo.png';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const bg = document.getElementById('hero-bg');
      if (bg) {
        const x = (e.clientX / window.innerWidth) * 10;
        const y = (e.clientY / window.innerHeight) * 10;
        bg.style.transform = `scale(1.05) translate(${x}px, ${y}px)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-10 md:pt-0 bg-black">
      {/* Background Image with parallax */}
      <div
        id="hero-bg"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-out will-change-transform"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto animate-fade-in">
        {/* Logo com reflexo e brilho */}
        <div className="flex items-center justify-center mb-6 md:mb-12">
          <img
            src={tatugoldLogo}
            alt="Tatugold - Mais que ouro. É identidade."
            className="w-[280px] md:w-[600px] h-auto animate-pulse hover:brightness-125 transition duration-500"
          />
        </div>

        {/* Institutional text com efeito de escrita */}
        <p className="text-lg md:text-3xl mb-6 md:mb-8 font-light text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-yellow-300 animate-text-glow">
          Transformamos histórias em joias. Conheça nossa coleção.
        </p>

        {/* Botão com diamante flutuante */}
        <a
          href="#simulador"
          onClick={(e) => {
            e.preventDefault();
            const section = document.getElementById("simulador");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="inline-block mt-4 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full shadow-xl hover:shadow-yellow-300 transition-all duration-300 flex items-center justify-center gap-2 animate-float"
        >
          <img
            src={tatugoldLogo}
            alt="Simular valor da peça"
            className="w-6 h-6 hover:animate-pulse"
          />
          <span>Simule agora o valor da sua peça</span>
        </a>
      </div>

      {/* Scroll indicator com aura */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white">
        <ChevronDown className="w-6 h-6 animate-bounce text-yellow-300 drop-shadow-md" />
      </div>
    </section>
  );
};

export default HeroSection;
