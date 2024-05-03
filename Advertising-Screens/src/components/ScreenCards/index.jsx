import React, { useEffect, useState } from "react";
import "./index.css";
import SearchBar from "../Search";
import image from "../../assets/images/image.png";
import { getScreens } from "../../services/getScreens";
import Dialog from "@mui/material/Dialog";
import ScreenDetails from "../ScreenDetails";

const ScreenCards = () => {
  const [screens, setScreens] = useState([]);
  const [open, setOpen] = useState(false);
  const [screenId, setScreenId] = useState();

  console.log("🐉 ~ ScreenCards ~ screens:", screens);

  useEffect(() => {
    const token = window.localStorage.getItem("@token");
    const pageSize = 3;
    const offset = 1;

    getScreens(pageSize, offset, token)
      .then(({ data: { data: data } }) => {
        setScreens(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Capturamos el id de lo seleccionado
  const handleDetail = (event) => {
    console.log("AQUIII:", event.currentTarget.id);
    const id = event.currentTarget.id;
    setScreenId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div
        style={{
          width: "100%",
          paddingBottom: "5%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SearchBar placeholder="Buscar" />
      </div>

      <div className="grid">
        {screens.map((screen) => (
          <div
            key={screen.id}
            className="container-card"
            onClick={handleDetail}
            id={screen.id}
          >
            <div style={{ justifyContent: "center", display: "flex" }}>
              <img className="imga" src={screen.picture_url || image} alt="" />
            </div>

            <div className="box">
              <div className="content">
                <span className="text-color">Título:</span>
                <span className="text-color">{screen.name}</span>
              </div>
              <div className="content">
                <span className="text-color">Idioma:</span>
                <span className="text-color">{screen.price_per_day}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >        
        <ScreenDetails screenId={screenId} />
      </Dialog>
    </div>
  );
};

export default ScreenCards;
