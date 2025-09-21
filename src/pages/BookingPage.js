import React from "react";
import Heading from "../components/common/Heading";

export default function Booking() {
  return (
    <main id="main" role="main" aria-labelledby="booking-heading">
      {/* Encabezado principal */}
      <Heading heading="Reservas" title="Inicio" subtitle="Reservas" />

      {/* Formulario accesible */}
      <section className="container py-5" aria-labelledby="form-heading">
        <h2 id="form-heading" className="mb-4">
          Reserva tu habitación
        </h2>

        <form aria-describedby="form-description">
          <p id="form-description" className="visually-hidden">
            Formulario para seleccionar fechas, cantidad de personas y confirmar tu reserva.
          </p>

          {/* Nombre */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              required
            />
          </div>

          {/* Fechas */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="checkin" className="form-label">
                Fecha de entrada
              </label>
              <input
                type="date"
                id="checkin"
                name="checkin"
                className="form-control"
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="checkout" className="form-label">
                Fecha de salida
              </label>
              <input
                type="date"
                id="checkout"
                name="checkout"
                className="form-control"
                required
              />
            </div>
          </div>

          {/* Adultos / Niños */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="adults" className="form-label">
                Adultos
              </label>
              <select id="adults" name="adults" className="form-select">
                <option value="1">1 Adulto</option>
                <option value="2">2 Adultos</option>
                <option value="3">3 Adultos</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="children" className="form-label">
                Niños
              </label>
              <select id="children" name="children" className="form-select">
                <option value="0">0 Niños</option>
                <option value="1">1 Niño</option>
                <option value="2">2 Niños</option>
                <option value="3">3 Niños</option>
              </select>
            </div>
          </div>

          {/* Botón Submit */}
          <button
            type="submit"
            className="btn btn-primary"
            aria-label="Confirmar reserva"
          >
            Confirmar reserva
          </button>
        </form>
      </section>
    </main>
  );
}