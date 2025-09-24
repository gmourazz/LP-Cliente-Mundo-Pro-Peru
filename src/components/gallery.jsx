import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Heart, MessageCircle, Send, MoreVertical } from 'lucide-react';

const Gallery = () => {
  /* ================== DADOS ================== */
  const base = { profileSrc: '/img/beneficios/mpreto.png' };
  const posts = [
    { ...base, location: 'Cordilheira dos Andes',       imageUrl: '/img/instagram/fotoinstaum.png',        alt: 'Postagem insta 1'  },
    { ...base, location: 'Machu Picchu, Peru',          imageUrl: '/img/instagram/fotoinstadois.png',      alt: 'Postagem insta 2'  },
    { ...base, location: 'San Pedro de Atacama, Chile', imageUrl: '/img/instagram/fotoinstatres.png',      alt: 'Postagem insta 3'  },
    { ...base, location: 'Jalapão - TO',                imageUrl: '/img/instagram/fotoinstaquatro.png',    alt: 'Postagem insta 4'  },
    { ...base, location: 'Laguna Humantay',             imageUrl: '/img/instagram/fotoinstacinco.png',     alt: 'Postagem insta 5'  },
    { ...base, location: 'Magic Bus Atacama',           imageUrl: '/img/instagram/fotoinstaseis.png',      alt: 'Postagem insta 6'  },
    { ...base, location: 'Kapadokya/Goreme',            imageUrl: '/img/instagram/fotoinstasete.png',      alt: 'Postagem insta 7'  },
    { ...base, location: 'Machu Picchu, Peru',          imageUrl: '/img/instagram/fotoinstaoito.png',      alt: 'Postagem insta 8'  },
    { ...base, location: 'Peru',                        imageUrl: '/img/instagram/fotoinstanove.png',      alt: 'Postagem insta 9'  },
    { ...base, location: 'Getsemaní, Cartagena de Indias', imageUrl: '/img/instagram/fotoinstadez.png',    alt: 'Postagem insta 10' },
    { ...base, location: 'Ephesus, Turkye',             imageUrl: '/img/instagram/fotoinstaonze.png',      alt: 'Postagem insta 11' },
    { ...base, location: 'Museu do Louvre',             imageUrl: '/img/instagram/fotoinstadoze.png',      alt: 'Postagem insta 12' },
    { ...base, location: 'Buraco do Galego',            imageUrl: '/img/instagram/fotoinstatreze.png',     alt: 'Postagem insta 13' },
    { ...base, location: 'Bariloche',                   imageUrl: '/img/instagram/fotoinstaquatorze.png',  alt: 'Postagem insta 14' },
    { ...base, location: 'Göreme Açık Hava Müzesi',     imageUrl: '/img/instagram/fotoinstaquinze.png',    alt: 'Postagem insta 15' },
  ];

  /* ===== Desktop/Tablet: 3 cards por página ===== */
  const pages = useMemo(() => {
    const out = [];
    for (let i = 0; i < posts.length; i += 3) out.push(posts.slice(i, i + 3));
    return out;
  }, [posts]);

  const [emblaRefDesk, emblaDesk] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedPage, setSelectedPage] = useState(0);
  const onSelectDesk = useCallback(() => {
    if (!emblaDesk) return;
    setSelectedPage(emblaDesk.selectedScrollSnap());
  }, [emblaDesk]);

  useEffect(() => {
    if (!emblaDesk) return;
    const id = setInterval(() => emblaDesk.scrollNext(), 5000);
    onSelectDesk();
    emblaDesk.on('select', onSelectDesk);
    emblaDesk.on('reInit', onSelectDesk);
    return () => {
      clearInterval(id);
      emblaDesk.off('select', onSelectDesk);
      emblaDesk.off('reInit', onSelectDesk);
    };
  }, [emblaDesk, onSelectDesk]);

  /* ===== Mobile: 1 card por slide ===== */
  const [emblaRefMob, emblaMob] = useEmblaCarousel({ loop: true, align: 'center' });
  const [mobIndex, setMobIndex] = useState(0);
  useEffect(() => {
    if (!emblaMob) return;
    const onSel = () => setMobIndex(emblaMob.selectedScrollSnap());
    const id = setInterval(() => emblaMob.scrollNext(), 5000);
    onSel();
    emblaMob.on('select', onSel);
    emblaMob.on('reInit', onSel);
    return () => {
      clearInterval(id);
      emblaMob.off('select', onSel);
      emblaMob.off('reInit', onSel);
    };
  }, [emblaMob]);

  /* ===== UI ===== */
  const CardHeader = ({ post }) => (
    <div className="flex items-center justify-between p-3 bg-white">
      <div className="flex items-center gap-2">
        <img
          src={post.profileSrc}
          alt={`${post.location} - perfil`}
          className="w-8 h-8 rounded-full object-cover"
          onError={(e) => { e.currentTarget.src = '/img/beneficios/mpreto.png'; }}
        />
        <span className="font-semibold text-sm" style={{ color: '#222223', fontFamily: 'Work Sans, sans-serif' }}>
          {post.location}
        </span>
      </div>
      <MoreVertical className="w-5 h-5 text-gray-500" />
    </div>
  );

  const CardFooter = () => (
    <div className="flex items-center justify-between p-3" style={{ backgroundColor: '#F1F1F1' }}>
      <div className="flex items-center gap-4">
        <Heart className="w-6 h-6 text-red-500" fill="currentColor" />
        <MessageCircle className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black" />
        <Send className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black" />
      </div>
    </div>
  );

  return (
    <section className="py-20" style={{ backgroundColor: '#F2EA86' }}>
      <style>{`
        .embla { overflow: hidden; }
        .embla__container { display: flex; }
        .embla__slide { flex: 0 0 100%; min-width: 0; }
        .embla-dots { display:flex; gap:6px; justify-content:center; margin-top:10px; }
        .embla-dot { width:8px; height:8px; border-radius:9999px; background:#d1d5db; }
        .embla-dot--selected { background:#111827; }
      `}</style>

      <div className="container">
        {/* Título Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:block text-center mb-12"
        >
          <h2
            className="font-extrabold leading-tight"
            style={{ color: '#222223', fontFamily: '"Work Sans", sans-serif', fontSize: '65px' }}
          >
            Sonhos que ajudamos a realizar
          </h2>
        </motion.div>

        {/* Título Mobile (35px, alinhado à esquerda) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="md:hidden mb-6 px-2"
        >
          <h2
            className="font-extrabold leading-[1] text-left"
            style={{ color: '#222223', fontFamily: '"Work Sans", sans-serif', fontSize: '35px' }}
          >
            Sonhos que ajudamos a realizar
          </h2>
        </motion.div>

        {/* ===== Desktop/Tablet: 3 cards por página ===== */}
        <div className="hidden md:block">
          <div className="embla" ref={emblaRefDesk}>
            <div className="embla__container">
              {pages.map((page, pageIdx) => (
                <div className="embla__slide" key={`page-${pageIdx}`}>
                  <div className="grid grid-cols-3 gap-8">
                    {page.map((post, idx) => (
                      <div key={`${pageIdx}-${idx}`} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                        <CardHeader post={post} />
                        <div className="aspect-square w-full">
                          <img
                            className="w-full h-full object-cover"
                            alt={post.alt}
                            src={post.imageUrl}
                            onError={(e) => { e.currentTarget.src = '/img/instagram/post-placeholder.jpg'; }}
                          />
                        </div>
                        <CardFooter />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Desktop */}
          <div className="embla-dots">
            {pages.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaDesk && emblaDesk.scrollTo(i)}
                className={`embla-dot ${i === selectedPage ? 'embla-dot--selected' : ''}`}
                aria-label={`Ir para página ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ===== Mobile: 1 card por slide (swipe) ===== */}
        <div className="md:hidden">
          <div className="embla" ref={emblaRefMob}>
            <div className="embla__container">
              {posts.map((post, i) => (
                <div className="embla__slide p-2" key={`mob-${i}`}>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                    <CardHeader post={post} />
                    <div className="aspect-square w-full">
                      <img
                        className="w-full h-full object-cover"
                        alt={post.alt}
                        src={post.imageUrl}
                        onError={(e) => { e.currentTarget.src = '/img/instagram/post-placeholder.jpg'; }}
                      />
                    </div>
                    <CardFooter />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Mobile */}
          <div className="embla-dots">
            {posts.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaMob && emblaMob.scrollTo(i)}
                className={`embla-dot ${i === mobIndex ? 'embla-dot--selected' : ''}`}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
