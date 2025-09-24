import React, { useState, useCallback, useEffect, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  /* ======================= DADOS ======================= */
  const reviews = [
    {
      name: "Mônica Alberconi",
      text: "Segundo ano viajando com a Pro viagens! Ano passado ao Peru e esse ano ao deserto do Atacama!! Super recomendo, fomos de olhos fechados e super tranquilas pois a Fran cuidou de tudo, dos contratempos das dicas de onde comer, de tudoooo... Amamos e recomendamos !! Já estamos de olho no próximo destino.",
      avatar: "/img/feedbacks/monica.jpg",
    },
    {
      name: "Luiana Cardozo",
      text: "Equipe sensacional! Cuidaram absolutamente de tudo da minha viagem, não me preocupei com nada. Foi a melhor experiência possível e com um preço muito justo! Minhas próximas viagens agora só farei com a Mundo Pró Viagens ✈️😍",
      avatar: "/img/feedbacks/luiana.jpg",
    },
    {
      name: "Eliane Elk",
      text: "Amo viajar com esta empresa, assistência antes e durante a viagem. Extremamente responsáveis pelo trabalho que nos prestam. Já foram 2 viagens internacionais, e que venham muitas outras viagens... parabéns à equipe pelo trabalho, em especial à Francine, excelente pessoa e que tem muita paciência em nos atender. Muito obrigada por fazer a minha viagem segura, tranquila e divertida.",
      avatar: "/img/feedbacks/eliane.jpg",
    },
    {
      name: "Matheus Araujo",
      text: "Planejei minha viagem de última hora, mas a equipe da Mundo Pró Viagens, especialmente a Náthaly, esteve presente em todos os momentos. Sugeriram passeios, tiraram dúvidas e deram ótimas dicas. Durante a viagem, enviavam mensagens diariamente para saber como estava. Minha próxima viagem será com eles!",
      avatar: "/img/feedbacks/matheusaraujo.png",
    },
    {
      name: "Christian Martins",
      text: "Contratamos uma viagem para o Peru: Machu Picchu, Vale Sagrado, Montanhas Coloridas e Lago Humantay. O apoio da equipe Mundo Pró Viagens foi determinante para a ótima experiência que tivemos. Estádias conforme contratado, guias locais excelentes e atenciosos. Parabéns pelo profissionalismo!",
      avatar: "/img/feedbacks/christian.jpg",
    },
    {
      name: "Maria Elisa Corbisier",
      text: "A realização de um sonho é sempre gratificante. Ainda, realizar este sonho somente você e sua filha, é emocionante. Só agradecer ao acolhimento, atendimento e rapidez nas respostas quando necessário. Obrigada por participar deste sonho!",
      avatar: "/img/feedbacks/maria.jpg",
    },

    /* ======== novas 6 caixinhas para você subir os textos ======== */
    {
      name: "Michelly Ribas",
      text: "Fizemos nossa primeira viagem internacional, tínhamos muito medo, mas a empresa Mundo Pró foi incrível 👏🏻 \n Nos deixou segura quanto aos detalhes, o Gabriel Neiva nos deu todo suporte para realização desse sonho. \n A princípio meu sonho era conhecer a Ilha de San Andrés, e no fim conhecemos CARTAGENA + SAN ANDRES experiência incrível, fomos bem atendidos, tivemos todo o suporte e sem dúvida saímos contente e realizados, e com gostinho de quero mais !!! ✨ Obrigada MUNDO PRÓ 🌎",
      avatar: "/img/feedbacks/michelly.jpg",
    },
    {
      name: "Ana Silveira",
      text: "Tudo perfeito, Francine muito atenciosa nota 1000 😍. voltaremos fazer cotação para as próximas viagens com certeza. Obrigada Mundo Pro viagem pela experiência incrível 🤩",
      avatar: "/img/feedbacks/ana.jpg",
    },
    {
      name: "Diana Ruggeri Brandão",
      text: "Agradeço imensamente a Mundo Pró Viagens e também a Francine que organizou minha viagem ao Peru. Vocês foram maravilhosos, foi tudo perfeito. Saí me sentindo segura e realmente fiz um passeio incrível .❤️ Vocês são competentes, tem um atendimento diferenciado e valores excelentes !! Recomendo a todos que desejam viajar que façam seus pacotes com a Mundo Pró. Fran: sem palavras pela tua dedicação e suporte. ADOREI!❤️❤️❤️ MIL ESTRELAS!!!!",
      avatar: "/img/feedbacks/diana.jpg",
    },
    {
      name: "Bruna Brandalise",
      text: "Suporte extraordinário da Fran, desde o fechamento até o final da viagem! A viagem dos sonhos, saiu exatamente como planejado e sonhado, sem nenhum perrengue. Recomendo ter o apoio de uma agência séria como a Mundo Pró. Até a próxima 😃",
      avatar: "/img/feedbacks/bruna.jpg",
    },
    {
      name: "Maria da Penha Faria",
      text: "Foi uma viagem incrível, não precisamos nos preocupar com nada, eles fizeram tudo, roteiro, hotel, passagem, tudo conforme foi combinado. Agradeço a preocupação e o carinho desta maravilhosa equipe. Já estamos planejando outra....",
      avatar: "/img/feedbacks/mariadapenha.jpeg",
    },
    {
      name: "Maria Cristina de Souza",
      text: "Perfeito! PERU 🇵🇪, Lugares de encher os olhos e curar a alma! Fomos muito bem auxiliadas pela agência! Obrigada Mundo Pró Viagens e Agente Francine ! Gratidão 🙏",
      avatar: "/img/feedbacks/mariacristina.jpg",
    },
  ];

  /* ======================= DESKTOP (SEM ANIMAÇÃO) ======================= */
  // 3 cards por página
  const deskPages = useMemo(
    () =>
      Array.from({ length: Math.ceil(reviews.length / 3) }, (_, i) =>
        reviews.slice(i * 3, i * 3 + 3)
      ),
    [reviews]
  );
  const [emblaRefDesk, emblaDesk] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: false,
  });
  const [selectedDesk, setSelectedDesk] = useState(0);
  const onSelectDesk = useCallback(() => {
    if (!emblaDesk) return;
    setSelectedDesk(emblaDesk.selectedScrollSnap());
  }, [emblaDesk]);
  useEffect(() => {
    if (!emblaDesk) return;
    onSelectDesk();
    emblaDesk.on("select", onSelectDesk);
    emblaDesk.on("reInit", onSelectDesk);
    return () => {
      emblaDesk?.off("select", onSelectDesk);
      emblaDesk?.off("reInit", onSelectDesk);
    };
  }, [emblaDesk, onSelectDesk]);

  /* ======================= MOBILE (AUTOPLAY 5s) ======================= */
  const [emblaRefMob, emblaMob] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: false,
    duration: 25,
  });
  const [selectedMob, setSelectedMob] = useState(0);
  useEffect(() => {
    if (!emblaMob) return;
    const onSelect = () => setSelectedMob(emblaMob.selectedScrollSnap());
    onSelect();
    emblaMob.on("select", onSelect);
    emblaMob.on("reInit", onSelect);
    const id = setInterval(() => emblaMob.scrollNext(), 5000);
    return () => {
      emblaMob.off("select", onSelect);
      emblaMob.off("reInit", onSelect);
      clearInterval(id);
    };
  }, [emblaMob]);

  /* ======================= UI AUX ======================= */
  const Arrow = ({ dir, onClick }) => (
    <button
      onClick={onClick}
      className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
      aria-label={dir === "prev" ? "Anterior" : "Próximo"}
    >
      {dir === "prev" ? (
        <ChevronLeft className="w-6 h-6 text-white" />
      ) : (
        <ChevronRight className="w-6 h-6 text-white" />
      )}
    </button>
  );

  const Card = ({ review }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg h-full">
      <div className="flex items-center mb-3 gap-3">
        <img
          src="/img/googlelogo.jpeg"
          alt="Google"
          className="w-6 h-6 shrink-0"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden shrink-0">
          <img
            className="w-full h-full object-cover"
            alt={`Avatar de ${review.name}`}
            src={review.avatar}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/img/feedbacks/placeholder-avatar.png";
            }}
          />
        </div>
        <div className="min-w-0">
          <p
            className="font-bold"
            style={{ color: "#222223", fontFamily: "Work Sans, sans-serif" }}
          >
            {review.name}
          </p>
          <div className="flex" aria-label="5 estrelas">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4"
                fill="#FBBC05"
                stroke="#FBBC05"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
      <p
        style={{
          color: "#222223",
          fontFamily: '"Roboto Mono", monospace',
          fontSize: "13px",
          lineHeight: 1.35,
          letterSpacing: "0.1px",
        }}
      >
        {review.text}
      </p>
      <a
        href="https://www.trustindex.io/reviews/mundoproviagens.com.br"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs mt-2 inline-block font-semibold"
        style={{ color: "#AC0039", fontFamily: "Work Sans, sans-serif" }}
      >
        Veja a avaliação
      </a>
    </div>
  );

  return (
    <section className="py-20 relative" style={{ backgroundColor: "#AC0039" }}>
      <style>{`
        .embla { overflow: hidden; }
        .embla__container { display: flex; }
        .embla__slide { flex: 0 0 100%; min-width: 0; }
      `}</style>

      <div className="container relative">
        {/* Título desktop */}
        <div className="hidden md:flex items-center justify-center gap-4 mb-12">
          <h2
            className="text-5xl font-bold"
            style={{ color: "#FFFFFF", fontFamily: "Work Sans, sans-serif" }}
          >
            Quem viajou
          </h2>
          <img
            className="h-20"
            alt="palavra 'adorou' em estilo cursivo"
            src="/img/adorou.png"
          />
        </div>

        {/* Título mobile */}
        <div className="md:hidden mb-6 px-3">
          <h2
            className="font-extrabold leading-[1] tracking-tight"
            style={{
              color: "#FFFFFF",
              fontFamily: "Work Sans, sans-serif",
              fontSize: "32px",
            }}
          >
            Quem viajou
          </h2>
          <img
            src="/img/adorou.png"
            alt="adorou!"
            className="mt-0 h-10 w-auto object-contain ml-auto"
          />
        </div>

        {/* ===== DESKTOP: 3 cards por página ===== */}
        <div className="hidden md:block">
          <div className="embla" ref={emblaRefDesk}>
            <div className="embla__container">
              {deskPages.map((page, idx) => (
                <div className="embla__slide" key={idx}>
                  <div className="grid grid-cols-3 gap-6">
                    {page.map((r, i) => (
                      <Card key={`${idx}-${i}`} review={r} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <div className="flex justify-center items-center gap-8 mt-8">
            <Arrow
              dir="prev"
              onClick={() => emblaDesk && emblaDesk.scrollPrev()}
            />
            <div
              className="flex gap-2"
              role="tablist"
              aria-label="Páginas de depoimentos"
            >
              {deskPages.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    selectedDesk === i ? "bg-white" : "bg-white/50"
                  }`}
                  role="tab"
                  aria-selected={selectedDesk === i}
                />
              ))}
            </div>
            <Arrow
              dir="next"
              onClick={() => emblaDesk && emblaDesk.scrollNext()}
            />
          </div>
        </div>

        {/* ===== MOBILE: 1 card/slide + autoplay 5s ===== */}
        <div className="md:hidden px-2">
          <div className="embla" ref={emblaRefMob}>
            <div className="embla__container">
              {reviews.map((r, i) => (
                <div className="embla__slide px-1.5" key={i}>
                  <Card review={r} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {reviews.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  selectedMob === i ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* adesivo */}
        <div
          className="absolute left-3 md:left-0 z-10 pointer-events-none"
          style={{ bottom: "-85px" }}
          aria-hidden="true"
        >
          <img
            src="https://horizons-cdn.hostinger.com/8f4674e5-8620-4538-9ade-add9c2f3710e/4670acc622a1b6536b689869c586c6b3.png"
            alt=""
            className="w-28 md:w-48"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
