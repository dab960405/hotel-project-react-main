import React from "react";

export default function Book() {
  return (
    <section
      className="container-fluid booking pb-5 wow fadeIn"
      data-wow-delay="0.1s"
      aria-labelledby="booking-heading"
    >
      <div className="container">
        
        <div className="bg-white shadow p-4">
          <h2 id="booking-heading" className="visually-hidden">
            Formulario de reserva
          </h2>

          <form aria-describedby="booking-help">
            <div className="row g-2 align-items-end">

              {/* Fecha Check-in */}
              <div className="col-md-3">
                <label htmlFor="checkin" className="form-label">
                  Fecha de ingreso
                </label>
                <input
                  type="date"
                  id="checkin"
                  name="checkin"
                  className="form-control"
                  required
                />
              </div>

              {/* Fecha Check-out */}
              <div className="col-md-3">
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

              {/* Adultos */}
              <div className="col-md-3">
                <label htmlFor="adults" className="form-label">
                  Adultos
                </label>
                <select id="adults" name="adults" className="form-select">
                  <option value="1">1 Adulto</option>
                  <option value="2">2 Adultos</option>
                  <option value="3">3 Adultos</option>
                </select>
              </div>

              {/* Niños */}
              <div className="col-md-3">
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

              {/* Botón Submit */}
              <div className="col-md-12 mt-3 text-end">
                <button 
                  type="submit" 
                  className="btn btn-primary w-100"
                >
                  Buscar disponibilidad
                </button>
              </div>

            </div>
            <p id="booking-help" className="visually-hidden">
              Selecciona fechas de ingreso y salida, cantidad de adultos y niños, luego presiona el botón para buscar disponibilidad.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}