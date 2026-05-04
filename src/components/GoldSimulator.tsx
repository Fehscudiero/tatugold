import { useState, useMemo, useRef, useEffect } from "react";
import CountUp from "react-countup";
import gsap from "gsap";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { TrendingUp, Sparkles, Gauge } from "lucide-react";
import tatugoldLogo from "@/assets/tatugold-logo.webp";

const GoldSimulator = () => {
  const [weight, setWeight] = useState("");
  const [goldType, setGoldType] = useState("");
  const [estimatedValue, setEstimatedValue] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const goldPrices = {
    "24k": 600.0,
    "18k": 400.0,
    "14k": 250.0,
    "dental": 200.0,
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".sim-element", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
      });

      const card = cardRef.current;
      if (!card) return;

      const onMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;

        gsap.to(card, {
          rotateY: x * 8,
          rotateX: -y * 8,
          transformPerspective: 1200,
          duration: 0.4,
          ease: "power2.out"
        });
      };

      const onMouseLeave = () => {
        gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "power3.out" });
      };

      card.addEventListener("mousemove", onMouseMove);
      card.addEventListener("mouseleave", onMouseLeave);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const particles = useMemo(() => 
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${15 + Math.random() * 10}s`,
    }))
  , []);

  const handleCalculate = () => {
    if (weight && goldType) {
      const valorPorGrama = goldPrices[goldType as keyof typeof goldPrices];
      const valor = parseFloat(weight) * valorPorGrama;
      setEstimatedValue(valor);
      setIsModalOpen(true);
    }
  };

  const whatsappMessage = `Olá! Simulei ${weight}g de ouro ${goldType.toUpperCase()} e o valor estimado foi de R$ ${estimatedValue.toFixed(2)}. Gostaria de conversar sobre isso.`;

  return (
    <>
      <section
        ref={containerRef}
        id="gold-simulator"
        className="w-full scroll-mt-20 px-4 py-24 dark:bg-zinc-950 bg-slate-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute w-1 h-1 bg-yellow-500/30 rounded-full"
              style={{
                left: p.left,
                animation: `float-particle ${p.duration} linear infinite`,
                animationDelay: p.delay
              }}
            />
          ))}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(251,191,36,0.1),transparent_60%)]" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <header className="text-center mb-16 sim-element">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-6">
              <Gauge className="w-4 h-4 text-yellow-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-yellow-600 dark:text-yellow-400">Sistema de Cotação Realtime</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black mb-4 tracking-tight leading-[0.9]">
              Quanto vale seu <span className="text-shimmer">Ouro?</span>
            </h2>
          </header>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            
            {/* Tabela de Preços - Senior Ticker (Interativo) */}
            <div className="lg:col-span-2 space-y-4 sim-element">
              <div className="flex items-center justify-between mb-4 px-1">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-yellow-500 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" /> Mercado Hoje
                </h3>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {Object.entries(goldPrices).map(([type, price]) => (
                  <button 
                    key={type}
                    onClick={() => setGoldType(type)}
                    className={`relative overflow-hidden group p-4 rounded-2xl border transition-all duration-300 text-left w-full
                      ${goldType === type 
                        ? 'bg-yellow-500 border-yellow-500 shadow-[0_0_20px_rgba(251,191,36,0.3)]' 
                        : 'bg-white dark:bg-white/[0.03] border-black/5 dark:border-white/10 hover:border-yellow-500/50'
                      }`}
                  >
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`text-sm font-black px-3 py-1 rounded-lg uppercase transition-colors
                          ${goldType === type ? 'bg-black text-yellow-500' : 'bg-yellow-500 text-black'}`}>
                          {type}
                        </span>
                        <span className={`text-xs font-bold uppercase tracking-widest ${goldType === type ? 'text-black/80' : 'text-muted-foreground'}`}>
                          Ouro
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className={`text-xs font-bold ${goldType === type ? 'text-black/60' : 'text-yellow-500/50'}`}>R$</span>
                        <span className={`text-3xl font-mono font-black tracking-tighter transition-colors
                          ${goldType === type ? 'text-black' : 'text-foreground group-hover:text-yellow-400'}`}>
                          {price.toFixed(0)}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Card do Simulador */}
            <div className="lg:col-span-3 sim-element">
              <div ref={cardRef} className="will-change-transform">
                <Card className="relative overflow-hidden p-8 sm:p-10 rounded-[2.5rem] shadow-2xl bg-white dark:bg-zinc-900/50 backdrop-blur-2xl border-black/5 dark:border-white/10">
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl" />
                  
                  <form className="space-y-6 relative z-10" onSubmit={(e) => { e.preventDefault(); handleCalculate(); }}>
                    <div className="space-y-2">
                      <Label htmlFor="weight" className="text-xs font-black uppercase tracking-widest ml-1">Peso da Peça (g)</Label>
                      <Input
                        id="weight"
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="h-16 text-2xl bg-slate-100 dark:bg-black/40 border-none rounded-2xl focus-visible:ring-2 focus-visible:ring-yellow-500 transition-all font-mono font-bold"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="gold-type" className="text-xs font-black uppercase tracking-widest ml-1">Pureza Selecionada</Label>
                      <Select value={goldType} onValueChange={setGoldType}>
                        <SelectTrigger className="h-16 text-lg bg-slate-100 dark:bg-black/40 border-none rounded-2xl focus:ring-2 focus:ring-yellow-500 font-bold uppercase">
                          <SelectValue placeholder="Selecione a pureza" />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-yellow-500/20 shadow-2xl">
                          <SelectItem value="24k">24k (Puro)</SelectItem>
                          <SelectItem value="18k">18k (750)</SelectItem>
                          <SelectItem value="14k">14k (585)</SelectItem>
                          <SelectItem value="dental">Ouro Dental</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <button
                      type="submit"
                      disabled={!weight || !goldType}
                      className="w-full h-16 rounded-2xl text-sm font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all disabled:opacity-20 bg-yellow-500 text-black hover:bg-yellow-400 hover:scale-[1.02] active:scale-95 shadow-lg shadow-yellow-500/20"
                    >
                      <Gauge className="w-5 h-5" />
                      Calcular Agora
                    </button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Resultado */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md bg-white dark:bg-zinc-950 border-yellow-500/20 overflow-hidden rounded-[2.5rem] p-0 shadow-2xl">
          <div className="p-8 text-center relative">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-yellow-400/10 to-transparent" />
            <DialogHeader className="relative z-10 pt-4">
              <div className="mx-auto w-20 h-20 mb-6 rounded-2xl bg-black flex items-center justify-center shadow-xl rotate-2">
                <img src={tatugoldLogo} alt="TatuGold" className="w-12 h-auto" />
              </div>
              <DialogTitle className="text-2xl font-black uppercase tracking-tighter">Resultado da Simulação</DialogTitle>
              <DialogDescription className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                {weight}g de Ouro {goldType}
              </DialogDescription>
            </DialogHeader>

            <div className="my-10">
              <div className="text-5xl sm:text-6xl font-mono font-black text-yellow-500 tracking-tighter">
                <CountUp end={estimatedValue} duration={1.5} decimals={2} prefix="R$ " separator="." decimal="," />
              </div>
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-[9px] font-black uppercase tracking-widest text-yellow-600 dark:text-yellow-400">
                <Sparkles className="w-3 h-3" /> Cotação Garantida
              </div>
            </div>

            <div className="space-y-3 relative z-10">
              <a
                href={`https://wa.me/5511972801984?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full h-16 rounded-2xl bg-green-600 hover:bg-green-500 text-white font-black uppercase tracking-widest text-sm shadow-xl shadow-green-500/20 transition-all active:scale-95"
              >
                Garantir Proposta
              </a>
              <DialogClose asChild>
                <Button variant="ghost" className="w-full text-[10px] font-black uppercase tracking-widest text-muted-foreground">Recalcular</Button>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GoldSimulator;