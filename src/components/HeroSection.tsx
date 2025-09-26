import { useEffect } from 'react';
import heroImage from '@/assets/hero-jewelry.jpg';
import iconeImage from '@/assets/icone.png';
import logoImage from '@/assets/tatugold-logo.png';
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />

      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto animate-fade-in">
        {/* Logo fixo com brilho ao hover */}
        <div className="flex items-center justify-center mb-6 md:mb-12">
          <img
            src={logoImage}
            alt="Tatugold - Mais que ouro. É identidade."
            className="w-[280px] md:w-[600px] h-auto hover:brightness-125 transition duration-500"
          />
        </div>

        {/* Institutional text com efeito de escrita */}
        <p className="text-lg md:text-3xl mb-6 md:mb-8 font-light text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-yellow-300 animate-text-glow">
          Transformamos histórias em joias. Conheça nossa coleção.
        </p>

        {/* Botão com diamante flutuante e brilho */}
        <a
          href="#simulador"
          onClick={(e) => {
            e.preventDefault();
            const section = document.getElementById("simulador");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="btn-luxury bg-yellow-500 text-black shadow-xl hover:shadow-yellow-400 transition-all duration-300 flex items-center justify-center gap-3 rounded-full px-6 py-3 hover:scale-105 active:scale-95"
        >
          <img
            src={iconeImage}
            alt="Simular valor da peça"
            className="w-12 h-12 sparkle opacity-100"
          />
          <span className="text-base md:text-lg font-semibold opacity-100">Simule agora o valor da sua peça</span>
          <img
            src={iconeImage}
            alt="Simular valor da peça"
            className="w-12 h-12 sparkle opacity-100"
          />
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
