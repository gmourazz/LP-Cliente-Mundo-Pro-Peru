import React from "react";
import { motion } from "framer-motion";

/* ========= Animações ========= */
const popIn = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06 },
  }),
};

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, when: "beforeChildren" } },
};

const hoverFx = { y: -6, scale: 1.02 };
const tapFx = { scale: 0.98 };

/* ========= Card ========= */
function Card({ item, index }) {
  const Title = () => (
    <h3
      className="mb-2 text-center"
      style={{
        color: "#FD4F0D",
        fontFamily: '"Work Sans", sans-serif',
        fontWeight: 800,
        fontSize: "30px",
        lineHeight: 1.05,
        letterSpacing: "-0.01em",
      }}
    >
      {item.titleLines.map((line, i) => (
        <span key={i} className="block">
          {line}
        </span>
      ))}
    </h3>
  );

  return (
    <motion.div
      variants={popIn}
      initial="hidden"
      whileInView="show"
      custom={index}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={hoverFx}
      whileTap={tapFx}
      className="
        w-[320px] min-h-[220px] p-4
        md:w-[344px] md:min-h-[240px] md:px-6 md:py-5
        rounded-2xl text-center shadow-[0_12px_30px_rgba(0,0,0,.08)]
        hover:shadow-[0_14px_36px_rgba(0,0,0,.1)] transition-shadow duration-300
        flex flex-col items-center justify-start
      "
      style={{ backgroundColor: "#F2EA86" }}
    >
      <img
        src={item.iconSrc}
        alt=""
        className="w-11 h-11 md:w-10 md:h-10 object-contain mb-3"
        loading="lazy"
        aria-hidden="true"
      />

      <Title />

      <p
        className="text-center"
        style={{
          color: "#222223",
          fontFamily: '"Roboto Mono", monospace',
          fontWeight: 400,
          fontSize: "13px",
          lineHeight: 1.25,
          letterSpacing: "-0.01em",
        }}
      >
        {item.description}
      </p>
    </motion.div>
  );
}

