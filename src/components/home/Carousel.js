import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselData } from "../data/Data";
import { Link } from "react-router-dom";
import "../../css/Carousel.css"; // Importamos el CSS con las mejoras

export default function Carousel() {
  const sliderRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const next = () => sliderRef.current && sliderRef.current.slickNext();
  const previous = () => sliderRef.current && sliderRef.current.slickPrev();

  // Función para ajustar elementos enfocables
  const adjustFocusableElements = () => {
    // Todos los enlaces de slides ocultos => tabIndex -1 (no enfocables)
    document
      .querySelectorAll(".slick-slide[aria-hidden='true'] a, .slick-slide[aria-hidden='true'] button")
      .forEach((el) => {
        el.setAttribute("tabindex", "-1");
        el.setAttribute("aria-hidden", "true");
      });

    // Todos los enlaces de slides visibles => tabIndex 0 (enfocables)
    document
      .querySelectorAll(".slick-slide[aria-hidden='false'] a, .slick-slide[aria-hidden='false'] button")
      .forEach((el) => {
        el.setAttribute("tabindex", "0");
        el.removeAttribute("aria-hidden");
      });
  };

  // Efecto para inicializar y ajustar elementos después de que el slider esté listo
  useEffect(() => {
    if (sliderRef.current && !isInitialized) {
      // Pequeño retraso para asegurar que el slider esté completamente renderizado
      const timer = setTimeout(() => {
        adjustFocusableElements();
        setIsInitialized(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isInitialized]);

  const handleAfterChange = () => {
    adjustFocusableElements();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: handleAfterChange,
    // Evento cuando el slider se inicializa
    onInit: () => {
      setTimeout(adjustFocusableElements, 50);
    },
    // Evento cuando el slider se redimensiona
    onReInit: adjustFocusableElements
  };

  return (
    <section className="container-fluid p-0 mb-5" aria-label="Galería de imágenes de hotel">
      <div id="header-carousel" className="carousel slide">
        <Slider ref={sliderRef} {...settings}>
          {carouselData.map((val, index) => (
            <div className="carousel-item" key={index}>
              <img 
                className="w-100" 
                src={val.img} 
                alt={val.alt || val.title} 
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "700px" }}>
                  <h2 className="section-title text-white text-uppercase mb-3">
                    {val.subtitle}
                  </h2>
                  <p className="display-5 text-white mb-4">{val.title}</p>
                  <Link
                    to="/rooms"
                    className="btn btn-primary py-md-3 px-md-5 me-3"
                  >
                    {val.btn1}
                  </Link>
                  <Link
                    to="/booking"
                    className="btn btn-light py-md-3 px-md-5"
                  >
                    {val.btn2}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <button
          className="carousel-control-prev"
          type="button"
          onClick={previous}
          aria-label="Imagen anterior"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          onClick={next}
          aria-label="Imagen siguiente"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </section>
  );
}