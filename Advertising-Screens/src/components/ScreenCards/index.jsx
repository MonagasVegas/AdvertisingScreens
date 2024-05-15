import React, { useEffect, useState } from "react";
import "./index.css";
import SearchBar from "../Search";
import image from "../../assets/images/image.png";
import { getScreens } from "../../services/getScreens";
import Dialog from "@mui/material/Dialog";
import ScreenDetails from "../ScreenDetails";
import { isEmpty } from "lodash";
import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPagination = styled(Pagination)(() => ({
  "& .MuiPaginationItem-root": {
    color: "#fff", // Números en blanco
    border: "1px solid #554F95", // Bordes morados
    backgroundColor: "transparent", // Fondo transparente
    "&:hover": {
      backgroundColor: "#554F95", // Fondo morado en el hover
      color: "#fff", // Números en blanco en el hover
    },
    "&.Mui-selected": {
      backgroundColor: "#554F95", // Fondo morado en el número seleccionado
      color: "#fff", // Número seleccionado en blanco
      "&:hover": {
        backgroundColor: "#554F95", // Fondo morado en el hover del número seleccionado
        color: "#fff", // Número seleccionado en blanco en el hover
      },
    },
  },
}));

const ScreenCards = () => {
  const [screens, setScreens] = useState([]);
  const [open, setOpen] = useState(false);
  const [screenId, setScreenId] = useState();
  const [filterScreen, setFilterScreen] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const token = window.localStorage.getItem("@token");
    const offset = 1;

    getScreens(page, offset, token)
      .then(({ data: { data: data } }) => {
        setScreens(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

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
          <p style={{ fontSize: 20}}>
            Búsqueda sin resultados.
          </p>
        </div>
      )}

      <br />
      <br />
      <br />
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <StyledPagination
          variant="outlined"
          color="primary"
          count={10}
          page={page}
          onChange={handleChange}
          size="large"
        />
      </Box>

      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <ScreenDetails
          screenId={screenId}
          setOpen={setOpen}
          setFilterScreen={setFilterScreen}
        />
      </Dialog>
    </div>
  );
};

export default ScreenCards;
