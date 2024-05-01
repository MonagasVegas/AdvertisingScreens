import React from "react";
import Header from "../Header";
import ScreenCards from "../ScreenCards";
import Carrusel from "../Carrusel";
import "./index.css";

const Home = () => {
  return (
    <>
      <div className="container-home">
        <Header />

        <div style={{ border: "1px solid #ff0000" }}>
          <h1 style={{ color: "#fff" }}>
            Consigue: <span>Más ventas</span>
          </h1>
        </div>

        <div style={{  width: '90%' }}>
          <Carrusel />
        </div>

        {/* <div>
          <ScreenCards />
        </div> */}
      </div>
    </>
  );
};

export default Home;
