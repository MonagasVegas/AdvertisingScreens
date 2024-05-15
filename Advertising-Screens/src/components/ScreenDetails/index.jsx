import React, { useEffect, useState } from "react";
import image from "../../assets/images/image.png";
import "./index.css";
import { getScreensById } from "../../services/getScreensById";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@mui/material";
import ModalDelete from "../ModalDelete";

// eslint-disable-next-line react/prop-types
const ScreenDetails = ({ screenId, setOpen, setFilterScreen }) => {
  const [response, setResponse] = useState();
  const [openDelete, setOpenDelete] = useState(false);
  const navigate = useNavigate();
  const token = window.localStorage.getItem("@token");

  useEffect(() => {
    getScreensById(screenId, token)
      .then((data) => {
        setResponse(data.data);
      })
      .catch((error) => {
        console.log("🐉 ~ useEffect ~ error:", error);
      });
  }, [screenId, token]);


  const handleEdit = () => {
    navigate("/editScreen", { state: { response } });
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

const openModal = () => {
  console.log('esto es abrir modal eliminar')
  setOpenDelete(true)
}

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px 10px 10px 10px",
        background: "linear-gradient(to left, #8d9bb7 20%, #7a7a7a 100%)",
      }}
    >
      <div
        style={{
          padding: "10px 10px 10px 10px",
          display: "flex",
          flexDirection: "row",
          
        }}
      >
        <div style={{ width: "100%",  display: 'flex',  }}>
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
              background: "rgb(122, 122, 122, 0.2)",
              border: "2px solid #91c870",
              padding: "8px 8px 8px 8px",
              fontWeight: "bold",
              color: "#000",
              cursor: "pointer",
            }}
            onClick={openModal}
          >
            Eliminar
          </button>
        </div>

        <div style={{ width: "50%" }}>
          <button
            style={{
              background: "rgb(122, 122, 122, 0.2)",
              width: "100%",
              borderRadius: "5px",
              border: "2px solid #91c870",
              padding: "8px 8px 8px 8px",
              fontWeight: "bold",
              color: "#000",
              cursor: "pointer",
            }}
            onClick={handleEdit}
          >
            Editar
          </button>
        </div>
      </div>

      <Dialog
        fullWidth
        maxWidth='sm'
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="responsive-dialog-title"
      >
        <ModalDelete 
        setOpenDelete={setOpenDelete}
        setFilterScreen={setFilterScreen}
        screenId={screenId}
        setOpen={setOpen}
 />
      </Dialog>
    </div>
  );
};

export default ScreenDetails;
