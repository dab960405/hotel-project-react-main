import { Link } from "react-router-dom";
import { footerContact, footerItem, socialIcons } from "../data/Data";
import Newsletter from "../home/Newsletter";

export default function Footer() {
  return (
    <>
      <Newsletter />
      
      <footer
        className="container-fluid bg-dark text-light footer wow fadeIn"
        data-wow-delay="0.1s"
        role="contentinfo"
      >
        <div className="container pb-5">
          <div className="row g-5">

            <div className="col-md-6 col-lg-4">
              <div className="bg-primary rounded p-4">
                <Link to="/" aria-label="Ir a la página de inicio">
                  <h2 className="text-white text-uppercase mb-3">DAB</h2>
                </Link>
                <p className="text-white mb-0">
                  En Hotel DAB cada detalle está pensado para tu comodidad. Ofrecemos un ambiente acogedor, moderno y elegante en el centro de la ciudad. Queremos que cada visita se convierta en una experiencia única y memorable.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <h3 className="section-title text-start text-primary text-uppercase mb-4">
                Contacto
              </h3>
              <address>
                {footerContact.map((val, index) => (
                  <p className="mb-2" key={index}>
                    <span aria-hidden="true">{val.icon}</span>
                    <span className="visually-hidden">{val.label}</span>
                    {val.name}
                  </p>
                ))}
              </address>

              {/* Redes sociales con texto accesible */}
              <div className="d-flex pt-2" aria-label="Redes sociales">
                {socialIcons.slice(0, 4).map((val, index) => (
                  <a
                    key={index}
                    className="btn btn-outline-light btn-social"
                    href={val.href}
                    aria-label={`Síguenos en ${val.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {val.icon}
                    <span className="visually-hidden">Síguenos en {val.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <div className="row gy-5 g-4">
                {footerItem.map((section, sectionIndex) => (
                  <div className="col-md-6" key={sectionIndex}>
                    <h3 className="section-title text-start text-primary text-uppercase mb-4">
                      {section.header}
                    </h3>
                    <nav aria-label={`Enlaces de ${section.header}`}>
                      <ul className="list-unstyled">
                        {section.UnitItem.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link to={item.href} className="btn btn-link">
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}