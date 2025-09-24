import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-6 md:pt-24 pb-0 md:pb-0"
      style={{ background: "#A0D3F1" }}
    >
      <style>{`
        @keyframes marqueeX { 
          0% { transform: translateX(0) } 
          100% { transform: translateX(-50%) } 
        }
        .marquee-track { display:flex; width:200% }
        .marquee-track > span { flex:0 0 50%; white-space:nowrap }
        html:focus-within { scroll-behavior: smooth; }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; transform: translateX(0) !important; }
        }
      `}</style>

      <div className="container mx-auto max-w-[1320px] px-4 lg:px-6">
        {/* ===== DESKTOP ===== */}
        <div className="hidden md:grid grid-cols-[320px_minmax(620px,1fr)_360px] gap-x-12 gap-y-12 items-start">
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="pt-20 md:-ml-6 lg:-ml-3"
          >
            <h1
              style={{
                color: "#AC0039",
                fontFamily: '"Work Sans", sans-serif',
                fontWeight: 900,
                fontSize: "50px",
                lineHeight: "50px",
                letterSpacing: "0",
                margin: 0,
              }}
            >
              Uma viagem <span className="block">inesquecível</span>
              <span className="block">pelo Peru</span>
            </h1>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="self-start md:-ml-4 lg:-ml-4 md:translate-y-3"
          >
            <div
              className="overflow-hidden w-full md:h-[530px]"
              style={{
                aspectRatio: "865 / 727",
                height: 530,
                borderRadius: "220px 220px 0 0",
              }}
            >
              <img
                src="/img/imagemcabecalho.png"
                alt="Machu Picchu"
                className="w-full h-full object-cover object-center"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </motion.div>

          {/* Texto direita */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="self-start pt-24 pr-20"
          >
            <div
              className="text-[15px] leading-[1.15] max-w-[360px] tracking-[-0.004em]"
              style={{ color: "#222223", fontFamily: '"Roboto Mono", monospace' }}
            >
              Conheça de perto a história,<br />
              a cultura e as paisagens que fazem<br />
              do Peru um destino único. Em nosso pacote de viagem, você poderá visitar<br />
              Machu Picchu, explorar os Andes<br />
              e experimentar a gastronomia local.<br />
              Tudo com hospedagem em hotéis selecionados, passeios guiados<br />
              e uma programação pensada para<br />
              oferecer conforto e praticidade durante a sua viagem.
              <br /><br />
              <strong>
                Uma oportunidade única para viver<br />
                a história e a natureza de<br />
                um dos países mais fascinantes<br />
                da América do Sul.
              </strong>
            </div>
          </motion.div>
        </div>

        {/* ===== MOBILE ===== */}
        <div className="md:hidden">
          <h1
            className="mt-12"
            style={{
              color: "#AC0039",
              fontFamily: '"Work Sans", sans-serif',
              fontWeight: 900,
              fontSize: "40px",
              lineHeight: "40px",
            }}
          >
            Uma viagem <span className="block">inesquecível</span>
            <span className="block">pelo Peru</span>
          </h1>

          <div
            className="mt-10"
            style={{
              fontFamily: '"Roboto Mono", monospace',
              fontSize: "11px",
              lineHeight: 1.12,
              letterSpacing: "-0.01em",
              color: "#222223",
              textAlign: "justify",
            }}
          >
            Conheça de perto a história, a cultura e as paisagens que fazem do Peru um destino único.
            Em nosso pacote de viagem, você poderá visitar Machu Picchu, explorar os Andes e
            experimentar a gastronomia local. Tudo com hospedagem em hotéis selecionados, passeios
            guiados e uma programação pensada para oferecer conforto e praticidade durante a sua viagem.
            <br /><br />
            <strong>
              Uma oportunidade única para viver a história e a natureza de um dos países mais
              fascinantes da América do Sul.
            </strong>
          </div>

          {/* Imagem fixa 330x349, encostando no final */}
          <div className="mt-5 relative">
            <div
              className="overflow-hidden mx-auto"
              style={{
                width: 300,
                height: 349,
                borderTopLeftRadius: 120,
                borderTopRightRadius: 120,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              }}
            >
              <img
                src="/img/imagemcabecalho.png"
                alt="Machu Picchu"
                className="w-full h-full object-cover object-center"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===== Marquee Mobile (subido) ===== */}
      <div className="relative z-30 md:hidden -mt-20 -mb-2 py-0 overflow-hidden pointer-events-none">
        <div className="marquee-track" style={{ animation: "marqueeX 3.6s linear infinite" }} aria-hidden="true">
          <span
            className="font-extrabold leading-none tracking-[-0.01em]"
            style={{ color: "#F9F2E1", fontFamily: '"Work Sans", sans-serif', fontSize: "86px" }}
          >
            CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU •
          </span>
          <span
            className="font-extrabold leading-none tracking-[-0.01em]"
            aria-hidden
            style={{ color: "#F9F2E1", fontFamily: '"Work Sans", sans-serif', fontSize: "86px" }}
          >
            CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU •
          </span>
        </div>
      </div>

      {/* ===== Marquee Desktop ===== */}
      <div className="relative z-50 hidden md:block py-0 pointer-events-none">
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-[-22px] w-[100vw] overflow-hidden"
          aria-hidden="true"
        >
          <div className="marquee-track" style={{ animation: "marqueeX 14s linear infinite" }}>
            <span
              className="font-extrabold leading-none tracking-[-0.01em]"
              style={{ color: "#F9F2E1", fontFamily: '"Work Sans", sans-serif', fontSize: "clamp(34px,5.2vw,94px)" }}
            >
              CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU •
            </span>
            <span
              className="font-extrabold leading-none tracking-[-0.01em]"
              aria-hidden
              style={{ color: "#F9F2E1", fontFamily: '"Work Sans", sans-serif', fontSize: "clamp(34px,5.2vw,94px)" }}
            >
              CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU •
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
