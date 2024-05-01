import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
        <div className="container-header">
          <Link
            // to="/reviews"
            className="text-link"
          >
            Inicio
          </Link>
          <Link
            // to="/reviews"
            className="text-link"
          >
            Quienes Somos
          </Link>

          <Link
            // to="/billboard"
            className="text-link"
          >
            Servicios
          </Link>
          <Link
            className="text-button"
            // to="/ticket"
          >
            Agenda una reunión
          </Link>
        </div>
    </>
  );
};

export default Header;
