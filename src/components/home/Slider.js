import React from "react";
import { testimonial } from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Sliders() {
  const settings = {
    dots: true, // 👈 botones de navegación accesibles
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // Arrows gestionados fuera con aria-label si se necesitan
  };

  return (
    <section
      className="container-xxl testimonial my-5 py-5 bg-dark wow zoomIn"
      data-wow-delay="0.1s"
      aria-labelledby="testimonial-heading"
    >
      <div className="container">
        <h2
          id="testimonial-heading"
          className="text-center text-white mb-5"
        >
          Testimonios de clientes
        </h2>

        <Slider {...settings} aria-label="Carrusel de testimonios de clientes">
          {testimonial.map((item, key) => (
            <figure
              key={key}
              className="testimonial-item position-relative bg-white rounded overflow-hidden p-4"
            >
              {/* Cita del cliente */}
              <blockquote className="mb-3" aria-label="Opinión del cliente">
                <p>{item.description}</p>
              </blockquote>

              {/* Foto + datos */}
              <figcaption className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded"
                  src={item.img}
                  alt={`Foto de ${item.name}, ${item.profession}`}
                  style={{ width: "45px", height: "45px" }}
                />
                <div className="ps-3">
                  <h3 className="fw-bold mb-1 fs-6">{item.name}</h3>
                  <span>{item.profession}</span>
                </div>
              </figcaption>

              {/* Icono decorativo (oculto a screen readers) */}
              <span aria-hidden="true">{item.icon}</span>
            </figure>
          ))}
        </Slider>
      </div>
    </section>
  );
}