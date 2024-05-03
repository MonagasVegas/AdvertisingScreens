import React from "react";
import image from "../../assets/images/image.png";
import "./index.css";

const ScreenDetails = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        padding: "10px 10px 10px 10px",
        backgroundColor: "rgb(42, 48, 60, 0.2)"
      }}
    >
      <div style={{ width: "100%" }}>
        <img src={image} alt="" className="imagen" />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          paddingLeft: "10px",
        }}
      >
        <h3>Titulo de la pantalla</h3>
        <span>Descripción: </span>
        <div>
          <h3>Resolución de la pantalla</h3>
          <span>Ancho: </span>
          <span>Altura: </span>
        </div>
        <span>Precio</span>
      </div>
    </div>
  );
};

export default ScreenDetails;
