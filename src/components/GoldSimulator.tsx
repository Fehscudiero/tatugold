import { useState, useMemo } from "react";
import CountUp from "react-countup";

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
import { TrendingUp, Sparkles, Calculator } from "lucide-react";
import tatugoldLogo from "@/assets/tatugold-logo.webp";

const GoldSimulator = () => {
  const [weight, setWeight] = useState("");
  const [goldType, setGoldType] = useState("");
  const [estimatedValue, setEstimatedValue] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const particles = useMemo(() => 
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${10 + Math.random() * 10}s`,
      size: Math.random() > 0.7 ? 'w-2 h-2' : 'w-1 h-1',
    }))
  , []);

  const goldPrices = {
    "24k": 600.0,
    "18k": 400.0,
    "14k": 250.0,
    dental: 200.0,
  };

  const handleCalculate = () => {
    if (weight && goldType) {
      const valorPorGrama = goldPrices[goldType as keyof typeof goldPrices];
      const valor = parseFloat(weight) * valorPorGrama;
      setEstimatedValue(valor);
      setIsModalOpen(true);
    }
  };

  const whatsappMessage = `Olá! Simulei ${weight}g de ouro ${goldType} e o valor estimado foi de R$ ${estimatedValue.toFixed(2)}. Gostaria de conversar sobre isso.`;

  return (
    <>
      <section
        id="gold-simulator"
        className="w-full scroll-mt-20 px-4 sm:px-6 py-20 bg-background dark:bg-gradient-to-br dark:from-black dark:via-zinc-900 dark:to-black text-foreground dark:text-white transition-colors duration-300 relative overflow-hidden"
        aria-labelledby="simulator-title"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className={`absolute ${particle.size} bg-yellow-400 rounded-full opacity-40`}
              style={{
                left: particle.left,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
                animation: `float-particle ${particle.duration} linear infinite`,
                boxShadow: '0 0 8px rgba(251,191,36,0.6)',
              }}
            />
          ))}
        </div>
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(251,191,36,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.08)_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

        <div className="max-w-xl mx-auto relative z-10 px-2 sm:px-0">
          <header className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-yellow-400/20 to-amber-500/20 border border-yellow-400/30 mb-4 sm:mb-6">
              <Calculator className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-500" />
              <span className="text-xs sm:text-sm font-medium text-yellow-600 dark:text-yellow-400">Simulador</span>
            </div>

            <h2
              id="simulator-title"
              className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 bg-clip-text text-transparent"
            >
              Simulador de Avaliação
            </h2>
            <p className="text-muted-foreground text-sm sm:text-lg mt-2 sm:mt-3">
              Calcule o valor estimado do seu ouro em segundos
            </p>
          </header>

          <div className="gpu-accelerated">
            <Card className="relative overflow-hidden p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-2xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-white/20 hover:border-yellow-400/40 transition-all duration-500 mx-2 sm:mx-0">
              <div className="absolute top-0 right-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-gradient-to-br from-yellow-400/20 to-amber-500/10 rounded-full blur-2xl sm:blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 sm:w-32 lg:w-48 h-24 sm:h-32 lg:h-48 bg-gradient-to-tr from-amber-500/10 to-yellow-400/10 rounded-full blur-xl sm:blur-2xl" />

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-yellow-400/10 to-amber-500/10 border border-yellow-400/20">
                  <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-500 shrink-0" />
                  <div className="text-center">
                    <p className="text-xs sm:text-sm font-semibold text-yellow-600 dark:text-yellow-400">Valores por grama</p>
                    <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-1 mt-1 sm:mt-2 text-xs sm:text-sm">
                      <div><span className="font-bold">24k:</span> R$ 600</div>
                      <div><span className="font-bold">18k:</span> R$ 400</div>
                      <div><span className="font-bold">14k:</span> R$ 250</div>
                      <div><span className="font-bold">Dental:</span> R$ 200</div>
                    </div>
                  </div>
                </div>

                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleCalculate();
                  }}
                >
                  <div>
                    <Label htmlFor="weight" className="text-yellow-600 dark:text-yellow-100 font-medium">
                      Peso (gramas)
                    </Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="Ex: 10.5"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="mt-2 bg-white dark:bg-black/30 text-black dark:text-white border-yellow-500/50 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <Label htmlFor="gold-type" className="text-yellow-600 dark:text-yellow-100 font-medium">
                      Tipo de Ouro
                    </Label>
                    <Select value={goldType} onValueChange={setGoldType}>
                      <SelectTrigger className="mt-2 bg-white dark:bg-black/30 text-black dark:text-white border-yellow-500/50 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20">
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-zinc-900 border-yellow-500/50 text-black dark:text-white">
                        <SelectItem value="24k">Ouro 24k (Pureza total)</SelectItem>
                        <SelectItem value="18k">Ouro 18k (750 pontos)</SelectItem>
                        <SelectItem value="14k">Ouro 14k (585 pontos)</SelectItem>
                        <SelectItem value="dental">Ouro Dental</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <button
                    type="submit"
                    disabled={!weight || !goldType}
                    className="mt-8 w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-yellow-500 text-black font-bold text-lg shadow-lg hover:shadow-yellow-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <TrendingUp className="w-5 h-5" />
                    <span>Calcular Valor</span>
                  </button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-yellow-500/50 shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center text-black dark:text-white max-w-sm sm:max-w-md mx-4 w-[90%]">
          <DialogHeader className="flex flex-col items-center justify-center">
            <div className="relative mb-3 sm:mb-4 gpu-accelerated">
              <div className="absolute inset-0 bg-yellow-400/20 blur-2xl rounded-full" />
              <img src={tatugoldLogo} alt="Logo Tatugold" className="w-20 sm:w-28 lg:w-32 h-auto relative" />
            </div>
            <DialogTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-shimmer mb-1 sm:mb-2">
              Valor Estimado
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm text-muted-foreground">
              Baseado nos valores fixos por tipo de ouro
            </DialogDescription>
          </DialogHeader>

          <div className="my-3 sm:my-6 p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-yellow-400/10 to-amber-500/10 border border-yellow-400/20">
            <p className="text-sm sm:text-base mb-2">
              Ouro <span className="text-shimmer font-bold">{goldType}</span> ({weight}g)
            </p>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-600 dark:text-green-400 gpu-accelerated">
              <CountUp
                end={estimatedValue}
                duration={1.5}
                decimals={2}
                prefix="R$ "
                separator="."
                decimal=","
              />
            </div>
          </div>

          <p className="text-[10px] sm:text-xs text-muted-foreground mb-3 sm:mb-4">
            *Valor aproximado. Avaliação final será feita presencialmente.
          </p>

          <div className="flex justify-center">
            <a
              href={`https://wa.me/5511972801984?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base text-white overflow-hidden group hover:scale-105 active:scale-95 transition-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-400 to-green-600" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-300 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Falar com a TATUGOLD</span>
              </span>
            </a>
          </div>

          <DialogClose asChild>
            <Button
              variant="ghost"
              className="mt-3 sm:mt-4 w-full text-xs sm:text-sm text-muted-foreground hover:text-foreground"
            >
              Fechar
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GoldSimulator;