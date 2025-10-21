import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá, gostaria de fazer uma avaliação gratuita com a Tatugold.");
    const phoneNumber = "5511972801984";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-20 right-4 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Contato via WhatsApp"
      >
        <FaWhatsapp size={36} className="pulse-scale opacity-100" />
      </button>
    </div>
  );
};

export default WhatsAppFloat;
