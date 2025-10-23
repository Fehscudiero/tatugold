import { useState } from 'react';
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
import { Calculator, TrendingUp } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from '@/components/ui/dialog';
import tatugoldLogo from '@/assets/tatugold-logo.png';

const GoldSimulator = () => {
  const [weight, setWeight] = useState('');
  const [goldType, setGoldType] = useState('');
  const [estimatedValue, setEstimatedValue] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const formattedValue = estimatedValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  const whatsappMessage = `Olá! Simulei ${weight}g de ouro ${goldType} e o valor estimado foi de ${formattedValue}. Gostaria de conversar sobre isso.`;

  return (
    <>
      <section
        id="gold-simulator"
        className="border-b border-gray-300 dark:border-neutral-700 pb-12 pt-12 px-4 sm:px-6 bg-background"
        aria-labelledby="simulator-title"
      >
        {/* Título fora do Card */}
        <header className="text-center mb-10" data-aos="fade-down">
          <h2
            id="simulator-title"
            className="text-gold-gradient text-4xl md:text-5xl font-bold text-secondary dark:text-white"
          >
            Simulador de Avaliação
          </h2>
          <p className="text-gray-800 dark:text-gray-100 text-lg font-medium mt-2">
            Calcule o valor estimado do seu ouro em segundos
          </p>
        </header>

        {/* Card com valores e formulário */}
        <Card
          className="w-full max-w-md sm:max-w-2xl mx-auto p-4 sm:p-6 rounded-xl shadow-lg border border-muted overflow-visible"
          data-aos="fade-up"
        >
          {/* Valores por grama */}
          <div className="text-center mb-6 text-sm text-muted-foreground">
            <p className="text-xl font-semibold mb-2 text-white">Valores por grama:</p>
            <ul className="space-y-1">
              <li><strong>24k</strong>: R$ 500,00</li>
              <li><strong>18k</strong>: R$ 300,00</li>
              <li><strong>14k</strong>: R$ 190,00</li>
              <li><strong>10k</strong>: R$ 90,00</li>
              <li><strong>Dental</strong>: R$ 200,00</li>
            </ul>
          </div>

          {/* Formulário */}
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleCalculate(); }}>
            <fieldset>
              <legend className="sr-only">Simulação de valor</legend>

              <div className="mb-18" >
                <Label htmlFor="weight" className="text-gray-800 dark:text-gray-100 text-sm font-medium">
                  Peso (gramas)
                </Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="Ex: 10.5"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="mt-2 focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div >
                <Label htmlFor="gold-type" className=" text-gray-800 dark:text-gray-100 text-sm font-medium">
                  Tipo de Ouro
                </Label>
                <Select value={goldType} onValueChange={setGoldType}>
                  <SelectTrigger className="mt-2 focus:ring-2 focus:ring-yellow-500">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent
                    side="top"
                    align="center"
                    position="popper"
                    className="max-h-[250px] overflow-y-auto z-[9999] w-full sm:w-[90%] sm:mx-auto bg-background rounded-lg shadow-lg border border-muted"
                  >
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
                className="mt-8 bg-yellow-500 text-black font-semibold px-6 py-3 rounded hover:brightness-90 transition w-full flex items-center justify-center gap-2"
                disabled={!weight || !goldType}
              >
                <TrendingUp className="w-4 h-4" />
                Calcular Valor
              </Button>
            </fieldset>
          </form>
        </Card>
      </section>

      {/* Modal de resultado */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] max-w-sm sm:max-w-md text-center bg-background border border-muted rounded-xl shadow-2xl p-6">
          <DialogHeader className="flex flex-col items-center justify-center">
            <img
              src={tatugoldLogo}
              alt="Logo Tatugold"
              className="w-40 sm:w-48 h-auto mb-4 mx-auto drop-shadow-lg"
            />
            <DialogTitle className="text-4xl font-extrabold text-yellow-500 mb-2">
              Valor Estimado
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground mb-4">
              Baseado nos valores fixos por tipo de ouro
            </DialogDescription>
          </DialogHeader>

          <p className="text-lg text-muted-foreground font-semibold mt-2">
            Valor estimado para <span className="text-primary font-bold">ouro {goldType}</span>:
          </p>
          <p className="text-2xl text-green-600 font-bold mb-2">
            {weight}g → {formattedValue}
          </p>

          <p className="text-xs text-muted-foreground font-bold mb-4">
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
            <Button variant="ghost" className="mt-4 w-full text-sm text-muted-foreground hover:text-primary">
              Fechar
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>

    </>
  );
};

export default GoldSimulator;
