// src/components/scrollToTopButton.jsx
import React, { useEffect, useState } from "react";

export default function ScrollToTopButton({
  showAfter = 300,     // px de rolagem para exibir
  right = 24,          // distância da borda direita (px)
  bottom = 96,         // distância do fundo (px) — maior p/ não colidir com o WhatsApp
  size = 56            // diâmetro do botão (px)
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > showAfter);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // estado correto ao carregar
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  const goTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <button
      aria-label="Voltar ao topo"
      onClick={goTop}
      className={`fixed z-[60] rounded-full shadow-lg transition-opacity duration-200 ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      style={{
        right: `${right}px`,
        bottom: `${bottom}px`,
        width: `${size}px`,
        height: `${size}px`,
        background: "#A0D3F1",
      }}
    >
      {/* ícone (seta para cima) */}
      <svg
        width={Math.round(size * 0.45)}
        height={Math.round(size * 0.45)}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#222223"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ display: "block", margin: "0 auto" }}
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
