import React from "react";
import Heading from "../components/common/Heading";
import About from "../components/home/About";
import Team from "../components/home/Team";

export default function AboutUs() {
  return (
    <main id="main" role="main" aria-labelledby="page-heading">
      {/* 
        Heading ya maneja un <h1>,
        lo traducimos correctamente al español
      */}
      <Heading heading="Sobre nosotros" title="Inicio" subtitle="Sobre nosotros" />

      {/* Sección Sobre nosotros */}
      <About />

      {/* Sección Nuestro equipo */}
      <Team />
    </main>
  );
}