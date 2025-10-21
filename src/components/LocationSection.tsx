import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LocationSection = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <section
            id="location"
            className="w-full scroll-mt-20 px-4 sm:px-8 py-12 bg-gradient-subtle dark:bg-background transition-colors duration-500"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16" data-aos="fade-down">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary dark:text-white">
                        <span className="text-gold-gradient">Localização</span> e Contato
                    </h2>
                    <p className="text-lg sm:text-xl font-semibold text-secondary max-w-3xl mx-auto leading-relaxed">
                        Venha nos visitar ou entre em contato conosco
                    </p>
                </div>

                <Card
                    className="card-elegant p-3 max-w-md mx-auto rounded-lg shadow-md border border-muted mb-6"
                    data-aos="fade-up"
                >
                    <div className="flex items-start space-x-4">
                        <svg className="w-8 h-8 text-primary animate-pulse mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" /></svg>
                        <div>
                            <h3 className="text-xl font-semibold text-secondary dark:text-white mb-1">Endereço</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Rua Soriano de Souza, 190 - Tatuapé<br />
                                <span className="text-sm">(Próximo ao Shopping Metrô Boulevard Tatuapé)</span>
                            </p>
                        </div>
                    </div>
                </Card>

                <div
                    className="rounded-xl overflow-hidden shadow-lg border border-muted mb-16 max-w-6xl mx-auto"
                    data-aos="zoom-in"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.781739285376!2d-46.574893!3d-23.577563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5edb3f9e2b2f%3A0x2b1f2a1b5b6f9b2f!2sRua%20Soriano%20de%20Souza%2C%20190%20-%20Tatuap%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1695840000000"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    );
};

export default LocationSection;
