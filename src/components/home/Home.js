import React from "react";
import Carousel from "./Carousel";
import Book from "./Book";
import About from "./About";
import Services from "./Service";
import Rooms from "./Rooms";
import Sliders from "./Slider";
import Teams from "./Team";

export default function Home() {
  return (
    <main id="main" role="main" aria-labelledby="home-heading">
      
      {/* H1 principal de la página */}
      <h1 id="home-heading" className="visually-hidden">
        DAB - Página principal
      </h1>

      {/* Cada bloque se marca como sección */}
      <section aria-label="Galería destacada">
        <Carousel />
      </section>

      <section aria-label="Formulario de reserva">
        <Book />
      </section>

      <section aria-label="Sobre nosotros">
        <About />
      </section>

      <section aria-label="Habitaciones destacadas">
        <Rooms />
      </section>

      <section aria-label="Servicios ofrecidos">
        <Services />
      </section>

      <section aria-label="Testimonios de clientes">
        <Sliders />
      </section>

      <section aria-label="Nuestro equipo">
        <Teams />
      </section>

    </main>
  );
}
