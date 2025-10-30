import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    text: "Fui atendido com total transparência. Explicaram cada detalhe do processo e me passaram muita confiança!",
    name: "Diego Ribeiro Negreiros da Silva"
  },
  {
    text: "O atendimento foi impecável. Me senti respeitada e bem orientada do início ao fim.",
    name: "Camila Rodrigues"
  },
  {
    text: "Preço justo, sem enrolação. Recebi uma avaliação clara e honesta, exatamente como esperava.",
    name: "Carlos Henrique"
  },
  {
    text: "A equipe demonstrou profissionalismo em cada etapa. Tudo foi feito com seriedade e respeito.",
    name: "Luciana Ferreira"
  },
  {
    text: "Me surpreendi com a agilidade e clareza. Não precisei perguntar nada — tudo foi explicado com precisão.",
    name: "Marcos Vinícius"
  },
  {
    text: "Ambiente acolhedor, atendimento humano e direto. Dá pra ver que trabalham com ética.",
    name: "Patrícia Lima"
  },
  {
    text: "Transformaram minha joia antiga com muito cuidado e bom gosto. O resultado ficou incrível.",
    name: "Renato Oliveira"
  },
  {
    text: "Recebi o valor na hora, sem burocracia. Atendimento rápido e confiável.",
    name: "Fernanda Souza"
  },
  {
    text: "A loja transmite segurança desde o primeiro contato. Dá pra confiar de olhos fechados.",
    name: "João Pedro de Almeida"
  }
];

const TestimonialsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      className="border-b border-neutral-700 bg-background dark:bg-black text-foreground pt-32 pb-32 px-6 mt-0 sm:mt-0"
      aria-labelledby="testimonials-title"    >
      <div className="flex justify-center">
        <div className="bg-card text-card-foreground rounded-xl p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.1)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.2)] transition-colors duration-300 max-w-4xl w-full">
          {/* Título fixo */}
          <header className="text-left" data-aos="fade-right">
            <h2
              id="testimonials-title"
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Depoimentos De <span className="text-gold-gradient">Clientes</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-base max-w-md text-white">
              Histórias reais que refletem confiança, qualidade e atendimento personalizado.
            </p>
          </header>

          {/* Depoimento rotativo */}
          <div
            className="bg-card text-card-foreground rounded-xl p-8 shadow-xl transition-colors duration-300"
            data-aos="fade-left"
          >
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false
              }}
              loop={true}
              aria-label="Depoimentos de clientes"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <figure className="flex flex-col justify-center items-start">
                    <blockquote className="text-lg leading-relaxed italic font-bold mb-4">
                      “{item.text}”
                    </blockquote>
                    <figcaption className="font-bold text-base">
                      {item.name}
                    </figcaption>
                    <div className="text-muted-foreground font-semibold text-sm text-gold-gradient">CLIENTE</div>
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
