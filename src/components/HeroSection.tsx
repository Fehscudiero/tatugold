import { useState, useRef } from 'react';
import heroImage from '@/assets/hero-jewelry.webp';
import logoImage from '@/assets/tatugold-logo.webp';
import { ChevronDown, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [particles] = useState(() => 
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${12 + Math.random() * 8}s`,
    }))
  );

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[100dvh] md:h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/95" />
        <div ref={glowRef} className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.2)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(245,158,11,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_120%)]" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-60"
            style={{
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              animation: `float-particle ${particle.duration} linear infinite`,
              boxShadow: '0 0 10px rgba(251,191,36,0.8), 0 0 20px rgba(251,191,36,0.4)'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center text-white px-3 sm:px-6 max-w-5xl mx-auto w-full pt-[4vh] sm:pt-[12vh] md:pt-0">
        
        {/* Logo - order-1 */}
        <div className="order-1">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/50 via-transparent to-yellow-400/50 blur-3xl rounded-full scale-110" />
          <img
            src={logoImage}
            alt="Tatugold - Mais que ouro. É identidade."
            loading="eager"
            width={360}
            height="auto"
            className="w-[80vw] max-w-[360px] sm:w-[360px] md:w-[800px] lg:w-[900px] h-auto relative z-10 drop-shadow-2xl"
          />
        </div>

        {/* Address - order-2 (abaixo da logo) */}
        <div className="order-2">
          <div className="flex items-center gap-2 bg-black/60 backdrop-blur-xl px-3 py-2 rounded-xl border border-yellow-500/40 shadow-lg">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <p className="text-white text-xs font-semibold">Rua Soriano de Souza, 190 - Tatuapé</p>
          </div>
        </div>

{/* Text + Button - order-3 */}
        <div className="order-3 md:mt-6 mb-12 md:mb-0">
          <p className="text-xs sm:text-lg md:text-2xl font-light text-white max-w-[340px] sm:max-w-xl md:max-w-2xl leading-tight sm:leading-normal mb-10 md:mb-6 pt-8 md:pt-0">
            Vendendo ouro? Aqui você recebe mais. Avaliação gratuita e pagamento na hora.
          </p>
          <a
            href="#gold-simulator"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('gold-simulator');
            }}
            className="inline-flex items-center gap-2 px-5 sm:px-8 py-2 sm:py-4 rounded-full bg-yellow-500 text-black font-bold shadow-lg hover:shadow-[0_0_40px_rgba(251,191,36,0.6)] hover:scale-[1.03] active:scale-95 transition-all"
            style={{ backgroundColor: '#eab308', animation: 'pulse-button 2s ease-in-out infinite' }}
          >
            <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-600" />
            <span className="text-xs sm:text-sm md:text-base tracking-wide font-semibold">
              Simule o valor da sua joia
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-6 sm:bottom-4 left-1/2 -translate-x-1/2 text-white z-10 group"
        aria-label="Ir para a seção Sobre"
      >
        <ChevronDown className="w-5 sm:w-7 h-5 sm:h-7 text-yellow-400 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;