import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, X, Bot } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Olá! Posso te ajudar a descobrir o valor do seu ouro ou criar sua joia personalizada?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickResponses = [
    'Quero vender meu ouro',
    'Criar joia personalizada',
    'Agendar atendimento',
    'Ver catálogo de joias'
  ];

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue;
    if (!messageText.trim()) return;

    setMessages(prev => [
      ...prev,
      { type: 'user', text: messageText },
      { 
        type: 'bot', 
        text: 'Obrigado pela sua mensagem! Em breve um de nossos especialistas entrará em contato. Para atendimento mais rápido, você pode nos chamar no WhatsApp.' 
      }
    ]);
    setInputValue('');
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-24 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="btn-gold rounded-full p-4 shadow-lg hover:shadow-xl"
          aria-label="Chat com TatuBot"
        >
          {isOpen ? <X size={24} /> : <Bot size={24} />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-40 right-6 z-50 w-80 max-w-[calc(100vw-3rem)]">
          <Card className="card-elegant overflow-hidden">
            {/* Header */}
            <div className="bg-primary p-4 text-primary-foreground">
              <div className="flex items-center space-x-3">
                <Bot className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold">TatuBot</h3>
                  <p className="text-xs opacity-90">Assistente Virtual da Tatugold</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-64 overflow-y-auto p-4 space-y-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Responses */}
            <div className="p-4 border-t border-border">
              <div className="grid grid-cols-2 gap-2 mb-3">
                {quickResponses.map((response, index) => (
                  <Button
                    key={index}
                    size="sm"
                    variant="outline"
                    className="text-xs h-8"
                    onClick={() => handleSendMessage(response)}
                  >
                    {response}
                  </Button>
                ))}
              </div>

              {/* Input */}
              <div className="flex space-x-2">
                <Input
                  placeholder="Digite sua mensagem..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button 
                  size="sm" 
                  className="btn-gold"
                  onClick={() => handleSendMessage()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatBot;