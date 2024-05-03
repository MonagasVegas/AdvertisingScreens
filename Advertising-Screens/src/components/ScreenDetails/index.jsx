import React, { useEffect, useState } from "react";
import image from "../../assets/images/image.png";
import "./index.css";
import { getScreensById } from "../../services/getScreensById";
import { Link } from "react-router-dom";
import { deleteScreen } from "../../services/deleteScreen";

// eslint-disable-next-line react/prop-types
const ScreenDetails = ({ screenId, setOpen }) => {
  const [response, setResponse] = useState();
  console.log("🐉 ~ ScreenDetails ~ response:", response);
  const token = window.localStorage.getItem("@token");

  useEffect(() => {
    getScreensById(screenId, token)
      .then((data) => {
        console.log("SUCES");
        setResponse(data.data);
      })
      .catch((error) => {
        console.log("🐉 ~ useEffect ~ error:", error);
      });
  }, [screenId, token]);

  const handleDetele = () => {
    deleteScreen(screenId, token)
      .then((data) => {
        console.log("🐉 ~ .then ~ data:", data.data)
        setOpen(false)
      })
      .catch((error) => {
        console.log("🐉 ~ .then ~ error:", error);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px 10px 10px 10px",
        background: "linear-gradient(to left, #554F95 20%, #b30ac6 100%)",
      }}
    >
      <div
        style={{
          padding: "10px 10px 10px 10px",
          display: "flex",
          flexDirection: "row",
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

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          width: "100%",
          paddingTop: "10px",
          paddingBottom: "8px",
        }}
      >
        <div style={{ width: "50%" }}>
          <button
            style={{
              width: "100%",
              borderRadius: "5px",
              background: "rgb(179, 10, 198, 0.2)",
              border: "2px solid #91c870",
              padding: "8px 8px 8px 8px",
              fontWeight: "bold",
              color: "#fff",
            }}
            type="submit"
            onClick={handleDetele}
          >
            Eliminar
          </button>
        </div>

        <div style={{ width: "50%" }}>
          <button
            style={{
              background: "#554F95",
              width: "100%",
              borderRadius: "5px",
              border: "2px solid #91c870",
              padding: "8px 8px 8px 8px",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScreenDetails;
