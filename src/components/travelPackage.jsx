import React from "react";
import { motion } from "framer-motion";

/* ===== animações ===== */
const SPEED = 0.7;
const rowVariants = (fromLeft) => ({
  hidden: { opacity: 0, x: fromLeft ? -180 : 180 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      ease: [0.22, 1, 0.36, 1],
      duration: 0.6 * SPEED,
      delayChildren: 0.12 * SPEED,
      staggerChildren: 0.1 * SPEED,
    },
  },
});
const itemVariants = (fromLeft) => ({
  hidden: { opacity: 0, x: fromLeft ? -90 : 90, scale: 0.98 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.5 * SPEED },
  },
});

/* ===== dados ===== */
const days = [
  { day: "1º DIA", subtitle: "Chegada em Cusco", body: "Transfer até o hotel e dia livre em Cusco.", image: "/img/beneficios/primeirodia.png" },
  {
    day: "2º DIA",
    subtitle: "Cusco – Águas Calientes",
    body:
      "Retirada no hotel de Cusco e início do trajeto de duas horas de ônibus até a estação de trem de Ollantaytambo. Ao chegar, subiremos em um trem e faremos uma viagem de uma hora e meia adentrando a cordilheira dos Andes. Chegada ao povoado de Aguas Calientes, iremos levá-lo ao hotel onde nos hospedaremos essa noite. No resto da tarde, você terá tempo livre.",
    image: "/img/beneficios/segundodia.png",
  },
  {
    day: "3º DIA",
    subtitle: "Machu Picchu – Cusco",
    body:
      "Depois de tomar o café da manhã no hotel, pegaremos o ônibus para viver o ponto alto da viagem: Machu Picchu. Ao chegar lá, faremos uma visita guiada de duas horas. Depois, você terá outras duas horas de tempo livre para percorrer a zona ou subir por conta própria as montanhas Huayna Picchu ou Machu Picchu. A seguir, voltaremos de ônibus a Aguas Calientes, onde você terá tempo para almoçar por conta própria e seguir explorando o pequeno povoado andino. Finalizaremos a excursão voltando de trem até Ollantaytambo e de lá iremos de ônibus ao seu hotel de Cusco.",
    image: "/img/beneficios/terceirodia.png",
  },
  { day: "4º DIA", subtitle: "Vale Sagrado dos Incas", body: "Excursão ao Vale Sagrado dos Incas (13 horas). Visitando Chinchero, Moray, Maras, Salinas, Ollantaytambo e Pisac.", image: "/img/beneficios/quartodia.png" },
  {
    day: "5º DIA",
    subtitle: "Cusco - Trilha pela Montanha Arco-Íris",
    body:
      "Entre 4h e 5h, passaremos para buscá-lo no seu hotel de Cusco para começar esta experiência que será inesquecível. A rota que seguiremos é de dificuldade alta. Recomendamos este tour exclusivamente para pessoas que não tenham problemas cardíacos. O tour é feito em altas altitudes, que alcançam aproximadamente 5.200 metros.",
    image: "/img/beneficios/quintodia.png",
  },
  { day: "6º DIA", subtitle: "Cusco - Lagoa Humantay", body: "Nesta excursão à Lagoa Humantay, subiremos a mais de 4.000 metros para visitar um espetáculo da natureza localizado na Cordilheira dos Andes.", image: "/img/beneficios/sextodia.png" },
  { day: "7º DIA", subtitle: "Saída Cusco - Brasil", body: "Em horário previsto, transfer para o aeroporto e volta ao Brasil.", image: "/img/beneficios/setimodia.png" },
];

/* ===== tamanhos EXATOS dos balões (desktop) ===== */
const BALLOON_SIZE = [
  { w: 527, h: 109 }, // 1º
  { w: 736, h: 250 }, // 2º
  { w: 736, h: 318 }, // 3º
  { w: 738, h: 189 }, // 4º
  { w: 736, h: 301 }, // 5º
  { w: 738, h: 195 }, // 6º
  { w: 734, h: 186 }, // 7º
];

const OVERLAP_PX = 84;
const NEED_EXTRA_PADDING = new Set([0, 2, 4, 6]); // 1,3,5,7 com foto à esquerda

/* ===== estilos ===== */
const TEXT_STYLES = {
  title: (i) => ({
    fontSize: i >= 1 && i <= 5 ? "64px" : "60px",
    lineHeight: 0.62,
    letterSpacing: "-0.06em",
    marginBottom: i >= 1 && i <= 5 ? "3px" : "0px",
  }),
  subtitle: (i) => ({
    fontSize: i === 1 || i === 4 || i === 5 ? "26px" : "28px",
    lineHeight: 2,
    paddingBottom: "0px",
    borderBottom: "0px solid transparent",
    marginBottom: "8px",
  }),
  body: (i) => ({
    fontSize: i === 1 || i === 5 ? "12.6px" : i === 2 || i === 4 ? "12.6px" : i === 3 ? "13.2px" : "15px",
    lineHeight: i === 1 ? 1.12 : i === 5 ? 1.16 : 1.18,
    maxWidth: i === 1 ? "430px" : i === 2 ? "520px" : i === 3 ? "560px" : i === 4 ? "520px" : i === 5 ? "500px" : "auto",
    letterSpacing: "-0.01em",
  }),
  balloonPadding: (i) => ({
    paddingTop: i >= 1 && i <= 5 ? "18px" : "28px",
    paddingBottom: i >= 1 && i <= 5 ? "16px" : "26px",
  }),
};

