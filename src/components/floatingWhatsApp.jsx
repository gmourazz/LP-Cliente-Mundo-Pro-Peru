import React, { useMemo, useState, useEffect } from "react";

export default function FloatingWpp({
  phone = "5554991831562",
  message = "Olá! Estou navegando na página da viagem para o Peru e gostaria de tirar uma dúvida!",
  imageSrc = "/img/logowpp.png",
  // Configurações para desktop
  size = 58,
  right = 24,
  bottom = 28,
  safeBottomBump = 62,
  imageScale = 1.15,
  imageShiftX = 0,
  imageShiftY = -2,
  bgColor = "#25D366",
  // Configurações específicas para mobile
  mobileSize = 32,
  mobileRight = 28,
  mobileBottom = 34,
  mobileSafeBottomBump = 108,
  mobileImageScale = 1.15,
  mobileImageShiftX = 0,
  mobileImageShiftY = -2,
}) {
  const [src, setSrc] = useState(imageSrc);
  const [triedBase, setTriedBase] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const buildWithBase = (path) => {
    const base = (import.meta.env.BASE_URL || "/").replace(/\/+$/, "");
    const clean = path.startsWith("/") ? path : `/${path}`;
    return `${base}${clean}`;
  };

  useEffect(() => {
    setSrc(imageSrc);
    setTriedBase(false);
  }, [imageSrc]);

  // Detecta se é mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const href = useMemo(() => {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encoded}`;
  }, [phone, message]);

  // Usa configurações diferentes para mobile e desktop
  const currentSize = isMobile ? mobileSize : size;
  const currentRight = isMobile ? mobileRight : right;
  const currentBottom = isMobile ? mobileBottom : bottom;
  const currentSafeBottomBump = isMobile ? mobileSafeBottomBump : safeBottomBump;
  const currentImageScale = isMobile ? mobileImageScale : imageScale;
  const currentImageShiftX = isMobile ? mobileImageShiftX : imageShiftX;
  const currentImageShiftY = isMobile ? mobileImageShiftY : imageShiftY;

  const wrapperStyle = {
    position: "fixed",
    right: currentRight,
    bottom: `max(${currentBottom + currentSafeBottomBump}px, env(safe-area-inset-bottom, 0px) + ${currentBottom + currentSafeBottomBump}px)`,
    width: currentSize,
    height: currentSize,
    borderRadius: 9999,
    backgroundColor: bgColor,
    zIndex: 99999,
    overflow: "hidden",
    display: "inline-block",
    transform: "translateZ(0)",
    transition: "all 0.3s ease-in-out", // Transição suave para todas as propriedades
  };

  const imgWrapStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: `scale(${currentImageScale}) translate(${currentImageShiftX}px, ${currentImageShiftY}px)`,
    transformOrigin: "center center",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    display: "block",
    pointerEvents: "none",
    userSelect: "none",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      title="Fale no WhatsApp"
      style={wrapperStyle}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.96)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "translateZ(0)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateZ(0)")}
    >
      <div style={imgWrapStyle}>
        <img
          src={src}
          alt="WhatsApp"
          style={imgStyle}
          loading="eager"
          decoding="async"
          crossOrigin="anonymous"
          onError={() => {
            if (!triedBase && typeof src === "string" && src.startsWith("/")) {
              setTriedBase(true);
              setSrc(buildWithBase(src));
            }
          }}
        />
      </div>
    </a>
  );
}