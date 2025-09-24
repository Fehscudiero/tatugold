import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, TrendingUp } from 'lucide-react';

const GoldSimulator = () => {
  const [weight, setWeight] = useState('');
  const [goldType, setGoldType] = useState('');
  const [estimatedValue, setEstimatedValue] = useState(0);

  const goldPrices = {
    '18k': 240, // Preço por grama em reais
    '14k': 180,
    '10k': 140,
    'dental': 200
  };

  const calculateValue = () => {
    if (weight && goldType) {
      const price = goldPrices[goldType as keyof typeof goldPrices];
      const value = parseFloat(weight) * price;
      setEstimatedValue(value);
    }
  };

  return (
    <Card className="card-elegant p-8">
      <div className="text-center mb-6">
        <Calculator className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-secondary mb-2">
          Simulador de Avaliação
        </h3>
        <p className="text-muted-foreground">
          Descubra uma estimativa do valor do seu ouro
        </p>
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
              <SelectItem value="18k">Ouro 18k (750)</SelectItem>
              <SelectItem value="14k">Ouro 14k (585)</SelectItem>
              <SelectItem value="10k">Ouro 10k (416)</SelectItem>
              <SelectItem value="dental">Ouro Dental</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          onClick={calculateValue} 
          className="btn-gold w-full"
          disabled={!weight || !goldType}
        >
          <TrendingUp className="w-4 h-4 mr-2" />
          Calcular Valor
        </Button>

        {estimatedValue > 0 && (
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
            <p className="text-sm text-muted-foreground mb-2">Valor estimado:</p>
            <p className="text-3xl font-bold text-primary">
              R$ {estimatedValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              *Valor aproximado. Avaliação final será feita presencialmente.
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default GoldSimulator;