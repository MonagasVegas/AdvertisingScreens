import React from "react";
import Header from "../Header";
import ScreenCards from "../ScreenCards";
import Carrusel from "../Carrusel";
import "./index.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <div>
          <Header />
        </div>

        <div>
          <ScreenCards />
        </div>

        <div>
          <Carrusel />
        </div>
      </div>
    </>
  );
};

export default Home;
