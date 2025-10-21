import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const ContactDetails = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const handleWhatsApp = () => {
        const message = encodeURIComponent("Olá, quero fazer uma avaliação gratuita com a Tatugold.");
        window.open(`https://wa.me/5511972801984?text=${message}`, '_blank');
    };

    const handleInstagram = () => {
        window.open('https://instagram.com/tatugold.joias', '_blank');
    };

    return (
        <section className="w-full px-4 sm:px-8 py-12 bg-background dark:bg-background transition-colors duration-500">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Contatos */}
                <div className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card
                            className="card-elegant p-6 text-center rounded-xl shadow-xl hover:shadow-2xl transition"
                            data-aos="fade-up"
                        >
                            <FaWhatsapp className="w-8 h-8 text-green-500 mx-auto mb-4 animate-bounce" />
                            <h3 className="font-semibold text-secondary dark:text-white mb-2">WhatsApp</h3>
                            <p className="text-muted-foreground mb-4">(11) 97280-1984</p>
                            <Button
                                onClick={handleWhatsApp}
                                size="sm"
                                className="btn-outline-gold w-full hover:scale-[1.02] transition"
                            >
                                Enviar Mensagem
                            </Button>
                        </Card>

                        <Card
                            className="card-elegant p-6 text-center rounded-xl shadow-xl hover:shadow-2xl transition"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <FaInstagram className="w-8 h-8 text-pink-500 mx-auto mb-4 animate-bounce" />
                            <h3 className="font-semibold text-secondary dark:text-white mb-2">Instagram</h3>
                            <p className="text-muted-foreground mb-4">@tatugold.joias</p>
                            <Button
                                onClick={handleInstagram}
                                size="sm"
                                className="btn-outline-gold w-full hover:scale-[1.02] transition"
                            >
                                Seguir
                            </Button>
                        </Card>
                    </div>

                    <Card
                        className="card-elegant p-6 rounded-xl shadow-xl hover:shadow-2xl transition"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="flex items-center space-x-4">
                            <Clock className="w-8 h-8 text-primary" />
                            <div>
                                <h3 className="text-lg font-semibold text-secondary dark:text-white mb-2">
                                    Horário de Funcionamento
                                </h3>
                                <div className="space-y-1 text-muted-foreground text-sm leading-relaxed">
                                    <p>Segunda à Sexta: 9h às 18h</p>
                                    <p>Sábado: 9h às 14h</p>
                                    <p>Domingo: Fechado</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Benefícios */}
                <div className="space-y-10 self-start">
                    <Card
                        className="card-elegant p-8 rounded-xl shadow-2xl border border-muted hover:shadow-3xl transition-all duration-300"
                        data-aos="fade-left"
                    >
                        <h3 className="text-2xl font-semibold text-secondary dark:text-white mb-6 text-center">
                            Por que escolher a Tatugold?
                        </h3>
                        <div className="space-y-6">
                            {[
                                { icon: '20', title: 'Anos de Tradição', desc: 'Mais de 20 anos de experiência no mercado de ouro' },
                                { icon: '💰', title: 'Melhor Preço Garantido', desc: 'Avaliação justa e pagamento imediato' },
                                { icon: '💎', title: 'Criações Exclusivas', desc: 'Joias personalizadas feitas especialmente para você' },
                                { icon: '🏆', title: 'Atendimento Local', desc: 'Compromisso e confiança com a comunidade' }
                            ].map((item, index) => (
                                <div key={index} className="flex items-start space-x-4 group">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                                        <span className="text-primary font-bold text-xl">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-secondary dark:text-white mb-1">{item.title}</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default ContactDetails;
