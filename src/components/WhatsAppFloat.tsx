import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá, quero fazer uma avaliação gratuita com a Tatugold.");
    const phoneNumber = "5511972801984"; // Format: country code + number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default WhatsAppFloat;