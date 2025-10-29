import { useEffect } from 'react';
import heroImage from '@/assets/hero-jewelry.webp'; // Convertido para WebP
import iconeImage from '@/assets/icone.webp';       // Convertido para WebP
import logoImage from '@/assets/tatugold-logo.webp';// Convertido para WebP
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  useEffect(() => {
    const bg = document.getElementById('hero-bg');

    // Verificação robusta de mobile
    const isMobile =
      window.innerWidth < 768 ||
      window.matchMedia('(pointer: coarse)').matches ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!bg) return;
      const x = (e.clientX / window.innerWidth) * 50;
      const y = (e.clientY / window.innerHeight) * 50;
      animationFrame = requestAnimationFrame(() => {
        bg.style.transform = `scale(1.03) translate(${x}px, ${y}px)`;
      });
    };

    // Aplica paralaxe apenas em dispositivos não móveis
    if (!isMobile && bg) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    } else if (bg) {
      bg.style.transform = 'none';
    }

    return () => {
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="border-b border-neutral-700 relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-black">
      {/* Background */}
      <div
        id="hero-bg"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-200 ease-out will-change-transform"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-6 max-w-5xl mx-auto pt-0 pb-20">
        <img
          src={logoImage}
          alt="Tatugold - Mais que ouro. É identidade."
          loading="eager"
          width={360}
          height="auto"
          className="w-[360px] md:w-[650px] h-auto transition duration-300 mt-4 md:mt-0"
        />

        <p className="mt-[-3rem] md:mt-[-6rem] text-xl md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-yellow-300 max-w-3xl">
          Vendendo ouro? Aqui você recebe mais. Avaliação gratuita e pagamento na hora.
        </p>

        {/* Botão ajustado para mobile */}
        <div className="mt-10 md:mt-20">
          <a
            href="#gold-simulator"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('gold-simulator');
            }}
            className="relative inline-flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold shadow-lg transition-all duration-300 hover:shadow-yellow-400 hover:scale-[1.03] active:scale-95 animate-fade-in"
          >
            {/* Ícone lateral */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white border border-yellow-600 rounded-full shadow-md flex items-center justify-center">
              <img src={iconeImage} alt="Diamante" loading="lazy" className="w-8 h-8" />
            </div>

            {/* Texto */}
            <span className="text-base md:text-lg tracking-wide text-simulador-fodaa z-10">
              Simule o valor da sua joia
            </span>

            {/* Reflexo interno */}
            <span className="absolute inset-0 rounded-full bg-white opacity-5 blur-sm pointer-events-none" />

            {/* Brilho cruzando */}
            {/* Brilho cruzando */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-yellow-300/40 to-transparent animate-[goldSweep_2.5s_infinite] h-[80%] w-[80%] left-[10%] top-[10%]" />

          </a>
        </div>
      </div>


      {/* Endereço */}
      <div className="absolute bottom-28 md:bottom-20 left-1/2 transform -translate-x-1/2 text-white text-center md:text-base leading-relaxed z-10">
        <p>📍 Rua Soriano de Souza, 190 Tatuapé, SP</p>
      </div>

      {/* Indicador de scroll */}
      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-11 left-1/2 transform -translate-x-1/2 text-white z-10 hover:scale-105 transition duration-200"
        aria-label="Ir para a seção Sobre"
      >
        <ChevronDown className="w-6 h-6 animate-bounce text-yellow-300 drop-shadow-md" />
      </button>
    </section>
  );
};

export default HeroSection;