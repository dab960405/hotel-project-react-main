import React from "react";
import { socialIcons } from "../data/Data";

export default function SocialIcons() {
  return (
    <div className="col-lg-3 px-5">
      <nav aria-label="Redes sociales">
        <ul className="d-inline-flex align-items-center py-2 list-unstyled m-0">
          {socialIcons.map((val, index) => (
            <li key={index} className="me-3">
              <a
                href={val.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ir al perfil de ${val.name} (abre en nueva pestaña)`}
              >
                {/* El ícono se marca decorativo */}
                <span aria-hidden="true">{val.icon}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}