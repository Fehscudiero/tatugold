import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAPHeroAnimations = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' }
      });

      tl.from(logoRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        filter: 'blur(20px)'
      })
      .from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8
      }, '-=0.5')
      .from(buttonRef.current, {
        y: 30,
        opacity: 0,
        scale: 0.9,
        duration: 0.6
      }, '-=0.3');

      particlesRef.current.forEach((particle, i) => {
        gsap.fromTo(particle, 
          { y: '110vh', opacity: 0, scale: 0 },
          {
            y: '-10vh',
            opacity: 1,
            scale: 1,
            duration: 3 + Math.random() * 2,
            delay: i * 0.15,
            repeat: -1,
            ease: 'none'
          }
        );
      });

      gsap.to('.hero-glow', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        },
        y: 200,
        opacity: 0.3
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return { heroRef, logoRef, textRef, buttonRef, particlesRef };
};

export const useGSAPScrollReveal = () => {
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealRefs.current.forEach((el, i) => {
        gsap.fromTo(el,
          { 
            y: 100, 
            opacity: 0,
            rotateX: -15,
            scale: 0.95
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            scale: 1,
            duration: 1,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'top 50%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return revealRefs;
};

export const useGSAPParallax = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.parallax-section').forEach(section => {
        const speed = section.dataset.speed || 0.5;
        
        gsap.to(section, {
          y: () => -(window.innerHeight * parseFloat(speed)),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });

      gsap.utils.toArray<HTMLElement>('.parallax-bg').forEach(bg => {
        gsap.to(bg, {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: bg.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);
};

export const useGSAPServicesReveal = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(card,
          { 
            y: 80, 
            opacity: 0,
            scale: 0.9,
            rotateY: -10
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return cardsRef;
};

export const useGSAPStatsCounter = () => {
  const statsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      statsRef.current.forEach(stat => {
        const target = stat.dataset.target;
        if (!target) return;

        gsap.fromTo(stat, 
          { textContent: '0' },
          {
            textContent: target,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: stat,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return statsRef;
};

export const useGSAPHorizontalScroll = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>('.horizontal-section');
      
      if (sections.length === 0) return;

      const container = sections[0].parentElement;
      if (!container) return;

      const totalWidth = sections.reduce((acc, section) => {
        return acc + section.offsetWidth;
      }, 0);

      gsap.to(sections, {
        x: () => -(totalWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });
    });

    return () => ctx.revert();
  }, []);
};

export const useGSAPTextReveal = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.text-reveal').forEach(text => {
        const chars = text.textContent?.split('') || [];
        text.innerHTML = chars.map(char => 
          char === ' ' ? '<span class="inline-block w-2"></span>' : 
          `<span class="inline-block">${char}</span>`
        ).join('');

        const spans = text.querySelectorAll('span');
        
        gsap.fromTo(spans,
          { 
            y: 50, 
            opacity: 0,
            rotateY: -90
          },
          {
            y: 0,
            opacity: 1,
            rotateY: 0,
            duration: 0.8,
            stagger: 0.02,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: text,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);
};

export const useGSAPMorphGlow = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const glows = gsap.utils.toArray<HTMLElement>('.morph-glow');
      
      glows.forEach(glow => {
        gsap.to(glow, {
          scale: 1.2,
          opacity: 0.8,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      });

      gsap.to('.glow-track', {
        backgroundPosition: '200% center',
        duration: 3,
        repeat: -1,
        ease: 'linear'
      });
    });

    return () => ctx.revert();
  }, []);
};

export const useGSAPSmoothReveal = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.smooth-reveal').forEach((el, i) => {
        const direction = (el as HTMLElement).dataset.direction || 'up';
        
        const transforms = {
          up: { y: 100 },
          down: { y: -100 },
          left: { x: 100 },
          right: { x: -100 }
        };

        gsap.fromTo(el, 
          { ...transforms[direction as keyof typeof transforms], opacity: 0 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1.2,
            delay: i * 0.1,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);
};