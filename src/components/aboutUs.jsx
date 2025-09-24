import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const teamPhotos = [
    { label: 'Funcionário 1',  src: '/img/funcionarios/funcionarioum.png' },
    { label: 'Funcionário 2',  src: '/img/funcionarios/funcionariodois.png' },
    { label: 'Funcionário 3',  src: '/img/funcionarios/funcionariotres.png' },
    { label: 'Funcionário 4',  src: '/img/funcionarios/funcionarioquatro.png' },
    { label: 'Funcionário 5',  src: '/img/funcionarios/funcionariocinco.png' },
    { label: 'Funcionário 6',  src: '/img/funcionarios/funcionarioseis.png' },
    { label: 'Funcionário 7',  src: '/img/funcionarios/funcionariosete.png' },
    { label: 'Funcionário 8',  src: '/img/funcionarios/funcionariooito.png' },
    { label: 'Funcionário 9',  src: '/img/funcionarios/funcionarionove.png' },
    { label: 'Funcionário 10', src: '/img/funcionarios/funcionariodez.png' },
    { label: 'Funcionário 11', src: '/img/funcionarios/funcionarioonze.png' },
    { label: 'Funcionário 12', src: '/img/funcionarios/funcionariodoze.png' },
    { label: 'Funcionário 13', src: '/img/funcionarios/funcionariotreze.png'},
    { label: 'Funcionário 14', src: '/img/funcionarios/funcionarioquatorze.png'},
    { label: 'Funcionário 15', src: '/img/funcionarios/funcionarioquinze.png' },
  ];

  const cards = [
    {
      imgSrc: '/img/beneficios/nossojeito.png',
      title: 'Nosso jeito de realizar sonhos',
      description:
        'Aqui você fala com gente de verdade. A gente cuida da sua viagem como se fosse nossa. Você só precisa fazer as malas.',
    },
    {
      imgSrc: '/img/beneficios/suporte.png',
      title: 'Suporte 24h',
      description:
        "Aqui na Mundo Pró não tem 'boa viagem e tchau'. Acompanhamos você em cada passo.",
    },
    {
      imgSrc: '/img/beneficios/cifrao.png',
      title: 'Viaje mais, pagando menos',
      description:
        'Nada de “bom demais pra ser verdade”. Pesquisamos tudo para te dar a melhor opção de verdade.',
    },
  ];

  return (
    <section
      id="sobre" /* <- âncora para o header */
      className="relative overflow-visible pt-16 pb-28 md:py-20"
      style={{ backgroundColor: '#FD4F0D', fontFamily: '"Roboto Mono", monospace' }}
    >
      {/* faixa clara decorativa à esquerda */}
      <div aria-hidden className="absolute top-0 left-0 h-full" style={{ width: 8, background: 'rgba(255,255,255,0.35)' }} />

      <div className="container relative">
        {/* topo (texto) */}
        <div className="grid md:grid-cols-2 md:gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <h1
              className="text-left font-extrabold leading-[1.02] md:leading-tight text-[32px] sm:text-[36px] md:text-[55px]"
              style={{ color: '#FFFFFF', fontFamily: '"Work Sans", sans-serif' }}
            >
              Cuidamos de tudo.<br />
              Você só fica com a parte boa:<br />
              Fazer as malas e ir!
            </h1>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="mt-8 md:mt-0">
            <div className="space-y-3 md:space-y-4 text-[12px] md:text-[15px] leading-[1.28] md:leading-[1.35]" style={{ color: '#F9F2E1', letterSpacing: '0.1px' }}>
              <p>“A Mundo Pró nasceu da nossa inquietação. Já trabalhávamos com turismo, mas sentíamos que faltava algo para entregar uma experiência que saísse da rotina de uma agência tradicional. Focamos em criar uma identidade própria, com o objetivo de propor algo diferente, não encontrávamos espaço para isso.”</p>
              <p>“A vontade de crescer e de ser referência no turismo foi o combustível para a gente. Fez nascer o desejo em nós: criar uma agência com o nosso jeito, com conteúdo verdadeiramente conectado com quem viaja.”</p>
              <p>“Com cuidado real e atenção aos detalhes, transformamos o modo como as pessoas enxergam o ato de viajar. Hoje, seguimos crescendo com propósito, leveza e consistência.”</p>
            </div>
            <div className="mt-8 md:mt-8 flex justify-end">
              <img src="/img/beneficios/assinatura.png" alt="Assinatura" className="h-[20px] md:h-[26px] w-auto object-contain" />
            </div>
          </motion.div>
        </div>

        {/* título “Sobre nós” */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-[10] font-extrabold text-center md:text-right px-8 md:px-8 text-[44px] sm:text-[50px] md:text-[100px] leading-[0.70] mb-[0px]"
          style={{ color: '#F9F2E1', fontFamily: '"Work Sans", sans-serif' }}
        > <br></br> <strong>
          Sobre nós </strong>
        </motion.h2>

        {/* balão bege envolvendo fotos + cards */}
        <div
          className="
            relative z-[5]
            -mx-4 md:mx-0
            px-8 sm:px-8 md:px-12
            pt-5 md:pt-10
            pb-12 md:pb-14
            rounded-[28px] md:rounded-[36px]
            overflow-hidden
          "
          style={{ backgroundColor: '#F9F2E1' }}
        >
          {/* “M” apenas no desktop */}
          <div className="hidden md:block absolute left-0 -top-24 pointer-events-none opacity-70" style={{ width: 432, height: 501 }}>
            <img src="/img/beneficios/M.png" alt="Marca / M" className="w-[302px] h-[301px] object-contain" />
          </div>

          {/* fotos dos funcionários */}
          <div className="relative z-[1]">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
              {teamPhotos.map((p, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.03 }}
                  className="w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full overflow-hidden shadow-md bg-white"
                  title={p.label}
                >
                  <a href={p.src} target="_blank" rel="noreferrer" className="block w-full h-full">
                    <img
                      src={p.src}
                      alt={p.label}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => { e.currentTarget.src = '/img/about/team-placeholder.jpg'; }}
                    />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* cards azuis */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-6 md:mt-10">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="p-6 md:p-8 rounded-[26px] md:rounded-2xl"
                style={{ backgroundColor: '#A0D3F1' }}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <img src={card.imgSrc} alt="" className="w-[52px] h-[52px] md:w-[70px] md:h-[70px] object-contain shrink-0" />
                  <div className="flex-1">
                    <h4
                      className="mb-2 md:mb-5 font-extrabold"
                      style={{ color: '#AC0039', fontFamily: '"Work Sans", sans-serif', fontSize: 22, lineHeight: 1.05 }}
                    >
                      {card.title}
                    </h4>
                    <p className="text-[12px] md:text-[15px] leading-[1.22] md:leading-[1.35]" style={{ color: '#222223', letterSpacing: '0.1px' }}>
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* fim do balão bege */}
      </div>
    </section>
  );
};

export default AboutUs;
