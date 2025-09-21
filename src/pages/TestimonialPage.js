import React from "react";
import Heading from "../components/common/Heading";
import Sliders from "../components/home/Slider";

export default function Testimonial() {
  return (
    <main id="main" role="main" aria-labelledby="testimonials-heading">
      {/* Encabezado principal de la página */}
      <Heading heading="Testimonios" title="Inicio" subtitle="Testimonios" />

      {/* Slider de testimonios */}
      <Sliders />
    </main>
  );
}