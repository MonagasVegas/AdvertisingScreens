import React from "react";
import Header from "../Header";
import ScreenCards from "../ScreenCards";
import Carrusel from "../Carrusel";
import "./index.css";

const Home = () => {
  return (
    <>
      <div className="container-home">
        <div style={{ marginTop: "10px" }}>
          <Header />
        </div>

        <div style={{ paddingTop: "5%" }}>
          <ScreenCards />
        </div>
        <div style={{ width: "50%", paddingTop: "10%", paddingBottom: "10%" }}>
          <Carrusel />
        </div>
      </div>
    </>
  );
};

export default Home;
