import React from "react";
import Heading from "../components/common/Heading";
import Teams from "../components/home/Team";

export default function Team() {
  return (
    <main id="main" role="main" aria-labelledby="team-heading">
      {/* Encabezado principal de la página */}
      <Heading heading="Nuestro equipo" title="Inicio" subtitle="Equipo" />

      {/* Sección con listado del staff */}
      <Teams />
    </main>
  );
}