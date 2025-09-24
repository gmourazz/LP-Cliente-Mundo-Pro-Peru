import React, { useEffect, useRef, useState, useCallback } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = ({
  threshold = 300,
  right = 32,
  bottom = 32,
  className = '',
  hideOnMobile = true, // <— por padrão, não renderiza no mobile
}) => {
  // NÃO renderiza no mobile
  if (hideOnMobile && typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches) {
    return null;
  }

  const [isVisible, setIsVisible] = useState(false);
  const ticking = useRef(false);
  const reduceMotion = useReducedMotion();

  const onScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;
    requestAnimationFrame(() => {
      const y = typeof window !== 'undefined' ? window.pageYOffset : 0;
      setIsVisible(y > threshold);
      ticking.current = false;
    });
  }, [threshold]);

  const scrollToTop = useCallback(() => {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  }, [reduceMotion]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const style = {
    right,
    bottom: `max(${bottom}px, env(safe-area-inset-bottom, 0px) + ${bottom}px)`,
    width: 56,
    height: 56,
    backgroundColor: '#A0D3F1',
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          title="Voltar ao topo"
          className={`scroll-to-top absolute z-50 flex items-center justify-center rounded-full shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 ${className}`}
          style={style}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileHover={reduceMotion ? {} : { scale: 1.08 }}
          whileTap={reduceMotion ? {} : { scale: 0.95 }}
        >
          <ArrowUp width={22} height={22} stroke="#111" strokeWidth={2.2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
