import React, { useEffect, useState } from "react";
import image from "../../assets/images/image.png";
import "./index.css";
import { getScreensById } from "../../services/getScreensById";

const ScreenDetails = ({ screenId }) => {
  const [response, setResponse] = useState();
  console.log("🐉 ~ ScreenDetails ~ response:", response);

  useEffect(() => {
    const token = window.localStorage.getItem("@token");
    getScreensById(screenId, token)
      .then((data) => {
        console.log("SUCES");
        setResponse(data.data);
      })
      .catch((error) => {
        console.log("🐉 ~ useEffect ~ error:", error);
      });
  }, [screenId]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "10px 10px 10px 10px",
        background: "linear-gradient(to left, #554F95 20%, #b30ac6 100%)",
      }}
    >
      <div style={{ width: "100%" }}>
        <img src={response?.picture_url || image} alt="" className="imagen" />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          paddingLeft: "10px",
        }}
      >
        <h3>{response?.name}</h3>
        <span className="text-detail">{response?.description}</span>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3 style={{ marginBottom: "5px" }}>Resolución de la pantalla</h3>
          <span className="text-detail">
            Ancho: {response?.resolution_width}
          </span>
          <span className="text-detail">
            Largo: {response?.resolution_height}
          </span>
        </div>
        <div>
          <h3 style={{ marginBottom: "5px" }}>Tipo</h3>
          <span className="text-detail">
            {response?.type === "indoor" ? "Interior" : "Exterior"}
          </span>
        </div>
        <div>
          <h3 style={{ marginBottom: "5px" }}>Precio:</h3>
          <span className="text-detail">{response?.price_per_day}U$D</span>
        </div>
      </div>
    </div>
  );
};

export default ScreenDetails;
