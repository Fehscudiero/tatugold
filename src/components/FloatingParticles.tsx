import { useMemo } from 'react';

interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

const FloatingParticles = ({ count = 8, className = '' }: FloatingParticlesProps) => {
  const particles = useMemo(() => 
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 4}s`,
      duration: `${12 + Math.random() * 8}s`,
      size: Math.random() > 0.6 ? 'w-1.5 h-1.5' : 'w-1 h-1',
    }))
  , [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute ${particle.size} bg-yellow-400/30 rounded-full`}
          style={{
            left: particle.left,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            animation: `float-particle ${particle.duration} linear infinite`,
            boxShadow: '0 0 6px rgba(251,191,36,0.4)',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;