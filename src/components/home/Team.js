import React from "react";
import { socialIcons, team } from "../data/Data";
import CommonHeading from "../common/CommonHeading";

export default function Teams() {
  return (
    <section className="container-xxl py-5" aria-labelledby="team-heading">
      <div className="container">
        
        {/* Encabezado principal de la sección */}
        <CommonHeading
          heading="Nuestro equipo"
          subtitle="Conoce a nuestro"
          title="Personal"
        />

        <div className="row g-4">
          {team.map((item, index) => (
            <article
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
              key={index}
            >
              <div className="rounded shadow overflow-hidden h-100">
                
                {/* Imagen accesible */}
                <div className="position-relative">
                  <img
                    className="img-fluid"
                    src={item.image}
                    alt={item.alt || `Foto de ${item.name}, ${item.designation}`}
                  />

                  {/* Redes sociales con nombres accesibles */}
                  <div
                    className="position-absolute start-50 top-100 translate-middle d-flex align-items-center"
                    aria-label={`Redes sociales de ${item.name}`}
                  >
                    {socialIcons.slice(0, 3).map((val, socialIndex) => (
                      <a
                        key={socialIndex}
                        className="btn btn-square btn-primary mx-1"
                        href={val.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Conectar con ${item.name} en ${val.name}`}
                      >
                        <span aria-hidden="true">{val.icon}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Texto accesible y jerarquía correcta */}
                <div className="text-center p-4 mt-3">
                  <h3
                    id={`team-member-${index}`}
                    className="fw-bold mb-0 fs-5"
                  >
                    {item.name}
                  </h3>
                  {/* FIX: mejor contraste con text-dark */}
                  <p className="mb-0 text-dark small">{item.designation}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}