/* ===== 2º DIA: linhas editáveis manualmente ===== */
const day2Lines = [
  "Retirada no hotel de Cusco e início do trajeto",
  "de duas horas de ônibus até a estação de trem",
  "de Ollantaytambo. Ao chegar, subiremos em um",
  "trem e faremos uma viagem de uma hora e meia",
  "adentrando a cordilheira dos Andes. Chegada ao",
  "povoado de Aguas Calientes, iremos levá-lo ao",
  "hotel onde nos hospedaremos essa noite. No",
  "resto da tarde, você terá tempo livre.",
];

export default function TravelPackage() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: "#A0D3F1" }}>
      <div className="container mx-auto max-w-[1320px] px-4 md:px-86">

        {/* =================== HEADER (DESKTOP) =================== */}
        <div className="hidden md:block">
          <div className="flex flex-col items-center text-center mb-16">
            {/* Título com mapinha à esquerda */}
            <div className="flex items-center gap-10">
              <img
                src="/img/mapinha.png"
                alt="Mapa"
                className="w-[64px] h-[50px] object-contain"
              />
              <h2
                className="font-extrabold"
                style={{
                  color: "#FD4F0D",
                  fontFamily: '"Work Sans", sans-serif',
                  fontSize: "60px",
                  lineHeight: 1,
                  letterSpacing: "-0.01em",
                }}
              >
                Nosso Pacote
              </h2>
            </div>

            {/* Subtítulo */}
            <div
              className="mt-4 font-extrabold"
              style={{
                color: "#222223",
                fontFamily: '"Work Sans", sans-serif',
                fontSize: "26px",
                lineHeight: 1.05,
              }}
            >
              Conheça o Peru com praticidade,<br />segurança e conforto
            </div>

            {/* Corpo */}
            <p
              className="mt-6 max-w-[720px]"
              style={{
                color: "#222223",
                fontFamily: '"Roboto Mono", monospace',
                fontSize: "15px",
                lineHeight: 1.35,
                letterSpacing: "-0.03em",
              }}
            >
              Nossos pacotes de viagem foram planejados para que você aproveite o melhor do Peru sem
              preocupações. Uma forma segura e organizada de explorar o país, com hospedagem, passeios
              e serviços que garantem mais comodidade durante toda a viagem.
            </p>
          </div>
        </div>

        {/* =================== HEADER (MOBILE) =================== */}
        <div className="md:hidden">
          <div className="flex flex-col items-center text-center mb-8">
            {/* Título com mapinha à esquerda (57.18 x 45) */}
            <div className="flex items-center gap-0">
              <img
                src="/img/mapinha.png"
                alt="Mapa"
                style={{ width: "50px", height: "45px" }}
                className="object-contain"
              />
              <h2
                className="font-extrabold"
                style={{
                  color: "#FD4F0D",
                  fontFamily: '"Work Sans", sans-serif',
                  fontSize: "30px",
                  lineHeight: 1,
                }}
              >
                Nosso Pacote
              </h2>
            </div>

            {/* Subtítulo (mesmas fontes do desktop) */}
            <div
              className="mt-5 font-extrabold"
              style={{
                color: "#222223",
                fontFamily: '"Work Sans", sans-serif',
                fontSize: "18px",
                lineHeight: 1.05,
              }}
            >
              Conheça o Peru com praticidade,<br />segurança e conforto
            </div>

            {/* Corpo (mesma fonte do desktop, menor por responsividade) */}
            <p
              className="mt-3 px-3 max-w-[330px]"
              style={{
                color: "#222223",
                fontFamily: '"Roboto Mono", monospace',
                fontSize: "11px",
                lineHeight: 1.35,
                letterSpacing: "-0.01em",
              }}
            >
              Nossos pacotes de viagem foram planejados para que você aproveite o melhor do Peru sem
              preocupações. Uma forma segura e organizada de explorar o país, com hospedagem, passeios
              e serviços que garantem mais comodidade durante toda a viagem.
            </p>
          </div>
        </div>

        {/* =================== LISTA DE DIAS (DESKTOP) =================== */}
        <div className="hidden md:block">
          <div className="space-y-20">
            {days.map((d, i) => {
              const imageLeft = i % 2 === 0;
              const fromLeft = imageLeft;
              const { w, h } = BALLOON_SIZE[i];

              let padLeft = 32;
              let padRight = 32;
              if (imageLeft && NEED_EXTRA_PADDING.has(i)) padLeft = 32 + OVERLAP_PX;

              const titleS = TEXT_STYLES.title(i);
              const subS = TEXT_STYLES.subtitle(i);
              const bodyS = TEXT_STYLES.body(i);
              const padS = TEXT_STYLES.balloonPadding(i);

              // deslocamentos de TEXTO apenas para o 2º DIA (como no seu código)
              const shiftTitle = i === 1 ? 210 : 0;
              const shiftInner = i === 1 ? 180 : 0;

              return (
                <motion.div
                  key={`desk-${d.day}`}
                  variants={rowVariants(fromLeft)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.45, margin: "-10% 0px -10% 0px" }}
                  className={`relative flex flex-col items-center gap-10 ${imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Imagem */}
                  <motion.div
                    variants={itemVariants(fromLeft)}
                    className="relative z-20 w-full max-w-[560px] h-[410px] rounded-[28px] overflow-hidden shadow-2xl"
                  >
                    <img src={d.image} alt={d.subtitle} className="w-full h-full object-cover" />
                  </motion.div>

                  {/* Texto */}
                  <motion.div
                    variants={itemVariants(fromLeft)}
                    className="relative z-10 w-full"
                    style={{ maxWidth: Math.max(w + OVERLAP_PX, 760) }}
                  >
                    {/* TÍTULO */}
                    <div
                      className="font-extrabold"
                      style={{
                        color: "#FD4F0D",
                        fontFamily: '"Work Sans", sans-serif',
                        ...titleS,
                        marginLeft: shiftTitle,
                      }}
                    >
                      {d.day}
                    </div>

                    {/* BALÃO */}
                    <div
                      className="rounded-[24px] shadow-xl"
                      style={{
                        backgroundColor: "#F9F2E1",
                        width: `${w}px`,
                        minHeight: `${h}px`,
                        paddingLeft: `${padLeft + shiftInner}px`,
                        paddingRight: `${padRight}px`,
                        ...padS,
                        marginLeft: imageLeft ? `-${OVERLAP_PX}px` : 0,
                        marginRight: imageLeft ? 0 : `-${OVERLAP_PX}px`,
                      }}
                    >
                      <h3
                        className="font-extrabold"
                        style={{
                          color: "#FD4F0D",
                          fontFamily: '"Work Sans", sans-serif',
                          letterSpacing: "-0.01em",
                          display: "inline-block",
                          ...subS,
                        }}
                      >
                        {d.subtitle}
                      </h3>

                      {i === 1 ? (
                        <div
                          style={{
                            color: "#222223",
                            fontFamily: '"Roboto Mono", monospace',
                            textAlign: "left",
                            ...bodyS,
                            fontSize: "12.6px",
                            lineHeight: 1.12,
                            wordSpacing: "3.0px",
                          }}
                        >
                          <div className="flex flex-col gap-1">
                            {day2Lines.map((line, idx) => (
                              <span key={idx} className="block">
                                {line}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p
                          style={{
                            color: "#222223",
                            fontFamily: '"Roboto Mono", monospace',
                            textAlign: "left",
                            ...bodyS,
                          }}
                        >
                          {d.body}
                        </p>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =================== LISTA DE DIAS (MOBILE) =================== */}
        <div className="md:hidden">
          <div className="flex flex-col items-center gap-10">
            {days.map((d) => (
              <motion.div
                key={`mob-${d.day}`}
                variants={rowVariants(true)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                className="w-full flex flex-col items-center"
              >
                <div
                  className="font-extrabold text-center"
                  style={{
                    color: "#FD4F0D",
                    fontFamily: '"Work Sans", sans-serif',
                    fontSize: "40px",
                    lineHeight: 0.9,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {d.day}
                </div>

                <div className="relative w-[340px]">
                  <div className="absolute top-0 left-0 right-0 h-[252px] rounded-[20px] overflow-hidden shadow-xl z-20">
                    <img src={d.image} alt={d.subtitle} className="w-full h-full object-cover" />
                  </div>

                  <div
                    className="relative z-10 rounded-[20px] shadow-md px-5 pt-20 pb-5 mt-[210px]"
                    style={{ backgroundColor: "#F9F2E1" }}
                  >
                    <h3
                      className="font-extrabold mb-2"
                      style={{
                        color: "#FD4F0D",
                        fontFamily: '"Work Sans", sans-serif',
                        fontSize: "20px",
                        lineHeight: 0.95,
                        letterSpacing: "-0.015em",
                      }}
                    >
                      {d.subtitle}
                    </h3>
                    <p
                      style={{
                        color: "#222223",
                        fontFamily: '"Roboto Mono", monospace',
                        fontSize: "13px",
                        lineHeight: 1.16,
                        letterSpacing: "-0.01em",
                        textAlign: "left",
                      }}
                    >
                      {d.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
