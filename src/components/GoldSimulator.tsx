import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from '@/components/ui/dialog';
import { TrendingUp } from 'lucide-react';
import tatugoldLogo from '@/assets/tatugold-logo.webp';

const GoldSimulator = () => {
  const [weight, setWeight] = useState('');
  const [goldType, setGoldType] = useState('');
  const [estimatedValue, setEstimatedValue] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const goldPrices = {
    '24k': 500.0,
    '18k': 300.0,
    '14k': 190.0,
    '10k': 90.0,
    'dental': 200.0
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
        className="pb-12 pt-12 px-4 sm:px-6 bg-gradient-to-br from-zinc-900 via-black to-zinc-800 text-white"
        aria-labelledby="simulator-title"
      >
        <header className="text-center mb-10" data-aos="fade-down">
          <h2
            id="simulator-title"
            className="text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent"
          >
            Simulador de Avaliação
          </h2>
          <p className="text-gray-300 text-lg mt-2">
            Calcule o valor estimado do seu ouro em segundos
          </p>
        </header>

        <Card
          className="w-full max-w-xl mx-auto p-6 rounded-2xl shadow-2xl border border-yellow-500 bg-white/10 backdrop-blur-xl"
          data-aos="fade-up"
        >
          <div className="text-center mb-6 text-sm text-yellow-100">
            <p className="text-xl font-semibold mb-2">Valores por grama:</p>
            <ul className="space-y-1">
              <li><strong>24k</strong>: R$ 500,00</li>
              <li><strong>18k</strong>: R$ 300,00</li>
              <li><strong>14k</strong>: R$ 190,00</li>
              <li><strong>10k</strong>: R$ 90,00</li>
              <li><strong>Dental</strong>: R$ 200,00</li>
            </ul>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleCalculate(); }}>
            <div>
              <Label htmlFor="weight" className="text-yellow-100">Peso (gramas)</Label>
              <Input
                id="weight"
                type="number"
                placeholder="Ex: 10.5"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="mt-2 bg-black/30 text-white border-yellow-500 focus:ring-yellow-500"
              />
            </div>

            <div>
              <Label htmlFor="gold-type" className="text-yellow-100">Tipo de Ouro</Label>
              <Select value={goldType} onValueChange={setGoldType}>
                <SelectTrigger className="mt-2 bg-black/30 text-white border-yellow-500 focus:ring-yellow-500">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-yellow-500 text-white">
                  <SelectItem value="24k">Ouro 24k</SelectItem>
                  <SelectItem value="18k">Ouro 18k</SelectItem>
                  <SelectItem value="14k">Ouro 14k</SelectItem>
                  <SelectItem value="10k">Ouro 10k</SelectItem>
                  <SelectItem value="dental">Ouro Dental</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              className="mt-8 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full flex items-center justify-center gap-2"
              disabled={!weight || !goldType}
            >
              <TrendingUp className="w-5 h-5 animate-pulse" />
              Calcular Valor
            </Button>
          </form>
        </Card>
      </section>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-white/10 backdrop-blur-xl border border-yellow-500 shadow-2xl rounded-2xl p-8 text-center text-white">
          <DialogHeader className="flex flex-col items-center justify-center">
            <img src={tatugoldLogo} alt="Logo Tatugold" className="w-40 h-auto mb-4 drop-shadow-lg" />
            <DialogTitle className="text-4xl font-extrabold text-yellow-400 mb-2">
              Valor Estimado
            </DialogTitle>
            <DialogDescription className="text-sm text-yellow-100 mb-4">
              Baseado nos valores fixos por tipo de ouro.
            </DialogDescription>
          </DialogHeader>

          <p className="text-lg font-semibold mt-2">
            Valor estimado para <span className="text-yellow-300 font-bold">ouro {goldType}</span>:
          </p>
          <p className="text-3xl text-green-400 font-bold mb-2">
            <CountUp end={estimatedValue} duration={2} decimals={2} prefix="R$ " separator="." decimal="," />
          </p>

          <p className="text-xs text-yellow-100 font-bold mb-4">
            *Valor aproximado. Avaliação final será feita presencialmente.
          </p>

          <a
            href={`https://wa.me/5511972801984?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Falar com a TATUGOLD
          </a>

          <DialogClose asChild>
            <Button variant="ghost" className="mt-4 w-full text-sm text-yellow-100 hover:text-yellow-400">
              Fechar
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GoldSimulator;
