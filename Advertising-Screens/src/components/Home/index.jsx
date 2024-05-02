import React from "react";
import Header from "../Header";
import ScreenCards from "../ScreenCards";
import Carrusel from "../Carrusel";
import "./index.css";

const Home = () => {
  return (
    <>
      <div className="container-home">
        <div >
        <Header />
        </div>

        <div style={{ border: "1px solid #ff0000", paddingTop: '10%' }}>
          <h1 style={{ color: "#fff" }}>
            Consigue: <span>Más ventas</span>
          </h1>
        </div>

        <div style={{ paddingTop: '5%' }}>
          <ScreenCards />
        </div>
        <div style={{  width: '50%', paddingTop: '10%', paddingBottom: '10%' }}>
          <Carrusel />
        </div>

      </div>
    </>
  );
};

export default Home;
