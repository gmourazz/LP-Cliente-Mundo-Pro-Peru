// src/App.jsx
import React from "react";

import Header from "./components/header";
import Hero from "./components/hero";
import Benefits from "./components/benefits";
import TravelPackage from "./components/travelPackage";
import ImpactSection from "./components/impactSection";
import Pricing from "./components/pricing";
import FAQ from "./components/faq";
import AboutUs from "./components/aboutUs";
import Gallery from "./components/gallery";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";

// ATENÇÃO: o arquivo deve ser src/components/scrollToTopButton.jsx
import ScrollToTopButton from "./components/scrollToTopButton";

import FloatingWpp from "./components/floatingWhatsApp";

export default function App() {
  const wppPhone = "5554991831562";
  const wppMsg =
    "Olá! Estou navegando na página da viagem para o Peru e gostaria de tirar uma dúvida!";

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <TravelPackage />
        <ImpactSection />
        <Pricing />
        <FAQ />
        <AboutUs />
        <Gallery />
        <Testimonials />
      </main>

      <Footer />

      {/* Setinha (cor #A0D3F1 no componente). 
         Aparece após 80px de rolagem e fica acima do WhatsApp. */}
      <ScrollToTopButton showAfter={80} bottom={8} right={32} size={45} />

      {/* WhatsApp flutuante */}
      <FloatingWpp
        phone={wppPhone}
        message={wppMsg}
        imageSrc="/img/logowpp.png"
        // Desktop
        size={58}
        right={24}
        bottom={28}
        safeBottomBump={32}
        imageScale={1.15}
        imageShiftX={0}
        imageShiftY={-2}
        // Mobile
        mobileSize={50}
        mobileRight={5}
        mobileBottom={6}
        mobileSafeBottomBump={60}
        mobileImageScale={1.05}
        mobileImageShiftX={0}
        mobileImageShiftY={-2}
      />
    </div>
  );
}
