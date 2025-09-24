import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const WIDTH = 1154;
const Q_HEIGHT = 80;
const A_HEIGHT = 179;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleItem = (i) => setOpenIndex(openIndex === i ? null : i);

  // renderiza resposta com tamanho configurável
  const renderAnswer = (text, sizePx = 15) =>
    String(text)
      .split(/\n\s*\n/)
      .map((chunk, i) => (
        <p
          key={i}
          style={{
            color: "#000",
            fontFamily: '"Roboto Mono", monospace',
            fontSize: sizePx,
            lineHeight: 1.35,
            letterSpacing: "0.1px",
            marginTop: i === 0 ? 0 : "1.1em",
            textAlign: "center",
            fontWeight: 400, // regular
          }}
        >
          {chunk}
        </p>
      ));

  const faqs = [
    {
      q: "Essa viagem é em excursão?",
      a: "Não, nossa viagem não é em grupo fechado, o que significa que você terá a liberdade de explorar e aproveitar cada momento conforme suas preferências. Durante os passeios, você estará acompanhado por um guia especializado que irá fornecer informações e orientações, garantindo uma experiência enriquecedora. Além disso, você terá a oportunidade de interagir e conhecer outras pessoas que também estão participando dos passeios.",
    },
    {
      q: "Os ingressos estão inclusos?",
      a: "Machu Picchu já inclui ingresso. Não inclui ingresso da Montanha Colorida (30 soles), o Boleto Turístico do Vale Sagrado (90 soles) e o ingresso da Lagoa Humantay (20 soles).",
    },
    {
      q: "Os transportes até pontos turísticos estão inclusos?",
      a: "Sim! Todos os passeios incluem transporte desde o hotel até o destino visitado. No retorno, os tours costumam finalizar na Plaza de Armas, o coração de Cusco.",
    },
    {
      q: "Qual o gasto médio com alimentação?",
      a: "Os gastos diários variam. Em média, considere 100 a 150 soles por dia (aprox. R$ 130 a R$ 200).",
    },
    {
      q: "Qual é a melhor época do ano para visitar o Peru?",
      a: "A estação seca (maio a setembro) tem clima mais estável e menos chuvas — ideal para passeios e fotos.",
    },
    {
      q: "É seguro viajar para o Peru?",
      a: "Sim. Com precauções normais, é um destino seguro. Nossa equipe local dá suporte durante a viagem.",
    },
    {
      q: "É possível estender a duração da viagem ou adicionar outros destinos ao pacote original?",
      a: "Sim, podemos aumentar ou diminuir noites no Peru e incluir destinos como Lima.",
    },
    {
      q: "Quais são os documentos necessários para viajar para o Peru?",
      a: "Passaporte válido ou RG emitido há menos de 10 anos.",
    },
    {
      q: "Quais são os métodos de pagamento aceitos para o pacote de viagem?",
      a: "Até 10x sem juros no cartão de crédito (consulte condições).",
    },
    {
      q: "Há alguma restrição de idade para participar das atividades no Peru?",
      a: "Para crianças pequenas ou idosos com mobilidade reduzida, avalie necessidades/limitações antes de confirmar.",
    },
    {
      q: "Vi que o pacote é para um mês específico. Posso viajar em outro mês? E tem saída de outra cidade do Brasil?",
      a: "Sim. O pacote foi simulado no mês com melhor tarifa, mas simulamos outras datas e saídas de qualquer cidade do Brasil.",
    },
    {
      q: "Como funciona o suporte da agência durante a viagem?",
      a: "Suporte 24h durante toda a viagem, com equipe pronta para te auxiliar no que precisar.",
    },
    {
      q: "Mas moro longe da agência, como vou fazer o pagamento?",
      a: "Atendimento 100% online e seguro — tudo resolvido à distância.",
    },
  ];

  return (
    <section id="duvidas" className="py-10" style={{ backgroundColor: "#F9F2E1" }}>
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        {/* TÍTULO DESKTOP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 hidden md:block"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <img
              src="/img/beneficios/question.png"
              alt="Dúvidas frequentes"
              className="w-[72px] h-[72px] object-contain"
            />
            <h2
              className="leading-tight"
              style={{
                color: "#FD4F0D",
                fontFamily: '"Work Sans", sans-serif',
                fontWeight: 900,
                fontSize: 65,
              }}
            >
              Dúvidas Frequentes
            </h2>
          </div>
        </motion.div>

        {/* TÍTULO MOBILE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="md:hidden mb-5 px-3"
        >
          <div className="flex items-center gap-3">
            <img
              src="/img/beneficios/question.png"
              alt="Dúvidas frequentes"
              className="w-12 h-12 object-contain"
            />
            <h2
              className="leading-[1] text-[35px]"
              style={{ color: "#FD4F0D", fontFamily: '"Work Sans", sans-serif', fontWeight: 900 }}
            >
              Dúvidas
              <br />
              Frequentes
            </h2>
          </div>
        </motion.div>

        {/* LISTA DESKTOP */}
        <div className="space-y-4 mx-auto hidden md:block" style={{ width: WIDTH }}>
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="rounded-2xl overflow-hidden shadow-md" style={{ width: WIDTH }}>
                {/* PERGUNTA (título 10px desktop) */}
                <button
                  onClick={() => toggleItem(index)}
                  className="relative flex items-center justify-center text-center"
                  style={{
                    backgroundColor: "#FD4F0D",
                    width: WIDTH,
                    height: Q_HEIGHT,
                    paddingLeft: 24,
                    paddingRight: 56,
                    borderRadius: 18,
                  }}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                >
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontFamily: '"Work Sans", sans-serif',
                      fontWeight: 900,
                      fontSize: 30, // pedido
                      lineHeight: 1.1,
                    }}
                  >
                    {item.q}
                  </span>

                  <div
                    className="absolute"
                    style={{
                      right: 16,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#FFFFFF",
                    }}
                  >
                    {isOpen ? <ChevronUp className="w-7 h-7" /> : <ChevronDown className="w-7 h-7" />}
                  </div>
                </button>

                {/* RESPOSTA (15px desktop) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-${index}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: A_HEIGHT, opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      style={{
                        backgroundColor: "#FFF2A6",
                        width: WIDTH,
                        overflow: "hidden",
                        borderRadius: 18,
                      }}
                    >
                      <div className="h-full w-full flex items-center justify-center px-6">
                        <div className="w-full" style={{ maxWidth: 920 }}>
                          {renderAnswer(item.a, 15)}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* LISTA MOBILE */}
        <div className="md:hidden px-4 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="rounded-2xl overflow-hidden shadow-md">
                {/* PERGUNTA (título 15px mobile) */}
                <button
                  onClick={() => toggleItem(index)}
                  className="relative w-full flex items-center justify-between px-4 h-14 rounded-2xl"
                  style={{ backgroundColor: "#FD4F0D" }}
                  aria-expanded={isOpen}
                  aria-controls={`m-faq-content-${index}`}
                >
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontFamily: '"Work Sans", sans-serif',
                      fontWeight: 900,
                      fontSize: 15, // pedido
                      lineHeight: 1.1,
                      textAlign: "left",
                    }}
                  >
                    {item.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white" />
                  )}
                </button>

                {/* RESPOSTA (10px mobile) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`m-faq-content-${index}`}
                      key="m-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden rounded-2xl"
                      style={{ backgroundColor: "#FFF2A6" }}
                    >
                      <div className="px-4 py-3">{renderAnswer(item.a, 10)}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
