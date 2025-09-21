import React from "react";
import Heading from "../components/common/Heading";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <main id="main" role="main" aria-labelledby="error-heading">
      {/* Encabezado principal */}
      <Heading
        heading="Página no encontrada"
        title="Inicio"
        subtitle="Error 404"
      />

      {/* Contenido de error */}
      <section className="container py-5 text-center" role="alert" aria-live="assertive">
        <h1 id="error-heading" className="mb-4">
          Error 404 – Página no encontrada
        </h1>
        <p className="mb-4">
          Lo sentimos, la página que buscas no existe o fue movida.
        </p>

        {/* Botón volver al home */}
        <Link to="/" className="btn btn-primary px-4 py-2">
          Volver al inicio
        </Link>
      </section>
    </main>
  );
}