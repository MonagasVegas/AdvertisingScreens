import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
        <div className="container-header">
          <Link
            to="/home"
            className="text-link"
          >
            Inicio
          </Link>
          <Link
            // to="/reviews"
            className="text-link"
          >
            Contacto
          </Link>
          <Link
            // to="/reviews"
            className="text-link"
          >
            Quienes Somos
          </Link>

          <Link
            className="text-button"
             to="/createScreen"
          >
            Crear Screen
          </Link>
        </div>
  );
};

export default Header;
