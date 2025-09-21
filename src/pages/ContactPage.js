import React from "react";
import Heading from "../components/common/Heading";
import CommonHeading from "../components/common/CommonHeading";
import { contact } from "../components/data/Data";

export default function Contact() {
  return (
    <main id="main" role="main" aria-labelledby="page-heading">
      {/* Encabezado principal de la página */}
      <Heading heading="Contacto" title="Inicio" subtitle="Contacto" />

      <section className="container-xxl py-5" aria-labelledby="contact-heading">
        <div className="container">
          <CommonHeading
            heading="Contáctanos"
            subtitle="Escríbenos"
            title="para cualquier consulta"
          />

          <div className="row g-4">
            {/* Datos de contacto */}
            <div className="col-12">
              <div className="row gy-4">
                {contact.map((item, index) => (
                  <div className="col-md-4" key={index}>
                    <h3 className="section-title text-start text-primary text-uppercase fs-6">
                      {item.title}
                    </h3>
                    <p>
                      <span aria-hidden="true">{item.icon}</span>
                      <a href={`mailto:${item.email}`} className="ms-2">
                        {item.email}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mapa */}
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <iframe
                title="Mapa de ubicación del hotel en Nueva York, USA"
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!...."
                style={{ minHeight: "350px", border: "0" }}
                loading="lazy"
              ></iframe>
            </div>

            {/* Formulario de contacto */}
            <div className="col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <form aria-describedby="contact-form-desc">
                  <p id="contact-form-desc" className="visually-hidden">
                    Todos los campos son obligatorios. Ingrese su nombre, correo, 
                    asunto y mensaje, luego presione enviar.
                  </p>

                  <div className="row g-3">
                    {/* Nombre */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Tu nombre"
                          required
                        />
                        <label htmlFor="name">Tu nombre</label>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Tu correo electrónico"
                          required
                        />
                        <label htmlFor="email">Tu correo electrónico</label>
                      </div>
                    </div>

                    {/* Asunto */}
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Asunto"
                          required
                        />
                        <label htmlFor="subject">Asunto</label>
                      </div>
                    </div>

                    {/* Mensaje */}
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          id="message"
                          placeholder="Deja tu mensaje aquí"
                          style={{ height: "150px" }}
                          required
                        ></textarea>
                        <label htmlFor="message">Mensaje</label>
                      </div>
                    </div>

                    {/* Botón */}
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Enviar mensaje
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
