import React from "react";
import CommonHeading from "../common/CommonHeading";
import { services } from "../data/Data";

export default function Services() {
  return (
    <section className="container-xxl py-5" aria-labelledby="services-heading">
      <div className="container">
        
        {/* Encabezado accesible */}
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <CommonHeading
            heading="Nuestros Servicios"
            title="Servicios"
            subtitle="Explora nuestros"
          />
        </div>

        {/* Lista de servicios */}
        <ul className="row g-4 list-unstyled mt-4" role="list">
          {services.map((item, index) => (
            <li
              key={index}
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <article
                className="service-item rounded p-3 h-100 border"
                aria-labelledby={`service-title-${index}`}
              >
                {/* Icono decorativo */}
                <div className="service-icon bg-transparent border rounded p-3 d-flex align-items-center justify-content-center mb-3">
                  <span aria-hidden="true">{item.icon}</span>
                </div>

                {/* Título del servicio */}
                <h3 id={`service-title-${index}`} className="fs-5 mb-3">
                  {item.name}
                </h3>

                {/* Descripción */}
                <p className="text-body mb-3">{item.description}</p>

                {/* Acción accesible */}
                <a
                  href={`/servicio/${item.id}`}
                  className="btn btn-primary"
                  aria-label={`Más información sobre ${item.name}`}
                >
                  Más información
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
