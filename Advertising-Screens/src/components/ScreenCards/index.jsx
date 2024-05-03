import React, { useEffect, useState } from "react";
import "./index.css";
import SearchBar from "../Search";
import image from "../../assets/images/image.png";
import { getScreens } from "../../services/getScreens";
import Dialog from "@mui/material/Dialog";
import ScreenDetails from "../ScreenDetails";
import { isEmpty } from "lodash";

const ScreenCards = () => {
  const [screens, setScreens] = useState([]);
  const [open, setOpen] = useState(false);
  const [screenId, setScreenId] = useState();
  const [filterScreen, setFilterScreen] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  

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
    const id = event.currentTarget.id;
    setScreenId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    // Si no hay query de busqueda, se asignan todas las pantallas
    if (!searchQuery) {
      setFilterScreen(screens);
    }
    // Garantizando la busqueda en minusculas con el toLowerCase
    const newSearchQuery = searchQuery?.toLowerCase() || "";
    const newProduct = screens.filter(
      (screen) =>
        screen.name.toLowerCase().includes(newSearchQuery) ||
        screen.type.toLowerCase().includes(newSearchQuery)
    );
    setFilterScreen(newProduct);
  }, [searchQuery, screens]);

  return (
    <div>
      <div
        style={{
          width: "100%",
          paddingBottom: "5%",
        }}
      >
        <SearchBar onChange={handleSearchQuery} placeholder="Buscar" />
      </div>

      <div className="grid">
        {filterScreen.map((screen) => (
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
                <span className="text-title">Título:</span> &nbsp;
                <span className="text-color">{screen.name}</span>
              </div>
              <div className="content">
                <span className="text-title">Precio: </span> &nbsp;
                <span className="text-color">{screen.price_per_day}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!isEmpty(searchQuery) && isEmpty(filterScreen) && (
        <div className="error">
          <p style={{ fontSize: 20, paddingTop: 50}}>Búsqueda sin resultados.</p>
        </div>
      )}

      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <ScreenDetails screenId={screenId} setOpen={setOpen} />
      </Dialog>
    </div>
  );
};

export default ScreenCards;
