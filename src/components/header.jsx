import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ordem e rótulos conforme o PDF
  const navItems = [
    { label: "início", href: "#inicio" },
    { label: "a viagem", href: "#viagem" },
    { label: "hospedagem", href: "#hospedagem" },
    { label: "dúvidas frequentes", href: "#duvidas" },
    { label: "sobre nós", href: "#sobre" },
  ];

  return (
    <header className="sticky top-0 z-50" style={{ background: "#A0D3F1" }}>
      <div className="relative">
        <div className="container mx-auto max-w-[1320px] px-4 md:px-6">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* LOGO */}
            <a href="#inicio" className="flex items-center" aria-label="Mundo Pró Viagens">
              <img
                src="/img/logomundopro.png"
                alt="Mundo Pró Viagens"
                className="h-[68px] md:h-[80px] object-contain block"
                loading="eager"
                decoding="async"
              />
            </a>

            {/* Botão Mobile */}
            <motion.button
              type="button"
              className="md:hidden p-2 rounded-full bg-black text-white outline-none focus:ring-2 focus:ring-white/30"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>

            {/* NAV DESKTOP (pill escura) */}
            <nav
              role="navigation"
              className="
                hidden md:flex items-center bg-[#222223]
                rounded-full py-1.5 pl-2 pr-2 shadow-md
                absolute right-4 md:right-6 lg:right-10 top-1/2 -translate-y-1/2
              "
              style={{ fontFamily: '"Work Sans", sans-serif' }}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-full text-[14px] font-medium tracking-[0.01em] text-white transition-colors"
                  whileHover={{ backgroundColor: "#F9F2E1", color: "#000" }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </div>
        </div>

        {/* MENU MOBILE */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="dropdown"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute right-4 top-full mt-2 z-50"
            >
              <nav
                id="mobile-menu"
                role="navigation"
                className="w-[86vw] max-w-[360px] rounded-2xl bg-black/95 backdrop-blur p-2 shadow-2xl border border-white/10"
                style={{ fontFamily: '"Work Sans", sans-serif' }}
              >
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <motion.a
                        href={item.href}
                        className="block w-full px-4 py-3 rounded-xl text-white text-base font-medium"
                        whileHover={{ backgroundColor: "#AC0039" }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
