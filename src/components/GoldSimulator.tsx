import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, TrendingUp } from 'lucide-react';
import {
  Dialog,
  DialogTrigger,
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
  const [cotacao24k, setCotacao24k] = useState<number | null>(null);
  const [cotacaoDate, setCotacaoDate] = useState<string>('');
  const [error, setError] = useState(false);

  const purityFactors = {
    '24k': 1.0,
    '18k': 0.75,
    '14k': 0.585,
    '10k': 0.416,
    'dental': 0.83
  };

  const fetchCotacao = () => {
    fetch('https://economia.awesomeapi.com.br/json/last/XAU-BRL')
      .then(res => res.json())
      .then(data => {
        const valor = parseFloat(data.XAUBRL.bid);
        const dataFormatada = new Date(data.XAUBRL.create_date).toLocaleString('pt-BR');
        setCotacao24k(valor);
        setCotacaoDate(dataFormatada);
        setError(false);
      })
      .catch(() => {
        setError(true);
        setCotacao24k(null);
        setCotacaoDate('');
      });
  };

  useEffect(() => {
    fetchCotacao();
    const interval = setInterval(fetchCotacao, 600000); // 10 minutos
    return () => clearInterval(interval);
  }, []);

  const calculateValue = () => {
    if (weight && goldType && cotacao24k) {
      const fator = purityFactors[goldType as keyof typeof purityFactors];
      const valor = parseFloat(weight) * cotacao24k * fator;
      setEstimatedValue(valor);
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
    <Card className="card-elegant p-8">
      <div className="text-center mb-6">
        <Calculator className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-secondary mb-2">
          Simulador de Avaliação
        </h3>
        {error ? (
          <p className="text-red-500 text-sm">
            Erro ao carregar cotação. Tente novamente mais tarde.
          </p>
        ) : (
          <p className="text-muted-foreground">
            Cotação do ouro 24k: <strong>R$ {cotacao24k?.toFixed(2) || 'Carregando...'}</strong><br />
            Atualizado em: {cotacaoDate}
          </p>
        )}
      </div>

      <div className="space-y-6">
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
            <SelectContent>
              <SelectItem value="24k">Ouro 24k </SelectItem>
              <SelectItem value="18k">Ouro 18k </SelectItem>
              <SelectItem value="14k">Ouro 14k </SelectItem>
              <SelectItem value="10k">Ouro 10k </SelectItem>
              <SelectItem value="dental">Ouro Dental</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              onClick={calculateValue}
              className="btn-gold w-full"
              disabled={!weight || !goldType || !cotacao24k}
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Calcular Valor
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-md mx-auto text-center">
            <DialogHeader className="flex flex-col items-center justify-center">
              <img
                src={tatugoldLogo}
                alt="Logo Tatugold"
                className="w-48 md:w-64 h-auto mb-4 mx-auto drop-shadow-lg transition-all duration-500 ease-in-out"
              />

              <DialogTitle className="text-4xl font-bold text-primary">
                Valor Estimado
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-sm">
                Cotação atual: R$ {cotacao24k?.toFixed(2)} <br />
                Atualizado em: {cotacaoDate}
              </DialogDescription>
            </DialogHeader>

            <p className="text-3xl font-bold text-secondary mt-4 mb-2">
              {formattedValue}
            </p>

            <p className="text-xs text-muted-foreground font-bold mb-4">
              *Valor aproximado com base na cotação atual. Avaliação final será feita presencialmente.
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
      </div>
    </Card>
  );
};

export default GoldSimulator;
