import React from "react";
import Header from "../Header";
import ScreenCards from "../ScreenCards";
import Carrusel from "../Carrusel";
import "./index.css";

const Home = () => {
  return (
    <>
      <div>
        <div style={{ marginTop: "10px" }}>
          <Header />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "50px",
            gap: "10px",
          }}
        >
          <span style={{ color: "#fff", fontSize: "30px", fontWeight: "bold", textAlign: "center"  }}>
            En el mundo competitivo de la publicidad, la tecnología es tu mejor
            aliada
          </span>
          <span
            style={{ color: "#554F95", fontSize: "30px", fontWeight: "bold", textAlign: "center"  }}
          >
            Domínala, adáptate y destaca entre la multitud.
          </span>
          <span style={{ color: "#fff", fontSize: "30px", fontWeight: "bold", textAlign: "center"  }}>
            ¡El éxito está a tu alcance!
          </span>
        </div>

        <div style={{ paddingTop: "5%" }}>
          <ScreenCards />
        </div>
        <br />
        <br />
        <br />
        <br />
        <div>
          <Carrusel />
        </div>
      </div>
    </>
  );
};

export default Home;
