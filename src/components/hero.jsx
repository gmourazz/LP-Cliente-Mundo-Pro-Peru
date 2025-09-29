import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-16 md:pt-38 pb-0"
      style={{ background: "#A0D3F1" }}
    >
      <style>{`
        /* REMOVE TODAS AS SOMBRAS */
        * {
          text-shadow: none !important;
          box-shadow: none !important;
          filter: none !important;
        }
        
        /* GARANTE QUE NÃO HAJA SOMBRAS EM ELEMENTOS ESPECÍFICOS */
        section, div, img, h1, span, strong, p {
          text-shadow: none !important;
          box-shadow: none !important;
          filter: none !important;
        }

        @keyframes marqueeX { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .marquee-track { display:flex; width:200% }
        .marquee-track > span { flex:0 0 50%; white-space:nowrap }

        @keyframes marqueeMobile { 0%{transform:translate3d(0,0,0)} 100%{transform:translate3d(-33.3333%,0,0)} }
        .marquee-mobile__inner { display:flex; width:300%; animation:marqueeMobile 6s linear infinite; will-change:transform; backface-visibility:hidden; transform:translateZ(0) }
        .marquee-mobile__group { flex:0 0 33.3333%; display:flex; align-items:center; white-space:nowrap }
        .marquee-mobile__text { display:inline-block; white-space:nowrap; margin:0; letter-spacing:0; lineHeight:1 }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track, .marquee-mobile__inner { animation:none !important; transform:translateX(0)!important }
        }
      `}</style>

      <div className="container mx-auto max-w-[1320px] px-4 lg:px-2">
        {/* ====== DESKTOP ====== */}
        <div className="hidden md:grid items-center gap-8 lg:gap-8 lg:grid-cols-[300px_1fr_360px] lg:-translate-x-8 xl:-translate-x-12">
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left md:-mt-32 lg:-mt-22 md:-ml-12 lg:ml-10"
          >
            <h1
              className="!font-extrabold !tracking-tight leading-[0.75] [text-wrap:balance]"
              style={{
                color: "#AC0039",
                fontFamily: '"Work Sans", sans-serif',
                fontSize: "clamp(26px, 4vw, 46px)",
              }}
            >
              Uma viagem <span className="block">inesquecível</span>
              <span className="block">pelo Peru</span>
            </h1>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative flex justify-center lg:justify-self-center md:mt-6 lg:mt-4"
          >
            <div
              className="overflow-hidden w-full md:w-[645px] md:h-[565px]"
              style={{
                aspectRatio: "865 / 727",
                borderRadius: "220px 220px 0 0",
              }}
            >
              <div
                className="hidden md:block h-full"
                style={{
                  width: "calc(100% + (50vw - 50%))",
                  marginRight: "calc(50% - 50vw)",
                  height: "100%",
                  borderRadius: "220px 220px 0 0",
                  overflow: "hidden",
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
              <img
                src="/img/imagemcabecalho.png"
                alt="Machu Picchu"
                className="md:hidden w-full h-full object-cover object-center"
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>

          {/* Texto direita */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-left md:mt-6 lg:mt-8 md:ml-6 lg:ml-10 xl:ml-14"
          >
            <div
              className="text-[15px] font-normal leading-[1.35]"
              style={{
                color: "#222223",
                fontFamily: '"Roboto Mono", monospace',
              }}
            >
              Conheça de perto a história, a cultura e as paisagens que fazem do Peru um destino único. Em nosso pacote de viagem, você poderá visitar Machu Picchu, explorar os Andes e experimentar a gastronomia local. Tudo com hospedagem em hotéis selecionados, passeios guiados e uma programação pensada para oferecer conforto e praticidade durante a sua viagem.
              <br /><br />
              <strong>
                Uma oportunidade única para viver a história e a natureza de um dos países mais fascinantes da América do Sul.
              </strong>
            </div>
          </motion.div>
        </div>

        {/* ====== MOBILE ====== */}
        <div className="md:hidden -mt-14">
          <h1
            className="font-extrabold leading-[0.80] mt-0"
            style={{
              color: "#AC0039",
              fontFamily: '"Work Sans", sans-serif',
              fontSize: "32px",
            }}
          >
            <strong>
              Uma viagem <span className="block">inesquecível</span>
              <span className="block">pelo Peru</span>
            </strong>
          </h1>

          <div
            className="mt-8"
            style={{
              fontFamily: '"Roboto Mono", monospace',
              fontSize: "10px",
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

          {/* APENAS A IMAGEM DESCE - AJUSTADO PARA ENCOSTAR NO FINAL */}
          <div className="mt-2 relative">
            <div
              className="overflow-hidden w-full max-w-full mx-auto"
              style={{
                aspectRatio: "865 / 890",
                borderTopLeftRadius: 120,
                borderTopRightRadius: 120,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                marginLeft: '-0rem',
                marginRight: '-1rem',
                zIndex: 20,
                maxHeight: "380px",
              }}
            >
              <img
                src="/img/imagemcabecalho.png"
                alt="Machu Picchu"
                className="w-full h-full object-cover object-center"
                style={{ 
                  objectPosition: "center 25%"
                }}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ====== FAIXA MARQUEE — MOBILE ====== */}
      <div className="relative z-30 md:hidden -mt-20 -mb-4 py-0 overflow-hidden pointer-events-none">
        <div className="marquee-mobile__inner" aria-hidden="true">
          <div className="marquee-mobile__group">
            <span
              className="marquee-mobile__text font-bold leading-none"
              style={{
                color: "#F9F2E1",
                fontFamily: '"Work Sans", sans-serif',
                fontSize: "80px",
              }}
            >
              <strong>
                CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU •
                CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU •
              </strong>
            </span>
          </div>
          <div className="marquee-mobile__group" aria-hidden>
            <span
              className="marquee-mobile__text font-bold leading-none"
              style={{
                color: "#F9F2E1",
                fontFamily: '"Work Sans", sans-serif',
                fontSize: "80px",
              }}
            >
              <strong>
                CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU •
                CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU •
              </strong>
            </span>
          </div>
          <div className="marquee-mobile__group" aria-hidden>
            <span
              className="marquee-mobile__text font-bold leading-none"
              style={{
                color: "#F9F2E1",
                fontFamily: '"Work Sans", sans-serif',
                fontSize: "80px",
              }}
            >
              <strong>
                CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU •
                CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU •
              </strong>
            </span>
          </div>
        </div>
      </div>

      {/* ====== FAIXA MARQUEE — DESKTOP ====== */}
      <div className="relative z-50 hidden md:block -mt-24 -mb-0 py-2 overflow-hidden pointer-events-none">
        <div
          className="marquee-track"
          style={{ animation: "marqueeX 14s linear infinite" }}
          aria-hidden="true"
        >
          <span
            className="font-bold leading-none"
            style={{
              color: "#F9F2E1",
              fontFamily: '"Work Sans", sans-serif',
              fontSize: "clamp(34px, 5.2vw, 94px)",
            }}
          >
            <strong>
              CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU •
              CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU •
            </strong>
          </span>
          <span
            className="font-bold leading-none"
            aria-hidden
            style={{
              color: "#F9F2E1",
              fontFamily: '"Work Sans", sans-serif',
              fontSize: "clamp(34px, 5.2vw, 94px)",
            }}
          >
            <strong>
              CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU •
              CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU •
            </strong>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;