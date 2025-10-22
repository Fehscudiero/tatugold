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
      className="bg-background py-24 px-6 mt-[-120px] sm:mt-0"
      aria-labelledby="testimonials-title"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Título fixo */}
        <header className="text-left" data-aos="fade-right">
          <h4 className="uppercase text-sm tracking-wide text-muted-foreground mb-2 font-bold">
            DEPOIMENTOS
          </h4>
          <h2
            id="testimonials-title"
            className="text-4xl md:text-5xl font-bold text-secondary leading-tight"
          >
            Leia Depoimentos De Clientes
          </h2>
          <p className="text-muted-foreground mt-4 text-base max-w-md">
            Histórias reais que refletem confiança, qualidade e atendimento personalizado.
          </p>
        </header>

        {/* Depoimento rotativo */}
        <div
          className="bg-primary text-primary-foreground rounded-xl p-8 shadow-xl transition-all duration-500"
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
                  <blockquote className="text-lg leading-relaxed italic font-bold text-card-foreground mb-4">
                    “{item.text}”
                  </blockquote>
                  <figcaption className="font-bold text-card-foreground text-base">
                    {item.name}
                  </figcaption>
                  <div className="text-muted-foreground font-semibold text-sm">CLIENTE</div>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
