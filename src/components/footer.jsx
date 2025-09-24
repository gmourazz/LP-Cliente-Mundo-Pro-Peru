import React from "react";
import { motion } from "framer-motion";
import ScrollToTopButton from "./scrollToTopButton"; // <— importa o componente correto

const Footer = () => {
  return (
    <footer id="sobre" className="py-16 relative" style={{ backgroundColor: "#000000" }}>
      {/* torne o container relativo para ancorar a seta apenas aqui */}
      <div className="container relative">
        {/* ============ MOBILE ============ */}
        <div className="md:hidden">
          <img src="/img/logorodape.png" alt="Logo rodapé" className="w-[280px] h-auto object-contain mb-20" />

          <h3
            className="font-bold text-left mb-2"
            style={{ color: "#F3EDE0", fontFamily: "Work Sans, sans-serif", fontSize: 28, lineHeight: 1 }}
          >
            Onde estamos
          </h3>
          <p
            className="mb-10 text-left"
            style={{ color: "#F3EDE0", fontFamily: '"Roboto Mono", monospace', fontSize: 12, lineHeight: 1.35 }}
          >
            Nosso escritório é em Bento Gonçalves - RS, mas atendemos de forma online todo Brasil.
          </p>

          <h3
            className="font-bold text-left mb-4"
            style={{ color: "#F3EDE0", fontFamily: "Work Sans, sans-serif", fontSize: 28, lineHeight: 1 }}
          >
            Siga a Mundo Pró
          </h3>

          <div className="flex gap-8 mb-10">
            <a
              href="https://www.instagram.com/mundoproviagens/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#F3EDE0", fontFamily: '"Roboto Mono", monospace', fontSize: 14, textDecoration: "none" }}
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/mundo-pr%C3%B3-viagens/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#F3EDE0", fontFamily: '"Roboto Mono", monospace', fontSize: 14, textDecoration: "none" }}
            >
              Linkedin
            </a>
          </div>

          <div className="mb14">
            <a
              href="https://api.whatsapp.com/send?phone=5554991831562"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fale conosco no WhatsApp"
              className="block mx-auto"
            >
              <div
                className="mx-0 flex items-center justify-center"
                style={{
                  width: 210,
                  height: 64,
                  borderRadius: 9999,
                  border: "2px solid #F3EDE0",
                  color: "#F3EDE0",
                  fontFamily: "Work Sans, sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.3px",
                }}
              >
                FALE CONOSCO
              </div>
            </a>
          </div>

          <div className="pt-10 mt-10 border-t border-gray-700 text-left">
            <p style={{ color: "#8A8A8A", fontFamily: '"Roboto Mono", monospace', fontSize: 12, lineHeight: 1.4 }}>
              © {new Date().getFullYear()} Mundo Pró Viagens. Todos os direitos reservados.
            </p>
          </div>
        </div>

        {/* ============ DESKTOP ============ */}
        <div className="hidden md:grid md:grid-cols-3 gap-12 items-start text-left">
          {/* Coluna 1: LOGO */}
          <motion.div initial={{ opacity: 1, y: 0 }} className="flex flex-col space-y-8 pr-6">
            <img src="/img/logorodape.png" alt="Logo rodapé" className="w-[290px] h-auto object-contain" />
          </motion.div>

          {/* Coluna 2: ONDE ESTAMOS */}
          <motion.div initial={{ opacity: 1, y: 0 }} className="space-y-3">
            <p style={{ color: "#F3EDE0", fontFamily: '"Roboto Mono", monospace', fontSize: "16px", lineHeight: 1.2 }}>
              Onde estamos
            </p>
            <p
              style={{
                color: "#F3EDE0",
                fontFamily: '"Roboto Mono", monospace',
                fontSize: "13px",
                lineHeight: 1.35,
                maxWidth: 420,
              }}
            >
              Nosso escritório é em Bento Gonçalves - RS, mas atendemos de forma online todo Brasil.
            </p>
          </motion.div>

          {/* Coluna 3: SIGA + Botão */}
          <motion.div initial={{ opacity: 1, y: 0 }} className="flex flex-col items-start gap-6">
            <div className="space-y-3">
              <p style={{ color: "#F3EDE0", fontFamily: '"Roboto Mono", monospace', fontSize: "16px", lineHeight: 1.2 }}>
                Siga a Mundo Pró
              </p>

              <div className="flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/mundoproviagens/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-90"
                  style={{ color: "#F3EDE0", fontFamily: '"Roboto Mono", monospace', fontSize: "13px" }}
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/mundo-pr%C3%B3-viagens/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-90"
                  style={{ color: "#F3EDE0", fontFamily: '"Roboto Mono", monospace', fontSize: "13px" }}
                >
                  Linkedin
                </a>
              </div>
            </div>

            <a
              href="https://api.whatsapp.com/send?phone=5554991831562"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fale conosco no WhatsApp"
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: 260,
                  height: 64,
                  borderRadius: 9999,
                  border: "2px solid #F3EDE0",
                  color: "#F3EDE0",
                  fontFamily: "Work Sans, sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.3px",
                }}
              >
                FALE CONOSCO
              </div>
            </a>
          </motion.div>
        </div>

        {/* Copyright desktop */}
        <motion.div initial={{ opacity: 1 }} className="hidden md:block pt-8 mt-12 text-center border-t border-gray-700">
          <p style={{ color: "#8A8A8A", fontFamily: '"Roboto Mono", monospace', fontSize: "0.875rem" }}>
            © {new Date().getFullYear()} Mundo Pró Viagens. Todos os direitos reservados.
          </p>
        </motion.div>

        {/* === SETA SÓ NO RODAPÉ (não renderiza em mobile) === */}
        <ScrollToTopButton className="scroll-to-top" right={16} bottom={16} hideOnMobile />
      </div>
    </footer>
  );
};

export default Footer;
