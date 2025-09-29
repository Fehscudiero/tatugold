import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
    '24k': 460.00,
    '18k': 300.00,
    '14k': 190.00,
    '10k': 90.00,
    'dental': 200.00
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
        className="flex justify-center items-start min-h-[80vh] pt-4 pb-4 px-4 sm:px-6 bg-background"
      >
        <Card className="max-w-md sm:max-w-2xl w-full p-4 sm:p-6 rounded-xl shadow-lg border border-muted overflow-visible">
          <div className="text-center mb-6">
            <Calculator className="w-10 h-10 text-primary mx-auto mb-3" />
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-1">Simulador de Avaliação</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Valores por grama:
            </p>
            <div className="mt-2 space-y-1 text-sm text-muted-foreground">
              <p><strong>24k</strong>: R$ 460,00</p>
              <p><strong>18k</strong>: R$ 300,00</p>
              <p><strong>14k</strong>: R$ 190,00</p>
              <p><strong>10k</strong>: R$ 90,00</p>
              <p><strong>Dental</strong>: R$ 200,00</p>
            </div>
          </div>

          <div className="space-y-2">
            <div>
              <Label htmlFor="weight" className="text-sm font-medium text-secondary">
                Peso (gramas)
              </Label>
              <Input
                id="weight"
                type="number"
                placeholder="Ex: 10.5"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="gold-type" className="text-sm font-medium text-secondary">
                Tipo de Ouro
              </Label>
              <Select value={goldType} onValueChange={setGoldType}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent
                  side="top"
                  align="center"
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
              onClick={handleCalculate}
              className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded hover:brightness-90 transition w-full"
              disabled={!weight || !goldType}
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Calcular Valor
            </Button>
          </div>
        </Card>
      </section>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] max-w-sm sm:max-w-md text-center">
          <DialogHeader className="flex flex-col items-center justify-center">
            <img
              src={tatugoldLogo}
              alt="Logo Tatugold"
              className="w-40 sm:w-48 h-auto mb-4 mx-auto drop-shadow-lg"
            />
            <DialogTitle className="text-3xl font-bold text-primary">Valor Estimado</DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm">
              Baseado nos valores fixos por tipo de ouro
            </DialogDescription>
          </DialogHeader>

          <p className="text-lg text-muted-foreground font-semibold mt-4">
            Valor estimado para <span className="text-primary font-bold">ouro {goldType}</span>:
          </p>
          <p className="text-xl text-secondary font-bold mb-2">
            {weight}g → {formattedValue}
          </p>

          <p className="text-xs text-muted-foreground font-bold mb-4">
            *Valor aproximado. Avaliação final será feita presencialmente.
          </p>

          <a
            href={`https://wa.me/5511972801984?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition"
          >
            Falar com a TATUGOLD
          </a>

          <DialogClose asChild>
            <Button variant="ghost" className="mt-4 w-full">
              Fechar
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GoldSimulator;