const Benefits = () => {
  const benefits = [
    {
      iconSrc: "/img/beneficios/passagem-aerea.png",
      titleLines: ["Passagem", "Aérea"],
      description: (
        <>
          Brasil / Cusco / Brasil;
          <br />
          <strong>Saídas de:</strong>
          <br />
          POA/GRU/CWB/FLN/CNF/CGB/CGR
        </>
      ),
    },
    {
      iconSrc: "/img/beneficios/hospedagem.png",
      titleLines: ["Hospedagem"],
      description: (
        <>
          5 noites em Cusco
          <br />
          1 noite em Águas
          <br />
          Calientes;
        </>
      ),
    },
    {
      iconSrc: "/img/beneficios/assistencia.png",
      titleLines: ["Assistência"],
      description: (
        <>
          Acompanhamento pré-viagem
          <br />
          e durante a viagem 24Hrs;
        </>
      ),
    },
    {
      iconSrc: "/img/beneficios/passeios.png",
      titleLines: ["Passeios"],
      description: (
        <>
          • Excursão Machu Picchu com trem;
          <br />
          • Excursão ao vale sagrado dos Incas;
          <br />
          • Trilha pela montanha Arco-Íris;
          <br />
          • Excursão à lagoa Humantay;
        </>
      ),
    },
    {
      iconSrc: "/img/beneficios/alimentacao.png",
      titleLines: ["Alimentação"],
      description: (
        <>
          Café da manhã nos hotéis e nos
          <br />
          passeios Montanha Arco Íris e Lagoa
          <br />
          Humantay. Almoço nos passeios Vale
          <br />
          Sagrado, Montanha Arco Íris e Lagoa
          <br />
          Humantay.
        </>
      ),
    },
    {
      iconSrc: "/img/beneficios/franquia-bagagem.png",
      titleLines: ["Franquia de", "Bagagem"],
      description: (
        <>
          1 Item pessoal;
          <br />
          1 Bagagem de mão até 10Kg;
        </>
      ),
    },
    {
      iconSrc: "/img/beneficios/sem-preocupacao.png",
      titleLines: ["Viaje sem", "Preocupação"],
      description: (
        <>
          Preenchimento de formulários
          <br />
          necessários é conosco;
        </>
      ),
    },
    {
      iconSrc: "/img/beneficios/seguro-viagem.png",
      titleLines: ["Seguro", "Viagem"],
      description: (
        <>
          Plano de $ 15.000 para
          <br />
          despesas médicas;
        </>
      ),
    },
  ];

  const notIncluded = [
    {
      text:
        "Passeios não descritos\nIngressos Vale Sagrado,\nMontanha Arco Íris e \nLagoa Humantay \n(140 soles)",
      iconSrc: "/img/beneficios/padlock.png",
    },
    {
      text: "Demais serviços\nnão descritos",
      iconSrc: "/img/beneficios/Group.png",
    },
  ];

  return (
    <section id="viagem" className="py-12 md:py-16" style={{ backgroundColor: "#F9F2E1" }}>
      <div className="container mx-auto max-w-[1320px] px-4 md:px-6">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <p
            className="mb-3 md:mb-4 text-[18x] md:text-xl leading-[1.25] tracking-[-0.005em]"
            style={{ color: "#222223", fontFamily: '"Work Sans", sans-serif' }}
          >
            <strong>
              A sua melhor experiência de viagem
              <br />
              começa com a escolha certa da agência
              <br className="hidden md:block" />
              que irá te acompanhar.
            </strong>
          </p>

          <h2
            className="font-extrabold leading-[1.05] mb-2 md:mb-3 tracking-[-0.01em]"
            style={{
              color: "#FD4F0D",
              fontFamily: '"Work Sans", sans-serif',
              fontSize: "44px",
            }}
          >
            Viaje com a Mundo Pró!
          </h2>

          <p className="text-[16px] md:text-base leading-[1.15]" style={{ color: "#222223" }}>
            Confira o que preparamos para você.
          </p>
        </motion.div>

        {/* Grade 3×2 (primeiros 6) */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="
            grid grid-cols-1 
            sm:grid-cols-[repeat(2,320px)]
            md:grid-cols-[repeat(3,344px)]
            justify-center 
            gap-x-5 gap-y-5
            mb-4 md:mb-3
          "
        >
          {benefits.slice(0, 6).map((item, i) => (
            <Card key={item.titleLines.join("-")} item={item} index={i} />
          ))}
        </motion.div>

        {/* Últimas 2 centralizadas */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="
            grid grid-cols-1 
            sm:grid-cols-[repeat(2,320px)]
            md:grid-cols-[repeat(2,344px)]
            justify-center 
            gap-x-7 gap-y-6
            mb-8 md:mb-10
          "
        >
          {benefits.slice(6, 8).map((item, i) => (
            <Card key={item.titleLines.join("-")} item={item} index={6 + i} />
          ))}
        </motion.div>

        {/* Pacote Não Inclui */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <h3
            className="tracking-[-0.01em] mb-4 md:mb-6"
            style={{
              color: "#AC0039",
              fontFamily: '"Work Sans", sans-serif',
              fontWeight: 900,
              fontSize: "30px",
              lineHeight: 1.05,
            }}
          >
            Pacote Não Inclui
          </h3>

          <div className="flex flex-col md:flex-row gap-3 md:gap-6 justify-center items-center max-w-4xl mx-auto">
            {notIncluded.map((item, index) => (
              <motion.div
                key={index}
                variants={popIn}
                initial="hidden"
                whileInView="show"
                custom={index}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={hoverFx}
                whileTap={tapFx}
                className="
                  w-[320px] min-h-[140px] p-6
                  md:w-[344px] md:min-h-[150px] md:px-6 md:py-6
                  rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,.08)]
                  flex items-center justify-start text-left
                "
                style={{ backgroundColor: "#AC0039" }}
              >
                <div className="flex items-center gap-6 w-full">
                  <img
                    src={item.iconSrc}
                    alt=""
                    className="w-8 h-8 md:w-8 md:h-8 object-contain"
                    loading="lazy"
                    aria-hidden="true"
                  />
                  <p
                    style={{
                      color: "#FFFFFF",                       // branco
                      fontFamily: '"Work Sans", sans-serif',  // Work Sans
                      fontWeight: 800,                        // negrito
                      fontSize: "18px",                       // tamanho 22
                      lineHeight: 1.15,
                      letterSpacing: "-0.01em",
                      whiteSpace: "pre-line",                 // respeitar quebras \n
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
