import React from "react";
import Heading from "../components/common/Heading";
import Rooms from "../components/home/Rooms";

export default function Room() {
  return (
    <main id="main" role="main" aria-labelledby="rooms-heading">
      {/* Encabezado principal de la página */}
      <Heading 
        heading="Habitaciones" 
        title="Inicio" 
        subtitle="Habitaciones" 
      />

      {/* Listado de habitaciones */}
      <Rooms />
    </main>
  );
}