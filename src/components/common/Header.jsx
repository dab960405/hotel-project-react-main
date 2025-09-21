import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navList } from "../data/Data";
import SocialIcons from "./SocialIcons";

export default function Header() {
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const handleMouseEnter = (itemId) => setActiveDropdown(itemId);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <header>
      <div className="container-fluid bg-dark px-0">
        <div className="row gx-0">
          
          {/* Logo del hotel */}
          <div className="col-lg-3 bg-dark d-none d-lg-flex align-items-center justify-content-center">
            <Link to="/" className="navbar-brand" aria-label="Ir a la página de inicio">
              <img
                src="../assets/img/logo.webp"
                alt="Logo del Hotel"
                className="img-fluid"
                style={{ maxHeight: "60px" }}
              />
            </Link>
          </div>


          <div className="col-lg-9">
            
            <nav 
              className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0" 
              role="navigation" 
              aria-label="Menú principal"
            >

              {/* Logo móvil */}
              <Link
                to="/"
                className="navbar-brand d-block d-lg-none"
                aria-label="Ir a la página de inicio"
              >
                <img
                  src="../assets/img/logo.webp"
                  alt="Logo del Hotel"
                  className="img-fluid"
                  style={{ maxHeight: "50px" }}
                />
              </Link>


              {/* Botón hamburgesa accesible */}
              <button
                type="button"
                className="navbar-toggler"
                aria-controls="navbarSupportedContent"
                aria-expanded={navbarCollapse ? "true" : "false"}
                aria-label="Abrir menú de navegación"
                onClick={() => setNavbarCollapse(!navbarCollapse)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Contenedor de items */}
              <div
                id="navbarSupportedContent"
                className={
                  navbarCollapse
                    ? "navbar-collapse justify-content-around show"
                    : "collapse navbar-collapse justify-content-around"
                }
              >
                <ul className="navbar-nav mr-auto py-0">
                  {navList.map((item, index) => (
                    <li className="nav-item" key={index}>
                      
                      {/* Si tiene dropdown */}
                      {item.subItems ? (
                        <div
                          className="dropdown"
                          onMouseEnter={() => handleMouseEnter(item.id)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <button
                            className="nav-link dropdown-toggle btn btn-link"
                            id={`dropdown-${item.id}`}
                            aria-haspopup="true"
                            aria-expanded={activeDropdown === item.id}
                            aria-controls={`menu-${item.id}`}
                          >
                            {item.text}
                          </button>

                          <div
                            id={`menu-${item.id}`}
                            className={`dropdown-menu rounded-0 m-0 ${activeDropdown === item.id ? "show" : ""}`}
                            role="menu"
                            aria-labelledby={`dropdown-${item.id}`}
                          >
                            {item.subItems.map((sub, subIndex) => (
                              <Link 
                                key={subIndex}
                                to={sub.path} 
                                className="dropdown-item"
                                role="menuitem"
                                aria-current={location.pathname === sub.path ? "page" : undefined}
                              >
                                {sub.text}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          className="nav-link"
                          aria-current={location.pathname === item.path ? "page" : undefined}
                        >
                          {item.text}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
                <SocialIcons />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
