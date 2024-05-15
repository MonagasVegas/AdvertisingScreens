import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-header">
      <Link to="/home" className="text-link">
        Inicio
      </Link>
      <Link className="text-link">Contacto</Link>
      <Link className="text-link" to="/createScreen">
        Crear Screen
      </Link>
      <Link className="text-button" to="/">
        Sign off
      </Link>
    </div>
  );
};

export default Header;
