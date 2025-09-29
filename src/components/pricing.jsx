import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const categories = [
    {
      name: "Categoria A",
      price: "R$ 7.790",
      priceNote: "Por pessoa em quarto duplo",
      ctaHref:
        "https://api.whatsapp.com/send?phone=5554991831562&text=Ol%C3%A1!%20Estou%20navegando%20na%20p%C3%A1gina%20de%20viagem%20para%20o%20Peru%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20categoria%20A%20de%20hospedagem.",
      labels: {
        hotel: "Hotel Wifala ou similar",
        machu: "Hotel Ferre Boulevard ou similar",
        train: "Trem Expedition",
      },
      description: {
        hotel:
          "Hotéis um pouco mais afastados da Plaza de Armas. Região mais calma, sem o agito do centro, mas sem atrapalhar em nada os passeios. Ideal para descansar depois de um dia explorando Cusco.",
        machupicchu:
          "Opção básica, perfeita para pernoitar antes de Machu Picchu. Conforto simples, mas suficiente para explorar a cidade e estar bem localizado para a visita.",
        train:
          "A opção mais simples da linha de trens panorâmicos. Não tem serviço de bordo incluso, mas oferece snacks e bebidas à venda. O trajeto de 1h30 entre Cusco e Águas Calientes é a chance de ver de perto as paisagens típicas da região, que já valem a viagem.",
      },
      images: [
        { title: "Cusco",           caption: "Hotel Wifala ou similar",          src: "/img/beneficios/cusco.png" },
        { title: "Águas Calientes", caption: "Hotel Ferre Boulevard ou similar", src: "/img/beneficios/rectangle.png" },
        { title: "Águas Calientes", caption: "Trem Expedition",                   src: "/img/beneficios/trem.png" },
      ],
    },
    {
      name: "Categoria B",
      price: "R$ 8.990",
      priceNote: "Por pessoa em quarto duplo",
      ctaHref:
        "https://api.whatsapp.com/send?phone=5554991831562&text=Ol%C3%A1!%20Estou%20navegando%20na%20p%C3%A1gina%20de%20viagem%20para%20o%20Peru%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20categoria%20B%20de%20hospedagem.",
      labels: {
        hotel: "Hotel Limacpampa ou similar",
        machu: "Hotel Ferre Boulevard ou similar",
        train: "Trem Vistadome",
      },
      description: {
        hotel:
          "Hotéis centrais, bem próximos à Plaza de Armas, coração de Cusco. Excelente opção para quem quer estar perto dos principais restaurantes, cafés e pontos turísticos, sem abrir mão do conforto e da praticidade.",
        machupicchu:
          "Opção básica, perfeita para pernoitar antes de Machu Picchu. Conforto simples, mas suficiente para explorar a cidade e estar bem localizado para a visita.",
        train:
          "Uma experiência completa durante a viagem entre Cusco e Águas Calientes. O Vistadome conta com janelas panorâmicas maiores, que tornam o trajeto ainda mais impressionante. Além disso, oferece maior espaço entre os assentos, mais conforto, snacks inclusos e apresentações culturais a bordo, trazendo a cultura andina para dentro do trem.",
      },
      images: [
        { title: "Cusco",           caption: "Hotel Limacpampa ou similar", src: "/img/beneficios/trem.png" },
        { title: "Águas Calientes", caption: "Hotel Ferre Boulevard",       src: "/img/beneficios/boulevard.png" },
        { title: "Águas Calientes", caption: "Trem Vistadome",              src: "/img/beneficios/tremdois.png" },
      ],
    },
  ];

  return (
    <section id="hospedagem" className="py-16 md:py-20" style={{ backgroundColor: "#FFF2A6" }}>
      <div className="container">
        {/* Desktop title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 hidden md:block"
        >
          <div className="flex items-center justify-center gap-4">
            <h2
              className="font-black leading-tight"
              style={{ color: "#FD4F0D", fontFamily: '"Work Sans", sans-serif', fontSize: 65 }}
            >
              <img
                src="/img/beneficios/coin.png"
                alt="Ícone moeda"
                className="w-20 h-20 inline-block align-middle mr-2"
                style={{ objectFit: "contain" }}
              />
              Valor do pacote conforme <br /> opção de hospedagem <br /> escolhida
            </h2>
          </div>
        </motion.div>

        {/* Mobile title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="md:hidden mb-6 px-2"
        >
          <div className="flex items-start justify-center gap-2">
            <img
              src="/img/beneficios/coin.png"
              alt="Ícone moeda"
              className="w-10 h-10 shrink-0 mt-[2px]"
              style={{ objectFit: "contain" }}
            />
            <h2
              className="font-black leading-[1] text-[30px]"
              style={{ color: "#FD4F0D", fontFamily: '"Work Sans", sans-serif' }}
            >
              Valor do pacote conforme<br />opção de hospedagem escolhida
            </h2>
          </div>
        </motion.div>

        {/* ===== Categorias ===== */}
        <div className="space-y-10 md:space-y-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="mx-auto rounded-3xl shadow-xl md:p-8 p-4"
              style={{ backgroundColor: "#FAF3E1", width: "100%", maxWidth: 1290 }}
            >
              <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8">
                {/* ESQUERDA: textos (ALINHADOS À ESQUERDA) */}
                <div className="md:col-span-2">
                  {/* título categoria */}
                  <h3
                    className="hidden md:block mb-4"
                    style={{
                      color: "#FD4F0D",
                      fontFamily: '"Work Sans", sans-serif',
                      fontWeight: 900,
                      fontSize: 55,
                      lineHeight: 0.95,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {category.name}
                  </h3>
                  <h3
                    className="md:hidden mb-3"
                    style={{
                      color: "#FD4F0D",
                      fontFamily: '"Work Sans", sans-serif',
                      fontWeight: 900,
                      fontSize: 30,
                      lineHeight: 1,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {category.name}
                  </h3>

                  {/* BLOCO: rótulos + parágrafos alinhados à ESQUERDA */}
                  <div
                    className="space-y-3 md:space-y-4"
                    style={{ color: "#222223", fontFamily: '"Roboto Mono", monospace' }}
                  >
                    {[
                      { k: "hotel", label: category.labels.hotel, text: category.description.hotel },
                      { k: "machu", label: category.labels.machu, text: category.description.machupicchu },
                      { k: "train", label: category.labels.train, text: category.description.train },
                    ].map((b) => (
                      <div key={b.k}>
                        <p
                          className="text-left"
                          style={{
                            fontFamily: '"Work Sans", sans-serif',
                            fontWeight: 800,
                            fontSize: 12,
                            lineHeight: 1.1,
                          }}
                        >
                          {b.label}:
                        </p>
                        <p
                          className="text-left md:text-[10px]"
                          style={{ fontSize: 10, lineHeight: 1.35 }}
                        >
                          {b.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DIREITA: Preço + CTA (COLADO NO BALÃO AZUL) */}
                <div className="flex flex-col items-center md:items-end justify-center gap-0"> {/* Gap zerado */}
                  <div
                    className="text-center shadow-md rounded-[20px] md:rounded-[24px] flex flex-col items-center justify-center md:w-[350px] md:h-[163px]"
                    style={{ backgroundColor: "#A0D3F1", width: 260, height: 130 }}
                  >
                    <span
                      className="uppercase font-bold block"
                      style={{ color: "#222223", fontFamily: '"Roboto Mono", monospace', fontSize: 12, lineHeight: 1.35 }}
                    >
                      A partir de
                    </span>
                    <div
                      className="leading-none mt-1 font-extrabold"
                      style={{ color: "#FD4F0D", fontFamily: '"Work Sans", sans-serif', fontSize: 34 }}
                    >
                      {category.price}
                    </div>
                    <div
                      className="mt-1"
                      style={{ color: "#222223", fontFamily: '"Roboto Mono", monospace', fontSize: 13, lineHeight: 1.3 }}
                    >
                      {category.priceNote}
                    </div>
                  </div>

                  {/* Botão COLADO no balão azul */}
                  <a
                    href={category.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir WhatsApp para mais informações sobre ${category.name}`}
                    className="-mt-4" /* Margem negativa para colar */
                  >
                    <Button
                      className="rounded-full transition-all duration-300 hover:scale-105"
                      style={{
                        width: 240,
                        height: 44,
                        backgroundColor: "#FD4F0D",
                        color: "#222223",
                        fontWeight: 800,
                        letterSpacing: "0.3px",
                        boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
                        fontFamily: '"Work Sans", sans-serif',
                      }}
                    >
                      VEJA TODAS AS INFORMAÇÕES
                    </Button>
                  </a>
                </div>
              </div>

              {/* GALERIA */}
              <div className="grid md:grid-cols-3 gap-5 md:gap-6">
                {category.images.map((img, imgIndex) => (
                  <div key={imgIndex} className="rounded-2xl overflow-hidden">
                    <h4
                      className="text-center mb-2"
                      style={{
                        color: "#FD4F0D",
                        fontFamily: '"Work Sans", sans-serif',
                        fontWeight: 800,
                        fontSize: 28,
                        lineHeight: 1.1,
                      }}
                    >
                      {img.title}
                    </h4>

                    <a
                      href={img.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group rounded-2xl overflow-hidden shadow-lg mx-auto"
                      style={{ width: 350, height: 250 }}
                    >
                      <img
                        className="hidden md:block w-[350px] h-[250px] object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                        alt={img.caption}
                        src={img.src}
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        className="md:hidden block object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                        alt={img.caption}
                        src={img.src}
                        loading="lazy"
                        decoding="async"
                        style={{ width: 328, height: 234 }}
                      />
                    </a>

                    <p
                      className="text-center mt-2"
                      style={{ color: "#222223", fontFamily: '"Roboto Mono", monospace' }}
                    >
                      <span className="hidden md:inline" style={{ fontSize: 15, lineHeight: 1.35 }}>
                        {img.caption}
                      </span>
                      <span className="md:hidden" style={{ fontSize: 12, lineHeight: 1.25 }}>
                        {img.caption}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;