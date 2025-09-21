import React from "react";
import { Link } from "react-router-dom";
import { about } from "../data/Data";

export default function About() {
  return (
    <section className="container-xxl py-5" aria-labelledby="about-heading">
      <div className="container">
        <div className="row g-5 align-items-center">

          {/* SECCIÓN DE TEXTO */}
          <div className="col-lg-6">
            <h2 id="about-heading" className="section-title text-start text-primary text-uppercase">
              Sobre Nosotros
            </h2>
            <h3 className="mb-4">
              Bienvenido a{" "}
              <span className="text-primary text-uppercase">dab</span>
            </h3>

            <p className="mb-4">
              En Hotel DAB nos apasiona ofrecer más que una estadía: brindamos experiencias memorables con calidez y atención personalizada.
Ubicados en el corazón de la ciudad, fusionamos confort moderno con el encanto local para que cada visita sea única.
Nuestro compromiso es que cada huésped se sienta como en casa, disfrutando de un ambiente auténtico, elegante y acogedor.
            </p>

            {/* MÉTRICAS */}
            <div className="row g-3 pb-4" role="list">
              {about.map((item, key) => (
                <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s" key={key} role="listitem">
                  <div className="border rounded p-1">
                    <div className="border rounded text-center p-4">
                      
                      {/* Ícono como decorativo */}
                      <span aria-hidden="true">{item.icon}</span>
                      
                      {/* Contador como heading de nivel bajo */}
                      <h4 className="mb-1" data-toggle="counter-up">
                        {item.count}
                      </h4>
                      <p className="mb-0">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* BOTÓN/ENLACE ACCESIBLE */}
            <Link className="btn btn-primary py-3 px-5 mt-2" to="/about">
              Conocer más
            </Link>
          </div>

          {/* SECCIÓN DE IMÁGENES */}
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.1s"
                  src="/assets/img/about-1.jpg"
                  alt="Vista exterior del hotel al atardecer"
                  style={{ marginTop: "25%" }}
                />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-100 wow zoomIn"
                  data-wow-delay="0.3s"
                  src="/assets/img/about-2.jpg"
                  alt="Piscina iluminada junto al área de descanso"
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-50 wow zoomIn"
                  data-wow-delay="0.5s"
                  src="/assets/img/about-3.jpg"
                  alt="Habitación de lujo con cama king y decoración moderna"
                />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.7s"
                  src="/assets/img/about-4.jpg"
                  alt="Comedor elegante preparado para desayuno buffet"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}