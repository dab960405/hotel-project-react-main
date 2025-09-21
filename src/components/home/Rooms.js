import React from "react";
import CommonHeading from "../common/CommonHeading";
import { facility, roomItems } from "../data/Data";
import { Link } from "react-router-dom";

export default function Rooms() {
  return (
    <section className="container-xxl py-5" aria-labelledby="rooms-heading">
      <div className="container">
        
        {/* Encabezado común */}
        <CommonHeading
          heading="Nuestras Habitaciones"
          title="Habitaciones"
          subtitle="Explora nuestras"
        />

        <div className="row g-4">
          {roomItems.map((item, key) => (
            <article
              key={key}
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="room-item shadow rounded overflow-hidden">
                
                {/* Imagen con alt accesible */}
                <div className="position-relative">
                  <img 
                    className="img-fluid" 
                    src={item.img} 
                    alt={item.alt || `Habitación ${item.name}`} 
                  />
                  {/* FIX: contraste de precio → texto oscuro sobre fondo claro accesible */}
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-light text-dark rounded py-1 px-3 ms-4 fw-bold">
                    {item.price}
                  </small>
                </div>

                {/* Contenido de la card */}
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    
                    {/* Nombre con heading */}
                    <h3 id={`room-title-${key}`} className="mb-0 fs-5">
                      {item.name}
                    </h3>

                    {/* Rating accesible */}
                    <div className="ps-2" aria-label={`${item.rating} estrellas`}>
                      {"★".repeat(item.rating)}
                    </div>
                  </div>

                  {/* Facilities */}
                  <ul className="d-flex mb-3 list-unstyled">
                    {facility.map((fac, index) => (
                      <li key={index} className="border-end me-3 pe-3">
                        <span aria-hidden="true">{fac.icon}</span>
                        {fac.quantity && <span>{fac.quantity} </span>}
                        {fac.facility}
                      </li>
                    ))}
                  </ul>

                  {/* Descripción */}
                  <p className="text-body mb-3">{item.description}</p>

                  {/* Botones de acción accesibles */}
                  <div className="d-flex justify-content-between">
                    <Link
                      className="btn btn-sm btn-primary rounded py-2 px-4"
                      to={`/rooms/${key}`}
                    >
                      {item.yellowbtn}
                    </Link>
                    <Link
                      className="btn btn-sm btn-dark rounded py-2 px-4"
                      to="/booking"
                    >
                      {item.darkbtn}
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}