import React from "react";
import { Link } from "react-router-dom";

export default function Heading({ heading, title, subtitle }) {
  return (
    <header className="container-fluid page-header mb-5 p-0 bg-image">
      {/* Overlay oscuro para contraste accesible */}
      <div className="overlay"></div>
      
      <div className="container-fluid page-header-inner py-5 position-relative">
        <div className="container text-center pb-5">
          
          {/* Encabezado principal de la página */}
          <h1 
            className="display-3 text-white mb-3 animated slideInDown" 
            tabIndex="-1" 
            id="page-heading"
          >
            {heading}
          </h1>
          
          {/* Breadcrumb accesible */}
          <nav aria-label="Ruta de navegación">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <Link to="/">{title}</Link>
              </li>
              <li 
                className="breadcrumb-item active text-white" 
                aria-current="page"
              >
                {subtitle}
              </li>
            </ol>
          </nav>
          
        </div>
      </div>
    </header>
  );
}